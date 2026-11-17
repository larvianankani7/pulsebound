import { type QuizResultCategory } from "../types";

export function getQuizResultCategory(score: number): QuizResultCategory {
  if (score >= 3) return "Mastered";
  if (score === 2) return "Well Explored";
  if (score === 1) return "Learning";
  return "Better Luck Next Time!";
}

export function getQuizResultMeaning(category: QuizResultCategory): string {
  switch (category) {
    case "Mastered":
      return "The user has demonstrated complete understanding of the quiz content.";
    case "Well Explored":
      return "The user has demonstrated good understanding.";
    case "Learning":
      return "The user has started understanding the topic.";
    case "Better Luck Next Time!":
    default:
      return "The user needs to revisit the learning material.";
  }
}

export function getQuizResultEmoji(category: QuizResultCategory): string {
  switch (category) {
    case "Mastered":
      return "🏆";
    case "Well Explored":
      return "🌟";
    case "Learning":
      return "🌱";
    case "Better Luck Next Time!":
    default:
      return "📖";
  }
}
