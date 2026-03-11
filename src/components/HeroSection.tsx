import { useState, useEffect } from "react";

const ANNIVERSARY_DATE = new Date("2023-03-12T00:00:00");

const HeroSection = () => {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = now.getTime() - ANNIVERSARY_DATE.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setElapsed({ days, hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToStory = () => {
    document.getElementById("nossa-historia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl animate-fade-up">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Três anos de amor
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-6">
          Karoline &amp; Aécio
        </h1>
        <p className="font-display text-xl md:text-2xl italic text-muted-foreground mb-12">
          O amor não se olha, se sente, se vive o tempo inteiro, e se sente ainda mais quando eu estou ao lado.
        </p>
      </div>

      <div className="animate-fade-in-delayed flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
        {[
          { value: elapsed.days, label: "dias" },
          { value: elapsed.hours, label: "horas" },
          { value: elapsed.minutes, label: "minutos" },
          { value: elapsed.seconds, label: "segundos" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-light text-primary">
              {item.value.toLocaleString()}
            </span>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToStory}
        className="animate-fade-in-delayed font-body text-sm tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity cursor-pointer bg-transparent"
      >
        Explore Nossa História
      </button>

      <div className="absolute bottom-12 animate-fade-in-delayed">
        <div className="w-px h-12 bg-primary/30 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
