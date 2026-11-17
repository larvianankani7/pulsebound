import { create } from "zustand";
import { type ExploreStage } from "../types";
import { EXPLORE_LEVELS } from "../data/levels";
import { DIFFICULTY_TRANSITION_LEVELS, TOTAL_LEVELS } from "../constants";
import {
  clearExplorePersistedData,
  getSavedUsername,
  loadExploreProgress,
  saveExploreProgress,
} from "./exploreStorage";
import { useLearningsStore } from "../../learnings/store/useLearningsStore";
import {
  playExploreIncorrectSound,
  playExploreSelectSound,
  playExploreSuccessSound,
  playExploreTransitionSound,
} from "../utils/exploreAudio";

export interface ExploreState {
  username: string;
  unlockedLevel: number;
  currentLevel: number;
  completedLevels: number[];
  earnedBadgeIds: string[];
  learningScore: number;
  completedCardIds: string[];

  // Interactive gameplay state
  selectedItemIds: string[];
  stage: ExploreStage;
  isHintOpen: boolean;
  isHowToPlayOpen: boolean;
  isBadgePopoverOpen: boolean;
  isResetModalOpen: boolean;
  resetToastMessage: string | null;
  isInitialized: boolean;

  // Actions
  init: () => Promise<void>;
  toggleItemSelection: (itemId: string) => void;
  clearSelection: () => void;
  submitSelection: () => boolean;
  dismissIncorrect: () => void;
  completeLearningCard: () => void;
  advanceAfterBadge: () => void;
  dismissDifficultyTransition: () => void;
  goToLevel: (levelNumber: number) => void;
  toggleHint: (open?: boolean) => void;
  toggleHowToPlay: (open?: boolean) => void;
  toggleBadgePopover: (open?: boolean) => void;
  openResetModal: () => void;
  closeResetModal: () => void;
  dismissResetToast: () => void;
  resetProgress: () => Promise<void>;
}

export function validateSelection(
  selectedIds: string[],
  correctIds: string[]
): boolean {
  if (selectedIds.length !== correctIds.length) return false;
  const set = new Set(correctIds);
  return selectedIds.every((id) => set.has(id));
}

