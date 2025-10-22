import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Users, Star } from "lucide-react";
import { Tradition } from "@/lib/mock-data/traditions";
import Image from "next/image";

interface TraditionCardProps {
  tradition: Tradition;
  onViewTradition: (tradition: Tradition) => void;
}

export function TraditionCard({
  tradition,
  onViewTradition,
}: TraditionCardProps) {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Tradition Image */}
      {tradition.photos.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={tradition.photos[0]}
            alt={tradition.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/80">
              {tradition.category}
            </Badge>
            <Badge
              variant="outline"
              className={`backdrop-blur-sm bg-white/80 ${getImportanceColor(
                tradition.importance
              )}`}
            >
              {tradition.importance === "high" && "Высокая важность"}
              {tradition.importance === "medium" && "Средняя важность"}
              {tradition.importance === "low" && "Низкая важность"}
            </Badge>
          </div>
          {!tradition.isActive && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive" className="backdrop-blur-sm">
                Неактивная
              </Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-lg font-bold line-clamp-2">
          {tradition.title}
        </CardTitle>
        {tradition.subcategory && (
          <p className="text-sm text-muted-foreground">
            {tradition.subcategory}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {tradition.description}
        </p>

        {/* Tradition Details */}
        <div className="space-y-2">
          {tradition.when && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{tradition.when}</span>
            </div>
          )}

          {tradition.where && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{tradition.where}</span>
            </div>
          )}

          {tradition.participants && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{tradition.participants}</span>
            </div>
          )}
        </div>

        {/* Practices Preview */}
        {tradition.practices.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              Основные практики:
            </p>
            <div className="space-y-1">
              {tradition.practices.slice(0, 3).map((practice, index) => (
                <p key={index} className="text-xs text-muted-foreground">
                  • {practice}
                </p>
              ))}
              {tradition.practices.length > 3 && (
                <p className="text-xs text-muted-foreground">
                  +{tradition.practices.length - 3} других практик
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tradition.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tradition.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tradition.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onViewTradition(tradition)}
          className="w-full"
          variant="outline"
        >
          <Eye className="h-4 w-4 mr-2" />
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
}
