import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LearningsPage } from "../LearningsPage";
import { useLearningsStore } from "../store/useLearningsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

describe("SYLVARA Quiz Runner & One-Attempt Experience", () => {
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
      completedLevels: [1],
      earnedBadgeIds: ["badge_1"],
      learningScore: 1,
      completedCardIds: ["learn_1"],
      isInitialized: true,
    });
  });

  it("opens Quiz Intro screen with instructions and start button", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    const startBtn = screen.getByRole("button", { name: /start quiz 1/i });
    fireEvent.click(startBtn);

    const modal = screen.getByRole("dialog");
    expect(
      within(modal).getByText("Common Cold & Viral Transmission Quiz")
    ).toBeDefined();
    expect(within(modal).getByText("Total Questions")).toBeDefined();
    expect(within(modal).getByText("3 Questions")).toBeDefined();
    expect(within(modal).getByText("Single Attempt")).toBeDefined();
    expect(
      within(modal).getByRole("button", { name: /begin quiz/i })
    ).toBeDefined();
  });

  it("walks through questions one by one, enforces answer selection, displays feedback, and reveals result", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // 1. Start quiz
    fireEvent.click(screen.getByRole("button", { name: /start quiz 1/i }));

    const modal = screen.getByRole("dialog");
    fireEvent.click(within(modal).getByRole("button", { name: /begin quiz/i }));

    // Question 1
    expect(within(modal).getByText("QUESTION 1 / 3")).toBeDefined();
    const submitBtn = within(modal).getByRole("button", {
      name: /submit answer/i,
    });
    expect(submitBtn).toBeDisabled();

    // Select option 1 (correct: "Respiratory viruses such as rhinoviruses")
    const opt1 = within(modal).getByText(
      /respiratory viruses such as rhinoviruses/i
    );
    fireEvent.click(opt1);
    expect(submitBtn).toBeEnabled();

    fireEvent.click(submitBtn);

    // Feedback 1
    expect(within(modal).getByText("Correct Answer!")).toBeDefined();
    expect(
      within(modal).getByText(
        /Viruses cause colds; environmental cold is merely a myth/i
      )
    ).toBeDefined();

    // Proceed to Question 2
    fireEvent.click(
      within(modal).getByRole("button", { name: /continue to next question/i })
    );
    expect(within(modal).getByText("QUESTION 2 / 3")).toBeDefined();

    // Select option 1 (correct: "Antibiotics only kill bacteria, not viral pathogens")
    fireEvent.click(within(modal).getByText(/antibiotics only kill bacteria/i));
    fireEvent.click(
      within(modal).getByRole("button", { name: /submit answer/i })
    );

    expect(within(modal).getByText("Correct Answer!")).toBeDefined();

    // Proceed to Question 3
    fireEvent.click(
      within(modal).getByRole("button", { name: /continue to next question/i })
    );
    expect(within(modal).getByText("QUESTION 3 / 3")).toBeDefined();

    // Select option 1 (correct: "Frequent handwashing with soap for 20 seconds and covering coughs")
    fireEvent.click(within(modal).getByText(/frequent handwashing with soap/i));
    fireEvent.click(
      within(modal).getByRole("button", { name: /submit answer/i })
    );

    expect(within(modal).getByText("Correct Answer!")).toBeDefined();

    // Finish Quiz -> Result screen
    fireEvent.click(
      within(modal).getByRole("button", { name: /view final results/i })
    );

    // Final result check within modal
    expect(
      within(modal).getByRole("heading", { name: "Mastered" })
    ).toBeDefined();
    expect(within(modal).getByText("Score: 3 / 3")).toBeDefined();
    expect(
      within(modal).getByText(
        "The user has demonstrated complete understanding of the quiz content."
      )
    ).toBeDefined();

    // Return to Quizzes
    fireEvent.click(
      within(modal).getByRole("button", { name: /return to quizzes/i })
    );
    expect(useLearningsStore.getState().activeQuizId).toBeNull();

    // Quiz card now shows COMPLETED and Mastered
    expect(screen.getByText("COMPLETED")).toBeDefined();
    expect(screen.getByText("Mastered")).toBeDefined();
  });
});
