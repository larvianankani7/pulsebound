import { Compass, Sparkles } from "lucide-react";

export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1: Content Expansion",
      status: "Planned Future Direction",
      items: [
        "Broaden the ingredient database with diverse Indian regional and international cuisines",
        "Add comprehensive macro and micronutrient profiles sourced from open verified food composition tables",
        "Introduce seasonal harvest calendars and regional agriculture context",
      ],
    },
    {
      phase: "Phase 2: Interactive Garden Simulation",
      status: "Conceptual Exploration",
      items: [
        "Expand the 2D garden with seasonal weather effects, companion planting, and soil ecology",
        "Add interactive culinary scenario simulators (e.g. balancing spice, acidity, and fermentation)",
        "Introduce unlockable visual growth stages for rare botanical specimens",
      ],
    },
    {
      phase: "Phase 3: Expanded Safety & Curriculum",
      status: "Planned Future Direction",
      items: [
        "In-depth interactive modules on antibiotic stewardship and safe medication handling",
        "Visual guide on distinguishing edible plants from toxic look-alikes",
        "Expansion of bilingual audio narration for learners with visual or reading impairments",
      ],
    },
    {
      phase: "Phase 4: User Portability & Customization",
      status: "Future Architecture Goal",
      items: [
        "Encrypted user-initiated JSON export and import for seamless manual progress transfer across devices",
        "Personalized learning tracks tailored for schools, community groups, and independent explorers",
      ],
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="roadmap-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <Compass className="h-5 w-5" />
        </div>
        <h3
          id="roadmap-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          7. What&apos;s Next for SYLVARA
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        While the current release focuses on the core Main Menu, food discovery
        foundation, and architectural standards, the journey ahead will enrich
        SYLVARA into a comprehensive food-and-nature universe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roadmapItems.map((r, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-purple-500/20 bg-[#140b25]/75 p-5 transition-all duration-300 hover:border-purple-400/40 hover:bg-[#1c0f33]"
          >
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold tracking-wide text-white">
                {r.phase}
              </h4>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c084fc] bg-[#281347] px-2 py-0.5 rounded-full border border-purple-500/30">
                {r.status}
              </span>
            </div>

            <ul className="space-y-2 mt-3 text-xs sm:text-sm text-[#d8b4fe]/80 font-sans">
              {r.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#c084fc] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
