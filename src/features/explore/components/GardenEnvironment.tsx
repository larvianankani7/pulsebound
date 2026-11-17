import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

export function GardenEnvironment() {
  const shouldReduceMotion = useReducedMotion();

  // Generate deterministic gentle floating firefly specks
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: ((i * 23) % 94) + 3,
      y: ((i * 37) % 90) + 5,
      size: (i % 3) + 2,
      duration: 6 + (i % 5) * 2,
      delay: (i % 4) * 1.2,
      opacity: 0.25 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep Violet Garden Atmosphere Radiance */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-950/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-fuchsia-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1b0833]/30 blur-[160px] pointer-events-none" />

      {/* Subtle Botanical Corner Vignettes (2D Illustrated Garden Accents) */}
      <svg
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 opacity-15 text-purple-700 pointer-events-none"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M0 200C20 160 50 140 90 130C60 150 40 180 30 200H0Z" />
        <path d="M0 160C40 120 90 100 150 80C110 110 80 150 60 190L0 160Z" />
        <circle cx="95" cy="125" r="4" fill="#c084fc" opacity="0.6" />
        <circle cx="150" cy="78" r="5" fill="#d8b4fe" opacity="0.7" />
      </svg>

      <svg
        className="absolute top-12 right-0 w-60 h-60 sm:w-80 sm:h-80 opacity-15 text-purple-600 pointer-events-none transform -scale-x-100"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M0 0C30 50 70 80 120 90C80 70 50 40 30 0H0Z" />
        <path d="M40 0C70 60 120 100 180 110C130 90 90 50 60 0H40Z" />
        <circle cx="120" cy="90" r="4" fill="#e9d5ff" opacity="0.6" />
        <circle cx="180" cy="110" r="5" fill="#facc15" opacity="0.7" />
      </svg>

      {/* Ambient Floating Firefly Particles */}
      {!shouldReduceMotion &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: p.opacity, y: 0 }}
            animate={{
              opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.3],
              y: [-12, 12, -12],
              x: [-8, 8, -8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-tr from-[#e9d5ff] to-[#fef08a] shadow-[0_0_12px_rgba(254,240,138,0.7)] pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
    </div>
  );
}
