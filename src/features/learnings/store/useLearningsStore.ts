import { create } from "zustand";
import {
  type LearningsSection,
  type QuizFlowStep,
  type QuizAttemptRecord,
} from "../types";
import { QUIZZES } from "../data/quizzes";
import { getQuizResultCategory } from "../utils/scoring";
import {
  clearLearningsPersistedData,
  loadLearningsProgress,
  saveLearningsProgress,
} from "./learningsStorage";
import { TOTAL_QUESTIONS_PER_QUIZ } from "../constants";

export interface LearningsState {
  activeSection: LearningsSection;
  selectedLearningId: string | null;

  // Active quiz runner state
  activeQuizId: string | null;
  quizStep: QuizFlowStep;
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
  currentAttemptAnswers: number[];

  // Persistence
  quizAttempts: Record<string, QuizAttemptRecord>;
  isInitialized: boolean;

  // Actions
  init: () => Promise<void>;
  setActiveSection: (section: LearningsSection) => void;
  selectLearning: (learningId: string | null) => void;
  startQuiz: (quizId: string) => void;
  startQuestions: () => void;
  selectQuizOption: (index: number) => void;
  submitCurrentAnswer: () => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  openQuizReview: (quizId: string) => void;
  exitQuiz: () => void;
  resetQuizProgress: () => Promise<void>;
}

export const useLearningsStore = create<LearningsState>((set, get) => ({
  activeSection: "learnings",
  selectedLearningId: null,

  activeQuizId: null,
  quizStep: "intro",
  currentQuestionIndex: 0,
  selectedOptionIndex: null,
  currentAttemptAnswers: [],

  quizAttempts: {},
  isInitialized: false,

  init: async () => {
    const data = await loadLearningsProgress();
    set({
      quizAttempts: data.quizAttempts,
      isInitialized: true,
    });
  },

  setActiveSection: (activeSection) => set({ activeSection }),

  selectLearning: (selectedLearningId) => set({ selectedLearningId }),

  startQuiz: (quizId: string) => {
    const { quizAttempts } = get();
    // One-attempt rule: If already attempted, immediately direct to review mode
    if (quizAttempts[quizId]) {
      set({
        activeQuizId: quizId,
        quizStep: "review",
        currentQuestionIndex: 0,
        selectedOptionIndex: null,
      });
      return;
    }

    set({
      activeQuizId: quizId,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
    });
  },

  startQuestions: () => {
    const { activeQuizId, quizAttempts } = get();
    if (!activeQuizId || quizAttempts[activeQuizId]) return;

    set({
      quizStep: "question",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
    });
  },

  selectQuizOption: (index: number) => {
    const { quizStep } = get();
    if (quizStep !== "question") return;
    set({ selectedOptionIndex: index });
  },

  submitCurrentAnswer: () => {
    const {
      quizStep,
      selectedOptionIndex,
      currentAttemptAnswers,
      activeQuizId,
      quizAttempts,
    } = get();

    if (
      quizStep !== "question" ||
      selectedOptionIndex === null ||
      !activeQuizId ||
      quizAttempts[activeQuizId]
    ) {
      return;
    }

    set({
      currentAttemptAnswers: [...currentAttemptAnswers, selectedOptionIndex],
      quizStep: "feedback",
    });
  },

  nextQuestion: () => {
    const { quizStep, currentQuestionIndex } = get();
    if (quizStep !== "feedback") return;

    if (currentQuestionIndex < TOTAL_QUESTIONS_PER_QUIZ - 1) {
      set({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedOptionIndex: null,
        quizStep: "question",
      });
    }
  },

  finishQuiz: () => {
    const { activeQuizId, currentAttemptAnswers, quizAttempts } = get();

    if (!activeQuizId || quizAttempts[activeQuizId]) return;

    const quiz = QUIZZES[activeQuizId];
    if (!quiz) return;

    // Calculate score
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (currentAttemptAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });

    const resultCategory = getQuizResultCategory(score);
    const newRecord: QuizAttemptRecord = {
      quizId: activeQuizId,
      score,
      selectedAnswers: currentAttemptAnswers,
      completedAt: new Date().toISOString(),
      resultCategory,
    };

    const newAttempts = {
      ...quizAttempts,
      [activeQuizId]: newRecord,
    };

    set({
      quizAttempts: newAttempts,
      quizStep: "result",
    });

    void saveLearningsProgress({ quizAttempts: newAttempts });
  },

  openQuizReview: (quizId: string) => {
    set({
      activeQuizId: quizId,
      quizStep: "review",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
    });
  },

  exitQuiz: () => {
    set({
      activeQuizId: null,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
    });
  },

  resetQuizProgress: async () => {
    await clearLearningsPersistedData();
    set({
      quizAttempts: {},
      activeQuizId: null,
      quizStep: "intro",
      currentQuestionIndex: 0,
      selectedOptionIndex: null,
      currentAttemptAnswers: [],
    });
  },
}));
