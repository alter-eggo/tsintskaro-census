import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Location {
  country: string;
  population: string;
  cities: string[];
  flag: string;
}

interface DiasporaMapProps {
  title: string;
  description: string;
  data: Location[];
}

export default function DiasporaMap({
  title,
  description,
  data,
}: DiasporaMapProps) {
  return (
    <section>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.map((location) => (
          <Card
            key={location.country}
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl md:text-4xl">{location.flag}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base md:text-lg truncate">
                      {location.country}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {location.population} чел.
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs md:text-sm font-medium text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  Основные города:
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {location.cities.map((city) => (
                    <Badge key={city} variant="outline" className="text-xs">
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
