import { Button } from "@/components/ui/button";
import { Star, Heart, Moon } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Перейти к основному содержанию
      </a>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-20 text-gold animate-float" size={24} aria-hidden="true" />
        <Moon className="absolute top-40 right-32 text-accent animate-float" size={28} style={{ animationDelay: '1s' }} aria-hidden="true" />
        <Heart className="absolute bottom-40 left-32 text-primary-glow animate-float" size={20} style={{ animationDelay: '2s' }} aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Трансформация через{" "}
            <span className="text-primary-glow bg-gradient-to-r from-primary to-accent-deep bg-clip-text text-transparent">
              Астрологию
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Индивидуальные консультации для глубинного понимания себя, 
            поиска смысла и преодоления кризисов
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft mb-8 border border-border/50">
            <p className="text-lg font-medium text-card-foreground mb-4">
              ✨ Помогу найти ваш путь через астрологию
            </p>
            <p className="text-muted-foreground">
              Для людей, переживающих трансформации и ищущих опору
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gradient-primary border-0 text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
              asChild
            >
              <a 
                href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="cta-description"
              >
                Записаться на консультацию
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/10 focus-ring"
              asChild
            >
              <a href="#services" aria-label="Перейти к услугам">
                Узнать больше
              </a>
            </Button>
          </div>
          
          <p id="cta-description" className="text-sm text-muted-foreground mt-4">
            Первая консультация включает анализ натальной карты
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;