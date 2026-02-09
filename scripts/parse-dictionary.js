#!/usr/bin/env node

/**
 * Script to parse the Urum dictionary from Google Sheets into JSON
 *
 * Usage:
 *   node scripts/parse-dictionary.js
 *
 * The Google Sheet must be published to the web as CSV for this to work.
 * Go to: File > Share > Publish to web > Select "Comma-separated values (.csv)"
 *
 * Alternatively, you can export the sheet as CSV and place it in scripts/dictionary.csv
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// Google Sheets ID from the URL
const SHEET_ID = "1DRomX8f2oxBIVpvygpySyGQ8UZf1UBXb7B8DYFfZSdg";

// Sheet names (tabs) to fetch from
// Use `gid` when the gviz/tq endpoint doesn't return correct data for a sheet
const SHEETS = [
  { name: "Эталонный словарь", label: "Standard Dictionary" },
  { name: "Рабочий словарь", label: "Working Dictionary", gid: "1176528049" },
];

// Build CSV URL for a sheet — uses gid-based export if available, otherwise gviz by name
function buildCSVUrl(sheet) {
  if (sheet.gid) {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${sheet.gid}`;
  }
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    sheet.name
  )}`;
}

// Output path
const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "lib",
  "data",
  "dictionary.json"
);

/**
 * Fetch CSV from Google Sheets
 */
