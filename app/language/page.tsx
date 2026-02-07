"use client";

import { useState, useMemo } from "react";
import { BookText, Search, Languages, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dictionaryData from "@/lib/data/dictionary.json";
import type { DictionaryEntry } from "@/lib/data/dictionary";

const ITEMS_PER_PAGE = 50;

export default function LanguagePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const entries = dictionaryData.entries as DictionaryEntry[];

  // Get unique first letters for alphabet navigation
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    entries.forEach((entry) => {
      if (entry.word) {
        letters.add(entry.word[0].toUpperCase());
      }
    });
    return Array.from(letters).sort();
  }, [entries]);

  // Filter entries based on search query and selected letter
  const filteredEntries = useMemo(() => {
    let result = entries;

    if (selectedLetter) {
      result = result.filter(
        (entry) => entry.word[0].toUpperCase() === selectedLetter
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (entry) =>
          entry.word.toLowerCase().includes(query) ||
          entry.translation.toLowerCase().includes(query)
      );
    }

    return result;
  }, [entries, searchQuery, selectedLetter]);

  // Paginate results
  const paginatedEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEntries.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEntries, currentPage]);

  const totalPages = Math.ceil(filteredEntries.length / ITEMS_PER_PAGE);

  // Reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter);
    setCurrentPage(1);
  };

  // Get statistics
  const stats = {
    totalWords: entries.length,
    nouns: entries.filter((e) => e.partOfSpeech === "существительное").length,
    verbs: entries.filter((e) => e.partOfSpeech === "глагол").length,
    adjectives: entries.filter((e) => e.partOfSpeech === "прилагательное")
      .length,
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Язык</h2>
        <p className="text-muted-foreground">
          Словарь цинцкарского языка — {dictionaryData.metadata.totalEntries}{" "}
          слов
        </p>
      </div>

      {/* Statistics - compact inline */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookText className="h-4 w-4" />
          <strong className="text-foreground">{stats.totalWords}</strong> слов
        </span>
        <span className="flex items-center gap-1.5">
          <Hash className="h-4 w-4" />
          <strong className="text-foreground">{stats.nouns}</strong> сущ.
        </span>
        <span className="flex items-center gap-1.5">
          <Languages className="h-4 w-4" />
          <strong className="text-foreground">{stats.verbs}</strong> глаг.
        </span>
        <span className="flex items-center gap-1.5">
          <Languages className="h-4 w-4" />
          <strong className="text-foreground">{stats.adjectives}</strong> прил.
        </span>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Введите слово для поиска на любом языке"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-1">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`h-8 w-8 rounded-md text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {letter}
              </button>
            ))}
            {selectedLetter && (
              <button
                onClick={() => {
                  setSelectedLetter(null);
                  setCurrentPage(1);
                }}
                className="ml-2 h-8 px-3 rounded-md text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
              >
                Сбросить
              </button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BookText className="h-5 w-5" />
              Словарь
            </span>
            <span className="text-sm font-normal text-muted-foreground">
              Показано {paginatedEntries.length} из {filteredEntries.length}{" "}
              слов
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredEntries.length > 0 ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Слово</TableHead>
                    <TableHead>Перевод</TableHead>
                    <TableHead className="w-[180px]">Часть речи</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedEntries.map((entry, index) => (
                    <TableRow key={`${entry.word}-${index}`}>
                      <TableCell className="font-medium">
                        {entry.word}
                      </TableCell>
                      <TableCell>{entry.translation}</TableCell>
                      <TableCell>
                        {entry.partOfSpeech && (
                          <Badge variant="secondary">
                            {entry.partOfSpeech}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Назад
                  </button>
                  <span className="text-sm text-muted-foreground">
                    Страница {currentPage} из {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Вперёд
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <BookText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Слова не найдены</h3>
              <p className="text-muted-foreground text-center">
                Попробуйте изменить поисковый запрос или выберите другую букву
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
