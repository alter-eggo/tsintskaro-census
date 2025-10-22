import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Eye } from "lucide-react";
import { Family } from "@/lib/mock-data/families";
import Image from "next/image";

interface FamilyCardProps {
  family: Family;
  onViewDetails: (family: Family) => void;
}

export function FamilyCard({ family, onViewDetails }: FamilyCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-primary">
              {family.surname}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {family.description}
            </p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {family.generation} поколение
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Family Photo */}
        {family.photos.length > 0 && (
          <div className="relative h-32 w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src={family.photos[0]}
              alt={`Семья ${family.surname}`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Statistics */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{family.totalMembers} человек</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{family.currentLocations.length} стран</span>
          </div>
        </div>

        {/* Current Locations */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Проживают в:</p>
          <div className="flex flex-wrap gap-1">
            {family.currentLocations.map((location, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {location}
              </Badge>
            ))}
          </div>
        </div>

        {/* Origin */}
        <div className="space-y-1">
          <p className="text-sm font-medium">Родина в Цинцкаро:</p>
          <p className="text-sm text-muted-foreground">{family.origin}</p>
        </div>

        {/* Migration History */}
        {family.migrationHistory.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">История переселения:</p>
            <div className="space-y-1">
              {family.migrationHistory.slice(0, 2).map((migration, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <Calendar className="h-3 w-3" />
                  <span>
                    {migration.year}: {migration.from} → {migration.to}
                  </span>
                </div>
              ))}
              {family.migrationHistory.length > 2 && (
                <p className="text-xs text-muted-foreground">
                  +{family.migrationHistory.length - 2} других переселений
                </p>
              )}
            </div>
          </div>
        )}

        {/* Stories */}
        {family.stories.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Семейные истории:</p>
            <div className="space-y-1">
              {family.stories.slice(0, 1).map((story, index) => (
                <p
                  key={index}
                  className="text-xs text-muted-foreground line-clamp-2"
                >
                  {story.title}
                </p>
              ))}
              {family.stories.length > 1 && (
                <p className="text-xs text-muted-foreground">
                  +{family.stories.length - 1} других историй
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button
          onClick={() => onViewDetails(family)}
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
