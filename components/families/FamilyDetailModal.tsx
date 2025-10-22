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
  Users,
  MapPin,
  Calendar,
  X,
  Camera,
  BookOpen,
  ArrowRight,
  Home,
} from "lucide-react";
import { Family } from "@/lib/mock-data/families";
import Image from "next/image";

interface FamilyDetailModalProps {
  family: Family | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FamilyDetailModal({
  family,
  isOpen,
  onClose,
}: FamilyDetailModalProps) {
  if (!family) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">
            Семья {family.surname}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Family Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      {family.generation} поколение
                    </Badge>
                    <Badge variant="outline">
                      {family.totalMembers} человек
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Home className="h-4 w-4" />
                    <span>{family.origin}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{family.description}</p>
            </CardContent>
          </Card>

          {/* Photos */}
          {family.photos.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Фотографии семьи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {family.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative h-32 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={photo}
                        alt={`Фото семьи ${family.surname} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Current Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Места проживания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {family.currentLocations.map((location, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {location}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Migration History */}
          {family.migrationHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  История переселения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {family.migrationHistory.map((migration, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {migration.year}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{migration.from}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{migration.to}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {migration.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Family Stories */}
          {family.stories.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Семейные истории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {family.stories.map((story, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary/20 pl-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{story.title}</h4>
                        {story.year && (
                          <Badge variant="outline" className="text-xs">
                            {story.year}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {story.content}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
