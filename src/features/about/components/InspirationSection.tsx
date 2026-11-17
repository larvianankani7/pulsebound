import { Compass, Sparkles } from "lucide-react";

export function InspirationSection() {
  return (
    <section
      className="border-b border-red-900/25 pb-10 pt-2"
      aria-labelledby="inspiration-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-700/40 bg-[#250308] text-red-400">
          <Compass className="h-5 w-5" />
        </div>
        <h3
          id="inspiration-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          1. Inspiration
        </h3>
      </div>

      <div className="space-y-4 text-sm sm:text-base text-red-100/85 leading-relaxed font-sans">
        <p>
          Physical vitality is the foundation of human capability, mental
          clarity, and longevity. Yet, modern society faces an unprecedented
          epidemic of chronic physical deconditioning, sedentary habits, and
          confusing fitness dogmas. Most existing health apps resemble boring
          numerical spreadsheets, punitive calorie counters, or restrictive
          routines that induce guilt rather than understanding.
        </p>

        {/* Hackathon Context Note */}
        <div className="rounded-xl border border-red-700/30 bg-[#1e0206]/70 p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-1.5">
            <Sparkles className="h-4 w-4" />
            <span>IdeaLab Hacks Context & Vision</span>
          </div>
          <p className="text-xs sm:text-sm text-red-200/90">
            Created for <strong className="text-white">IdeaLab Hacks</strong> on
            Devpost, PULSEBOUND answers an open-ended challenge by converging{" "}
            <strong className="text-red-300">
              Fitness + Health + Health Education + Gamification
            </strong>
            . Instead of building another generic fitness dashboard, we
            engineered a dark, atmospheric bio-kinetic game where players
            explore real human physiology through tactical decisions, mission
            progression, and experiential discovery.
          </p>
        </div>

        <p>
          We asked a fundamental question:{" "}
          <em className="text-[#fda4af] font-serif">
            &ldquo;What if learning how your heart, muscles, sleep, and
            hydration work felt like entering a tactical proving ground, where
            every choice reveals the biomechanics of your own body?&rdquo;
          </em>
        </p>
      </div>
    </section>
  );
}

export default InspirationSection;
