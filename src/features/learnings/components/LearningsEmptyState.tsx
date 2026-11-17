import { Link } from "react-router-dom";
import { Compass, Sparkles } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export function LearningsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-purple-500/20 bg-[#0e0819]/60 backdrop-blur-xl p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(168,85,247,0.12)]">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/30 via-fuchsia-600/20 to-transparent flex items-center justify-center border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <Compass className="w-10 h-10 text-purple-300 animate-pulse" />
        </div>
        <div className="absolute -top-1 -right-1 p-1 rounded-full bg-purple-500/30 border border-purple-400/40 text-purple-200">
          <Sparkles className="w-4 h-4 text-fuchsia-300" />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-purple-100 tracking-tight mb-2">
        No Learnings Unlocked Yet
      </h3>

      <p className="max-w-md text-sm text-purple-300/70 mb-8 leading-relaxed">
        Complete botanical challenges in Explore to unlock evidence-based health
        insights, plant mechanisms, precautions, and badges.
      </p>

      <Link
        to="/explore"
        onClick={playMenuClickSound}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <Compass className="w-4 h-4" />
        <span>Start Explore Challenge</span>
      </Link>
    </div>
  );
}
