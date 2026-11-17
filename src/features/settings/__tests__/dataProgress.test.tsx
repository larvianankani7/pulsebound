import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { DataProgressSection } from "../components/DataProgressSection";
import { SettingsResetModal } from "../components/SettingsResetModal";
import { useExploreStore } from "../../explore/store/useExploreStore";
import { useLearningsStore } from "../../learnings/store/useLearningsStore";

// Mock i18next
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-i18next")>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => {
        const dict: Record<string, string> = {
          "settings.data.title": "Data & Progress Management",
          "settings.data.subtitle":
            "Review offline storage and manage botanical progression",
          "settings.data.localNotice":
            "SYLVARA stores all your game progress, badges, and preferences locally in your browser.",
          "settings.data.statsHeading": "Active Local Records",
          "settings.data.resetHeading": "Reset Exploration Data",
          "settings.data.resetDesc":
            "Reset your Explore level progression, earned badges, and dependent quiz attempts back to Level 1.",
          "settings.data.resetBtn": "Reset Explore Progress",
          "settings.data.modalTitle": "Confirm Reset Explore Progress",
          "settings.data.modalWarning":
            "Are you sure? This will relock Explore levels 2-25, clear earned badges, and remove dependent quiz scores.",
          "settings.data.modalConfirm": "Yes, Reset Everything",
          "settings.data.modalCancel": "Cancel",
          "settings.data.resetSuccess":
            "Explore progress has been reset back to Level 1.",
          "common.close": "Close",
        };
        return dict[key] || key;
      },
    }),
  };
});

describe("SettingsResetModal", () => {
  it("does not render when isOpen is false", () => {
    const { container } = render(
      <SettingsResetModal
        isOpen={false}
        onClose={vi.fn()}
        onConfirm={vi.fn()}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders when open and responds to cancel and escape key", () => {
    const handleClose = vi.fn();
    const handleConfirm = vi.fn();

    render(
      <SettingsResetModal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByText("Confirm Reset Explore Progress")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your preferences are preserved:/i)
    ).toBeInTheDocument();

    // Cancel button
    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Escape key
    fireEvent.keyDown(window, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(2);

    // Confirm button
    const confirmBtn = screen.getByRole("button", {
      name: "Yes, Reset Everything",
    });
    fireEvent.click(confirmBtn);
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});

describe("DataProgressSection", () => {
  beforeEach(() => {
    useExploreStore.setState({
      currentLevel: 4,
      unlockedLevel: 5,
      completedLevels: [1, 2, 3],
      earnedBadgeIds: ["b1", "b2"],
      completedCardIds: ["c1", "c2"],
      learningScore: 180,
    });
    useLearningsStore.setState({
      quizAttempts: {
        "level-1": {
          quizId: "level-1",
          score: 3,
          selectedAnswers: [0, 1, 2],
          completedAt: new Date().toISOString(),
          resultCategory: "Mastered",
        },
      },
    });
  });

  it("renders local storage overview, active stats, and reset button", () => {
    render(<DataProgressSection />);

    expect(screen.getByText("Data & Progress Management")).toBeInTheDocument();
    expect(screen.getByText("Local Browser Storage")).toBeInTheDocument();
    expect(screen.getByText("Active Local Records")).toBeInTheDocument();

    expect(screen.getByText("Current Level")).toBeInTheDocument();
    expect(screen.getByText("Unlocked Level")).toBeInTheDocument();
    expect(screen.getByText("Earned Badges")).toBeInTheDocument();
  });

  it("opens reset modal, confirms reset, and updates UI with confirmation toast", async () => {
    const resetSpy = vi
      .spyOn(useExploreStore.getState(), "resetProgress")
      .mockResolvedValue();

    render(<DataProgressSection />);

    const openResetBtn = screen.getByRole("button", {
      name: /reset explore progress/i,
    });
    fireEvent.click(openResetBtn);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const confirmBtn = screen.getByRole("button", {
      name: "Yes, Reset Everything",
    });
    await act(async () => {
      fireEvent.click(confirmBtn);
    });

    expect(resetSpy).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(
      screen.getByText("Explore progress has been reset back to Level 1.")
    ).toBeInTheDocument();

    resetSpy.mockRestore();
  });
});
