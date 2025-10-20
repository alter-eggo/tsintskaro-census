import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Person {
  name: string;
  years: string;
  achievement: string;
  image: string;
}

interface KeyFiguresProps {
  title: string;
  description: string;
  people: Person[];
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {people.map((person) => (
          <Card key={person.name} className="text-center">
            <CardContent className="pt-4 md:pt-6 p-4 md:p-6 space-y-3 md:space-y-4">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 mx-auto">
                <AvatarImage src={person.image} alt={person.name} />
                <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {person.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {person.years}
                </p>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {person.achievement}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
