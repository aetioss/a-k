const dreams = [
  { text: "Tornamos Sr. e Sra. ", emoji: "🤵🏽‍♂️👰🏻‍♀️" },
  { text: "Viajar juntos para fora do estado", emoji: "✈️" },
  { text: "Construir nosso lar", emoji: "🏡" },
  { text: "Comprar nosso carro", emoji: "🚗" },
  { text: "Adotar um doguin", emoji: "🐾" },
  { text: "Fazer viagem de carro", emoji: "🛤️" },
  { text: "Cozinhar um prato novo juntos toda semana", emoji: "👨‍🍳" },
  { text: "Assistir ao nascer do sol na praia", emoji: "🌅" },
];

const DreamsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Olhando para frente
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-16 text-foreground">
          Nossos Sonhos
        </h2>

        <div className="space-y-6 text-left">
          {dreams.map((dream, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-4 border-b border-border last:border-b-0 group"
            >
              <span className="text-xl mt-0.5">{dream.emoji}</span>
              <p className="font-body text-foreground group-hover:text-primary transition-colors duration-300">
                {dream.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamsSection;
