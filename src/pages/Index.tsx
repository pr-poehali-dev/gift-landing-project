import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 180;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-full shadow-2xl animate-glow">
      <Icon name="Zap" className="text-white" size={20} />
      <div className="text-white font-bold">
        <span className="text-lg">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <span className="ml-2 text-sm font-normal">— Скидка 20% на первый заказ!</span>
      </div>
    </div>
  );
};

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

    const elements = document.querySelectorAll(".fade-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const products = [
    {
      title: "Акриловые 3D ночники",
      price: "до 1990 ₽",
      features: ["16 цветов свечения", "Пульт в комплекте", "Размер 15×20 см", "Подарочная упаковка — 0 ₽"],
      icon: "Lightbulb",
      image: "https://i.imgur.com/5Gnxgll.jpeg",
      gradient: "from-purple-600 to-cyan-500"
    },
    {
      title: "Акриловые фигурки с УФ-печатью",
      price: "до 399 ₽",
      features: ["Размер 15×20 см", "УФ-печать высокого качества", "Подарочная упаковка в комплекте"],
      icon: "Star",
      image: "https://i.imgur.com/RanEL4d.jpeg",
      gradient: "from-cyan-500 to-purple-600"
    },
    {
      title: "Тафтинг-ковры ручного изготовления",
      price: "от 7000 ₽",
      features: ["Ручная работа", "Размер 60×90 см", "Уникальный дизайн"],
      icon: "Palette",
      image: "https://i.imgur.com/85SSWMM.png",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Кулоны с гравировкой",
      price: "790 ₽",
      features: ["Любая надпись", "Цепочка в комплекте", "Нержавеющая сталь"],
      icon: "Heart",
      image: "https://i.imgur.com/4ZF6i5h.png",
      gradient: "from-pink-600 to-cyan-500"
    },
    {
      title: "Акриловые топперы",
      price: "299 ₽",
      features: ["Для тортов и декора", "Любой текст", "Быстрое изготовление"],
      icon: "Cake",
      image: "https://i.imgur.com/sZzfEOU.jpeg",
      gradient: "from-cyan-500 to-purple-600"
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
      description: "Изготовление за 1–3 дня"
    },
    {
      icon: "Gift",
      title: "Премиальная упаковка",
      description: "Подарочная коробка в комплекте"
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
      title: "Вы оставляете заявку",
      description: "Или пишете @customLGHT"
    },
    {
      number: "02",
      title: "Разрабатываем дизайн",
      description: "Ваш индивидуальный дизайн"
    },
    {
      number: "03",
      title: "Производим и доставляем",
      description: "В подарочной коробке"
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
      rating: 5,
      text: "Тафтинг-ковёр превзошёл ожидания! Ручная работа видна в каждой детали. Рекомендую!",
      date: "2 недели назад"
    }
  ];

  const gallery = [
    "https://i.imgur.com/Vsgj6Le.png",
    "https://i.imgur.com/qtQfzKm.png",
    "https://i.imgur.com/BsYvZbj.png",
    "https://i.imgur.com/6QAYZVq.png",
    "https://i.imgur.com/mOWPtNK.png",
    "https://i.imgur.com/klvqKn1.jpeg",
    "https://i.imgur.com/UnX017M.jpeg",
    "https://i.imgur.com/SqYdnOc.jpeg",
    "https://i.imgur.com/bOzrpkx.jpeg",
    "https://i.imgur.com/qHC5pAX.jpeg",
    "https://i.imgur.com/c8xdpqI.jpeg",
    "https://i.imgur.com/RtBfhlS.jpeg",
    "https://i.imgur.com/veCinrr.jpeg",
    "https://i.imgur.com/6EbC3Yk.jpeg",
    "https://i.imgur.com/rQ4IeCx.jpeg",
    "https://i.imgur.com/G28J96C.jpeg",
    "https://i.imgur.com/U7QsPbh.jpeg"
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <h1 className="text-2xl font-black tracking-tight">
            ildamn
          </h1>
          <Button 
            onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Icon name="Send" className="mr-2" size={18} />
            @customLGHT
          </Button>
        </div>
      </header>

      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-lg px-6 py-2">
                Более 20 000 проданных товаров
              </Badge>
              
              <h2 className="text-5xl lg:text-7xl font-black text-black leading-tight tracking-tight">
                Создаём персональные подарки, которые{" "}
                <span className="bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 bg-clip-text text-transparent">
                  запоминаются
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-light">
                Индивидуальные подарки ручной работы с вашим дизайном
              </p>
              
              <div>
                <CountdownTimer />
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold text-lg px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
                >
                  Сделать индивидуальный заказ
                </Button>
                
                <p className="text-gray-600 text-sm">
                  Напиши нашему менеджеру — <span className="font-semibold text-black">@customLGHT</span>
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                  <span className="ml-2 font-bold text-black text-xl">4.7</span>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <p className="text-gray-600 font-medium">Средняя оценка клиентов</p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src="https://i.imgur.com/rQ4IeCx.jpeg"
                alt="Персональные подарки"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Работаем более</p>
                <p className="text-3xl font-black bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  3 лет
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-scroll">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-6 text-lg px-6 py-2">
              Наш каталог
            </Badge>
            <h3 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Что мы создаём
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Каждый товар изготавливается индивидуально под ваш заказ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group bg-zinc-900 border-zinc-800 hover:border-purple-600/50 transition-all duration-500 hover:-translate-y-2 fade-scroll overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={product.icon as any} className="text-white" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">
                    {product.title}
                  </h4>
                  <p className={`text-4xl font-black mb-6 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <Icon name="Check" className="text-cyan-500 mt-0.5 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                    className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-2xl hover:scale-105 transition-all text-white font-bold`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center fade-scroll">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-scroll">
            <h3 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Почему выбирают нас
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-10 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-all hover:-translate-y-1 fade-scroll group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Icon name={benefit.icon as any} className="text-white" size={36} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 fade-scroll">
            <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30 mb-6 text-lg px-6 py-2">
              Простой процесс
            </Badge>
            <h3 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              Как сделать заказ
            </h3>
            <div className="mt-8">
              <CountdownTimer />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative fade-scroll text-center"
              >
                <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 hover:border-purple-600/50 transition-all h-full">
                  <div className="text-7xl font-black text-purple-600/30 mb-6">
                    {step.number}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-scroll">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 mb-6 text-lg px-6 py-2">
              Отзывы клиентов
            </Badge>
            <h3 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Что о нас говорят
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all fade-scroll border-2 hover:border-purple-200"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16 fade-scroll">
            <div className="inline-flex items-center gap-4 bg-white px-10 py-6 rounded-full shadow-xl border-2 border-yellow-200">
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={32} />
              <div className="text-left">
                <p className="font-black text-3xl text-gray-900">4.7 из 5</p>
                <p className="text-sm text-gray-600">Средняя оценка на маркетплейсах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-scroll">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-6 text-lg px-6 py-2">
              Галерея работ
            </Badge>
            <h3 className="text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Наши работы
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl aspect-square group fade-scroll"
              >
                <img 
                  src={img}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-br from-purple-600 via-cyan-500 to-purple-600">
        <div className="container mx-auto max-w-5xl text-center text-white fade-scroll">
          <h3 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight">
            Есть вопросы?
          </h3>
          <p className="text-2xl mb-12 opacity-90 font-light">
            Нужна консультация или хотите обсудить индивидуальный заказ?
          </p>
          
          <div className="mb-12">
            <CountdownTimer />
          </div>

          <Button 
            size="lg"
            onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            className="bg-white text-black hover:bg-gray-100 font-bold text-xl px-16 py-8 rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <Icon name="Send" className="mr-3" size={24} />
            Написать менеджеру @customLGHT
          </Button>
        </div>
      </section>

      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 text-center fade-scroll">
            <div>
              <p className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                3+
              </p>
              <p className="text-gray-400">Работаем более 3 лет</p>
            </div>
            <div>
              <p className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                20 000+
              </p>
              <p className="text-gray-400">Проданных товаров</p>
            </div>
            <div>
              <p className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                4.7/5
              </p>
              <p className="text-gray-400">Средняя оценка</p>
            </div>
            <div>
              <a 
                href="https://www.wildberries.ru/brands/310698810-ildamn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                  <Icon name="Store" className="mr-2" size={20} />
                  Наш магазин на WB
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 text-white py-16 px-4 border-t border-zinc-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-3xl font-black mb-4">
                ildamn
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Создаём персональные подарки с 2021 года. Более 20 000 довольных клиентов.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Контакты</h5>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-3">
                  <Icon name="Send" size={18} />
                  <a 
                    href="https://t.me/customLGHT" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-purple-400 transition-colors"
                  >
                    @customLGHT
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Маркетплейсы</h5>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center gap-3">
                  <Icon name="Store" size={18} />
                  <a 
                    href="https://www.wildberries.ru/brands/310698810-ildamn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Wildberries / Ozon
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 ildamn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;