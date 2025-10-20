import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  period: string;
}

interface TimelineSectionProps {
  timeline: TimelineEvent[];
}

const periodColors: Record<string, string> = {
  ancient: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  imperial: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  golden: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  independence: "bg-green-500/10 text-green-700 border-green-500/20",
  soviet: "bg-red-500/10 text-red-700 border-red-500/20",
  exodus: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  migration: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  modern: "bg-primary/10 text-primary border-primary/20",
};

export default function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Хронология
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          Основные вехи в истории Цинцкаро
        </p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {timeline.map((event, index) => (
          <div key={index} className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            {index < timeline.length - 1 && (
              <div className="hidden md:block absolute left-1/2 -ml-px top-24 bottom-0 w-0.5 bg-border" />
            )}

            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot - mobile version */}
              <div className="flex md:hidden items-center justify-center flex-shrink-0 w-full mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <Card className="h-full">
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge className={periodColors[event.period] || ""}>
                        {event.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot - desktop version */}
              <div className="hidden md:flex items-start justify-center flex-shrink-0 w-12">
                <div className="h-12 w-12 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
