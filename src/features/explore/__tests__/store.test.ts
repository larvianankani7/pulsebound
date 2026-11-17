import { describe, it, expect, beforeEach, vi } from "vitest";
import { useExploreStore } from "../store/useExploreStore";

// Mock exploreStorage to test in-memory
vi.mock("../store/exploreStorage", () => ({
  loadExploreProgress: vi.fn().mockResolvedValue({
    unlockedLevel: 1,
    completedLevels: [],
    earnedBadgeIds: [],
    learningScore: 0,
    completedCardIds: [],
  }),
  saveExploreProgress: vi.fn().mockResolvedValue(undefined),
  clearExplorePersistedData: vi.fn().mockResolvedValue(undefined),
  getSavedUsername: vi.fn().mockReturnValue("TestExplorer"),
}));

describe("useExploreStore State & Progression", () => {
  beforeEach(async () => {
    const store = useExploreStore.getState();
    await store.resetProgress();
  });

  it("initializes with Level 1 unlocked and 0 badges", async () => {
    await useExploreStore.getState().init();
    const state = useExploreStore.getState();
    expect(state.unlockedLevel).toBe(1);
    expect(state.currentLevel).toBe(1);
    expect(state.completedLevels).toHaveLength(0);
    expect(state.earnedBadgeIds).toHaveLength(0);
    expect(state.learningScore).toBe(0);
    expect(state.stage).toBe("exploring");
    expect(state.username).toBe("TestExplorer");
  });

  it("handles item selection and toggling", () => {
    const store = useExploreStore.getState();
    expect(store.selectedItemIds).toHaveLength(0);

    store.toggleItemSelection("tulsi");
    expect(useExploreStore.getState().selectedItemIds).toContain("tulsi");

    store.toggleItemSelection("tulsi");
    expect(useExploreStore.getState().selectedItemIds).not.toContain("tulsi");
  });

  it("sets incorrect stage when submission fails", () => {
    const store = useExploreStore.getState();
    store.toggleItemSelection("cinnamon"); // incorrect for Level 1
    const result = store.submitSelection();

    expect(result).toBe(false);
    expect(useExploreStore.getState().stage).toBe("incorrect");

    store.dismissIncorrect();
    expect(useExploreStore.getState().stage).toBe("exploring");
  });

  it("progresses to learningCard on correct selection", () => {
    const store = useExploreStore.getState();
    // Level 1 correct: tulsi, handwashing, rest
    store.toggleItemSelection("tulsi");
    store.toggleItemSelection("handwashing");
    store.toggleItemSelection("rest");

    const result = store.submitSelection();
    expect(result).toBe(true);
    expect(useExploreStore.getState().stage).toBe("learningCard");
  });

  it("advances from learning card to badge, then triggers difficulty transition after Level 1", () => {
    const store = useExploreStore.getState();
    store.toggleItemSelection("tulsi");
    store.toggleItemSelection("handwashing");
    store.toggleItemSelection("rest");
    store.submitSelection();

    // 1. Complete Learning Card
    store.completeLearningCard();
    expect(useExploreStore.getState().learningScore).toBe(1);
    expect(useExploreStore.getState().stage).toBe("badgeUnlock");

    // 2. Advance after Badge Unlock (Level 1 triggers transition to Level 2)
    store.advanceAfterBadge();
    expect(useExploreStore.getState().earnedBadgeIds).toContain("badge_1");
    expect(useExploreStore.getState().completedLevels).toContain(1);
    expect(useExploreStore.getState().unlockedLevel).toBe(2);
    // Level 1 is in DIFFICULTY_TRANSITION_LEVELS!
    expect(useExploreStore.getState().stage).toBe("difficultyTransition");

    // 3. Dismiss transition to start Level 2
    store.dismissDifficultyTransition();
    expect(useExploreStore.getState().currentLevel).toBe(2);
    expect(useExploreStore.getState().stage).toBe("exploring");
  });

  it("does not award duplicate badges or learning points on replaying a level", () => {
    const store = useExploreStore.getState();
    // Complete level 1 once
    store.toggleItemSelection("tulsi");
    store.toggleItemSelection("handwashing");
    store.toggleItemSelection("rest");
    store.submitSelection();
    store.completeLearningCard();
    store.advanceAfterBadge();
    store.dismissDifficultyTransition();

    expect(useExploreStore.getState().learningScore).toBe(1);
    expect(useExploreStore.getState().earnedBadgeIds).toHaveLength(1);

    // Go back to Level 1
    store.goToLevel(1);
    expect(useExploreStore.getState().currentLevel).toBe(1);

    store.toggleItemSelection("tulsi");
    store.toggleItemSelection("handwashing");
    store.toggleItemSelection("rest");
    store.submitSelection();
    store.completeLearningCard();
    store.advanceAfterBadge();

    // Score and badges should remain 1, no duplicate awards
    expect(useExploreStore.getState().learningScore).toBe(1);
    expect(useExploreStore.getState().earnedBadgeIds).toHaveLength(1);
  });

  it("handles reset modal toggling and complete resetProgress", async () => {
    const store = useExploreStore.getState();

    // Advance to Level 2
    store.toggleItemSelection("tulsi");
    store.toggleItemSelection("handwashing");
    store.toggleItemSelection("rest");
    store.submitSelection();
    store.completeLearningCard();
    store.advanceAfterBadge();
    store.dismissDifficultyTransition();
    expect(useExploreStore.getState().currentLevel).toBe(2);
    expect(useExploreStore.getState().learningScore).toBe(1);

    // Open reset modal
    store.openResetModal();
    expect(useExploreStore.getState().isResetModalOpen).toBe(true);

    store.closeResetModal();
    expect(useExploreStore.getState().isResetModalOpen).toBe(false);

    // Trigger complete reset
    await store.resetProgress();
    const resetState = useExploreStore.getState();
    expect(resetState.currentLevel).toBe(1);
    expect(resetState.unlockedLevel).toBe(1);
    expect(resetState.completedLevels).toHaveLength(0);
    expect(resetState.earnedBadgeIds).toHaveLength(0);
    expect(resetState.learningScore).toBe(0);
    expect(resetState.selectedItemIds).toHaveLength(0);
    expect(resetState.stage).toBe("exploring");
    expect(resetState.resetToastMessage).toBe(
      "Explore progress has been reset."
    );

    // Dismiss toast
    store.dismissResetToast();
    expect(useExploreStore.getState().resetToastMessage).toBeNull();
  });
});
