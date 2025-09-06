import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Star, Moon, Globe } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#services", label: "Услуги", ariaLabel: "Перейти к разделу услуг" },
    { href: "#about", label: "Обо мне", ariaLabel: "Перейти к разделу о себе" },
    { href: "#contact", label: "Контакты", ariaLabel: "Перейти к контактам" },
    { href: "#blog", label: "Блог", ariaLabel: "Перейти к блогу" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Основная навигация"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#"
            className="flex items-center gap-2 font-playfair font-bold text-xl text-foreground hover:text-primary transition-colors focus-ring rounded-md"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Life in Astro - перейти на главную"
          >
            <div className="w-8 h-8 gradient-mystical rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
            </div>
            Life in Astro
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium focus-ring rounded-md px-2 py-1"
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground focus-ring"
              aria-label="Переключить язык"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">RU</span>
            </Button>

            {/* Desktop CTA */}
            <Button 
              className="hidden md:inline-flex gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
              asChild
            >
              <a 
                href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Записаться на консультацию через Google форму"
              >
                Записаться
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden focus-ring"
                  aria-label="Открыть меню навигации"
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-background/95 backdrop-blur-md border-border/50"
              >
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2 font-playfair font-bold text-xl text-foreground pb-4 border-b border-border/50">
                    <div className="w-8 h-8 gradient-mystical rounded-full flex items-center justify-center">
                      <Moon className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
                    </div>
                    Life in Astro
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 focus-ring rounded-md"
                        aria-label={item.ariaLabel}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Language */}
                  <div className="flex items-center gap-2 py-2">
                    <Globe className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <span className="text-muted-foreground">Русский</span>
                  </div>

                  {/* Mobile CTA */}
                  <Button 
                    className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring mt-4"
                    asChild
                  >
                    <a 
                      href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Записаться на консультацию
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;