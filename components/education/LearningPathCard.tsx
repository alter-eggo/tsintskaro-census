import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, Clock, BookOpen, Star, ArrowRight } from "lucide-react";
import { LearningPath } from "@/lib/mock-data/education";

interface LearningPathCardProps {
  learningPath: LearningPath;
  onStartPath: (pathId: string) => void;
}

export function LearningPathCard({
  learningPath,
  onStartPath,
}: LearningPathCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${
        learningPath.isRecommended ? "ring-2 ring-blue-200" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              {learningPath.title}
              {learningPath.isRecommended && (
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Рекомендуется
                </Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {learningPath.description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge
              variant="outline"
              className={getDifficultyColor(learningPath.difficulty)}
            >
              {learningPath.difficulty === "beginner" && "Начальный"}
              {learningPath.difficulty === "intermediate" && "Средний"}
              {learningPath.difficulty === "advanced" && "Продвинутый"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Path Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{learningPath.totalDuration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{learningPath.courses.length} курсов</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {learningPath.category}
          </Badge>
        </div>

        {/* Course List Preview */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Включает курсы:</h4>
          <div className="space-y-1">
            {learningPath.courses.slice(0, 3).map((courseId, index) => (
              <div
                key={courseId}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Курс {index + 1}</span>
              </div>
            ))}
            {learningPath.courses.length > 3 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>+{learningPath.courses.length - 3} других курсов</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onStartPath(learningPath.id)}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Map className="h-4 w-4 mr-2" />
          Начать путь обучения
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
