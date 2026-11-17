import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Database,
  RotateCcw,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";
import { useExploreStore } from "../../explore/store/useExploreStore";
import { useLearningsStore } from "../../learnings/store/useLearningsStore";
import { SettingsResetModal } from "./SettingsResetModal";

export const DataProgressSection: React.FC = () => {
  const { t } = useTranslation();

  const currentLevel = useExploreStore((s) => s.currentLevel);
  const unlockedLevel = useExploreStore((s) => s.unlockedLevel);
  const earnedBadgeIds = useExploreStore((s) => s.earnedBadgeIds);
  const completedCardIds = useExploreStore((s) => s.completedCardIds);
  const learningScore = useExploreStore((s) => s.learningScore);
  const quizAttempts = useLearningsStore((s) => s.quizAttempts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleConfirmReset = async () => {
    try {
      setIsResetting(true);
      await useExploreStore.getState().resetProgress();
      setIsModalOpen(false);
      setSuccessToast(t("settings.data.resetSuccess"));
      setTimeout(() => setSuccessToast(null), 4000);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-data-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <Database className="w-6 h-6 text-purple-400" />
          {t("settings.data.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.data.subtitle")}
        </p>
      </div>

      {/* Success Notification Toast */}
      {successToast && (
        <div
          role="status"
          className="p-4 rounded-xl border border-emerald-400/40 bg-emerald-950/40 backdrop-blur-md text-emerald-200 flex items-center gap-3 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold">{successToast}</span>
        </div>
      )}

      {/* Storage Architecture Overview */}
      <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-4 shadow-lg shadow-black/40">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-white text-base">
              Local Browser Storage
            </h3>
            <p className="text-xs text-purple-300/60">
              Offline-first & zero telemetry
            </p>
          </div>
        </div>

        <p className="text-xs text-purple-200/80 leading-relaxed">
          {t("settings.data.localNotice")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-purple-200">
                IndexedDB (Dexie)
              </span>
              <p className="text-purple-300/60 text-[11px]">
                Stores 25 Explore levels, stages & history
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-purple-200">
                LocalStorage
              </span>
              <p className="text-purple-300/60 text-[11px]">
                Stores profile, audio & accessibility preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Records Overview */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          {t("settings.data.statsHeading")}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <Compass className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {currentLevel}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Current Level
            </span>
          </div>

          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <Compass className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {unlockedLevel}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Unlocked Level
            </span>
          </div>

          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <Award className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {earnedBadgeIds.length}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Earned Badges
            </span>
          </div>

          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <BookOpen className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {completedCardIds.length}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Learnings
            </span>
          </div>

          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <Trophy className="w-4 h-4 text-rose-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {Object.keys(quizAttempts).length}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Quizzes Done
            </span>
          </div>

          <div className="p-3 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md text-center">
            <Database className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <span className="text-xl font-bold font-serif text-white">
              {learningScore}
            </span>
            <span className="block text-[10px] text-purple-300/60 mt-0.5">
              Explore Score
            </span>
          </div>
        </div>
      </div>

      {/* Reset Exploration Data Panel */}
      <div className="rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-950/20 via-black/40 to-black/60 backdrop-blur-md p-6 space-y-4 shadow-lg shadow-rose-950/20">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-lg font-serif font-semibold text-rose-200 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-rose-400" />
              {t("settings.data.resetHeading")}
            </h3>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              {t("settings.data.resetDesc")}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl border border-rose-500/40 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 text-xs font-semibold transition-all flex items-center gap-2 shadow-md hover:shadow-rose-600/20 self-start"
          >
            <RotateCcw className="w-4 h-4 text-rose-400" />
            {t("settings.data.resetBtn")}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <SettingsResetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmReset}
        isResetting={isResetting}
      />
    </div>
  );
};
