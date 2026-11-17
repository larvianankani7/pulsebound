import { useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { AlertCircle, RotateCcw } from "lucide-react";

export interface IncorrectAnswerProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export function IncorrectAnswer({ isOpen, onDismiss }: IncorrectAnswerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Auto-dismiss after 2.2 seconds if user doesn't click
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 2200);

    return () => clearTimeout(timer);
  }, [isOpen, onDismiss]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm select-none"
          onClick={onDismiss}
        >
          {/* Shake card */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { scale: 0.95, opacity: 0 }
                : { scale: 0.9, opacity: 0, x: 0 }
            }
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 1 }
                : {
                    scale: 1,
                    opacity: 1,
                    x: [-12, 12, -8, 8, -4, 4, 0],
                  }
            }
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl border-2 border-rose-500/50 bg-gradient-to-b from-[#2e0915]/95 via-[#1a050d]/98 to-[#0d0206]/98 text-center text-rose-100 shadow-[0_0_60px_rgba(244,63,94,0.4)] max-w-sm w-full mx-4 max-h-[88vh] overflow-y-auto"
          >
            {/* Red Pulsing Aura */}
            <div
              className="absolute inset-0 rounded-3xl bg-rose-500/10 blur-xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center mb-4 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <AlertCircle className="w-8 h-8 text-rose-400 animate-pulse" />
            </div>

            {/* Headline */}
            <h3
              data-testid="incorrect-answer-text"
              className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] mb-2"
            >
              GOTTA TRY AGAIN!
            </h3>

            {/* Helpful reassurance */}
            <p className="text-xs sm:text-sm text-rose-200/80 mb-6 font-sans">
              Not quite the right combination. Hover items or press{" "}
              <em>Hint</em> to check which choices truly support this condition.
            </p>

            {/* Action */}
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-400/50 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-['Cinzel',serif] text-xs font-bold uppercase tracking-wider hover:bg-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Selection</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
