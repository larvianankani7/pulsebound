import { motion } from "motion/react";
import { CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { type QuizDefinition, type QuizAttemptRecord } from "../types";
import { getQuizResultEmoji, getQuizResultMeaning } from "../utils/scoring";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizResultScreenProps {
  quiz: QuizDefinition;
  attempt: QuizAttemptRecord;
  onReturnToQuizzes: () => void;
}

export function QuizResultScreen({
  quiz,
  attempt,
  onReturnToQuizzes,
}: QuizResultScreenProps) {
  const resultEmoji = getQuizResultEmoji(attempt.resultCategory);
  const resultMeaning = getQuizResultMeaning(attempt.resultCategory);

  const handleReturn = () => {
    playMenuClickSound();
    onReturnToQuizzes();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col p-6 sm:p-8 text-center"
    >
      {/* Trophy / Result Emoji Reveal */}
      <div className="mb-4 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/30 via-fuchsia-600/20 to-transparent flex items-center justify-center border border-purple-500/40 text-4xl shadow-[0_0_35px_rgba(168,85,247,0.35)] animate-bounce">
          {resultEmoji}
        </div>
      </div>

      <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
        Quiz Completion
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        {attempt.resultCategory}
      </h2>

      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-200 to-pink-300 mb-2">
        Score: {attempt.score} / 3
      </div>

      <p className="text-xs sm:text-sm text-purple-200/80 max-w-md mx-auto mb-6 leading-relaxed">
        {resultMeaning}
      </p>

      {/* 3 Questions Summary Breakdown */}
      <div className="text-left w-full max-w-lg mx-auto mb-8 space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-purple-300/80 mb-2">
          Question Breakdown
        </div>

        {quiz.questions.map((q, idx) => {
          const userAnswer = attempt.selectedAnswers[idx];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                isCorrect
                  ? "bg-emerald-950/25 border-emerald-500/30 text-emerald-200"
                  : "bg-rose-950/25 border-rose-500/30 text-rose-200"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-400" />
                )}
              </div>
              <div className="text-xs leading-relaxed">
                <div className="font-semibold text-white">
                  Q{idx + 1}: {q.question}
                </div>
                <div className="text-purple-300/80 mt-1">
                  <span>Your answer: </span>
                  <span className="font-medium text-white">
                    {q.options[userAnswer] ?? "Unanswered"}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="text-emerald-300/90 mt-0.5">
                    <span>Correct: </span>
                    <span className="font-medium">
                      {q.options[q.correctIndex]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Return to Quizzes Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleReturn}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Quizzes</span>
        </button>
      </div>
    </motion.div>
  );
}
