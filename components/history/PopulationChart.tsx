"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PopulationData {
  year: string;
  population: number;
  location: string;
}

interface PopulationChartProps {
  title: string;
  description: string;
  data: PopulationData[];
}

export default function PopulationChart({
  title,
  description,
  data,
}: PopulationChartProps) {
  const maxPopulation = Math.max(...data.map((d) => d.population));

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <div className="space-y-4 md:space-y-6">
            {data.map((item, index) => {
              const percentage = (item.population / maxPopulation) * 100;
              const previousPopulation =
                index > 0 ? data[index - 1].population : null;
              const trend = previousPopulation
                ? item.population - previousPopulation
                : null;

              return (
                <div key={item.year} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="font-semibold w-12 sm:w-16">
                        {item.year}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        {item.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-2">
                      <span className="font-semibold text-sm sm:text-base">
                        {item.population.toLocaleString()}
                      </span>
                      {trend !== null && (
                        <span
                          className={`text-xs flex items-center ${
                            trend > 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {trend > 0 ? (
                            <>
                              <TrendingUp className="h-3 w-3 mr-0.5" />+
                              {Math.abs(trend).toLocaleString()}
                            </>
                          ) : (
                            <>
                              <TrendingDown className="h-3 w-3 mr-0.5" />-
                              {Math.abs(trend).toLocaleString()}
                            </>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
