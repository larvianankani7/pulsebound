export type SettingsSection =
  | "profile"
  | "controls"
  | "language"
  | "audio"
  | "how-to-play"
  | "accessibility"
  | "data";

export type AppLanguage = "en" | "hi" | "ja" | "zh";

export type TextSize = "small" | "default" | "large";

export type AvatarId =
  "seeker" | "herbalist" | "alchemist" | "botanist" | "sage" | "druid";

export interface AvatarInfo {
  id: AvatarId;
  name: string;
  title: string;
  description: string;
  gradient: string;
}

export interface SettingsState {
  activeSection: SettingsSection;
  username: string;
  avatarId: AvatarId;
  language: AppLanguage;

  // Audio settings
  musicVolume: number; // 0..100
  isMusicMuted: boolean;
  sfxVolume: number; // 0..100
  isSfxMuted: boolean;

  // Accessibility settings
  reducedMotion: boolean;
  textSize: TextSize;
  highContrast: boolean;

  // Actions
  setActiveSection: (section: SettingsSection) => void;
  setUsername: (name: string) => void;
  setAvatarId: (avatarId: AvatarId) => void;
  setLanguage: (lang: AppLanguage) => void;
  setMusicVolume: (volume: number) => void;
  toggleMusicMute: () => void;
  setSfxVolume: (volume: number) => void;
  toggleSfxMute: () => void;
  setReducedMotion: (enabled: boolean) => void;
  setTextSize: (size: TextSize) => void;
  setHighContrast: (enabled: boolean) => void;
  getEffectiveSfxVolume: () => number;
  init: () => void;
}
