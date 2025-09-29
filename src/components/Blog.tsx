import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, Clock, ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import React from "react";

// Import blog images
import blogEclipse from "@/assets/blog-eclipse.jpg";
import blogMercury from "@/assets/blog-mercury.jpg";
import blogLunar from "@/assets/blog-lunar.jpg";
import blogSaturn from "@/assets/blog-saturn.jpg";
import blogCareer from "@/assets/blog-career.jpg";
import blogSolar from "@/assets/blog-solar.jpg";

const Blog = () => {
  const [openArticles, setOpenArticles] = React.useState<Set<number>>(new Set());

  const toggleArticle = (articleId: number) => {
    const newOpenArticles = new Set(openArticles);
    if (newOpenArticles.has(articleId)) {
      newOpenArticles.delete(articleId);
    } else {
      newOpenArticles.add(articleId);
    }
    setOpenArticles(newOpenArticles);
  };

  const articles = [
    {
      id: 1,
      title: "Коридор затмений - что важно знать",
      excerpt: "Затмения — это мощные астрологические события, которые приносят кардинальные изменения в нашу жизнь. Узнайте, как правильно проживать эти периоды.",
      category: "Астрология",
      readTime: "5 мин",
      date: "02 сентября 2025",
      featured: true,
      image: blogEclipse,
      fullContent: "Коридор затмений - это особый астрологический период, когда происходят солнечные и лунные затмения. Эти события несут мощную трансформационную энергию и часто становятся поворотными моментами в нашей жизни.\n\nЗатмения происходят примерно каждые 6 месяцев и длятся около 2-3 недель. В это время энергии особенно интенсивны, а изменения могут происходить внезапно и кардинально.\n\nВажно помнить, что затмения не несут негативной энергии - они просто ускоряют процессы, которые уже назревали. Это время освобождения от старого и принятия нового.\n\nКак проживать коридор затмений:\n• Избегайте принятия импульсивных решений\n• Больше отдыхайте и медитируйте\n• Обращайте внимание на знаки и синхронности\n• Будьте готовы к неожиданным поворотам\n• Доверяйте процессу трансформации"
    },
    {
      id: 2,
      title: "Ретроградный Меркурий: мифы и реальность",
      excerpt: "Развенчиваем популярные мифы о ретроградном Меркурии и рассказываем, как использовать этот период для своей пользы.",
      category: "Планеты",
      readTime: "7 мин",
      date: "8 июля 2025",
      featured: false,
      image: blogMercury,
      fullContent: "Ретроградный Меркурий - один из самых обсуждаемых астрологических феноменов, вокруг которого существует множество мифов и суеверий.\n\nЧто происходит на самом деле:\nМеркурий не движется назад - это оптическая иллюзия, наблюдаемая с Земли. В астрологии это время пересмотра, переосмысления и возвращения к незавершенным делам.\n\nМифы о ретроградном Меркурии:\n• Миф: 'Нельзя ничего начинать' - Реальность: можно завершать старые проекты\n• Миф: 'Все пойдет не так' - Реальность: это время для внутренней работы\n• Миф: 'Нужно бояться' - Реальность: это возможность для роста\n\nКак использовать ретроградный Меркурий:\n• Пересматривайте планы и стратегии\n• Завершайте начатые проекты\n• Восстанавливайте старые связи\n• Изучайте то, что давно откладывали\n• Делайте резервные копии важных данных\n\nПомните: ретроградный Меркурий - это не препятствие, а возможность глубже понять себя и свои истинные потребности."
    },
    {
      id: 3,
      title: "Лунные циклы и эмоциональное здоровье",
      excerpt: "Как фазы Луны влияют на наше эмоциональное состояние и как использовать эти знания в повседневной жизни.",
      category: "Психология",
      readTime: "6 мин",
      date: "3 июня 2025",
      featured: false,
      image: blogLunar,
      fullContent: "Луна оказывает мощное влияние на нашу эмоциональную сферу. Понимание лунных циклов помогает лучше управлять своими эмоциями и планировать важные дела.\n\nФазы Луны и их влияние:\n\nНоволуние:\n• Время новых начинаний и планирования\n• Энергия направлена внутрь\n• Подходит для постановки целей и намерений\n• Может ощущаться упадок сил\n\nРастущая Луна:\n• Время активности и роста\n• Повышается мотивация и энергия\n• Хорошо для начала новых проектов\n• Организм лучше усваивает питательные вещества\n\nПолнолуние:\n• Пик эмоциональной активности\n• Время завершения и осознания\n• Могут обостряться чувства\n• Важно найти баланс и не переутомляться\n\nУбывающая Луна:\n• Время освобождения и очищения\n• Подходит для избавления от ненужного\n• Энергия направлена на внутреннюю работу\n• Время для отдыха и восстановления\n\nПрактические советы:\n• Ведите лунный дневник эмоций\n• Планируйте важные дела с учетом фаз\n• Используйте полнолуние для медитации\n• В новолуние ставьте новые цели"
    },
    {
      id: 4,
      title: "Транзиты Сатурна: время важных решений",
      excerpt: "Сатурн приносит в нашу жизнь структуру и дисциплину. Изучаем, как работать с энергией этой планеты конструктивно.",
      category: "Транзиты",
      readTime: "8 мин",
      date: "25 апреля 202",
      featured: false,
      image: blogSaturn,
      fullContent: "Сатурн в астрологии называют 'Великим Учителем'. Его транзиты часто приносят серьезные испытания, но именно они помогают нам взрослеть и становиться мудрее.\n\nКлючевые принципы Сатурна:\n• Структура и порядок\n• Ответственность и дисциплина\n• Терпение и постоянство\n• Реализм и практичность\n• Уроки через ограничения\n\nВажные транзиты Сатурна:\n\nВозвращение Сатурна (около 29 лет):\n• Первое серьезное 'взросление'\n• Время принятия ответственности\n• Переосмысление жизненных целей\n• Завершение юношеского периода\n\nОппозиция Сатурна (около 44 лет):\n• Кризис среднего возраста\n• Переоценка достижений\n• Время важных жизненных решений\n• Поиск истинного призвания\n\nВторое возвращение (около 58 лет):\n• Время мудрости и наставничества\n• Подведение итогов жизни\n• Передача опыта следующим поколениям\n\nКак работать с энергией Сатурна:\n• Принимайте ответственность за свою жизнь\n• Развивайте дисциплину и постоянство\n• Учитесь на своих ошибках\n• Создавайте четкие структуры и планы\n• Не бойтесь трудностей - они ведут к росту\n• Проявляйте терпение в достижении целей\n\nПомните: Сатурн не наказывает, а обучает. Его уроки могут быть трудными, но они всегда направлены на наше духовное развитие."
    },
    {
      id: 5,
      title: "Астрология и карьера: найти свое призвание",
      excerpt: "Как натальная карта может помочь в выборе профессии и понимании своих профессиональных талантов.",
      category: "Карьера",
      readTime: "10 мин",
      date: "18 марта 2025",
      featured: false,
      image: blogCareer,
      fullContent: "Натальная карта - это карта ваших талантов и потенциала. Правильная интерпретация может указать на профессии, в которых вы будете наиболее успешны и удовлетворены.\n\nКлючевые элементы для анализа карьеры:\n\n10-й дом (Дом карьеры):\n• Показывает ваше призвание и общественную роль\n• Планеты в 10-м доме указывают на характер деятельности\n• Знак на MC определяет стиль профессиональной реализации\n\n6-й дом (Дом работы):\n• Повседневная трудовая деятельность\n• Отношение к рутинным обязанностям\n• Здоровье в связи с работой\n\n2-й дом (Дом финансов):\n• Способы заработка\n• Отношение к деньгам\n• Материальная стабильность\n\nАспекты планет:\n• Соединения и трины дают таланты\n• Квадраты и оппозиции - области для развития\n• Стеллиумы указывают на концентрацию энергии\n\nПрофессии по знакам MC:\n\nОвен MC: лидерство, спорт, военное дело\nТелец MC: финансы, искусство, недвижимость\nБлизнецы MC: коммуникации, журналистика, торговля\nРак MC: забота, психология, кулинария\nЛев MC: творчество, развлечения, образование\nДева MC: медицина, аналитика, сервис\nВесы MC: право, дипломатия, красота\nСкорпион MC: психология, исследования, кризисные ситуации\nСтрелец MC: образование, путешествия, философия\nКозерог MC: управление, структуры, традиции\nВодолей MC: технологии, инновации, гуманитарные науки\nРыбы MC: искусство, духовность, помощь людям\n\nСоветы по поиску призвания:\n• Изучите свою натальную карту с астрологом\n• Обратите внимание на повторяющиеся темы\n• Учитывайте свои естественные таланты\n• Не игнорируйте внутренний голос\n• Помните: призвание может эволюционировать с возрастом"
    },
    {
      id: 6,
      title: "Соляр: астрологический прогноз на год",
      excerpt: "Что такое соляр и как использовать эту технику для планирования важных событий и понимания энергий года.",
      category: "Прогнозы",
      readTime: "9 мин",
      date: "20 февраля 2025",
      featured: false,
      image: blogSolar,
      fullContent: "Соляр (Solar Return) - это астрологическая карта, построенная на момент, когда Солнце возвращается в точное положение, которое оно занимало в момент вашего рождения. Это происходит каждый год в день рождения (плюс-минус сутки).\n\nПринципы соляра:\n• Карта действует от дня рождения до следующего дня рождения\n• Показывает основные темы и события года\n• Дополняет, но не заменяет натальную карту\n• Строится на место, где вы находитесь в день рождения\n\nКлючевые элементы соляра:\n\nАсцендент соляра:\n• Показывает, как вы будете воспринимать год\n• Ваш подход к новым возможностям\n• Общий настрой и энергия года\n\nСолнце в доме:\n• 1-й дом: год личностного развития\n• 4-й дом: фокус на семье и доме\n• 7-й дом: важность отношений\n• 10-й дом: карьерные достижения\n\nЛуна в соляре:\n• Показывает эмоциональные потребности года\n• Области, где нужна забота\n• Интуитивные прозрения\n\nПланеты в угловых домах:\n• Особенно важные влияния года\n• События, которые изменят жизнь\n• Области максимальной активности\n\nАспекты в соляре:\n• Напряженные - вызовы и рост\n• Гармоничные - поддержка и возможности\n• К натальным планетам - активация тем\n\nПрактическое применение:\n• Планирование важных событий\n• Понимание вызовов года\n• Подготовка к переменам\n• Максимальное использование возможностей\n\nОсобенности интерпретации:\n• Учитывайте натальную карту\n• Анализируйте повторяющиеся темы\n• Обращайте внимание на угловые дома\n• Рассматривайте аспекты к натальным планетам\n\nПомните: соляр - это карта возможностей, а не неизбежной судьбы. Ваши выборы определяют, как проявятся астрологические влияния."
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
            <Collapsible>
              <Card className="hover-lift shadow-mystical bg-gradient-to-r from-card/90 to-accent/10 border-accent/30 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
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
                  
                  <CollapsibleTrigger asChild>
                    <Button 
                      className="gradient-mystical text-accent-foreground hover:shadow-mystical transition-smooth focus-ring"
                    >
                      Читать статью
                      <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
              
              <CollapsibleContent>
                <div className="p-8 border-t border-accent/20">
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    {featuredArticle.fullContent?.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularArticles.map((article, index) => (
            <Collapsible key={article.id}>
              <Card 
                className="hover-lift shadow-soft bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
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
                
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 focus-ring group"
                  >
                    Читать
                    <ChevronDown className="ml-2 w-3 h-3 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                  </Button>
                </CollapsibleTrigger>
              </CardContent>
              
              <CollapsibleContent>
                <CardContent className="pt-0 border-t border-border/20">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {article.fullContent?.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-3 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
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