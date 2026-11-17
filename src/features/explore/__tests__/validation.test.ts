import { describe, it, expect } from "vitest";
import { validateSelection } from "../store/useExploreStore";
import { EXPLORE_LEVELS } from "../data/levels";

describe("Explore Selection Validation Logic", () => {
  it("returns true only for exact match of correct items", () => {
    const level1 = EXPLORE_LEVELS[0];
    expect(
      validateSelection(["tulsi", "handwashing", "rest"], level1.correctItemIds)
    ).toBe(true);
    // Order should not matter
    expect(
      validateSelection(["rest", "tulsi", "handwashing"], level1.correctItemIds)
    ).toBe(true);
  });

  it("returns false if items are missing or extra distractors are included", () => {
    const level1 = EXPLORE_LEVELS[0];
    // Missing one
    expect(
      validateSelection(["tulsi", "handwashing"], level1.correctItemIds)
    ).toBe(false);
    // Extra distractor
    expect(
      validateSelection(
        ["tulsi", "handwashing", "rest", "cinnamon"],
        level1.correctItemIds
      )
    ).toBe(false);
    // Completely wrong
    expect(
      validateSelection(["cinnamon", "carrot"], level1.correctItemIds)
    ).toBe(false);
    // Empty
    expect(validateSelection([], level1.correctItemIds)).toBe(false);
  });

  it("validates all 25 levels have solvable correct sets", () => {
    EXPLORE_LEVELS.forEach((level) => {
      expect(
        validateSelection(level.correctItemIds, level.correctItemIds)
      ).toBe(true);
      expect(validateSelection([], level.correctItemIds)).toBe(false);
    });
  });
});
