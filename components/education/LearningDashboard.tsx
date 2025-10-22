import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  CheckCircle,
  Target,
} from "lucide-react";
import { educationStatistics, achievements } from "@/lib/mock-data/education";

export function LearningDashboard() {
  const {
    enrolledCourses,
    completedLessons,
    totalLessons,
    studyStreak,
    totalStudyTime,
    progressPercentage,
    achievements: earnedAchievements,
    totalAchievements,
  } = educationStatistics;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Добро пожаловать в обучение!
            </h2>
            <p className="text-gray-600 mt-1">
              Продолжайте изучать культурное наследие Цинцкаро
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">
              {studyStreak}
            </div>
            <div className="text-sm text-gray-600">дней подряд</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Курсы</p>
                <p className="text-2xl font-bold">{enrolledCourses}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Уроки</p>
                <p className="text-2xl font-bold">
                  {completedLessons}/{totalLessons}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Время</p>
                <p className="text-2xl font-bold">{totalStudyTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Достижения</p>
                <p className="text-2xl font-bold">
                  {earnedAchievements}/{totalAchievements}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Общий прогресс
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">
                Общий прогресс обучения
              </span>
              <span className="text-sm text-gray-600">
                {progressPercentage}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-gray-600">
              <span>Начало</span>
              <span>Цель: 100%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Последние достижения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements
              .filter((a) => a.isEarned)
              .slice(0, 3)
              .map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-green-800">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-green-600">
                      {achievement.description}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Получено
                  </Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Continue Learning */}
      <Card>
        <CardHeader>
          <CardTitle>Продолжить обучение</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Play className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Готовы продолжить?</h3>
            <p className="text-gray-600 mb-4">У вас есть незавершенные уроки</p>
            <Button size="lg">
              <Play className="h-4 w-4 mr-2" />
              Продолжить курс
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
