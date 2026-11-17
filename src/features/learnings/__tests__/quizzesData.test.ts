import { describe, it, expect } from "vitest";
import { QUIZZES, QUIZ_LIST } from "../data/quizzes";
import { EXPLORE_LEVELS } from "../../explore/data/levels";
import { EXPLORE_BADGES } from "../../explore/data/badges";
import { LEARNING_CONTENTS } from "../../explore/data/learningContent";

describe("25-Quiz Educational Dataset & Explore Integration", () => {
  it("contains exactly 25 quizzes mapped 1:1 to Explore levels", () => {
    expect(QUIZ_LIST).toHaveLength(25);
    expect(Object.keys(QUIZZES)).toHaveLength(25);
  });

  it("verifies every quiz connects stably to level, badge, and learning content IDs", () => {
    for (let i = 1; i <= 25; i++) {
      const quizId = `quiz_${i}`;
      const quiz = QUIZZES[quizId];
      expect(quiz).toBeDefined();

      // Check level mapping
      const expectedLevelId = `level_${i}`;
      const level = EXPLORE_LEVELS.find((l) => l.levelNumber === i);
      expect(level).toBeDefined();
      expect(quiz.levelNumber).toBe(i);
      expect(quiz.levelId).toBe(expectedLevelId);

      // Check badge mapping
      const expectedBadgeId = `badge_${i}`;
      const badge = EXPLORE_BADGES[expectedBadgeId];
      expect(badge).toBeDefined();
      expect(quiz.badgeId).toBe(expectedBadgeId);
      expect(level?.badgeId).toBe(expectedBadgeId);

      // Check learning content mapping
      const expectedLearnId = `learn_${i}`;
      const learning = LEARNING_CONTENTS[expectedLearnId];
      expect(learning).toBeDefined();
      expect(quiz.learningContentId).toBe(expectedLearnId);
      expect(level?.learningContentId).toBe(expectedLearnId);

      // Check title and condition
      expect(quiz.title.trim().length).toBeGreaterThan(0);
      expect(quiz.conditionName.trim().length).toBeGreaterThan(0);
    }
  });

  it("ensures every quiz contains exactly 3 high-quality educational questions", () => {
    for (const quiz of QUIZ_LIST) {
      expect(quiz.questions).toHaveLength(3);

      const questionTexts = new Set<string>();
      quiz.questions.forEach((q, idx) => {
        expect(q.id).toBe(`${quiz.id}_q${idx + 1}`);
        expect(q.question.trim().length).toBeGreaterThan(10);
        expect(q.options).toHaveLength(4);

        // All options should be non-empty and unique
        const optionsSet = new Set(q.options);
        expect(optionsSet.size).toBe(4);
        q.options.forEach((opt) =>
          expect(opt.trim().length).toBeGreaterThan(0)
        );

        // Correct index bounds
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(4);

        // Explanations & takeaways
        expect(q.explanation.trim().length).toBeGreaterThan(15);
        expect(q.takeaway.trim().length).toBeGreaterThan(10);

        questionTexts.add(q.question);
      });

      expect(questionTexts.size).toBe(3);
    }
  });
});
