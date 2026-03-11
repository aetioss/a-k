import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "Em que mês começamos a namorar?",
    options: ["Janeiro", "Março", "Maio", "Julho", "Setembro"],
    correct: 1,
  },
  {
    question: "Qual foi o local do nosso primeiro beijuuu?",
    options: ["Um café", "Um parque", "Um restaurante", "Um cinema", "Uma sorveteria"],
    correct: 4,
  },
  {
    question: "Qual é o prato favorito que gostamos de comer juntos?",
    options: ["Lasanha", "Pizza", "Strogonoff", "Macarronada","Hambúrguer"],
    correct: 4,
  },
  {
    question: "O que mais gostamos de fazer juntos no fim de semana?",
    options: ["Viajar", "Cozinhar juntos", "Assistir filmes", "Passear"],
    correct: 3,
  },
  {
    question: "Qual é a minha cor favorita?",
    options: ["Azul", "Verde", "Rosa", "Preto"],
    correct: 0,
  },
  {
    question: "Quantos meses namoramos antes do primeiro 'eu te amo'?",
    options: ["1 mês", "2 meses", "3 meses", "Desde o primeiro dia"],
    correct: 0,
  },
  {
    question: "Qual é o destino dos sonhos para viajarmos juntos?",
    options: ["Paris", "Italia", "Tóquio", "Grécia"],
    correct: 2,
  },
  {
    question: "O que mais admiramos um no outro?",
    options: ["O sorriso", "A paciência", "O cuidado", "A determinação"],
    correct: 2,
  },
];

const QuizSection = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[currentQ].correct) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const getResultMessage = () => {
    const pct = score / questions.length;
    if (pct >= 0.3) return "Vocês se conhecem profundamente! Esse amor é verdadeiro. 💛";
    if (pct >= 0.1) return "Vocês se conhecem bem! E ainda há tanto para descobrir juntos...";
    return "Cada dia é uma nova oportunidade de se descobrirem. O amor de vocês é uma jornada!";
  };

  if (!started) {
    return (
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Mini-Game
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-foreground">
            O Quiz do Nosso Amor
          </h2>
          <p className="font-body text-muted-foreground mb-10 leading-relaxed">
            Será que a gente realmente se conhecem? Teste seus conhecimentos sobre a história de amor de vocês.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer bg-transparent"
          >
            Começar o Quiz
          </button>
        </div>
      </section>
    );
  }

  if (finished) {
    return (
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Resultado
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-4 text-primary">
            {score}/{questions.length}
          </h2>
          <p className="font-display text-2xl italic text-foreground mb-8">
            {getResultMessage()}
          </p>
          {score >= questions.length * 0.8 && (
            <div className="mt-8 p-8 border border-accent/30 rounded-sm">
              <p className="font-display text-xl italic text-accent">
                🔓 Mensagem Secreta Desbloqueada
              </p>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                "O nosso amor é a prova de que as melhores coisas da vida acontecem quando menos esperamos. Obrigado por cada segundo ao seu lado."
              </p>
            </div>
          )}
          <button
            onClick={() => {
              setStarted(false);
              setCurrentQ(0);
              setScore(0);
              setSelected(null);
              setFinished(false);
            }}
            className="mt-10 font-body text-sm tracking-[0.2em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors cursor-pointer bg-transparent"
          >
            Jogar Novamente
          </button>
        </div>
      </section>
    );
  }

  const q = questions[currentQ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-xl mx-auto">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-12">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 transition-colors duration-300 ${
                i < currentQ ? "bg-primary" : i === currentQ ? "bg-primary/50" : "bg-border"
              }`}
            />
          ))}
        </div>

        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Pergunta {currentQ + 1} de {questions.length}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-light mb-10 text-foreground">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((option, i) => {
            let stateClass = "border-border hover:border-primary";
            if (selected !== null) {
              if (i === q.correct) stateClass = "border-primary bg-primary/10";
              else if (i === selected) stateClass = "border-accent bg-accent/10";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full text-left px-6 py-4 border rounded-sm transition-all duration-300 font-body cursor-pointer bg-transparent ${stateClass} disabled:cursor-default`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
