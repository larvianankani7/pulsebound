import { db } from "../../../database/db";
import { type LearningsProgressData, type QuizAttemptRecord } from "../types";
import {
  DEXIE_LEARNINGS_PROGRESS_ID,
  STORAGE_LEARNINGS_PROGRESS_KEY,
} from "../constants";

export const INITIAL_LEARNINGS_DATA: LearningsProgressData = {
  quizAttempts: {},
};

/**
 * Loads persisted Learnings and Quizzes progress from Dexie with localStorage fallback.
 */
export async function loadLearningsProgress(): Promise<LearningsProgressData> {
  // 1. Try Dexie IndexedDB
  try {
    const record = await db.userProgress.get(DEXIE_LEARNINGS_PROGRESS_ID);
    if (record && record.data) {
      const data = record.data as Partial<LearningsProgressData>;
      return {
        quizAttempts:
          data.quizAttempts && typeof data.quizAttempts === "object"
            ? (data.quizAttempts as Record<string, QuizAttemptRecord>)
            : {},
      };
    }
  } catch {
    // IndexedDB unavailable
  }

  // 2. Fallback to localStorage
  try {
    const raw = localStorage.getItem(STORAGE_LEARNINGS_PROGRESS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<LearningsProgressData>;
      return {
        quizAttempts:
          parsed.quizAttempts && typeof parsed.quizAttempts === "object"
            ? (parsed.quizAttempts as Record<string, QuizAttemptRecord>)
            : {},
      };
    }
  } catch {
    // LocalStorage blocked
  }

  return { ...INITIAL_LEARNINGS_DATA };
}

/**
 * Persists quiz progress to both Dexie IndexedDB and localStorage.
 */
export async function saveLearningsProgress(
  data: LearningsProgressData
): Promise<void> {
  // LocalStorage sync mirror
  try {
    localStorage.setItem(STORAGE_LEARNINGS_PROGRESS_KEY, JSON.stringify(data));
  } catch {
    // storage failed
  }

  // Dexie IndexedDB durable record
  try {
    await db.userProgress.put({
      id: DEXIE_LEARNINGS_PROGRESS_ID,
      completedAt: new Date().toISOString(),
      data: {
        quizAttempts: data.quizAttempts,
      },
    });
  } catch {
    // indexedDB failed
  }
}

/**
 * Clears all persisted quiz progress from Dexie and localStorage.
 */
export async function clearLearningsPersistedData(): Promise<void> {
  try {
    await db.userProgress.delete(DEXIE_LEARNINGS_PROGRESS_ID);
  } catch {
    // fallback
  }

  try {
    localStorage.removeItem(STORAGE_LEARNINGS_PROGRESS_KEY);
  } catch {
    // fallback
  }

  await saveLearningsProgress(INITIAL_LEARNINGS_DATA);
}
