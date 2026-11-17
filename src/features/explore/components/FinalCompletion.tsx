import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { Award, BookOpen, Crown, Home, RotateCcw } from "lucide-react";
import { BadgeIllustration } from "./illustrations/BadgeIllustrations";
import { TOTAL_LEVELS } from "../constants";

export interface FinalCompletionProps {
  totalBadges: number;
  learningScore: number;
  onReplayLevel: (levelNumber: number) => void;
}

export function FinalCompletion({
  totalBadges,
  learningScore,
  onReplayLevel,
}: FinalCompletionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto select-none">
      <motion.div
        data-testid="final-completion-modal"
        aria-label="The Garden of Wisdom: All 25 Levels Completed"
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, scale: 0.9, y: 30 }
        }
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center text-center max-w-2xl w-full p-6 sm:p-10 rounded-3xl border-2 border-amber-400/50 bg-gradient-to-b from-[#2e134f]/98 via-[#1a0730]/98 to-[#090212]/98 shadow-[0_0_120px_rgba(251,191,36,0.4)] max-h-[88vh] overflow-y-auto my-auto"
      >
        {/* Luminous Halo */}
        <div
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500/25 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Crown Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-[#351e08]/80 text-amber-300 text-xs font-['Cinzel',serif] uppercase tracking-[0.25em] font-bold mb-4 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>SUPREME MASTERY ACHIEVED</span>
        </div>

        {/* Final 25th Badge Illustration */}
        <div className="relative mb-5 drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
          <BadgeIllustration id="garden_of_wisdom" size={140} />
        </div>

        {/* Title */}
        <h1
          data-testid="final-completion-title"
          className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#fef08a] via-[#ffffff] to-[#eab308] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.6)] mb-3"
        >
          THE GARDEN OF WISDOM
        </h1>

        <p className="text-sm sm:text-base text-purple-200/90 font-sans max-w-lg mb-6 leading-relaxed">
          You have completed all {TOTAL_LEVELS} levels of SYLVARA Explore. You
          have explored the intricate relationship between foods, biological
          nutrients, disease prevention, and evidence-based medicine.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#1d0b38]/70 border border-amber-400/30">
            <Award className="w-5 h-5 text-amber-400 mb-1" />
            <span className="font-mono text-2xl font-bold text-white">
              {totalBadges}
            </span>
            <span className="text-[11px] font-['Cinzel',serif] uppercase tracking-wider text-amber-300/80">
              Badges Earned
            </span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#1d0b38]/70 border border-emerald-400/30">
            <BookOpen className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="font-mono text-2xl font-bold text-white">
              {learningScore}
            </span>
            <span className="text-[11px] font-['Cinzel',serif] uppercase tracking-wider text-emerald-300/80">
              Learnings Unlocked
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center">
          <button
            type="button"
            onClick={() => onReplayLevel(1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-400/30 bg-[#1e0d3b] text-[#d8b4fe] hover:text-white hover:border-[#c084fc] font-['Cinzel',serif] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-[#c084fc]" />
            <span>Revisit Garden Levels</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-black font-['Cinzel',serif] text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] transition-all"
          >
            <Home className="w-4 h-4 text-black" />
            <span>Return to Main Menu</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
