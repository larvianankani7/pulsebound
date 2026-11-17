import { type DifficultyTier } from "./types";

export const TOTAL_LEVELS = 25;

export const DEFAULT_USERNAME = "Explorer";
export const STORAGE_USERNAME_KEY = "sylvara_username";
export const STORAGE_PROGRESS_KEY = "sylvara_explore_progress";
export const DEXIE_PROGRESS_ID = "explore_progress";

export interface TierInfo {
  tier: DifficultyTier;
  name: string;
  minLevel: number;
  maxLevel: number;
  tagline: string;
}

export const DIFFICULTY_TIERS: Record<DifficultyTier, TierInfo> = {
  beginner: {
    tier: "beginner",
    name: "Beginner",
    minLevel: 1,
    maxLevel: 5,
    tagline: "Familiar everyday health awareness and foundational nutrition.",
  },
  intermediate: {
    tier: "intermediate",
    name: "Intermediate",
    minLevel: 6,
    maxLevel: 10,
    tagline:
      "Distinguishing digestive and systemic balance with expanded garden choices.",
  },
  advanced: {
    tier: "advanced",
    name: "Advanced",
    minLevel: 11,
    maxLevel: 15,
    tagline:
      "Nutrient interactions, biological bioavailability, and dietary synergy.",
  },
  expert: {
    tier: "expert",
    name: "Expert",
    minLevel: 16,
    maxLevel: 20,
    tagline:
      "Pathogen transmission, acute illness, and mandatory clinical red flags.",
  },
  master: {
    tier: "master",
    name: "Master",
    minLevel: 21,
    maxLevel: 25,
    tagline:
      "Complex multi-factor health decisions, debunking myths, and responsible care.",
  },
};

/**
 * Levels that trigger the "DIFFICULTY INCREASED" transition upon completion.
 * Includes Level 1 (explicitly specified) and tier completion boundaries (5, 10, 15, 20).
 */
export const DIFFICULTY_TRANSITION_LEVELS = [1, 5, 10, 15, 20] as const;

export function getTierForLevel(levelNumber: number): DifficultyTier {
  if (levelNumber <= 5) return "beginner";
  if (levelNumber <= 10) return "intermediate";
  if (levelNumber <= 15) return "advanced";
  if (levelNumber <= 20) return "expert";
  return "master";
}
