import { motion, useReducedMotion } from "motion/react";
import { Compass, Sparkles } from "lucide-react";
import { type ExploreLevel } from "../types";
import { DIFFICULTY_TIERS } from "../constants";

export interface LevelObjectiveProps {
  level: ExploreLevel;
}

export function LevelObjective({ level }: LevelObjectiveProps) {
  const shouldReduceMotion = useReducedMotion();
  const tierInfo = DIFFICULTY_TIERS[level.difficultyTier];

  // Highlight key phrase occurrences in crimson/rose
  const renderHighlightedScenario = () => {
    const content = level.scenarioText;
    const regexPattern = new RegExp(
      `(${level.highlightWords.join("|")})`,
      "gi"
    );
    const parts = content.split(regexPattern);

    return parts.map((part, index) => {
      const isMatch = level.highlightWords.some(
        (hw) => hw.toLowerCase() === part.toLowerCase()
      );

      if (isMatch) {
        return (
          <span
            key={index}
            className="text-[#fda4af] font-semibold underline decoration-red-500/60 underline-offset-4 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.section
      key={`objective-${level.id}`}
      aria-label={`Objective for Level ${level.levelNumber}: ${level.conditionName}`}
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-4xl mx-auto rounded-3xl border border-red-900/40 bg-gradient-to-r from-[#180205]/90 via-[#0e0103]/95 to-[#180205]/90 backdrop-blur-xl p-5 sm:p-7 shadow-[0_0_40px_rgba(227,38,54,0.22)] mb-6 select-none overflow-hidden"
    >
      {/* Background glow and subtle shimmer */}
      <div
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-red-700/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-crimson-800/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Tier & Level Badge */}
        <div className="flex items-center gap-2 mb-2 flex-wrap justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-700/40 bg-[#250308]/85 text-[#fecdd3] text-[11px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-red-400" />
            <span>
              LEVEL{" "}
              {level.levelNumber < 10
                ? `0${level.levelNumber}`
                : level.levelNumber}{" "}
              OBJECTIVE
            </span>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-red-900/40 bg-red-950/50 text-[10px] font-mono uppercase tracking-wider text-red-300/80">
            <Sparkles className="w-2.5 h-2.5 text-red-400" />
            {tierInfo.name} Tier
          </span>
        </div>

        {/* Condition Name Header with glowing crimson gradient */}
        <h1
          data-testid="objective-condition-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-center leading-tight bg-gradient-to-r from-[#ffe4e6] via-[#fda4af] to-[#ff4d6d] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(227,38,54,0.5)] mb-3"
        >
          {level.conditionName}
        </h1>

        {/* Conversational Scenario with Rose Highlights */}
        <p className="text-sm sm:text-base text-red-100/90 font-sans leading-relaxed max-w-2xl text-center">
          &ldquo;{renderHighlightedScenario()}&rdquo;
        </p>
      </div>
    </motion.section>
  );
}

export default LevelObjective;
