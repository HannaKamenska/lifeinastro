import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, Mail, MessageCircle, Bot, Globe, Heart } from "lucide-react";
import LegalContent from "./LegalContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "Telegram канал",
      href: "https://t.me/lifeinastro",
      description: "Астрологические инсайты"
    },
    {
      icon: Bot,
      label: "Астробот",
      href: "https://t.me/lifeinastro_bot",
      description: "Помощь и консультации"
    },
    {
      icon: Bot,
      label: "Бот мечты",
      href: "https://t.me/AstroSNai_bot",
      description: "Реализация мечт"
    }
  ];

  const quickLinks = [
    { label: "Услуги", href: "#services" },
    { label: "Обо мне", href: "#about" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Блог", href: "#blog" },
    { label: "Контакты", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-playfair font-bold">Life in Astro</h3>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Профессиональные астрологические консультации для глубинного понимания себя. 
              Помогаю людям найти свой путь через кризисы и трансформации.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span>Консультации по всему миру онлайн</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Быстрые ссылки</h4>
            <nav aria-label="Быстрая навигация по сайту">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-ring rounded-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact and social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Связь</h4>
            
            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-gold" aria-hidden="true" />
                <span className="text-sm font-medium">Email</span>
              </div>
              <a 
                href="mailto:lifeinastro.tg@gmail.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm focus-ring rounded-md"
              >
                lifeinastro.tg@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-ring rounded-md p-1"
                    aria-label={`${social.label} - ${social.description}`}
                  >
                    <IconComponent className="w-4 h-4 text-gold" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{social.label}</span>
                      <span className="text-xs text-primary-foreground/60">{social.description}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы начать трансформацию?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Запишитесь на персональную астрологическую консультацию и откройте 
            новые грани себя через древнюю мудрость звёзд.
          </p>
          <Button 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-glow transition-smooth focus-ring"
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
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Life in Astro. Создано с</span>
            <Heart className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>для вашей трансформации.</span>
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={() => {
                const privacySection = document.getElementById('legal-privacy');
                if (privacySection) {
                  privacySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-primary-foreground transition-colors focus-ring rounded-md"
            >
              Политика конфиденциальности
            </button>
            <button 
              onClick={() => {
                const termsSection = document.getElementById('legal-terms');
                if (termsSection) {
                  termsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-primary-foreground transition-colors focus-ring rounded-md"
            >
              Условия использования
            </button>
          </div>
        </div>

        {/* Accessibility statement */}
        <div className="mt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            Этот сайт разработан с соблюдением стандартов доступности WCAG 2.1 AA 
            для всех пользователей, включая людей с ограниченными возможностями.
          </p>
        </div>

        {/* Legal Content Sections */}
        <div className="mt-16 space-y-6">
          <div id="legal-privacy">
            <LegalContent type="privacy" />
          </div>
          <div id="legal-terms">
            <LegalContent type="terms" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;