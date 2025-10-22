import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, TrendingUp, Calendar } from "lucide-react";

interface FamilyStatisticsProps {
  statistics: {
    totalFamilies: number;
    totalMembers: number;
    countries: Array<{ name: string; count: number; percentage: number }>;
    generations: Array<{
      generation: number;
      count: number;
      description: string;
    }>;
  };
}

export function FamilyStatistics({ statistics }: FamilyStatisticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Families */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Всего семей</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{statistics.totalFamilies}</div>
          <p className="text-xs text-muted-foreground">
            зарегистрированных семей
          </p>
        </CardContent>
      </Card>

      {/* Total Members */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Всего членов</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.totalMembers.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">человек по всему миру</p>
        </CardContent>
      </Card>

      {/* Countries */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Стран проживания
          </CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.countries.length}
          </div>
          <p className="text-xs text-muted-foreground">стран по всему миру</p>
        </CardContent>
      </Card>

      {/* Average Generation */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Поколений</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(
              statistics.generations.reduce(
                (sum, gen) => sum + gen.generation,
                0
              ) / statistics.generations.length
            )}
          </div>
          <p className="text-xs text-muted-foreground">среднее поколение</p>
        </CardContent>
      </Card>
    </div>
  );
}
