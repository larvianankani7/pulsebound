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
      category: "i18n & Motion",
      techs: ["i18next", "react-i18next", "Motion for React"],
      role: "Bilingual English + Hindi localization and cinematic 60fps UI animations",
    },
    {
      category: "UI & Aesthetics",
      techs: ["Lucide React", "Cinzel & Cormorant Fonts"],
      role: "High-contrast visual design, SVG icon accents, and majestic typography",
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
      role: "Unit testing, component verification, end-to-end browser flows, and style standards",
    },
    {
      category: "Deployment & Hosting",
      techs: ["Render"],
      role: "Static frontend edge deployment with zero cloud server overhead",
    },
  ];

  return (
    <section
      className="border-b border-[#c084fc]/15 py-10"
      aria-labelledby="how-built-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c084fc]/30 bg-[#1f1038] text-[#c084fc]">
          <Cpu className="h-5 w-5" />
        </div>
        <h3
          id="how-built-title"
          className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-white"
        >
          3. How I Built It
        </h3>
      </div>

      <p className="text-sm sm:text-base text-[#e2d9f3]/85 leading-relaxed font-sans mb-6">
        SYLVARA was engineered from the ground up as a{" "}
        <strong className="text-white font-medium">
          frontend-first, data-driven modular monolith
        </strong>
        . Every calculation, botanical rule, educational quiz, and progress
        milestone executes locally within the client browser.
      </p>

      {/* Categorized Tech Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {techCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-purple-500/20 bg-[#150c26]/75 p-4 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1e1038] hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c084fc]">
                {cat.category}
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cat.techs.map((t) => (
                  <span
                    key={t}
                    className="inline-block rounded-md border border-[#c084fc]/30 bg-[#24133f]/70 px-2 py-0.5 text-xs font-medium text-white shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-[#d8b4fe]/75 leading-relaxed border-t border-purple-500/10 pt-2 font-sans">
              {cat.role}
            </p>
          </div>
        ))}
      </div>

      {/* Client-Only Architecture Guarantee Callout */}
      <div className="flex items-center gap-3 rounded-xl border border-purple-400/25 bg-[#170d2b]/80 p-4 text-xs sm:text-sm text-[#e2d9f3]">
        <ShieldCheck className="h-5 w-5 text-[#c084fc] shrink-0" />
        <p>
          <strong className="text-white font-medium">
            Zero-Backend Architecture:
          </strong>{" "}
          No server APIs, cloud databases, external trackers, or server-side
          authentication are required. All learning progress and settings remain
          private to the user&apos;s personal device in IndexedDB.
        </p>
      </div>

      {/* Visual Architecture Diagram */}
      <ArchitectureDiagram />
    </section>
  );
}
