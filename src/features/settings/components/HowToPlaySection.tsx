import { motion } from "motion/react";
import {
  Sparkles,
  Compass,
  BookOpen,
  Award,
  Trophy,
  MousePointer,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import {
  HOW_TO_PLAY_GUIDE,
  type HowToPlaySectionData,
} from "../../explore/data/howToPlayData";

export function HowToPlaySection() {
  const getSectionIcon = (iconName: HowToPlaySectionData["iconName"]) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "compass":
        return <Compass className="w-5 h-5 text-purple-300" />;
      case "book":
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case "award":
        return <Award className="w-5 h-5 text-amber-400" />;
      case "trophy":
        return <Trophy className="w-5 h-5 text-fuchsia-400" />;
      case "mouse":
      default:
        return <MousePointer className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-6" data-testid="settings-how-to-play-section">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl border border-purple-500/25 bg-gradient-to-r from-purple-950/60 via-[#120726]/80 to-[#0e0819]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.12)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-200">
            <HelpCircle className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Comprehensive Gameplay Guide
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/80">
              Official instructions for Explore, Learnings, Quizzes, and
              Controls
            </p>
          </div>
        </div>
      </div>

      {/* Synchronized Sections */}
      <div className="space-y-5">
        {HOW_TO_PLAY_GUIDE.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.08)]"
          >
            <div className="flex items-center gap-3 mb-3 border-b border-purple-500/15 pb-3">
              <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/25">
                {getSectionIcon(section.iconName)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-purple-100">
                  {section.title}
                </h3>
                <p className="text-xs text-purple-300/70">{section.subtitle}</p>
              </div>
            </div>

            {/* Paragraphs */}
            {section.paragraphs && (
              <div className="space-y-2 text-xs sm:text-sm text-purple-200/85 leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            )}

            {/* Steps (Explore Gameplay) */}
            {section.steps && (
              <div className="space-y-2.5 mt-2">
                {section.steps.map((st) => (
                  <div
                    key={st.number}
                    className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/30 border border-purple-500/15"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-900/60 border border-purple-400/40 font-mono text-xs font-bold text-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {st.number}
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-white block sm:inline mr-1">
                        {st.title}:
                      </strong>
                      <span className="text-purple-200/80 leading-relaxed">
                        {st.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bullet Points */}
            {section.bulletPoints && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {section.bulletPoints.map((bp, bpIdx) => (
                  <div
                    key={bpIdx}
                    className="p-3 rounded-xl bg-purple-950/25 border border-purple-500/15 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-200 mr-1">
                        {bp.label}
                      </strong>
                      <span className="text-purple-300/80 leading-relaxed">
                        {bp.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
