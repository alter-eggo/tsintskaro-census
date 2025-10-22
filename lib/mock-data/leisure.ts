export interface LeisureActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  type: "recipe" | "wedding" | "christmas" | "event" | "tourism" | "sports";
  date?: string;
  location?: string;
  participants?: string;
  duration?: string;
  difficulty?: "easy" | "medium" | "hard";
  ingredients?: string[];
  instructions?: string[];
  equipment?: string[];
  photos: string[];
  videos?: string[];
  tags: string[];
  isActive: boolean;
  importance: "high" | "medium" | "low";
  createdBy?: string;
  views: number;
  likes: number;
}

export interface LeisureCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  activityCount: number;
}

export const leisureCategories: LeisureCategory[] = [
  {
    id: "recipes",
    name: "Рецепты",
    description: "Традиционные блюда и кулинарные секреты",
    icon: "🍽️",
    color: "orange",
    activityCount: 45,
  },
  {
    id: "weddings",
    name: "Свадьбы",
    description: "Свадебные традиции и мероприятия",
    icon: "💒",
    color: "pink",
    activityCount: 12,
  },
  {
    id: "christmas",
    name: "Рождество",
    description: "Рождественские традиции и празднования",
    icon: "🎄",
    color: "green",
    activityCount: 18,
  },
  {
    id: "events",
    name: "События",
    description: "Культурные мероприятия и встречи",
    icon: "🎉",
    color: "purple",
    activityCount: 25,
  },
  {
    id: "tourism",
    name: "Туризм",
    description: "Путешествия и экскурсии",
    icon: "✈️",
    color: "blue",
    activityCount: 15,
  },
  {
    id: "sports",
    name: "Физкультура",
    description: "Спортивные мероприятия и активность",
    icon: "⚽",
    color: "red",
    activityCount: 20,
  },
];

