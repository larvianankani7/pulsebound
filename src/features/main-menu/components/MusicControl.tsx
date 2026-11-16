import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  setPlaybackRate: (rate: number) => void;
  getPlaybackRate: () => number;
  getAvailablePlaybackRates: () => number[];
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getPlayerState: () => number;
  destroy: () => void;
}

interface YTEvent {
  target: YTPlayer;
  data?: number;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        options: {
          height?: string | number;
          width?: string | number;
          videoId?: string;
          playerVars?: Record<string, string | number | boolean>;
          events?: {
            onReady?: (event: YTEvent) => void;
            onStateChange?: (event: YTEvent) => void;
            onError?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
  }
}

const STORAGE_KEY = "sylvara_music_muted";
const ATMOSPHERIC_VOLUME = 25; // 25% comfortable background volume
const TARGET_PLAYBACK_RATE = 0.8; // User requested 0.8x (20% slower)

interface MusicControlProps {
  videoId?: string;
}

export function MusicControl({ videoId = "UrngDTXkOEk" }: MusicControlProps) {
  // Read persisted preference; default to unmuted if user previously allowed, or muted for polite autoplay
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved !== null ? saved === "true" : true; // default polite muted on first visit
    } catch {
      return true;
    }
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [actualPlaybackRate, setActualPlaybackRate] = useState<number | null>(
    null
  );

  const playerRef = useRef<YTPlayer | null>(null);
  const containerId = "sylvara-bg-music-player";

  // Load YouTube IFrame API script once
  useEffect(() => {
    let isCancelled = false;

    const initPlayer = () => {
      if (isCancelled || !window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player(containerId, {
          height: "1",
          width: "1",
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            enablejsapi: 1,
          },
          events: {
            onReady: (event) => {
              if (isCancelled) return;
              setIsReady(true);
              const player = event.target;

              // Apply comfortable atmospheric volume (25%)
              player.setVolume(ATMOSPHERIC_VOLUME);

              // Attempt to set requested 0.8x speed
              try {
                player.setPlaybackRate(TARGET_PLAYBACK_RATE);
                const currentRate = player.getPlaybackRate();
                setActualPlaybackRate(currentRate);
              } catch {
                // If API throws, keep standard rate
              }

              // Apply mute state based on preference
              const initialMuted = localStorage.getItem(STORAGE_KEY);
              const shouldMute =
                initialMuted !== null ? initialMuted === "true" : true;

              if (shouldMute) {
                player.mute();
              } else {
                player.unMute();
                player.playVideo();
              }
            },
            onStateChange: (event) => {
              if (isCancelled) return;
              const state = event.data;
              if (window.YT) {
                if (state === window.YT.PlayerState.PLAYING) {
                  setIsPlaying(true);
                  // Update actual rate once playback is confirmed
                  if (playerRef.current) {
                    setActualPlaybackRate(playerRef.current.getPlaybackRate());
                  }
                } else if (
                  state === window.YT.PlayerState.PAUSED ||
                  state === window.YT.PlayerState.ENDED
                ) {
                  setIsPlaying(false);
                  // Ensure continuous loop
                  if (
                    state === window.YT.PlayerState.ENDED &&
                    playerRef.current
                  ) {
                    playerRef.current.seekTo(0);
                    playerRef.current.playVideo();
                  }
                }
              }
            },
          },
        });
      } catch (err) {
        console.warn("YouTube music player initialization error:", err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Inject API script if not present
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      isCancelled = true;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignore cleanup errors
        }
        playerRef.current = null;
      }
    };
  }, [videoId]);

  // Handle first user interaction to unlock browser autoplay if unmuted
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (!isMuted && playerRef.current) {
        try {
          playerRef.current.unMute();
          playerRef.current.playVideo();
        } catch {
          // Ignore audio resume failure
        }
      }
      window.removeEventListener("pointerdown", handleFirstUserInteraction);
      window.removeEventListener("keydown", handleFirstUserInteraction);
    };

    window.addEventListener("pointerdown", handleFirstUserInteraction, {
      once: true,
    });
    window.addEventListener("keydown", handleFirstUserInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", handleFirstUserInteraction);
      window.removeEventListener("keydown", handleFirstUserInteraction);
    };
  }, [isMuted]);

  // Toggle Mute / Unmute
  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    try {
      localStorage.setItem(STORAGE_KEY, String(newMuted));
    } catch {
      // Storage unavailable
    }

    if (playerRef.current) {
      if (newMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
        playerRef.current.setVolume(ATMOSPHERIC_VOLUME);
        playerRef.current.playVideo();
        // Re-attempt playback rate when unmuting
        try {
          playerRef.current.setPlaybackRate(TARGET_PLAYBACK_RATE);
          setActualPlaybackRate(playerRef.current.getPlaybackRate());
        } catch {
          // Ignore
        }
      }
    }
  };

  return (
    <div className="fixed top-5 right-5 sm:top-7 sm:right-8 z-30 flex items-center gap-3">
      {/* Hidden container for YouTube audio player */}
      <div
        id={containerId}
        className="absolute -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <motion.button
        type="button"
        onClick={toggleMute}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#c084fc]/30 bg-[#120a1f]/70 backdrop-blur-md text-[#e9d5ff] text-xs sm:text-sm font-['Cinzel',serif] tracking-wider transition-all duration-300 hover:border-[#d8b4fe]/80 hover:bg-[#1e1035]/85 hover:shadow-[0_0_16px_rgba(192,132,252,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050a] cursor-pointer"
        aria-label={
          isMuted ? "Unmute background music" : "Mute background music"
        }
        title={
          isMuted
            ? "Background music is muted (Click to unmute)"
            : `Background music playing at 25% volume (${actualPlaybackRate ?? 0.8}x speed)`
        }
      >
        <span className="relative flex items-center justify-center text-[#c084fc] transition-colors group-hover:text-white">
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" />
          )}
        </span>

        <span className="select-none font-medium text-[#d8b4fe] group-hover:text-white transition-colors">
          {!isReady ? "Music: Loading" : isMuted ? "Music: Muted" : "Music: On"}
        </span>

        {/* Small subtle status pill */}
        <span
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            !isMuted && isPlaying
              ? "bg-[#c084fc] shadow-[0_0_8px_#c084fc]"
              : "bg-white/20"
          }`}
          aria-hidden="true"
        />
      </motion.button>
    </div>
  );
}
