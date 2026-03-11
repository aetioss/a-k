import { useState } from "react";

const SecretMessageSection = () => {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in-slow">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-1 gap-16 md:gap-24">
          <div className="text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              De Aécio
            </p>
            <p className="font-display text-xl md:text-2xl italic leading-relaxed text-accent">
              "Karoline, você é meu porto seguro, minha paz e minha maior aventura.
              Cada dia ao seu lado é um presente que eu nunca vou parar de agradecer.
              Te amo infinitamente."
            </p>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Agradecimento
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-foreground">
          Com todo o amor
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          Obrigado por cada dia, cada sorriso, cada momento compartilhado.
          Que nosso amor continue crescendo, florescendo e nos surpreendendo.
        </p>
        <p className="font-display text-xl italic text-foreground mb-16">
          — Aécio & Karoline
        </p>

        {/* The golden key */}
        <button
          onClick={() => setRevealed(true)}
          className="inline-block text-primary hover:scale-110 transition-transform duration-500 cursor-pointer bg-transparent border-none"
          aria-label="Revelar mensagem secreta"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="15" r="4" />
            <path d="M10.5 12.5L17 6" />
            <path d="M15 8l2-2" />
            <path d="M17 6l2 2" />
          </svg>
        </button>
        <p className="font-body text-xs text-muted-foreground/50 mt-3 italic">
          Clique na chave...
        </p>
      </div>
    </section>
  );
};

export default SecretMessageSection;
