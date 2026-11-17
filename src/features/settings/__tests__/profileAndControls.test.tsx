import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProfileSection } from "../components/ProfileSection";
import { ControlsSection } from "../components/ControlsSection";
import { useSettingsStore } from "../store/useSettingsStore";
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
          "settings.profile.title": "Player Profile",
          "settings.profile.subtitle":
            "Personalize your identity across the botanical realm",
          "settings.profile.usernameLabel": "Explorer Name",
          "settings.profile.usernamePlaceholder": "Enter your name...",
          "settings.profile.saveUsername": "Save Profile",
          "settings.profile.usernameSavedToast":
            "Profile username updated successfully!",
          "settings.profile.avatarHeading": "Choose Your Avatar Archetype",
          "settings.profile.summaryHeading": "Exploration Milestones",
          "settings.profile.currentLevel": "Current Level",
          "settings.profile.badgesEarned": "Badges Earned",
          "settings.profile.learningsUnlocked": "Learnings Unlocked",
          "settings.profile.quizzesCompleted": "Quizzes Completed",
          "settings.controls.title": "Controls & Interactions",
          "settings.controls.subtitle":
            "Master the art of botanical discovery and deep inspection",
          "settings.controls.corePrinciple":
            "Hover helps users discover more. Clicking helps users explore detailed information.",
          "settings.controls.hoverTitle": "Hover Discovery",
          "settings.controls.hoverDesc":
            "Hovering reveals nutrients, botanical properties, food info...",
          "settings.controls.clickTitle": "Click Exploration",
          "settings.controls.clickDesc":
            "Clicking opens detailed clinical insights...",
          "settings.controls.keyboardTitle": "Keyboard & Navigation Controls",
          "settings.controls.keyboardDesc":
            "Full accessibility support using Tab, Enter, Space, and Escape.",
          "settings.controls.demoTitle": "Interactive Interaction Sandbox",
          "settings.controls.demoSubtitle":
            "Try hovering and clicking the specimen below to experience live feedback",
          "settings.controls.specimenName": "Sacred Tulsi (Holy Basil)",
          "settings.controls.specimenCategory": "Medicinal Botanical Herb",
          "settings.controls.specimenTooltip":
            "Rich in eugenol & adaptogenic antioxidants. Eases respiratory discomfort.",
          "settings.controls.drawerTitle": "Tulsi Botanical Dossier",
          "settings.controls.drawerDesc":
            "Ocimum sanctum has demonstrated adaptogenic support, reducing cellular stress.",
          "settings.controls.drawerClose": "Close Dossier",
        };
        return dict[key] || key;
      },
    }),
  };
});

describe("ProfileSection", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      username: "BotanistHero",
      avatarId: "seeker",
    });
    useExploreStore.setState({
      currentLevel: 5,
      earnedBadgeIds: ["badge-1", "badge-2"],
      completedCardIds: ["card-1", "card-2", "card-3"],
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

  it("renders profile header, username input, and exploration milestones", () => {
    render(<ProfileSection />);

    expect(screen.getByText("Player Profile")).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: "Explorer Name" });
    expect(input).toHaveValue("BotanistHero");

    // Milestones
    expect(screen.getByText("Current Level")).toBeInTheDocument();
    expect(screen.getByText("Badges Earned")).toBeInTheDocument();
    expect(screen.getByText("Learnings Unlocked")).toBeInTheDocument();
  });

  it("updates username on submit and triggers confirmation toast", async () => {
    render(<ProfileSection />);

    const input = screen.getByRole("textbox", { name: "Explorer Name" });
    fireEvent.change(input, { target: { value: "VerdantSage" } });

    const saveBtn = screen.getByRole("button", { name: /save profile/i });
    fireEvent.click(saveBtn);

    expect(useSettingsStore.getState().username).toBe("VerdantSage");
    expect(localStorage.getItem("sylvara_username")).toBe("VerdantSage");
    expect(
      screen.getByText("Profile username updated successfully!")
    ).toBeInTheDocument();
  });

  it("allows selecting a different avatar and highlights the active selection", () => {
    render(<ProfileSection />);

    const herbalistBtn = screen.getByRole("button", {
      name: /the herbalist/i,
    });
    expect(herbalistBtn).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(herbalistBtn);
    expect(useSettingsStore.getState().avatarId).toBe("herbalist");
    expect(localStorage.getItem("sylvara_avatar")).toBe("herbalist");
    expect(herbalistBtn).toHaveAttribute("aria-pressed", "true");
  });
});

describe("ControlsSection", () => {
  it("renders the central philosophy and interaction guides", () => {
    render(<ControlsSection />);

    expect(
      screen.getByText(
        /Hover helps users discover more\. Clicking helps users explore detailed information\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Hover Discovery")).toBeInTheDocument();
    expect(screen.getByText("Click Exploration")).toBeInTheDocument();
    expect(
      screen.getByText("Keyboard & Navigation Controls")
    ).toBeInTheDocument();
  });

  it("supports interactive hover tooltip preview and click dossier drawer in the sandbox", () => {
    render(<ControlsSection />);

    const specimenBtn = screen.getByRole("button", {
      name: /sacred tulsi \(holy basil\)/i,
    });
    expect(specimenBtn).toBeInTheDocument();

    // Hover reveals tooltip
    fireEvent.mouseEnter(specimenBtn);
    expect(
      screen.getByText(/rich in eugenol & adaptogenic antioxidants/i)
    ).toBeInTheDocument();

    // Mouse leave hides tooltip
    fireEvent.mouseLeave(specimenBtn);
    expect(
      screen.queryByText(/rich in eugenol & adaptogenic antioxidants/i)
    ).not.toBeInTheDocument();

    // Click opens full dossier
    fireEvent.click(specimenBtn);
    expect(screen.getByText("Tulsi Botanical Dossier")).toBeInTheDocument();
    expect(
      screen.getByText(/Ocimum sanctum has demonstrated adaptogenic support/i)
    ).toBeInTheDocument();

    // Click close button dismisses dossier
    const closeBtn = screen.getByRole("button", { name: "Close Dossier" });
    fireEvent.click(closeBtn);
    expect(
      screen.queryByText("Tulsi Botanical Dossier")
    ).not.toBeInTheDocument();
  });
});
