import React, { useEffect } from "react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { SettingsHeader } from "./components/SettingsHeader";
import { SettingsSidebar } from "./components/SettingsSidebar";
import { ProfileSection } from "./components/ProfileSection";
import { ControlsSection } from "./components/ControlsSection";
import { LanguageSection } from "./components/LanguageSection";
import { AudioSection } from "./components/AudioSection";
import { HowToPlaySection } from "./components/HowToPlaySection";
import { AccessibilitySection } from "./components/AccessibilitySection";
import { DataProgressSection } from "./components/DataProgressSection";
import { useSettingsStore } from "./store/useSettingsStore";
import { useExploreStore } from "../explore/store/useExploreStore";
import { useLearningsStore } from "../learnings/store/useLearningsStore";

export const SettingsPage: React.FC = () => {
  const activeSection = useSettingsStore((s) => s.activeSection);
  const setActiveSection = useSettingsStore((s) => s.setActiveSection);

  useEffect(() => {
    useSettingsStore.getState().init();
    void useExploreStore.getState().init();
    void useLearningsStore.getState().init();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f3eeee] select-none">
      {/* Atmospheric Video Background */}
      <BackgroundMedia videoSrc="/videos/pulsebound-bg.mp4" startTime={0} />

      {/* Atmospheric Music Controller */}
      <MusicControl audioSrc="/audio/pulsebound-theme.mp3" />

      {/* Main Settings Container */}
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-4 py-8 sm:px-8 md:px-10">
        {/* Settings Header */}
        <SettingsHeader />

        {/* Two-Column Responsive Layout */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Sidebar Navigation */}
          <SettingsSidebar
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />

          {/* Active Settings Panel */}
          <div className="flex-1 w-full min-w-0">
            {activeSection === "profile" && <ProfileSection />}
            {activeSection === "controls" && <ControlsSection />}
            {activeSection === "language" && <LanguageSection />}
            {activeSection === "audio" && <AudioSection />}
            {activeSection === "how-to-play" && <HowToPlaySection />}
            {activeSection === "accessibility" && <AccessibilitySection />}
            {activeSection === "data" && <DataProgressSection />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
