import { db } from "../../../database/db";
import { type ExploreProgressData } from "../types";
import {
  DEFAULT_USERNAME,
  DEXIE_PROGRESS_ID,
  STORAGE_PROGRESS_KEY,
  STORAGE_USERNAME_KEY,
} from "../constants";

export const INITIAL_PROGRESS_DATA: ExploreProgressData = {
  unlockedLevel: 1,
  completedLevels: [],
  earnedBadgeIds: [],
  learningScore: 0,
  completedCardIds: [],
};

/**
 * Loads persisted explore progress from Dexie IndexedDB with localStorage fallback.
 */
export async function loadExploreProgress(): Promise<ExploreProgressData> {
  try {
    // 1. Attempt Dexie IndexedDB lookup
    const record = await db.userProgress.get(DEXIE_PROGRESS_ID);
    if (record && record.data) {
      const data = record.data as Partial<ExploreProgressData>;
      return {
        unlockedLevel:
          typeof data.unlockedLevel === "number" ? data.unlockedLevel : 1,
        completedLevels: Array.isArray(data.completedLevels)
          ? data.completedLevels
          : [],
        earnedBadgeIds: Array.isArray(data.earnedBadgeIds)
          ? data.earnedBadgeIds
          : [],
        learningScore:
          typeof data.learningScore === "number" ? data.learningScore : 0,
        completedCardIds: Array.isArray(data.completedCardIds)
          ? data.completedCardIds
          : [],
      };
    }
  } catch {
    // IndexedDB may be unavailable in certain private browsing modes
  }

  // 2. Fallback to localStorage
  try {
    const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<ExploreProgressData>;
      return {
        unlockedLevel:
          typeof parsed.unlockedLevel === "number" ? parsed.unlockedLevel : 1,
        completedLevels: Array.isArray(parsed.completedLevels)
          ? parsed.completedLevels
          : [],
        earnedBadgeIds: Array.isArray(parsed.earnedBadgeIds)
          ? parsed.earnedBadgeIds
          : [],
        learningScore:
          typeof parsed.learningScore === "number" ? parsed.learningScore : 0,
        completedCardIds: Array.isArray(parsed.completedCardIds)
          ? parsed.completedCardIds
          : [],
      };
    }
  } catch {
    // LocalStorage fallback
  }

  return { ...INITIAL_PROGRESS_DATA };
}

/**
 * Persists explore progress to both Dexie IndexedDB and localStorage synchronously/async.
 */
export async function saveExploreProgress(
  data: ExploreProgressData
): Promise<void> {
  // Sync mirror to localStorage
  try {
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable
  }

  // Durable store in Dexie IndexedDB
  try {
    await db.userProgress.put({
      id: DEXIE_PROGRESS_ID,
      completedAt: new Date().toISOString(),
      data: {
        unlockedLevel: data.unlockedLevel,
        completedLevels: data.completedLevels,
        earnedBadgeIds: data.earnedBadgeIds,
        learningScore: data.learningScore,
        completedCardIds: data.completedCardIds,
      },
    });
  } catch {
    // Fallback gracefully
  }
}

/**
 * Completely clears Explore-specific persisted progress from Dexie IndexedDB and localStorage
 * and restores clean initial Level 1 progress.
 * Does NOT delete user profile, settings, findings, or other application data.
 */
export async function clearExplorePersistedData(): Promise<void> {
  try {
    await db.userProgress.delete(DEXIE_PROGRESS_ID);
  } catch {
    // Graceful fallback
  }

  try {
    localStorage.removeItem(STORAGE_PROGRESS_KEY);
  } catch {
    // Graceful fallback
  }

  // Persist clean initial baseline
  await saveExploreProgress(INITIAL_PROGRESS_DATA);
}

/**
 * Retrieves the user's saved username from Settings or localStorage.
 */
export function getSavedUsername(): string {
  try {
    const saved = localStorage.getItem(STORAGE_USERNAME_KEY);
    if (saved && saved.trim()) {
      return saved.trim();
    }
  } catch {
    // LocalStorage blocked
  }
  return DEFAULT_USERNAME;
}
