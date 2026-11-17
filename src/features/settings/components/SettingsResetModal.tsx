import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, RotateCcw, X, ShieldCheck } from "lucide-react";

interface SettingsResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  isResetting?: boolean;
}

export const SettingsResetModal: React.FC<SettingsResetModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isResetting = false,
}) => {
  const { t } = useTranslation();

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-950/40 via-purple-950/60 to-black/90 p-6 backdrop-blur-xl shadow-2xl shadow-rose-900/30 space-y-6 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-400/40 shadow-inner">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3
                id="reset-dialog-title"
                className="font-serif font-bold text-white text-lg tracking-wide"
              >
                {t("settings.data.modalTitle")}
              </h3>
              <p className="text-xs text-rose-300/70 mt-0.5">
                Irreversible Action
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-300/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={t("common.close")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Warning Body */}
        <div className="space-y-3">
          <p className="text-xs text-purple-100/90 leading-relaxed">
            {t("settings.data.modalWarning")}
          </p>

          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              <strong>Your preferences are preserved:</strong> Explorer
              username, avatar, language, sound effects, music volume, and
              accessibility settings will remain completely untouched.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isResetting}
            className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-purple-200 transition-colors"
          >
            {t("settings.data.modalCancel")}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isResetting}
            className="px-5 py-2.5 rounded-xl border border-rose-400/50 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-xs font-semibold text-white shadow-lg shadow-rose-600/30 transition-all flex items-center gap-2"
          >
            <RotateCcw
              className={`w-3.5 h-3.5 ${isResetting ? "animate-spin" : ""}`}
            />
            {isResetting ? "Resetting..." : t("settings.data.modalConfirm")}
          </button>
        </div>
      </div>
    </div>
  );
};
