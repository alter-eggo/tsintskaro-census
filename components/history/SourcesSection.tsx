import { Card, CardContent } from "@/components/ui/card";
import { FileText, Book, Archive, ScrollText } from "lucide-react";

interface Source {
  title: string;
  type: string;
  description: string;
}

interface SourcesSectionProps {
  title: string;
  description: string;
  items: Source[];
}

const typeIcons: Record<string, React.ElementType> = {
  "Архивные документы": Archive,
  Монография: Book,
  "Государственные архивы": ScrollText,
};

export default function SourcesSection({
  title,
  description,
  items,
}: SourcesSectionProps) {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((source, index) => {
          const Icon = typeIcons[source.type] || FileText;
          return (
            <Card key={index} className="bg-muted/30">
              <CardContent className="p-4 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{source.title}</h3>
                  <p className="text-xs text-muted-foreground">{source.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {source.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
