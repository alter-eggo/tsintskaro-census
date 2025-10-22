export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string; // in minutes
  type: "video" | "text" | "quiz" | "interactive";
  content: string;
  resources?: string[];
  isCompleted: boolean;
  isLocked: boolean;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  instructor: string;
  instructorTitle: string;
  instructorPhoto: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string; // total course duration
  lessonsCount: number;
  completedLessons: number;
  progress: number; // percentage
  thumbnail: string;
  lessons: Lesson[];
  prerequisites?: string[];
  learningOutcomes: string[];
  tags: string[];
  isEnrolled: boolean;
  rating: number;
  studentsCount: number;
  lastUpdated: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[]; // course IDs
  totalDuration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  isRecommended: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: "course" | "lesson" | "streak" | "special";
  isEarned: boolean;
  earnedDate?: string;
  requirement: string;
}

export const educationCourses: Course[] = [
  {
    id: "greek-language-basics",
    title: "Основы греческого языка",
    description:
      "Изучите основы понтийского греческого языка, который сохранился в общине Цинцкаро. Курс включает фонетику, базовую грамматику и повседневную лексику.",
    shortDescription: "Изучение понтийского греческого языка с нуля",
    instructor: "Елена Георгиева",
    instructorTitle: "Профессор греческого языка",
    instructorPhoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    category: "Языки",
    level: "beginner",
    duration: "8 недель",
    lessonsCount: 16,
    completedLessons: 8,
    progress: 50,
    thumbnail:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
    lessons: [
      {
        id: "lesson-1",
        title: "Введение в понтийский греческий",
        description: "История языка и его особенности",
        duration: "15",
        type: "video",
        content: "Вводное видео о понтийском греческом языке",
        isCompleted: true,
        isLocked: false,
        order: 1,
      },
      {
        id: "lesson-2",
        title: "Алфавит и произношение",
        description: "Изучение греческого алфавита и звуков",
        duration: "20",
        type: "interactive",
        content: "Интерактивное изучение алфавита",
        isCompleted: true,
        isLocked: false,
        order: 2,
      },
      {
        id: "lesson-3",
        title: "Базовые фразы",
        description: "Основные фразы для общения",
        duration: "25",
        type: "video",
        content: "Видеоурок с базовыми фразами",
        isCompleted: false,
        isLocked: false,
        order: 3,
      },
      {
        id: "lesson-4",
        title: "Проверочный тест",
        description: "Тест по пройденному материалу",
        duration: "10",
        type: "quiz",
        content: "Тест на знание алфавита и фраз",
        isCompleted: false,
        isLocked: true,
        order: 4,
      },
    ],
    learningOutcomes: [
      "Понимание основ понтийского греческого языка",
      "Умение читать греческий алфавит",
      "Знание базовых фраз для общения",
      "Понимание культурного контекста языка",
    ],
    tags: ["греческий язык", "понтийский", "языки", "культура"],
    isEnrolled: true,
    rating: 4.8,
    studentsCount: 1247,
    lastUpdated: "2024-01-15",
  },
  {
    id: "tsintskaro-history",
    title: "История Цинцкаро",
    description:
      "Подробное изучение истории села Цинцкаро от основания до наших дней. Курс включает архивные материалы, интервью с очевидцами и культурный контекст.",
    shortDescription: "История греческого села Цинцкаро",
    instructor: "Константин Георгиев",
    instructorTitle: "Историк, профессор",
    instructorPhoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    category: "История",
    level: "intermediate",
    duration: "6 недель",
    lessonsCount: 12,
    completedLessons: 0,
    progress: 0,
    thumbnail:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    lessons: [
      {
        id: "lesson-5",
        title: "Основание села",
        description: "История основания Цинцкаро",
        duration: "30",
        type: "video",
        content: "Видеолекция об основании села",
        isCompleted: false,
        isLocked: false,
        order: 1,
      },
      {
        id: "lesson-6",
        title: "Золотой век",
        description: "Период расцвета села",
        duration: "25",
        type: "text",
        content: "Текстовые материалы о золотом веке",
        isCompleted: false,
        isLocked: false,
        order: 2,
      },
    ],
    learningOutcomes: [
      "Знание истории Цинцкаро",
      "Понимание культурного контекста",
      "Работа с архивными материалами",
    ],
    tags: ["история", "Цинцкаро", "греки", "культура"],
    isEnrolled: false,
    rating: 4.9,
    studentsCount: 892,
    lastUpdated: "2024-01-20",
  },
  {
    id: "pontic-dance",
    title: "Понтийские танцы",
    description:
      "Изучение традиционных понтийских танцев с пошаговыми инструкциями, историей танцев и культурным значением.",
    shortDescription: "Обучение понтийским танцам",
    instructor: "Мария Димитриева",
    instructorTitle: "Хореограф, мастер танца",
    instructorPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    category: "Культура",
    level: "beginner",
    duration: "4 недели",
    lessonsCount: 8,
    completedLessons: 0,
    progress: 0,
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    lessons: [
      {
        id: "lesson-7",
        title: "Введение в понтийские танцы",
        description: "История и значение танцев",
        duration: "20",
        type: "video",
        content: "Вводное видео о танцах",
        isCompleted: false,
        isLocked: false,
        order: 1,
      },
      {
        id: "lesson-8",
        title: "Базовые движения",
        description: "Основные движения и позиции",
        duration: "30",
        type: "interactive",
        content: "Интерактивное изучение движений",
        isCompleted: false,
        isLocked: false,
        order: 2,
      },
    ],
    learningOutcomes: [
      "Знание понтийских танцев",
      "Умение выполнять базовые движения",
      "Понимание культурного значения",
    ],
    tags: ["танцы", "культура", "традиции", "понтийский"],
    isEnrolled: false,
    rating: 4.7,
    studentsCount: 567,
    lastUpdated: "2024-01-25",
  },
  {
    id: "greek-cuisine",
    title: "Греческая кухня",
    description:
      "Изучение традиционных греческих блюд и рецептов, передаваемых из поколения в поколение в семьях из Цинцкаро.",
    shortDescription: "Традиционные греческие рецепты",
    instructor: "Анна Константинова",
    instructorTitle: "Шеф-повар, хранитель традиций",
    instructorPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    category: "Кулинария",
    level: "beginner",
    duration: "5 недель",
    lessonsCount: 10,
    completedLessons: 0,
    progress: 0,
    thumbnail:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    lessons: [
      {
        id: "lesson-9",
        title: "Традиционные ингредиенты",
        description: "Основные ингредиенты греческой кухни",
        duration: "25",
        type: "video",
        content: "Видео о традиционных ингредиентах",
        isCompleted: false,
        isLocked: false,
        order: 1,
      },
    ],
    learningOutcomes: [
      "Знание традиционных рецептов",
      "Умение готовить греческие блюда",
      "Понимание культурного значения еды",
    ],
    tags: ["кулинария", "рецепты", "греческая кухня", "традиции"],
    isEnrolled: false,
    rating: 4.6,
    studentsCount: 423,
    lastUpdated: "2024-02-01",
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "cultural-heritage",
    title: "Культурное наследие Цинцкаро",
    description: "Полный курс изучения культурного наследия греков из Цинцкаро",
    courses: [
      "greek-language-basics",
      "tsintskaro-history",
      "pontic-dance",
      "greek-cuisine",
    ],
    totalDuration: "23 недели",
    difficulty: "intermediate",
    category: "Культура",
    isRecommended: true,
  },
  {
    id: "language-mastery",
    title: "Мастерство греческого языка",
    description: "Углубленное изучение понтийского греческого языка",
    courses: ["greek-language-basics"],
    totalDuration: "8 недель",
    difficulty: "beginner",
    category: "Языки",
    isRecommended: false,
  },
];

