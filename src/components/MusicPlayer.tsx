import { useEffect, useRef, useState } from "react";
import { Play, Pause, Square, Volume2, VolumeX, Music } from "lucide-react";

const INITIAL_VOLUME = 0.2; // 20% volume inicial (baixo)

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [volume, setVolume] = useState(INITIAL_VOLUME);
  const [isMuted, setIsMuted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = INITIAL_VOLUME;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
    setIsStopped(false);
    setHasInteracted(true);
    setShowBanner(false);
  };

  const handlePause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setIsStopped(true);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) setIsMuted(false);
  };

  return (
    <>
      {/* Banner sutil de aviso */}
      {showBanner && !hasInteracted && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full shadow-lg cursor-pointer
            bg-black/60 backdrop-blur-md border border-white/20 text-white text-sm font-medium
            animate-fade-in transition-all duration-500 hover:bg-black/80"
          onClick={() => {
            handlePlay();
          }}
        >
          <Music size={16} className="text-pink-300 animate-pulse" />
          <span>Toque aqui para ativar a música de fundo 🎵</span>
          <button
            className="ml-2 text-white/50 hover:text-white/90 text-xs"
            onClick={(e) => {
              e.stopPropagation();
              setShowBanner(false);
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Botão flutuante e player */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Painel expandido com controles */}
        {isExpanded && (
          <div
            className="flex flex-col items-center gap-3 px-4 py-4 rounded-2xl shadow-2xl
              bg-black/70 backdrop-blur-md border border-white/20 text-white
              animate-fade-in"
          >
            {/* Botões de controle */}
            <div className="flex items-center gap-3">
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-400/40 transition-colors"
                title={isPlaying ? "Pausar" : "Tocar"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                onClick={handleStop}
                disabled={isStopped && !isPlaying}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-400/40 transition-colors disabled:opacity-40"
                title="Parar"
              >
                <Square size={18} />
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-400/40 transition-colors"
                title={isMuted ? "Desmutar" : "Mutar"}
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>

            {/* Controle de volume */}
            <div className="flex items-center gap-2 w-full">
              <VolumeX size={14} className="text-white/50" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-28 accent-pink-400 cursor-pointer"
                title="Volume"
              />
              <Volume2 size={14} className="text-white/50" />
            </div>

            <span className="text-xs text-white/40 italic">
              {isPlaying ? "♪ Tocando..." : isStopped ? "Parado" : "Pausado"}
            </span>
          </div>
        )}

        {/* Botão principal flutuante */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center
            border border-white/20 transition-all duration-300
            ${isExpanded ? "bg-pink-500/80 rotate-12" : "bg-black/60 hover:bg-pink-500/60"}
            backdrop-blur-md text-white`}
          title="Player de Música"
        >
          <Music size={20} className={isPlaying ? "animate-pulse text-pink-200" : ""} />
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
