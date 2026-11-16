import { BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";

export function WhatItDoesSection() {
  const features = [
    {
      title: "Interactive Meal & Food Discovery",
      desc: "Users enter or search everyday meals to uncover the diverse botanical and nutritional ingredients contributing to their plate.",
    },
    {
      title: "Nutritional Variety & Synergy",
      desc: "Highlights how complementary food pairings (e.g. Vitamin C enhancing non-heme iron absorption) enrich meals naturally without strict math.",
    },
    {
      title: "Vital Nutrients & Biological Roles",
      desc: "Demystifies vitamins, minerals, proteins, and fibres with plain-language explanations of their genuine functions in the human body.",
    },
    {
      title: "Illustrated 2D Garden Scenarios",
      desc: "Connects ingredients back to the earth, teaching plant families, edible plant anatomy, and soil-to-table ecological relationships.",
    },
    {
      title: "Lessons, 3-Question Quizzes & Badges",
      desc: "Unlocks bite-sized interactive lessons and singular quiz challenges that reward players with collectible achievement badges.",
    },
    {
      title: "Culturally Inclusive & Bilingual",
      desc: "Designed from day one to celebrate diverse regional food traditions with full English and Hindi language accessibility.",
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="what-it-does-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <BookOpen className="h-5 w-5" />
        </div>
        <h3
          id="what-it-does-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          2. What It Does
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        SYLVARA translates scientific food composition data into an accessible,
        interactive digital companion. Through tactile discovery and visual
        storytelling, learners explore what their food does for them:
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 rounded-xl border border-purple-500/20 bg-[#160c29]/70 p-4 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1f1038]/80 hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]"
          >
            <CheckCircle2 className="h-5 w-5 text-[#c084fc] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white font-['Cinzel',serif] tracking-wide">
                {item.title}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#d8b4fe]/75 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Critical Non-Medical Disclaimer */}
      <div className="flex items-start gap-3.5 rounded-2xl border border-amber-500/30 bg-[#1c130d]/80 p-4 sm:p-5 text-amber-200/90 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
        <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="text-amber-300 font-semibold block mb-1">
            Educational Scope & Safe Boundary:
          </strong>
          SYLVARA is exclusively an educational and awareness tool. It does{" "}
          <span className="underline decoration-amber-400 font-semibold">
            not
          </span>{" "}
          track calories, calculate macronutrient ratios, score daily diets,
          diagnose nutritional deficiencies, prescribe medicines, or provide
          medical advice. All health concerns should always be discussed with a
          certified healthcare practitioner.
        </div>
      </div>
    </section>
  );
}
