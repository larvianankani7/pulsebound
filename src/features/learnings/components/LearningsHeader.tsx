import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export function LearningsHeader() {
  return (
    <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-purple-500/20 pb-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-purple-400/90 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          <span>SYLVARA ARCHIVES</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-purple-200 to-fuchsia-300">
          LEARNINGS & DISCOVERY
        </h1>
        <p className="text-xs sm:text-sm text-purple-300/70 mt-1">
          Knowledge earned through your botanical exploration
        </p>
      </div>

      <Link
        to="/"
        onClick={playMenuClickSound}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.15)] self-start sm:self-auto"
        aria-label="Return to Main Menu"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Main Menu</span>
      </Link>
    </header>
  );
}
