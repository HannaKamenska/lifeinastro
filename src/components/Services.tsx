import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, TrendingUp, Clock, Users, Briefcase, Search, Calendar, Flame, Euro, BaggageClaim, Moon } from "lucide-react";
import ServiceDetails from "./ServiceDetails";
import { useState, useEffect } from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Star,
      title: "Натальная карта",
      description: "Полный анализ личности через призму астрологии",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Стандартные",
      features: ["Анализ характера", "Таланты и способности", "Жизненные задачи"]
    },
    {
      id: 2,
      icon: Heart,
      title: "Здоровье",
      description: "Интерпретация карты здоровья и укрепление иммунитета",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Стандартные",
      features: ["Анализ уязвимых зон. Выявление рисков", "Профилактические советы, рекомендации", "Выявление причинно-следственных связей заболеваний"]
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Прогноз",
      description: "Астрологический прогноз на год",
      price: "Бесплатно (donation welcome)",
      duration: "60 минут",
      category: "Стандартные",
      features: ["Важные периоды", "Возможности роста", "Предупреждения","Риски"]
    },
    {
      id: 4,
      icon: Clock,
      title: "Хорарная астрология",
      description: "Ответы на конкретные вопросы",
      price: "Бесплатно (donation welcome)",
      duration: "45 минут",
      category: "Стандартные",
      features: ["Быстрые ответы", "Конкретные решения", "Timing событий"]
    },
    {
      id: 5,
      icon: Users,
      title: "Детская карта",
      description: "Понимание ребенка через астрологию",
      price: "Бесплатно (donation welcome)",
      duration: "60 минут",
      category: "Стандартные",
      features: ["Характер ребенка", "Таланты", "Подходы в воспитании"]
    },
    {
      id: 6,
      icon: Calendar,
      title: "Ректификация",
      description: "Уточнение времени рождения",
      price: "Бесплатно (donation welcome)",
      duration: "30 минут",
      category: "Стандартные",
      features: ["Анализ событий жизни", "Точное время рождения", "Коррекция времени"]
    },
    {
      id: 7,
      icon: Briefcase,
      title: "Астростратегия для бизнеса",
      description: "Астрологическая поддержка бизнес-решений",
      price: "Бесплатно (donation welcome)",
      duration: "120 минут",
      category: "Индивидуальные",
      features: ["Анализ бизнеса", "Ребрендинг", "Потенциальные клиенты - кто они?","Стратегическое планирование"]
    },
    {
      id: 8,
      icon: Search,
      title: "Построение личного бренда",
      description: "Создание аутентичного образа бренда",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Архетип бренда", "Миссия и ценности", "Целевая аудитория", "Стратегия коммуникации"]
    },
    {
      id: 9,
      icon: Flame,
      title: "Энергетический баланс",
      description: "Определение и гармонизация вашей личной силы и энергии",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Подбор дела, спорта, хобби", "Где брать энергию?","Восстановление баланса"]
    },
    {
      id: 10,
      icon: Briefcase,
      title: "Карьерная профориентация",
      description: "Помощь в выборе профессии с учётом вашего потенциала",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Анализ талантов", "Перспективные направления", "Подбор профессии и дела жизни", "План развития. Стратегия"]
    },
    {
      id: 11,
      icon: Star,
      title: "Финансовая астрология",
      description: "Оптимизация финансового потока и увеличение доходов",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Анализ финансовых потоков", "Определение источников дохода", "Рекомендации по инвестициям", "Подбор ниш, видов деятельности"]
    },
    {
      id: 12,
      icon: Moon,
      title: "Анализ снов",
      description: "Астрологический разбор сновидений и их символов",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      category: "Индивидуальные",
      features: ["Толкование символов сна", "Связь сюжетов и образов снов с реальной жизнью и психикой", "Практические рекомендации для осознанной работы со снами"]
    }
  ];

  const standardServices = services.filter(service => service.category === "Стандартные");
  const individualServices = services.filter(service => service.category === "Индивидуальные");
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Астрологические консультации
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий формат работы для решения ваших задач
          </p>
        </div>

        {/* Standard Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            Стандартные консультации
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="hover-lift shadow-soft border-border/50 bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 gradient-mystical rounded-full flex items-center justify-center">
                      <IconComponent className="text-accent-foreground" size={28} aria-hidden="true" />
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
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Badge variant="secondary" className="text-sm">
                        {service.duration}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
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
                          aria-label={`Записаться на консультацию${service.title}`}
                        >
                          Записаться на консультацию
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 text-primary hover:bg-primary/10 focus-ring"
                        onClick={() => {
                          const detailsSection = document.getElementById(`service-details-${service.id}`);
                          if (detailsSection) {
                            detailsSection.scrollIntoView({ behavior: 'smooth' });
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
        </div>

        {/* Individual Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent-deep">
            Индивидуальные консультации
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="hover-lift shadow-soft border-accent/30 bg-gradient-to-br from-card/90 to-accent/5 backdrop-blur-sm"
                  style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 gradient-golden rounded-full flex items-center justify-center">
                      <IconComponent className="text-foreground" size={28} aria-hidden="true" />
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
                      <span className="text-2xl font-bold text-accent-deep">{service.price}</span>
                      <Badge variant="outline" className="border-accent text-accent-deep">
                        {service.duration}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full gradient-mystical border-0 text-accent-foreground hover:shadow-mystical transition-smooth focus-ring"
                        asChild
                      >
                        <a 
                          href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Записаться на консультацию${service.title}`}
                        >
                          Записаться на консультацию
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-accent/30 text-accent-deep hover:bg-accent/10 focus-ring"
                        onClick={() => {
                          const detailsSection = document.getElementById(`service-details-${service.id}`);
                          if (detailsSection) {
                            detailsSection.scrollIntoView({ behavior: 'smooth' });
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
        </div>

        {/* Service Details Sections */}
        <div className="space-y-8 mt-16">
          {services.map((service) => (
            <div key={`details-${service.id}`} id={`service-details-${service.id}`}>
              <ServiceDetails serviceId={`service-${service.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;