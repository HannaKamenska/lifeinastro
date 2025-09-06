import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Moon, Sun, Stars, Sparkles } from "lucide-react";

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Что для вас наиболее важно в жизни?",
      options: [
        { value: "security", label: "Стабильность и безопасность", element: "Земля" },
        { value: "emotions", label: "Глубокие эмоции и связи", element: "Вода" },
        { value: "freedom", label: "Свобода и новые идеи", element: "Воздух" },
        { value: "action", label: "Действие и лидерство", element: "Огонь" }
      ]
    },
    {
      id: 2,
      question: "Как вы обычно принимаете решения?",
      options: [
        { value: "intuition", label: "Доверяю интуиции", element: "Вода" },
        { value: "logic", label: "Анализирую факты", element: "Воздух" },
        { value: "experience", label: "Опираюсь на опыт", element: "Земля" },
        { value: "impulse", label: "Следую импульсу", element: "Огонь" }
      ]
    },
    {
      id: 3,
      question: "Что вас больше всего вдохновляет?",
      options: [
        { value: "nature", label: "Природа и красота", element: "Земля" },
        { value: "mystery", label: "Тайны и глубина", element: "Вода" },
        { value: "knowledge", label: "Знания и общение", element: "Воздух" },
        { value: "challenge", label: "Вызовы и достижения", element: "Огонь" }
      ]
    }
  ];

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const elements = answers.map(answer => {
      const question = questions.find((_, idx) => idx < answers.length);
      const option = question?.options.find(opt => opt.value === answer);
      return option?.element;
    });

    const elementCounts = elements.reduce((acc: { [key: string]: number }, element) => {
      if (element) acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, {});

    const dominantElement = Object.keys(elementCounts).reduce((a, b) => 
      elementCounts[a] > elementCounts[b] ? a : b
    );

    const results = {
      "Огонь": {
        title: "Огненная Луна",
        description: "Ваша Луна в огненном знаке говорит о страстной натуре и потребности в самовыражении.",
        traits: ["Спонтанность", "Лидерские качества", "Энергичность"],
        advice: "Используйте свою энергию для вдохновения других и реализации амбициозных целей."
      },
      "Земля": {
        title: "Земная Луна",
        description: "Ваша Луна в земном знаке указывает на практичность и потребность в стабильности.",
        traits: ["Надежность", "Терпеливость", "Практичность"],
        advice: "Доверяйте своей способности создавать прочный фундамент для будущего."
      },
      "Воздух": {
        title: "Воздушная Луна",
        description: "Ваша Луна в воздушном знаке говорит о потребности в общении и интеллектуальной стимуляции.",
        traits: ["Любознательность", "Общительность", "Гибкость"],
        advice: "Развивайте свои коммуникативные способности и делитесь знаниями с окружающими."
      },
      "Вода": {
        title: "Водная Луна",
        description: "Ваша Луна в водном знаке указывает на высокую эмпатию и интуитивные способности.",
        traits: ["Эмпатия", "Интуиция", "Эмоциональная глубина"],
        advice: "Доверяйте своей интуиции и используйте эмоциональный интеллект как суперсилу."
      }
    };

    return results[dominantElement as keyof typeof results] || results["Вода"];
  };

  const getIcon = (element: string) => {
    switch (element) {
      case "Огонь": return Sun;
      case "Земля": return Sparkles;
      case "Воздух": return Stars;
      case "Вода": return Moon;
      default: return Moon;
    }
  };

  if (showResult) {
    const result = getResult();
    const IconComponent = getIcon(result.title.split(" ")[0]);
    
    return (
      <section className="py-20 bg-secondary/30" aria-labelledby="quiz-result-heading">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto shadow-mystical bg-card/90 backdrop-blur-sm border-accent/30">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 gradient-mystical rounded-full flex items-center justify-center">
                <IconComponent className="text-accent-foreground" size={36} aria-hidden="true" />
              </div>
              <CardTitle id="quiz-result-heading" className="text-3xl font-bold text-card-foreground mb-4">
                {result.title}
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Ваши качества:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {result.traits.map((trait, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/20 text-accent-deep rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="text-muted-foreground italic">{result.advice}</p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full gradient-mystical text-accent-foreground hover:shadow-mystical transition-smooth focus-ring"
                  asChild
                >
                  <a 
                    href="https://forms.gle/uXqtAvbuG2G3pk5z7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Узнать больше на консультации
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-accent/30 text-accent-deep hover:bg-accent/10 focus-ring"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers([]);
                    setShowResult(false);
                  }}
                >
                  Пройти тест заново
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary/30" aria-labelledby="quiz-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="quiz-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Что говорит о вас ваша Луна?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Пройдите короткий тест и узнайте больше о своем эмоциональном мире
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-soft bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <div className="flex gap-1">
                {questions.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx <= currentQuestion ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-xl text-card-foreground">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <RadioGroup 
              value={answers[currentQuestion] || ""} 
              onValueChange={handleAnswerSelect}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option, idx) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem 
                    value={option.value} 
                    id={`option-${idx}`}
                    className="focus-ring"
                  />
                  <Label 
                    htmlFor={`option-${idx}`} 
                    className="flex-1 cursor-pointer text-card-foreground"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="w-full mt-6 gradient-primary text-primary-foreground hover:shadow-glow transition-smooth focus-ring disabled:opacity-50"
            >
              {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Получить результат"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveQuiz;