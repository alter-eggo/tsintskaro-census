"use client";

import { useState } from "react";
import {
  X,
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeisureActivity } from "@/lib/mock-data/leisure";

interface ActivityModalProps {
  activity: LeisureActivity | null;
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryIcon = (type: string) => {
  switch (type) {
    case "recipe":
      return <ChefHat className="h-5 w-5" />;
    case "wedding":
      return <WeddingIcon className="h-5 w-5" />;
    case "christmas":
      return <TreePine className="h-5 w-5" />;
    case "event":
      return <EventIcon className="h-5 w-5" />;
    case "tourism":
      return <Plane className="h-5 w-5" />;
    case "sports":
      return <Activity className="h-5 w-5" />;
    default:
      return <Calendar className="h-5 w-5" />;
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

export function ActivityModal({
  activity,
  isOpen,
  onClose,
}: ActivityModalProps) {
  if (!isOpen || !activity) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getCategoryIcon(activity.type)}
            <h2 className="text-xl font-semibold">{activity.title}</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header Info */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className={getImportanceColor(activity.importance)}
            >
              {activity.importance === "high"
                ? "Высокая важность"
                : activity.importance === "medium"
                ? "Средняя важность"
                : "Низкая важность"}
            </Badge>
            {activity.difficulty && (
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
            )}
            <Badge variant="outline">{activity.category}</Badge>
            {activity.subcategory && (
              <Badge variant="outline">{activity.subcategory}</Badge>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-medium mb-2">Описание</h3>
            <p className="text-muted-foreground">{activity.description}</p>
          </div>

          {/* Activity Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activity.date && (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Дата</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            )}
            {activity.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Место</div>
                  <div className="text-sm text-muted-foreground">
                    {activity.location}
                  </div>
                </div>
              </div>
            )}
            {activity.participants && (
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Участники</div>
                  <div className="text-sm text-muted-foreground">
                    {activity.participants}
                  </div>
                </div>
              </div>
            )}
            {activity.duration && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Продолжительность</div>
                  <div className="text-sm text-muted-foreground">
                    {activity.duration}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ingredients (for recipes) */}
          {activity.ingredients && activity.ingredients.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Ингредиенты</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {activity.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions (for recipes) */}
          {activity.instructions && activity.instructions.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Инструкции</h3>
              <div className="space-y-2">
                {activity.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{instruction}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Equipment (for recipes/sports) */}
          {activity.equipment && activity.equipment.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Необходимое оборудование</h3>
              <div className="flex flex-wrap gap-2">
                {activity.equipment.map((item, index) => (
                  <Badge key={index} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Photos */}
          {activity.photos && activity.photos.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Фотографии</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activity.photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      alt={`${activity.title} - фото ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {activity.videos && activity.videos.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Видео</h3>
              <div className="space-y-4">
                {activity.videos.map((video, index) => (
                  <div key={index} className="relative">
                    <iframe
                      src={video}
                      className="w-full h-64 rounded-lg"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {activity.tags && activity.tags.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Теги</h3>
              <div className="flex flex-wrap gap-2">
                {activity.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Stats and Author */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{activity.views} просмотров</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{activity.likes} лайков</span>
              </div>
            </div>
            {activity.createdBy && (
              <div className="text-sm text-muted-foreground">
                Создано: {activity.createdBy}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
