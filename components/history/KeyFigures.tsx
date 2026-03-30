import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Person {
  name: string;
  years?: string;
  achievement?: string;
  image?: string;
}

interface KeyFiguresProps {
  title: string;
  description: string;
  people: Person[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");
}

export default function KeyFigures({
  title,
  description,
  people,
}: KeyFiguresProps) {
  return (
    <section>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {people.map((person) => (
          <Card key={person.name}>
            <CardContent className="p-4 md:p-6 flex items-start gap-4">
              <Avatar className="h-14 w-14 flex-shrink-0">
                {person.image ? (
                  <AvatarImage src={person.image} alt={person.name} />
                ) : null}
                <AvatarFallback className="bg-primary/10 text-primary">
                  {person.image ? (
                    getInitials(person.name)
                  ) : (
                    <User className="h-6 w-6" />
                  )}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <h3 className="font-semibold text-sm md:text-base">
                  {person.name}
                </h3>
                {person.years && (
                  <p className="text-xs text-muted-foreground">{person.years}</p>
                )}
                {person.achievement && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {person.achievement}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
