import { GraduationCap } from "lucide-react";

export function WhatILearnedSection() {
  const learnings = [
    {
      keyword: "Architecture & Types",
      subject: "React 19 & TypeScript",
      desc: "Deepened expertise in strict typing across modular components, discriminated unions, and safe schema validation.",
    },
    {
      keyword: "Reactive State",
      subject: "Zustand & Browser Storage",
      desc: "Engineered performant, decoupled stores that bridge transient UI interactions with persistent IndexedDB tables via Dexie.",
    },
    {
      keyword: "Gamified Pedagogy",
      subject: "Educational Engagement",
      desc: "Learned how bite-sized interactive loops (discovery → scenario validation → 3-question quiz → badge) sustain curiosity far better than passive lectures.",
    },
    {
      keyword: "Responsible Communication",
      subject: "Evidence vs. Lore",
      desc: "Gained appreciation for the delicate balance between cultural botanical traditions and verified scientific nutrition, avoiding dangerous self-medication claims.",
    },
    {
      keyword: "Inclusive Localization",
      subject: "Bilingual Design (EN + HI)",
      desc: "Mastered internationalization pipelines, considering font metrics, line-heights, and cultural nuances across English and Hindi translations.",
    },
    {
      keyword: "Quality Assurance",
      subject: "Vitest, RTL & Playwright",
      desc: "Implemented automated testing pipelines that verify unit logic, component states, and end-to-end browser workflows reliably.",
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="what-learned-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h3
          id="what-learned-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          6. What I Learned
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        Building SYLVARA expanded both technical engineering capabilities and
        ethical product design perspectives:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {learnings.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-purple-500/20 bg-[#140b24]/80 p-4 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1d0e36]"
          >
            <span className="inline-block rounded-md border border-[#c084fc]/30 bg-[#251240]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#d8b4fe]">
              {item.keyword}
            </span>
            <h4 className="font-['Cinzel',serif] text-sm font-semibold tracking-wide text-white mt-2 mb-1">
              {item.subject}
            </h4>
            <p className="text-xs text-[#d8b4fe]/75 leading-relaxed font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
