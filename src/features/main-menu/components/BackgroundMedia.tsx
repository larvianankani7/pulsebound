import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface BackgroundMediaProps {
  videoSrc?: string;
  startTime?: number;
  opacity?: number;
}

export function BackgroundMedia({
  videoSrc = "/videos/menu-bg.mp4",
  startTime = 5,
  opacity = 0.95,
}: BackgroundMediaProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setInitialTime = () => {
      try {
        if (video.currentTime < startTime) {
          video.currentTime = startTime;
        }
        void video.play();
      } catch {
        // Autoplay may be delayed until user gesture in restricted contexts
      }
    };

    if (video.readyState >= 1) {
      setInitialTime();
    } else {
      video.addEventListener("loadedmetadata", setInitialTime, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", setInitialTime);
    };
  }, [startTime]);

  // Restart from 5s on loop cycle
  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = startTime;
      void video.play();
    }
  };

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#07050a] opacity-95"
      aria-hidden="true"
    >
      {/* Ambient background fallback layer: ethereal dark lavender & black gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0714] via-[#07050a] to-[#120824]" />

      {/* Subtle organic purple ambient glow spots */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-900/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-950/15 blur-[120px] pointer-events-none" />

      {/* Video layer with hardware-accelerated cover sizing, 95% opacity, and 5s start time */}
      <motion.div
        initial={shouldReduceMotion ? { opacity } : { opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? opacity : 0.85 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-95"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-95"
          style={{
            filter: "blur(2px)",
            transform: "scale(1.04)", // Scale slightly to clip blur fringe bleeding at edges
          }}
          tabIndex={-1}
        >
          <source src={`${videoSrc}#t=${startTime}`} type="video/mp4" />
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      {/* Darkened tint overlay: deepened slightly to darken the background a lil */}
      <div className="absolute inset-0 bg-[#07050a]/35 pointer-events-none" />

      {/* Gentle left scrim to preserve text legibility while keeping the video clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07050a]/70 via-[#07050a]/35 to-transparent pointer-events-none" />

      {/* Vignette overlay (10% subtle edge darkening) */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />
    </div>
  );
}
