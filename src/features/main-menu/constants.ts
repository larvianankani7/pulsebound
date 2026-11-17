import { type NavigationItem } from "./types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "findings",
    name: "Findings",
    path: "/findings",
    translationKey: "navigation.findings",
    subtitle: "Vitality Matrix & Recovery Simulator",
  },
  {
    id: "explore",
    name: "Explore",
    path: "/explore",
    translationKey: "navigation.explore",
    subtitle: "Bio-Kinetic Trials & Progression",
  },
  {
    id: "learnings",
    name: "Learnings",
    path: "/learnings",
    translationKey: "navigation.learnings",
    subtitle: "Codex of Vitality & Quizzes",
  },
  {
    id: "settings",
    name: "Settings",
    path: "/settings",
    translationKey: "navigation.settings",
    subtitle: "Audio, Display & Profile Controls",
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    translationKey: "navigation.about",
    subtitle: "IdeaLab Hacks Dossier & Architecture",
  },
];
