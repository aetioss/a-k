import heroImage from "@/assets/2c22ed0c-97ea-4c84-aa56-7299d0932685.jpg";

const FullPhoto = () => (
  <section className="py-8 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="aspect-[16/9] overflow-hidden rounded-sm">
        <img
          src={heroImage}
          alt="Aécio e Karoline"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ filter: "sepia(0.15) saturate(0.85)" }}
        />
      </div>
    </div>
  </section>
);

export default FullPhoto;
