import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Home,
  RotateCcw,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useExploreStore } from "../store/useExploreStore";
import { EXPLORE_BADGES } from "../data/badges";
import { BadgeIllustration } from "./illustrations/BadgeIllustrations";
import { TOTAL_LEVELS } from "../constants";

export function ExploreNavbar() {
  const {
    username,
    currentLevel,
    earnedBadgeIds,
    learningScore,
    isBadgePopoverOpen,
    toggleBadgePopover,
    openResetModal,
  } = useExploreStore();

  const formattedLevel =
    currentLevel < 10 ? `0${currentLevel}` : `${currentLevel}`;
  const totalLevelsFormatted =
    TOTAL_LEVELS < 10 ? `0${TOTAL_LEVELS}` : `${TOTAL_LEVELS}`;
  const badgesCount =
    earnedBadgeIds.length < 10
      ? `0${earnedBadgeIds.length}`
      : `${earnedBadgeIds.length}`;
  const learningsCount =
    learningScore < 10 ? `0${learningScore}` : `${learningScore}`;

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3 bg-[#0a0515]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(147,51,234,0.12)] transition-all select-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          {/* Left: Home Navigation & User Profile */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-400/25 bg-[#140827]/70 text-[#d8b4fe] hover:text-white hover:border-[#c084fc] hover:bg-[#200e3e] hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] transition-all text-xs font-['Cinzel',serif] tracking-wider uppercase font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
              aria-label="Return to Main Menu"
            >
              <Home className="w-3.5 h-3.5 text-[#c084fc] group-hover:scale-110 transition-transform" />
              <span className="hidden xs:inline">Menu</span>
            </Link>

            {/* Element A: User Profile */}
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/20 bg-[#120724]/75 text-purple-200 shadow-sm"
              title={`Logged in as ${username}`}
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-700 to-fuchsia-500 flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#f3e8ff] max-w-[110px] sm:max-w-[150px] truncate">
                {username}
              </span>
            </div>
          </div>

          {/* Right: Real-time Game Status Indicators */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
            {/* Element B: Current Level */}
            <div
              data-testid="status-current-level"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c084fc]/30 bg-gradient-to-r from-[#1e0e38]/80 to-[#140827]/80 text-[#e9d5ff] text-xs sm:text-sm font-['Cinzel',serif] font-bold tracking-wider shadow-[0_0_12px_rgba(192,132,252,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
              <span className="text-[#c084fc]">LEVEL</span>
              <span className="text-white font-mono">{formattedLevel}</span>
              <span className="text-purple-400/60 font-mono text-[11px]">
                / {totalLevelsFormatted}
              </span>
            </div>

            {/* Element C: Badges Earned (Clickable popover trigger) */}
            <button
              type="button"
              onClick={() => toggleBadgePopover()}
              aria-label={`Earned ${earnedBadgeIds.length} badges. Click to view badge collection.`}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-[#211409]/75 text-amber-200 hover:border-amber-300 hover:bg-[#321e0d] hover:shadow-[0_0_16px_rgba(251,191,36,0.25)] transition-all cursor-pointer text-xs sm:text-sm font-['Cinzel',serif] font-bold tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Award className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-amber-300/90">BADGES</span>
              <span className="text-white font-mono">{badgesCount}</span>
            </button>

            {/* Element D: Learnings Earned (Score only, no arbitrary %) */}
            <div
              data-testid="status-learnings-score"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/25 bg-[#0a1e16]/75 text-emerald-200 text-xs sm:text-sm font-['Cinzel',serif] font-bold tracking-wider shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300/90">LEARNINGS</span>
              <span className="text-white font-mono">{learningsCount}</span>
            </div>

            {/* Element E: Complete Reset Explore Button */}
            <button
              type="button"
              onClick={() => openResetModal()}
              data-testid="reset-explore-button"
              aria-label="Reset Explore Progress"
              title="Reset Explore Progress"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-500/30 bg-[#220915]/75 text-rose-300 hover:text-white hover:border-rose-400 hover:bg-[#350e20] hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all cursor-pointer text-xs sm:text-sm font-['Cinzel',serif] font-bold tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-400 group-hover:-rotate-90 transition-transform duration-300" />
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                Reset
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Badges Collection Popover Modal */}
      <AnimatePresence>
        {isBadgePopoverOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => toggleBadgePopover(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#180a2e]/95 via-[#0e051d]/98 to-[#07020f]/98 p-6 sm:p-8 text-[#f3e8ff] shadow-[0_0_60px_rgba(168,85,247,0.25)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-400/30">
                    <Award className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="font-['Cinzel',serif] text-xl font-bold tracking-wider text-white">
                      Your Garden Badges
                    </h3>
                    <p className="text-xs text-purple-300/80">
                      Earned {earnedBadgeIds.length} of {TOTAL_LEVELS} unique
                      educational emblems
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleBadgePopover(false)}
                  aria-label="Close Badges"
                  className="p-2 rounded-full border border-purple-400/20 bg-[#16092b] text-purple-300 hover:text-white hover:border-purple-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid of 25 Badges */}
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                {Object.values(EXPLORE_BADGES).map((badge) => {
                  const isEarned = earnedBadgeIds.includes(badge.id);

                  return (
                    <div
                      key={badge.id}
                      className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all ${
                        isEarned
                          ? "border-amber-400/40 bg-gradient-to-b from-[#2a1708]/70 to-[#160b03]/85 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                          : "border-purple-500/10 bg-[#0d0519]/50 opacity-40 grayscale"
                      }`}
                    >
                      <div className="relative mb-2">
                        <BadgeIllustration id={badge.iconId} size={48} />
                      </div>
                      <span className="text-[10px] font-mono text-purple-400/80 mb-0.5">
                        LVL{" "}
                        {badge.levelNumber < 10
                          ? `0${badge.levelNumber}`
                          : badge.levelNumber}
                      </span>
                      <h4 className="font-['Cinzel',serif] text-xs font-bold text-white tracking-wide leading-tight">
                        {badge.name}
                      </h4>
                      <p className="text-[10px] text-purple-300/70 mt-1 line-clamp-2">
                        {badge.conditionName}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
