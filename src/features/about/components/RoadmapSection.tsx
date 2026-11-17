import { Compass } from "lucide-react";

export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1: Biomechanical Motion Tracking",
      status: "Planned Future Direction",
      items: [
        "Webcam-based real-time pose estimation for dynamic squats, hinges, and push mechanics",
        "Form correction feedback using client-side WebAssembly computer vision",
        "Targeted joint angle recommendations to protect lumbar and patellar structures",
      ],
    },
    {
      phase: "Phase 2: Expanded Bio-Telemetry Simulation",
      status: "Conceptual Exploration",
      items: [
        "Interactive VO2 Max laboratory with customizable aerobic workload simulations",
        "Heart Rate Variability (HRV) biofeedback simulations with guided breathwork pacing",
        "Mitochondrial biogenesis progression tracker connecting volume with cellular density",
      ],
    },
    {
      phase: "Phase 3: Expanded Safety & Clinical Curriculum",
      status: "Planned Future Direction",
      items: [
        "Specialized mobility tracks for rehabilitation, posture restoration, and sedentary desk workers",
        "In-depth modules on managing overtraining syndrome (OTS) and central nervous system burnout",
        "Accessible audio voiceovers for all tactical mission briefings",
      ],
    },
    {
      phase: "Phase 4: Portable Operative Dossiers",
      status: "Future Architecture Goal",
      items: [
        "Encrypted user-initiated JSON export and import for seamless progress transfer across devices",
        "Customizable challenge tracks for athletic clubs, schools, and independent fitness enthusiasts",
      ],
    },
  ];

  return (
    <section
      className="border-b border-red-900/25 py-10"
      aria-labelledby="roadmap-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-700/40 bg-[#250308] text-red-400">
          <Compass className="h-5 w-5" />
        </div>
        <h3
          id="roadmap-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          7. What&apos;s Next for PULSEBOUND
        </h3>
      </div>

      <p className="text-sm sm:text-base text-red-100/85 leading-relaxed font-sans mb-6">
        While the current hackathon release provides a complete, playable
        25-level game loop, vitality matrix simulator, and permanent codex, the
        future roadmap includes hardware-accelerated movement tracking and
        advanced physiological modeling:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roadmapItems.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-red-900/35 bg-[#160205]/80 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-['Cinzel',serif] text-sm font-bold text-white">
                {item.phase}
              </span>
              <span className="rounded-full border border-red-700/40 bg-red-950/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-red-300">
                {item.status}
              </span>
            </div>
            <ul className="space-y-2 text-xs text-red-200/80 font-sans">
              {item.items.map((i, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoadmapSection;
