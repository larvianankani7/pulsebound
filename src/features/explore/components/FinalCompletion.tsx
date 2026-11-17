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
        className="relative flex flex-col items-center justify-center text-center max-w-2xl w-full p-6 sm:p-10 rounded-3xl border-2 border-amber-400/50 bg-gradient-to-b from-[#2a0409]/98 via-[#180205]/98 to-[#060002]/98 shadow-[0_0_120px_rgba(251,191,36,0.4)] max-h-[88vh] overflow-y-auto my-auto text-[#f3eeee]"
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

        <p className="text-sm sm:text-base text-red-200/90 font-sans max-w-lg mb-6 leading-relaxed">
          You have completed all {TOTAL_LEVELS} levels of PULSEBOUND. You have
          mastered foundational human physiology, exercise principles, circadian
          rhythms, and evidence-based recovery protocols.
        </p>

        {/* Final Stats Overview */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
          <div className="p-4 rounded-2xl border border-amber-400/30 bg-[#251204]/70 flex flex-col items-center">
            <Award className="w-6 h-6 text-amber-400 mb-1" />
            <span className="text-2xl font-mono font-bold text-white">
              {totalBadges} / {TOTAL_LEVELS}
            </span>
            <span className="text-[10px] uppercase font-['Cinzel',serif] tracking-wider text-amber-300/80">
              Badges Collected
            </span>
          </div>

          <div className="p-4 rounded-2xl border border-red-700/30 bg-[#1e0206]/70 flex flex-col items-center">
            <BookOpen className="w-6 h-6 text-red-400 mb-1" />
            <span className="text-2xl font-mono font-bold text-white">
              {learningScore} PTS
            </span>
            <span className="text-[10px] uppercase font-['Cinzel',serif] tracking-wider text-red-300/80">
              Mastery Score
            </span>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-red-900/40 bg-[#160205] text-[#fda4af] hover:text-white hover:border-red-500 transition-all text-xs font-['Cinzel',serif] font-bold uppercase tracking-wider"
          >
            <Home className="w-4 h-4" />
            <span>Main Menu</span>
          </Link>

          <Link
            to="/learnings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-red-700/50 bg-[#250308] text-[#fecdd3] hover:text-white hover:border-red-400 transition-all text-xs font-['Cinzel',serif] font-bold uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4" />
            <span>Codex of Vitality</span>
          </Link>

          <button
            type="button"
            onClick={() => onReplayLevel(1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 text-black text-xs font-['Cinzel',serif] font-extrabold uppercase tracking-widest shadow-[0_0_25px_rgba(251,191,36,0.5)] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-black" />
            <span>Replay Sector 01</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default FinalCompletion;
