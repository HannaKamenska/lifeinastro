import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Коридор затмений - что важно знать",
      excerpt: "Затмения — это мощные астрологические события, которые приносят кардинальные изменения в нашу жизнь. Узнайте, как правильно проживать эти периоды.",
      category: "Астрология",
      readTime: "5 мин",
      date: "15 ноября 2024",
      featured: true
    },
    {
      id: 2,
      title: "Ретроградный Меркурий: мифы и реальность",
      excerpt: "Развенчиваем популярные мифы о ретроградном Меркурии и рассказываем, как использовать этот период для своей пользы.",
      category: "Планеты",
      readTime: "7 мин",
      date: "8 ноября 2024",
      featured: false
    },
    {
      id: 3,
      title: "Лунные циклы и эмоциональное здоровье",
      excerpt: "Как фазы Луны влияют на наше эмоциональное состояние и как использовать эти знания в повседневной жизни.",
      category: "Психология",
      readTime: "6 мин",
      date: "1 ноября 2024",
      featured: false
    },
    {
      id: 4,
      title: "Транзиты Сатурна: время важных решений",
      excerpt: "Сатурн приносит в нашу жизнь структуру и дисциплину. Изучаем, как работать с энергией этой планеты конструктивно.",
      category: "Транзиты",
      readTime: "8 мин",
      date: "25 октября 2024",
      featured: false
    },
    {
      id: 5,
      title: "Астрология и карьера: найти свое призвание",
      excerpt: "Как натальная карта может помочь в выборе профессии и понимании своих профессиональных талантов.",
      category: "Карьера",
      readTime: "10 мин",
      date: "18 октября 2024",
      featured: false
    },
    {
      id: 6,
      title: "Соляр: астрологический прогноз на год",
      excerpt: "Что такое соляр и как использовать эту технику для планирования важных событий и понимания энергий года.",
      category: "Прогнозы",
      readTime: "9 мин",
      date: "10 октября 2024",
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="blog" className="py-20 bg-secondary/30" aria-labelledby="blog-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 id="blog-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Блог и статьи
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полезная информация о астрологии, самопознании и личностном росте
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <Card className="hover-lift shadow-mystical bg-gradient-to-r from-card/90 to-accent/10 border-accent/30 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" aria-hidden="true" />
                    <p className="text-sm">Главная статья</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="gradient-mystical text-accent-foreground border-0">
                      Рекомендуем
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent-deep">
                      {featuredArticle.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="gradient-mystical text-accent-foreground hover:shadow-mystical transition-smooth focus-ring"
                    asChild
                  >
                    <a href={`#article-${featuredArticle.id}`}>
                      Читать статью
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="hover-lift shadow-soft bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" aria-hidden="true" />
                  <p className="text-xs">{article.category}</p>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 focus-ring"
                  asChild
                >
                  <a href={`#article-${article.id}`}>
                    Читать
                    <ArrowRight className="ml-2 w-3 h-3" aria-hidden="true" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-soft bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Не пропустите новые статьи
              </h3>
              <p className="text-muted-foreground mb-6">
                Подпишитесь на наш Telegram-канал, чтобы первыми получать новые материалы 
                о астрологии, самопознании и личностном росте.
              </p>
              <Button 
                size="lg"
                className="gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring"
                asChild
              >
                <a 
                  href="https://t.me/lifeinastro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подписаться на канал
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;