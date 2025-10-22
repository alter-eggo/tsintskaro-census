import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Users,
  Star,
  Play,
  Lock,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { Course } from "@/lib/mock-data/education";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
  onContinue: (courseId: string) => void;
}

export function CourseCard({ course, onEnroll, onContinue }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
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
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Course Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/80">
            {course.category}
          </Badge>
          <Badge
            variant="outline"
            className={`backdrop-blur-sm bg-white/80 ${getLevelColor(
              course.level
            )}`}
          >
            {course.level === "beginner" && "Начальный"}
            {course.level === "intermediate" && "Средний"}
            {course.level === "advanced" && "Продвинутый"}
          </Badge>
        </div>

        {/* Progress Overlay for enrolled courses */}
        {course.isEnrolled && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Прогресс</span>
              <span className="text-sm">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-1" />
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-bold line-clamp-2">
          {course.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.shortDescription}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Instructor Info */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={course.instructorPhoto}
              alt={course.instructor}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{course.instructor}</p>
            <p className="text-xs text-muted-foreground">
              {course.instructorTitle}
            </p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{course.lessonsCount} уроков</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{course.studentsCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Что вы изучите:</h4>
          <ul className="space-y-1">
            {course.learningOutcomes.slice(0, 2).map((outcome, index) => (
              <li
                key={index}
                className="text-xs text-muted-foreground flex items-start gap-2"
              >
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{outcome}</span>
              </li>
            ))}
            {course.learningOutcomes.length > 2 && (
              <li className="text-xs text-muted-foreground">
                +{course.learningOutcomes.length - 2} других навыков
              </li>
            )}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {course.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{course.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        {course.isEnrolled ? (
          <Button onClick={() => onContinue(course.id)} className="w-full">
            <Play className="h-4 w-4 mr-2" />
            Продолжить обучение
          </Button>
        ) : (
          <Button
            onClick={() => onEnroll(course.id)}
            className="w-full"
            variant="outline"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Записаться на курс
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
