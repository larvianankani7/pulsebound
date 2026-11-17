import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { type BadgeInfo } from "../types";
import { BadgeIllustration } from "./illustrations/BadgeIllustrations";
import { TOTAL_LEVELS } from "../constants";

export interface BadgeUnlockProps {
  badge: BadgeInfo;
  onContinue: () => void;
}

export function BadgeUnlock({ badge, onContinue }: BadgeUnlockProps) {
  const shouldReduceMotion = useReducedMotion();
  const formattedLevel =
    badge.levelNumber < 10 ? `0${badge.levelNumber}` : `${badge.levelNumber}`;
  const isFinalLevel = badge.levelNumber >= TOTAL_LEVELS;
  const nextLevelNumber = badge.levelNumber + 1;
  const formattedNextLevel =
    nextLevelNumber < 10 ? `0${nextLevelNumber}` : `${nextLevelNumber}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto select-none">
      <motion.div
        data-testid="badge-unlock-modal"
        aria-label={`Badge Unlocked: ${badge.name}`}
        initial={
          shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: 0.8, opacity: 0, y: 30 }
        }
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl border-2 border-amber-400/40 bg-gradient-to-b from-[#260206]/95 via-[#140103]/98 to-[#050001]/98 text-center text-[#f3eeee] shadow-[0_0_90px_rgba(251,191,36,0.35)] max-w-lg w-full mx-4 max-h-[88vh] overflow-y-auto"
      >
        {/* Soft Golden & Crimson Radiance Halo */}
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-red-700/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-400/35 bg-[#2f1b0a]/80 text-amber-300 text-xs font-['Cinzel',serif] uppercase tracking-[0.25em] font-bold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>TACTICAL BADGE UNLOCKED</span>
        </div>

        {/* Large Centred Badge Illustration */}
        <motion.div
          initial={shouldReduceMotion ? {} : { rotate: -10, scale: 0.9 }}
          animate={shouldReduceMotion ? {} : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-6 drop-shadow-[0_0_35px_rgba(251,191,36,0.5)]"
        >
          <BadgeIllustration id={badge.iconId} size={130} />
        </motion.div>

        {/* Badge Name with Radiant Golden Wave */}
        <h2
          data-testid="unlocked-badge-name"
          className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#fef08a] via-[#fef9c3] to-[#eab308] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,191,36,0.5)] mb-2"
        >
          {badge.name}
        </h2>

        {/* Level and Achievement Message */}
        <div className="text-xs sm:text-sm text-red-200/90 font-sans max-w-xs mb-8 space-y-1">
          <p className="font-semibold text-[#fda4af]">
            You completed Level {formattedLevel} — {badge.conditionName}.
          </p>
          <p className="text-[11px] text-red-300/70">{badge.description}</p>
        </div>

        {/* Continue Action */}
        <button
          type="button"
          onClick={onContinue}
          data-testid="badge-continue-button"
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 text-black font-['Cinzel',serif] text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_45px_rgba(251,191,36,0.7)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <span>
            {isFinalLevel
              ? "CLAIM FINAL TRIUMPH"
              : `CONTINUE TO LEVEL ${formattedNextLevel}`}
          </span>
          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}

export default BadgeUnlock;
