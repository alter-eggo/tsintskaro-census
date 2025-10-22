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
  X,
  Calendar,
  MapPin,
  User,
  Eye,
  Heart,
  Tag,
  Download,
  Share2,
} from "lucide-react";
import { Photo } from "@/lib/mock-data/gallery";
import Image from "next/image";

interface PhotoModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoModal({ photo, isOpen, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-primary">
            {photo.title}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Photo */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Photo Info */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{photo.category}</Badge>
                    {photo.isHistorical && (
                      <Badge variant="outline">Историческое</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{photo.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {photo.year && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Год:</span>
                    <span>{photo.year}</span>
                  </div>
                )}

                {photo.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Место:</span>
                    <span>{photo.location}</span>
                  </div>
                )}

                {photo.photographer && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Фотограф:</span>
                    <span>{photo.photographer}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Загружено:</span>
                  <span>
                    {new Date(photo.uploadDate).toLocaleDateString("ru-RU")}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{photo.views} просмотров</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{photo.likes} лайков</span>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Теги:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Скачать
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
