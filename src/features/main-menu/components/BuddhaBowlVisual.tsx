import { motion, useReducedMotion } from "motion/react";

interface BuddhaBowlVisualProps {
  imageSrc?: string;
}

export function BuddhaBowlVisual({
  imageSrc = "/images/buddha-bowl.webp",
}: BuddhaBowlVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative z-10 flex items-center justify-center pointer-events-auto"
      aria-label="Decorative Buddha Bowl culinary illustration"
    >
      {/* Ambient background glow orb */}
      <div
        className="absolute inset-0 -m-4 sm:-m-6 md:-m-8 rounded-full bg-purple-600/20 blur-2xl sm:blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Animated Motion Container */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : {
                y: [-7, 7, -7],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="group relative cursor-pointer select-none"
      >
        {/* Perfectly circular container with dark lavender border, glow, and shadow */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-68 md:h-68 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-[#c084fc]/40 bg-[#120a1f]/60 backdrop-blur-md shadow-[0_0_35px_rgba(168,85,247,0.3),0_0_60px_rgba(192,132,252,0.2)] transition-all duration-500 ease-out group-hover:border-[#d8b4fe]/80 group-hover:shadow-[0_0_55px_rgba(192,132,252,0.55),0_0_80px_rgba(168,85,247,0.35)]">
          {/* Buddha Bowl Image at approx 90% opacity with cover crop */}
          <img
            src={imageSrc}
            alt="Artisanal wholesome Buddha Bowl with fresh vegetables, grains, and greens"
            loading="eager"
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Ethereal dark lavender radial scrim to blend image into the ambient environment */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#07050a]/35 via-transparent to-purple-950/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Delicate inner rim highlight */}
          <div
            className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  );
}
