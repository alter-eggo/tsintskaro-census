"use client";

import {
  Calendar,
  Users,
  Eye,
  Image as ImageIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Info,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      priority: "urgent",
      title: "Встреча земляков в Москве",
      content:
        "Ежемесячная встреча земляков из Цинцкаро 20 декабря в 18:00. Адрес: ул. Арбат, 15.",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: 2,
      priority: "important",
      title: "Обновление семейного архива",
      content:
        "Добавлены новые записи в базу данных семей. Проверьте информацию о ваших родственниках.",
      icon: AlertCircle,
      color: "orange",
    },
    {
      id: 3,
      priority: "normal",
      title: "Новые исторические материалы",
      content:
        "Опубликованы архивные фотографии и документы из истории Цинцкаро 1950-60х годов.",
      icon: Info,
      color: "blue",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Цинцкаро
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Информационный сайт для греков из села Цинцкаро. История, семьи,
              традиции и связь с родиной.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/history"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                История села
              </Link>
              <Link
                href="/families"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Семейный справочник
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Новости и события
            </h2>
            <p className="text-gray-600">
              Информация о жизни общины и важных событиях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>15 декабря 2024</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">
                    {item === 1 && "Обновление базы данных семей"}
                    {item === 2 && "Новые материалы по истории села"}
                    {item === 3 && "Встреча земляков в Москве"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item === 1 &&
                      "Добавлены новые записи в семейный справочник. Проверьте информацию о ваших родственниках."}
                    {item === 2 &&
                      "Опубликованы архивные фотографии и документы из истории Цинцкаро 1950-60х годов."}
                    {item === 3 &&
                      "Ежемесячная встреча земляков из Цинцкаро в культурном центре. Обсуждение вопросов сохранения традиций."}
                  </p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Читать далее →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Carousel */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Важные объявления
            </h2>
            <p className="text-gray-600">Информация для земляков из Цинцкаро</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentAnnouncement * 100}%)`,
                }}
              >
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-sm border p-6 max-w-md mx-auto">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full bg-${announcement.color}-100`}
                        >
                          <announcement.icon
                            className={`h-6 w-6 text-${announcement.color}-600`}
                          />
                        </div>
                        <div className="flex-1">
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${announcement.color}-100 text-${announcement.color}-800`}
                          >
                            {announcement.priority === "urgent" && "Срочно"}
                            {announcement.priority === "important" && "Важно"}
                            {announcement.priority === "normal" && "Объявление"}
                          </div>
                          <h3 className="font-bold text-lg mb-3">
                            {announcement.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {announcement.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentAnnouncement((prev) =>
                  prev === 0 ? announcements.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                setCurrentAnnouncement(
                  (prev) => (prev + 1) % announcements.length
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAnnouncement(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentAnnouncement ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Honor Board Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Известные земляки
            </h2>
            <p className="text-gray-600">
              Люди из Цинцкаро, внесшие вклад в развитие общины
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Иван Петров",
                achievement:
                  "Организатор встреч земляков, собиратель семейных историй",
              },
              {
                name: "Мария Сидорова",
                achievement: "Создатель архива фотографий и документов села",
              },
              {
                name: "Александр Козлов",
                achievement: "Исследователь истории греков в России",
              },
              {
                name: "Елена Николаева",
                achievement: "Координатор связи с исторической родиной",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-2">{person.name}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {person.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Статистика общины
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                color: "blue",
                number: "1,247",
                label: "Посетителей сайта",
              },
              {
                icon: Users,
                color: "green",
                number: "156",
                label: "Семей в базе",
              },
              {
                icon: Calendar,
                color: "purple",
                number: "12",
                label: "Встреч в год",
              },
              {
                icon: ImageIcon,
                color: "orange",
                number: "2,432",
                label: "Фотографий",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-lg mb-4`}
                >
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Фотогалерея
            </h2>
            <p className="text-gray-600">Исторические фотографии и документы</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">
                    {index === 0 && "Цинцкаро 1950-е годы"}
                    {index === 1 && "Семейные фотографии"}
                    {index === 2 && "Школьные годы"}
                    {index === 3 && "Традиционные праздники"}
                    {index === 4 && "Работа в колхозе"}
                    {index === 5 && "Встречи земляков"}
                    {index === 6 && "Документы и справки"}
                    {index === 7 && "Современные встречи"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Разделы сайта
            </h2>
            <p className="text-gray-600">
              Основные разделы информационного сайта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "📖",
                title: "История села",
                description: "Исторические материалы о Цинцкаро",
                href: "/history",
              },
              {
                emoji: "👨‍👩‍👧‍👦",
                title: "Семейный справочник",
                description: "База данных семей из Цинцкаро",
                href: "/families",
              },
              {
                emoji: "📷",
                title: "Фотогалерея",
                description: "Архивные фотографии и документы",
                href: "/gallery",
              },
              {
                emoji: "🎭",
                title: "Традиции",
                description: "Культурное наследие греков",
                href: "/traditions",
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {link.emoji}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  {link.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Ц</span>
                </div>
                <span className="text-xl font-bold">Цинцкаро</span>
              </div>
              <p className="text-gray-400 text-sm">
                Информационный сайт для греков из села Цинцкаро. История, семьи,
                традиции и связь с родиной.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    История
                  </Link>
                </li>
                <li>
                  <Link
                    href="/families"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Семьи
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Галерея
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/traditions"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Традиции
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Образование
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leisure"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Досуг
                  </Link>
                </li>
                <li>
                  <Link
                    href="/games"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Игры
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>info@tsintskaro.org</p>
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Информационный сайт Цинцкаро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
