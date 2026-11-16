import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { playMenuClickSound } from "../../features/main-menu/utils/soundEffects";

interface PlaceholderSectionProps {
  title: string;
}

export function PlaceholderSection({ title }: PlaceholderSectionProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 bg-[#07050a] text-[#f3e8ff]">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0714] via-[#07050a] to-[#120824] pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center p-8 sm:p-10 rounded-2xl border border-[#c084fc]/20 bg-[#120a1f]/70 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.15)]">
        <p className="font-['Cinzel',serif] text-xs uppercase tracking-[0.3em] text-[#c084fc]/80 mb-2">
          SYLVARA Realm
        </p>
        <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white mb-4 drop-shadow-[0_2px_12px_rgba(192,132,252,0.4)]">
          {title}
        </h1>
        <p className="font-['Cormorant_Garamond',serif] italic text-lg sm:text-xl text-[#d8b4fe]/85 mb-8">
          This realm is being prepared. Its story will unfold in upcoming
          chronicles.
        </p>

        <Link
          to="/"
          onClick={() => playMenuClickSound()}
          className="group flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#c084fc]/30 bg-[#1a0e2d]/80 text-[#e9d5ff] font-['Cinzel',serif] text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 hover:border-[#d8b4fe]/80 hover:bg-[#251240] hover:text-white hover:shadow-[0_0_20px_rgba(192,132,252,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Return to Main Menu</span>
        </Link>
      </div>
    </div>
  );
}
