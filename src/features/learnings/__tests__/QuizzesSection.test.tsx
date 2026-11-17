import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LearningsPage } from "../LearningsPage";
import { useLearningsStore } from "../store/useLearningsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

describe("Quizzes Section — Progress, Lock/Unlock States & Card Actions", () => {
  beforeEach(() => {
    useLearningsStore.setState({
      activeSection: "quizzes",
      selectedLearningId: null,
      activeQuizId: null,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
      quizAttempts: {},
      isInitialized: true,
    });

    useExploreStore.setState({
      unlockedLevel: 1,
      currentLevel: 1,
      completedLevels: [],
      earnedBadgeIds: [],
      learningScore: 0,
      completedCardIds: [],
      isInitialized: true,
    });
  });

  it("renders top-left badges count, total quiz score, and progress indicators", () => {
    useExploreStore.setState({
      earnedBadgeIds: ["badge_1", "badge_2"],
    });

    useLearningsStore.setState({
      activeSection: "quizzes",
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

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // Badges: 2 / 25
    expect(screen.getByText("2 / 25")).toBeDefined();
    // Completed quizzes / quiz score info
    expect(screen.getByText("Total Quiz Score")).toBeDefined();
  });

  it("renders quiz cards in LOCKED state when required badge is missing and prevents clicking", () => {
    // User has earned NO badges
    useExploreStore.setState({
      earnedBadgeIds: [],
    });

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // Quiz 1 should be locked
    const lockedCard = screen.getByTestId("quiz-card-quiz_1");
    expect(lockedCard).toBeDefined();
    expect(screen.getByText(/requires first bloom badge/i)).toBeDefined();

    // Clicking locked card must NOT start quiz
    fireEvent.click(lockedCard);
    expect(useLearningsStore.getState().activeQuizId).toBeNull();
  });

  it("renders quiz card in UNLOCKED state when required badge is earned and allows starting", () => {
    // User has earned badge_1 from Explore
    useExploreStore.setState({
      earnedBadgeIds: ["badge_1"],
    });

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    const quiz1Card = screen.getByTestId("quiz-card-quiz_1");
    expect(quiz1Card).toBeDefined();

    const startBtn = screen.getByRole("button", { name: /start quiz 1/i });
    fireEvent.click(startBtn);

    expect(useLearningsStore.getState().activeQuizId).toBe("quiz_1");
    expect(useLearningsStore.getState().quizStep).toBe("intro");
  });

  it("renders quiz card in COMPLETED state when attempt is recorded and routes to review", () => {
    useExploreStore.setState({
      earnedBadgeIds: ["badge_1"],
    });

    useLearningsStore.setState({
      activeSection: "quizzes",
      quizAttempts: {
        quiz_1: {
          quizId: "quiz_1",
          score: 2,
          selectedAnswers: [1, 0, 1],
          completedAt: new Date().toISOString(),
          resultCategory: "Well Explored",
        },
      },
    });

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("COMPLETED")).toBeDefined();
    expect(screen.getByText("Well Explored")).toBeDefined();
    expect(screen.getByText("Score: 2 / 3")).toBeDefined();

    const reviewBtn = screen.getByRole("button", { name: /review quiz 1/i });
    fireEvent.click(reviewBtn);

    expect(useLearningsStore.getState().activeQuizId).toBe("quiz_1");
    expect(useLearningsStore.getState().quizStep).toBe("review");
  });
});
