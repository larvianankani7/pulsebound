import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SettingsPage } from "../SettingsPage";
import { useSettingsStore } from "../store/useSettingsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";
import { useLearningsStore } from "../../learnings/store/useLearningsStore";

// Mock YouTube background audio component & video
vi.mock("../../main-menu/components/BackgroundMedia", () => ({
  BackgroundMedia: () => <div data-testid="mock-background-media" />,
}));
vi.mock("../../main-menu/components/MusicControl", () => ({
  MusicControl: () => <div data-testid="mock-music-control" />,
}));

// Mock i18next
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-i18next")>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => {
        const dict: Record<string, string> = {
          "settings.title": "SYSTEM SETTINGS",
          "settings.subtitle":
            "Customize your player profile, audio, language, and accessibility preferences",
          "navigation.mainMenu": "Main Menu",
          "settings.sections.profile": "Profile",
          "settings.sections.controls": "Controls",
          "settings.sections.language": "Language",
          "settings.sections.audio": "Audio & Volume",
          "settings.sections.howToPlay": "How to Play",
          "settings.sections.accessibility": "Accessibility",
          "settings.sections.data": "Data & Progress",
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
          "settings.controls.hoverDesc": "Hovering reveals nutrients...",
          "settings.controls.clickTitle": "Click Exploration",
          "settings.controls.clickDesc":
            "Clicking opens detailed clinical insights...",
          "settings.controls.keyboardTitle": "Keyboard & Navigation Controls",
          "settings.controls.keyboardDesc": "Full accessibility support...",
          "settings.controls.demoTitle": "Interactive Interaction Sandbox",
          "settings.controls.demoSubtitle": "Try hovering and clicking...",
          "settings.controls.specimenName": "Sacred Tulsi (Holy Basil)",
          "settings.controls.specimenCategory": "Medicinal Botanical Herb",
          "settings.controls.specimenTooltip": "Rich in eugenol...",
          "settings.controls.drawerTitle": "Tulsi Botanical Dossier",
          "settings.controls.drawerDesc":
            "Ocimum sanctum has demonstrated adaptogenic support...",
          "settings.controls.drawerClose": "Close Dossier",
          "settings.language.title": "Language Selection",
          "settings.language.subtitle": "Switch your preferred language",
          "settings.language.selectPrompt": "Choose your language",
          "settings.language.currentNotice":
            "The interface will update immediately",
          "settings.audio.title": "Audio & Volume Controls",
          "settings.audio.subtitle":
            "Configure background music and sound effects",
          "settings.audio.musicHeading": "Atmospheric Background Music",
          "settings.audio.musicVolume": "Music Volume",
          "settings.audio.musicMute": "Mute Background Music",
          "settings.audio.musicUnmute": "Unmute Background Music",
          "settings.audio.musicPlaying": "Music is Playing",
          "settings.audio.musicMuted": "Music is Muted",
          "settings.audio.sfxHeading": "Interaction Sound Effects",
          "settings.audio.sfxVolume": "Sound Effects Volume",
          "settings.audio.sfxMute": "Mute Sound Effects",
          "settings.audio.sfxUnmute": "Unmute Sound Effects",
          "settings.audio.note":
            "Audio settings directly regulate the background music player",
          "settings.howToPlay.title": "How to Play Guide",
          "settings.howToPlay.subtitle": "Comprehensive gameplay rules",
          "settings.howToPlay.badgeNotice":
            "This guide remains 100% synchronized",
          "settings.accessibility.title": "Accessibility Options",
          "settings.accessibility.subtitle":
            "Tailor animations, text sizing, and contrast",
          "settings.accessibility.reducedMotionTitle": "Reduced Motion",
          "settings.accessibility.reducedMotionDesc":
            "Minimizes particle effects",
          "settings.accessibility.textSizeTitle": "Interface Text Size",
          "settings.accessibility.textSizeDesc":
            "Adjust interface typography scaling",
          "settings.accessibility.textSizeSmall": "Compact (Small)",
          "settings.accessibility.textSizeDefault": "Standard (Default)",
          "settings.accessibility.textSizeLarge": "Enlarged (Large)",
          "settings.accessibility.highContrastTitle": "High Contrast Mode",
          "settings.accessibility.highContrastDesc":
            "Enhances border luminescence",
          "settings.data.title": "Data & Progress Management",
          "settings.data.subtitle":
            "Review offline storage and manage botanical progression",
          "settings.data.localNotice":
            "SYLVARA stores all your game progress locally",
          "settings.data.statsHeading": "Active Local Records",
          "settings.data.resetHeading": "Reset Exploration Data",
          "settings.data.resetDesc": "Reset your Explore level progression",
          "settings.data.resetBtn": "Reset Explore Progress",
          "settings.data.modalTitle": "Confirm Reset Explore Progress",
          "settings.data.modalWarning": "Are you sure?",
          "settings.data.modalConfirm": "Yes, Reset Everything",
          "settings.data.modalCancel": "Cancel",
          "settings.data.resetSuccess": "Explore progress has been reset",
          "common.close": "Close",
        };
        return dict[key] || key;
      },
    }),
  };
});

describe("SettingsPage Integration", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      activeSection: "profile",
      username: "Seeker",
      avatarId: "seeker",
      language: "en",
    });
    useExploreStore.setState({
      currentLevel: 1,
      unlockedLevel: 1,
      completedLevels: [],
      earnedBadgeIds: [],
      completedCardIds: [],
      learningScore: 0,
    });
    useLearningsStore.setState({
      quizAttempts: {},
    });
  });

  it("renders page header, navigation sidebar, and profile section by default", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <SettingsPage />
        </MemoryRouter>
      );
    });

    expect(screen.getByText("SYSTEM SETTINGS")).toBeInTheDocument();
    expect(screen.getByText("Main Menu")).toBeInTheDocument();
    expect(screen.getByTestId("settings-profile-section")).toBeInTheDocument();
  });

  it("switches smoothly between all 7 sections via sidebar tabs without page reload", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <SettingsPage />
        </MemoryRouter>
      );
    });

    // 1. Controls section
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^Controls$/i }));
    });
    expect(screen.getByTestId("settings-controls-section")).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("controls");

    // 2. Language section
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^Language$/i }));
    });
    expect(screen.getByTestId("settings-language-section")).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("language");

    // 3. Audio section
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: /^Audio & Volume$/i })
      );
    });
    expect(screen.getByTestId("settings-audio-section")).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("audio");

    // 4. How to Play section
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^How to Play$/i }));
    });
    expect(
      screen.getByTestId("settings-how-to-play-section")
    ).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("how-to-play");

    // 5. Accessibility section
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^Accessibility$/i }));
    });
    expect(
      screen.getByTestId("settings-accessibility-section")
    ).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("accessibility");

    // 6. Data section
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: /^Data & Progress$/i })
      );
    });
    expect(screen.getByTestId("settings-data-section")).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("data");

    // 7. Back to Profile
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^Profile$/i }));
    });
    expect(screen.getByTestId("settings-profile-section")).toBeInTheDocument();
    expect(useSettingsStore.getState().activeSection).toBe("profile");
  });
});
