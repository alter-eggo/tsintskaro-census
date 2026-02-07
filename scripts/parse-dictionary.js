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

// The sheet name (tab) - "Эталонный словарь" is the main dictionary
const SHEET_NAME = "Эталонный словарь";

// URL for fetching as CSV (sheet must be published to web)
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
  SHEET_NAME
)}`;

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
 * Main function
 */
async function main() {
  console.log("Fetching dictionary from Google Sheets...");
  console.log(`URL: ${CSV_URL}`);

  try {
    // Try to fetch from Google Sheets
    const csvContent = await fetchCSV(CSV_URL);

    console.log("Parsing CSV...");
    const rows = parseCSV(csvContent);
    console.log(`Parsed ${rows.length} rows`);

    console.log("Converting to dictionary format...");
    const dictionary = convertToDictionary(rows);

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Create the final output object with metadata
    const output = {
      metadata: {
        name: "Эталонный словарь цинцкарского языка",
        nameEn: "Standard Dictionary of Tsintskaro Language",
        source: `https://docs.google.com/spreadsheets/d/${SHEET_ID}`,
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
    console.log("\nAlternatively, you can:");
    console.log(
      "1. Export the sheet as CSV (File > Download > Comma-separated values)"
    );
    console.log("2. Save it as scripts/dictionary.csv");
    console.log("3. Run this script again with --local flag");

    // Try local file as fallback
    const localPath = path.join(__dirname, "dictionary.csv");
    if (fs.existsSync(localPath)) {
      console.log("\nFound local CSV file, using that instead...");
      const csvContent = fs.readFileSync(localPath, "utf8");
      const rows = parseCSV(csvContent);
      const dictionary = convertToDictionary(rows);

      const outputDir = path.dirname(OUTPUT_PATH);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const output = {
        metadata: {
          name: "Эталонный словарь цинцкарского языка",
          nameEn: "Standard Dictionary of Tsintskaro Language",
          source: `https://docs.google.com/spreadsheets/d/${SHEET_ID}`,
          lastUpdated: new Date().toISOString(),
          totalEntries: dictionary.length,
        },
        entries: dictionary,
      };

      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");
      console.log(`\n✓ Dictionary saved to: ${OUTPUT_PATH}`);
    }

    process.exit(1);
  }
}

main();
