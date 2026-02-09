/**
 * Types and utilities for the Urum dictionary
 */

export interface DictionaryEntry {
  /** The Urum word */
  word: string;
  /** Russian translation */
  translation: string;
  /** Part of speech (optional) */
  partOfSpeech?: string;
  /** Additional comments (optional) */
  comments?: string;
}

/**
 * Official Tsintskaro alphabet in correct order.
 * Includes multi-character letters: Гх, Дж, Хг
 */
export const TSINTSKARO_ALPHABET = [
  "А", "Â", "Б", "В", "Г", "Гх", "Д", "Дж",
  "Е", "Ё", "Ж", "З", "И", "Û", "Й", "К",
  "Л", "М", "Н", "О", "Ô", "П", "Р", "С",
  "Т", "У", "Ŷ", "Ф", "Х", "Хг", "Ц", "Ч",
  "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
] as const;

/**
 * Multi-character letters that must be checked first when
 * determining which alphabet letter a word starts with.
 * Sorted longest-first so "Гх" is matched before "Г", etc.
 */
const MULTI_CHAR_LETTERS = ["Гх", "Дж", "Хг"];

/**
 * Determine the Tsintskaro alphabet letter that a word starts with.
 * Handles multi-character letters like Гх, Дж, Хг.
 */
export function getWordLetter(word: string): string | null {
  if (!word) return null;
  const upper = word.toUpperCase();

  // Check multi-character letters first
  for (const ml of MULTI_CHAR_LETTERS) {
    if (upper.startsWith(ml.toUpperCase())) {
      return ml;
    }
  }

  // Fall back to single first character
  return word[0].toUpperCase();
}

export interface DictionaryMetadata {
  name: string;
  nameEn: string;
  source: string;
  lastUpdated: string;
  totalEntries: number;
}

export interface Dictionary {
  metadata: DictionaryMetadata;
  entries: DictionaryEntry[];
}

/**
 * Load the dictionary JSON
 * Import this in your components to access the dictionary
 */
export async function loadDictionary(): Promise<Dictionary> {
  // Dynamic import for the JSON file
  const dictionary = await import('./dictionary.json');
  return dictionary.default || dictionary;
}

/**
 * Search dictionary entries by word or translation
 */
export function searchDictionary(
  entries: DictionaryEntry[],
  query: string,
  options: {
    searchWord?: boolean;
    searchTranslation?: boolean;
    caseSensitive?: boolean;
  } = {}
): DictionaryEntry[] {
  const {
    searchWord = true,
    searchTranslation = true,
    caseSensitive = false,
  } = options;

  const normalizedQuery = caseSensitive ? query : query.toLowerCase();

  return entries.filter((entry) => {
    const word = caseSensitive ? entry.word : entry.word.toLowerCase();
    const translation = caseSensitive
      ? entry.translation
      : entry.translation.toLowerCase();

    return (
      (searchWord && word.includes(normalizedQuery)) ||
      (searchTranslation && translation.includes(normalizedQuery))
    );
  });
}

/**
 * Filter dictionary by part of speech
 */
export function filterByPartOfSpeech(
  entries: DictionaryEntry[],
  partOfSpeech: string
): DictionaryEntry[] {
  return entries.filter(
    (entry) =>
      entry.partOfSpeech?.toLowerCase() === partOfSpeech.toLowerCase()
  );
}

/**
 * Get all unique parts of speech from the dictionary
 */
export function getPartsOfSpeech(entries: DictionaryEntry[]): string[] {
  const parts = new Set<string>();
  entries.forEach((entry) => {
    if (entry.partOfSpeech) {
      parts.add(entry.partOfSpeech);
    }
  });
  return Array.from(parts).sort();
}

/**
 * Get dictionary entries starting with a specific Tsintskaro alphabet letter.
 * Handles multi-character letters like Гх, Дж, Хг.
 */
export function getEntriesByLetter(
  entries: DictionaryEntry[],
  letter: string
): DictionaryEntry[] {
  return entries.filter((entry) => getWordLetter(entry.word) === letter);
}

/**
 * Get the official Tsintskaro alphabet, optionally filtered to only
 * letters that have at least one word in the given entries.
 */
export function getAlphabet(
  entries?: DictionaryEntry[],
  onlyWithEntries = false
): string[] {
  if (!onlyWithEntries || !entries) {
    return [...TSINTSKARO_ALPHABET];
  }

  const usedLetters = new Set<string>();
  entries.forEach((entry) => {
    const letter = getWordLetter(entry.word);
    if (letter) usedLetters.add(letter);
  });

  return TSINTSKARO_ALPHABET.filter((letter) => usedLetters.has(letter));
}
