import { describe, it, expect } from "vitest";
import {
  getQuizResultCategory,
  getQuizResultMeaning,
  getQuizResultEmoji,
} from "../utils/scoring";

describe("Quiz Scoring Engine", () => {
  it("maps 0 / 3 correctly to 'Better Luck Next Time!'", () => {
    const category = getQuizResultCategory(0);
    expect(category).toBe("Better Luck Next Time!");
    expect(getQuizResultMeaning(category)).toBe(
      "The user needs to revisit the learning material."
    );
    expect(getQuizResultEmoji(category)).toBe("📖");
  });

  it("maps 1 / 3 correctly to 'Learning'", () => {
    const category = getQuizResultCategory(1);
    expect(category).toBe("Learning");
    expect(getQuizResultMeaning(category)).toBe(
      "The user has started understanding the topic."
    );
    expect(getQuizResultEmoji(category)).toBe("🌱");
  });

  it("maps 2 / 3 correctly to 'Well Explored'", () => {
    const category = getQuizResultCategory(2);
    expect(category).toBe("Well Explored");
    expect(getQuizResultMeaning(category)).toBe(
      "The user has demonstrated good understanding."
    );
    expect(getQuizResultEmoji(category)).toBe("🌟");
  });

  it("maps 3 / 3 correctly to 'Mastered'", () => {
    const category = getQuizResultCategory(3);
    expect(category).toBe("Mastered");
    expect(getQuizResultMeaning(category)).toBe(
      "The user has demonstrated complete understanding of the quiz content."
    );
    expect(getQuizResultEmoji(category)).toBe("🏆");
  });

  it("handles negative or overflow scores gracefully", () => {
    expect(getQuizResultCategory(-1)).toBe("Better Luck Next Time!");
    expect(getQuizResultCategory(4)).toBe("Mastered");
  });
});
