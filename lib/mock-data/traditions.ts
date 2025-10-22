export interface Tradition {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  origin: string;
  significance: string;
  practices: string[];
  when: string;
  where: string;
  participants: string;
  items?: string[];
  songs?: string[];
  dances?: string[];
  recipes?: string[];
  photos: string[];
  videos?: string[];
  stories: {
    title: string;
    content: string;
    source: string;
  }[];
  relatedTraditions: string[];
  tags: string[];
  isActive: boolean;
  importance: "high" | "medium" | "low";
}

export interface TraditionCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  traditionCount: number;
}

export const traditionCategories: TraditionCategory[] = [
  {
    id: "religious",
    name: "Религиозные традиции",
    description: "Православные праздники и обряды",
    icon: "☦️",
    color: "blue",
    traditionCount: 15,
  },
  {
    id: "festivals",
    name: "Праздники и фестивали",
    description: "Народные праздники и культурные мероприятия",
    icon: "🎉",
    color: "green",
    traditionCount: 12,
  },
  {
    id: "music",
    name: "Музыка и танцы",
    description: "Понтийская музыка, песни и танцы",
    icon: "🎭",
    color: "purple",
    traditionCount: 18,
  },
  {
    id: "culinary",
    name: "Кулинарные традиции",
    description: "Традиционные блюда и рецепты",
    icon: "🍽️",
    color: "orange",
    traditionCount: 25,
  },
  {
    id: "family",
    name: "Семейные обряды",
    description: "Свадьбы, крестины, поминки",
    icon: "👨‍👩‍👧‍👦",
    color: "red",
    traditionCount: 10,
  },
  {
    id: "seasonal",
    name: "Сезонные традиции",
    description: "Традиции, связанные с временами года",
    icon: "🌿",
    color: "indigo",
    traditionCount: 8,
  },
];

