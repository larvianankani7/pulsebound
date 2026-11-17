import {
  HeartPulse,
  Dumbbell,
  Moon,
  Droplets,
  Activity,
  Info,
} from "lucide-react";

export function WhatItTeachesSection() {
  return (
    <section
      className="border-b border-red-900/30 py-10"
      aria-labelledby="what-it-teaches-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/40 bg-red-950/60 text-red-400">
          <HeartPulse className="h-5 w-5" />
        </div>
        <h3
          id="what-it-teaches-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          8. What It Teaches
        </h3>
      </div>

      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-8">
        PULSEBOUND translates exercise physiology, human biomechanics, and
        recovery science into five interconnected educational pillars:
      </p>

      <div className="space-y-6">
        {/* Pillar A: Cardiovascular & Energy Systems */}
        <div className="rounded-2xl border border-red-900/35 bg-[#140205]/75 p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 text-red-400">
              <HeartPulse className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              A. Cardiovascular Conditioning & Energy Systems
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
            Demystifies heart rate zones and aerobic capacity. Operatives
            discover how sustained Zone 2 aerobic work drives mitochondrial
            biogenesis and capillary density, while high-intensity intervals
            expand maximal oxygen uptake (VO2 Max) and cardiac stroke volume.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="rounded-lg border border-red-900/40 bg-[#1c0408]/60 p-2.5">
              <span className="font-semibold text-white block">
                Zone 2 Aerobic
              </span>
              <span className="text-red-400 text-[11px]">
                Mitochondrial Density
              </span>
            </div>
            <div className="rounded-lg border border-red-900/40 bg-[#1c0408]/60 p-2.5">
              <span className="font-semibold text-white block">
                VO2 Max Pacing
              </span>
              <span className="text-red-400 text-[11px]">
                Peak Stroke Volume
              </span>
            </div>
            <div className="rounded-lg border border-red-900/40 bg-[#1c0408]/60 p-2.5">
              <span className="font-semibold text-white block">
                Lactate Clearance
              </span>
              <span className="text-red-400 text-[11px]">
                Metabolic Buffering
              </span>
            </div>
            <div className="rounded-lg border border-red-900/40 bg-[#1c0408]/60 p-2.5">
              <span className="font-semibold text-white block">
                Resting Heart Rate
              </span>
              <span className="text-red-400 text-[11px]">
                Parasympathetic Tone
              </span>
            </div>
          </div>
        </div>

        {/* Pillar B: Musculoskeletal & Strength */}
        <div className="rounded-2xl border border-red-900/35 bg-[#140205]/75 p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 text-red-400">
              <Dumbbell className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              B. Musculoskeletal Architecture & Functional Strength
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              {
                name: "Progressive Overload",
                role: "Systematically manipulating volume, load, and tempo to prompt myofibrillar adaptation.",
              },
              {
                name: "Tendon Collagen Remodeling",
                role: "Slow eccentric loading patterns that stimulate avascular connective tissue remodeling.",
              },
              {
                name: "Kinetic Chain Bracing",
                role: "Intra-abdominal pressure and core stability safeguarding spinal mechanics during load.",
              },
              {
                name: "Movement Planes",
                role: "Balancing sagittal, frontal, and transverse motions to prevent unilateral muscle imbalances.",
              },
              {
                name: "Motor Unit Recruitment",
                role: "Neurological synchronization of high-threshold motor units under compound resistance.",
              },
              {
                name: "Bone Mineral Density",
                role: "Axial skeleton loading triggering osteoblastic bone remodeling across the lifespan.",
              },
            ].map((n, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-red-900/35 bg-[#1c0408]/70 p-3"
              >
                <span className="font-semibold text-white block mb-0.5">
                  {n.name}
                </span>
                <span className="text-neutral-300 leading-relaxed">
                  {n.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar C: Neuro-Recovery & Sleep */}
        <div className="rounded-2xl border border-red-900/35 bg-[#140205]/75 p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 text-red-400">
              <Moon className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              C. Neuro-Recovery, Sleep Architecture & Adaptation
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-3">
            Explores the neurological mechanisms of human recovery. Teaches the
            distinct restorative roles of slow-wave sleep (growth hormone
            secretion) and REM sleep (motor skill consolidation), alongside
            autonomic nervous system balancing.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Slow-Wave Delta Sleep",
              "Adenosine Clearance",
              "Heart Rate Variability (HRV)",
              "Circadian Cortisol Curve",
              "Active Rest vs. CNS Fatigue",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full border border-red-700/40 bg-red-950/80 px-3 py-1 font-medium text-red-200"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-red-900/40 bg-[#120205]/80 p-2.5 text-xs text-neutral-300 flex items-center gap-2">
            <Info className="h-4 w-4 text-red-400 shrink-0" />
            <span>
              Physical conditioning triggers the stimulus for growth, but
              genuine adaptation and cellular recovery only happen during
              quality sleep and structured rest intervals.
            </span>
          </div>
        </div>

        {/* Pillar D: Cellular Hydration & Metabolic Fuel */}
        <div className="rounded-2xl border border-red-900/35 bg-[#140205]/75 p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 text-red-400">
              <Droplets className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              D. Cellular Hydration & Metabolic Fuel
            </h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>
                <strong>Electrolyte Osmolarity:</strong> How sodium, potassium,
                and magnesium ions regulate intracellular hydration and
                neuromuscular firing beyond simple plain water intake.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>
                <strong>Glycogen Re-Synthesis:</strong> Timing carbohydrates and
                protein post-exercise to optimize muscle protein synthesis and
                enzymatic recovery pathways.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>
                <strong>Portion-Free Whole Food Synergy:</strong> Moving past
                toxic calorie tracking to focus on micronutrient density,
                colorful polyphenols, and gut microbiome balance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>
                <strong>Energy Availability:</strong> Understanding that chronic
                energy deficits impair endocrine function, bone density, and
                immune resilience.
              </span>
            </li>
          </ul>
        </div>

        {/* Pillar E: Functional Mobility & Joint Health */}
        <div className="rounded-2xl border border-red-900/35 bg-[#140205]/75 p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 text-red-400">
              <Activity className="h-4 w-4" />
            </div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white tracking-wide">
              E. Functional Mobility, Joint Longevity & Movement Quality
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-3">
            Teaches the critical distinction between passive flexibility and
            active mobility. Operatives learn how controlled articular rotations
            stimulate synovial joint fluid, protect spinal segments, and
            maintain pain-free movement across decades of training.
          </p>
          <div className="rounded-xl border border-red-900/40 bg-[#120205]/80 p-3.5 text-xs text-red-200">
            <strong className="text-white">Strict Advisory Notice:</strong>{" "}
            PULSEBOUND is designed purely as an educational medium for health
            and movement literacy. It does not diagnose musculoskeletal
            conditions, prescribe physical therapy regimens, or supersede
            licensed medical advice. Always consult certified physicians or
            physical therapists for injury diagnosis and treatment.
          </div>
        </div>
      </div>
    </section>
  );
}
