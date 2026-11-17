import { useEffect } from "react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { LearningsHeader } from "./components/LearningsHeader";
import { LearningsSidebar } from "./components/LearningsSidebar";
import { LearningCardGrid } from "./components/LearningCardGrid";
import { LearningDetailView } from "./components/LearningDetailView";
import { QuizCardGrid } from "./components/QuizCardGrid";
import { QuizRunnerModal } from "./components/QuizRunnerModal";
import { useLearningsStore } from "./store/useLearningsStore";
import { useExploreStore } from "../explore/store/useExploreStore";
import { QUIZ_LIST } from "./data/quizzes";
import { EXPLORE_LEVELS } from "../explore/data/levels";

export function LearningsPage() {
  const {
    activeSection,
    selectedLearningId,
    activeQuizId,
    quizStep,
    currentQuestionIndex,
    selectedOptionIndex,
    quizAttempts,
    init: initLearnings,
    setActiveSection,
    selectLearning,
    startQuiz,
    startQuestions,
    selectQuizOption,
    submitCurrentAnswer,
    nextQuestion,
    finishQuiz,
    openQuizReview,
    exitQuiz,
  } = useLearningsStore();

  const {
    completedCardIds,
    completedLevels,
    earnedBadgeIds,
    init: initExplore,
  } = useExploreStore();

  useEffect(() => {
    void initLearnings();
    void initExplore();
  }, [initLearnings, initExplore]);

  // Derived counts for sidebar
  const earnedLearningsCount = EXPLORE_LEVELS.filter(
    (lvl) =>
      completedCardIds.includes(lvl.learningContentId) ||
      completedLevels.includes(lvl.levelNumber)
  ).length;

  const totalLearningsCount = EXPLORE_LEVELS.length;
  const unlockedQuizzesCount = QUIZ_LIST.filter((q) =>
    earnedBadgeIds.includes(q.badgeId)
  ).length;
  const totalQuizzesCount = QUIZ_LIST.length;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f3eeee] select-none">
      {/* 1. Atmospheric Video Background */}
      <BackgroundMedia videoSrc="/videos/pulsebound-bg.mp4" startTime={0} />

      {/* 2. Atmospheric Music Controller */}
      <MusicControl audioSrc="/audio/pulsebound-theme.mp3" />

      {/* 3. Main Page Content Container */}
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-4 py-8 sm:px-8 md:px-10">
        {/* Page Top Header */}
        <LearningsHeader />

        {/* Two-Column Layout: Responsive Sidebar Navigation + Main Display */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Left Vertical Sidebar */}
          <LearningsSidebar
            activeSection={activeSection}
            onSelectSection={setActiveSection}
            earnedLearningsCount={earnedLearningsCount}
            totalLearningsCount={totalLearningsCount}
            unlockedQuizzesCount={unlockedQuizzesCount}
            totalQuizzesCount={totalQuizzesCount}
          />

          {/* Right Main Showcase Area */}
          <div className="flex-1 w-full min-w-0">
            {activeSection === "learnings" ? (
              selectedLearningId ? (
                <LearningDetailView
                  learningId={selectedLearningId}
                  onBack={() => selectLearning(null)}
                />
              ) : (
                <LearningCardGrid
                  completedCardIds={completedCardIds}
                  completedLevels={completedLevels}
                  onSelectLearning={selectLearning}
                />
              )
            ) : (
              <QuizCardGrid
                earnedBadgeIds={earnedBadgeIds}
                quizAttempts={quizAttempts}
                onStartQuiz={startQuiz}
                onReviewQuiz={openQuizReview}
              />
            )}
          </div>
        </div>
      </main>

      {/* Active Dedicated Quiz Runner Modal Overlay */}
      {activeQuizId && (
        <QuizRunnerModal
          activeQuizId={activeQuizId}
          quizStep={quizStep}
          currentQuestionIndex={currentQuestionIndex}
          selectedOptionIndex={selectedOptionIndex}
          quizAttempts={quizAttempts}
          onStartQuestions={startQuestions}
          onSelectOption={selectQuizOption}
          onSubmitAnswer={submitCurrentAnswer}
          onNextQuestion={nextQuestion}
          onFinishQuiz={finishQuiz}
          onExitQuiz={exitQuiz}
        />
      )}
    </div>
  );
}

export default LearningsPage;
