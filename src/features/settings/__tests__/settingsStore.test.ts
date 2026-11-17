import { describe, it, expect, beforeEach } from "vitest";
import { useSettingsStore } from "../store/useSettingsStore";

describe("Settings Store & Audio Bridge", () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      username: "Seeker",
      avatarId: "seeker",
      language: "en",
      musicVolume: 25,
      isMusicMuted: true,
      sfxVolume: 80,
      isSfxMuted: false,
      reducedMotion: false,
      textSize: "default",
      highContrast: false,
      activeSection: "profile",
    });
  });

  it("initializes with expected default values", () => {
    const state = useSettingsStore.getState();
    expect(state.username).toBe("Seeker");
    expect(state.avatarId).toBe("seeker");
    expect(state.language).toBe("en");
    expect(state.musicVolume).toBe(25);
    expect(state.isMusicMuted).toBe(true);
    expect(state.sfxVolume).toBe(80);
    expect(state.isSfxMuted).toBe(false);
    expect(state.reducedMotion).toBe(false);
    expect(state.textSize).toBe("default");
    expect(state.highContrast).toBe(false);
  });

  it("updates username and persists to localStorage", () => {
    const store = useSettingsStore.getState();
    store.setUsername("Linnea");

    expect(useSettingsStore.getState().username).toBe("Linnea");
    expect(localStorage.getItem("sylvara_username")).toBe("Linnea");
  });

  it("updates avatar selection and persists", () => {
    const store = useSettingsStore.getState();
    store.setAvatarId("herbalist");

    expect(useSettingsStore.getState().avatarId).toBe("herbalist");
    expect(localStorage.getItem("sylvara_avatar")).toBe("herbalist");
  });

  it("updates language and persists", () => {
    const store = useSettingsStore.getState();
    store.setLanguage("hi");

    expect(useSettingsStore.getState().language).toBe("hi");
    expect(localStorage.getItem("sylvara_language")).toBe("hi");
  });

  it("controls music volume and mute state independently", () => {
    const store = useSettingsStore.getState();

    store.setMusicVolume(65);
    expect(useSettingsStore.getState().musicVolume).toBe(65);
    expect(localStorage.getItem("sylvara_music_volume")).toBe("65");

    store.toggleMusicMute();
    expect(useSettingsStore.getState().isMusicMuted).toBe(false);
    expect(localStorage.getItem("sylvara_music_muted")).toBe("false");

    store.toggleMusicMute();
    expect(useSettingsStore.getState().isMusicMuted).toBe(true);
    expect(localStorage.getItem("sylvara_music_muted")).toBe("true");
  });

  it("controls SFX volume and mute state independently", () => {
    const store = useSettingsStore.getState();

    store.setSfxVolume(40);
    expect(useSettingsStore.getState().sfxVolume).toBe(40);
    expect(localStorage.getItem("sylvara_sfx_volume")).toBe("40");

    store.toggleSfxMute();
    expect(useSettingsStore.getState().isSfxMuted).toBe(true);
    expect(localStorage.getItem("sylvara_sfx_muted")).toBe("true");

    expect(store.getEffectiveSfxVolume()).toBe(0);

    store.toggleSfxMute();
    expect(store.getEffectiveSfxVolume()).toBe(0.4);
  });

  it("updates accessibility options and persists", () => {
    const store = useSettingsStore.getState();

    store.setReducedMotion(true);
    expect(useSettingsStore.getState().reducedMotion).toBe(true);
    expect(localStorage.getItem("sylvara_reduced_motion")).toBe("true");

    store.setTextSize("large");
    expect(useSettingsStore.getState().textSize).toBe("large");
    expect(localStorage.getItem("sylvara_text_size")).toBe("large");

    store.setHighContrast(true);
    expect(useSettingsStore.getState().highContrast).toBe(true);
    expect(localStorage.getItem("sylvara_high_contrast")).toBe("true");
  });
});
