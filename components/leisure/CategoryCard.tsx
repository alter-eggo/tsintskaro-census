"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeisureCategory } from "@/lib/mock-data/leisure";

interface CategoryCardProps {
  category: LeisureCategory;
  onSelect: (categoryId: string) => void;
}

const getCategoryColor = (color: string) => {
  const colorMap: Record<string, string> = {
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    pink: "bg-pink-100 text-pink-800 border-pink-200",
    green: "bg-green-100 text-green-800 border-green-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    red: "bg-red-100 text-red-800 border-red-200",
  };
  return colorMap[color] || "bg-gray-100 text-gray-800 border-gray-200";
};

export function CategoryCard({ category, onSelect }: CategoryCardProps) {
  return (
    <Card
      className="group hover:shadow-lg transition-all duration-200 cursor-pointer"
      onClick={() => onSelect(category.id)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{category.icon}</div>
            <CardTitle className="text-lg font-semibold">
              {category.name}
            </CardTitle>
          </div>
          <Badge
            variant="secondary"
            className={getCategoryColor(category.color)}
          >
            {category.activityCount}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {category.activityCount} активностей
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
