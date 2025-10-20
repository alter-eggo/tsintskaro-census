import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface JoinInfo {
  title: string;
  description: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

interface Contact {
  email: string;
  phone: string;
}

interface JoinSectionProps {
  joinInfo: JoinInfo;
  contact: Contact;
}

export default function JoinSection({ joinInfo, contact }: JoinSectionProps) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{joinInfo.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {joinInfo.description}
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {joinInfo.steps.map((step) => (
          <Card key={step.number} className="relative">
            <CardContent className="pt-6 space-y-3">
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="font-semibold pt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Готовы присоединиться?</h3>
            <p className="opacity-90">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {contact.email}
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={`tel:${contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {contact.phone}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
