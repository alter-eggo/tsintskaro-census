import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { Family } from "@/lib/mock-data/families";

interface FamilySearchProps {
  families: Family[];
  onSearch: (filteredFamilies: Family[]) => void;
}

export function FamilySearch({ families, onSearch }: FamilySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedGeneration, setSelectedGeneration] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique countries and generations for filter options
  const countries = Array.from(
    new Set(families.flatMap((family) => family.currentLocations))
  );
  const generations = Array.from(
    new Set(families.map((family) => family.generation))
  ).sort();

  const handleSearch = () => {
    let filtered = families.filter((family) => {
      const matchesSearch =
        family.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.origin.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry =
        selectedCountry === "all" ||
        family.currentLocations.includes(selectedCountry);

      const matchesGeneration =
        selectedGeneration === "all" ||
        family.generation.toString() === selectedGeneration;

      return matchesSearch && matchesCountry && matchesGeneration;
    });

    onSearch(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCountry("all");
    setSelectedGeneration("all");
    onSearch(families);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по фамилии, описанию или месту..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} size="default">
          Найти
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          size="default"
        >
          <Filter className="h-4 w-4 mr-2" />
          Фильтры
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-muted/50 p-4 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Фильтры</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="text-muted-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Очистить
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Country Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Страна проживания</label>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите страну" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все страны</SelectItem>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Generation Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Поколение</label>
              <Select
                value={selectedGeneration}
                onValueChange={setSelectedGeneration}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите поколение" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все поколения</SelectItem>
                  {generations.map((generation) => (
                    <SelectItem key={generation} value={generation.toString()}>
                      {generation} поколение
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
