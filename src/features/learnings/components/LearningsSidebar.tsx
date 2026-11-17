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
      <div className="rounded-2xl border border-red-900/30 bg-[#0e0204]/80 backdrop-blur-xl p-3 sm:p-4 shadow-[0_0_30px_rgba(227,38,54,0.15)] flex flex-row md:flex-col gap-2">
        {/* Section 1: Learnings Button */}
        <button
          type="button"
          onClick={() => handleSelect("learnings")}
          className={`relative group flex-1 md:flex-initial flex items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
            activeSection === "learnings"
              ? "bg-gradient-to-r from-red-950/70 to-red-900/50 text-red-100 border border-red-600/50 shadow-[0_0_24px_rgba(227,38,54,0.3)]"
              : "bg-black/30 text-red-300/70 hover:bg-red-950/40 hover:text-red-200 border border-red-900/20 hover:border-red-700/30"
          }`}
          aria-current={activeSection === "learnings" ? "page" : undefined}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                activeSection === "learnings"
                  ? "bg-red-600/30 text-red-200"
                  : "bg-red-950/40 text-red-400 group-hover:text-red-300"
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm tracking-wide">
                Learnings
              </div>
              <div className="text-[11px] text-red-300/60 hidden sm:block">
                Codex Discoveries
              </div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800/30">
            {earnedLearningsCount}/{totalLearningsCount}
          </span>
        </button>

        {/* Section 2: Quizzes Button */}
        <button
          type="button"
          onClick={() => handleSelect("quizzes")}
          className={`relative group flex-1 md:flex-initial flex items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
            activeSection === "quizzes"
              ? "bg-gradient-to-r from-amber-950/70 to-amber-900/50 text-amber-100 border border-amber-600/50 shadow-[0_0_24px_rgba(251,191,36,0.3)]"
              : "bg-black/30 text-amber-300/70 hover:bg-amber-950/40 hover:text-amber-200 border border-amber-900/20 hover:border-amber-700/30"
          }`}
          aria-current={activeSection === "quizzes" ? "page" : undefined}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                activeSection === "quizzes"
                  ? "bg-amber-600/30 text-amber-200"
                  : "bg-amber-950/40 text-amber-400 group-hover:text-amber-300"
              }`}
            >
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm tracking-wide">Quizzes</div>
              <div className="text-[11px] text-amber-300/60 hidden sm:block">
                Knowledge Trials
              </div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/30">
            {unlockedQuizzesCount}/{totalQuizzesCount}
          </span>
        </button>
      </div>
    </aside>
  );
}

export default LearningsSidebar;
