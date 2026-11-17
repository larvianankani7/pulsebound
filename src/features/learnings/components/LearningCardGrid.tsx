import { LearningCardItem } from "./LearningCardItem";
import { LearningsEmptyState } from "./LearningsEmptyState";
import { EXPLORE_LEVELS } from "../../explore/data/levels";
import { LEARNING_CONTENTS } from "../../explore/data/learningContent";
import { EXPLORE_BADGES } from "../../explore/data/badges";

interface LearningCardGridProps {
  completedCardIds: string[];
  completedLevels: number[];
  onSelectLearning: (learningId: string) => void;
}

export function LearningCardGrid({
  completedCardIds,
  completedLevels,
  onSelectLearning,
}: LearningCardGridProps) {
  // Determine earned levels: either learning content id in completedCardIds or level number in completedLevels
  const earnedLevels = EXPLORE_LEVELS.filter(
    (lvl) =>
      completedCardIds.includes(lvl.learningContentId) ||
      completedLevels.includes(lvl.levelNumber)
  );

  if (earnedLevels.length === 0) {
    return <LearningsEmptyState />;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-purple-300/80">
          Earned Lessons ({earnedLevels.length} of {EXPLORE_LEVELS.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {earnedLevels.map((lvl) => {
          const learning =
            LEARNING_CONTENTS[lvl.learningContentId] ??
            LEARNING_CONTENTS["learn_1"];
          const badge =
            EXPLORE_BADGES[lvl.badgeId] ?? EXPLORE_BADGES["badge_1"];

          return (
            <LearningCardItem
              key={lvl.id}
              level={lvl}
              learning={learning}
              badge={badge}
              onOpen={() => onSelectLearning(lvl.learningContentId)}
            />
          );
        })}
      </div>
    </div>
  );
}
