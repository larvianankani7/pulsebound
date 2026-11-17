import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSection } from "../components/LanguageSection";
import { AudioSection } from "../components/AudioSection";
import { AccessibilitySection } from "../components/AccessibilitySection";
import { useSettingsStore } from "../store/useSettingsStore";

// Mock i18next
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-i18next")>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => {
        const dict: Record<string, string> = {
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
        };
        return dict[key] || key;
      },
    }),
  };
});

describe("LanguageSection", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({ language: "en" });
  });

  it("renders all four languages and allows switching language", () => {
    render(<LanguageSection />);

    expect(screen.getAllByText("English").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("हिन्दी")).toBeInTheDocument();
    expect(screen.getByText("日本語")).toBeInTheDocument();
    expect(screen.getByText("简体中文")).toBeInTheDocument();

    const hindiBtn = screen.getByRole("button", { name: /हिन्दी/i });
    fireEvent.click(hindiBtn);

    expect(useSettingsStore.getState().language).toBe("hi");
    expect(localStorage.getItem("sylvara_language")).toBe("hi");
  });
});

describe("AudioSection", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      musicVolume: 40,
      isMusicMuted: false,
      sfxVolume: 70,
      isSfxMuted: false,
    });
  });

  it("controls music volume and mute toggle", () => {
    render(<AudioSection />);

    const musicSlider = screen.getByLabelText("Music Volume");
    expect(musicSlider).toHaveValue("40");

    fireEvent.change(musicSlider, { target: { value: "65" } });
    expect(useSettingsStore.getState().musicVolume).toBe(65);

    const muteBtn = screen.getByRole("button", {
      name: /mute background music/i,
    });
    fireEvent.click(muteBtn);
    expect(useSettingsStore.getState().isMusicMuted).toBe(true);

    const unmuteBtn = screen.getByRole("button", {
      name: /unmute background music/i,
    });
    fireEvent.click(unmuteBtn);
    expect(useSettingsStore.getState().isMusicMuted).toBe(false);
  });

  it("controls SFX volume and SFX mute toggle", () => {
    render(<AudioSection />);

    const sfxSlider = screen.getByLabelText("Sound Effects Volume");
    expect(sfxSlider).toHaveValue("70");

    fireEvent.change(sfxSlider, { target: { value: "90" } });
    expect(useSettingsStore.getState().sfxVolume).toBe(90);

    const sfxMuteBtn = screen.getByRole("button", {
      name: /mute sound effects/i,
    });
    fireEvent.click(sfxMuteBtn);
    expect(useSettingsStore.getState().isSfxMuted).toBe(true);
  });
});

describe("AccessibilitySection", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      reducedMotion: false,
      textSize: "default",
      highContrast: false,
    });
  });

  it("toggles reduced motion switch and sets document attribute", () => {
    render(<AccessibilitySection />);

    const switchBtn = screen.getAllByRole("switch")[0];
    expect(switchBtn).toHaveAttribute("aria-checked", "false");

    fireEvent.click(switchBtn);
    expect(useSettingsStore.getState().reducedMotion).toBe(true);
    expect(document.documentElement.getAttribute("data-reduced-motion")).toBe(
      "true"
    );
  });

  it("selects text size and updates document attribute", () => {
    render(<AccessibilitySection />);

    const largeBtn = screen.getByRole("button", {
      name: /enlarged \(large\)/i,
    });
    fireEvent.click(largeBtn);

    expect(useSettingsStore.getState().textSize).toBe("large");
    expect(document.documentElement.getAttribute("data-text-size")).toBe(
      "large"
    );
  });

  it("toggles high contrast mode and updates document attribute", () => {
    render(<AccessibilitySection />);

    const highContrastSwitch = screen.getAllByRole("switch")[1];
    expect(highContrastSwitch).toHaveAttribute("aria-checked", "false");

    fireEvent.click(highContrastSwitch);
    expect(useSettingsStore.getState().highContrast).toBe(true);
    expect(document.documentElement.getAttribute("data-high-contrast")).toBe(
      "true"
    );
  });
});
