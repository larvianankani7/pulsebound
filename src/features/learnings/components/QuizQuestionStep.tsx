import { motion } from "motion/react";
import { Check } from "lucide-react";
import { type QuizQuestion } from "../types";
import { playExploreSelectSound } from "../../explore/utils/exploreAudio";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface QuizQuestionStepProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  onSubmit: () => void;
  onExit: () => void;
}

export function QuizQuestionStep({
  question,
  questionIndex,
  totalQuestions,
  selectedOptionIndex,
  onSelectOption,
  onSubmit,
  onExit,
}: QuizQuestionStepProps) {
  const currentStep = questionIndex + 1;
  const progressPercent = Math.round((currentStep / totalQuestions) * 100);

  const handleSelect = (idx: number) => {
    playExploreSelectSound();
    onSelectOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null) return;
    playMenuClickSound();
    onSubmit();
  };

  return (
    <div className="flex flex-col p-6 sm:p-8">
      {/* Step Header & Progress */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
          QUESTION {currentStep} / {totalQuestions}
        </span>
        <button
          type="button"
          onClick={onExit}
          className="text-xs text-purple-400/80 hover:text-purple-200 transition-colors"
          aria-label="Exit Quiz"
        >
          Exit
        </button>
      </div>

      <div className="w-full bg-purple-950/80 rounded-full h-1.5 mb-6 overflow-hidden border border-purple-500/20">
        <div
          className="bg-gradient-to-r from-purple-500 to-fuchsia-400 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Text */}
      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-6 leading-snug">
        {question.question}
      </h3>

      {/* Options List */}
      <div className="space-y-3 mb-8">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const letter = String.fromCharCode(65 + idx); // A, B, C, D

          return (
            <motion.button
              key={idx}
              type="button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-3 transition-all duration-200 ${
                isSelected
                  ? "bg-gradient-to-r from-purple-900/80 to-purple-800/60 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                  : "bg-purple-950/30 hover:bg-purple-900/30 border-purple-500/20 text-purple-200/90"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected
                      ? "bg-purple-400 text-purple-950"
                      : "bg-purple-900/40 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {letter}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed">
                  {optionText}
                </span>
              </div>

              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected
                    ? "border-purple-300 bg-purple-400 text-purple-950"
                    : "border-purple-500/30 bg-black/40"
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="button"
          disabled={selectedOptionIndex === null}
          onClick={handleSubmit}
          className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg ${
            selectedOptionIndex !== null
              ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
              : "bg-purple-950/40 text-purple-400/40 border border-purple-900/30 cursor-not-allowed"
          }`}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}