export const leisureActivities: LeisureActivity[] = [
  // Рецепты
  {
    id: "dolma-recipe",
    title: "Традиционная долма",
    description:
      "Классический рецепт долмы из виноградных листьев с мясом и рисом",
    category: "recipes",
    subcategory: "Основные блюда",
    type: "recipe",
    difficulty: "medium",
    ingredients: [
      "Виноградные листья - 50 шт",
      "Говяжий фарш - 500г",
      "Рис - 200г",
      "Лук - 2 шт",
      "Помидоры - 3 шт",
      "Зелень (укроп, петрушка) - по вкусу",
      "Соль, перец - по вкусу",
      "Растительное масло - 3 ст.л",
    ],
    instructions: [
      "Промыть виноградные листья и обдать кипятком",
      "Смешать фарш с отваренным рисом и мелко нарезанным луком",
      "Добавить специи и зелень",
      "Завернуть начинку в листья",
      "Уложить в кастрюлю, добавить томаты и масло",
      "Тушить на медленном огне 1.5 часа",
    ],
    equipment: ["Кастрюля", "Дуршлаг", "Нож", "Разделочная доска"],
    photos: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ],
    tags: ["долма", "традиционное блюдо", "мясо", "виноградные листья"],
    isActive: true,
    importance: "high",
    createdBy: "Мария Георгиевна",
    views: 1234,
    likes: 89,
  },
  {
    id: "baklava-recipe",
    title: "Баклава по-цинцкарски",
    description: "Сладкий десерт из слоеного теста с орехами и медом",
    category: "recipes",
    subcategory: "Десерты",
    type: "recipe",
    difficulty: "hard",
    ingredients: [
      "Слоеное тесто - 500г",
      "Грецкие орехи - 300г",
      "Сахар - 200г",
      "Мед - 150г",
      "Сливочное масло - 100г",
      "Корица - 1 ч.л",
      "Лимонный сок - 2 ст.л",
    ],
    instructions: [
      "Измельчить орехи и смешать с сахаром и корицей",
      "Раскатать тесто на тонкие листы",
      "Смазать листы маслом и уложить начинку",
      "Разрезать на ромбы и выпекать 30 минут",
      "Приготовить сироп из меда и лимонного сока",
      "Залить горячую баклаву сиропом",
    ],
    equipment: ["Духовка", "Форма для выпечки", "Скалка", "Нож"],
    photos: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    ],
    tags: ["баклава", "десерт", "орехи", "мед"],
    isActive: true,
    importance: "high",
    createdBy: "Анна Петровна",
    views: 987,
    likes: 67,
  },

  // Свадьбы
  {
    id: "wedding-ceremony",
    title: "Традиционная греческая свадьба",
    description:
      "Полный обряд греческой свадебной церемонии с древними традициями",
    category: "weddings",
    subcategory: "Церемония",
    type: "wedding",
    date: "2024-06-15",
    location: "Церковь Святого Георгия, Цинцкаро",
    participants: "Жених, невеста, семьи, друзья",
    duration: "4 часа",
    photos: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800",
    ],
    videos: ["https://www.youtube.com/watch?v=wedding-ceremony"],
    tags: ["свадьба", "традиции", "церемония", "греческая культура"],
    isActive: true,
    importance: "high",
    createdBy: "Священник отец Георгий",
    views: 2345,
    likes: 156,
  },
  {
    id: "wedding-reception",
    title: "Свадебный банкет",
    description: "Организация традиционного свадебного застолья",
    category: "weddings",
    subcategory: "Банкет",
    type: "wedding",
    date: "2024-06-15",
    location: "Дом культуры Цинцкаро",
    participants: "150 гостей",
    duration: "6 часов",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    ],
    tags: ["свадьба", "банкет", "застолье", "праздник"],
    isActive: true,
    importance: "high",
    createdBy: "Организатор свадеб",
    views: 1876,
    likes: 123,
  },

  // Рождество
  {
    id: "christmas-celebration",
    title: "Рождественские традиции",
    description:
      "Празднование Рождества в Цинцкаро с сохранением всех традиций",
    category: "christmas",
    subcategory: "Празднование",
    type: "christmas",
    date: "2024-01-07",
    location: "Цинцкаро",
    participants: "Вся община",
    duration: "3 дня",
    photos: [
      "https://images.unsplash.com/photo-1555881675-ac4f5a7f4f99?w=800",
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800",
    ],
    tags: ["Рождество", "традиции", "праздник", "семья"],
    isActive: true,
    importance: "high",
    createdBy: "Община Цинцкаро",
    views: 3456,
    likes: 234,
  },
  {
    id: "christmas-carols",
    title: "Рождественские колядки",
    description: "Традиционные рождественские песни и колядки",
    category: "christmas",
    subcategory: "Музыка",
    type: "christmas",
    photos: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    ],
    videos: ["https://www.youtube.com/watch?v=christmas-carols"],
    tags: ["Рождество", "колядки", "музыка", "традиции"],
    isActive: true,
    importance: "medium",
    createdBy: "Церковный хор",
    views: 1234,
    likes: 89,
  },

  // События
  {
    id: "village-festival",
    title: "День села Цинцкаро",
    description: "Ежегодный праздник села с культурной программой",
    category: "events",
    subcategory: "Фестиваль",
    type: "event",
    date: "2024-08-15",
    location: "Центральная площадь Цинцкаро",
    participants: "Все жители и гости",
    duration: "1 день",
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    ],
    tags: ["фестиваль", "село", "культура", "праздник"],
    isActive: true,
    importance: "high",
    createdBy: "Администрация села",
    views: 4567,
    likes: 345,
  },
  {
    id: "diaspora-meeting",
    title: "Встреча земляков",
    description: "Ежегодная встреча земляков из Цинцкаро в Москве",
    category: "events",
    subcategory: "Встреча",
    type: "event",
    date: "2024-11-15",
    location: "Москва, Дом культуры",
    participants: "200+ человек",
    duration: "1 день",
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    ],
    tags: ["встреча", "земляки", "Москва", "сообщество"],
    isActive: true,
    importance: "high",
    createdBy: "Организаторы встречи",
    views: 6789,
    likes: 456,
  },

  // Туризм
  {
    id: "tsintskaro-tour",
    title: "Экскурсия по Цинцкаро",
    description: "Пешеходная экскурсия по историческим местам села",
    category: "tourism",
    subcategory: "Экскурсия",
    type: "tourism",
    date: "2024-05-20",
    location: "Цинцкаро и окрестности",
    participants: "Туристические группы",
    duration: "3 часа",
    photos: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    ],
    tags: ["экскурсия", "история", "село", "туризм"],
    isActive: true,
    importance: "medium",
    createdBy: "Туристическое агентство",
    views: 2345,
    likes: 178,
  },
  {
    id: "wine-tasting",
    title: "Дегустация местного вина",
    description: "Знакомство с традициями виноделия Цинцкаро",
    category: "tourism",
    subcategory: "Дегустация",
    type: "tourism",
    date: "2024-09-10",
    location: "Винодельня Цинцкаро",
    participants: "Группы до 20 человек",
    duration: "2 часа",
    photos: [
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800",
    ],
    tags: ["вино", "дегустация", "традиции", "туризм"],
    isActive: true,
    importance: "medium",
    createdBy: "Винодельня Цинцкаро",
    views: 1876,
    likes: 134,
  },

  // Спорт
  {
    id: "football-tournament",
    title: "Футбольный турнир",
    description: "Ежегодный турнир по футболу среди команд села",
    category: "sports",
    subcategory: "Футбол",
    type: "sports",
    date: "2024-07-20",
    location: "Спортивная площадка Цинцкаро",
    participants: "8 команд",
    duration: "1 день",
    photos: [
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800",
    ],
    tags: ["футбол", "турнир", "спорт", "соревнование"],
    isActive: true,
    importance: "medium",
    createdBy: "Спортивный клуб",
    views: 1234,
    likes: 89,
  },
  {
    id: "hiking-trail",
    title: "Пеший маршрут по окрестностям",
    description: "Туристический маршрут по живописным местам вокруг Цинцкаро",
    category: "sports",
    subcategory: "Пеший туризм",
    type: "sports",
    location: "Окрестности Цинцкаро",
    participants: "Группы до 15 человек",
    duration: "4 часа",
    difficulty: "medium",
    photos: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"],
    tags: ["пеший туризм", "природа", "маршрут", "активный отдых"],
    isActive: true,
    importance: "medium",
    createdBy: "Туристический клуб",
    views: 987,
    likes: 67,
  },
];

