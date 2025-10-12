import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Shield, FileText } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface LegalContentProps {
  type: "privacy" | "terms";
  onClose?: () => void;
  defaultOpen?: boolean;
}

const LegalContent = ({ type, onClose, defaultOpen = false }: LegalContentProps) => {
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
    <Accordion
      type="single"
      defaultValue={defaultOpen ? "privacy" : undefined}
      collapsible
    >
      <AccordionItem value="privacy">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <Shield className="text-gold" />
            Политика конфиденциальности
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <Collapsible defaultOpen>
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

                {/* Крупный крестик для сворачивания */}
                <div className="flex justify-end mt-6">
                  <button
                    className="text-2xl font-bold text-gray-500 hover:text-primary p-2 rounded-full hover:bg-gray-200 transition"
                    onClick={onClose}
                    aria-label="Закрыть"
                  >
                    ×
                  </button>
                </div>
              </CardContent>
            </Card>
          </Collapsible>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default LegalContent;