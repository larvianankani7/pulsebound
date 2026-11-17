import { ShieldAlert } from "lucide-react";

export function ChallengesSection() {
  const challenges = [
    {
      title: "Scientific Rigor vs. Interactive Engagement",
      desc: "Distilling complex human biology—such as mitochondrial biogenesis, delta sleep architecture, and tendon biomechanics—into tactile gameplay scenarios without oversimplifying essential science.",
    },
    {
      title: "Eliminating Obsessive Calorie Quantification",
      desc: "Architecting a nutrition model focused purely on micronutrient density, anti-inflammatory synergy, and cellular repair, intentionally rejecting toxic calorie and portion tracking.",
    },
    {
      title: "25-Sector Radial Orbital Engine",
      desc: "Designing an interactive 2D orbital radar that dynamically calculates angles, selection states, progressive unlocking, and hint telemetry with smooth 60fps animations.",
    },
    {
      title: "Serverless Browser Persistence",
      desc: "Managing browser-local data lifecycle with Dexie and IndexedDB, handling schema versions and reliable state persistence without an external cloud database or sync layer.",
    },
    {
      title: "Local Media Synchronization",
      desc: "Seamlessly combining fullscreen looping background video with pure local audio playback and Web Audio synthesizers without external streaming lags.",
    },
    {
      title: "Cinematic Atmosphere at 60 FPS",
      desc: "Balancing fullscreen video playback, Gaussian blurs, layered vignettes, and responsive glassmorphism across varying GPU hardware and viewport sizes.",
    },
  ];

  return (
    <section
      className="border-b border-red-900/30 py-10"
      aria-labelledby="challenges-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/40 bg-red-950/60 text-red-400">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <h3
          id="challenges-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          4. Challenges I Ran Into
        </h3>
      </div>

      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-6">
        Building a game that marries rigorous exercise science with an
        atmospheric dark aesthetic presented multi-faceted architectural and
        conceptual challenges:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-red-900/35 bg-[#140205]/75 p-4.5 transition-all duration-300 hover:border-red-500/50 hover:bg-[#200308]"
          >
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-semibold tracking-wide text-white mb-1.5 flex items-center gap-2">
              <span className="text-xs font-mono text-red-400 font-bold">
                0{idx + 1}.
              </span>
              {c.title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
