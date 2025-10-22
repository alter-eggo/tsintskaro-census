import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Music,
  Utensils,
  Heart,
  BookOpen,
  Play,
} from "lucide-react";
import { Tradition } from "@/lib/mock-data/traditions";
import Image from "next/image";

interface TraditionModalProps {
  tradition: Tradition | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TraditionModal({
  tradition,
  isOpen,
  onClose,
}: TraditionModalProps) {
  if (!tradition) return null;

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
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-primary">
            {tradition.title}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Tradition Image */}
          {tradition.photos.length > 0 && (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={tradition.photos[0]}
                alt={tradition.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Tradition Info */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{tradition.category}</Badge>
                    {tradition.subcategory && (
                      <Badge variant="outline">{tradition.subcategory}</Badge>
                    )}
                    <Badge
                      variant="outline"
                      className={getImportanceColor(tradition.importance)}
                    >
                      {tradition.importance === "high" && "Высокая важность"}
                      {tradition.importance === "medium" && "Средняя важность"}
                      {tradition.importance === "low" && "Низкая важность"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {tradition.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Origin and Significance */}
              <div className="space-y-2">
                <h4 className="font-medium">Происхождение:</h4>
                <p className="text-sm text-muted-foreground">
                  {tradition.origin}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Значение:</h4>
                <p className="text-sm text-muted-foreground">
                  {tradition.significance}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {tradition.when && (
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Когда:</span>
                      <p className="font-medium">{tradition.when}</p>
                    </div>
                  </div>
                )}

                {tradition.where && (
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Где:</span>
                      <p className="font-medium">{tradition.where}</p>
                    </div>
                  </div>
                )}

                {tradition.participants && (
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Участники:</span>
                      <p className="font-medium">{tradition.participants}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Practices */}
              {tradition.practices.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Основные практики:
                  </h4>
                  <ul className="space-y-1">
                    {tradition.practices.map((practice, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Items */}
              {tradition.items && tradition.items.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Необходимые предметы:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tradition.items.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Songs */}
              {tradition.songs && tradition.songs.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    Песни:
                  </h4>
                  <div className="space-y-1">
                    {tradition.songs.map((song) => (
                      <p key={song} className="text-sm text-muted-foreground">
                        • {song}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Dances */}
              {tradition.dances && tradition.dances.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Танцы:
                  </h4>
                  <div className="space-y-1">
                    {tradition.dances.map((dance) => (
                      <p key={dance} className="text-sm text-muted-foreground">
                        • {dance}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Recipes */}
              {tradition.recipes && tradition.recipes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Рецепты:
                  </h4>
                  <div className="space-y-1">
                    {tradition.recipes.map((recipe) => (
                      <p key={recipe} className="text-sm text-muted-foreground">
                        • {recipe}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="space-y-2">
                <h4 className="font-medium">Теги:</h4>
                <div className="flex flex-wrap gap-2">
                  {tradition.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stories */}
              {tradition.stories.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Истории и воспоминания:
                  </h4>
                  <div className="space-y-4">
                    {tradition.stories.map((story, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-primary/20 pl-4 space-y-2"
                      >
                        <h5 className="font-medium">{story.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {story.content}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Источник: {story.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Traditions */}
              {tradition.relatedTraditions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Связанные традиции:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tradition.relatedTraditions.map((related) => (
                      <Badge
                        key={related}
                        variant="secondary"
                        className="text-xs"
                      >
                        {related}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
