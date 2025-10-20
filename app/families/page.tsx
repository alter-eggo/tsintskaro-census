import { Users } from "lucide-react";

export default function FamiliesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Фамилии</h2>
        <p className="text-muted-foreground">
          Исследуйте генеалогическое древо и семейные связи
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Раздел в разработке</h3>
            <p className="text-sm text-muted-foreground">
              Мы создаем обширную базу данных семей и фамилий
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">Планируемые функции:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Поиск по фамилиям и именам</li>
              <li>• Генеалогические деревья</li>
              <li>• Семейные истории и легенды</li>
              <li>• Связи между семьями</li>
              <li>• Фотогалерея семей</li>
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
