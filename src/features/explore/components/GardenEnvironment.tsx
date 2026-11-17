import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

export function GardenEnvironment() {
  const shouldReduceMotion = useReducedMotion();

  // Generate deterministic subtle floating red vitality ember specks
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
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
      {/* Deep Blood Red Proving Ground Atmosphere Radiance */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-red-950/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-crimson-900/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1e0206]/30 blur-[160px] pointer-events-none" />

      {/* Subtle Bio-Kinetic Tech HUD Corner Accents */}
      <svg
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 opacity-20 text-red-700 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 190 H60 L80 170 H150" />
        <circle cx="150" cy="170" r="3" fill="#e11d48" />
        <path d="M10 160 H40 L60 140 H120" />
        <circle cx="120" cy="140" r="2.5" fill="#f43f5e" />
      </svg>

      <svg
        className="absolute top-12 right-0 w-60 h-60 sm:w-80 sm:h-80 opacity-20 text-red-600 pointer-events-none transform -scale-x-100"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 10 H60 L80 30 H140" />
        <circle cx="140" cy="30" r="3" fill="#fda4af" />
        <path d="M10 40 H40 L60 60 H110" />
        <circle cx="110" cy="60" r="2" fill="#e11d48" />
      </svg>

      {/* Floating Kinetic Vitality Embers */}
      {!shouldReduceMotion &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: ["0px", "-26px", "0px"],
              x: ["0px", `${(p.id % 2 === 0 ? 1 : -1) * 14}px`, "0px"],
              opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="absolute rounded-full bg-gradient-to-t from-red-600 to-rose-400 shadow-[0_0_8px_rgba(225,29,72,0.9)] pointer-events-none"
          />
        ))}
    </div>
  );
}

export default GardenEnvironment;
