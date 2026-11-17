import { motion, useReducedMotion } from "motion/react";

interface TaglineProps {
  text?: string;
}

export function Tagline({
  text = "Forge the flesh. Master the pulse. Unlock your vitality.",
}: TaglineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="mt-3 sm:mt-4 w-fit max-w-full overflow-x-visible select-none"
    >
      <p className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(0.7rem,2vw,1.4rem)] sm:text-[clamp(0.88rem,2.1vw,1.5rem)] md:text-xl lg:text-2xl xl:text-[1.65rem] italic font-normal tracking-wide text-[#fda4af]/90 leading-tight whitespace-nowrap drop-shadow-[0_2px_14px_rgba(227,38,54,0.35)]">
        <span className="animate-tagline-flow bg-gradient-to-r from-[#ffe4e6] via-[#fda4af] via-[#ff4d6d] to-[#fecdd3] bg-clip-text text-transparent">
          &ldquo;{text}&rdquo;
        </span>
      </p>
    </motion.div>
  );
}

export default Tagline;
