export type LearningsSection = "learnings" | "quizzes";

export type QuizResultCategory =
  "Better Luck Next Time!" | "Learning" | "Well Explored" | "Mastered";

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  takeaway: string;
}

export interface QuizDefinition {
  id: string; // e.g. "quiz_1"
  levelNumber: number; // 1..25
  levelId: string; // "level_1"
  badgeId: string; // "badge_1"
  learningContentId: string; // "learn_1"
  conditionName: string; // e.g. "Common Cold"
  title: string;
  description: string;
  questions: [QuizQuestion, QuizQuestion, QuizQuestion]; // exactly 3 questions
}

export interface QuizAttemptRecord {
  quizId: string;
  score: number; // 0..3
  selectedAnswers: number[]; // chosen option index per question
  completedAt: string;
  resultCategory: QuizResultCategory;
}

export interface LearningsProgressData {
  quizAttempts: Record<string, QuizAttemptRecord>;
}

export type QuizFlowStep =
  "intro" | "question" | "feedback" | "result" | "review";
