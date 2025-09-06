import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Bot, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Прямая связь для вопросов",
      value: "lifeinastro.tg@gmail.com",
      action: "mailto:lifeinastro.tg@gmail.com",
      actionText: "Написать письмо"
    },
    {
      icon: Calendar,
      title: "Форма записи",
      description: "Удобная запись на консультацию",
      value: "Google Forms",
      action: "https://forms.gle/uXqtAvbuG2G3pk5z7",
      actionText: "Записаться"
    },
    {
      icon: MessageCircle,
      title: "Telegram канал",
      description: "Пространство астрологии и самопознания",
      value: "@lifeinastro",
      action: "https://t.me/lifeinastro",
      actionText: "Подписаться"
    },
    {
      icon: Bot,
      title: "Астробот",
      description: "Ответы на вопросы и помощь с записью",
      value: "@lifeinastro_bot",
      action: "https://t.me/lifeinastro_bot",
      actionText: "Начать диалог"
    }
  ];

  const additionalBots = [
    {
      icon: Bot,
      title: "Астробот Мечты",
      description: "✨Узнай, как реализовать свою мечту с помощью астрологии🪄",
      value: "@AstroSNai_bot",
      action: "https://t.me/AstroSNai_bot",
      actionText: "Исполнить мечту"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Контакты и связь
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите удобный способ связи для записи на консультацию или получения информации
          </p>
        </div>

        {/* Main contact methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index}
                className="hover-lift shadow-soft bg-card/80 backdrop-blur-sm border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="text-primary-foreground" size={28} aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground">
                    {method.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary">
                      {method.value}
                    </span>
                  </div>
                  <Button 
                    className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
                    asChild
                  >
                    <a 
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${method.actionText} - ${method.title}`}
                    >
                      {method.actionText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional bots section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-accent-deep">
            Дополнительные астро-помощники
          </h3>
          <div className="grid md:grid-cols-1 max-w-2xl mx-auto">
            {additionalBots.map((bot, index) => {
              const IconComponent = bot.icon;
              return (
                <Card 
                  key={index}
                  className="hover-lift shadow-mystical bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 gradient-mystical rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-accent-foreground" size={24} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-card-foreground mb-1">
                          {bot.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {bot.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-accent-deep">
                            {bot.value}
                          </span>
                          <Button 
                            size="sm"
                            className="gradient-mystical text-accent-foreground hover:shadow-mystical transition-smooth focus-ring"
                            asChild
                          >
                            <a 
                              href={bot.action}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {bot.actionText}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto shadow-soft bg-gradient-to-r from-card/90 to-secondary/50 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Готовы к трансформации?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Начните своё путешествие к глубокому пониманию себя уже сегодня. 
                Запишитесь на персональную астрологическую консультацию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="text-lg px-8 py-6 gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
                  asChild
                >
                  <a 
                    href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Записаться на консультацию
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-accent/30 text-accent-deep hover:bg-accent/10 focus-ring"
                  asChild
                >
                  <a 
                    href="https://t.me/lifeinastro_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Задать вопрос боту
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;