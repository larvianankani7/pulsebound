import { motion } from "motion/react";
import { BookOpen, Award } from "lucide-react";
import { type LearningsSection } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface LearningsSidebarProps {
  activeSection: LearningsSection;
  onSelectSection: (section: LearningsSection) => void;
  earnedLearningsCount: number;
  totalLearningsCount: number;
  unlockedQuizzesCount: number;
  totalQuizzesCount: number;
}

export function LearningsSidebar({
  activeSection,
  onSelectSection,
  earnedLearningsCount,
  totalLearningsCount,
  unlockedQuizzesCount,
  totalQuizzesCount,
}: LearningsSidebarProps) {
  const handleSelect = (section: LearningsSection) => {
    playMenuClickSound();
    onSelectSection(section);
  };

  return (
    <aside
      aria-label="Learnings Navigation"
      className="w-full md:w-64 flex-shrink-0"
    >
      <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-3 sm:p-4 shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-row md:flex-col gap-2">
        {/* Section 1: Learnings Button */}
        <button
          type="button"
          onClick={() => handleSelect("learnings")}
          className={`relative group flex-1 md:flex-initial flex items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
            activeSection === "learnings"
              ? "bg-gradient-to-r from-purple-900/60 to-purple-800/40 text-purple-100 border border-purple-500/50 shadow-[0_0_24px_rgba(168,85,247,0.3)]"
              : "bg-black/30 text-purple-300/70 hover:bg-purple-950/40 hover:text-purple-200 border border-purple-500/10 hover:border-purple-500/25"
          }`}
          aria-current={activeSection === "learnings" ? "page" : undefined}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                activeSection === "learnings"
                  ? "bg-purple-500/30 text-purple-200"
                  : "bg-purple-950/40 text-purple-400 group-hover:text-purple-300"
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm tracking-wide">
                Learnings
              </div>
              <div className="text-[11px] text-purple-300/60 hidden sm:block">
                Explore Discoveries
              </div>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-purple-900/40 text-purple-300 border border-purple-500/20">
            {earnedLearningsCount}/{totalLearningsCount}
          </span>
          {activeSection === "learnings" && (
            <motion.div
              layoutId="sidebar-active-indicator"
              className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 rounded-r"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </button>

        {/* Section 2: Quizzes Button */}
        <button
          type="button"
          onClick={() => handleSelect("quizzes")}
          className={`relative group flex-1 md:flex-initial flex items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
            activeSection === "quizzes"
              ? "bg-gradient-to-r from-purple-900/60 to-purple-800/40 text-purple-100 border border-purple-500/50 shadow-[0_0_24px_rgba(168,85,247,0.3)]"
              : "bg-black/30 text-purple-300/70 hover:bg-purple-950/40 hover:text-purple-200 border border-purple-500/10 hover:border-purple-500/25"
          }`}
          aria-current={activeSection === "quizzes" ? "page" : undefined}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                activeSection === "quizzes"
                  ? "bg-purple-500/30 text-purple-200"
                  : "bg-purple-950/40 text-purple-400 group-hover:text-purple-300"
              }`}
            >
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm tracking-wide">Quizzes</div>
              <div className="text-[11px] text-purple-300/60 hidden sm:block">
                Badge Challenges
              </div>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-purple-900/40 text-purple-300 border border-purple-500/20">
            {unlockedQuizzesCount}/{totalQuizzesCount}
          </span>
          {activeSection === "quizzes" && (
            <motion.div
              layoutId="sidebar-active-indicator"
              className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 rounded-r"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      </div>
    </aside>
  );
}