function fetchCSV(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        // Handle redirects
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          return fetchCSV(res.headers.location).then(resolve).catch(reject);
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch: HTTP ${res.statusCode}`));
          return;
        }

        let data = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(data));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

/**
 * Parse CSV content into array of rows
 * Handles quoted fields with commas inside
 */
function parseCSV(csvContent) {
  const rows = [];
  const lines = csvContent.split("\n");

  for (const line of lines) {
    if (!line.trim()) continue;

    const row = [];
    let currentField = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          // Escaped quote
          currentField += '"';
          i++;
        } else {
          // Toggle quote mode
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        row.push(currentField.trim());
        currentField = "";
      } else {
        currentField += char;
      }
    }

    // Push the last field
    row.push(currentField.trim());
    rows.push(row);
  }

  return rows;
}

/**
 * Known valid parts of speech
 */
const VALID_PARTS_OF_SPEECH = new Set([
  "существительное",
  "существительные",
  "существительно",
  "глагол",
  "прилагательное",
  "прилагательный",
  "прилагательнле",
  "наречие",
  "местоимение",
  "союз",
  "междометие",
  "предлог",
  "частица",
  "числительное",
  "причастие",
  "сущ+глагол",
  "глагол-наречие",
  "фразеологизм",
  "словосочетание",
  "вводное слово",
  "вводное соово",
  "обращение",
  "наречный оборот",
  "предлог + существительное",
]);

/**
 * Check if a string looks like a part of speech
 */
function isPartOfSpeech(str) {
  if (!str) return false;
  const normalized = str.toLowerCase().trim();
  return (
    VALID_PARTS_OF_SPEECH.has(normalized) ||
    normalized.includes("словосочетание") ||
    normalized.includes("выражение")
  );
}

/**
 * Convert parsed CSV rows to dictionary entries
 */
function convertToDictionary(rows) {
  // Skip header row
  const dataRows = rows.slice(1);

  const dictionary = [];
  const partsOfSpeech = new Set();
  let swappedCount = 0;

  for (const row of dataRows) {
    let [word, translation, partOfSpeech, comments] = row;

    // Skip empty rows
    if (!word || !translation) continue;

    // Detect swapped columns: if translation looks like a part of speech
    // and partOfSpeech looks like an actual translation, swap them
    if (
      isPartOfSpeech(translation) &&
      partOfSpeech &&
      !isPartOfSpeech(partOfSpeech)
    ) {
      const temp = translation;
      translation = partOfSpeech;
      partOfSpeech = temp;
      swappedCount++;
    }

    const entry = {
      word: word.trim(),
      translation: translation.trim(),
    };

    // Add part of speech if present
    if (partOfSpeech && partOfSpeech.trim()) {
      const pos = normalizePartOfSpeech(partOfSpeech.trim());
      entry.partOfSpeech = pos;
      partsOfSpeech.add(pos);
    }

    // Add comments if present
    if (comments && comments.trim()) {
      entry.comments = comments.trim();
    }

    dictionary.push(entry);
  }

  console.log(`Found ${dictionary.length} dictionary entries`);
  console.log(`Fixed ${swappedCount} entries with swapped columns`);
  console.log(`Parts of speech: ${Array.from(partsOfSpeech).join(", ")}`);

  return dictionary;
}

/**
 * Normalize part of speech labels (handle typos and variations)
 */
function normalizePartOfSpeech(pos) {
  const normalized = pos.toLowerCase();

  const mappings = {
    существительное: "существительное",
    существительные: "существительное",
    существительно: "существительное",
    сущ: "существительное",
    "сущ+глагол": "сущ+глагол",
    глагол: "глагол",
    "глагол-наречие": "глагол-наречие",
    прилагательное: "прилагательное",
    наречие: "наречие",
    местоимение: "местоимение",
    союз: "союз",
    междометие: "междометие",
    предлог: "предлог",
    частица: "частица",
    числительное: "числительное",
  };

  return mappings[normalized] || pos;
}

/**
 * Official Tsintskaro alphabet in correct order.
 * Includes multi-character letters: Гх, Дж, Хг
 */
const TSINTSKARO_ALPHABET = [
  "А", "Â", "Б", "В", "Г", "Гх", "Д", "Дж",
  "Е", "Ё", "Ж", "З", "И", "Û", "Й", "К",
  "Л", "М", "Н", "О", "Ô", "П", "Р", "С",
  "Т", "У", "Ŷ", "Ф", "Х", "Хг", "Ц", "Ч",
  "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
];

// Multi-character letters (checked first when tokenizing)
const MULTI_CHAR_LETTERS = ["Гх", "Дж", "Хг"];

/**
 * Tokenize a word into Tsintskaro alphabet letters.
 * E.g. "Гхардаш" -> ["Гх", "а", "р", "д", "а", "ш"]
 */
function tokenizeWord(word) {
  const upper = word.toUpperCase();
  const tokens = [];
  let i = 0;

  while (i < upper.length) {
    let matched = false;
    // Check multi-character letters first
    for (const ml of MULTI_CHAR_LETTERS) {
      if (upper.startsWith(ml.toUpperCase(), i)) {
        tokens.push(ml.toUpperCase());
        i += ml.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      tokens.push(upper[i]);
      i++;
    }
  }

  return tokens;
}

// Build a map from letter -> sort index for fast lookup
const LETTER_ORDER = new Map();
TSINTSKARO_ALPHABET.forEach((letter, index) => {
  LETTER_ORDER.set(letter.toUpperCase(), index);
});

/**
 * Compare two words according to Tsintskaro alphabet order.
 */
function compareTsintskaroWords(a, b) {
  const tokensA = tokenizeWord(a);
  const tokensB = tokenizeWord(b);
  const len = Math.min(tokensA.length, tokensB.length);

  for (let i = 0; i < len; i++) {
    const orderA = LETTER_ORDER.has(tokensA[i]) ? LETTER_ORDER.get(tokensA[i]) : 999;
    const orderB = LETTER_ORDER.has(tokensB[i]) ? LETTER_ORDER.get(tokensB[i]) : 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }
  }

  // If all compared tokens are equal, shorter word comes first
  return tokensA.length - tokensB.length;
}

/**
 * Merge entries from multiple sheets.
 * All entries within each sheet are kept (a word can have multiple meanings).
 * Entries from later sheets are only skipped if the exact same word
 * already exists in an earlier sheet (cross-sheet dedup only).
 */
function mergeSheetEntries(sheetsEntries) {
  const primaryWords = new Set();
  const merged = [];
  let skippedCount = 0;

  for (let i = 0; i < sheetsEntries.length; i++) {
    const entries = sheetsEntries[i];

    if (i === 0) {
      // First sheet (Эталонный) — keep everything, record words
      for (const entry of entries) {
        primaryWords.add(entry.word.toLowerCase().trim());
        merged.push(entry);
      }
    } else {
      // Later sheets — only add entries whose word is NOT in earlier sheets
      for (const entry of entries) {
        const key = entry.word.toLowerCase().trim();
        if (!primaryWords.has(key)) {
          merged.push(entry);
        } else {
          console.log(`  Duplicate skipped: "${entry.word}" (${entry.translation})`);
          skippedCount++;
        }
      }
    }
  }

  return { merged, skippedCount };
}

/**
 * Main function
 */
async function main() {
  console.log("Fetching dictionary from Google Sheets...");
  console.log(`Sheets to fetch: ${SHEETS.map((s) => s.name).join(", ")}\n`);

  try {
    // Fetch all sheets in parallel
    const csvResults = await Promise.all(
      SHEETS.map(async (sheet) => {
        const url = buildCSVUrl(sheet);
        console.log(`Fetching "${sheet.name}"...`);
        const csv = await fetchCSV(url);
        return { sheet, csv };
      })
    );

    // Parse and convert each sheet separately
    const sheetsEntries = [];
    for (const { sheet, csv } of csvResults) {
      console.log(`\nParsing "${sheet.name}" (${sheet.label})...`);
      const rows = parseCSV(csv);
      console.log(`  Parsed ${rows.length} rows`);
      const entries = convertToDictionary(rows);
      console.log(`  Got ${entries.length} entries`);
      sheetsEntries.push(entries);
    }

    // Merge: keep all entries within each sheet, only skip cross-sheet duplicates
    const { merged, skippedCount } = mergeSheetEntries(sheetsEntries);
    if (skippedCount > 0) {
      console.log(
        `\nSkipped ${skippedCount} entries from later sheets (already in Эталонный словарь)`
      );
    }

    // Sort according to Tsintskaro alphabet order
    console.log("\nSorting entries by Tsintskaro alphabet...");
    const dictionary = merged.sort((a, b) =>
      compareTsintskaroWords(a.word, b.word)
    );

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Create the final output object with metadata
    const output = {
      metadata: {
        name: "Словарь цинцкарского языка",
        nameEn: "Dictionary of Tsintskaro Language",
        source: `https://docs.google.com/spreadsheets/d/${SHEET_ID}`,
        sheets: SHEETS.map((s) => s.name),
        lastUpdated: new Date().toISOString(),
        totalEntries: dictionary.length,
      },
      entries: dictionary,
    };

    // Write to file
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");

    console.log(`\n✓ Dictionary saved to: ${OUTPUT_PATH}`);
    console.log(`  Total entries: ${dictionary.length}`);
  } catch (error) {
    console.error("Error:", error.message);
    console.log(
      "\nIf fetching failed, make sure the Google Sheet is published to web."
    );
    console.log(
      "Go to: File > Share > Publish to web > Select the sheet > Publish"
    );
    console.log(
      "\nMake sure BOTH sheets are published: Эталонный словарь and Рабочий словарь"
    );
    console.log("\nAlternatively, you can:");
    console.log(
      "1. Export each sheet as CSV (File > Download > Comma-separated values)"
    );
    console.log("2. Save them in scripts/ folder");
    console.log("3. Run this script again with --local flag");

    process.exit(1);
  }
}

main();
