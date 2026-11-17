import { QuizzesProgressHeader } from "./QuizzesProgressHeader";
import { QuizCardItem } from "./QuizCardItem";
import { QUIZ_LIST } from "../data/quizzes";
import { type QuizAttemptRecord } from "../types";

interface QuizCardGridProps {
  earnedBadgeIds: string[];
  quizAttempts: Record<string, QuizAttemptRecord>;
  onStartQuiz: (quizId: string) => void;
  onReviewQuiz: (quizId: string) => void;
}

export function QuizCardGrid({
  earnedBadgeIds,
  quizAttempts,
  onStartQuiz,
  onReviewQuiz,
}: QuizCardGridProps) {
  // Compute progress numbers
  const earnedBadgesCount = earnedBadgeIds.length;
  const totalBadgesCount = QUIZ_LIST.length;

  const completedQuizzesCount = Object.keys(quizAttempts).length;
  const totalQuizzesCount = QUIZ_LIST.length;

  let totalQuizPoints = 0;
  Object.values(quizAttempts).forEach((att) => {
    totalQuizPoints += att.score;
  });
  const maxPossiblePoints = totalQuizzesCount * 3;

  return (
    <div>
      {/* Top-Left Progress Header */}
      <QuizzesProgressHeader
        earnedBadgesCount={earnedBadgesCount}
        totalBadgesCount={totalBadgesCount}
        completedQuizzesCount={completedQuizzesCount}
        totalQuizzesCount={totalQuizzesCount}
        totalQuizPoints={totalQuizPoints}
        maxPossiblePoints={maxPossiblePoints}
      />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-purple-300/80">
          Badge Quizzes ({completedQuizzesCount} Completed)
        </h2>
      </div>

      {/* Grid of 25 Quizzes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {QUIZ_LIST.map((quiz) => {
          const isUnlocked = earnedBadgeIds.includes(quiz.badgeId);
          const attempt = quizAttempts[quiz.id];

          return (
            <QuizCardItem
              key={quiz.id}
              quiz={quiz}
              isUnlocked={isUnlocked}
              attempt={attempt}
              onStart={() => onStartQuiz(quiz.id)}
              onReview={() => onReviewQuiz(quiz.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
