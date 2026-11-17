import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ExplorePage } from "../ExplorePage";
import { useExploreStore } from "../store/useExploreStore";

// Mock background video and music
vi.mock("../../main-menu/components/BackgroundMedia", () => ({
  BackgroundMedia: () => <div data-testid="mock-background-media" />,
}));

vi.mock("../../main-menu/components/MusicControl", () => ({
  MusicControl: () => <div data-testid="mock-music-control" />,
}));

// Mock audio synthesizer
vi.mock("../utils/exploreAudio", () => ({
  playExploreSelectSound: vi.fn(),
  playExploreSuccessSound: vi.fn(),
  playExploreIncorrectSound: vi.fn(),
  playExploreTransitionSound: vi.fn(),
}));

describe("SYLVARA Explore Page Experience", () => {
  beforeEach(async () => {
    // Reset store
    await useExploreStore.getState().resetProgress();
  });

  it("1. Navigation bar renders profile, current level, badges count, and learnings score", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Profile username
    expect(screen.getByText("Explorer")).toBeInTheDocument();

    // Level indicator
    const levelStatus = screen.getByTestId("status-current-level");
    expect(levelStatus).toHaveTextContent("LEVEL");
    expect(levelStatus).toHaveTextContent("01");
    expect(levelStatus).toHaveTextContent("/ 25");

    // Badges count button
    const badgesButton = screen.getByRole("button", {
      name: /earned \d+ badges/i,
    });
    expect(badgesButton).toHaveTextContent("BADGES");
    expect(badgesButton).toHaveTextContent("00");

    // Learnings score
    const learningsStatus = screen.getByTestId("status-learnings-score");
    expect(learningsStatus).toHaveTextContent("LEARNINGS");
    expect(learningsStatus).toHaveTextContent("00");
  });

  it("2. Renders Level 1 objective scenario and condition title", () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const conditionTitles = screen.getAllByText("Common Cold");
    expect(conditionTitles.length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Your friend isn't feeling well/i)
    ).toBeInTheDocument();
    expect(screen.getByText("runny nose")).toBeInTheDocument();
  });

  it("3. Enter button is disabled initially and activates upon selecting an item", () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const enterBtn = screen.getByTestId("enter-submit-button");
    expect(enterBtn).toBeDisabled();

    // Select "Tulsi"
    const tulsiBtn = screen.getByTestId("garden-item-node-tulsi");
    fireEvent.click(tulsiBtn);

    // Enter button should now be enabled
    expect(enterBtn).not.toBeDisabled();

    // Deselect "Tulsi"
    fireEvent.click(tulsiBtn);
    expect(enterBtn).toBeDisabled();
  });

  it("4. Hint button reveals clue modal with required item count", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const hintBtn = screen.getByRole("button", {
      name: /reveal a clue for this level/i,
    });
    fireEvent.click(hintBtn);

    expect(screen.getByText(/Required Items to Select:/i)).toBeInTheDocument();
    expect(screen.getByText("3 Choices")).toBeInTheDocument();
    expect(
      screen.getByText(/Look for 3 choices: a soothing warm herbal infusion/i)
    ).toBeInTheDocument();

    // Close hint modal
    const closeBtn = screen.getByRole("button", { name: /Got It/i });
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(
        screen.queryByText(/Required Items to Select:/i)
      ).not.toBeInTheDocument();
    });
  });

  it("5. How to Play button opens complete instructional guide", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const howToPlayBtn = screen.getByRole("button", {
      name: /open how to play instructions/i,
    });
    fireEvent.click(howToPlayBtn);

    expect(screen.getByText("How To Play Explore")).toBeInTheDocument();
    expect(screen.getByText("What is Explore?")).toBeInTheDocument();
    expect(screen.getByText("Step-by-Step Flow")).toBeInTheDocument();
    expect(screen.getByText("What You'll Earn")).toBeInTheDocument();
    expect(screen.getByText("Controls & Accessibility")).toBeInTheDocument();

    // Dismiss
    const enterGardenBtn = screen.getByRole("button", {
      name: /Enter the Garden/i,
    });
    fireEvent.click(enterGardenBtn);

    await waitFor(() => {
      expect(screen.queryByText("How To Play Explore")).not.toBeInTheDocument();
    });
  });

  it("6. Submitting incorrect selection triggers 'GOTTA TRY AGAIN!' feedback", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Select wrong item: Cinnamon
    const cinnamonBtn = screen.getByTestId("garden-item-node-cinnamon");
    fireEvent.click(cinnamonBtn);

    const enterBtn = screen.getByTestId("enter-submit-button");
    fireEvent.click(enterBtn);

    expect(screen.getByTestId("incorrect-answer-text")).toHaveTextContent(
      "GOTTA TRY AGAIN!"
    );

    // Dismiss incorrect modal
    const retryBtn = screen.getByRole("button", { name: /Retry Selection/i });
    fireEvent.click(retryBtn);

    await waitFor(() => {
      expect(
        screen.queryByTestId("incorrect-answer-text")
      ).not.toBeInTheDocument();
    });
  });

  it("7. Complete progression sequence: Correct answers -> Learning Card -> Badge Award -> Difficulty Transition -> Level 02", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Level 1 correct items: Tulsi, Handwashing, Rest
    const tulsiBtn = screen.getByTestId("garden-item-node-tulsi");
    const handwashingBtn = screen.getByTestId("garden-item-node-handwashing");
    const restBtn = screen.getByTestId("garden-item-node-rest");

    fireEvent.click(tulsiBtn);
    fireEvent.click(handwashingBtn);
    fireEvent.click(restBtn);

    const enterBtn = screen.getByTestId("enter-submit-button");
    fireEvent.click(enterBtn);

    // 1. Learning card MUST appear BEFORE badge
    expect(screen.getByTestId("learning-card-modal")).toBeInTheDocument();
    expect(screen.getByText("A. What is it?")).toBeInTheDocument();
    expect(screen.getByText("B. How can it happen?")).toBeInTheDocument();
    expect(
      screen.getByText("D. Food & Biological Nutrition")
    ).toBeInTheDocument();
    expect(screen.getByText("E. Practical Precautions")).toBeInTheDocument();
    expect(screen.getByText("F. Supportive Care Measures")).toBeInTheDocument();
    expect(
      screen.getByText("G. Medical Care & Medicine Safety")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/H. When to Seek Urgent Medical Help/i)
    ).toBeInTheDocument();

    // Badge should not be visible yet
    expect(screen.queryByTestId("badge-unlock-modal")).not.toBeInTheDocument();

    // 2. Click "CONTINUE TO BADGE"
    const continueToBadgeBtn = screen.getByTestId(
      "learning-card-continue-button"
    );
    fireEvent.click(continueToBadgeBtn);

    // 3. Badge Unlock screen appears with "FIRST BLOOM"
    expect(screen.getByTestId("badge-unlock-modal")).toBeInTheDocument();
    expect(screen.getByTestId("unlocked-badge-name")).toHaveTextContent(
      "First Bloom"
    );
    expect(screen.getByText(/You completed Level 01/i)).toBeInTheDocument();

    // 4. Click "CONTINUE TO LEVEL 02" on badge screen
    const continueFromBadgeBtn = screen.getByTestId("badge-continue-button");
    fireEvent.click(continueFromBadgeBtn);

    // 5. Difficulty Transition screen appears ("DIFFICULTY INCREASED - THE GARDEN GROWS MORE CHALLENGING")
    expect(
      screen.getByTestId("difficulty-transition-modal")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("difficulty-transition-headline")
    ).toHaveTextContent("THE GARDEN GROWS MORE CHALLENGING");

    // 6. Click "ENTER THE NEW DEPTHS"
    const enterNewDepthsBtn = screen.getByTestId(
      "difficulty-transition-continue-button"
    );
    fireEvent.click(enterNewDepthsBtn);

    // 7. Successfully arrived at Level 02: Fever Awareness!
    await waitFor(() => {
      const levelStatus = screen.getByTestId("status-current-level");
      expect(levelStatus).toHaveTextContent("02");
    });

    // Badges count incremented
    const badgesBtnAfter = screen.getByRole("button", {
      name: /earned \d+ badges/i,
    });
    expect(badgesBtnAfter).toHaveTextContent("01");

    // Learnings score incremented
    const learningsStatus = screen.getByTestId("status-learnings-score");
    expect(learningsStatus).toHaveTextContent("01");

    // Level 2 condition title visible
    expect(screen.getByTestId("objective-condition-title")).toHaveTextContent(
      "Fever Awareness"
    );
  });

  it("8. Hovering or inspecting a garden item opens the viewport-aware educational tooltip", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Hover over Tulsi node
    const tulsiBtn = screen.getByTestId("garden-item-node-tulsi");
    fireEvent.mouseEnter(tulsiBtn);

    // Tooltip should be mounted in document.body
    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("Tulsi (Holy Basil)");
    expect(tooltip).toHaveTextContent("Key Compounds & Nutrients:");
    expect(tooltip).toHaveTextContent("Traditional Use (Folklore):");
    expect(tooltip).toHaveTextContent("Evidence Note:");

    // Close details
    const closeBtn = screen.getByLabelText("Close details");
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("9. Complete Reset Explore flow: Cancel preserves state, Reset Everything restores Level 1 and displays toast", async () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Complete Level 1 to get progress
    fireEvent.click(screen.getByTestId("garden-item-node-tulsi"));
    fireEvent.click(screen.getByTestId("garden-item-node-handwashing"));
    fireEvent.click(screen.getByTestId("garden-item-node-rest"));
    fireEvent.click(screen.getByTestId("enter-submit-button"));
    fireEvent.click(screen.getByTestId("learning-card-continue-button"));
    fireEvent.click(screen.getByTestId("badge-continue-button"));
    fireEvent.click(
      screen.getByTestId("difficulty-transition-continue-button")
    );

    // Verify at Level 02
    await waitFor(() => {
      expect(screen.getByTestId("status-current-level")).toHaveTextContent(
        "02"
      );
    });

    // 1. Click Reset Explore button in top navbar
    const resetBtn = screen.getByTestId("reset-explore-button");
    fireEvent.click(resetBtn);

    // Confirmation modal should open
    expect(screen.getByTestId("reset-confirmation-modal")).toBeInTheDocument();
    expect(screen.getByText("Reset Explore Progress?")).toBeInTheDocument();

    // 2. Click Cancel: should close modal and preserve Level 02
    const cancelBtn = screen.getByTestId("cancel-reset-button");
    fireEvent.click(cancelBtn);

    await waitFor(() => {
      expect(
        screen.queryByTestId("reset-confirmation-modal")
      ).not.toBeInTheDocument();
    });
    expect(screen.getByTestId("status-current-level")).toHaveTextContent("02");

    // 3. Open Reset modal again and click Reset Everything
    fireEvent.click(resetBtn);
    expect(screen.getByTestId("reset-confirmation-modal")).toBeInTheDocument();

    const confirmResetBtn = screen.getByTestId("confirm-reset-button");
    fireEvent.click(confirmResetBtn);

    // 4. Modal closes and state is reset to Level 1
    await waitFor(() => {
      expect(
        screen.queryByTestId("reset-confirmation-modal")
      ).not.toBeInTheDocument();
      expect(screen.getByTestId("status-current-level")).toHaveTextContent(
        "01"
      );
    });

    // Badges reset to 00
    const badgesBtn = screen.getByRole("button", {
      name: /earned \d+ badges/i,
    });
    expect(badgesBtn).toHaveTextContent("00");

    // Learnings score reset to 00
    expect(screen.getByTestId("status-learnings-score")).toHaveTextContent(
      "00"
    );

    // Toast notification visible
    expect(screen.getByTestId("reset-toast-notification")).toHaveTextContent(
      "Explore progress has been reset."
    );
  });
});
