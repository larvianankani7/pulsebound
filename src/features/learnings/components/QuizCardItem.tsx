import { motion } from "motion/react";
import { Lock, Play, CheckCircle2, Award } from "lucide-react";
import { BadgeIllustration } from "../../explore/components/illustrations/BadgeIllustrations";
import { type QuizDefinition, type QuizAttemptRecord } from "../types";
import { EXPLORE_BADGES } from "../../explore/data/badges";
import { getQuizResultEmoji } from "../utils/scoring";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizCardItemProps {
  quiz: QuizDefinition;
  isUnlocked: boolean;
  attempt?: QuizAttemptRecord;
  onStart: () => void;
  onReview: () => void;
}

export function QuizCardItem({
  quiz,
  isUnlocked,
  attempt,
  onStart,
  onReview,
}: QuizCardItemProps) {
  const badge = EXPLORE_BADGES[quiz.badgeId] ?? {
    id: quiz.badgeId,
    name: "Explore Badge",
    iconId: "first_bloom",
  };

  const isCompleted = !!attempt;

  const handleStart = () => {
    if (!isUnlocked) return;
    playMenuClickSound();
    onStart();
  };

  const handleReview = () => {
    playMenuClickSound();
    onReview();
  };

  // LOCKED STATE
  if (!isUnlocked) {
    return (
      <div
        data-testid={`quiz-card-${quiz.id}`}
        className="relative flex flex-col justify-between rounded-2xl border border-purple-900/20 bg-black/40 backdrop-blur-md p-5 opacity-60 transition-opacity"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono tracking-wider text-purple-400/60 uppercase">
              Quiz {String(quiz.levelNumber).padStart(2, "0")} • Level{" "}
              {quiz.levelNumber}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-950/40 text-purple-400/70 border border-purple-800/30">
              <Lock className="w-3 h-3" />
              <span>Locked</span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-purple-950/20 border border-purple-900/30 flex items-center justify-center opacity-50">
              <Lock className="w-5 h-5 text-purple-400/50" />
            </div>
            <div>
              <h3 className="text-base font-bold text-purple-200/60 leading-snug">
                {quiz.title}
              </h3>
              <p className="text-xs text-purple-400/50">{quiz.conditionName}</p>
            </div>
          </div>

          <p className="text-xs text-purple-400/60 leading-relaxed mb-4">
            Requires {badge.name} badge from Explore Level {quiz.levelNumber} to
            unlock.
          </p>
        </div>

        <div className="pt-3 border-t border-purple-900/20 flex items-center justify-between text-xs text-purple-400/40">
          <span>3 Questions</span>
          <span className="italic">Badge Locked</span>
        </div>
      </div>
    );
  }

  // COMPLETED STATE
  if (isCompleted) {
    const resultEmoji = getQuizResultEmoji(attempt.resultCategory);

    return (
      <div
        data-testid={`quiz-card-${quiz.id}`}
        className="relative flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#0e0819]/85 backdrop-blur-xl p-5 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono tracking-wider text-purple-300/80 uppercase">
              Quiz {String(quiz.levelNumber).padStart(2, "0")} • Level{" "}
              {quiz.levelNumber}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-fuchsia-950/60 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_12px_rgba(217,70,239,0.2)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>COMPLETED</span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center overflow-hidden">
              <BadgeIllustration id={badge.iconId} size={36} />
            </div>
            <div>
              <h3 className="text-base font-bold text-purple-100 leading-snug">
                {quiz.title}
              </h3>
              <p className="text-xs text-purple-300/70">{quiz.conditionName}</p>
            </div>
          </div>

          {/* Completed Score & Category Banner */}
          <div className="mb-4 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{resultEmoji}</span>
              <div>
                <div className="text-xs font-bold text-purple-200">
                  {attempt.resultCategory}
                </div>
                <div className="text-[11px] text-purple-300/70">
                  Score: {attempt.score} / 3
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-purple-300 bg-purple-900/50 px-2 py-1 rounded border border-purple-500/20">
              {Math.round((attempt.score / 3) * 100)}%
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
          <span className="text-xs text-purple-300/60">
            Single Attempt Used
          </span>
          <button
            type="button"
            onClick={handleReview}
            aria-label={`Review Quiz ${quiz.levelNumber}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 hover:border-purple-400/50 transition-colors"
          >
            <span>Review Answers</span>
          </button>
        </div>
      </div>
    );
  }

  // UNLOCKED STATE (Ready to start)
  return (
    <motion.div
      data-testid={`quiz-card-${quiz.id}`}
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative flex flex-col justify-between rounded-2xl border border-purple-500/40 bg-[#120a22]/85 backdrop-blur-xl p-5 shadow-[0_0_25px_rgba(168,85,247,0.18)] hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono tracking-wider text-purple-300/90 uppercase px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
            Quiz {String(quiz.levelNumber).padStart(2, "0")} • Level{" "}
            {quiz.levelNumber}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/50 text-purple-200 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
            <Award className="w-3.5 h-3.5 text-fuchsia-300" />
            <span>Unlocked</span>
          </span>
        </div>

        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center overflow-hidden">
            <BadgeIllustration id={badge.iconId} size={36} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white leading-snug">
              {quiz.title}
            </h3>
            <p className="text-xs text-purple-300/80">{quiz.conditionName}</p>
          </div>
        </div>

        <p className="text-xs text-purple-200/80 leading-relaxed mb-4">
          {quiz.description}
        </p>
      </div>

      <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
        <span className="text-xs text-purple-300/70 font-mono">
          3 Questions
        </span>
        <button
          type="button"
          onClick={handleStart}
          aria-label={`Start Quiz ${quiz.levelNumber}`}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all transform hover:scale-105"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Start Quiz</span>
        </button>
      </div>
    </motion.div>
  );
}
