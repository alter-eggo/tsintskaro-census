import { Card, CardContent } from "@/components/ui/card";
import { Languages } from "lucide-react";

interface EtymologySectionProps {
  official: string;
  pontic: string;
  etymology: string;
}

export default function EtymologySection({
  official,
  pontic,
  etymology,
}: EtymologySectionProps) {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Languages className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Официальное название
                </p>
                <p className="text-lg font-semibold">{official}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Понтийское название
                </p>
                <p className="text-lg font-semibold text-primary">{pontic}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {etymology}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
