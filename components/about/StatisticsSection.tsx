import { Card, CardContent } from "@/components/ui/card";

interface Statistic {
  label: string;
  value: string;
  description: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

export default function StatisticsSection({
  statistics,
}: StatisticsSectionProps) {
  return (
    <section className="bg-primary/5 rounded-2xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Общество в цифрах</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat) => (
          <Card
            key={stat.label}
            className="text-center border-none bg-background"
          >
            <CardContent className="pt-6 space-y-2">
              <div className="text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="font-semibold">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
