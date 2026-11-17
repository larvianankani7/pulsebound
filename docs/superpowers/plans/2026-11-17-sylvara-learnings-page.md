# SYLVARA Learnings & Quizzes Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the complete Learnings and Quizzes page for SYLVARA integrating with Explore game progression, earned badges, unlocked learning content, one-attempt persistent quizzes, and Explore reset synchronization.

**Architecture:**

- **Domain & Content Layer:** Comprehensive 25-quiz educational dataset (`src/features/learnings/data/quizzes.ts`) mapped 1:1 with Explore levels (`level_1`..`level_25`), badges (`badge_1`..`badge_25`), and learning contents (`learn_1`..`learn_25`).
- **State & Persistence Layer:** Zustand store (`useLearningsStore.ts`) backed by Dexie IndexedDB (`db.ts`) with `localStorage` fallback to track active sections, quiz attempts, scores, and review modes. Cross-store integration ensures Explore reset automatically relocks quizzes and removes dependent attempts.
- **UI & Presentation Layer:** Split-layout with responsive sidebar navigation (Learnings vs Quizzes), unlocked lesson grid, rich multi-card educational detail view, locked/unlocked/completed quiz cards, top-left badges & quiz progress overview, 3-question step-by-step interactive quiz runner with instant feedback, final score category reveal, and read-only attempt review.
- **Visual Identity:** Deep black and violet palette (`#07050a`), lavender gradients (`#c084fc`, `#a855f7`), glassmorphism cards, glowing borders, smooth Motion animations, reused `BackgroundMedia` and `MusicControl`.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React, Dexie IndexedDB, Vitest, Testing Library.

**Spec:** User prompt: _AGY IMPLEMENTATION PROMPT — SYLVARA LEARNINGS PAGE_.

---

## Global Constraints

- Never redesign previously approved pages (Main Menu, About, Findings, Explore).
- Two dedicated sidebar sections: Learnings and Quizzes.
- Learnings only show earned/unlocked lessons from Explore; no locked lessons shown as earned; no duplicates.
- Quizzes unlock STRICTLY via corresponding earned Explore badge IDs (stable ID mapping).
- Exactly 3 questions per quiz; questions presented one at a time with instant feedback.
- Final scoring categories must match exact titles:
  - 0 / 3: "Better Luck Next Time!"
  - 1 / 3: "Learning"
  - 2 / 3: "Well Explored"
  - 3 / 3: "Mastered"
- One-attempt rule: strictly one attempt per unlocked quiz; persisted in Dexie and localStorage; completed quizzes cannot be retaken, only reviewed.
- Explore Reset clears earned learnings, relocks dependent quizzes, and clears dependent quiz attempt records.
- Full local offline execution without backend, external DB, or external authentication.

---

### Task 1: Learnings & Quizzes Type Definitions and Scoring Helpers

**Files:**

- Create: `src/features/learnings/types.ts`
- Create: `src/features/learnings/constants.ts`
- Create: `src/features/learnings/utils/scoring.ts`
- Test: `src/features/learnings/__tests__/scoring.test.ts`

**Interfaces:**

- `LearningsSection`: `"learnings" | "quizzes"`
- `QuizResultCategory`: `"Better Luck Next Time!" | "Learning" | "Well Explored" | "Mastered"`
- `QuizQuestion`: `id`, `question`, `options`, `correctIndex`, `explanation`, `takeaway`
- `QuizDefinition`: `id`, `levelNumber`, `levelId`, `badgeId`, `learningContentId`, `conditionName`, `title`, `description`, `questions: [QuizQuestion, QuizQuestion, QuizQuestion]`
- `QuizAttemptRecord`: `quizId`, `score`, `selectedAnswers: number[]`, `completedAt: string`, `resultCategory: QuizResultCategory`
- `LearningsProgressData`: `quizAttempts: Record<string, QuizAttemptRecord>`
- `getQuizResultCategory(score: number): QuizResultCategory`

---

### Task 2: 25-Quiz Educational Dataset & Badge Mapping

**Files:**

- Create: `src/features/learnings/data/quizzes.ts`
- Test: `src/features/learnings/__tests__/quizzesData.test.ts`

**Interfaces:**

- `QUIZZES: Record<string, QuizDefinition>`: Exactly 25 quizzes mapped to `level_1`..`level_25`, `badge_1`..`badge_25`, and `learn_1`..`learn_25`.
- Each quiz contains exactly 3 verified evidence-based questions with 4 options each, valid `correctIndex` (0..3), and explanations.

---

### Task 3: Learnings & Quiz Storage and Persistence Layer

