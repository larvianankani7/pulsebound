# SYLVARA Settings Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the complete, professional Settings dashboard for SYLVARA, featuring Profile customization, interactive Controls demonstration, four-language localization (EN, HI, JA, ZH), shared background audio and SFX volume controls, shared How to Play guide, accessibility adjustments, and local data progress overview with Explore reset integration.

**Architecture:**

- **Store & Persistence Layer:** Zustand store (`useSettingsStore.ts`) backed by `localStorage` and Dexie to manage profile, language, audio volume/mute, and accessibility preferences.
- **Audio Integration:** Bridge `useSettingsStore` with the shared `MusicControl` YouTube background player and Web Audio API synthesisers (`soundEffects.ts`, `exploreAudio.ts`) for real-time volume and mute control.
- **Localization Layer:** `i18next` + `react-i18next` dictionary architecture with 4 complete language packs (`en`, `hi`, `ja`, `zh`) covering navigation, settings, findings, explore, learnings, quizzes, and how-to-play.
- **Shared Content Layer:** Canonical How-to-Play guide data (`howToPlayData.ts`) used synchronously by both Explore's `HowToPlayModal` and Settings' `HowToPlaySection`.
- **UI & Presentation Layer:** Responsive split dashboard with sidebar tabs (Profile, Controls, Language, Audio, How to Play, Accessibility, Data), lavender glassmorphic styling, interactive controls demonstration widget, accessible focus indicators, and responsive mobile collapse.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React, i18next, react-i18next, Dexie IndexedDB, Vitest, Testing Library.

**Spec:** User prompt: _AGY IMPLEMENTATION PROMPT — SYLVARA SETTINGS PAGE_.

---

## Global Constraints

- Retain established SYLVARA visual identity (dark black `#07050a`, lavender `#c084fc`, violet gradients, glassmorphism, glowing borders).
- Do not redesign previously approved pages (Main Menu, About, Findings, Explore, Learnings).
- Four working languages: English (default), Hindi, Japanese, Simplified Chinese. Immediate UI translation without page reload.
- Audio volume slider must control the actual background YouTube music player and persist across all pages.
- Reuse canonical source of truth for How to Play between Explore and Settings.
- Reset Explore resets only game progress and dependent quiz unlocks, never deleting user profile, audio, or accessibility preferences.
- Zero external backend or server-side databases.

---

### Task 1: Settings Store, Type Definitions, and Audio Bridge

**Files:**

- Create: `src/features/settings/types.ts`
- Create: `src/features/settings/constants.ts`
- Create: `src/features/settings/store/useSettingsStore.ts`
- Modify: `src/stores/useAppStore.ts`
- Modify: `src/features/main-menu/components/MusicControl.tsx`
- Modify: `src/features/main-menu/utils/soundEffects.ts`
- Modify: `src/features/explore/utils/exploreAudio.ts`
- Test: `src/features/settings/__tests__/settingsStore.test.ts`

**Interfaces:**

- `SettingsSection`: `"profile" | "controls" | "language" | "audio" | "how-to-play" | "accessibility" | "data"`
- `AppLanguage`: `"en" | "hi" | "ja" | "zh"`
- `TextSize`: `"small" | "default" | "large"`
- `AvatarId`: `"seeker" | "herbalist" | "alchemist" | "botanist" | "sage" | "druid"`
- `useSettingsStore` actions: `setUsername`, `setAvatarId`, `setLanguage`, `setMusicVolume`, `toggleMusicMute`, `setSfxVolume`, `toggleSfxMute`, `setReducedMotion`, `setTextSize`, `setHighContrast`, `init`

---

### Task 2: Multi-Language Localization System (EN, HI, JA, ZH)

**Files:**

- Modify: `src/i18n/index.ts`
- Modify: `src/i18n/locales/en/common.json`
- Modify: `src/i18n/locales/hi/common.json`
- Create: `src/i18n/locales/ja/common.json`
- Create: `src/i18n/locales/zh/common.json`
- Test: `src/features/settings/__tests__/i18n.test.ts`

**Interfaces:**

- Translations covering brand, navigation, settings, findings, explore, learnings, quizzes, how to play, audio, accessibility, and data reset.
- Immediate switching via `i18n.changeLanguage()`.

---

### Task 3: Shared How to Play Content Data Architecture

**Files:**

- Create: `src/features/explore/data/howToPlayData.ts`
- Modify: `src/features/explore/components/HowToPlayModal.tsx`
- Create: `src/features/settings/components/HowToPlaySection.tsx`
- Test: `src/features/settings/__tests__/howToPlay.test.tsx`

**Interfaces:**

- Canonical `HOW_TO_PLAY_SECTIONS` data structure shared between Explore modal and Settings page.

---

### Task 4: Profile & Controls Demonstration Sections

**Files:**

- Create: `src/features/settings/components/ProfileSection.tsx`
- Create: `src/features/settings/components/ControlsSection.tsx`
- Test: `src/features/settings/__tests__/profileAndControls.test.tsx`

**Interfaces:**

- Profile editing (username validation, avatar selector, live stats from Explore & Learnings).
- Controls explanation with interactive hover & click preview widget.

---

### Task 5: Language, Audio, and Accessibility Sections

**Files:**

- Create: `src/features/settings/components/LanguageSection.tsx`
- Create: `src/features/settings/components/AudioSection.tsx`
- Create: `src/features/settings/components/AccessibilitySection.tsx`
- Modify: `src/styles/index.css` (text sizes & high-contrast styling)
- Test: `src/features/settings/__tests__/audioAndAccessibility.test.tsx`

**Interfaces:**

- Real-time music & SFX volume sliders, mute toggles.
- Language picker with native labels.
- Text size radio options, reduced motion toggle, high contrast toggle.

---

### Task 6: Data & Progress Section & Reset Integration

**Files:**

- Create: `src/features/settings/components/DataProgressSection.tsx`
- Create: `src/features/settings/components/SettingsResetModal.tsx`
- Test: `src/features/settings/__tests__/dataProgress.test.tsx`

**Interfaces:**

- Local storage progress overview.
- Reset Explore modal invoking `useExploreStore.resetProgress()` without touching settings/profile.

---

### Task 7: Settings Dashboard Shell, Navigation & Router Integration

**Files:**

- Create: `src/features/settings/components/SettingsSidebar.tsx`
- Create: `src/features/settings/components/SettingsHeader.tsx`
- Create: `src/features/settings/SettingsPage.tsx`
- Modify: `src/app/router.tsx`
- Test: `src/features/settings/__tests__/SettingsPage.test.tsx`

**Interfaces:**

- Left sidebar with 7 section tabs and icons, responsive mobile tabs, shared background media and music player.

---

### Task 8: Full Verification & Quality Assurance

**Run:**

- `npm run test:run`
- `npm run lint`
- `npm run format:check`
- `npm run build`
