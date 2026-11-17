import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Award } from "lucide-react";
import { ConditionIllustration } from "../../explore/components/illustrations/ConditionIllustrations";
import { BadgeIllustration } from "../../explore/components/illustrations/BadgeIllustrations";
import {
  type LearningContent,
  type ExploreLevel,
  type BadgeInfo,
} from "../../explore/types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface LearningCardItemProps {
  learning: LearningContent;
  level: ExploreLevel;
  badge: BadgeInfo;
  onOpen: () => void;
}

export function LearningCardItem({
  learning,
  level,
  badge,
  onOpen,
}: LearningCardItemProps) {
  const handleClick = () => {
    playMenuClickSound();
    onOpen();
  };

  const previewDescription =
    learning.whatIsIt[0] ?? "Evidence-based health learning module.";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col justify-between w-full text-left rounded-2xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-colors duration-300"
      aria-label={`View details for ${level.conditionName}`}
    >
      {/* Top Banner: Level indicator & Earned status badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono tracking-wider text-purple-300/80 uppercase px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20">
            Explore Level {String(level.levelNumber).padStart(2, "0")}
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Earned</span>
          </span>
        </div>

        {/* Illustration & Condition Title */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-14 h-14 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-400/40 transition-colors">
            <ConditionIllustration
              id={level.conditionId}
              size={48}
              className="drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
            />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-purple-100 group-hover:text-white transition-colors leading-snug">
              {level.conditionName}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-purple-300/70">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>{badge.name}</span>
            </div>
          </div>
        </div>

        {/* Short Introductory Description */}
        <p className="text-xs text-purple-300/70 leading-relaxed line-clamp-2 mb-4">
          {previewDescription}
        </p>
      </div>

      {/* Footer: Badge Thumbnail & CTA */}
      <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center overflow-hidden">
            <BadgeIllustration id={badge.iconId} size={24} />
          </div>
          <span className="text-[11px] font-medium text-purple-300/80">
            {badge.name}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-medium text-purple-300 group-hover:text-purple-200 transition-colors">
          <span>Read Lesson</span>
          <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.button>
  );
}
