import { motion } from "motion/react";
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  HeartPulse,
  Sparkles,
  Award,
  Stethoscope,
  Info,
  BookOpen,
} from "lucide-react";
import { ConditionIllustration } from "../../explore/components/illustrations/ConditionIllustrations";
import { BadgeIllustration } from "../../explore/components/illustrations/BadgeIllustrations";
import { EXPLORE_LEVELS } from "../../explore/data/levels";
import { LEARNING_CONTENTS } from "../../explore/data/learningContent";
import { EXPLORE_BADGES } from "../../explore/data/badges";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface LearningDetailViewProps {
  learningId: string;
  onBack: () => void;
}

export function LearningDetailView({
  learningId,
  onBack,
}: LearningDetailViewProps) {
  const learning = LEARNING_CONTENTS[learningId];
  const level = EXPLORE_LEVELS.find((l) => l.learningContentId === learningId);
  const badge = level ? EXPLORE_BADGES[level.badgeId] : undefined;

  if (!learning || !level || !badge) {
    return (
      <div className="p-8 text-center text-purple-300">
        <p>Learning content not found.</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-4 px-4 py-2 rounded-xl bg-purple-900/60 text-purple-200"
        >
          Back to Learnings
        </button>
      </div>
    );
  }

  const handleBack = () => {
    playMenuClickSound();
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Navigation & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-purple-500/20 pb-4">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-purple-200 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/50 transition-all self-start"
          aria-label="Back to Learnings"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learnings</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/25">
            Level {String(level.levelNumber).padStart(2, "0")} — Tier{" "}
            {level.difficultyTier}
          </span>
        </div>
      </div>

      {/* Hero Overview Card */}
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#1b1034]/90 via-[#100722]/80 to-[#0a0316]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(168,85,247,0.18)]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <ConditionIllustration
              id={level.conditionId}
              size={64}
              className="drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Botanical Health Module
              </span>
              <span className="text-purple-500">•</span>
              <div className="flex items-center gap-1.5 text-xs text-purple-300">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>
                  Earned Badge: <strong>{badge.name}</strong>
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {level.conditionName}
            </h2>

            <p className="mt-2 text-sm text-purple-200/80 leading-relaxed max-w-3xl">
              {learning.whatIsIt[0]}
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-2 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/20">
            <div className="w-14 h-14 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
              <BadgeIllustration id={badge.iconId} size={48} />
            </div>
            <span className="text-[11px] font-medium text-purple-300 text-center">
              {badge.name}
            </span>
          </div>
        </div>
      </div>

      {/* Structured Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: What It Means */}
        {learning.whatIsIt.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm tracking-wide mb-3">
              <Info className="w-4 h-4 text-purple-400" />
              <h3>What is this condition?</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.whatIsIt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Card 2: Causes & Contributing Factors */}
        {learning.howItHappens.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm tracking-wide mb-3">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <h3>How it happens & transmission</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.howItHappens.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-fuchsia-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {learning.communicability && (
              <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-start gap-2 text-xs">
                <span className="font-semibold text-purple-300 whitespace-nowrap">
                  Communicable:
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-900/60 text-purple-200 border border-purple-500/30">
                  {learning.communicability.status}
                </span>
                <span className="text-purple-300/70">
                  {learning.communicability.explanation}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card 3: Nutritional & Botanical Support */}
        {learning.nutrition.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-emerald-300 font-bold text-sm tracking-wide mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3>Nutritional & Botanical Support</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.nutrition.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Card 4: Supportive Care */}
        {learning.supportiveCare.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm tracking-wide mb-3">
              <HeartPulse className="w-4 h-4 text-purple-400" />
              <h3>Supportive Care</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.supportiveCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Card 5: Precautions & Safe Practices */}
        {learning.precautions.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm tracking-wide mb-3">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <h3>Precautions & Prevention</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.precautions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Card 6: Medical Treatment Context */}
        {learning.medicalTreatment.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm tracking-wide mb-3">
              <Stethoscope className="w-4 h-4 text-purple-400" />
              <h3>Medical & Clinical Context</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {learning.medicalTreatment.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Red-Flag Urgent Medical Alert Callout */}
      {learning.whenToSeekHelp.length > 0 && (
        <div className="rounded-2xl border border-rose-500/30 bg-rose-950/30 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
          <div className="flex items-center gap-2.5 text-rose-300 font-bold text-sm tracking-wide mb-3">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <h3 className="text-base font-bold text-rose-200">
              When to Seek Professional Medical Care
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-rose-200/90 leading-relaxed">
            {learning.whenToSeekHelp.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">⚠️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Plant & Evidence Details */}
      {learning.plantEvidenceNotes &&
        learning.plantEvidenceNotes.length > 0 && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#0e0819]/80 backdrop-blur-xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Botanical Evidence & Safety Profiles</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learning.plantEvidenceNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20"
                >
                  <div className="text-sm font-bold text-purple-100 mb-1">
                    {note.itemName}
                  </div>
                  <div className="text-xs text-purple-300/80 mb-2">
                    <span className="font-semibold text-purple-200">Role:</span>{" "}
                    {note.role}
                  </div>
                  <div className="text-xs text-purple-300/70 mb-2">
                    <span className="font-semibold text-purple-200">
                      Evidence:
                    </span>{" "}
                    {note.evidence}
                  </div>
                  <div className="text-xs text-amber-300/80">
                    <span className="font-semibold text-amber-200">
                      Safety:
                    </span>{" "}
                    {note.safety}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* Sources & Guidelines */}
      {learning.sources.length > 0 && (
        <div className="rounded-xl border border-purple-500/15 bg-black/40 p-4 text-xs text-purple-300/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="font-semibold text-purple-300/80">
            Public Health References:
          </span>
          <div className="flex flex-wrap gap-3">
            {learning.sources.map((src, idx) => (
              <span
                key={idx}
                className="hover:text-purple-200 transition-colors"
              >
                • {src.name} ({src.description})
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
