import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Sliders } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export const SettingsHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-purple-500/20 pb-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-purple-400/90 mb-1">
          <Sliders className="w-3.5 h-3.5 text-purple-300" />
          <span>SYSTEM PREFERENCES</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-purple-200 to-fuchsia-300">
          {t("settings.title")}
        </h1>
        <p className="text-xs sm:text-sm text-purple-300/70 mt-1">
          {t("settings.subtitle")}
        </p>
      </div>

      <Link
        to="/"
        onClick={playMenuClickSound}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.15)] self-start sm:self-auto"
        aria-label={t("navigation.mainMenu")}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t("navigation.mainMenu")}</span>
      </Link>
    </header>
  );
};
