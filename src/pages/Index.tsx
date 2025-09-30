import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Life in Astro - Астрологические консультации",
      "description": "Профессиональные астрологические консультации для глубинного понимания себя. Помощь в кризисах, поиск смысла и жизненного пути через астрологию и психологию.",
      "serviceType": "Астрологические консультации",
      "provider": {
        "@type": "Person",
        "name": "Life in Astro",
        "jobTitle": "Астролог-консультант"
      },
      "areaServed": {
        "@type": "Place",
        "name": "по всему миру (онлайн)"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Астрологические услуги",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Натальная карта",
              "description": "Полный анализ личности через призму астрологии"
            },
            "price": "Бесплатно (donation welcome)",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Синастрия",
              "description": "Совместимость и динамика отношений"
            },
            "price": "Бесплатно (donation welcome)",
            "priceCurrency": "EUR"
          }
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "lifeinastro.tg@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["Russian", "English"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "4"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Фоновый слой */}
      <div className="bg-astro-sky bg-cover bg-center fixed inset-0 -z-10" />
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={1}
      >
        Перейти к основному содержанию
      </a>
      
      <Navigation />
      
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <InteractiveQuiz />
        <About />
        <Testimonials />
        <Contact />
        <Blog />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;