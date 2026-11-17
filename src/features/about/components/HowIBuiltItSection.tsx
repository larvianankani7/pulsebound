import { Cpu, ShieldCheck } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function HowIBuiltItSection() {
  const techCategories = [
    {
      category: "Frontend Foundation",
      techs: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4"],
      role: "Component composition, strict static types, instant HMR, modern CSS theme tokens",
    },
    {
      category: "Architecture & State",
      techs: ["React Router v7", "Zustand"],
      role: "Client-side declarative routing and reactive, lightweight game state management",
    },
    {
      category: "Local Persistence & Validation",
      techs: ["Dexie.js", "IndexedDB", "localStorage", "Zod"],
      role: "Structured client database, schema verification, and persistent user preferences",
    },
    {
      category: "Audio & Motion",
      techs: ["HTML5 Web Audio API", "Motion for React"],
      role: "Zero-latency local audio engine and 60fps hardware-accelerated animations",
    },
    {
      category: "UI & Aesthetics",
      techs: ["Lucide React", "Cinzel, Cormorant & Plus Jakarta Fonts"],
      role: "High-contrast dark blood-red visual system, SVG telemetry icons, and cinematic typography",
    },
    {
      category: "Testing & Code Quality",
      techs: [
        "Vitest",
        "React Testing Library",
        "Playwright",
        "ESLint",
        "Prettier",
      ],
      role: "Unit testing, component verification, and comprehensive test coverage",
    },
    {
      category: "Deployment & Hosting",
      techs: ["Frontend-Only Static Hosting"],
      role: "Static frontend edge deployment with zero cloud server overhead or external dependencies",
    },
  ];

  return (
    <section
      className="border-b border-red-900/25 py-10"
      aria-labelledby="how-built-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-700/40 bg-[#250308] text-red-400">
          <Cpu className="h-5 w-5" />
        </div>
        <h3
          id="how-built-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          3. How I Built It
        </h3>
      </div>

      <p className="text-sm sm:text-base text-red-100/85 leading-relaxed font-sans mb-6">
        PULSEBOUND was engineered with an unwavering commitment to a 100%
        frontend-only, local-first architecture. There is zero server
        infrastructure, zero database subscription, and zero telemetry
        collection.
      </p>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {techCategories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-red-900/35 bg-[#160205]/80 p-4 sm:p-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-['Cinzel',serif] text-xs font-bold uppercase tracking-wider text-red-400">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-1">
                {cat.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md border border-red-700/40 bg-red-950/60 px-2 py-0.5 text-[10px] font-mono text-red-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-red-200/80 leading-relaxed font-sans">
              {cat.role}
            </p>
          </div>
        ))}
      </div>

      {/* Architecture Diagram */}
      <div className="mt-8">
        <h4 className="font-['Cinzel',serif] text-base font-bold text-white tracking-wide mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-red-400" />
          <span>System Data Flow & Component Architecture</span>
        </h4>
        <ArchitectureDiagram />
      </div>
    </section>
  );
}

export default HowIBuiltItSection;
