import { useState } from "react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/4a3ae939-90e3-4157-a31f-8e7b9760bf9d.jpg";
import photo10 from "@/assets/e0ddbf5e-3761-4d2f-bb8c-3172f82523dc.jpg";
import photo11 from "@/assets/PHOTO-2023-12-31-20-42-36.jpg";
import photo12 from "@/assets/14122025-DSC02980.jpg";
import photo13 from "@/assets/4212a950-f75e-4686-8fd3-cd5ca00e8e9b.jpg";
import photo14 from "@/assets/a73da657-f8ee-42ab-9dd3-a37139581704.jpg";
import photo15 from "@/assets/39e8deb4-b71c-4796-820b-61b4843bfa4c.jpg";
import photo16 from "@/assets/432816e6-2a14-494d-a2f8-2a163a2eb045.jpg";
import photo17 from "@/assets/6b064281-464c-4c2b-acb3-1e49b647e5ca.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

const events: TimelineEvent[] = [
  {
    date: "12 Mar 2023",
    title: "O Começo de Tudo",
    description: "(Imagem meramente ilustrativa, mas que representa o início do nosso amor). O dia em que nossos caminhos se cruzaram e tudo mudou. Um olhar, um sorriso, e o início de uma história que só cresce.",
    image: photo17,
  },
  {
    date: "Junho 2023",
    title: "Primeiro São João Juntos",
    description: "Muita alegria vivendo muitos momentos juntos, e o São João foi um deles. Dançamos, rimos e criamos memórias que aquecem nossos corações até hoje.",
    image: photo9,
  },
  {
    date: "Julho 2023",
    title: "Primeiro Almoço em Família",
    description: "O caminho seguindo para que tudo fosse possível. Naquele momento, soubemos que não havia mais volta.",
    image: photo10,
  },
  {
    date: "Dezembro 2023",
    title: "Primeiro Reveillon Juntos",
    description: "Compartilhar a alegria do Reveillon com você tornou tudo ainda mais especial e significativo.",
    image: photo11,
  },
    {
    date: "Fevereiro 2024",
    title: "Nosso primeiro carnaval juntos",
    description: "Dançar, rir e curtir o carnaval ao seu lado foi e é experiência inesquecível. Cada momento foi pura alegria.",
    image: photo16,
  },
  {
    date: "Abril 2024",
    title: "Nossa primeira viagem juntos",
    description: "A gente com medo mas vivendo cada momento intensamente. A viagem foi um marco que fortaleceu ainda mais nosso amor e nossa conexão.",
    image: photo15,
  },
  {
    date: "Agosto 2024",
    title: "Nossa Segunda Viagem",
    description: "Explorar o mundo ao seu lado é a maior aventura. Cada lugar se torna inesquecível principalmente você me salvando e quando estamos juntos tudo fica perfeito.",
    image: photo14,
  },
  {
    date: "Agosto 2025",
    title: "Primeiro show da liniker juntos",
    description: "Vivendo e curtindo da melhor forma possível. O show da Liniker foi um momento mágico que ficará para sempre em nossas memórias, mesmo não sendo a dimensão como a gente queria mas foi nosso momento.",
    image: photo13,
  },
  {
    date: "Março 2026",
    title: "Três Anos de Amor",
    description: "Hoje celebramos três anos de pura felicidade. O melhor ainda está por vir.",
    image: photo12,
  },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="nossa-historia" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Nossa História
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-20 text-foreground">
          Os marcos do nosso amor
        </h2>

        <div className="relative flex flex-col md:flex-row md:gap-12">
          {/* Timeline dates - left side */}
          <div className="md:w-[30%] space-y-0">
            {events.map((event, index) => (
              <button
                key={index}
                className={`block w-full text-left py-4 md:py-5 border-l-2 pl-6 transition-all duration-500 cursor-pointer bg-transparent ${
                  activeIndex === index
                    ? "border-primary opacity-100"
                    : activeIndex !== null
                    ? "border-border opacity-40"
                    : "border-border opacity-70 hover:opacity-100 hover:border-primary"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-display text-lg md:text-xl text-foreground">{event.date}</span>
                <span className="block font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">
                  {event.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content - right side */}
          <div className="md:w-[70%] relative min-h-[300px] md:min-h-[500px] mt-8 md:mt-0">
            {activeIndex !== null ? (
              <div className="animate-fade-in-slow">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-sm mb-8">
                  <img
                    src={events[activeIndex].image}
                    alt={events[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4 text-foreground">
                  {events[activeIndex].title}
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground max-w-lg">
                  {events[activeIndex].description}
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="font-display text-xl italic text-muted-foreground/50">
                  Passe o mouse sobre uma data para reviver o momento...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
