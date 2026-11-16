# SYLVARA

**Every meal uncovers a tale, and every tale opens a new world.**

A frontend-only, bilingual (English + Hindi) food-and-nature learning game.

## 1. Requirements

- Node.js LTS (use the current LTS release)
- npm (included with Node.js)
- VS Code or another code editor

Check your installation:

```bash
node -v
npm -v
```

## 2. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

## 3. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/`).

## 4. Useful commands

```bash
npm run build       # Type-check and create production build
npm run preview     # Preview production build locally
npm run test        # Run unit tests in watch mode
npm run test:run    # Run unit tests once
npm run lint        # Check code quality
npm run format      # Format project files
npm run test:e2e    # Run Playwright end-to-end tests
```

For Playwright's browser binaries, run this once after installing dependencies:

```bash
npx playwright install
```

## 5. Project architecture

This is a **frontend-only modular monolith**. Do not add a backend, server API, cloud database, or server-side authentication as part of the agreed baseline.

- React + TypeScript + Vite: application foundation
- Tailwind CSS: styling
- React Router: navigation
- Zustand: active UI/game state
- Dexie + IndexedDB: structured local persistence
- localStorage: small preferences
- Zod: data validation
- i18next + react-i18next: English/Hindi
- Motion: interface and game animations
- Lucide React: icons
- Vitest + Testing Library: unit/component tests
- Playwright: end-to-end tests

Progress is stored locally in the user's browser/device. It will not automatically sync between devices.

## 6. Planned application sections

1. Findings
2. Explore
3. Learnings
4. Settings
5. About

## 7. Important product rules

- Do not add calorie counts, macro counts, numerical nutrition scores, or daily targets.
- Use verified, appropriately licensed food-composition data; never invent nutrient values.
- Unknown nutrient values must remain unknown, not be treated as zero.
- Describe meal gaps cautiously as areas that may be underrepresented; do not diagnose deficiencies from one meal.
- Distinguish traditional plant uses from scientific evidence and proven medicines. Do not encourage self-medication.
- Quizzes contain exactly three questions and have one attempt per unlock.
- Support desktop hover and mobile tap interactions.
- Build English and Hindi support from the beginning.

## 8. Folder guide

See `src/` for the application code and `docs/` for architecture notes and project decisions.
