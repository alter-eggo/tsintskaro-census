import { Card, CardContent } from "@/components/ui/card";

interface Tradition {
  title: string;
  description: string;
  icon: string;
}

interface TraditionsSectionProps {
  title: string;
  description: string;
  items: Tradition[];
}

export default function TraditionsSection({
  title,
  description,
  items,
}: TraditionsSectionProps) {
  return (
    <section className="bg-muted/50 rounded-2xl p-4 md:p-8 lg:p-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <Card key={item.title} className="border-none bg-background">
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="text-4xl md:text-5xl">{item.icon}</div>
              <h3 className="font-semibold text-base md:text-lg">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
