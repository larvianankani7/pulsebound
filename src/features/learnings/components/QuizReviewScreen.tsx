import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { type QuizDefinition, type QuizAttemptRecord } from "../types";
import { getQuizResultEmoji, getQuizResultMeaning } from "../utils/scoring";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizReviewScreenProps {
  quiz: QuizDefinition;
  attempt: QuizAttemptRecord;
  onReturn: () => void;
}

export function QuizReviewScreen({
  quiz,
  attempt,
  onReturn,
}: QuizReviewScreenProps) {
  const resultEmoji = getQuizResultEmoji(attempt.resultCategory);
  const resultMeaning = getQuizResultMeaning(attempt.resultCategory);

  const handleReturn = () => {
    playMenuClickSound();
    onReturn();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col p-6 sm:p-8"
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-purple-500/20 pb-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase">
            COMPLETED QUIZ REVIEW
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            {quiz.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={handleReturn}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 transition-all self-start sm:self-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Quizzes</span>
        </button>
      </div>

      {/* Result Overview Card */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-purple-900/40 to-black/60 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-3xl">
            {resultEmoji}
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white">
              {attempt.resultCategory}
            </div>
            <div className="text-xs text-purple-200/80 max-w-sm">
              {resultMeaning}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-semibold uppercase text-purple-400">
              Recorded Score
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {attempt.score} / 3
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">
            One Attempt Used
          </span>
        </div>
      </div>

      {/* Question Details List */}
      <div className="space-y-6 mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">
          Question-by-Question Review
        </h3>

        {quiz.questions.map((q, idx) => {
          const userAnswer = attempt.selectedAnswers[idx];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${
                isCorrect
                  ? "bg-emerald-950/15 border-emerald-500/30"
                  : "bg-rose-950/15 border-rose-500/30"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                  QUESTION {idx + 1} OF 3
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isCorrect
                      ? "bg-emerald-950/60 text-emerald-300 border border-emerald-500/40"
                      : "bg-rose-950/60 text-rose-300 border border-rose-500/40"
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Correct</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Incorrect</span>
                    </>
                  )}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-4">
                {q.question}
              </h4>

              {/* Options Breakdown */}
              <div className="space-y-2 mb-4">
                {q.options.map((opt, optIdx) => {
                  const wasChosen = userAnswer === optIdx;
                  const isTheCorrectOne = q.correctIndex === optIdx;

                  let style =
                    "bg-black/30 border-purple-900/20 text-purple-300/70";
                  if (wasChosen && isCorrect) {
                    style =
                      "bg-emerald-950/40 border-emerald-500/50 text-emerald-100 font-semibold";
                  } else if (wasChosen && !isCorrect) {
                    style =
                      "bg-rose-950/40 border-rose-500/50 text-rose-100 font-semibold";
                  } else if (isTheCorrectOne) {
                    style =
                      "bg-emerald-950/20 border-emerald-500/30 text-emerald-300 font-medium";
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${style}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded font-mono text-[11px] flex items-center justify-center bg-black/40">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {wasChosen && (
                        <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-black/50">
                          Your Choice
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Takeaway */}
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/15 text-xs text-purple-200/90 leading-relaxed mb-2">
                <span className="font-bold text-purple-300 mr-1.5">
                  Explanation:
                </span>
                <span>{q.explanation}</span>
              </div>

              <div className="p-3 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/20 text-xs text-fuchsia-200 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Takeaway:</strong> {q.takeaway}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Return Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleReturn}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Quizzes</span>
        </button>
      </div>
    </motion.div>
  );
}
