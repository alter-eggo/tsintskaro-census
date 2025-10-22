export interface Photo {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  category: string;
  year?: number;
  decade?: string;
  location?: string;
  tags: string[];
  photographer?: string;
  isHistorical: boolean;
  uploadDate: string;
  views: number;
  likes: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
  year?: number;
  tags: string[];
  uploadDate: string;
  views: number;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  photoCount: number;
  color: string;
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "historical",
    name: "Исторические фотографии",
    description: "Архивные снимки из истории Цинцкаро",
    icon: "📜",
    photoCount: 156,
    color: "blue",
  },
  {
    id: "families",
    name: "Семейные фото",
    description: "Фотографии семей и их историй",
    icon: "👨‍👩‍👧‍👦",
    photoCount: 89,
    color: "green",
  },
  {
    id: "events",
    name: "События и встречи",
    description: "Современные мероприятия и встречи земляков",
    icon: "🎉",
    photoCount: 67,
    color: "purple",
  },
  {
    id: "village",
    name: "Село Цинцкаро",
    description: "Виды села и его окрестностей",
    icon: "🏘️",
    photoCount: 45,
    color: "orange",
  },
  {
    id: "traditions",
    name: "Традиции и культура",
    description: "Греческие традиции, танцы, музыка",
    icon: "🎭",
    photoCount: 78,
    color: "red",
  },
  {
    id: "education",
    name: "Школа и образование",
    description: "Школьные фотографии и выпуски",
    icon: "🎓",
    photoCount: 34,
    color: "indigo",
  },
];

export const galleryPhotos: Photo[] = [
  {
    id: "photo-001",
    title: "Цинцкаро 1950-е годы",
    description:
      "Вид на центральную часть села Цинцкаро в 1950-х годах. Видны традиционные дома и церковь.",
    url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300",
    category: "historical",
    year: 1950,
    decade: "1950s",
    location: "Цинцкаро, Грузия",
    tags: ["село", "архитектура", "история", "дома"],
    photographer: "Неизвестен",
    isHistorical: true,
    uploadDate: "2024-01-15",
    views: 1247,
    likes: 89,
  },
  {
    id: "photo-002",
    title: "Семья Агеевых",
    description:
      "Семейная фотография семьи Агеевых, сделанная перед отъездом из Цинцкаро в 1992 году.",
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300",
    category: "families",
    year: 1992,
    decade: "1990s",
    location: "Цинцкаро, Грузия",
    tags: ["семья", "Агеевы", "переселение", "прощание"],
    photographer: "Семейный альбом",
    isHistorical: true,
    uploadDate: "2024-01-20",
    views: 892,
    likes: 67,
  },
  {
    id: "photo-003",
    title: "Школьный выпуск 1965",
    description:
      "Выпускники школы Цинцкаро 1965 года. Среди них многие стали известными людьми.",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300",
    category: "education",
    year: 1965,
    decade: "1960s",
    location: "Школа Цинцкаро",
    tags: ["школа", "выпуск", "ученики", "учителя"],
    photographer: "Школьный фотограф",
    isHistorical: true,
    uploadDate: "2024-01-25",
    views: 1567,
    likes: 124,
  },
  {
    id: "photo-004",
    title: "Свадьба в Цинцкаро",
    description:
      "Традиционная греческая свадьба в селе Цинцкаро. Сохранены все старинные обычаи.",
    url: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=300",
    category: "traditions",
    year: 1985,
    decade: "1980s",
    location: "Цинцкаро, Грузия",
    tags: ["свадьба", "традиции", "греческая культура", "праздник"],
    photographer: "Свадебный фотограф",
    isHistorical: true,
    uploadDate: "2024-02-01",
    views: 2341,
    likes: 189,
  },
  {
    id: "photo-005",
    title: "Колхозный праздник",
    description:
      "Праздник урожая в колхозе Цинцкаро. Все жители села участвовали в праздновании.",
    url: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=300",
    category: "events",
    year: 1978,
    decade: "1970s",
    location: "Колхоз Цинцкаро",
    tags: ["праздник", "урожай", "колхоз", "сообщество"],
    photographer: "Колхозный фотограф",
    isHistorical: true,
    uploadDate: "2024-02-05",
    views: 987,
    likes: 76,
  },
  {
    id: "photo-006",
    title: "Церковь Святого Георгия",
    description:
      "Главная церковь села Цинцкаро - Святого Георгия. Место духовного единения общины.",
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300",
    category: "village",
    year: 1960,
    decade: "1960s",
    location: "Цинцкаро, Грузия",
    tags: ["церковь", "религия", "архитектура", "духовность"],
    photographer: "Неизвестен",
    isHistorical: true,
    uploadDate: "2024-02-10",
    views: 1456,
    likes: 112,
  },
  {
    id: "photo-007",
    title: "Встреча земляков в Москве",
    description:
      "Ежегодная встреча земляков из Цинцкаро в Москве. Более 200 человек собрались вместе.",
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300",
    category: "events",
    year: 2023,
    decade: "2020s",
    location: "Москва, Россия",
    tags: ["встреча", "земляки", "Москва", "сообщество"],
    photographer: "Организаторы встречи",
    isHistorical: false,
    uploadDate: "2024-02-15",
    views: 3456,
    likes: 267,
  },
  {
    id: "photo-008",
    title: "Греческий танец",
    description:
      "Исполнение традиционного понтийского танца на фестивале греческой культуры.",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    category: "traditions",
    year: 2022,
    decade: "2020s",
    location: "Афины, Греция",
    tags: ["танец", "культура", "фестиваль", "традиции"],
    photographer: "Фестивальный фотограф",
    isHistorical: false,
    uploadDate: "2024-02-20",
    views: 2134,
    likes: 156,
  },
  {
    id: "photo-009",
    title: "Виноградники Цинцкаро",
    description:
      "Традиционные виноградники, которыми славилось село Цинцкаро. Местное вино было известно далеко за пределами села.",
    url: "https://images.unsplash.com/photo-1555881675-ac4f5a7f4f99?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555881675-ac4f5a7f4f99?w=300",
    category: "village",
    year: 1970,
    decade: "1970s",
    location: "Окрестности Цинцкаро",
    tags: ["виноградники", "сельское хозяйство", "вино", "природа"],
    photographer: "Сельский фотограф",
    isHistorical: true,
    uploadDate: "2024-02-25",
    views: 1789,
    likes: 134,
  },
  {
    id: "photo-010",
    title: "Дети Цинцкаро",
    description:
      "Дети села Цинцкаро играют во дворе школы. Простое счастье детства в небольшом селе.",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    category: "families",
    year: 1980,
    decade: "1980s",
    location: "Школа Цинцкаро",
    tags: ["дети", "школа", "игра", "детство"],
    photographer: "Школьный фотограф",
    isHistorical: true,
    uploadDate: "2024-03-01",
    views: 2345,
    likes: 178,
  },
];

