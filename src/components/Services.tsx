import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, TrendingUp, Clock, Users, Briefcase, Search, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Star,
      title: "Натальная карта",
      description: "Полный анализ личности через призму астрологии",
      price: "€80",
      duration: "90 минут",
      category: "Стандартные",
      features: ["Анализ характера", "Таланты и способности", "Жизненные задачи"],
    },
    {
      id: 2,
      icon: Heart,
      title: "Синастрия",
      description: "Совместимость и динамика отношений",
      price: "€100",
      duration: "75 минут",
      category: "Стандартные",
      features: ["Совместимость партнеров", "Кармические связи", "Развитие отношений"],
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Прогноз",
      description: "Астрологический прогноз на год",
      price: "€90",
      duration: "60 минут",
      category: "Стандартные",
      features: ["Важные периоды", "Возможности роста", "Предупреждения"],
    },
    {
      id: 4,
      icon: Clock,
      title: "Хорарная астрология",
      description: "Ответы на конкретные вопросы",
      price: "€60",
      duration: "45 минут",
      category: "Стандартные",
      features: ["Быстрые ответы", "Конкретные решения", "Timing событий"],
    },
    {
      id: 5,
      icon: Users,
      title: "Детская карта",
      description: "Понимание ребенка через астрологию",
      price: "€70",
      duration: "60 минут",
      category: "Стандартные",
      features: ["Характер ребенка", "Таланты", "Подходы в воспитании"],
    },
    {
      id: 6,
      icon: Briefcase,
      title: "Астростратегия для бизнеса",
      description: "Астрологическая поддержка бизнес-решений",
      price: "€150",
      duration: "120 минут",
      category: "Индивидуальные",
      features: ["Анализ команды", "Timing запусков", "Стратегическое планирование"],
    },
    {
      id: 7,
      icon: Search,
      title: "Астрология бренда",
      description: "Создание аутентичного образа бренда",
      price: "€120",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Архетип бренда", "Целевая аудитория", "Стратегия коммуникации"],
    },
    {
      id: 8,
      icon: Calendar,
      title: "Ректификация",
      description: "Уточнение времени рождения",
      price: "€110",
      duration: "120 минут",
      features: ["Анализ событий жизни", "Точное время рождения", "Коррекция карты"],
    },
    // Added new service offerings for energy, health, career, finance and relationships
    {
      id: 9,
      icon: Star,
      title: "Энергетический баланс",
      description: "Определение и гармонизация вашей личной энергетики",
      price: "€130",
      duration: "90 минут",
      features: [
        "Анализ энергетического потенциала",
        "Индивидуальные рекомендации",
        "Восстановление баланса",
      ],
    },
    {
      id: 10,
      icon: Heart,
      title: "Астрологическое здоровье",
      description: "Интерпретация карты здоровья и укрепление иммунитета",
      price: "€140",
      duration: "80 минут",
      features: [
        "Анализ уязвимых зон",
        "Профилактические советы",
        "Оптимальные периоды отдыха",
      ],
    },
    {
      id: 11,
      icon: Briefcase,
      title: "Карьерная профориентация",
      description: "Помощь в выборе профессии с учётом вашего потенциала",
      price: "€120",
      duration: "90 минут",
      features: [
        "Анализ талантов",
        "Перспективные направления",
        "План развития",
      ],
    },
    {
      id: 12,
      icon: TrendingUp,
      title: "Финансовая астрология",
      description: "Оптимизация финансового потока и увеличение доходов",
      price: "€150",
      duration: "100 минут",
      features: [
        "Анализ финансовых транзитов",
        "Выбор благоприятных периодов",
        "Инвестиционные рекомендации",
      ],
    },
    {
      id: 13,
      icon: Users,
      title: "Астрология отношений",
      description: "Разбор динамики и гармонизация личных отношений",
      price: "€110",
      duration: "75 минут",
      features: [
        "Анализ личных и социальных планет",
        "Советы по гармонии",
        "Определение потенциала пары",
      ],
    },
  ];

  // Состояние для отслеживания открытой секции деталей
  const [activeService, setActiveService] = useState<number | null>(null);

  // При прокрутке страницы сворачиваем открытые детали
  useEffect(() => {
    const handleScroll = () => {
      if (activeService !== null) {
        setActiveService(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeService]);

  return (
    <section
      id="services"
      className="py-20 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Астрологические консультации
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий формат работы для решения ваших задач
          </p>
        </div>

        {/* Список всех услуг без разделения на категории */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="hover-lift shadow-soft border-border/50 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-mystical rounded-full flex items-center justify-center">
                    <IconComponent
                      className="text-accent-foreground"
                      size={28}
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Badge variant="secondary" className="text-sm">
                      {service.duration}
                    </Badge>
                  </div>

                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div
                            className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"
                            aria-hidden="true"
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      <Button
                        className="w-full gradient-primary border-0 text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
                        asChild
                      >
                        <a
                          href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Записаться на ${service.title}`}
                        >
                          Записаться
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary/10 focus-ring"
                        onClick={() => {
                          // При повторном клике сворачиваем/раскрываем выбранный блок
                          setActiveService((prev) =>
                            prev === service.id ? null : service.id
                          );
                          const detailsSection = document.getElementById(
                            `service-details-${service.id}`
                          );
                          if (detailsSection) {
                            detailsSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                        aria-label={`Подробнее о ${service.title}`}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Секции с подробностями выбранных услуг */}
          <div className="space-y-8 mt-16">
            {services.map((service) => (
              <div key={`details-${service.id}`}>
                {activeService === service.id && (
                  <div id={`service-details-${service.id}`}>
                    <ServiceDetails serviceId={`service-${service.id}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Services;
