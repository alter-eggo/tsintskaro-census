import { BookOpen } from "lucide-react";

export default function TraditionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Традиции</h2>
        <p className="text-muted-foreground">
          Изучайте культурные традиции и обычаи нашего сообщества
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Раздел в разработке</h3>
            <p className="text-sm text-muted-foreground">
              Мы собираем и систематизируем культурное наследие
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">Планируемый контент:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Праздники и обряды</li>
              <li>• Народные песни и танцы</li>
              <li>• Кулинарные традиции</li>
              <li>• Религиозные обычаи</li>
              <li>• Семейные ритуалы</li>
            </ul>
          </div>

          <div className="text-center py-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              В разработке
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