export const galleryVideos: Video[] = [
  {
    id: "video-001",
    title: "Воспоминания о Цинцкаро",
    description:
      "Документальный фильм о жизни в селе Цинцкаро в 1970-80х годах. Интервью со старожилами.",
    url: "https://www.youtube.com/watch?v=example1",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400",
    duration: "45:30",
    category: "historical",
    year: 2020,
    tags: ["документальный", "история", "интервью", "воспоминания"],
    uploadDate: "2024-01-10",
    views: 5678,
  },
  {
    id: "video-002",
    title: "Греческие танцы",
    description:
      "Выступление ансамбля понтийского танца на фестивале в Афинах.",
    url: "https://www.youtube.com/watch?v=example2",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    duration: "12:15",
    category: "traditions",
    year: 2023,
    tags: ["танцы", "фестиваль", "культура", "выступление"],
    uploadDate: "2024-01-15",
    views: 3456,
  },
];

export const galleryStatistics = {
  totalPhotos: 156,
  totalVideos: 12,
  totalViews: 45678,
  totalLikes: 3245,
  categories: galleryCategories.length,
  decades: [
    { decade: "1950s", count: 23, label: "1950-е годы" },
    { decade: "1960s", count: 34, label: "1960-е годы" },
    { decade: "1970s", count: 45, label: "1970-е годы" },
    { decade: "1980s", count: 38, label: "1980-е годы" },
    { decade: "1990s", count: 28, label: "1990-е годы" },
    { decade: "2020s", count: 15, label: "2020-е годы" },
  ],
  mostPopularTags: [
    { tag: "семья", count: 89 },
    { tag: "история", count: 67 },
    { tag: "традиции", count: 54 },
    { tag: "школа", count: 43 },
    { tag: "село", count: 38 },
    { tag: "церковь", count: 32 },
  ],
};
