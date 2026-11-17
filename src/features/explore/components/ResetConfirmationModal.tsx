import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { AlertTriangle, RotateCcw, X } from "lucide-react";

export interface ResetConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ResetConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: ResetConfirmationModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-modal-title"
          data-testid="reset-confirmation-modal"
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.94, y: 16 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.94,
              y: shouldReduceMotion ? 0 : 16,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-rose-500/40 bg-gradient-to-b from-[#240a16]/98 via-[#16060f]/98 to-[#0b0307]/98 p-6 sm:p-7 text-[#fde8e8] shadow-[0_0_60px_rgba(244,63,94,0.3)] flex flex-col"
          >
            {/* Soft Ambient Warning Glow */}
            <div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-rose-600/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-rose-500/20 border border-rose-400/40 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.25)]">
                  <RotateCcw className="w-5 h-5 animate-spin-once" />
                </div>
                <div>
                  <h3
                    id="reset-modal-title"
                    className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-wider text-white"
                  >
                    Reset Explore Progress?
                  </h3>
                  <p className="text-xs text-rose-300/80">
                    Erase garden progress & restart from Level 01
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-full border border-rose-500/20 bg-[#1e0712] text-rose-300 hover:text-white hover:border-rose-400 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Warning Details */}
            <div className="space-y-3.5 text-xs sm:text-sm text-rose-100/90 leading-relaxed font-sans mb-6">
              <div className="p-3.5 rounded-2xl bg-[#1d0611]/80 border border-rose-500/25 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-rose-200 block uppercase tracking-wider font-['Cinzel',serif] text-[11px]">
                    This action will reset:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-rose-200/80">
                    <li>Return to Level 01 (Levels 02–25 locked)</li>
                    <li>Clear all earned Explore badges</li>
                    <li>Reset the Explore learning score to 0</li>
                    <li>Clear active item selections and hints</li>
                    <li>Erase Explore-specific offline saved progress</li>
                  </ul>
                </div>
              </div>

              <p className="text-[11px] text-purple-300/80 italic px-1">
                Note: Your username, audio preferences, and other sections
                (Findings, About, Menu) will remain completely untouched.
              </p>
            </div>

            {/* Action Buttons: Cancel vs Reset Everything */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-rose-500/20">
              <button
                type="button"
                onClick={onClose}
                data-testid="cancel-reset-button"
                className="px-5 py-2.5 rounded-full border border-purple-400/30 bg-[#160829] text-purple-200 hover:text-white hover:border-purple-300 transition-all font-['Cinzel',serif] text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={onConfirm}
                data-testid="confirm-reset-button"
                className="px-5 py-2.5 rounded-full border border-rose-400/60 bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 text-white font-['Cinzel',serif] text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:bg-rose-500 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                Reset Everything
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
