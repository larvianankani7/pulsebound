import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { playMenuClickSound } from "../../main-menu/utils/soundEffects";

export function FindingsHeader() {
  return (
    <header className="relative mb-8 text-center flex flex-col items-center">
      {/* Return to Main Menu */}
      <div className="w-full flex justify-start mb-6">
        <Link
          to="/"
          onClick={() => playMenuClickSound()}
          className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#c084fc]/30 bg-[#120a1f]/75 backdrop-blur-md text-[#e9d5ff] font-['Cinzel',serif] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:border-[#d8b4fe]/85 hover:bg-[#1f1038] hover:text-white hover:shadow-[0_0_20px_rgba(192,132,252,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
          aria-label="Return to Main Menu"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Main Menu</span>
        </Link>
      </div>

      {/* Small Section Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c084fc]/30 bg-[#1f1038]/60 text-[#c084fc] font-['Cinzel',serif] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-[0_0_12px_rgba(192,132,252,0.2)]">
        <Sparkles className="w-3 h-3 text-[#d8b4fe]" />
        <span>FINDINGS & DISCOVERY</span>
      </div>

      {/* Main Question Heading */}
      <h1
        role="heading"
        aria-label="What Did Your Last Meal Look Like?"
        className="font-['Cinzel',Georgia,serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide text-center select-none animate-gradient-wave bg-gradient-to-r from-[#ffffff] via-[#d8b4fe] via-[#c084fc] via-[#e9d5ff] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(192,132,252,0.45)] max-w-4xl"
      >
        What Did Your Last Meal Look Like?
      </h1>

      {/* Official Subtitle */}
      <p className="mt-3 sm:mt-4 max-w-2xl font-['Cormorant_Garamond',Georgia,serif] text-base sm:text-lg md:text-xl lg:text-2xl italic font-normal tracking-wide text-[#d8b4fe]/90 leading-relaxed drop-shadow-[0_2px_12px_rgba(192,132,252,0.25)] select-none">
        <span className="animate-tagline-flow bg-gradient-to-r from-[#e9d5ff] via-[#d8b4fe] via-[#f3e8ff] to-[#c4b5fd] bg-clip-text text-transparent">
          &ldquo;Share what you ate, and discover the nutrients, benefits, and
          nutritional variety within your meal.&rdquo;
        </span>
      </p>
    </header>
  );
}
