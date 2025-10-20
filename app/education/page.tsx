import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Образование</h2>
        <p className="text-muted-foreground">
          Образовательные программы и возможности для развития
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Раздел в разработке</h3>
            <p className="text-sm text-muted-foreground">
              Мы готовим образовательные материалы и программы
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">Планируемые разделы:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Языковые курсы</li>
              <li>• Исторические лекции</li>
              <li>• Культурные мастер-классы</li>
              <li>• Онлайн-библиотека</li>
              <li>• Образовательные видео</li>
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
