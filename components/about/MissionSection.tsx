import { Card, CardContent } from "@/components/ui/card";

interface MissionSectionProps {
  mission: {
    title: string;
    description: string;
  };
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function MissionSection({
  mission,
  values,
}: MissionSectionProps) {
  return (
    <section className="space-y-12">
      {/* Mission Statement */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{mission.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {mission.description}
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value) => (
          <Card key={value.title} className="text-center">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl">{value.icon}</div>
              <h3 className="font-semibold text-lg">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
