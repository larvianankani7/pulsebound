# SYLVARA Explore Page (25-Level Educational Garden) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the complete 25-level, garden-based educational challenge for the SYLVARA Explore page, featuring sequential level progression, interactive radial garden item exploration, accurate evidence-based health guidance, post-success learning cards, 25 unique badge awards, and offline persistence.

**Architecture:**

- Domain Data Layer: Data-driven 25-level catalogue (`levels.ts`), 29+ illustrated items (`gardenItems.ts`), 25 unique badges (`badges.ts`), and comprehensive evidence-based educational learning cards (`learningContent.ts`).
- State & Persistence Layer: Zustand store (`useExploreStore.ts`) backed by Dexie IndexedDB (`db.ts`) with fallback synchronization to preserve unlocked level, earned badges, and learning scores.
- Audio & Visual Aesthetics: Web Audio API sound synthesis (`exploreAudio.ts`), dark lavender glassmorphism, radial/circular orbit positioning (`radialLayout.ts`), floating animation, atmospheric particles (`GardenEnvironment.tsx`), and bespoke SVG illustrations.
- Sequence Orchestration: Selection -> Answer Validation -> Failure Overlay or Learning Card -> Badge Unlock Award -> Difficulty Tier Transition (if applicable) -> Next Level.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Motion (`motion/react`), Lucide React, Dexie, Web Audio API, Vitest, Testing Library.

**Spec:** User prompt: _AGY IMPLEMENTATION PROMPT — SYLVARA EXPLORE PAGE_.

## Global Constraints

- Exactly 25 sequential levels; no skipping; level 1 unlocked initially, 2-25 locked.
- Never portray food/plants as curing infectious diseases (e.g., pneumonia, dengue, malaria require medical attention).
- Strictly zero duplicate badges or learning points on replaying earlier levels.
- Re-use exact BackgroundMedia (`/videos/menu-bg.mp4`) and MusicControl (`UrngDTXkOEk`).
- Retain SYLVARA's dark lavender, violet, and black aesthetic matching Main Menu, About, and Findings.
- No modifications to Main Menu, About, Findings, or Settings.
- Full local offline execution (no external servers or paid cloud APIs).

---

### Task 1: Core Type Definitions & Constants

**Files:**

- Create: `src/features/explore/types.ts`
- Create: `src/features/explore/constants.ts`

**Interfaces:**

- `GardenItemCategory`: `"herb"` | `"fruit"` | `"vegetable"` | `"action"` | `"medical"`
- `GardenItem`: id, name, category, nutrients, benefits, traditionalUseNotes, evidenceNote, foodExamples, safetyNotes, illustrationId
- `DifficultyTier`: `"beginner"` | `"intermediate"` | `"advanced"` | `"expert"` | `"master"`
- `ExploreLevel`: id, levelNumber, conditionName, conditionId, scenarioText, difficultyTier, availableItemIds, correctItemIds, hint, learningContentId, badgeId, references
- `BadgeInfo`: id, name, description, levelNumber, iconId
- `LearningContent`: id, conditionName, topics A-H (whatIsIt, howItHappens, isCommunicable, communicableExplanation, nutrition, precautions, supportiveCare, medicalTreatment, whenToSeekHelp), plantNotes, sources
- `ExploreProgressState`: unlockedLevel, currentLevel, completedLevels, earnedBadgeIds, learningScore, completedCardIds, isHintOpen, isHowToPlayOpen, selectedItemIds, gameState

---

### Task 2: Data Models & Educational Catalog

**Files:**

- Create: `src/features/explore/data/gardenItems.ts`
- Create: `src/features/explore/data/badges.ts`
- Create: `src/features/explore/data/learningContent.ts`
- Create: `src/features/explore/data/levels.ts`
- Test: `src/features/explore/__tests__/exploreData.test.ts`

**Interfaces:**

- Consumes: Types from `src/features/explore/types.ts`.
- Produces: `GARDEN_ITEMS`, `EXPLORE_BADGES`, `LEARNING_CONTENTS`, `EXPLORE_LEVELS`.

---

### Task 3: Vector Illustration Library

**Files:**

- Create: `src/features/explore/components/illustrations/GardenItemIllustrations.tsx`
- Create: `src/features/explore/components/illustrations/BadgeIllustrations.tsx`
- Create: `src/features/explore/components/illustrations/ConditionIllustrations.tsx`

**Interfaces:**

- Consumes: Illustration IDs.
- Produces: Vector SVG components with dark lavender gradients, glowing halos, and crisp geometry.

---

### Task 4: Audio Synthesizer & Radial Layout Utilities

**Files:**

- Create: `src/features/explore/utils/exploreAudio.ts`
- Create: `src/features/explore/utils/radialLayout.ts`

**Interfaces:**

- Produces: `playSuccessSound()`, `playErrorSound()`, `playChimeSound()`, `playLevelUpSound()`, `getRadialCoordinates()`.

---

### Task 5: State Management & Persistence

**Files:**

- Create: `src/features/explore/store/exploreStorage.ts`
- Create: `src/features/explore/store/useExploreStore.ts`
- Test: `src/features/explore/__tests__/store.test.ts`

**Interfaces:**

- Integrates with Dexie database in `src/database/db.ts` under table `userProgress` (`id: "explore_progress"`).
- Persists: unlockedLevel, completedLevels, earnedBadgeIds, learningScore, completedCardIds.

---

### Task 6: Explore Page UI Components

**Files:**

- Create: `src/features/explore/components/ExploreNavbar.tsx`
- Create: `src/features/explore/components/LevelObjective.tsx`
- Create: `src/features/explore/components/GardenEnvironment.tsx`
- Create: `src/features/explore/components/GardenItemTooltip.tsx`
- Create: `src/features/explore/components/GardenItem.tsx`
- Create: `src/features/explore/components/GardenRadialLayout.tsx`
- Create: `src/features/explore/components/SelectionControls.tsx`
- Create: `src/features/explore/components/HintModal.tsx`
- Create: `src/features/explore/components/HowToPlayModal.tsx`
- Create: `src/features/explore/components/IncorrectAnswer.tsx`
- Create: `src/features/explore/components/LearningCard.tsx`
- Create: `src/features/explore/components/BadgeUnlock.tsx`
- Create: `src/features/explore/components/DifficultyTransition.tsx`
- Create: `src/features/explore/components/FinalCompletion.tsx`

---

### Task 7: Main ExplorePage Assembly & Router Integration

**Files:**

- Create: `src/features/explore/ExplorePage.tsx`
- Modify: `src/app/router.tsx`

---

### Task 8: Comprehensive Automated Tests & Verification

**Files:**

- Create: `src/features/explore/__tests__/exploreData.test.ts`
- Create: `src/features/explore/__tests__/validation.test.ts`
- Create: `src/features/explore/__tests__/store.test.ts`
- Create: `src/features/explore/__tests__/ExplorePage.test.tsx`

---

### Task 9: Quality & Regression Audits

- Verify all Vitest test suites run clean.
- Verify ESLint and Prettier.
- Verify production build.
