import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface HistoricalImage {
  url: string;
  caption: string;
  year: string;
}

interface HistoricalGalleryProps {
  title: string;
  images: HistoricalImage[];
}

export default function HistoricalGallery({
  title,
  images,
}: HistoricalGalleryProps) {
  return (
    <section>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 md:h-64 w-full">
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-3 md:p-4">
              <p className="font-medium text-xs md:text-sm mb-1">
                {image.caption}
              </p>
              <p className="text-xs text-muted-foreground">{image.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
