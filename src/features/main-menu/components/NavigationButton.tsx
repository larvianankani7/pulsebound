import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { playMenuClickSound } from "../utils/soundEffects";

interface NavigationButtonProps {
  label: string;
  path: string;
  index: number;
  subtitle?: string;
}

export function NavigationButton({
  label,
  path,
  index,
  subtitle,
}: NavigationButtonProps) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    playMenuClickSound();
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
        className="group relative flex w-full sm:w-80 md:w-96 lg:w-[440px] items-center justify-between px-7 sm:px-8 md:px-9 py-4 sm:py-4.5 md:py-5 min-h-[58px] sm:min-h-[64px] md:min-h-[70px] rounded-2xl border border-red-900/35 bg-[#140205]/75 backdrop-blur-md text-[#f3eeee] font-['Cinzel',serif] text-base sm:text-lg md:text-xl tracking-[0.16em] uppercase font-semibold transition-all duration-300 ease-out hover:scale-[1.02] hover:border-red-500/80 hover:bg-[#220409]/90 hover:text-white hover:shadow-[0_0_28px_rgba(227,38,54,0.45)] active:scale-[0.98] active:bg-[#2b050d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] cursor-pointer"
        aria-label={`Navigate to ${label}`}
      >
        {/* Subtle accent bar on hover */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 rounded-r bg-red-600 transition-all duration-300 group-hover:h-3/5 group-hover:shadow-[0_0_14px_#e32636]"
          aria-hidden="true"
        />

        <div className="flex flex-col text-left">
          <span className="relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,77,109,0.7)]">
            {label}
          </span>
          {subtitle && (
            <span className="text-[11px] font-sans font-normal tracking-wider lowercase text-neutral-400 group-hover:text-red-200/80 transition-colors">
              {subtitle}
            </span>
          )}
        </div>

        {/* Glowing indicator dot */}
        <span
          className="h-2 w-2 rounded-full bg-red-700/50 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-400 group-hover:shadow-[0_0_12px_#e32636]"
          aria-hidden="true"
        />
      </button>
    </motion.li>
  );
}

export default NavigationButton;
