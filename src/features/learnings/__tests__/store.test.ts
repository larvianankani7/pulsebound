import { describe, it, expect, beforeEach } from "vitest";
import { useLearningsStore } from "../store/useLearningsStore";
import {
  loadLearningsProgress,
  saveLearningsProgress,
} from "../store/learningsStorage";
import { db } from "../../../database/db";

describe("Learnings & Quizzes Store and Persistence Layer", () => {
  beforeEach(async () => {
    localStorage.clear();
    try {
      await db.userProgress.clear();
    } catch {
      // ignore
    }
    useLearningsStore.setState({
      activeSection: "learnings",
      selectedLearningId: null,
      activeQuizId: null,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
      quizAttempts: {},
      isInitialized: false,
    });
  });

  it("initializes with clean default state and loads persisted data", async () => {
    await saveLearningsProgress({
      quizAttempts: {
        quiz_1: {
          quizId: "quiz_1",
          score: 3,
          selectedAnswers: [1, 1, 1],
          completedAt: new Date().toISOString(),
          resultCategory: "Mastered",
        },
      },
    });

    const store = useLearningsStore.getState();
    await store.init();

    const updated = useLearningsStore.getState();
    expect(updated.isInitialized).toBe(true);
    expect(updated.quizAttempts["quiz_1"]).toBeDefined();
    expect(updated.quizAttempts["quiz_1"].score).toBe(3);
    expect(updated.quizAttempts["quiz_1"].resultCategory).toBe("Mastered");
  });

  it("handles section switching and learning selection", () => {
    const store = useLearningsStore.getState();

    store.setActiveSection("quizzes");
    expect(useLearningsStore.getState().activeSection).toBe("quizzes");

    store.selectLearning("learn_1");
    expect(useLearningsStore.getState().selectedLearningId).toBe("learn_1");

    store.selectLearning(null);
    expect(useLearningsStore.getState().selectedLearningId).toBeNull();
  });

  it("progresses through 3-question quiz with instant feedback and exact scoring", () => {
    const store = useLearningsStore.getState();

    // Start quiz_1
    store.startQuiz("quiz_1");
    expect(useLearningsStore.getState().activeQuizId).toBe("quiz_1");
    expect(useLearningsStore.getState().quizStep).toBe("intro");

    // Begin questions
    store.startQuestions();
    expect(useLearningsStore.getState().quizStep).toBe("question");
    expect(useLearningsStore.getState().currentQuestionIndex).toBe(0);

    // Question 1: select correct option (index 1) and submit
    store.selectQuizOption(1);
    expect(useLearningsStore.getState().selectedOptionIndex).toBe(1);
    store.submitCurrentAnswer();
    expect(useLearningsStore.getState().quizStep).toBe("feedback");

    // Advance to Question 2
    store.nextQuestion();
    expect(useLearningsStore.getState().quizStep).toBe("question");
    expect(useLearningsStore.getState().currentQuestionIndex).toBe(1);

    // Question 2: select incorrect option (index 0) and submit
    store.selectQuizOption(0);
    store.submitCurrentAnswer();
    expect(useLearningsStore.getState().quizStep).toBe("feedback");

    // Advance to Question 3
    store.nextQuestion();
    expect(useLearningsStore.getState().quizStep).toBe("question");
    expect(useLearningsStore.getState().currentQuestionIndex).toBe(2);

    // Question 3: select correct option (index 1) and submit
    store.selectQuizOption(1);
    store.submitCurrentAnswer();
    expect(useLearningsStore.getState().quizStep).toBe("feedback");

    // Finish Quiz -> Result screen
    store.finishQuiz();
    const finalState = useLearningsStore.getState();
    expect(finalState.quizStep).toBe("result");

    const record = finalState.quizAttempts["quiz_1"];
    expect(record).toBeDefined();
    expect(record.score).toBe(2);
    expect(record.resultCategory).toBe("Well Explored");
    expect(record.selectedAnswers).toEqual([1, 0, 1]);
  });

  it("strictly enforces one-attempt rule: cannot retake completed quiz, opens review mode", () => {
    const store = useLearningsStore.getState();

    // Record an existing attempt
    useLearningsStore.setState({
      quizAttempts: {
        quiz_1: {
          quizId: "quiz_1",
          score: 1,
          selectedAnswers: [1, 0, 0],
          completedAt: new Date().toISOString(),
          resultCategory: "Learning",
        },
      },
    });

    // Attempting to start quiz_1 must route to review mode
    store.startQuiz("quiz_1");
    expect(useLearningsStore.getState().activeQuizId).toBe("quiz_1");
    expect(useLearningsStore.getState().quizStep).toBe("review");

    // Calling startQuestions or submitCurrentAnswer does not alter saved score
    store.startQuestions();
    expect(useLearningsStore.getState().quizStep).toBe("review");
    expect(useLearningsStore.getState().quizAttempts["quiz_1"].score).toBe(1);
  });

  it("allows reviewing completed quiz and exiting cleanly", () => {
    const store = useLearningsStore.getState();
    useLearningsStore.setState({
      quizAttempts: {
        quiz_2: {
          quizId: "quiz_2",
          score: 3,
          selectedAnswers: [0, 1, 2],
          completedAt: new Date().toISOString(),
          resultCategory: "Mastered",
        },
      },
    });

    store.openQuizReview("quiz_2");
    expect(useLearningsStore.getState().activeQuizId).toBe("quiz_2");
    expect(useLearningsStore.getState().quizStep).toBe("review");

    store.exitQuiz();
    expect(useLearningsStore.getState().activeQuizId).toBeNull();
  });

  it("clears all quiz progress on resetQuizProgress", async () => {
    const store = useLearningsStore.getState();
    useLearningsStore.setState({
      quizAttempts: {
        quiz_1: {
          quizId: "quiz_1",
          score: 3,
          selectedAnswers: [1, 1, 1],
          completedAt: new Date().toISOString(),
          resultCategory: "Mastered",
        },
      },
    });

    await store.resetQuizProgress();
    const updated = useLearningsStore.getState();
    expect(Object.keys(updated.quizAttempts)).toHaveLength(0);
    expect(updated.activeQuizId).toBeNull();

    const loaded = await loadLearningsProgress();
    expect(Object.keys(loaded.quizAttempts)).toHaveLength(0);
  });
});
