import {
  Church,
  School,
  Users,
  BookOpen,
  MapPin,
  Calendar,
  Flag,
  Home,
  AlertTriangle,
  Plane,
  Heart,
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  period: string;
}

interface TimelineSectionProps {
  timeline: TimelineEvent[];
}

const periodConfig: Record<
  string,
  { color: string; bgColor: string; icon: React.ElementType }
> = {
  migration: {
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    icon: MapPin,
  },
  foundation: {
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    icon: Home,
  },
  imperial: {
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    icon: BookOpen,
  },
  golden: {
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    icon: Church,
  },
  education: {
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
    icon: School,
  },
  independence: {
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    icon: Flag,
  },
  soviet: {
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    icon: AlertTriangle,
  },
  exodus: {
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    icon: Plane,
  },
  modern: {
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    icon: Heart,
  },
};

const defaultConfig = {
  color: "text-gray-600 dark:text-gray-400",
  bgColor: "bg-gray-100 dark:bg-gray-900/30",
  icon: Calendar,
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-1">
          {timeline.map((event, index) => {
            const config = periodConfig[event.period] || defaultConfig;
            const Icon = config.icon;

            return (
              <div key={index} className="relative pl-12 md:pl-20 group">
                {/* Icon circle */}
                <div
                  className={`absolute left-0 md:left-4 w-8 h-8 rounded-full ${config.bgColor} flex items-center justify-center ring-4 ring-background z-10`}
                >
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>

                {/* Content card */}
                <div className="py-4 md:py-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <span
                      className={`text-sm font-bold ${config.color} tabular-nums`}
                    >
                      {event.year}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Separator */}
                {index < timeline.length - 1 && (
                  <div className="border-b border-border/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
