import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Info,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { type LearningContent } from "../types";
import { ConditionIllustration } from "./illustrations/ConditionIllustrations";

export interface LearningCardProps {
  content: LearningContent;
  conditionId: string;
  levelNumber: number;
  onContinue: () => void;
}

export function LearningCard({
  content,
  conditionId,
  levelNumber,
  onContinue,
}: LearningCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const formattedLevel =
    levelNumber < 10 ? `0${levelNumber}` : `${levelNumber}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-lg overflow-y-auto select-none">
      <motion.article
        data-testid="learning-card-modal"
        aria-label={`Learning Card for Level ${levelNumber}: ${content.conditionName}`}
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, scale: 0.95, y: 20 }
        }
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border-2 border-red-600/40 bg-gradient-to-b from-[#1c0206]/98 via-[#100103]/98 to-[#050001]/98 p-5 sm:p-8 text-[#f3eeee] shadow-[0_0_80px_rgba(227,38,54,0.35)]"
      >
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 pb-5 border-b border-red-900/30 mb-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-[#300308] to-[#140103] border border-red-500/40 shadow-[0_0_20px_rgba(227,38,54,0.35)] shrink-0">
              <ConditionIllustration id={conditionId} size={48} />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-red-700/40 bg-[#280308]/80 text-[#fda4af] text-[10px] font-['Cinzel',serif] uppercase tracking-[0.2em] font-semibold mb-1">
                <Sparkles className="w-3 h-3 text-red-400" />
                <span>LEVEL {formattedLevel} LEARNING CARD</span>
              </div>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-white via-red-100 to-rose-300 bg-clip-text text-transparent">
                {content.conditionName}
              </h2>
            </div>
          </div>

          {/* Quick Communicability Badge */}
          <div className="shrink-0 flex flex-col items-center sm:items-end">
            <span className="text-[10px] uppercase font-mono text-red-300/70 mb-1">
              Communicable?
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-sm ${
                content.communicability.status === "Yes"
                  ? "bg-rose-950/60 border-rose-500/40 text-rose-300"
                  : content.communicability.status === "No"
                    ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                    : "bg-amber-950/60 border-amber-500/40 text-amber-300"
              }`}
            >
              {content.communicability.status}:{" "}
              {content.communicability.explanation.split(".")[0]}
            </span>
          </div>
        </div>

        {/* Structured Educational Sections Grid */}
        <div className="space-y-6 text-xs sm:text-sm">
          {/* Row 1: What is it & How can it happen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* A. What is it? */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-[#fda4af] font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <Info className="w-4 h-4 text-red-400" />
                <span>A. What is it?</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.whatIsIt.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* B. How can it happen? */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-[#fda4af] font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <Activity className="w-4 h-4 text-red-400" />
                <span>B. How can it happen?</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.howItHappens.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Row 2: Food & Biological Nutrition & Practical Precautions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* D. Food & Biological Nutrition */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-emerald-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                <span>D. Food & Biological Nutrition</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.nutrition.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* E. Practical Precautions */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-amber-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>E. Practical Precautions</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.precautions.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Row 3: Supportive Care Measures & Medical Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* F. Supportive Care Measures */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-rose-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <HeartPulse className="w-4 h-4 text-rose-400" />
                <span>F. Supportive Care Measures</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.supportiveCare.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* G. Medical Care & Medicine Safety */}
            <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
              <div className="flex items-center gap-2 text-cyan-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
                <Pill className="w-4 h-4 text-cyan-400" />
                <span>G. Medical Care & Medicine Safety</span>
              </div>
              <ul className="space-y-1.5 text-red-100/90 text-xs">
                {content.medicalTreatment.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* H. When to Seek Urgent Medical Help (Clinical Red Flags) */}
          <section className="p-4 rounded-2xl bg-rose-950/30 border border-rose-600/30">
            <div className="flex items-center gap-2 text-rose-300 font-['Cinzel',serif] font-bold text-xs uppercase mb-2">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>
                H. When to Seek Urgent Medical Help (Clinical Red Flags)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {content.whenToSeekHelp.map((p, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/25 text-xs text-rose-200/90 flex items-start gap-2"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence Notes */}
          {content.plantEvidenceNotes &&
            content.plantEvidenceNotes.length > 0 && (
              <section className="p-4 rounded-2xl bg-[#180205]/70 border border-red-900/30">
                <span className="font-['Cinzel',serif] text-xs font-bold text-red-300 uppercase tracking-wider block mb-2">
                  Scientific Evidence & Physiological Notes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.plantEvidenceNotes.map((note, i) => (
                    <div
                      key={i}
                      className="text-xs p-3 rounded-xl bg-[#220308]/60 border border-red-800/30"
                    >
                      <div className="font-semibold text-white mb-0.5">
                        {note.itemName}
                      </div>
                      <div className="text-[11px] text-red-300/90 mb-1">
                        <strong>Role:</strong> {note.role}
                      </div>
                      <div className="text-[11px] text-emerald-300/90 mb-1">
                        <strong>Evidence:</strong> {note.evidence}
                      </div>
                      <div className="text-[11px] text-rose-300/80">
                        <strong>Safety:</strong> {note.safety}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Sources */}
          <footer className="pt-3 border-t border-red-900/30 flex flex-wrap items-center justify-between gap-2 text-[11px] text-red-300/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
              <span>
                Evidence Sources:{" "}
                {content.sources.map((s) => s.name).join(" • ")}
              </span>
            </div>
            <span className="text-[10px] text-red-400/60 font-mono">
              PULSEBOUND Bio-Kinetic Intelligence
            </span>
          </footer>
        </div>

        {/* Footer Action: CONTINUE to Badge sequence */}
        <div className="mt-6 pt-5 border-t border-red-900/30 flex justify-end">
          <button
            type="button"
            onClick={onContinue}
            data-testid="learning-card-continue-button"
            className="group flex items-center gap-3 px-8 py-3 rounded-full border border-red-400 bg-gradient-to-r from-red-800 via-rose-600 to-red-600 text-white font-['Cinzel',serif] font-bold text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(227,38,54,0.5)] hover:shadow-[0_0_35px_rgba(227,38,54,0.7)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <span>CONTINUE TO BADGE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.article>
    </div>
  );
}

export default LearningCard;