export const traditionsData: Tradition[] = [
  {
    id: "easter-celebration",
    title: "Празднование Пасхи",
    description:
      "Главный религиозный праздник греков с особыми традициями и обычаями.",
    category: "religious",
    subcategory: "Пасхальные обряды",
    origin: "Древние греческие православные традиции",
    significance:
      "Воскресение Христово - центральное событие христианской веры",
    practices: [
      "Пост перед Пасхой (40 дней)",
      "Освящение куличей и яиц в церкви",
      "Пасхальная служба в полночь",
      "Традиционная трапеза с ягненком",
      "Игры с крашеными яйцами",
      "Пасхальные песни и танцы",
    ],
    when: "Первое воскресенье после весеннего равноденствия",
    where: "Церковь и семейные дома",
    participants: "Вся община",
    items: ["Кулич", "Крашеные яйца", "Ягненок", "Свечи", "Лавровые ветви"],
    songs: ["Христос Воскрес", "Пасхальные тропари"],
    dances: ["Сиртаки", "Каламатианос"],
    recipes: ["Пасхальный кулич", "Жареный ягненок", "Красные яйца"],
    photos: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    ],
    stories: [
      {
        title: "Пасха в Цинцкаро",
        content:
          "В нашем селе Пасха всегда отмечалась с особым размахом. Все жители собирались в церкви на ночную службу, а затем устраивали общую трапезу.",
        source: "Воспоминания Елены Георгиевой, 1935-2018",
      },
    ],
    relatedTraditions: ["Рождество", "Крещение", "Успение Богородицы"],
    tags: ["Пасха", "религия", "семья", "традиция"],
    isActive: true,
    importance: "high",
  },
  {
    id: "wedding-ceremony",
    title: "Греческая свадьба",
    description:
      "Традиционная свадебная церемония с древними обрядами и обычаями.",
    category: "family",
    subcategory: "Свадебные обряды",
    origin: "Византийские и понтийские традиции",
    significance: "Объединение двух семей и создание новой ячейки общества",
    practices: [
      "Обручение (помолвка)",
      "Венчание в церкви",
      "Обмен кольцами",
      "Коронование молодоженов",
      "Свадебная процессия",
      "Традиционные танцы",
      "Разбрасывание риса и лепестков",
    ],
    when: "Обычно в выходные дни, предпочтительно весной или осенью",
    where: "Церковь и банкетный зал",
    participants: "Жених, невеста, семьи, друзья, община",
    items: ["Венчальные кольца", "Венцы", "Свечи", "Рис", "Цветы"],
    songs: ["Свадебные песни", "Понтийские мелодии"],
    dances: ["Сиртаки", "Хасла", "Сера"],
    recipes: ["Свадебный торт", "Долма", "Баклава", "Вино"],
    photos: ["https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800"],
    stories: [
      {
        title: "Свадьба Марии и Константина",
        content:
          "В 1985 году в Цинцкаро состоялась свадьба, которая запомнилась всем жителям. Традиции соблюдались в полном объеме.",
        source: "Семейный альбом Димитриевых",
      },
    ],
    relatedTraditions: ["Крестины", "Поминальные обряды"],
    tags: ["свадьба", "семья", "церемония", "традиция"],
    isActive: true,
    importance: "high",
  },
  {
    id: "pontic-dance",
    title: "Понтийские танцы",
    description:
      "Традиционные танцы понтийских греков, передаваемые из поколения в поколение.",
    category: "music",
    subcategory: "Танцы",
    origin: "Понтийский регион Малой Азии",
    significance:
      "Сохранение культурной идентичности и связь с исторической родиной",
    practices: [
      "Изучение основных движений",
      "Овладение ритмом и темпом",
      "Групповые выступления",
      "Традиционные костюмы",
      "Музыкальное сопровождение",
    ],
    when: "На праздниках, фестивалях и семейных торжествах",
    where: "Площади, залы, открытые пространства",
    participants: "Все желающие, от детей до пожилых",
    items: ["Традиционные костюмы", "Музыкальные инструменты"],
    songs: ["Понтийские мелодии", "Традиционные песни"],
    dances: ["Сера", "Дипат", "Омал", "Тик", "Кочари"],
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    ],
    stories: [
      {
        title: "Первое выступление ансамбля",
        content:
          "В 1975 году в Цинцкаро был создан первый ансамбль понтийского танца. Руководителем стала Мария Ивановна Димитриева.",
        source: "История культурной жизни Цинцкаро",
      },
    ],
    relatedTraditions: ["Понтийская музыка", "Народные костюмы"],
    tags: ["танцы", "культура", "традиция", "музыка"],
    isActive: true,
    importance: "high",
  },
  {
    id: "dolma-tradition",
    title: "Приготовление долмы",
    description: "Традиционное блюдо из виноградных листьев с мясом и рисом.",
    category: "culinary",
    subcategory: "Основные блюда",
    origin: "Понтийская кухня",
    significance: "Символ единства семьи и передача кулинарных секретов",
    practices: [
      "Сбор виноградных листьев",
      "Подготовка начинки",
      "Заворачивание долмы",
      "Приготовление в казане",
      "Семейная трапеза",
    ],
    when: "Летом, когда свежие виноградные листья",
    where: "Дома, на кухне",
    participants: "Женщины семьи, дети помогают",
    items: ["Виноградные листья", "Мясо", "Рис", "Лук", "Пряности"],
    recipes: ["Классическая долма", "Долма с овощами", "Постная долма"],
    photos: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    ],
    stories: [
      {
        title: "Секрет бабушкиной долмы",
        content:
          "Каждая хозяйка в Цинцкаро имела свой секрет приготовления долмы. Секреты передавались от матери к дочери.",
        source: "Кулинарные традиции Цинцкаро",
      },
    ],
    relatedTraditions: ["Виноградники", "Семейные трапезы"],
    tags: ["кулинария", "долма", "семья", "традиция"],
    isActive: true,
    importance: "medium",
  },
  {
    id: "christmas-traditions",
    title: "Рождественские традиции",
    description:
      "Празднование Рождества Христова с особыми обычаями и обрядами.",
    category: "religious",
    subcategory: "Рождественские обряды",
    origin: "Православные традиции",
    significance: "Рождение Иисуса Христа - основа христианской веры",
    practices: [
      "Рождественский пост",
      "Рождественская служба",
      "Колядки и рождественские песни",
      "Традиционная трапеза",
      "Обмен подарками",
      "Рождественские игры",
    ],
    when: "7 января (по старому стилю)",
    where: "Церковь и семейные дома",
    participants: "Вся община",
    items: ["Рождественская елка", "Свечи", "Подарки", "Традиционные блюда"],
    songs: ["Рождественские колядки", "Тропари Рождества"],
    dances: ["Рождественские танцы"],
    recipes: ["Рождественский гусь", "Кутья", "Вареники"],
    photos: ["https://images.unsplash.com/photo-1555881675-ac4f5a7f4f99?w=800"],
    stories: [
      {
        title: "Рождество в детстве",
        content:
          "В детстве Рождество было самым волшебным праздником. Мы ходили колядовать по домам и получали сладости.",
        source: "Воспоминания детства",
      },
    ],
    relatedTraditions: ["Пасха", "Крещение"],
    tags: ["Рождество", "религия", "семья", "праздник"],
    isActive: true,
    importance: "high",
  },
  {
    id: "grape-harvest",
    title: "Праздник сбора винограда",
    description:
      "Традиционный праздник урожая винограда с народными гуляниями.",
    category: "seasonal",
    subcategory: "Осенние традиции",
    origin: "Сельскохозяйственные традиции",
    significance: "Благодарность за урожай и подготовка к зиме",
    practices: [
      "Сбор винограда всей семьей",
      "Давление виноградного сока",
      "Приготовление вина",
      "Народные гуляния",
      "Танцы и песни",
      "Угощение вином и едой",
    ],
    when: "Сентябрь-октябрь",
    where: "Виноградники и сельские площади",
    participants: "Все жители села",
    items: [
      "Корзины для винограда",
      "Пресс",
      "Бочки",
      "Музыкальные инструменты",
    ],
    songs: ["Песни о винограде", "Народные мелодии"],
    dances: ["Хороводные танцы", "Танцы с корзинами"],
    recipes: ["Молодое вино", "Виноградный сок", "Виноградное варенье"],
    photos: [
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800",
    ],
    stories: [
      {
        title: "Первый урожай",
        content:
          "В 1970 году урожай винограда был особенно богатым. Праздник длился три дня, и все жители участвовали в торжествах.",
        source: "Летопись сельской жизни",
      },
    ],
    relatedTraditions: ["Виноделие", "Сельскохозяйственные праздники"],
    tags: ["виноград", "урожай", "осень", "традиция"],
    isActive: true,
    importance: "medium",
  },
];

export const traditionsStatistics = {
  totalTraditions: 88,
  activeTraditions: 76,
  categories: traditionCategories.length,
  mostPracticed: [
    { tradition: "Пасха", percentage: 95 },
    { tradition: "Рождество", percentage: 90 },
    { tradition: "Понтийские танцы", percentage: 85 },
    { tradition: "Греческая свадьба", percentage: 80 },
    { tradition: "Приготовление долмы", percentage: 75 },
  ],
  byImportance: [
    { level: "high", count: 25, label: "Высокая важность" },
    { level: "medium", count: 45, label: "Средняя важность" },
    { level: "low", count: 18, label: "Низкая важность" },
  ],
  preservationStatus: [
    { status: "active", count: 76, label: "Активные традиции" },
    { status: "reviving", count: 8, label: "Возрождающиеся" },
    { status: "endangered", count: 4, label: "Под угрозой исчезновения" },
  ],
};
