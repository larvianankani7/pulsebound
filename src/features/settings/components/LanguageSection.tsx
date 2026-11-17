import React from "react";
import { useTranslation } from "react-i18next";
import { Languages, Check, Globe } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";
import { LANGUAGES } from "../constants";
import { type AppLanguage } from "../types";

export const LanguageSection: React.FC = () => {
  const { t } = useTranslation();
  const currentLanguage = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);

  const handleSelectLanguage = (code: AppLanguage) => {
    setLanguage(code);
  };

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-language-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <Languages className="w-6 h-6 text-purple-400" />
          {t("settings.language.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.language.subtitle")}
        </p>
      </div>

      {/* Language Selection Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-purple-400" />
          {t("settings.language.selectPrompt")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LANGUAGES.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                aria-pressed={isSelected}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? "border-purple-400/80 bg-purple-950/40 shadow-[0_0_25px_rgba(168,85,247,0.3)] ring-1 ring-purple-400/50"
                    : "border-white/10 bg-black/40 hover:border-purple-500/40 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl select-none"
                    role="img"
                    aria-label={lang.name}
                  >
                    {lang.flag}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {lang.nativeName}
                    </h4>
                    <p className="text-xs text-purple-300/60 font-medium">
                      {lang.name}
                    </p>
                  </div>
                </div>

                {isSelected ? (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 text-xs font-semibold border border-purple-400/40">
                    <Check className="w-3.5 h-3.5 text-purple-300" />
                    <span>Active</span>
                  </div>
                ) : (
                  <span className="text-xs text-purple-300/40 group-hover:text-purple-300 transition-colors">
                    Select
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Persistence Note */}
      <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-md flex items-center gap-3">
        <Languages className="w-5 h-5 text-purple-400 flex-shrink-0" />
        <p className="text-xs text-purple-200/80 leading-relaxed">
          {t("settings.language.currentNotice")}
        </p>
      </div>
    </div>
  );
};
