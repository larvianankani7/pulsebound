import { Play, X, Award, AlertCircle } from "lucide-react";
import { BadgeIllustration } from "../../explore/components/illustrations/BadgeIllustrations";
import { type QuizDefinition } from "../types";
import { EXPLORE_BADGES } from "../../explore/data/badges";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizIntroProps {
  quiz: QuizDefinition;
  onStart: () => void;
  onClose: () => void;
}

export function QuizIntro({ quiz, onStart, onClose }: QuizIntroProps) {
  const badge = EXPLORE_BADGES[quiz.badgeId] ?? {
    id: quiz.badgeId,
    name: "Explore Badge",
    iconId: "first_bloom",
  };

  const handleStart = () => {
    playMenuClickSound();
    onStart();
  };

  const handleClose = () => {
    playMenuClickSound();
    onClose();
  };

  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8">
      {/* Top Close Button */}
      <div className="w-full flex justify-end mb-2">
        <button
          type="button"
          onClick={handleClose}
          className="p-2 rounded-xl text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 transition-colors"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Badge Illustration */}
      <div className="mb-4">
        <div className="w-20 h-20 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.25)]">
          <BadgeIllustration id={badge.iconId} size={54} />
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
        <Award className="w-4 h-4" />
        <span>Badge Quiz • Level {quiz.levelNumber}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 max-w-md">
        {quiz.title}
      </h2>

      <p className="text-xs sm:text-sm text-purple-200/80 max-w-lg mb-6 leading-relaxed">
        {quiz.description}
      </p>

      {/* Rules & Parameters Cards */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-6">
        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center">
          <div className="text-xs font-semibold text-purple-300/80">
            Total Questions
          </div>
          <div className="text-lg font-bold text-white mt-0.5">3 Questions</div>
        </div>

        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center">
          <div className="text-xs font-semibold text-purple-300/80">
            Attempt Rule
          </div>
          <div className="text-lg font-bold text-amber-300 mt-0.5">
            Single Attempt
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="w-full max-w-md p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-left text-xs text-amber-200/90 mb-6">
        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p>
          Each unlocked quiz can only be attempted <strong>once</strong>. Your
          answers and score will be recorded permanently in your botanical
          profile.
        </p>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={handleStart}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all transform hover:scale-105"
      >
        <Play className="w-4 h-4 fill-current" />
        <span>Begin Quiz</span>
      </button>
    </div>
  );
}
