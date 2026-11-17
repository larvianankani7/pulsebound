import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, X } from "lucide-react";
import { type LevelHint } from "../types";

export interface HintModalProps {
  isOpen: boolean;
  hint: LevelHint;
  levelNumber: number;
  conditionName: string;
  onClose: () => void;
}

export function HintModal({
  isOpen,
  hint,
  levelNumber,
  conditionName,
  onClose,
}: HintModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[88vh] overflow-y-auto rounded-3xl border border-amber-400/40 bg-gradient-to-b from-[#241306]/95 via-[#160c04]/98 to-[#0b0502]/98 p-6 sm:p-7 text-[#fef3c7] shadow-[0_0_50px_rgba(251,191,36,0.25)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
                  <Lightbulb className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold block">
                    LEVEL {levelNumber < 10 ? `0${levelNumber}` : levelNumber}{" "}
                    HINT
                  </span>
                  <h3 className="font-['Cinzel',serif] text-base font-bold text-white tracking-wide">
                    {conditionName}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Hint"
                className="p-1.5 rounded-full border border-amber-500/20 bg-[#1e1005] text-amber-300 hover:text-white hover:border-amber-400 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Hint Body */}
            <div className="space-y-4">
              {/* Item Count Requirement Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-amber-400/30 bg-[#341b0b]/80 text-amber-200 text-xs font-semibold">
                <span>Required Items to Select:</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/30 font-mono text-white font-bold">
                  {hint.count} {hint.count === 1 ? "Choice" : "Choices"}
                </span>
              </div>

              {/* Clue message */}
              <p className="text-sm text-amber-100/90 leading-relaxed font-sans bg-[#200f04]/60 p-4 rounded-2xl border border-amber-500/15">
                "{hint.clue}"
              </p>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-black font-['Cinzel',serif] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all cursor-pointer"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
