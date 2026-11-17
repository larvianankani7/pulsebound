import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LearningsPage } from "../LearningsPage";
import { useLearningsStore } from "../store/useLearningsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

describe("SYLVARA Learnings Page Shell & Sidebar Navigation", () => {
  beforeEach(() => {
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

  it("renders page title, tagline, and navigation controls", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("LEARNINGS & DISCOVERY")).toBeDefined();
    expect(
      screen.getByText("Knowledge earned through your botanical exploration")
    ).toBeDefined();
    expect(screen.getByRole("link", { name: /main menu/i })).toBeDefined();
  });

  it("renders both Learnings and Quizzes sidebar tabs", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    const learningsTab = screen.getByRole("button", { name: /learnings/i });
    const quizzesTab = screen.getByRole("button", { name: /quizzes/i });

    expect(learningsTab).toBeDefined();
    expect(quizzesTab).toBeDefined();
  });

  it("switches smoothly between Learnings and Quizzes without reloading page", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // Initial section is Learnings
    expect(useLearningsStore.getState().activeSection).toBe("learnings");

    // Click Quizzes tab
    const quizzesTab = screen.getByRole("button", { name: /quizzes/i });
    fireEvent.click(quizzesTab);

    expect(useLearningsStore.getState().activeSection).toBe("quizzes");

    // Click Learnings tab
    const learningsTab = screen.getByRole("button", { name: /learnings/i });
    fireEvent.click(learningsTab);

    expect(useLearningsStore.getState().activeSection).toBe("learnings");
  });
});