export const leisureStatistics = {
  totalActivities: 135,
  activeActivities: 120,
  categories: leisureCategories.length,
  mostPopular: [
    { activity: "Традиционная долма", views: 1234, category: "recipes" },
    { activity: "День села Цинцкаро", views: 4567, category: "events" },
    { activity: "Встреча земляков", views: 6789, category: "events" },
    { activity: "Рождественские традиции", views: 3456, category: "christmas" },
    {
      activity: "Традиционная греческая свадьба",
      views: 2345,
      category: "weddings",
    },
  ],
  byCategory: [
    { category: "recipes", count: 45, label: "Рецепты" },
    { category: "events", count: 25, label: "События" },
    { category: "sports", count: 20, label: "Физкультура" },
    { category: "christmas", count: 18, label: "Рождество" },
    { category: "tourism", count: 15, label: "Туризм" },
    { category: "weddings", count: 12, label: "Свадьбы" },
  ],
  byImportance: [
    { level: "high", count: 35, label: "Высокая важность" },
    { level: "medium", count: 70, label: "Средняя важность" },
    { level: "low", count: 30, label: "Низкая важность" },
  ],
  monthlyActivity: [
    { month: "Январь", count: 12, label: "Рождественские мероприятия" },
    { month: "Май", count: 8, label: "Весенние экскурсии" },
    { month: "Июнь", count: 15, label: "Свадебный сезон" },
    { month: "Июль", count: 10, label: "Спортивные турниры" },
    { month: "Август", count: 18, label: "День села" },
    { month: "Сентябрь", count: 12, label: "Винодельческие туры" },
    { month: "Ноябрь", count: 8, label: "Встречи земляков" },
    { month: "Декабрь", count: 14, label: "Подготовка к Рождеству" },
  ],
};
