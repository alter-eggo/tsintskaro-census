"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { LeisureActivity, leisureCategories } from "@/lib/mock-data/leisure";

interface LeisureSearchProps {
  activities: LeisureActivity[];
  onSearch: (filteredActivities: LeisureActivity[]) => void;
}

export function LeisureSearch({ activities, onSearch }: LeisureSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedImportance, setSelectedImportance] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    let filtered = activities;

    // Search by term
    if (searchTerm) {
      filtered = filtered.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          activity.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          activity.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (activity) => activity.category === selectedCategory
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((activity) => activity.type === selectedType);
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (activity) => activity.difficulty === selectedDifficulty
      );
    }

    // Filter by importance
    if (selectedImportance !== "all") {
      filtered = filtered.filter(
        (activity) => activity.importance === selectedImportance
      );
    }

    onSearch(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedType("all");
    setSelectedDifficulty("all");
    setSelectedImportance("all");
    onSearch(activities);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedCategory !== "all") count++;
    if (selectedType !== "all") count++;
    if (selectedDifficulty !== "all") count++;
    if (selectedImportance !== "all") count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск активностей..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          Найти
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="relative"
        >
          <Filter className="h-4 w-4 mr-2" />
          Фильтры
          {activeFiltersCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Фильтры</h3>
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-muted-foreground"
                >
                  <X className="h-3 w-3 mr-1" />
                  Очистить
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Категория</label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {leisureCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Тип</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Все типы" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="recipe">Рецепты</SelectItem>
                  <SelectItem value="wedding">Свадьбы</SelectItem>
                  <SelectItem value="christmas">Рождество</SelectItem>
                  <SelectItem value="event">События</SelectItem>
                  <SelectItem value="tourism">Туризм</SelectItem>
                  <SelectItem value="sports">Спорт</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Сложность</label>
              <Select
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Любая сложность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая сложность</SelectItem>
                  <SelectItem value="easy">Легко</SelectItem>
                  <SelectItem value="medium">Средне</SelectItem>
                  <SelectItem value="hard">Сложно</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Importance Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Важность</label>
              <Select
                value={selectedImportance}
                onValueChange={setSelectedImportance}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Любая важность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая важность</SelectItem>
                  <SelectItem value="high">Высокая</SelectItem>
                  <SelectItem value="medium">Средняя</SelectItem>
                  <SelectItem value="low">Низкая</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSearch}>Применить фильтры</Button>
          </div>
        </div>
      )}
    </div>
  );
}
