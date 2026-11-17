import React from "react";
import { useTranslation } from "react-i18next";
import { Volume2, VolumeX, Music, Bell, Sparkles, Info } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export const AudioSection: React.FC = () => {
  const { t } = useTranslation();

  const musicVolume = useSettingsStore((s) => s.musicVolume);
  const isMusicMuted = useSettingsStore((s) => s.isMusicMuted);
  const setMusicVolume = useSettingsStore((s) => s.setMusicVolume);
  const toggleMusicMute = useSettingsStore((s) => s.toggleMusicMute);

  const sfxVolume = useSettingsStore((s) => s.sfxVolume);
  const isSfxMuted = useSettingsStore((s) => s.isSfxMuted);
  const setSfxVolume = useSettingsStore((s) => s.setSfxVolume);
  const toggleSfxMute = useSettingsStore((s) => s.toggleSfxMute);

  const handleSfxChange = (newVolume: number) => {
    setSfxVolume(newVolume);
    // Play subtle preview click if not muted
    if (!isSfxMuted && newVolume > 0) {
      playMenuClickSound();
    }
  };

  const handleTestSfx = () => {
    playMenuClickSound();
  };

  return (
    <div
      className="space-y-8 animate-fadeIn"
      data-testid="settings-audio-section"
    >
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2">
          <Volume2 className="w-6 h-6 text-purple-400" />
          {t("settings.audio.title")}
        </h2>
        <p className="text-sm text-purple-200/70 mt-1">
          {t("settings.audio.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Background Music Card */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-6 shadow-lg shadow-black/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">
                  {t("settings.audio.musicHeading")}
                </h3>
                <p className="text-xs text-purple-300/60">
                  Atmospheric ambient soundtrack
                </p>
              </div>
            </div>

            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                isMusicMuted
                  ? "bg-rose-950/40 text-rose-300 border-rose-500/30"
                  : "bg-emerald-950/40 text-emerald-300 border-emerald-500/30"
              }`}
            >
              {isMusicMuted
                ? t("settings.audio.musicMuted")
                : t("settings.audio.musicPlaying")}
            </span>
          </div>

          {/* Volume Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label
                htmlFor="music-volume-slider"
                className="font-medium text-purple-200/80"
              >
                {t("settings.audio.musicVolume")}
              </label>
              <span className="font-mono text-purple-300 font-semibold">
                {musicVolume}%
              </span>
            </div>
            <input
              id="music-volume-slider"
              type="range"
              min="0"
              max="100"
              value={musicVolume}
              onChange={(e) => setMusicVolume(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-purple-950/60 appearance-none cursor-pointer accent-purple-400 focus:outline-none"
            />
          </div>

          {/* Mute Button */}
          <button
            type="button"
            onClick={toggleMusicMute}
            className={`w-full py-2.5 px-4 rounded-xl border font-medium text-xs transition-all flex items-center justify-center gap-2 ${
              isMusicMuted
                ? "border-purple-400/60 bg-purple-600/30 text-white hover:bg-purple-600/40"
                : "border-white/10 bg-white/[0.04] text-purple-200 hover:bg-white/[0.08]"
            }`}
          >
            {isMusicMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-purple-300" />
                {t("settings.audio.musicUnmute")}
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-rose-300" />
                {t("settings.audio.musicMute")}
              </>
            )}
          </button>
        </div>

        {/* Sound Effects Card */}
        <div className="rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-6 space-y-6 shadow-lg shadow-black/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">
                  {t("settings.audio.sfxHeading")}
                </h3>
                <p className="text-xs text-purple-300/60">
                  Tactile feedback & synthesis
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleTestSfx}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-900/40 text-purple-200 border border-purple-400/30 hover:bg-purple-800/40 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-purple-300" />
              Test Tone
            </button>
          </div>

          {/* SFX Volume Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label
                htmlFor="sfx-volume-slider"
                className="font-medium text-purple-200/80"
              >
                {t("settings.audio.sfxVolume")}
              </label>
              <span className="font-mono text-purple-300 font-semibold">
                {sfxVolume}%
              </span>
            </div>
            <input
              id="sfx-volume-slider"
              type="range"
              min="0"
              max="100"
              value={sfxVolume}
              onChange={(e) => handleSfxChange(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-purple-950/60 appearance-none cursor-pointer accent-indigo-400 focus:outline-none"
            />
          </div>

          {/* SFX Mute Button */}
          <button
            type="button"
            onClick={toggleSfxMute}
            className={`w-full py-2.5 px-4 rounded-xl border font-medium text-xs transition-all flex items-center justify-center gap-2 ${
              isSfxMuted
                ? "border-indigo-400/60 bg-indigo-600/30 text-white hover:bg-indigo-600/40"
                : "border-white/10 bg-white/[0.04] text-purple-200 hover:bg-white/[0.08]"
            }`}
          >
            {isSfxMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-indigo-300" />
                {t("settings.audio.sfxUnmute")}
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-rose-300" />
                {t("settings.audio.sfxMute")}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Audio Integration Technical Note */}
      <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-md flex items-center gap-3">
        <Info className="w-5 h-5 text-purple-400 flex-shrink-0" />
        <p className="text-xs text-purple-200/80 leading-relaxed">
          {t("settings.audio.note")}
        </p>
      </div>
    </div>
  );
};
