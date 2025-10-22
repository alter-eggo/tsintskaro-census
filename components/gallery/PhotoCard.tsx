import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Calendar, MapPin, User } from "lucide-react";
import { Photo } from "@/lib/mock-data/gallery";
import Image from "next/image";

interface PhotoCardProps {
  photo: Photo;
  onViewPhoto: (photo: Photo) => void;
}

export function PhotoCard({ photo, onViewPhoto }: PhotoCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Overlay content */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/80">
            {photo.category}
          </Badge>
          {photo.isHistorical && (
            <Badge variant="outline" className="backdrop-blur-sm bg-white/80">
              Историческое
            </Badge>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => onViewPhoto(photo)}
              className="flex-1 backdrop-blur-sm bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 mr-1" />
              Просмотр
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {photo.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {photo.description}
        </p>

        {/* Photo metadata */}
        <div className="space-y-2">
          {photo.year && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{photo.year}</span>
            </div>
          )}

          {photo.location && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{photo.location}</span>
            </div>
          )}

          {photo.photographer && (
            <div className="flex items-center gap-2 text-xs text-mort-foreground">
              <User className="h-3 w-3" />
              <span>{photo.photographer}</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{photo.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>{photo.likes}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-1">
            {photo.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {photo.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{photo.tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
