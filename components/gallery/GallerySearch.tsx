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
import { Search, Filter, X, Calendar, Tag } from "lucide-react";
import { Photo, galleryCategories } from "@/lib/mock-data/gallery";

interface GallerySearchProps {
  photos: Photo[];
  onSearch: (filteredPhotos: Photo[]) => void;
}

export function GallerySearch({ photos, onSearch }: GallerySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDecade, setSelectedDecade] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique decades and tags for filter options
  const decades = Array.from(
    new Set(photos.map((photo) => photo.decade).filter(Boolean))
  ).sort();

  const allTags = Array.from(
    new Set(photos.flatMap((photo) => photo.tags))
  ).sort();

  const handleSearch = () => {
    const filtered = photos.filter((photo) => {
      const matchesSearch =
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || photo.category === selectedCategory;

      const matchesDecade =
        selectedDecade === "all" || photo.decade === selectedDecade;

      const matchesTag =
        selectedTag === "all" || photo.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesDecade && matchesTag;
    });

    onSearch(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDecade("all");
    setSelectedTag("all");
    onSearch(photos);
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
            placeholder="Поиск по названию, описанию или тегам..."
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
                  {galleryCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Decade Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Десятилетие
              </label>
              <Select value={selectedDecade} onValueChange={setSelectedDecade}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите десятилетие" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все десятилетия</SelectItem>
                  {decades.map((decade) => (
                    <SelectItem key={decade} value={decade || ""}>
                      {decade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tag Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Tag className="h-3 w-3" />
                Тег
              </label>
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тег" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все теги</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
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
