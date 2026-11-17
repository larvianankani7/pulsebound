import { motion, AnimatePresence } from "motion/react";
import { QuizIntro } from "./QuizIntro";
import { QuizQuestionStep } from "./QuizQuestionStep";
import { QuizFeedbackStep } from "./QuizFeedbackStep";
import { QuizResultScreen } from "./QuizResultScreen";
import { QuizReviewScreen } from "./QuizReviewScreen";
import { QUIZZES } from "../data/quizzes";
import { type QuizFlowStep, type QuizAttemptRecord } from "../types";
import { TOTAL_QUESTIONS_PER_QUIZ } from "../constants";

interface QuizRunnerModalProps {
  activeQuizId: string;
  quizStep: QuizFlowStep;
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
  quizAttempts: Record<string, QuizAttemptRecord>;
  onStartQuestions: () => void;
  onSelectOption: (idx: number) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  onFinishQuiz: () => void;
  onExitQuiz: () => void;
}

export function QuizRunnerModal({
  activeQuizId,
  quizStep,
  currentQuestionIndex,
  selectedOptionIndex,
  quizAttempts,
  onStartQuestions,
  onSelectOption,
  onSubmitAnswer,
  onNextQuestion,
  onFinishQuiz,
  onExitQuiz,
}: QuizRunnerModalProps) {
  const quiz = QUIZZES[activeQuizId];
  if (!quiz) return null;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const attempt = quizAttempts[activeQuizId];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={quiz.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dark Translucent Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#07050a]/90 backdrop-blur-2xl"
      />

      {/* Centered Modal Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-purple-500/30 bg-[#0e0819]/95 backdrop-blur-3xl shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden my-auto"
      >
        <AnimatePresence mode="wait">
          {quizStep === "intro" && (
            <QuizIntro
              key="intro"
              quiz={quiz}
              onStart={onStartQuestions}
              onClose={onExitQuiz}
            />
          )}

          {quizStep === "question" && currentQuestion && (
            <QuizQuestionStep
              key={`question-${currentQuestionIndex}`}
              question={currentQuestion}
              questionIndex={currentQuestionIndex}
              totalQuestions={TOTAL_QUESTIONS_PER_QUIZ}
              selectedOptionIndex={selectedOptionIndex}
              onSelectOption={onSelectOption}
              onSubmit={onSubmitAnswer}
              onExit={onExitQuiz}
            />
          )}

          {quizStep === "feedback" &&
            currentQuestion &&
            selectedOptionIndex !== null && (
              <QuizFeedbackStep
                key={`feedback-${currentQuestionIndex}`}
                question={currentQuestion}
                selectedOptionIndex={selectedOptionIndex}
                questionIndex={currentQuestionIndex}
                totalQuestions={TOTAL_QUESTIONS_PER_QUIZ}
                onNext={onNextQuestion}
                onFinish={onFinishQuiz}
              />
            )}

          {quizStep === "result" && attempt && (
            <QuizResultScreen
              key="result"
              quiz={quiz}
              attempt={attempt}
              onReturnToQuizzes={onExitQuiz}
            />
          )}

          {quizStep === "review" && attempt && (
            <QuizReviewScreen
              key="review"
              quiz={quiz}
              attempt={attempt}
              onReturn={onExitQuiz}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
