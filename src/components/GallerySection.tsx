import heroImage from "@/assets/hero-couple.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg"; 
import photo5 from "@/assets/photo-5.jpg";  
import photo6 from "@/assets/photo-6.jpeg";



const photos = [
  { id: 0, src: heroImage, alt: "Prosperando juntos", rotation: -2 },
  { id: 1, src: photo1, alt: "No lugar que amamos estar", rotation: 1 },
  { id: 2, src: photo2, alt: "Vendo você curtir feliz", rotation: -1 },
  { id: 3, src: photo3, alt: "Iniciando o ano com meu amor", rotation: 2 },
  { id: 4, src: photo4, alt: "Nossa primeira pizza em familia", rotation: -1 },
  { id: 5, src: photo5, alt: "Aquele relaxamento baum que sempre temos", rotation: 2 },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Galeria
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-20 text-foreground">
          Memórias que guardamos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
            >
              <div className="bg-secondary p-3 pb-12 shadow-md hover:shadow-xl transition-shadow duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-display text-sm italic text-muted-foreground mt-3 text-center">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
