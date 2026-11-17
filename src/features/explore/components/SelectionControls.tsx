import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Lightbulb } from "lucide-react";

export interface SelectionControlsProps {
  selectedCount: number;
  onSubmit: () => void;
  onOpenHint: () => void;
  onOpenHowToPlay: () => void;
}

export function SelectionControls({
  selectedCount,
  onSubmit,
  onOpenHint,
  onOpenHowToPlay,
}: SelectionControlsProps) {
  const isEnabled = selectedCount > 0;

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-between gap-4 mt-6 px-2 select-none">
      {/* Bottom-Left: How To Play Button */}
      <motion.button
        type="button"
        onClick={onOpenHowToPlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-red-900/40 bg-[#160205]/80 text-[#fda4af] hover:text-white hover:border-red-500 hover:bg-[#250308] hover:shadow-[0_0_18px_rgba(227,38,54,0.35)] transition-all text-xs sm:text-sm font-['Cinzel',serif] tracking-wider uppercase font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        aria-label="Open How To Play instructions"
      >
        <HelpCircle className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
        <span>How To Play</span>
      </motion.button>

      {/* Bottom-Right: Hint Button & Enter Submit Button */}
      <div className="flex items-center gap-3">
        {/* Hint Button */}
        <motion.button
          type="button"
          onClick={onOpenHint}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-500/35 bg-[#200d02]/80 text-amber-200 hover:text-white hover:border-amber-400 hover:bg-[#321503] hover:shadow-[0_0_18px_rgba(251,191,36,0.3)] transition-all text-xs sm:text-sm font-['Cinzel',serif] tracking-wider uppercase font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Reveal a clue for this level"
        >
          <Lightbulb className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Hint</span>
        </motion.button>

        {/* Enter Submit Button */}
        <motion.button
          type="button"
          disabled={!isEnabled}
          onClick={onSubmit}
          whileHover={isEnabled ? { scale: 1.05 } : {}}
          whileTap={isEnabled ? { scale: 0.95 } : {}}
          data-testid="enter-submit-button"
          className={`flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-['Cinzel',serif] tracking-widest uppercase font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
            isEnabled
              ? "border border-red-400 bg-gradient-to-r from-red-800 via-rose-600 to-red-600 text-white shadow-[0_0_28px_rgba(227,38,54,0.7)] cursor-pointer"
              : "border border-red-950/40 bg-[#120103]/40 text-red-500/40 opacity-50 cursor-not-allowed shadow-none"
          }`}
          aria-label={
            isEnabled
              ? `Submit ${selectedCount} selected garden items`
              : "Submit disabled. Select at least one item first."
          }
        >
          <span>ENTER</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

export default SelectionControls;
