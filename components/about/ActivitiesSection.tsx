import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  items: string[];
}

interface ActivitiesSectionProps {
  activities: Activity[];
}

export default function ActivitiesSection({
  activities,
}: ActivitiesSectionProps) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Наша деятельность</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Общество ведет активную работу по нескольким направлениям
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.title} className="h-full">
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {activity.items.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
