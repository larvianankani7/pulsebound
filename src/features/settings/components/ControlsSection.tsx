import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MousePointer,
  Eye,
  Sparkles,
  Command,
  CornerDownLeft,
  X,
  CheckCircle2,
  Leaf,
  Info,
} from "lucide-react";

export const ControlsSection: React.FC = () => {
  const { t } = useTranslation();

  // Interactive sandbox state
  const [isHovered, setIsHovered] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-controls-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <MousePointer className="w-6 h-6 text-purple-400" />
          {t("settings.controls.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.controls.subtitle")}
        </p>
      </div>

      {/* Core Interaction Principle Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-400/40 bg-gradient-to-r from-purple-950/60 via-indigo-950/40 to-black/60 p-6 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">
              The SYLVARA Interaction Philosophy
            </span>
            <p className="text-base sm:text-lg font-serif font-semibold text-white leading-relaxed">
              &ldquo;{t("settings.controls.corePrinciple")}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Illustrated Concept Cards (Hover vs Click) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hover Interactions */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-base">
                {t("settings.controls.hoverTitle")}
              </h3>
              <p className="text-xs text-purple-200/60">
                Passive discovery & previews
              </p>
            </div>
          </div>

          <p className="text-xs text-purple-200/80 leading-relaxed">
            {t("settings.controls.hoverDesc")}
          </p>

          <ul className="text-xs text-purple-300/80 space-y-1.5 list-disc list-inside">
            <li>Nutrient benefits and micro-elements</li>
            <li>Plant properties and active phytochemicals</li>
            <li>Interactive item preview cards</li>
            <li>Contextual gameplay hints</li>
          </ul>

          {/* Mini Illustrated diagram */}
          <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 flex flex-col items-center justify-center text-center space-y-2 relative">
            <div className="px-3 py-1.5 rounded-lg border border-purple-400/40 bg-purple-900/40 text-purple-200 text-xs flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Hover over Garden Specimen</span>
            </div>
            <div className="text-[10px] text-cyan-300 bg-black/70 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1 shadow-md">
              <Info className="w-3 h-3 text-cyan-400" />
              Tooltip reveals active nutrients
            </div>
          </div>
        </div>

        {/* Click Interactions */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
              <MousePointer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-base">
                {t("settings.controls.clickTitle")}
              </h3>
              <p className="text-xs text-purple-200/60">
                Active selection & inspection
              </p>
            </div>
          </div>

          <p className="text-xs text-purple-200/80 leading-relaxed">
            {t("settings.controls.clickDesc")}
          </p>

          <ul className="text-xs text-purple-300/80 space-y-1.5 list-disc list-inside">
            <li>Select and commit botanical remedies in Explore</li>
            <li>Open full clinical and evidence-based learning dossiers</li>
            <li>Launch and submit unlocked badge quizzes</li>
            <li>Navigate smoothly between sections</li>
          </ul>

          {/* Mini Illustrated diagram */}
          <div className="mt-4 p-4 rounded-xl border border-purple-500/20 bg-purple-950/10 flex flex-col items-center justify-center text-center space-y-2 relative">
            <div className="px-3 py-1.5 rounded-lg border border-purple-400/60 bg-purple-600/40 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/30">
              <CheckCircle2 className="w-4 h-4 text-purple-200" />
              <span>Click Specimen to Inspect</span>
            </div>
            <div className="text-[10px] text-purple-300 bg-black/70 px-3 py-1 rounded-full border border-purple-500/30 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 text-purple-400" />
              Opens full educational dossier view
            </div>
          </div>
        </div>
      </div>

      {/* Input & Keyboard Navigation Controls */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
            <Command className="w-5 h-5 text-purple-400" />
            {t("settings.controls.keyboardTitle")}
          </h3>
          <p className="text-xs text-purple-300/60 mt-0.5">
            {t("settings.controls.keyboardDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-200">
                Mouse Hover
              </span>
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-xs text-purple-300/70 leading-relaxed">
              Reveals nutrient hints, plant compound details, and quick
              tooltips.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-200">
                Left Click
              </span>
              <MousePointer className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-xs text-purple-300/70 leading-relaxed">
              Selects garden remedies, unlocks lessons, and opens detailed
              cards.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-200">
                Tab / Shift+Tab
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple-900/50 text-purple-300 border border-purple-500/30">
                ⇥ Tab
              </span>
            </div>
            <p className="text-xs text-purple-300/70 leading-relaxed">
              Cycles forward and backward through accessible interactive
              elements.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-200">
                Enter / Space / Esc
              </span>
              <CornerDownLeft className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-purple-300/70 leading-relaxed">
              Enter/Space triggers actions. Escape immediately closes active
              modals.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration Sandbox */}
      <div className="rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-md p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              {t("settings.controls.demoTitle")}
            </h3>
            <p className="text-xs text-purple-300/60 mt-0.5">
              {t("settings.controls.demoSubtitle")}
            </p>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-200 border border-purple-400/30 self-start sm:self-auto">
            Live Preview
          </span>
        </div>

        {/* Sandbox Canvas */}
        <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-black/40 flex flex-col items-center justify-center min-h-[220px] relative">
          {/* Botanical Specimen Interactive Card */}
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              onClick={() => setIsDossierOpen(!isDossierOpen)}
              className={`group px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                isDossierOpen
                  ? "border-purple-400 bg-purple-900/40 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  : isHovered
                    ? "border-cyan-400/70 bg-cyan-950/30 shadow-[0_0_20px_rgba(34,211,238,0.25)] scale-105"
                    : "border-purple-500/30 bg-black/60 hover:border-purple-400"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-purple-300/70 tracking-wider">
                  {t("settings.controls.specimenCategory")}
                </span>
                <h4 className="text-white font-semibold text-sm">
                  {t("settings.controls.specimenName")}
                </h4>
                <span className="text-[11px] text-purple-300/50">
                  {isDossierOpen
                    ? "Dossier Active (Click to Close)"
                    : "Hover for preview • Click for dossier"}
                </span>
              </div>
            </button>

            {/* Live Hover Tooltip */}
            {isHovered && !isDossierOpen && (
              <div
                role="tooltip"
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3 rounded-xl border border-cyan-400/50 bg-black/90 backdrop-blur-md text-xs text-purple-100 shadow-xl shadow-cyan-500/20 z-20 animate-fadeIn pointer-events-none"
              >
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Phytochemical Preview</span>
                </div>
                <p className="leading-relaxed text-[11px] text-purple-200/90">
                  {t("settings.controls.specimenTooltip")}
                </p>
                <div className="w-2.5 h-2.5 bg-black/90 border-r border-b border-cyan-400/50 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
              </div>
            )}
          </div>

          {/* Expanded Dossier Drawer from Click */}
          {isDossierOpen && (
            <div className="w-full max-w-lg mt-6 p-5 rounded-xl border border-purple-400/50 bg-purple-950/60 backdrop-blur-md shadow-2xl animate-fadeIn space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <h5 className="font-serif font-semibold text-white text-sm">
                    {t("settings.controls.drawerTitle")}
                  </h5>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDossierOpen(false)}
                  className="p-1 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={t("settings.controls.drawerClose")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-purple-200/90 leading-relaxed">
                {t("settings.controls.drawerDesc")}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-purple-500/20 text-[11px] text-purple-300/70">
                <span>
                  Active compounds: Eugenol, Rosmarinic Acid, Ursolic Acid
                </span>
                <span className="text-emerald-400 font-medium">
                  Verified Evidence
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
