import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LegalContent from "@/components/LegalContent";
import { Menu, Star, Moon, Globe } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const privacyRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (privacyRef.current && !privacyRef.current.contains(event.target as Node)) {
        setShowPrivacy(false);
      }
      if (termsRef.current && !termsRef.current.contains(event.target as Node)) {
        setShowTerms(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "#about", label: "Обо мне", ariaLabel: "Перейти к разделу о себе" },
    { href: "#services", label: "Услуги", ariaLabel: "Перейти к разделу услуг" },
    { href: "#blog", label: "Блог", ariaLabel: "Перейти к блогу" },
    { href: "#contact", label: "Контакты", ariaLabel: "Перейти к контактам" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          bg-background/70 backdrop-blur-md shadow-soft border-b-[0.5px] border-border/30
          ${isScrolled ? "shadow-soft border-border/50" : ""}
        `}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-0.5 font-playfair font-bold text-xl text-foreground hover:text-primary transition-colors focus-ring rounded-md"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
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
                  className="text-foreground hover:text-primary transition-colors font-medium focus-ring rounded-md px-1 py-1"
                  aria-label={item.ariaLabel}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA + Language Switcher + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground focus-ring"
                aria-label="Переключить язык"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">RU</span>
              </Button>

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
                  Записаться на консультацию
                </a>
              </Button>

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
                    <div className="flex items-center gap-2 font-playfair font-bold text-xl text-foreground pb-4 border-b border-border/50">
                      <div className="w-8 h-8 gradient-mystical rounded-full flex items-center justify-center">
                        <Moon className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
                      </div>
                      Life in Astro
                    </div>

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
                      <button
                        onClick={() => {
                          setShowPrivacy(true);
                          setIsOpen(false);
                        }}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 focus-ring rounded-md"
                      >
                        Политика конфиденциальности
                      </button>
                      <button
                        onClick={() => {
                          setShowTerms(true);
                          setIsOpen(false);
                        }}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 focus-ring rounded-md"
                      >
                        Условия использования
                      </button>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                      <Globe className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                      <span className="text-muted-foreground">Русский</span>
                    </div>

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

      {/* Modals */}
      {showPrivacy && (
        <div ref={privacyRef}>
          <LegalContent
            variant="modal"
            type="privacy"
            onClose={() => setShowPrivacy(false)}
          />
        </div>
      )}

      {showTerms && (
        <div ref={termsRef}>
          <LegalContent
            variant="modal"
            type="terms"
            onClose={() => setShowTerms(false)}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
