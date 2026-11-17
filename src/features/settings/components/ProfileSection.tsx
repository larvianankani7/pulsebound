import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Compass,
  Leaf,
  FlaskConical,
  BookOpen,
  Sparkles,
  Shield,
  Check,
  Award,
  Trophy,
  User,
} from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";
import { useLearningsStore } from "../../learnings/store/useLearningsStore";
import { AVATARS } from "../constants";
import { type AvatarId } from "../types";

const AVATAR_ICONS: Record<
  AvatarId,
  React.ComponentType<{ className?: string }>
> = {
  seeker: Compass,
  herbalist: Leaf,
  alchemist: FlaskConical,
  botanist: BookOpen,
  sage: Sparkles,
  druid: Shield,
};

export const ProfileSection: React.FC = () => {
  const { t } = useTranslation();
  const username = useSettingsStore((s) => s.username);
  const avatarId = useSettingsStore((s) => s.avatarId);
  const setUsername = useSettingsStore((s) => s.setUsername);
  const setAvatarId = useSettingsStore((s) => s.setAvatarId);

  // Live exploration & quiz milestones
  const currentLevel = useExploreStore((s) => s.currentLevel);
  const earnedBadgeIds = useExploreStore((s) => s.earnedBadgeIds);
  const completedCardIds = useExploreStore((s) => s.completedCardIds);
  const quizAttempts = useLearningsStore((s) => s.quizAttempts);

  const completedQuizzesCount = Object.keys(quizAttempts).length;
  const totalQuizScore = Object.values(quizAttempts).reduce(
    (sum, attempt) => sum + (attempt.score || 0),
    0
  );

  const [inputName, setInputName] = useState(username);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleSaveUsername = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    setUsername(trimmed);
    setInputName(trimmed || "Seeker");
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-profile-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <User className="w-6 h-6 text-purple-400" />
          {t("settings.profile.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.profile.subtitle")}
        </p>
      </div>

      {/* Username Configuration */}
      <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-4 shadow-lg shadow-black/40">
        <label
          htmlFor="settings-username-input"
          className="block text-sm font-medium text-purple-200/90"
        >
          {t("settings.profile.usernameLabel")}
        </label>
        <form
          onSubmit={handleSaveUsername}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            id="settings-username-input"
            type="text"
            maxLength={24}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder={t("settings.profile.usernamePlaceholder")}
            className="flex-1 px-4 py-2.5 rounded-xl border border-purple-500/30 bg-purple-950/20 text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 border border-purple-400/40 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            {t("settings.profile.saveUsername")}
          </button>
        </form>
        {showSavedToast && (
          <p
            role="status"
            className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 animate-fadeIn"
          >
            <Check className="w-3.5 h-3.5" />
            {t("settings.profile.usernameSavedToast")}
          </p>
        )}
      </div>

      {/* Avatar Selection */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-white">
            {t("settings.profile.avatarHeading")}
          </h3>
          <p className="text-xs text-purple-300/60 mt-0.5">
            Select your persona. This archetype reflects your exploration
            approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AVATARS.map((avatar) => {
            const Icon = AVATAR_ICONS[avatar.id];
            const isSelected = avatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => setAvatarId(avatar.id)}
                aria-pressed={isSelected}
                className={`relative text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-purple-400/80 bg-purple-950/40 shadow-[0_0_25px_rgba(168,85,247,0.3)] ring-1 ring-purple-400/50"
                    : "border-white/10 bg-black/40 hover:border-purple-500/40 hover:bg-white/[0.03]"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-purple-500/30 text-purple-200 border border-purple-400/40 flex items-center gap-1">
                    <Check className="w-3 h-3 text-purple-300" />
                    Active
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatar.gradient} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {avatar.name}
                    </h4>
                    <p className="text-xs text-purple-300/70">{avatar.title}</p>
                  </div>
                </div>

                <p className="text-xs text-purple-200/60 mt-3 leading-relaxed">
                  {avatar.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Exploration Milestones */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            {t("settings.profile.summaryHeading")}
          </h3>
          <p className="text-xs text-purple-300/60 mt-0.5">
            Live progression metrics synchronized from your Explore journeys and
            Learnings quizzes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md flex flex-col items-center text-center">
            <Compass className="w-5 h-5 text-purple-400 mb-1" />
            <span className="text-2xl font-bold font-serif text-white">
              {currentLevel}
              <span className="text-xs text-purple-300/50 font-normal">
                {" "}
                / 25
              </span>
            </span>
            <span className="text-[11px] text-purple-200/70 mt-0.5">
              {t("settings.profile.currentLevel")}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md flex flex-col items-center text-center">
            <Award className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-2xl font-bold font-serif text-white">
              {earnedBadgeIds.length}
              <span className="text-xs text-purple-300/50 font-normal">
                {" "}
                / 25
              </span>
            </span>
            <span className="text-[11px] text-purple-200/70 mt-0.5">
              {t("settings.profile.badgesEarned")}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md flex flex-col items-center text-center">
            <BookOpen className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="text-2xl font-bold font-serif text-white">
              {completedCardIds.length}
              <span className="text-xs text-purple-300/50 font-normal">
                {" "}
                / 25
              </span>
            </span>
            <span className="text-[11px] text-purple-200/70 mt-0.5">
              {t("settings.profile.learningsUnlocked")}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-md flex flex-col items-center text-center">
            <Trophy className="w-5 h-5 text-indigo-400 mb-1" />
            <span className="text-2xl font-bold font-serif text-white">
              {completedQuizzesCount}
              <span className="text-xs text-purple-300/50 font-normal">
                {" "}
                / 25
              </span>
            </span>
            <span className="text-[11px] text-purple-200/70 mt-0.5">
              {t("settings.profile.quizzesCompleted")} ({totalQuizScore} pts)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
