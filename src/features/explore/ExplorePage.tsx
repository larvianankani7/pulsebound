import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { ExploreNavbar } from "./components/ExploreNavbar";
import { LevelObjective } from "./components/LevelObjective";
import { GardenEnvironment } from "./components/GardenEnvironment";
import { GardenRadialLayout } from "./components/GardenRadialLayout";
import { SelectionControls } from "./components/SelectionControls";
import { HintModal } from "./components/HintModal";
import { HowToPlayModal } from "./components/HowToPlayModal";
import { IncorrectAnswer } from "./components/IncorrectAnswer";
import { LearningCard } from "./components/LearningCard";
import { BadgeUnlock } from "./components/BadgeUnlock";
import { DifficultyTransition } from "./components/DifficultyTransition";
import { FinalCompletion } from "./components/FinalCompletion";
import { ResetConfirmationModal } from "./components/ResetConfirmationModal";
import { useExploreStore } from "./store/useExploreStore";
import { EXPLORE_LEVELS } from "./data/levels";
import { LEARNING_CONTENTS } from "./data/learningContent";
import { EXPLORE_BADGES } from "./data/badges";

export function ExplorePage() {
  const {
    currentLevel,
    selectedItemIds,
    stage,
    isHintOpen,
    isHowToPlayOpen,
    isResetModalOpen,
    resetToastMessage,
    earnedBadgeIds,
    learningScore,
    init,
    toggleItemSelection,
    submitSelection,
    dismissIncorrect,
    completeLearningCard,
    advanceAfterBadge,
    dismissDifficultyTransition,
    goToLevel,
    toggleHint,
    toggleHowToPlay,
    closeResetModal,
    resetProgress,
    dismissResetToast,
  } = useExploreStore();

  useEffect(() => {
    void init();
  }, [init]);

  // Auto-dismiss reset success toast
  useEffect(() => {
    if (!resetToastMessage) return;
    const timer = setTimeout(() => {
      dismissResetToast();
    }, 3200);
    return () => clearTimeout(timer);
  }, [resetToastMessage, dismissResetToast]);

  // Derive current level data
  const currentLevelData =
    EXPLORE_LEVELS.find((l) => l.levelNumber === currentLevel) ??
    EXPLORE_LEVELS[0];

  const currentLearning =
    LEARNING_CONTENTS[currentLevelData.learningContentId] ??
    LEARNING_CONTENTS["learn_1"];

  const currentBadge =
    EXPLORE_BADGES[currentLevelData.badgeId] ?? EXPLORE_BADGES["badge_1"];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f3eeee] select-none">
      {/* 1. Atmospheric Video Background */}
      <BackgroundMedia videoSrc="/videos/pulsebound-bg.mp4" startTime={0} />

      {/* 2. Atmospheric Music Controller */}
      <MusicControl audioSrc="/audio/pulsebound-theme.mp3" />

      {/* 3. Garden Specific 2D Atmosphere & Particles */}
      <GardenEnvironment />

      {/* 4. Dedicated Explore Navbar */}
      <ExploreNavbar />

      {/* 5. Main Game Canvas */}
      <main className="relative z-10 mx-auto min-h-[calc(100vh-64px)] w-full max-w-5xl px-4 py-6 sm:px-8 flex flex-col justify-between">
        <div className="w-full">
          {/* Level Objective */}
          <LevelObjective level={currentLevelData} />

          {/* Central Radial / Circular Garden Layout */}
          <GardenRadialLayout
            level={currentLevelData}
            selectedItemIds={selectedItemIds}
            onToggleItem={toggleItemSelection}
          />

          {/* Interactive Selection Controls (Enter, Hint, How to Play) */}
          <SelectionControls
            selectedCount={selectedItemIds.length}
            onSubmit={submitSelection}
            onOpenHint={() => toggleHint(true)}
            onOpenHowToPlay={() => toggleHowToPlay(true)}
          />
        </div>

        {/* Footer subtle brand tag */}
        <footer className="mt-8 text-center text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
          PULSEBOUND Sector Trials • Level {currentLevelData.levelNumber} of 25
          • Bio-Kinetic Health Challenge
        </footer>
      </main>

      {/* 6. Modals & Overlays */}
      <HintModal
        isOpen={isHintOpen}
        hint={currentLevelData.hint}
        levelNumber={currentLevel}
        conditionName={currentLevelData.conditionName}
        onClose={() => toggleHint(false)}
      />

      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => toggleHowToPlay(false)}
      />

      <IncorrectAnswer
        isOpen={stage === "incorrect"}
        onDismiss={dismissIncorrect}
      />

      {/* Mandatory Step: Learning card appears BEFORE badge award */}
      {stage === "learningCard" && (
        <LearningCard
          content={currentLearning}
          conditionId={currentLevelData.conditionId}
          levelNumber={currentLevel}
          onContinue={completeLearningCard}
        />
      )}

      {/* Badge Award Screen */}
      {stage === "badgeUnlock" && (
        <BadgeUnlock badge={currentBadge} onContinue={advanceAfterBadge} />
      )}

      {/* Difficulty Tier Transition Screen */}
      {stage === "difficultyTransition" && (
        <DifficultyTransition
          currentCompletedLevel={currentLevel}
          onContinue={dismissDifficultyTransition}
        />
      )}

      {/* Final 25-Level Completion Screen */}
      {stage === "completedAll" && (
        <FinalCompletion
          totalBadges={earnedBadgeIds.length}
          learningScore={learningScore}
          onReplayLevel={(lvl) => goToLevel(lvl)}
        />
      )}

      {/* 7. Reset Explore Confirmation Dialog */}
      <ResetConfirmationModal
        isOpen={isResetModalOpen}
        onClose={closeResetModal}
        onConfirm={async () => {
          await resetProgress();
        }}
      />

      {/* 8. Subtle Reset Confirmation Toast Notification */}
      <AnimatePresence>
        {resetToastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            data-testid="reset-toast-notification"
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-purple-400/40 bg-gradient-to-r from-[#210c3f]/95 via-[#15072a]/98 to-[#0a0315]/95 text-[#f3e8ff] shadow-[0_0_35px_rgba(168,85,247,0.35)] backdrop-blur-xl text-xs sm:text-sm font-['Cinzel',serif] tracking-wider pointer-events-none"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{resetToastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExplorePage;
