import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryCategory } from "@/lib/mock-data/gallery";

interface CategoryCardProps {
  category: GalleryCategory;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryCard({
  category,
  onSelectCategory,
}: CategoryCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 hover:bg-blue-100";
      case "green":
        return "bg-green-50 border-green-200 hover:bg-green-100";
      case "purple":
        return "bg-purple-50 border-purple-200 hover:bg-purple-100";
      case "orange":
        return "bg-orange-50 border-orange-200 hover:bg-orange-100";
      case "red":
        return "bg-red-50 border-red-200 hover:bg-red-100";
      case "indigo":
        return "bg-indigo-50 border-indigo-200 hover:bg-indigo-100";
      default:
        return "bg-gray-50 border-gray-200 hover:bg-gray-100";
    }
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${getColorClasses(
        category.color
      )}`}
      onClick={() => onSelectCategory(category.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{category.icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {category.description}
            </p>
            <Badge variant="secondary" className="text-xs">
              {category.photoCount} фотографий
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
