import HeroSection from "@/components/HeroSection";
import FullPhoto from "@/components/FullPhoto";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import QuizSection from "@/components/QuizSection";
import DreamsSection from "@/components/DreamsSection";
import SecretMessageSection from "@/components/SecretMessageSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MusicPlayer />
      <HeroSection />
      <FullPhoto />
      <TimelineSection />
      <GallerySection />
      <QuizSection />
      <DreamsSection />
      <SecretMessageSection />
    </div>
  );
};

export default Index;