export const achievements: Achievement[] = [
  {
    id: "first-lesson",
    title: "Первые шаги",
    description: "Завершите свой первый урок",
    icon: "🎯",
    type: "lesson",
    isEarned: true,
    earnedDate: "2024-01-10",
    requirement: "Завершить 1 урок",
  },
  {
    id: "language-learner",
    title: "Изучающий язык",
    description: "Завершите 50% курса греческого языка",
    icon: "📚",
    type: "course",
    isEarned: true,
    earnedDate: "2024-01-15",
    requirement: "50% прогресса в курсе языка",
  },
  {
    id: "culture-expert",
    title: "Знаток культуры",
    description: "Завершите все курсы по культуре",
    icon: "🏆",
    type: "special",
    isEarned: false,
    requirement: "Завершить все культурные курсы",
  },
  {
    id: "streak-7",
    title: "Неделя обучения",
    description: "Занимайтесь 7 дней подряд",
    icon: "🔥",
    type: "streak",
    isEarned: false,
    requirement: "7 дней обучения подряд",
  },
];

export const educationStatistics = {
  totalCourses: 4,
  enrolledCourses: 1,
  completedLessons: 8,
  totalLessons: 46,
  studyStreak: 3,
  totalStudyTime: "2 часа 30 минут",
  achievements: achievements.filter((a) => a.isEarned).length,
  totalAchievements: achievements.length,
  progressPercentage: 17.4,
};
