import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface BackgroundMediaProps {
  videoSrc?: string;
  startTime?: number;
  opacity?: number;
}

export function BackgroundMedia({
  videoSrc = "/videos/pulsebound-bg.mp4",
  startTime = 0,
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
        if (startTime > 0 && video.currentTime < startTime) {
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

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = startTime;
      void video.play();
    }
  };

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#050505] opacity-95"
      aria-hidden="true"
    >
      {/* Ambient background fallback layer: deep obsidian & blood red glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0003] via-[#050505] to-[#260007]" />

      {/* Atmospheric crimson and ruby glow spots */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-red-950/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[550px] h-[550px] rounded-full bg-crimson-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] rounded-full bg-red-900/20 blur-[130px] pointer-events-none" />

      {/* Video layer with cover fit, subtle blur, and scale */}
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
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            filter: "blur(2.5px)",
            transform: "scale(1.04)",
          }}
          tabIndex={-1}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      {/* Darkened blood tint overlay */}
      <div className="absolute inset-0 bg-[#050505]/45 pointer-events-none" />

      {/* Left-to-right gradient scrim to guarantee text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/50 to-transparent pointer-events-none" />

      {/* Cinematic Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />
    </div>
  );
}

export default BackgroundMedia;