export const useExploreStore = create<ExploreState>((set, get) => ({
  username: getSavedUsername(),
  unlockedLevel: 1,
  currentLevel: 1,
  completedLevels: [],
  earnedBadgeIds: [],
  learningScore: 0,
  completedCardIds: [],

  selectedItemIds: [],
  stage: "exploring",
  isHintOpen: false,
  isHowToPlayOpen: false,
  isBadgePopoverOpen: false,
  isResetModalOpen: false,
  resetToastMessage: null,
  isInitialized: false,

  init: async () => {
    const data = await loadExploreProgress();
    const user = getSavedUsername();
    set({
      username: user,
      unlockedLevel: data.unlockedLevel,
      currentLevel: data.unlockedLevel, // Start at current highest unlocked level
      completedLevels: data.completedLevels,
      earnedBadgeIds: data.earnedBadgeIds,
      learningScore: data.learningScore,
      completedCardIds: data.completedCardIds,
      isInitialized: true,
      stage:
        data.completedLevels.length >= TOTAL_LEVELS
          ? "completedAll"
          : "exploring",
    });
  },

  toggleItemSelection: (itemId: string) => {
    const { stage, selectedItemIds } = get();
    if (stage !== "exploring") return;

    playExploreSelectSound();

    if (selectedItemIds.includes(itemId)) {
      set({ selectedItemIds: selectedItemIds.filter((id) => id !== itemId) });
    } else {
      set({ selectedItemIds: [...selectedItemIds, itemId] });
    }
  },

  clearSelection: () => set({ selectedItemIds: [] }),

  submitSelection: () => {
    const { currentLevel, selectedItemIds } = get();
    const level = EXPLORE_LEVELS.find((l) => l.levelNumber === currentLevel);
    if (!level || selectedItemIds.length === 0) return false;

    const isCorrect = validateSelection(selectedItemIds, level.correctItemIds);

    if (isCorrect) {
      playExploreSuccessSound();
      set({ stage: "learningCard" });
      return true;
    } else {
      playExploreIncorrectSound();
      set({ stage: "incorrect" });
      return false;
    }
  },

  dismissIncorrect: () => {
    set({ stage: "exploring" });
  },

  completeLearningCard: () => {
    const { currentLevel, completedCardIds, learningScore, completedLevels } =
      get();
    const level = EXPLORE_LEVELS.find((l) => l.levelNumber === currentLevel);
    if (!level) return;

    const cardId = level.learningContentId;
    const isNewLearning =
      !completedCardIds.includes(cardId) &&
      !completedLevels.includes(currentLevel);

    const newCompletedCardIds = isNewLearning
      ? [...completedCardIds, cardId]
      : completedCardIds;
    const newLearningScore = isNewLearning ? learningScore + 1 : learningScore;

    set({
      completedCardIds: newCompletedCardIds,
      learningScore: newLearningScore,
      stage: "badgeUnlock",
    });

    // Save progress updates
    const current = get();
    void saveExploreProgress({
      unlockedLevel: current.unlockedLevel,
      completedLevels: current.completedLevels,
      earnedBadgeIds: current.earnedBadgeIds,
      learningScore: newLearningScore,
      completedCardIds: newCompletedCardIds,
    });
  },

  advanceAfterBadge: () => {
    const {
      currentLevel,
      completedLevels,
      earnedBadgeIds,
      unlockedLevel,
      learningScore,
      completedCardIds,
    } = get();
    const level = EXPLORE_LEVELS.find((l) => l.levelNumber === currentLevel);
    if (!level) return;

    const badgeId = level.badgeId;
    const isNewCompletion = !completedLevels.includes(currentLevel);

    const newCompletedLevels = isNewCompletion
      ? [...completedLevels, currentLevel]
      : completedLevels;
    const newEarnedBadges = earnedBadgeIds.includes(badgeId)
      ? earnedBadgeIds
      : [...earnedBadgeIds, badgeId];

    // Check if entire 25 levels are done
    if (currentLevel >= TOTAL_LEVELS) {
      set({
        completedLevels: newCompletedLevels,
        earnedBadgeIds: newEarnedBadges,
        stage: "completedAll",
        selectedItemIds: [],
      });

      void saveExploreProgress({
        unlockedLevel: TOTAL_LEVELS,
        completedLevels: newCompletedLevels,
        earnedBadgeIds: newEarnedBadges,
        learningScore,
        completedCardIds,
      });
      return;
    }

    const nextLevelNum = currentLevel + 1;
    const newUnlocked = Math.max(unlockedLevel, nextLevelNum);

    // Save state
    void saveExploreProgress({
      unlockedLevel: newUnlocked,
      completedLevels: newCompletedLevels,
      earnedBadgeIds: newEarnedBadges,
      learningScore,
      completedCardIds,
    });

    // Check for difficulty transition
    const shouldShowTransition = (
      DIFFICULTY_TRANSITION_LEVELS as readonly number[]
    ).includes(currentLevel);

    if (shouldShowTransition) {
      playExploreTransitionSound();
      set({
        completedLevels: newCompletedLevels,
        earnedBadgeIds: newEarnedBadges,
        unlockedLevel: newUnlocked,
        stage: "difficultyTransition",
      });
    } else {
      set({
        completedLevels: newCompletedLevels,
        earnedBadgeIds: newEarnedBadges,
        unlockedLevel: newUnlocked,
        currentLevel: nextLevelNum,
        selectedItemIds: [],
        stage: "exploring",
      });
    }
  },

  dismissDifficultyTransition: () => {
    const { currentLevel } = get();
    const nextLevelNum = Math.min(currentLevel + 1, TOTAL_LEVELS);
    set({
      currentLevel: nextLevelNum,
      selectedItemIds: [],
      stage: "exploring",
    });
  },

  goToLevel: (levelNumber: number) => {
    const { unlockedLevel } = get();
    if (levelNumber < 1 || levelNumber > unlockedLevel) return;

    set({
      currentLevel: levelNumber,
      selectedItemIds: [],
      stage: "exploring",
    });
  },

  toggleHint: (open?: boolean) => {
    set((state) => ({
      isHintOpen: open !== undefined ? open : !state.isHintOpen,
    }));
  },

  toggleHowToPlay: (open?: boolean) => {
    set((state) => ({
      isHowToPlayOpen: open !== undefined ? open : !state.isHowToPlayOpen,
    }));
  },

  toggleBadgePopover: (open?: boolean) => {
    set((state) => ({
      isBadgePopoverOpen: open !== undefined ? open : !state.isBadgePopoverOpen,
    }));
  },

  openResetModal: () => set({ isResetModalOpen: true }),
  closeResetModal: () => set({ isResetModalOpen: false }),
  dismissResetToast: () => set({ resetToastMessage: null }),

  resetProgress: async () => {
    // 1. Clear persisted Explore data in Dexie & localStorage (no other data touched)
    await clearExplorePersistedData();

    // 2. Synchronize Learnings & Quizzes reset: clear dependent quiz attempts and scores
    await useLearningsStore.getState().resetQuizProgress();

    // 3. Reset complete in-memory Explore state to Level 1 initial baseline
    set({
      unlockedLevel: 1,
      currentLevel: 1,
      completedLevels: [],
      earnedBadgeIds: [],
      learningScore: 0,
      completedCardIds: [],
      selectedItemIds: [],
      stage: "exploring",
      isHintOpen: false,
      isHowToPlayOpen: false,
      isBadgePopoverOpen: false,
      isResetModalOpen: false,
      resetToastMessage: "Explore progress has been reset.",
    });
  },
}));
