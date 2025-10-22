"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  TrendingUp,
  Users,
  Calendar,
  Star,
  Eye,
  Heart,
} from "lucide-react";
import { leisureStatistics } from "@/lib/mock-data/leisure";

export function LeisureStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Total Activities */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Всего активностей
          </CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {leisureStatistics.totalActivities}
          </div>
          <p className="text-xs text-muted-foreground">
            {leisureStatistics.activeActivities} активных
          </p>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Категории</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {leisureStatistics.categories}
          </div>
          <p className="text-xs text-muted-foreground">различных направлений</p>
        </CardContent>
      </Card>

      {/* Most Popular */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Популярные</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leisureStatistics.mostPopular.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm truncate max-w-[120px]">
                  {item.activity}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {item.views} просмотров
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By Category */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium">По категориям</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leisureStatistics.byCategory.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm">{category.label}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${
                          (category.count / leisureStatistics.totalActivities) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8 text-right">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* By Importance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">По важности</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leisureStatistics.byImportance.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{item.label}</span>
                <Badge
                  variant={
                    item.level === "high"
                      ? "destructive"
                      : item.level === "medium"
                      ? "default"
                      : "secondary"
                  }
                  className="text-xs"
                >
                  {item.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Activity */}
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Активность по месяцам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {leisureStatistics.monthlyActivity.map((month, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  {month.month}
                </div>
                <div className="text-lg font-bold">{month.count}</div>
                <div className="text-xs text-muted-foreground">
                  {month.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
