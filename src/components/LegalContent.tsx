import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Shield, FileText } from "lucide-react";

interface LegalContentProps {
  type: "privacy" | "terms";
}

const LegalContent = ({ type }: LegalContentProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const content = {
    privacy: {
      title: "Политика конфиденциальности",
      icon: Shield,
      sections: [
        {
          title: "Сбор персональных данных",
          content: "Мы собираем только необходимые персональные данные для предоставления астрологических консультаций: имя, дату, время и место рождения, контактную информацию. Все данные обрабатываются в соответствии с GDPR."
        },
        {
          title: "Использование данных",
          content: "Ваши персональные данные используются исключительно для проведения астрологических консультаций, составления натальных карт и предоставления персонализированных рекомендаций. Мы не передаем ваши данные третьим лицам."
        },
        {
          title: "Хранение данных",
          content: "Персональные данные хранятся в зашифрованном виде на защищенных серверах. Данные о рождении хранятся для возможности проведения повторных консультаций. Вы можете запросить удаление своих данных в любое время."
        },
        {
          title: "Ваши права",
          content: "Согласно GDPR, вы имеете право на доступ к своим данным, их исправление, удаление, ограничение обработки и портируемость. Для реализации этих прав обращайтесь по email: lifeinastro.tg@gmail.com"
        },
        {
          title: "Cookies и аналитика",
          content: "Сайт использует технические cookies для обеспечения работоспособности и аналитические cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера."
        }
      ]
    },
    terms: {
      title: "Условия использования",
      icon: FileText,
      sections: [
        {
          title: "Описание услуг",
          content: "Life in Astro предоставляет астрологические консультации и анализ натальных карт. Услуги носят консультативный характер и не заменяют профессиональной медицинской, психологической или юридической помощи."
        },
        {
          title: "Ответственность",
          content: "Астрологические консультации предоставляются как руководство для размышления и самопознания. Клиент несет полную ответственность за принятые на основе консультации решения. Мы не гарантируем конкретные результаты."
        },
        {
          title: "Оплата и возврат",
          content: "Оплата производится до начала консультации. Возврат средств возможен в случае отмены консультации за 24 часа до назначенного времени. После проведения консультации возврат не предусмотрен."
        },
        {
          title: "Конфиденциальность",
          content: "Все информация, полученная в ходе консультации, является строго конфиденциальной. Астролог обязуется не разглашать персональную информацию клиента третьим лицам без письменного согласия."
        },
        {
          title: "Интеллектуальная собственность",
          content: "Все материалы сайта, включая тексты, изображения и астрологические интерпретации, защищены авторским правом. Использование материалов без письменного разрешения запрещено."
        },
        {
          title: "Изменения условий",
          content: "Мы оставляем за собой право изменять данные условия. О существенных изменениях будет сообщено по email за 30 дней до вступления в силу."
        }
      ]
    }
  };

  const currentContent = content[type];
  const IconComponent = currentContent.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Card className="cursor-pointer hover:shadow-soft transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
                  {currentContent.title}
                </CardTitle>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </div>
          </CardHeader>
        </Card>
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <Card className="mt-2 border-border/50 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-card-foreground mb-2">
                  {section.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
            
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                По вопросам обращайтесь: 
                <a href="mailto:lifeinastro.tg@gmail.com" className="text-primary hover:underline ml-1">
                  lifeinastro.tg@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default LegalContent;