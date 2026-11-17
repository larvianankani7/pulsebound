import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSettingsStore } from "../../settings/store/useSettingsStore";

interface MusicControlProps {
  audioSrc?: string;
  videoId?: string; // Backwards-compatible prop
}

export function MusicControl({
  audioSrc = "/audio/pulsebound-theme.mp3",
}: MusicControlProps) {
  const { musicVolume, isMusicMuted, toggleMusicMute, setMusicVolume } =
    useSettingsStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const currentSettings = useSettingsStore.getState();
    const effectiveVolume = currentSettings.isMusicMuted
      ? 0
      : currentSettings.musicVolume / 100;
    audio.volume = Math.max(0, Math.min(1, effectiveVolume));

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const targetVolume = isMusicMuted ? 0 : musicVolume / 100;
    audio.volume = Math.max(0, Math.min(1, targetVolume));
  }, [musicVolume, isMusicMuted]);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const targetVolume = isMusicMuted ? 0 : musicVolume / 100;
      audio.volume = Math.max(0, Math.min(1, targetVolume));
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {});
    }
  };

  const handleMuteClick = () => {
    toggleMusicMute();
    if (isMusicMuted && !isPlaying && audioRef.current) {
      void audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-40 flex items-center gap-2">
      <div
        className="relative flex items-center bg-[#0b0809]/80 backdrop-blur-md border border-red-900/30 rounded-full px-3 py-1.5 shadow-lg shadow-black/60 transition-all hover:border-red-600/50"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="p-1.5 text-neutral-300 hover:text-red-400 focus:outline-none focus:ring-1 focus:ring-red-500 rounded-full transition-colors"
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          title={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-red-400" />
          ) : (
            <Play className="w-4 h-4 text-neutral-300 ml-0.5" />
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={handleMuteClick}
          className="p-1.5 text-neutral-300 hover:text-red-400 focus:outline-none focus:ring-1 focus:ring-red-500 rounded-full transition-colors"
          aria-label={
            isMusicMuted
              ? "Unmute background music audio"
              : "Mute background music audio"
          }
          title={
            isMusicMuted
              ? "Unmute background music audio"
              : "Mute background music audio"
          }
        >
          {isMusicMuted || musicVolume === 0 ? (
            <VolumeX className="w-4 h-4 text-neutral-500" />
          ) : (
            <Volume2 className="w-4 h-4 text-red-400" />
          )}
        </button>

        {/* Track Label */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 text-xs font-medium text-neutral-300 border-l border-red-950/60">
          <Music className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span className="tracking-wider uppercase text-[10px] text-neutral-400">
            Vitality Ost
          </span>
        </div>

        {/* Volume Slider dropdown */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "5.5rem" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden flex items-center px-1"
            >
              <input
                type="range"
                min="0"
                max="100"
                value={isMusicMuted ? 0 : musicVolume}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setMusicVolume(val);
                  if (isMusicMuted && val > 0) {
                    toggleMusicMute();
                  }
                }}
                className="w-full accent-red-600 h-1 bg-neutral-800 rounded-lg cursor-pointer"
                aria-label="Music volume"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Unmute prompt banner if browser blocked initial autoplay */}
      {!hasInteracted && !isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleTogglePlay}
          className="text-xs bg-red-950/80 hover:bg-red-900 border border-red-600/50 text-red-200 px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm transition-all"
        >
          Initialize Audio
        </motion.button>
      )}
    </div>
  );
}

export default MusicControl;
