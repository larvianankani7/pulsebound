import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LearningsPage } from "../LearningsPage";
import { useLearningsStore } from "../store/useLearningsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

describe("Learnings Section — Cards, Grid & Detail View", () => {
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

  it("shows attractive empty state when no learnings have been earned in Explore", () => {
    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("No Learnings Unlocked Yet")).toBeDefined();
    expect(
      screen.getByText(/complete botanical challenges in explore to unlock/i)
    ).toBeDefined();
    expect(
      screen.getByRole("link", { name: /start explore challenge/i })
    ).toBeDefined();
  });

  it("displays earned learning cards and excludes locked lessons", () => {
    // Simulate user completing Level 1 in Explore
    useExploreStore.setState({
      completedLevels: [1],
      completedCardIds: ["learn_1"],
      earnedBadgeIds: ["badge_1"],
    });

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // Level 1 Common Cold should be visible
    expect(screen.getByText("Common Cold")).toBeDefined();
    expect(screen.getByText("Explore Level 01")).toBeDefined();
    expect(screen.getAllByText("First Bloom").length).toBeGreaterThan(0);
    expect(screen.getByText("Earned")).toBeDefined();

    // Level 2 Fever Awareness must NOT appear as earned
    expect(screen.queryByText("Fever Awareness")).toBeNull();
  });

  it("clicking an earned learning card opens its detailed view with structured sections", () => {
    useExploreStore.setState({
      completedLevels: [1],
      completedCardIds: ["learn_1"],
      earnedBadgeIds: ["badge_1"],
    });

    render(
      <MemoryRouter>
        <LearningsPage />
      </MemoryRouter>
    );

    // Click the card
    const cardButton = screen.getByRole("button", {
      name: /view details for common cold/i,
    });
    fireEvent.click(cardButton);

    // Detail view should be active
    expect(
      screen.getByRole("heading", { name: "Common Cold", level: 2 })
    ).toBeDefined();
    expect(screen.getByText("What is this condition?")).toBeDefined();
    expect(screen.getByText("How it happens & transmission")).toBeDefined();
    expect(screen.getByText("Nutritional & Botanical Support")).toBeDefined();
    expect(screen.getByText("Precautions & Prevention")).toBeDefined();
    expect(screen.getByText("Supportive Care")).toBeDefined();
    expect(screen.getByText("Medical & Clinical Context")).toBeDefined();
    expect(
      screen.getByText("When to Seek Professional Medical Care")
    ).toBeDefined();

    // Click Back to Learnings
    const backBtn = screen.getByRole("button", { name: /back to learnings/i });
    fireEvent.click(backBtn);

    // Card grid should return
    expect(screen.getByText("Common Cold")).toBeDefined();
  });
});
