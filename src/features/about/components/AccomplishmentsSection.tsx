import { Award, Sparkles } from "lucide-react";

export function AccomplishmentsSection() {
  const accomplishments = [
    {
      title: "Transforming Bio-Mechanics into Tactical Gameplay",
      desc: "Creating an interactive tactical HUD where operatives master human physiology, cardiovascular zones, and musculoskeletal loading through scenario-based decisions rather than dry textbooks.",
    },
    {
      title: "A Shame-Free, Portion-Free Educational Stance",
      desc: "Championing holistic cellular vitality, recovery science, and whole-food synergy over obsessive calorie counting, arbitrary daily targets, or guilt-driven metrics.",
    },
    {
      title: "Seamless 100% Offline-Capable Architecture",
      desc: "Delivering a full-featured tactical game that runs entirely within the client's browser, respecting user privacy with zero cloud data harvesting or telemetry tracking.",
    },
    {
      title: "Tactical 25-Sector Radial Simulation",
      desc: "Architecting a 25-mission orbital radar covering Zone 2 aerobic pacing, central nervous system recovery, tendon remodeling, and cellular hydration.",
    },
    {
      title: "Uncompromising Dark Bio-Kinetic Atmosphere",
      desc: "Implementing a cohesive blood-red and obsidian aesthetic with hardware-accelerated background video, pulsing biometric core, and local audio soundtrack.",
    },
  ];

  return (
    <section
      className="border-b border-red-900/30 py-10"
      aria-labelledby="accomplishments-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/40 bg-red-950/60 text-red-400">
          <Award className="h-5 w-5" />
        </div>
        <h3
          id="accomplishments-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          5. Accomplishments That I&apos;m Proud Of
        </h3>
      </div>

      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-6">
        The most meaningful accomplishment of PULSEBOUND is building an
        educational companion that treats players as operatives mastering their
        biology:
      </p>

      <div className="space-y-3.5">
        {accomplishments.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 rounded-xl border border-red-900/35 bg-[#140205]/75 p-4 transition-all duration-300 hover:border-red-500/60 hover:bg-[#200308]"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 mt-0.5">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-semibold tracking-wide text-white">
                {item.title}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
