export type GardenItemCategory =
  "herb" | "fruit" | "vegetable" | "action" | "medical";

export type DifficultyTier =
  "beginner" | "intermediate" | "advanced" | "expert" | "master";

export type CommunicabilityStatus = "Yes" | "No" | "Depends";

export interface GardenItem {
  id: string;
  name: string;
  category: GardenItemCategory;
  nutrients: string[];
  benefits: string;
  traditionalUseNotes?: string;
  evidenceNote: string;
  foodExamples?: string[];
  safetyNotes?: string;
  illustrationId: string;
}

export interface LearningContent {
  id: string;
  conditionName: string;
  whatIsIt: string[];
  howItHappens: string[];
  communicability: {
    status: CommunicabilityStatus;
    explanation: string;
  };
  nutrition: string[];
  precautions: string[];
  supportiveCare: string[];
  medicalTreatment: string[];
  whenToSeekHelp: string[];
  plantEvidenceNotes?: Array<{
    itemName: string;
    role: string;
    evidence: string;
    safety: string;
  }>;
  sources: Array<{
    name: string;
    description: string;
  }>;
}

export interface BadgeInfo {
  id: string;
  name: string;
  levelNumber: number;
  conditionName: string;
  description: string;
  iconId: string;
}

export interface LevelHint {
  count: number;
  clue: string;
}

export interface ExploreLevel {
  id: string;
  levelNumber: number;
  conditionName: string;
  conditionId: string;
  scenarioText: string;
  highlightWords: string[];
  difficultyTier: DifficultyTier;
  availableItemIds: string[];
  correctItemIds: string[];
  hint: LevelHint;
  learningContentId: string;
  badgeId: string;
  references: string[];
}

export interface ExploreProgressData {
  unlockedLevel: number;
  completedLevels: number[];
  earnedBadgeIds: string[];
  learningScore: number;
  completedCardIds: string[];
}

export type ExploreStage =
  | "exploring"
  | "incorrect"
  | "learningCard"
  | "badgeUnlock"
  | "difficultyTransition"
  | "completedAll";
