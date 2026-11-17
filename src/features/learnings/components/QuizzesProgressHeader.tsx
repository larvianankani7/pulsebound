import { Award, CheckCircle2, Trophy } from "lucide-react";

interface QuizzesProgressHeaderProps {
  earnedBadgesCount: number;
  totalBadgesCount: number;
  completedQuizzesCount: number;
  totalQuizzesCount: number;
  totalQuizPoints: number;
  maxPossiblePoints: number;
}

export function QuizzesProgressHeader({
  earnedBadgesCount,
  totalBadgesCount,
  completedQuizzesCount,
  totalQuizzesCount,
  totalQuizPoints,
  maxPossiblePoints,
}: QuizzesProgressHeaderProps) {
  const badgePercentage = Math.round(
    (earnedBadgesCount / Math.max(totalBadgesCount, 1)) * 100
  );
  const quizCompletionPercentage = Math.round(
    (completedQuizzesCount / Math.max(totalQuizzesCount, 1)) * 100
  );

  return (
    <div className="mb-6 rounded-2xl border border-purple-500/25 bg-[#0e0819]/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Total Badges Earned */}
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-300/70">
              Badges Earned
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {earnedBadgesCount} / {totalBadgesCount}
            </div>
            <div className="w-24 bg-purple-950 rounded-full h-1.5 mt-1 overflow-hidden border border-purple-500/30">
              <div
                className="bg-gradient-to-r from-purple-500 to-fuchsia-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${badgePercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Metric 2: Total Quiz Score */}
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-fuchsia-300">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-300/70">
              Total Quiz Score
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {totalQuizPoints} pts
            </div>
            <div className="text-[11px] text-purple-300/60 mt-0.5">
              out of {maxPossiblePoints} possible
            </div>
          </div>
        </div>

        {/* Metric 3: Quizzes Completed */}
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-emerald-300">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-300/70">
              Quizzes Completed
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {completedQuizzesCount} / {totalQuizzesCount}
            </div>
            <div className="w-24 bg-purple-950 rounded-full h-1.5 mt-1 overflow-hidden border border-purple-500/30">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${quizCompletionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
