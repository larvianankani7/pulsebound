import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Flame } from "lucide-react";
import { DIFFICULTY_TIERS, getTierForLevel } from "../constants";

export interface DifficultyTransitionProps {
  currentCompletedLevel: number;
  onContinue: () => void;
}

export function DifficultyTransition({
  currentCompletedLevel,
  onContinue,
}: DifficultyTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const nextLevel = currentCompletedLevel + 1;
  const nextTier = getTierForLevel(nextLevel);
  const nextTierInfo = DIFFICULTY_TIERS[nextTier];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto select-none">
      <motion.div
        data-testid="difficulty-transition-modal"
        aria-label="Difficulty Increased"
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, scale: 0.9, y: 20 }
        }
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center text-center max-w-xl w-full p-6 sm:p-10 rounded-3xl border-2 border-purple-400/40 bg-gradient-to-b from-[#240c42]/95 via-[#130626]/98 to-[#090212]/98 shadow-[0_0_100px_rgba(192,132,252,0.4)] max-h-[88vh] overflow-y-auto"
      >
        {/* Violet & Rose Cosmic Aura */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-purple-600/25 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-fuchsia-600/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Badge Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-[#35105b]/80 text-[#d8b4fe] text-xs font-['Cinzel',serif] uppercase tracking-[0.25em] font-bold mb-6 shadow-[0_0_20px_rgba(192,132,252,0.4)]">
          <Flame className="w-4 h-4 text-[#c084fc] animate-pulse" />
          <span>DIFFICULTY INCREASED</span>
        </div>

        {/* Large Glowing Typography */}
        <h2
          data-testid="difficulty-transition-headline"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-center leading-tight bg-gradient-to-r from-[#e9d5ff] via-[#f5d0fe] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(192,132,252,0.6)] mb-4"
        >
          THE GARDEN GROWS MORE CHALLENGING
        </h2>

        {/* Subtitle / Next Tier Description */}
        <div className="text-xs sm:text-sm text-purple-200/90 max-w-md space-y-2 mb-8">
          <p className="font-semibold text-white">
            Entering the{" "}
            <span className="text-[#d8b4fe]">{nextTierInfo.name} Tier</span>{" "}
            (Level {nextLevel < 10 ? `0${nextLevel}` : nextLevel}).
          </p>
          <p className="text-purple-300/75 text-xs font-sans">
            {nextTierInfo.tagline} Expect richer garden options, deeper
            nutritional nuances, and critical distinctions between home comfort
            and medical care.
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onContinue}
          data-testid="difficulty-transition-continue-button"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#d8b4fe] bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] text-white font-['Cinzel',serif] text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-[0_0_30px_rgba(192,132,252,0.5)] hover:shadow-[0_0_45px_rgba(192,132,252,0.7)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
        >
          <span>ENTER THE NEW DEPTHS</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
