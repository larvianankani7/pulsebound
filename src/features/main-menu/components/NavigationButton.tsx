import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { playMenuClickSound } from "../utils/soundEffects";

interface NavigationButtonProps {
  label: string;
  path: string;
  index: number;
}

export function NavigationButton({
  label,
  path,
  index,
}: NavigationButtonProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    playMenuClickSound();
    // Brief visual feedback before navigation
    setTimeout(() => {
      navigate(path);
    }, 120);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      playMenuClickSound();
    }
  };

  return (
    <motion.li
      initial={
        shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="list-none w-full sm:w-auto"
    >
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="group relative flex w-full sm:w-80 md:w-96 lg:w-[420px] items-center justify-between px-7 sm:px-8 md:px-9 py-4 sm:py-4.5 md:py-5 min-h-[58px] sm:min-h-[64px] md:min-h-[70px] rounded-2xl border border-[#c084fc]/25 bg-[#120a1f]/65 backdrop-blur-md text-[#e9d5ff] font-['Cinzel',serif] text-base sm:text-lg md:text-xl tracking-[0.16em] uppercase font-semibold transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#d8b4fe]/85 hover:bg-[#1a0e2d]/80 hover:text-white hover:shadow-[0_0_26px_rgba(192,132,252,0.38)] active:scale-[0.98] active:bg-[#201138] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050a] cursor-pointer"
        aria-label={`Navigate to ${label}`}
      >
        {/* Subtle accent bar on hover */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 rounded-r bg-[#c084fc] transition-all duration-300 group-hover:h-3/5 group-hover:shadow-[0_0_12px_#c084fc]"
          aria-hidden="true"
        />

        <span className="relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(233,213,255,0.7)]">
          {label}
        </span>

        {/* Minimal elegant indicator dot */}
        <span
          className="h-2 w-2 rounded-full bg-[#c084fc]/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#e9d5ff] group-hover:shadow-[0_0_10px_#c084fc]"
          aria-hidden="true"
        />
      </button>
    </motion.li>
  );
}
