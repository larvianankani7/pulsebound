import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  BookOpen,
  CheckCircle,
  HelpCircle,
  MousePointer,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { HOW_TO_PLAY_GUIDE } from "../data/howToPlayData";

export interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  const exploreSection = HOW_TO_PLAY_GUIDE.find(
    (s) => s.id === "explore-gameplay"
  );
  const whatIsSection = HOW_TO_PLAY_GUIDE.find(
    (s) => s.id === "what-is-pulsebound"
  );
  const controlsSection = HOW_TO_PLAY_GUIDE.find(
    (s) => s.id === "controls-navigation"
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-red-900/40 bg-gradient-to-b from-[#180306]/98 via-[#0e0204]/98 to-[#050102]/98 p-6 sm:p-8 text-[#f3eeee] shadow-[0_0_60px_rgba(227,38,54,0.3)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-red-900/30 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-red-950/60 border border-red-600/40 text-red-300">
                  <HelpCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-['Cinzel',serif] text-xl font-bold tracking-wider text-white">
                    How To Play Explore
                  </h3>
                  <p className="text-xs text-neutral-300">
                    A tactical bio-kinetic journey of health awareness &
                    movement mastery
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Guide"
                className="p-2 rounded-full border border-red-900/40 bg-[#160205] text-neutral-300 hover:text-white hover:border-red-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
              {/* 1. What is Explore & Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#140205]/75 border border-red-900/35">
                  <div className="flex items-center gap-2 text-red-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-1.5">
                    <Sparkles className="w-4 h-4 text-red-400" />
                    <span>What is Explore?</span>
                  </div>
                  <p className="text-neutral-300 text-xs">
                    {whatIsSection?.paragraphs?.[0] ??
                      "An interactive, 25-level bio-kinetic challenge where you master cardiovascular zones, musculoskeletal adaptation, recovery, and responsible health choices."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#140205]/75 border border-red-900/35">
                  <div className="flex items-center gap-2 text-red-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-1.5">
                    <Target className="w-4 h-4 text-red-400" />
                    <span>Your Objective</span>
                  </div>
                  <p className="text-neutral-300 text-xs">
                    Tackle each bio-kinetic trial by identifying the appropriate
                    scientifically supported exercises, recovery protocols,
                    hydration, or medical guidance.
                  </p>
                </div>
              </div>

              {/* 2. Step by Step Guide from Shared Data */}
              <div>
                <h4 className="font-['Cinzel',serif] text-sm font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  <span>Step-by-Step Flow</span>
                </h4>
                <ol className="space-y-2 text-xs text-neutral-300 pl-1">
                  {(exploreSection?.steps ?? []).map((step) => (
                    <li key={step.number} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-950/80 border border-red-700/50 text-[10px] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 text-red-300">
                        {step.number}
                      </span>
                      <span>
                        <strong>{step.title}:</strong> {step.description}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 3. What Will You Earn & Learn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#140205]/75 border border-red-900/35 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>What You'll Earn</span>
                  </div>
                  <ul className="list-disc list-inside text-neutral-300 space-y-0.5 text-[11px]">
                    <li>Sequential level progression (1 to 25)</li>
                    <li>25 unique handcrafted operative badges</li>
                    <li>Learnings score increments & XP</li>
                    <li>Durable offline progress in IndexedDB</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#140205]/75 border border-red-900/35 text-xs">
                  <div className="flex items-center gap-1.5 text-red-400 font-bold mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>What You'll Learn</span>
                  </div>
                  <ul className="list-disc list-inside text-neutral-300 space-y-0.5 text-[11px]">
                    <li>Human physiology & energy systems</li>
                    <li>Zone 2 cardio vs VO2 Max adaptation</li>
                    <li>Tendon loading & injury prevention</li>
                    <li>Recognizing when physician care is essential</li>
                  </ul>
                </div>
              </div>

              {/* 4. Controls */}
              <div className="p-3.5 rounded-2xl bg-[#120204] border border-red-900/35 text-xs">
                <div className="flex items-center gap-1.5 text-red-400 font-bold mb-1.5">
                  <MousePointer className="w-3.5 h-3.5" />
                  <span>Controls & Accessibility</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                  {(controlsSection?.bulletPoints ?? []).map((bp, i) => (
                    <div key={i}>
                      <strong>{bp.label}</strong> {bp.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-red-900/30">
              <button
                type="button"
                onClick={onClose}
                aria-label="Enter the Garden"
                className="w-full py-2.5 rounded-full border border-red-500 bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white font-['Cinzel',serif] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_25px_rgba(227,38,54,0.5)] transition-all cursor-pointer"
              >
                Enter the Sector Hub
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
