import { Compass, Sparkles } from "lucide-react";

export function InspirationSection() {
  return (
    <section
      className="border-b border-[#c084fc]/15 pb-10 pt-2"
      aria-labelledby="inspiration-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <Compass className="h-5 w-5" />
        </div>
        <h3
          id="inspiration-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          1. Inspiration
        </h3>
      </div>

      <div className="space-y-4 text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans">
        <p>
          Food is one of the most intimate, universal parts of human existence.
          It connects our bodies to the soil, our memories to family kitchens,
          and our cultures to biodiversity. Yet, modern nutrition education is
          often delivered in sterile spreadsheets, restrictive calorie budgets,
          and anxiety-provoking numerical targets.
        </p>

        {/* Hackathon Context Note */}
        <div className="rounded-xl border border-purple-500/20 bg-[#170c2a]/70 p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc] mb-1.5">
            <Sparkles className="h-4 w-4" />
            <span>Hackathon Context & Genesis</span>
          </div>
          <p className="text-xs sm:text-sm text-[#d8b4fe]/90">
            Conceived as part of a software hackathon challenge{" "}
            <span className="text-purple-300 font-mono text-xs">
              [Track: Interactive Education & Health Awareness]
            </span>
            , SYLVARA was developed to reimagine nutritional discovery. Instead
            of building another restrictive diet tracker, the goal was to craft
            a narrative, gamified world where every meal becomes an illustrated
            adventure.
          </p>
        </div>

        <p>
          We asked a fundamental question:{" "}
          <em className="text-[#d8b4fe] font-serif">
            What if discovering what is on your plate felt like exploring an
            enchanted forest or ancient garden?
          </em>{" "}
          By bridging gastronomy, plant biology, and human physiology into a
          sensory story, SYLVARA turns ordinary meals into open doorways of
          curiosity.
        </p>
      </div>
    </section>
  );
}
