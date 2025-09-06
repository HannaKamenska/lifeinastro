import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна М.",
      location: "Берлин, Германия",
      photo: true,
      rating: 5,
      text: "Консультация помогла мне понять причины моих повторяющихся сложностей в отношениях. Теперь я знаю, как работать с этими паттернами. Очень благодарна за такой глубокий анализ!",
      service: "Натальная карта + Синастрия"
    },
    {
      id: 2,
      name: "Михаил К.",
      location: "Амстердам, Нидерланды",
      photo: false,
      rating: 5,
      text: "После развода чувствовал себя потерянным. Астрологическая консультация дала мне понимание моих сильных сторон и направление для нового этапа жизни. Рекомендую всем, кто переживает кризис.",
      service: "Индивидуальная консультация"
    },
    {
      id: 3,
      name: "Елена В.",
      location: "Вена, Австрия",
      photo: true,
      rating: 5,
      text: "Удивительно точный анализ! Особенно впечатлил прогноз на год — многие события действительно произошли именно так, как было предсказано. Это помогло мне подготовиться и использовать возможности.",
      service: "Прогноз + Хорарная астрология"
    },
    {
      id: 4,
      name: "Дмитрий С.",
      location: "Цюрих, Швейцария",
      photo: false,
      rating: 5,
      text: "Астростратегия для бизнеса превзошла все ожидания. Помогла выбрать правильное время для запуска проекта и понять динамику команды. Результаты говорят сами за себя!",
      service: "Астростратегия для бизнеса"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Истории трансформации и открытий через астрологию
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="hover-lift shadow-soft bg-card/90 backdrop-blur-sm border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4" aria-label={`Оценка ${testimonial.rating} из 5 звезд`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-gold text-gold" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-card-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Service badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent-deep rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-accent/30">
                    {testimonial.photo ? (
                      <AvatarImage 
                        src={`/api/placeholder/48/48`} 
                        alt={`Фото ${testimonial.name}`}
                      />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-foreground font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 to-primary/50"></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              Готовы начать свою трансформацию?
            </h3>
            <p className="text-muted-foreground mb-4">
              Присоединяйтесь к сотням людей, которые уже нашли свой путь через астрологию
            </p>
            <a 
              href="https://forms.gle/uXqtAvbuG2G3pk5z7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-smooth focus-ring"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;