import { describe, it, expect, beforeEach } from "vitest";
import { useExploreStore } from "../../explore/store/useExploreStore";
import { useLearningsStore } from "../store/useLearningsStore";
import { loadLearningsProgress } from "../store/learningsStorage";
import { loadExploreProgress } from "../../explore/store/exploreStorage";
import { db } from "../../../database/db";

describe("Explore & Learnings Integration — Progression & Reset Behavior", () => {
  beforeEach(async () => {
    localStorage.clear();
    try {
      await db.userProgress.clear();
    } catch {
      // ignore
    }
    useExploreStore.setState({
      username: "Seeker",
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
      isInitialized: true,
    });

    useLearningsStore.setState({
      activeSection: "learnings",
      selectedLearningId: null,
      activeQuizId: null,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
      quizAttempts: {},
      isInitialized: true,
    });
  });

  it("synchronizes Explore completion to unlock learnings and badges, then cleanly clears on Explore reset", async () => {
    // 1. Simulate Level 1 completion in Explore
    useExploreStore.setState({
      unlockedLevel: 2,
      currentLevel: 2,
      completedLevels: [1],
      earnedBadgeIds: ["badge_1"],
      learningScore: 1,
      completedCardIds: ["learn_1"],
    });

    // Verify badge unlocks Quiz 1
    const { earnedBadgeIds } = useExploreStore.getState();
    expect(earnedBadgeIds).toContain("badge_1");

    // 2. User completes Quiz 1
    const learningsStore = useLearningsStore.getState();
    learningsStore.startQuiz("quiz_1");
    learningsStore.startQuestions();
    learningsStore.selectQuizOption(1); // Q1
    learningsStore.submitCurrentAnswer();
    learningsStore.nextQuestion();
    learningsStore.selectQuizOption(1); // Q2
    learningsStore.submitCurrentAnswer();
    learningsStore.nextQuestion();
    learningsStore.selectQuizOption(1); // Q3
    learningsStore.submitCurrentAnswer();
    learningsStore.finishQuiz();

    const afterQuiz = useLearningsStore.getState();
    expect(afterQuiz.quizAttempts["quiz_1"]).toBeDefined();
    expect(afterQuiz.quizAttempts["quiz_1"].score).toBe(3);
    expect(afterQuiz.quizAttempts["quiz_1"].resultCategory).toBe("Mastered");

    // 3. User triggers Explore Reset
    await useExploreStore.getState().resetProgress();

    // 4. Verify Explore state reset
    const exploreState = useExploreStore.getState();
    expect(exploreState.unlockedLevel).toBe(1);
    expect(exploreState.currentLevel).toBe(1);
    expect(exploreState.completedLevels).toHaveLength(0);
    expect(exploreState.earnedBadgeIds).toHaveLength(0);
    expect(exploreState.completedCardIds).toHaveLength(0);

    // 5. Verify Learnings & Quizzes state reset
    const learningsState = useLearningsStore.getState();
    expect(Object.keys(learningsState.quizAttempts)).toHaveLength(0);
    expect(learningsState.activeQuizId).toBeNull();

    // 6. Verify Persisted Storage reflects clean state
    const persistedLearnings = await loadLearningsProgress();
    expect(Object.keys(persistedLearnings.quizAttempts)).toHaveLength(0);

    const persistedExplore = await loadExploreProgress();
    expect(persistedExplore.unlockedLevel).toBe(1);
    expect(persistedExplore.earnedBadgeIds).toHaveLength(0);

    // 7. Verify unrelated data (like username) remains intact
    expect(useExploreStore.getState().username).toBe("Seeker");
  });
});
