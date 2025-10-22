"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Eye,
  Heart,
  ChefHat,
  Heart as WeddingIcon,
  TreePine,
  Calendar as EventIcon,
  Plane,
  Activity,
} from "lucide-react";
import { LeisureActivity } from "@/lib/mock-data/leisure";

interface ActivityCardProps {
  activity: LeisureActivity;
  onViewDetails: (activity: LeisureActivity) => void;
}

const getCategoryIcon = (type: string) => {
  switch (type) {
    case "recipe":
      return <ChefHat className="h-4 w-4" />;
    case "wedding":
      return <WeddingIcon className="h-4 w-4" />;
    case "christmas":
      return <TreePine className="h-4 w-4" />;
    case "event":
      return <EventIcon className="h-4 w-4" />;
    case "tourism":
      return <Plane className="h-4 w-4" />;
    case "sports":
      return <Activity className="h-4 w-4" />;
    default:
      return <Calendar className="h-4 w-4" />;
  }
};

const getDifficultyColor = (difficulty?: string) => {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getImportanceColor = (importance: string) => {
  switch (importance) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ActivityCard({ activity, onViewDetails }: ActivityCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getCategoryIcon(activity.type)}
            <CardTitle className="text-lg font-semibold line-clamp-2">
              {activity.title}
            </CardTitle>
          </div>
          <div className="flex space-x-1">
            <Badge
              variant="secondary"
              className={getImportanceColor(activity.importance)}
            >
              {activity.importance === "high"
                ? "Важно"
                : activity.importance === "medium"
                ? "Средне"
                : "Низко"}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {activity.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Activity Details */}
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {activity.date && (
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {new Date(activity.date).toLocaleDateString("ru-RU")}
                </span>
              </div>
            )}
            {activity.location && (
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span className="truncate max-w-[120px]">
                  {activity.location}
                </span>
              </div>
            )}
            {activity.participants && (
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{activity.participants}</span>
              </div>
            )}
            {activity.duration && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{activity.duration}</span>
              </div>
            )}
          </div>

          {/* Difficulty Badge */}
          {activity.difficulty && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Сложность:</span>
              <Badge
                variant="outline"
                className={getDifficultyColor(activity.difficulty)}
              >
                {activity.difficulty === "easy"
                  ? "Легко"
                  : activity.difficulty === "medium"
                  ? "Средне"
                  : "Сложно"}
              </Badge>
            </div>
          )}

          {/* Tags */}
          {activity.tags && activity.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {activity.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {activity.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{activity.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3" />
                <span>{activity.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-3 w-3" />
                <span>{activity.likes}</span>
              </div>
            </div>
            {activity.createdBy && (
              <span className="text-xs">от {activity.createdBy}</span>
            )}
          </div>

          {/* Action Button */}
          <Button
            onClick={() => onViewDetails(activity)}
            className="w-full"
            variant="outline"
          >
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
