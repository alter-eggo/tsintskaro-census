import { BarChart3, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Панель управления</h2>
        <p className="text-muted-foreground">
          Добро пожаловать в систему управления переписью населения Цинцкаро
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Общая численность населения
              </p>
              <p className="text-2xl font-bold">2,847</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Домохозяйства
              </p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Темп роста
              </p>
              <p className="text-2xl font-bold">+2.3%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Последняя активность</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Данные переписи обновлены</span>
            <span className="text-xs text-muted-foreground">2 часа назад</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">
              Зарегистрировано новое домохозяйство
            </span>
            <span className="text-xs text-muted-foreground">5 часов назад</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Создан отчет о населении</span>
            <span className="text-xs text-muted-foreground">1 день назад</span>
          </div>
        </div>
      </div>
    </div>
  );
}
