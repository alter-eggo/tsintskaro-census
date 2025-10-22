import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, BookOpen, Map, Trophy, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Course } from "@/lib/mock-data/education";

interface EducationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function EducationTabs({
  activeTab,
  onTabChange,
  onSearch,
  searchQuery,
}: EducationTabsProps) {
  const tabs = [
    { id: "dashboard", label: "Панель", icon: Home },
    { id: "courses", label: "Курсы", icon: BookOpen },
    { id: "paths", label: "Пути обучения", icon: Map },
    { id: "achievements", label: "Достижения", icon: Trophy },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            onClick={() => onTabChange(tab.id)}
            className="flex items-center gap-2"
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Search and Filter Bar */}
      {activeTab === "courses" && (
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск курсов..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="default">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
