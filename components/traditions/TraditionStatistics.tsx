import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, TrendingUp, Users } from "lucide-react";

interface TraditionStatisticsProps {
  statistics: {
    totalTraditions: number;
    activeTraditions: number;
    categories: number;
    mostPracticed: Array<{ tradition: string; percentage: number }>;
    byImportance: Array<{ level: string; count: number; label: string }>;
    preservationStatus: Array<{ status: string; count: number; label: string }>;
  };
}

export function TraditionStatistics({ statistics }: TraditionStatisticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Traditions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Всего традиций</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{statistics.totalTraditions}</div>
          <p className="text-xs text-muted-foreground">традиций в коллекции</p>
        </CardContent>
      </Card>

      {/* Active Traditions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Активные традиции
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.activeTraditions}
          </div>
          <p className="text-xs text-muted-foreground">
            из {statistics.totalTraditions} традиций
          </p>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Категории</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{statistics.categories}</div>
          <p className="text-xs text-muted-foreground">категорий традиций</p>
        </CardContent>
      </Card>

      {/* High Importance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Высокая важность
          </CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.byImportance.find((item) => item.level === "high")
              ?.count || 0}
          </div>
          <p className="text-xs text-muted-foreground">важнейших традиций</p>
        </CardContent>
      </Card>
    </div>
  );
}
