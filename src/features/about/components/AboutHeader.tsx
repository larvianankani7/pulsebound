import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export function AboutHeader() {
  return (
    <header className="relative mb-10 text-center flex flex-col items-center">
      {/* Back to Main Menu Button */}
      <div className="w-full flex justify-start mb-6">
        <Link
          to="/"
          onClick={() => playMenuClickSound()}
          className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-red-700/35 bg-[#160205]/80 backdrop-blur-md text-[#fda4af] font-['Cinzel',serif] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:border-red-500 hover:bg-[#250308] hover:text-white hover:shadow-[0_0_20px_rgba(227,38,54,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Return to Main Menu"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Main Menu</span>
        </Link>
      </div>

      {/* Small Section Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-700/40 bg-[#250308]/70 text-red-300 font-['Cinzel',serif] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-[0_0_12px_rgba(227,38,54,0.25)]">
        <Sparkles className="w-3 h-3 text-red-400" />
        <span>ABOUT THE PROJECT</span>
      </div>

      {/* Large Project Title */}
      <h1
        role="heading"
        aria-label="PULSEBOUND"
        className="font-['Cinzel',Georgia,serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.14em] uppercase select-none animate-gradient-wave bg-gradient-to-r from-[#ffffff] via-[#fda4af] via-[#ff4d6d] via-[#fecdd3] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_28px_rgba(227,38,54,0.55)]"
      >
        PULSEBOUND
      </h1>

      {/* Official Tagline */}
      <p className="mt-3 sm:mt-4 max-w-3xl font-['Cormorant_Garamond',Georgia,serif] text-lg sm:text-xl md:text-2xl italic font-normal tracking-wide text-[#fda4af]/95 leading-relaxed drop-shadow-[0_2px_12px_rgba(227,38,54,0.3)] select-none">
        <span className="animate-tagline-flow bg-gradient-to-r from-[#ffe4e6] via-[#fda4af] via-[#ff4d6d] to-[#fecdd3] bg-clip-text text-transparent">
          &ldquo;Forge the flesh. Master the pulse. Unlock your vitality.&rdquo;
        </span>
      </p>

      {/* Introductory Summary Sentence */}
      <p className="mt-4 max-w-2xl text-sm sm:text-base text-red-100/85 font-sans leading-relaxed">
        PULSEBOUND is an interactive, frontend-only bio-kinetic health and
        fitness learning game built for IdeaLab Hacks. It transforms abstract
        exercise physiology, biomechanics, and circadian recovery into an
        engaging, high-stakes tactical simulator.
      </p>
    </header>
  );
}

export default AboutHeader;
