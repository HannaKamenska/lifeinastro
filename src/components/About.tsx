import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Users, BookOpen } from "lucide-react";
import astrologerMain from "@/assets/astrologer-main.jpg";
import consultationSetup from "@/assets/consultation-setup.jpg";

const About = () => {
  const qualities = [
    { icon: Heart, text: "Эмпатия и поддержка" },
    { icon: Star, text: "15+ лет опыта" },
    { icon: Users, text: "500+ консультаций" },
    { icon: BookOpen, text: "Непрерывное обучение" }
  ];

  return (
    <section id="about" className="py-20 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Астролог и консультант по трансформации, помогающий людям найти свой путь
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-6 shadow-soft bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-0">
                  <div className="prose prose-lg text-card-foreground">
                    <p className="text-lg leading-relaxed mb-4">
                      Привет! Меня зовут <strong className="text-primary">Life in Astro</strong>, и я специализируюсь на 
                      астрологических консультациях, которые помогают людям понять себя глубже и найти 
                      свой истинный путь.
                    </p>
                    
                    <p className="text-base text-muted-foreground mb-4">
                      Моя миссия — помочь вам пройти через кризисы и трансформации с пониманием 
                      и поддержкой. Я использую астрологию как инструмент самопознания, объединяя 
                      её с элементами психологии для максимально эффективной работы.
                    </p>

                    <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-muted-foreground italic">
                        "Каждая натальная карта — это уникальная карта души, которая раскрывает 
                        ваши таланты, вызовы и предназначение. Моя задача — помочь вам прочитать эту карту."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Qualities Grid */}
              <div className="grid grid-cols-2 gap-4">
                {qualities.map((quality, index) => {
                  const IconComponent = quality.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 gradient-mystical rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-accent-foreground" size={20} aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{quality.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Certifications */}
              <Card className="p-6 shadow-soft bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                    Образование и подход
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-accent text-accent-deep">
                      Классическая астрология
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      Психологическое консультирование
                    </Badge>
                    <Badge variant="outline" className="border-gold text-foreground">
                      Хорарная астрология
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Сочетаю традиционные астрологические методы с современными психологическими 
                    подходами для создания целостной картины личности и жизненного пути.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Photos */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl shadow-mystical overflow-hidden">
                  <img 
                    src={astrologerMain}
                    alt="Life in Astro - профессиональный астролог-консультант с многолетним опытом в астрологии и психологии"
                    className="w-full h-full object-cover hover-lift transition-smooth"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold/30 to-primary/30 rounded-full blur-xl"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl shadow-soft overflow-hidden">
                  <img 
                    src={consultationSetup}
                    alt="Профессиональная астрологическая консультация с натальными картами и мистическими атрибутами"
                    className="w-full h-full object-cover hover-lift transition-smooth"
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-gold/20 rounded-xl shadow-soft overflow-hidden flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-8 h-8 mx-auto mb-2 opacity-50" aria-hidden="true" />
                    <p className="text-xs">Индивидуальный подход</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;