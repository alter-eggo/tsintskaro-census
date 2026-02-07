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
 * Get dictionary entries starting with a specific letter
 */
export function getEntriesByLetter(
  entries: DictionaryEntry[],
  letter: string
): DictionaryEntry[] {
  const normalizedLetter = letter.toLowerCase();
  return entries.filter((entry) =>
    entry.word.toLowerCase().startsWith(normalizedLetter)
  );
}

/**
 * Get all unique first letters from dictionary words
 */
export function getAlphabet(entries: DictionaryEntry[]): string[] {
  const letters = new Set<string>();
  entries.forEach((entry) => {
    if (entry.word) {
      letters.add(entry.word[0].toUpperCase());
    }
  });
  return Array.from(letters).sort();
}
