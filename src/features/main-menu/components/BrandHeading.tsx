import { motion, useReducedMotion } from "motion/react";

interface BrandHeadingProps {
  title?: string;
}

export function BrandHeading({ title = "PULSEBOUND" }: BrandHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10"
    >
      <h1
        role="heading"
        aria-label={title}
        className="font-['Cinzel',Georgia,serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.14em] uppercase select-none animate-gradient-wave bg-gradient-to-r from-[#ffffff] via-[#ff4d6d] via-[#c1122b] via-[#fda4af] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_28px_rgba(227,38,54,0.55)]"
      >
        {title}
      </h1>
    </motion.header>
  );
}

export default BrandHeading;
