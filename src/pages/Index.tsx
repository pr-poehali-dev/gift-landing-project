import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const products = [
    {
      title: "Акриловые 3D ночники",
      price: "до 1990 ₽",
      features: ["16 цветов свечения", "Пульт в комплекте", "Размер 15×20 см"],
      icon: "Lightbulb",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Акриловые фигурки с УФ-печатью",
      price: "до 399 ₽",
      features: ["Размер 15×20 см", "Яркие цвета", "Любой дизайн"],
      icon: "Star",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Тафтинг-ковры ручного изготовления",
      price: "от 7000 ₽",
      features: ["Размер 60×90 см", "Ручная работа", "Уникальный дизайн"],
      icon: "Palette",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Кулоны из нержавейки с гравировкой",
      price: "790 ₽",
      features: ["Любая надпись", "Цепочка в комплекте", "Долговечность"],
      icon: "Heart",
      gradient: "from-purple-500 to-cyan-500"
    },
    {
      title: "Акриловые топперы",
      price: "299 ₽",
      features: ["Для тортов и декора", "Любой текст", "Быстрое изготовление"],
      icon: "Cake",
      gradient: "from-cyan-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: "Sparkles",
      title: "Индивидуальный дизайн",
      description: "Создаём по вашему эскизу или фото"
    },
    {
      icon: "Zap",
      title: "Быстрое производство",
      description: "Изготовление за 1-3 дня"
    },
    {
      icon: "Gift",
      title: "Премиальная упаковка",
      description: "Каждый товар в подарочной коробке"
    },
    {
      icon: "Truck",
      title: "Доставка по всей РФ",
      description: "Яндекс.Доставка от 200 ₽ за 5 дней"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Напишите нам в Telegram",
      description: "Опишите, что хотите заказать"
    },
    {
      number: "02",
      title: "Согласуем макет",
      description: "Вышлем дизайн для подтверждения"
    },
    {
      number: "03",
      title: "Получите подарок",
      description: "Доставим курьером или почтой"
    }
  ];

  const reviews = [
    {
      name: "Анна М.",
      rating: 5,
      text: "Заказывала ночник с фото дочки — получилось волшебно! Качество на высоте, упаковка шикарная.",
      date: "2 дня назад"
    },
    {
      name: "Дмитрий К.",
      rating: 5,
      text: "Кулон с гравировкой стал идеальным подарком для жены. Быстро сделали, доставка точно в срок.",
      date: "неделю назад"
    },
    {
      name: "Елена П.",
      rating: 4,
      text: "Тафтинг-ковёр превзошёл ожидания! Ручная работа видна в каждой детали. Рекомендую!",
      date: "2 недели назад"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 bg-clip-text text-transparent">
            ildamn
          </h1>
          <Button 
            onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
          >
            <Icon name="Send" className="mr-2" size={18} />
            Написать в Telegram
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                Более 20 000 проданных товаров
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Создаём персональные подарки, которые{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 bg-clip-text text-transparent">
                  запоминаются
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Ночники, фигурки, ковры, украшения — всё с вашим дизайном. 
                Изготовление за 1-3 дня. Упаковано в подарочную коробку.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 animate-glow"
                >
                  Сделать индивидуальный заказ
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold text-lg px-8 py-6"
                >
                  Смотреть каталог
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                    <span className="ml-2 font-semibold text-gray-900">4.7</span>
                  </div>
                  <p className="text-sm text-gray-600">Средняя оценка клиентов</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/be5faa2d-5c70-480e-8c34-7a9bc9fce1e3/files/a317ebbf-25eb-42e0-a823-4ff433c0e10c.jpg"
                alt="Персональные подарки"
                className="rounded-3xl shadow-2xl w-full animate-scale-in"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Работаем более</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  3 лет
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 mb-4">
              Наш каталог
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Что мы создаём
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый товар изготавливается индивидуально под ваш заказ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200 fade-in-on-scroll overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${product.gradient}`}></div>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={product.icon as any} className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">
                    {product.title}
                  </h4>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <Icon name="Check" className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 fade-in-on-scroll"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Icon name={benefit.icon as any} className="text-white" size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 mb-4">
              Простой процесс
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Как сделать заказ
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative fade-in-on-scroll"
              >
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="text-6xl font-bold text-purple-200 mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-purple-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 mb-4">
              Отзывы клиентов
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Что о нас говорят
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow fade-in-on-scroll"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-on-scroll">
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg">
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
              <div className="text-left">
                <p className="font-bold text-2xl text-gray-900">4.7 из 5</p>
                <p className="text-sm text-gray-600">Средняя оценка на маркетплейсах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              Галерея работ
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              Наши работы
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl aspect-square group fade-in-on-scroll">
              <img 
                src="https://cdn.poehali.dev/projects/be5faa2d-5c70-480e-8c34-7a9bc9fce1e3/files/3ad4a8c7-1f63-4934-9baf-30b2df092426.jpg"
                alt="Работа 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Акриловый ночник</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group fade-in-on-scroll">
              <img 
                src="https://cdn.poehali.dev/projects/be5faa2d-5c70-480e-8c34-7a9bc9fce1e3/files/0ea8f3cd-08da-4968-95f8-a649da7b9594.jpg"
                alt="Работа 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Довольные клиенты</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group fade-in-on-scroll">
              <img 
                src="https://cdn.poehali.dev/projects/be5faa2d-5c70-480e-8c34-7a9bc9fce1e3/files/a317ebbf-25eb-42e0-a823-4ff433c0e10c.jpg"
                alt="Работа 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">3D эффект</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center text-white fade-in-on-scroll">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Есть вопросы?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Напишите нашему менеджеру в Telegram — ответим в течение 5 минут
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Написать @customLGHT
          </Button>
          <p className="mt-6 text-sm opacity-80">
            Работаем ежедневно с 10:00 до 22:00 МСК
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ildamn
              </h4>
              <p className="text-gray-400">
                Создаём персональные подарки с 2021 года. Более 20 000 довольных клиентов.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <a href="https://t.me/customLGHT" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    @customLGHT
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">Маркетплейсы</h5>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <Icon name="Store" className="inline mr-2" size={16} />
                  Wildberries: ildamn
                </p>
                <p className="text-gray-400">
                  <Icon name="Store" className="inline mr-2" size={16} />
                  Ozon: ildamn
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 ildamn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