**Files:**

- Create: `src/features/learnings/store/learningsStorage.ts`
- Create: `src/features/learnings/store/useLearningsStore.ts`
- Modify: `src/features/explore/store/useExploreStore.ts` (hook reset cleanup)
- Test: `src/features/learnings/__tests__/store.test.ts`

**Interfaces:**

- `loadLearningsProgress(): Promise<LearningsProgressData>`
- `saveLearningsProgress(data: LearningsProgressData): Promise<void>`
- `clearLearningsPersistedData(): Promise<void>`
- `useLearningsStore`:
  - `activeSection: LearningsSection`
  - `selectedLearningId: string | null`
  - `activeQuizId: string | null`
  - `quizStep: "intro" | "question" | "feedback" | "result" | "review"`
  - `currentQuestionIndex: number`
  - `selectedOptionIndex: number | null`
  - `currentAttemptAnswers: number[]`
  - `quizAttempts: Record<string, QuizAttemptRecord>`
  - Actions: `setActiveSection`, `selectLearning`, `startQuiz`, `selectQuizOption`, `submitCurrentAnswer`, `nextQuestion`, `finishQuiz`, `openQuizReview`, `exitQuiz`, `resetQuizProgress`

---

### Task 4: Learnings Sidebar Navigation & Page Shell

**Files:**

- Create: `src/features/learnings/components/LearningsSidebar.tsx`
- Create: `src/features/learnings/components/LearningsHeader.tsx`
- Create: `src/features/learnings/LearningsPage.tsx`
- Modify: `src/app/router.tsx`
- Test: `src/features/learnings/__tests__/LearningsPage.test.tsx`

**Interfaces:**

- Sidebar with Learnings and Quizzes tabs, glowing active state, mobile responsive collapse.
- Atmospheric background video (`/videos/menu-bg.mp4`) and music player (`UrngDTXkOEk`).
- Section switching without full page reload.

---

### Task 5: Learnings Section — Grid, Cards & Detailed View

**Files:**

- Create: `src/features/learnings/components/LearningCardItem.tsx`
- Create: `src/features/learnings/components/LearningCardGrid.tsx`
- Create: `src/features/learnings/components/LearningsEmptyState.tsx`
- Create: `src/features/learnings/components/LearningDetailView.tsx`
- Test: `src/features/learnings/__tests__/LearningsSection.test.tsx`

**Interfaces:**

- Renders only earned lessons from Explore (`completedCardIds` / `completedLevels`).
- Empty state if no lessons unlocked with CTA to Explore.
- Detail view with categorized educational sections, bullets, safety notes, sources, and back button.

---

### Task 6: Quizzes Section — Top-Left Progress & Quiz Cards

**Files:**

- Create: `src/features/learnings/components/QuizzesProgressHeader.tsx`
- Create: `src/features/learnings/components/QuizCardItem.tsx`
- Create: `src/features/learnings/components/QuizCardGrid.tsx`
- Test: `src/features/learnings/__tests__/QuizzesSection.test.tsx`

**Interfaces:**

- Top-left progress info: total badges earned, quiz score, visual progress bar.
- Quiz cards: Locked (missing badge, unclickable), Unlocked (earned badge, start button), Completed (shows score & category, review button).

---

### Task 7: Dedicated Quiz Experience & Result Screen

**Files:**

- Create: `src/features/learnings/components/QuizIntro.tsx`
- Create: `src/features/learnings/components/QuizQuestionStep.tsx`
- Create: `src/features/learnings/components/QuizFeedbackStep.tsx`
- Create: `src/features/learnings/components/QuizResultScreen.tsx`
- Create: `src/features/learnings/components/QuizReviewScreen.tsx`
- Create: `src/features/learnings/components/QuizRunnerModal.tsx`
- Test: `src/features/learnings/__tests__/QuizRunner.test.tsx`

**Interfaces:**

- 3 questions presented sequentially.
- Disabled submit until option selected.
- Immediate feedback with explanation and takeaway.
- Final scoring with exact category titles and smooth reveal.
- One-attempt enforcement in state and persistence.
- Read-only review mode for completed quizzes.

---

### Task 8: Explore Reset Integration & End-to-End Verification

**Files:**

- Modify: `src/features/explore/store/useExploreStore.ts`
- Test: `src/features/learnings/__tests__/integrationReset.test.tsx`
- Run: `npm run test:run`, `npm run lint`, `npm run format:check`, `npm run build`

**Interfaces:**

- Explore reset relocks quizzes and removes dependent attempts.
- All test suites pass without regression.
