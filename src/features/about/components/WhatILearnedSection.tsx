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
      desc: "Learned how bite-sized interactive loops (discovery → scenario validation → diagnostic trial → badge) sustain curiosity far better than passive lectures.",
    },
    {
      keyword: "Bio-Kinetic Science",
      subject: "Evidence-Based Physiology",
      desc: "Gained appreciation for communicating mitochondrial respiration, tendon remodeling, and sleep architecture in accessible, actionable terms.",
    },
    {
      keyword: "Media Performance",
      subject: "Video & Sound Engine",
      desc: "Mastered high-performance fullscreen video playback and low-latency Web Audio API synthesizers for tactical tactile feedback.",
    },
    {
      keyword: "Quality Assurance",
      subject: "Vitest, RTL & Verification",
      desc: "Implemented automated testing pipelines that verify unit logic, component states, and accessibility workflows across 224 unit tests.",
    },
  ];

  return (
    <section
      className="border-b border-red-900/30 py-10"
      aria-labelledby="what-learned-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/40 bg-red-950/60 text-red-400">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h3
          id="what-learned-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          6. What I Learned
        </h3>
      </div>

      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-6">
        Building PULSEBOUND expanded both technical engineering capabilities and
        pedagogical design perspectives:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {learnings.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-red-900/35 bg-[#140205]/75 p-4 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]"
          >
            <span className="inline-block rounded-md border border-red-700/40 bg-red-950/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
              {item.keyword}
            </span>
            <h4 className="font-['Cinzel',serif] text-sm font-semibold tracking-wide text-white mt-2 mb-1">
              {item.subject}
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
