import { motion } from "motion/react";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from "lucide-react";
import { type QuizQuestion } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizFeedbackStepProps {
  question: QuizQuestion;
  selectedOptionIndex: number;
  questionIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onFinish: () => void;
}

export function QuizFeedbackStep({
  question,
  selectedOptionIndex,
  questionIndex,
  totalQuestions,
  onNext,
  onFinish,
}: QuizFeedbackStepProps) {
  const isCorrect = selectedOptionIndex === question.correctIndex;
  const isLastQuestion = questionIndex >= totalQuestions - 1;

  const handleAction = () => {
    playMenuClickSound();
    if (isLastQuestion) {
      onFinish();
    } else {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col p-6 sm:p-8"
    >
      {/* Header Feedback Banner */}
      <div
        className={`mb-6 p-4 rounded-2xl border flex items-center gap-3.5 ${
          isCorrect
            ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            : "bg-rose-950/40 border-rose-500/40 text-rose-200 shadow-[0_0_25px_rgba(244,63,94,0.2)]"
        }`}
      >
        <div className="flex-shrink-0">
          {isCorrect ? (
            <CheckCircle2 className="w-7 h-7 text-emerald-400" />
          ) : (
            <XCircle className="w-7 h-7 text-rose-400" />
          )}
        </div>
        <div>
          <div className="text-base font-bold">
            {isCorrect ? "Correct Answer!" : "Incorrect"}
          </div>
          <div className="text-xs opacity-80">
            {isCorrect
              ? "Great job applying scientific evidence."
              : "Review the evidence below to reinforce your understanding."}
          </div>
        </div>
      </div>

      {/* Question Recap */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase text-purple-400/80">
          Question {questionIndex + 1}
        </span>
        <h4 className="text-sm sm:text-base font-bold text-white mt-1">
          {question.question}
        </h4>
      </div>

      {/* Selected vs Correct Option Review */}
      <div className="space-y-2 mb-6">
        <div
          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium ${
            isCorrect
              ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-100"
              : "bg-rose-950/30 border-rose-500/40 text-rose-100"
          }`}
        >
          <span className="font-bold mr-2">Your Answer:</span>
          {question.options[selectedOptionIndex]}
        </div>

        {!isCorrect && (
          <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-200 text-xs sm:text-sm font-medium">
            <span className="font-bold mr-2">Correct Answer:</span>
            {question.options[question.correctIndex]}
          </div>
        )}
      </div>

      {/* Detailed Explanation */}
      <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs sm:text-sm text-purple-200/90 leading-relaxed">
        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1.5">
          Scientific Explanation
        </div>
        <p>{question.explanation}</p>
      </div>

      {/* Key Takeaway */}
      <div className="mb-8 p-3.5 rounded-xl bg-fuchsia-950/30 border border-fuchsia-500/30 flex items-start gap-3 text-xs sm:text-sm text-fuchsia-200">
        <Lightbulb className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-fuchsia-300 mr-1.5">
            Key Takeaway:
          </span>
          <span>{question.takeaway}</span>
        </div>
      </div>

      {/* Continue Action */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleAction}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 cursor-pointer"
        >
          <span>
            {isLastQuestion
              ? "View Final Results"
              : "Continue to Next Question"}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
