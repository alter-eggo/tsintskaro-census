import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Video, Eye, Heart } from "lucide-react";

interface GalleryStatisticsProps {
  statistics: {
    totalPhotos: number;
    totalVideos: number;
    totalViews: number;
    totalLikes: number;
    categories: number;
    decades: Array<{ decade: string; count: number; label: string }>;
    mostPopularTags: Array<{ tag: string; count: number }>;
  };
}

export function GalleryStatistics({ statistics }: GalleryStatisticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Photos */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Всего фотографий
          </CardTitle>
          <Image className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{statistics.totalPhotos}</div>
          <p className="text-xs text-muted-foreground">фотографий в галерее</p>
        </CardContent>
      </Card>

      {/* Total Videos */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Видеоматериалы</CardTitle>
          <Video className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{statistics.totalVideos}</div>
          <p className="text-xs text-muted-foreground">видео в коллекции</p>
        </CardContent>
      </Card>

      {/* Total Views */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Просмотры</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.totalViews.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">всего просмотров</p>
        </CardContent>
      </Card>

      {/* Total Likes */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Лайки</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {statistics.totalLikes.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            лайков от пользователей
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
