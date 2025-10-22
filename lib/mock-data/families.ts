export interface FamilyMember {
  id: string;
  name: string;
  surname: string;
  birthYear?: number;
  deathYear?: number;
  isAlive: boolean;
  gender: "male" | "female";
  relationship: "head" | "spouse" | "child" | "sibling" | "parent";
  occupation?: string;
  location?: string;
  photo?: string;
  notes?: string;
}

export interface Family {
  id: string;
  surname: string;
  origin: string; // Where they lived in Tsintskaro
  currentLocations: string[];
  generation: number; // How many generations since leaving Tsintskaro
  totalMembers: number;
  description: string;
  familyTree?: {
    root: FamilyMember;
    children: Family[];
  };
  photos: string[];
  stories: {
    title: string;
    content: string;
    year?: number;
  }[];
  migrationHistory: {
    from: string;
    to: string;
    year: number;
    reason: string;
  }[];
}

export const familiesData: Family[] = [
  {
    id: "ageev",
    surname: "Агеевы",
    origin: "Центральная улица, дом 15",
    currentLocations: ["Москва", "Санкт-Петербург", "Афины"],
    generation: 3,
    totalMembers: 45,
    description:
      "Одна из самых многочисленных семей из Цинцкаро. Основатель семьи - Константин Агеев, переселился в Россию в 1992 году.",
    photos: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    ],
    stories: [
      {
        title: "Переезд в Москву",
        content:
          "В 1992 году Константин Агеев с семьей переехал в Москву в поисках лучшей жизни. Сначала было трудно, но благодаря поддержке земляков семья устроилась.",
        year: 1992,
      },
      {
        title: "Семейная традиция",
        content:
          "Каждый год 15 августа семья Агеевых собирается на традиционный греческий обед в память о родине.",
        year: 1995,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Москва",
        year: 1992,
        reason: "Экономические трудности",
      },
      {
        from: "Москва",
        to: "Афины",
        year: 2005,
        reason: "Возвращение на историческую родину",
      },
    ],
  },
  {
    id: "georgiev",
    surname: "Георгиевы",
    origin: "Улица Мира, дом 8",
    currentLocations: ["Афины", "Салоники", "Берлин"],
    generation: 2,
    totalMembers: 32,
    description:
      "Семья Георгиевых известна своими образовательными традициями. Многие члены семьи стали учителями и врачами.",
    photos: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    ],
    stories: [
      {
        title: "Династия учителей",
        content:
          "Три поколения Георгиевых работали учителями. Елена Георгиева была первой женщиной-директором школы в Цинцкаро.",
        year: 1975,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Афины",
        year: 1991,
        reason: "Возвращение на родину предков",
      },
    ],
  },
  {
    id: "dimtriev",
    surname: "Димитриевы",
    origin: "Северная часть села",
    currentLocations: ["Берлин", "Франкфурт", "Мюнхен"],
    generation: 2,
    totalMembers: 28,
    description:
      "Семья Димитриевых славится своими ремесленными традициями. Многие из них работают в строительстве и архитектуре.",
    photos: ["https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800"],
    stories: [
      {
        title: "Мастера-строители",
        content:
          "Димитриевы из поколения в поколение передавали секреты строительного мастерства. В Цинцкаро они построили много домов.",
        year: 1980,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Берлин",
        year: 1993,
        reason: "Работа по контракту",
      },
    ],
  },
  {
    id: "konstantinov",
    surname: "Константиновы",
    origin: "Восточная часть села",
    currentLocations: ["Ростов-на-Дону", "Краснодар", "Волгоград"],
    generation: 3,
    totalMembers: 38,
    description:
      "Семья Константиновых занималась сельским хозяйством. После переезда многие продолжили работать в аграрной сфере.",
    photos: [
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800",
    ],
    stories: [
      {
        title: "Сельскохозяйственные традиции",
        content:
          "Константиновы славились своими виноградниками. Их вино было известно далеко за пределами Цинцкаро.",
        year: 1985,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Ростов-на-Дону",
        year: 1994,
        reason: "Аграрные возможности",
      },
    ],
  },
  {
    id: "nikolaev",
    surname: "Николаевы",
    origin: "Южная часть села",
    currentLocations: ["Салоники", "Афины", "Патры"],
    generation: 2,
    totalMembers: 25,
    description:
      "Семья Николаевых известна своими торговыми традициями. Многие из них стали успешными бизнесменами.",
    photos: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    ],
    stories: [
      {
        title: "Торговые традиции",
        content:
          "Николаевы веками занимались торговлей. В Цинцкаро у них был самый большой магазин.",
        year: 1970,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Салоники",
        year: 1992,
        reason: "Развитие бизнеса",
      },
    ],
  },
  {
    id: "petrov",
    surname: "Петровы",
    origin: "Западная часть села",
    currentLocations: ["Киев", "Одесса", "Харьков"],
    generation: 3,
    totalMembers: 42,
    description:
      "Семья Петровых славится своими культурными традициями. Многие из них стали артистами и музыкантами.",
    photos: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    ],
    stories: [
      {
        title: "Музыкальные традиции",
        content:
          "Петровы из поколения в поколение передавали любовь к музыке. Они создали первый оркестр в Цинцкаро.",
        year: 1965,
      },
    ],
    migrationHistory: [
      {
        from: "Цинцкаро",
        to: "Киев",
        year: 1995,
        reason: "Культурные связи",
      },
    ],
  },
];

export const familyStatistics = {
  totalFamilies: 156,
  totalMembers: 2847,
  countries: [
    { name: "Россия", count: 89, percentage: 57 },
    { name: "Греция", count: 45, percentage: 29 },
    { name: "Германия", count: 15, percentage: 10 },
    { name: "Другие", count: 7, percentage: 4 },
  ],
  generations: [
    { generation: 1, count: 12, description: "Первый год после переезда" },
    { generation: 2, count: 67, description: "Дети переселенцев" },
    { generation: 3, count: 45, description: "Внуки переселенцев" },
    { generation: 4, count: 32, description: "Правнуки переселенцев" },
  ],
};
