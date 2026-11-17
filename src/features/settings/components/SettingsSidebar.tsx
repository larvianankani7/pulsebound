import React from "react";
import { useTranslation } from "react-i18next";
import {
  User,
  MousePointer,
  Languages,
  Volume2,
  HelpCircle,
  Sliders,
  Database,
} from "lucide-react";
import { type SettingsSection } from "../types";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSelectSection: (section: SettingsSection) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const { t } = useTranslation();

  const sections: {
    id: SettingsSection;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "profile",
      label: t("settings.sections.profile"),
      icon: User,
    },
    {
      id: "controls",
      label: t("settings.sections.controls"),
      icon: MousePointer,
    },
    {
      id: "language",
      label: t("settings.sections.language"),
      icon: Languages,
    },
    {
      id: "audio",
      label: t("settings.sections.audio"),
      icon: Volume2,
    },
    {
      id: "how-to-play",
      label: t("settings.sections.howToPlay"),
      icon: HelpCircle,
    },
    {
      id: "accessibility",
      label: t("settings.sections.accessibility"),
      icon: Sliders,
    },
    {
      id: "data",
      label: t("settings.sections.data"),
      icon: Database,
    },
  ];

  const handleSelect = (id: SettingsSection) => {
    playMenuClickSound();
    onSelectSection(id);
  };

  return (
    <aside
      className="w-full md:w-64 lg:w-72 shrink-0 md:sticky md:top-8"
      aria-label="Settings navigation"
    >
      <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-3 sm:p-4 shadow-xl shadow-black/40">
        <h2 className="sr-only">Settings Navigation</h2>

        {/* Desktop Vertical Menu / Mobile Horizontal Scroll */}
        <nav className="flex flex-row md:flex-col gap-1.5 overflow-x-auto no-scrollbar py-1 md:py-0">
          {sections.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap text-left w-full ${
                  isActive
                    ? "bg-gradient-to-r from-purple-900/70 to-indigo-950/70 border border-purple-400/60 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] font-semibold"
                    : "text-purple-300/70 hover:text-white hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? "text-purple-300" : "text-purple-400/70"
                  }`}
                />
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
