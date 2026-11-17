import React from "react";
import { useTranslation } from "react-i18next";
import { Sliders, Sparkles, Type, Eye, Check } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";
import { type TextSize } from "../types";

export const AccessibilitySection: React.FC = () => {
  const { t } = useTranslation();

  const reducedMotion = useSettingsStore((s) => s.reducedMotion);
  const textSize = useSettingsStore((s) => s.textSize);
  const highContrast = useSettingsStore((s) => s.highContrast);

  const setReducedMotion = useSettingsStore((s) => s.setReducedMotion);
  const setTextSize = useSettingsStore((s) => s.setTextSize);
  const setHighContrast = useSettingsStore((s) => s.setHighContrast);

  const textSizeOptions: { id: TextSize; label: string; sample: string }[] = [
    {
      id: "small",
      label: t("settings.accessibility.textSizeSmall"),
      sample: "14px",
    },
    {
      id: "default",
      label: t("settings.accessibility.textSizeDefault"),
      sample: "16px",
    },
    {
      id: "large",
      label: t("settings.accessibility.textSizeLarge"),
      sample: "18px",
    },
  ];

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-accessibility-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <Sliders className="w-6 h-6 text-purple-400" />
          {t("settings.accessibility.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.accessibility.subtitle")}
        </p>
      </div>

      <div className="space-y-6">
        {/* Reduced Motion Setting */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg shadow-black/40">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-base">
                {t("settings.accessibility.reducedMotionTitle")}
              </h3>
              <p className="text-xs text-purple-200/70 mt-0.5 max-w-md">
                {t("settings.accessibility.reducedMotionDesc")}
              </p>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={reducedMotion}
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
              reducedMotion ? "bg-purple-600" : "bg-purple-950/80"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                reducedMotion ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Text Size Setting */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-4 shadow-lg shadow-black/40">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-base">
                {t("settings.accessibility.textSizeTitle")}
              </h3>
              <p className="text-xs text-purple-200/70 mt-0.5">
                {t("settings.accessibility.textSizeDesc")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {textSizeOptions.map((opt) => {
              const isSelected = textSize === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTextSize(opt.id)}
                  aria-pressed={isSelected}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "border-purple-400/80 bg-purple-950/50 ring-1 ring-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                      : "border-white/10 bg-black/40 hover:border-purple-500/30 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">
                      {opt.label}
                    </span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-purple-400" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-purple-300/60 mt-3">
                    Scale: {opt.sample}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* High Contrast Mode Setting */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg shadow-black/40">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-base">
                {t("settings.accessibility.highContrastTitle")}
              </h3>
              <p className="text-xs text-purple-200/70 mt-0.5 max-w-md">
                {t("settings.accessibility.highContrastDesc")}
              </p>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={highContrast}
            onClick={() => setHighContrast(!highContrast)}
            className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
              highContrast ? "bg-cyan-600" : "bg-purple-950/80"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                highContrast ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
