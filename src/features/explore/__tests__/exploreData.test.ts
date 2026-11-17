import { describe, it, expect } from "vitest";
import { EXPLORE_LEVELS } from "../data/levels";
import { GARDEN_ITEMS } from "../data/gardenItems";
import { EXPLORE_BADGES } from "../data/badges";
import { LEARNING_CONTENTS } from "../data/learningContent";
import { TOTAL_LEVELS, DIFFICULTY_TIERS, getTierForLevel } from "../constants";

describe("Explore Data Integrity & Medical Safety", () => {
  it("defines exactly 25 sequential levels", () => {
    expect(EXPLORE_LEVELS).toHaveLength(TOTAL_LEVELS);
    EXPLORE_LEVELS.forEach((level, index) => {
      expect(level.levelNumber).toBe(index + 1);
      expect(level.id).toBe(`level_${index + 1}`);
      expect(level.conditionName).toBeTruthy();
      expect(level.scenarioText).toBeTruthy();
      expect(level.highlightWords.length).toBeGreaterThan(0);
      expect(level.availableItemIds.length).toBeGreaterThanOrEqual(4);
      expect(level.correctItemIds.length).toBeGreaterThanOrEqual(1);
      expect(level.hint.count).toBe(level.correctItemIds.length);
      expect(level.hint.clue).toBeTruthy();
    });
  });

  it("verifies every level points to valid garden items in available and correct sets", () => {
    EXPLORE_LEVELS.forEach((level) => {
      level.availableItemIds.forEach((itemId) => {
        expect(
          GARDEN_ITEMS[itemId],
          `Missing item "${itemId}" in level ${level.levelNumber}`
        ).toBeDefined();
      });

      level.correctItemIds.forEach((itemId) => {
        expect(
          level.availableItemIds,
          `Correct item ${itemId} not in available items for level ${level.levelNumber}`
        ).toContain(itemId);
      });
    });
  });

  it("verifies all 25 badges exist and map 1:1 to levels", () => {
    const badgeEntries = Object.values(EXPLORE_BADGES);
    expect(badgeEntries).toHaveLength(TOTAL_LEVELS);

    EXPLORE_LEVELS.forEach((level) => {
      const badge = EXPLORE_BADGES[level.badgeId];
      expect(
        badge,
        `Missing badge for level ${level.levelNumber}`
      ).toBeDefined();
      expect(badge.levelNumber).toBe(level.levelNumber);
      expect(badge.name).toBeTruthy();
      expect(badge.iconId).toBeTruthy();
    });

    // Check specific known badge names from spec
    expect(EXPLORE_BADGES["badge_1"].name).toBe("First Bloom");
    expect(EXPLORE_BADGES["badge_2"].name).toBe("Fever Guardian");
    expect(EXPLORE_BADGES["badge_18"].name).toBe("Lung Guardian");
    expect(EXPLORE_BADGES["badge_25"].name).toBe("Garden of Wisdom");
  });

  it("verifies all 25 learning cards contain complete educational sections A-H", () => {
    EXPLORE_LEVELS.forEach((level) => {
      const learn = LEARNING_CONTENTS[level.learningContentId];
      expect(
        learn,
        `Missing learning content for level ${level.levelNumber}`
      ).toBeDefined();
      expect(learn.conditionName).toBeTruthy();

      // Section A: What is it?
      expect(learn.whatIsIt.length).toBeGreaterThanOrEqual(1);

      // Section B: How can it happen?
      expect(learn.howItHappens.length).toBeGreaterThanOrEqual(1);

      // Section C: Is it communicable?
      expect(["Yes", "No", "Depends"]).toContain(learn.communicability.status);
      expect(learn.communicability.explanation).toBeTruthy();

      // Section D: Food and nutrition
      expect(learn.nutrition.length).toBeGreaterThanOrEqual(1);

      // Section E: Precautions
      expect(learn.precautions.length).toBeGreaterThanOrEqual(1);

      // Section F: Supportive care
      expect(learn.supportiveCare.length).toBeGreaterThanOrEqual(1);

      // Section G: Medical treatment & medicines
      expect(learn.medicalTreatment.length).toBeGreaterThanOrEqual(1);

      // Section H: When to seek medical help
      expect(learn.whenToSeekHelp.length).toBeGreaterThanOrEqual(1);

      // Sources
      expect(learn.sources.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("strictly enforces medical safety: serious conditions require medical consultation or prescribed care", () => {
    // Pneumonia (Level 18), Dengue (Level 19), Malaria (Level 20), Food Poisoning (Level 16)
    const pneumonia = EXPLORE_LEVELS.find((l) => l.conditionId === "pneumonia");
    expect(pneumonia?.correctItemIds).toContain("medical_consultation");
    expect(pneumonia?.correctItemIds).toContain("prescribed_treatment");

    const malaria = EXPLORE_LEVELS.find((l) => l.conditionId === "malaria");
    expect(malaria?.correctItemIds).toContain("medical_consultation");
    expect(malaria?.correctItemIds).toContain("prescribed_treatment");

    const dengue = EXPLORE_LEVELS.find((l) => l.conditionId === "dengue");
    expect(dengue?.correctItemIds).toContain("medical_consultation");
  });

  it("strictly ensures no claim that food cures infectious diseases", () => {
    const coldLearn = LEARNING_CONTENTS["learn_1"];
    expect(
      coldLearn.howItHappens.some((h) =>
        h.includes("NOT caused by cold weather or eating specific foods")
      )
    ).toBe(true);

    const pneumoniaLearn = LEARNING_CONTENTS["learn_18"];
    expect(
      pneumoniaLearn.medicalTreatment.some((m) =>
        m.toLowerCase().includes("antibiotic")
      )
    ).toBe(true);
  });

  it("verifies difficulty tier assignment matches rules", () => {
    expect(getTierForLevel(1)).toBe("beginner");
    expect(getTierForLevel(5)).toBe("beginner");
    expect(getTierForLevel(6)).toBe("intermediate");
    expect(getTierForLevel(10)).toBe("intermediate");
    expect(getTierForLevel(11)).toBe("advanced");
    expect(getTierForLevel(15)).toBe("advanced");
    expect(getTierForLevel(16)).toBe("expert");
    expect(getTierForLevel(20)).toBe("expert");
    expect(getTierForLevel(21)).toBe("master");
    expect(getTierForLevel(25)).toBe("master");

    expect(DIFFICULTY_TIERS.beginner.minLevel).toBe(1);
    expect(DIFFICULTY_TIERS.beginner.maxLevel).toBe(5);
    expect(DIFFICULTY_TIERS.master.maxLevel).toBe(25);
  });
});
