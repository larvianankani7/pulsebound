import { BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";

export function WhatItDoesSection() {
  const features = [
    {
      title: "Bio-Kinetic Mission Trials",
      desc: "Players navigate 25 progressive operational sectors covering cardiovascular zones, muscular hypertrophy, circadian sleep, cellular osmosis, and joint longevity.",
    },
    {
      title: "The Vitality Matrix Simulator",
      desc: "Interactive daily strain-and-recovery diagnostic tool calculating cardiovascular reserve, musculoskeletal repair, CNS readiness, and metabolic equilibrium.",
    },
    {
      title: "Tactical Scenario Decision-Making",
      desc: "High-stakes educational dilemmas: e.g., managing pre-workout sleep deficits, sequencing dynamic warm-ups vs static stretches, and balancing electrolytes.",
    },
    {
      title: "Immediate Clinical Feedback & Citations",
      desc: "Every choice produces instant physiological explanations grounded in sports medicine, exercise physiology, and circadian neuroscience.",
    },
    {
      title: "Progression, Badges & Codex of Vitality",
      desc: "Earn XP, unlock 25 handcrafted achievement emblems, level up operative rank, and unlock deep scientific modules in the permanent Codex.",
    },
    {
      title: "100% Frontend-Only & Local-First",
      desc: "Zero remote servers, zero trackers, zero cloud logins. All state is maintained locally in browser IndexedDB and LocalStorage with instant responsiveness.",
    },
  ];

  return (
    <section
      className="border-b border-red-900/25 py-10"
      aria-labelledby="what-it-does-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-700/40 bg-[#250308] text-red-400">
          <BookOpen className="h-5 w-5" />
        </div>
        <h3
          id="what-it-does-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          2. What It Does
        </h3>
      </div>

      <p className="text-sm sm:text-base text-red-100/85 leading-relaxed font-sans mb-6">
        PULSEBOUND translates complex exercise science, human biomechanics, and
        lifestyle physiology into an accessible, interactive game world. Through
        active decision trials, tactile inspections, and simulated bio-strain
        modeling, players learn the genuine mechanisms that govern physical
        resilience.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-red-900/35 bg-[#160205]/80 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(227,38,54,0.25)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0" />
                <h4 className="font-['Cinzel',serif] text-sm font-bold text-white tracking-wide">
                  {feature.title}
                </h4>
              </div>
              <p className="text-xs text-red-200/80 leading-relaxed font-sans">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Educational Boundaries */}
      <div className="rounded-2xl border border-rose-600/30 bg-rose-950/20 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-sans">
            <strong className="text-white font-['Cinzel',serif] tracking-wider block mb-1">
              Safety & Educational Boundaries
            </strong>
            <p>
              PULSEBOUND is built strictly for general health education. It does
              not prescribe medical regimens, diagnose pathology, endorse
              extreme exertion, or shame body types. Physical progression must
              always be calibrated to individual ability and supervised by
              qualified healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatItDoesSection;
