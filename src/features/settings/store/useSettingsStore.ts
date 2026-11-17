import { create } from "zustand";
import i18n from "../../../i18n";
import {
  type SettingsState,
  type AppLanguage,
  type AvatarId,
  type TextSize,
  type SettingsSection,
} from "../types";
import {
  DEFAULT_AVATAR,
  DEFAULT_MUSIC_VOLUME,
  DEFAULT_SFX_VOLUME,
  DEFAULT_USERNAME,
  STORAGE_AVATAR_KEY,
  STORAGE_HIGH_CONTRAST_KEY,
  STORAGE_LANGUAGE_KEY,
  STORAGE_MUSIC_MUTED_KEY,
  STORAGE_MUSIC_VOLUME_KEY,
  STORAGE_REDUCED_MOTION_KEY,
  STORAGE_SFX_MUTED_KEY,
  STORAGE_SFX_VOLUME_KEY,
  STORAGE_TEXT_SIZE_KEY,
  STORAGE_USERNAME_KEY,
} from "../constants";
import { useAppStore } from "../../../stores/useAppStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

function readStorage<T>(
  key: string,
  fallback: T,
  parser?: (raw: string) => T
): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    if (parser) return parser(raw);
    return raw as unknown as T;
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage unavailable
  }
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  activeSection: "profile",

  username: readStorage(STORAGE_USERNAME_KEY, DEFAULT_USERNAME),
  avatarId: readStorage(STORAGE_AVATAR_KEY, DEFAULT_AVATAR) as AvatarId,
  language: readStorage(STORAGE_LANGUAGE_KEY, "en") as AppLanguage,

  musicVolume: readStorage(
    STORAGE_MUSIC_VOLUME_KEY,
    DEFAULT_MUSIC_VOLUME,
    (val) => {
      const parsed = Number(val);
      return isNaN(parsed) ? DEFAULT_MUSIC_VOLUME : parsed;
    }
  ),
  isMusicMuted: readStorage(
    STORAGE_MUSIC_MUTED_KEY,
    true,
    (val) => val === "true"
  ),

  sfxVolume: readStorage(STORAGE_SFX_VOLUME_KEY, DEFAULT_SFX_VOLUME, (val) => {
    const parsed = Number(val);
    return isNaN(parsed) ? DEFAULT_SFX_VOLUME : parsed;
  }),
  isSfxMuted: readStorage(
    STORAGE_SFX_MUTED_KEY,
    false,
    (val) => val === "true"
  ),

  reducedMotion: readStorage(
    STORAGE_REDUCED_MOTION_KEY,
    false,
    (val) => val === "true"
  ),
  textSize: readStorage(STORAGE_TEXT_SIZE_KEY, "default") as TextSize,
  highContrast: readStorage(
    STORAGE_HIGH_CONTRAST_KEY,
    false,
    (val) => val === "true"
  ),

  setActiveSection: (activeSection: SettingsSection) => set({ activeSection }),

  setUsername: (name: string) => {
    const trimmed = name.trim() || DEFAULT_USERNAME;
    set({ username: trimmed });
    writeStorage(STORAGE_USERNAME_KEY, trimmed);

    // Synchronize Explore store username if initialized
    try {
      useExploreStore.setState({ username: trimmed });
    } catch {
      // ignore
    }
  },

  setAvatarId: (avatarId: AvatarId) => {
    set({ avatarId });
    writeStorage(STORAGE_AVATAR_KEY, avatarId);
  },

  setLanguage: (lang: AppLanguage) => {
    set({ language: lang });
    writeStorage(STORAGE_LANGUAGE_KEY, lang);

    // Sync with i18n
    try {
      void i18n.changeLanguage(lang);
    } catch {
      // ignore
    }

    // Sync with legacy useAppStore
    try {
      if (lang === "en" || lang === "hi") {
        useAppStore.getState().setLanguage(lang);
      }
    } catch {
      // ignore
    }
  },

  setMusicVolume: (volume: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(volume)));
    set({ musicVolume: clamped });
    writeStorage(STORAGE_MUSIC_VOLUME_KEY, String(clamped));
  },

  toggleMusicMute: () => {
    const nextMuted = !get().isMusicMuted;
    set({ isMusicMuted: nextMuted });
    writeStorage(STORAGE_MUSIC_MUTED_KEY, String(nextMuted));
  },

  setSfxVolume: (volume: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(volume)));
    set({ sfxVolume: clamped });
    writeStorage(STORAGE_SFX_VOLUME_KEY, String(clamped));
  },

  toggleSfxMute: () => {
    const nextMuted = !get().isSfxMuted;
    set({ isSfxMuted: nextMuted });
    writeStorage(STORAGE_SFX_MUTED_KEY, String(nextMuted));
  },

  setReducedMotion: (enabled: boolean) => {
    set({ reducedMotion: enabled });
    writeStorage(STORAGE_REDUCED_MOTION_KEY, String(enabled));
    if (typeof document !== "undefined") {
      document.documentElement.dataset.reducedMotion = String(enabled);
    }
  },

  setTextSize: (size: TextSize) => {
    set({ textSize: size });
    writeStorage(STORAGE_TEXT_SIZE_KEY, size);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.textSize = size;
    }
  },

  setHighContrast: (enabled: boolean) => {
    set({ highContrast: enabled });
    writeStorage(STORAGE_HIGH_CONTRAST_KEY, String(enabled));
    if (typeof document !== "undefined") {
      document.documentElement.dataset.highContrast = String(enabled);
    }
  },

  getEffectiveSfxVolume: () => {
    const { isSfxMuted, sfxVolume } = get();
    if (isSfxMuted) return 0;
    return sfxVolume / 100;
  },

  init: () => {
    const { language, reducedMotion, textSize, highContrast } = get();

    // Sync i18n
    try {
      void i18n.changeLanguage(language);
    } catch {
      // ignore
    }

    // Apply document accessibility datasets
    if (typeof document !== "undefined") {
      document.documentElement.dataset.reducedMotion = String(reducedMotion);
      document.documentElement.dataset.textSize = textSize;
      document.documentElement.dataset.highContrast = String(highContrast);
    }
  },
}));
