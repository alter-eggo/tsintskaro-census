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
import { Search, Filter, X, Tag, Star } from "lucide-react";
import { Tradition, traditionCategories } from "@/lib/mock-data/traditions";

interface TraditionSearchProps {
  traditions: Tradition[];
  onSearch: (filteredTraditions: Tradition[]) => void;
}

export function TraditionSearch({
  traditions,
  onSearch,
}: TraditionSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImportance, setSelectedImportance] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    let filtered = traditions.filter((tradition) => {
      const matchesSearch =
        tradition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tradition.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        tradition.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        tradition.practices.some((practice) =>
          practice.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || tradition.category === selectedCategory;

      const matchesImportance =
        selectedImportance === "all" ||
        tradition.importance === selectedImportance;

      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "active" && tradition.isActive) ||
        (selectedStatus === "inactive" && !tradition.isActive);

      return (
        matchesSearch && matchesCategory && matchesImportance && matchesStatus
      );
    });

    onSearch(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedImportance("all");
    setSelectedStatus("all");
    onSearch(traditions);
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
            placeholder="Поиск по названию, описанию или практикам..."
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Tag className="h-3 w-3" />
                Категория
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {traditionCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Importance Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Star className="h-3 w-3" />
                Важность
              </label>
              <Select
                value={selectedImportance}
                onValueChange={setSelectedImportance}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите важность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все уровни</SelectItem>
                  <SelectItem value="high">Высокая важность</SelectItem>
                  <SelectItem value="medium">Средняя важность</SelectItem>
                  <SelectItem value="low">Низкая важность</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Статус</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="active">Активные</SelectItem>
                  <SelectItem value="inactive">Неактивные</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
