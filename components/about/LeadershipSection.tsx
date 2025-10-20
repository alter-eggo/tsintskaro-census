import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  bio: string;
  photo: string;
  location: string;
}

interface LeadershipSectionProps {
  leadership: Leader[];
}

export default function LeadershipSection({
  leadership,
}: LeadershipSectionProps) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Руководство общества</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Опытная команда энтузиастов, посвятивших себя сохранению культуры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadership.map((leader) => (
          <Card key={leader.name} className="text-center">
            <CardContent className="pt-6 space-y-4">
              <Avatar className="h-24 w-24 mx-auto">
                <AvatarImage src={leader.photo} alt={leader.name} />
                <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-semibold text-lg">{leader.name}</h3>
                <Badge variant="secondary" className="mt-2">
                  {leader.position}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">{leader.bio}</p>

              <div className="flex items-center justify-center text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {leader.location}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
