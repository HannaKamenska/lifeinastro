import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Heart, TrendingUp, Clock, Users, Briefcase, Search, Calendar } from "lucide-react";

interface ServiceDetailsProps {
  serviceId: string;
}

const ServiceDetails = ({ serviceId }: ServiceDetailsProps) => {
  const serviceDetails = {
    "service-1": {
      icon: Star,
      title: "Натальная карта",
      description: "Полный анализ личности через призму астрологии",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      fullDescription: "Натальная карта - это ваш астрологический 'паспорт', который показывает положение планет в момент рождения. Это глубинный анализ вашей личности, талантов, жизненных задач и потенциала. В ходе консультации мы рассмотрим основные планеты в знаках и домах, аспекты между ними, а также ключевые точки карты.",
      includes: [
        "Анализ Солнца, Луны и Асцендента",
        "Изучение всех планет в знаках и домах",
        "Анализ аспектов между планетами",
        "Определение жизненных задач и талантов",
        "Рекомендации по развитию потенциала",
        "Письменный отчет с ключевыми выводами"
      ],
      suitableFor: [
        "Тех, кто хочет глубже понять себя",
        "Людей, стоящих на пороге важных решений",
        "Желающих найти свое призвание",
        "Тех, кто интересуется астрологией"
      ]
    },
    "service-2": {
      icon: Heart,
      title: "Синастрия",
      description: "Совместимость и динамика отношений",
      price: "Бесплатно (donation welcome)",
      duration: "75 минут",
      fullDescription: "Синастрия - это астрологический анализ совместимости двух людей. Мы изучаем, как карты партнеров взаимодействуют друг с другом, какие есть сильные стороны отношений и где могут возникать сложности. Это помогает лучше понимать динамику отношений и находить пути для их гармонизации.",
      includes: [
        "Анализ совместимости характеров",
        "Изучение кармических связей",
        "Определение сильных сторон отношений",
        "Выявление потенциальных конфликтных зон",
        "Рекомендации по развитию отношений",
        "Анализ домов партнерства"
      ],
      suitableFor: [
        "Пар, желающих улучшить отношения",
        "Тех, кто хочет понять совместимость",
        "Людей в новых отношениях",
        "Желающих разобраться в семейной динамике"
      ]
    },
    "service-3": {
      icon: TrendingUp,
      title: "Прогноз",
      description: "Астрологический прогноз на год",
      price: "Бесплатно (donation welcome)",
      duration: "60 минут",
      fullDescription: "Астрологический прогноз помогает понять энергии наступающего периода, важные события и возможности. Мы анализируем транзиты планет к вашей натальной карте, прогрессии и солярную карту. Это позволяет лучше планировать важные дела и использовать благоприятные периоды.",
      includes: [
        "Анализ транзитов на год",
        "Изучение прогрессий",
        "Анализ солярной карты",
        "Определение благоприятных периодов",
        "Предупреждения о сложных временах",
        "Рекомендации по планированию"
      ],
      suitableFor: [
        "Желающих планировать важные события",
        "Людей в переходные периоды жизни",
        "Тех, кто хочет использовать энергии времени",
        "Бизнесменов и предпринимателей"
      ]
    },
    "service-4": {
      icon: Clock,
      title: "Хорарная астрология",
      description: "Ответы на конкретные вопросы",
      price: "Бесплатно (donation welcome)",
      duration: "45 минут",
      fullDescription: "Хорарная астрология - это метод получения ответов на конкретные вопросы через построение карты на момент задания вопроса. Это быстрый и точный способ получить ясность в сложных ситуациях, принять решение или узнать исход события.",
      includes: [
        "Построение хорарной карты",
        "Анализ сигнификаторов вопроса",
        "Определение исхода ситуации",
        "Timing событий",
        "Рекомендации по действиям",
        "Ответ на конкретный вопрос"
      ],
      suitableFor: [
        "Тех, кто ищет ответ на конкретный вопрос",
        "Людей в сложной жизненной ситуации",
        "Желающих узнать исход дела",
        "Тех, кто нуждается в быстром решении"
      ]
    },
    "service-5": {
      icon: Users,
      title: "Детская карта",
      description: "Понимание ребенка через астрологию",
      price: "Бесплатно (donation welcome)",
      duration: "60 минут",
      fullDescription: "Детская астрологическая карта помогает родителям лучше понять характер, потребности и потенциал своего ребенка. Мы анализируем особенности темперамента, способности, склонности и даем рекомендации по воспитанию и развитию.",
      includes: [
        "Анализ характера и темперамента",
        "Выявление талантов и способностей",
        "Рекомендации по воспитанию",
        "Анализ отношений с родителями",
        "Советы по развитию потенциала",
        "Понимание потребностей ребенка"
      ],
      suitableFor: [
        "Родителей, желающих лучше понять ребенка",
        "Семей с трудными подростками",
        "Тех, кто выбирает направление развития",
        "Желающих улучшить отношения с детьми"
      ]
    },
    "service-6": {
      icon: Briefcase,
      title: "Астростратегия для бизнеса",
      description: "Астрологическая поддержка бизнес-решений",
      price: "Бесплатно (donation welcome)",
      duration: "120 минут",
      fullDescription: "Астростратегия для бизнеса - это применение астрологических знаний для оптимизации бизнес-процессов. Мы анализируем карты учредителей, выбираем благоприятное время для запусков, формируем команды с учетом астрологической совместимости.",
      includes: [
        "Анализ натальных карт учредителей",
        "Астрологический анализ команды",
        "Выбор благоприятного timing",
        "Стратегическое планирование",
        "Анализ бизнес-партнеров",
        "Рекомендации по развитию"
      ],
      suitableFor: [
        "Предпринимателей и бизнесменов",
        "Руководителей компаний",
        "Тех, кто запускает новые проекты",
        "Желающих оптимизировать бизнес-процессы"
      ]
    },
    "service-7": {
      icon: Search,
      title: "Астрология бренда",
      description: "Создание аутентичного образа бренда",
      price: "Бесплатно (donation welcome)",
      duration: "90 минут",
      fullDescription: "Астрология бренда помогает создать аутентичный образ, который резонирует с целевой аудиторией. Мы анализируем карту основателя, определяем архетип бренда, выбираем подходящие символы, цвета и стратегии коммуникации.",
      includes: [
        "Определение архетипа бренда",
        "Анализ целевой аудитории",
        "Выбор символов и цветов",
        "Стратегия коммуникации",
        "Timing для запусков",
        "Создание астрологического профиля бренда"
      ],
      suitableFor: [
        "Владельцев брендов и стартапов",
        "Маркетологов и дизайнеров",
        "Тех, кто создает личный бренд",
        "Компаний, желающих выделиться"
      ]
    },
    "service-8": {
      icon: Calendar,
      title: "Ректификация",
      description: "Уточнение времени рождения",
      price: "Бесплатно (donation welcome)",
      duration: "120 минут",
      fullDescription: "Ректификация - это астрологический метод уточнения времени рождения через анализ важных событий жизни. Если вы не знаете точное время рождения или сомневаетесь в нем, эта процедура поможет определить правильное время и построить точную натальную карту.",
      includes: [
        "Сбор данных о важных событиях",
        "Анализ жизненных циклов",
        "Проверка различных вариантов времени",
        "Определение точного времени рождения",
        "Построение скорректированной карты",
        "Объяснение найденных различий"
      ],
      suitableFor: [
        "Тех, кто не знает точное время рождения",
        "Людей с сомнительными данными",
        "Желающих получить точную карту",
        "Тех, кто серьезно изучает астрологию"
      ]
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return null;
  }

  const IconComponent = service.icon;

  return (
    <Card className="shadow-soft border-border/50 bg-card/90 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 gradient-mystical rounded-full flex items-center justify-center">
          <IconComponent className="text-accent-foreground" size={28} aria-hidden="true" />
        </div>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          {service.title}
        </CardTitle>
        <div className="flex justify-center items-center gap-4 mt-4">
          <Badge className="gradient-primary text-primary-foreground text-lg px-4 py-2">
            {service.price}
          </Badge>
          <Badge variant="outline" className="border-primary text-primary">
            {service.duration}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {service.fullDescription}
        </p>
        
        <div>
          <h4 className="font-semibold text-card-foreground mb-3">Что включает консультация:</h4>
          <ul className="space-y-2">
            {service.includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-card-foreground mb-3">Подходит для:</h4>
          <ul className="space-y-2">
            {service.suitableFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4">
          <Button 
            size="lg"
            className="w-full gradient-primary border-0 text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
            asChild
          >
            <a 
              href="https://forms.gle/uXqtAvbuG2G3pk5z7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Записаться на консультацию ${service.title}`}
            >
              Записаться на консультацию
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetails;