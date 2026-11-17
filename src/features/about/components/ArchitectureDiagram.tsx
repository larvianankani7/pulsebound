import { useState } from "react";
import {
  Layers,
  Code2,
  Database,
  Globe,
  Palette,
  Cpu,
  Monitor,
  User,
} from "lucide-react";

export function ArchitectureDiagram() {
  const [showCode, setShowCode] = useState(false);

  const mermaidSource = `flowchart TD
    A["User"] --> B["PULSEBOUND React Application"]

    B --> C["Main Menu & Navigation"]

    C --> D["Findings / Vitality Matrix"]
    C --> E["Explore / Sector Trials"]
    C --> F["Learnings / Codex"]
    C --> G["Settings"]
    C --> H["About"]

    D --> I["Bio-Strain & Recovery Engine"]
    E --> J["Tactical Scenarios & Biomechanics"]
    F --> K["Scientific Modules & Quizzes"]

    I --> L["Shared Physiology Layer"]
    J --> L
    K --> L

    L --> M["Cardio, Muscular, Sleep, Hydration & Biomechanics Data"]

    D --> N["Zustand State"]
    E --> N
    F --> N
    G --> N

    N --> O["Dexie / IndexedDB Offline Store"]
    G --> P["localStorage Audio & Display Preferences"]

    B --> Q["HTML5 Web Audio & SFX Engine"]
    B --> R["Motion & Hardware-Accelerated Shaders"]`;

  return (
    <div className="relative mt-8 rounded-2xl border border-red-900/35 bg-[#0e0204]/80 backdrop-blur-md p-5 sm:p-7 shadow-[0_0_30px_rgba(227,38,54,0.15)]">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-red-900/25">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-700/40 bg-[#250308] text-red-400 shadow-[0_0_15px_rgba(227,38,54,0.3)]">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold tracking-wider text-white">
              Application Architecture Flowchart
            </h4>
            <p className="text-xs text-red-300/75">
              Client-side data flow, modular engines & offline persistence
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 rounded-lg border border-red-700/35 bg-[#1a0205]/80 px-3 py-1.5 text-xs font-medium text-red-300 transition-all duration-200 hover:border-red-500 hover:bg-[#280409] hover:text-white cursor-pointer"
          aria-expanded={showCode}
        >
          <Code2 className="h-3.5 w-3.5" />
          <span>{showCode ? "View Flowchart" : "View Mermaid Source"}</span>
        </button>
      </div>

      {showCode ? (
        /* Raw Mermaid Specification */
        <div className="mt-5 rounded-xl border border-red-900/30 bg-[#050001]/95 p-4 font-mono text-xs sm:text-sm text-red-200 overflow-x-auto">
          <pre>{mermaidSource}</pre>
        </div>
      ) : (
        /* Visual Architecture Flowchart */
        <div className="mt-6 overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[760px] flex flex-col gap-6">
            {/* Layer 1: User & Core App Entry */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 rounded-xl border border-red-700/40 bg-[#1e0206] px-6 py-2.5 shadow-[0_0_20px_rgba(227,38,54,0.25)]">
                <User className="h-4 w-4 text-red-400" />
                <span className="font-['Cinzel',serif] text-sm font-semibold tracking-wider text-white">
                  Operative / User
                </span>
              </div>

              {/* Connecting line */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-red-500/60 to-red-500/30" />

              <div className="flex items-center gap-3 rounded-xl border border-red-600/50 bg-[#2b0309] px-8 py-3 shadow-[0_0_25px_rgba(227,38,54,0.35)]">
                <Monitor className="h-4 w-4 text-red-300" />
                <span className="font-['Cinzel',serif] text-sm font-bold tracking-wider text-white">
                  PULSEBOUND React Application
                </span>
              </div>
            </div>

            {/* Core Application Extensions: Audio & Motion */}
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto w-full">
              <div className="flex items-center justify-center gap-2 rounded-lg border border-red-900/35 bg-[#140205]/90 px-4 py-2 text-xs text-red-200">
                <Globe className="h-3.5 w-3.5 text-red-400" />
                <span>HTML5 Web Audio Engine</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-red-900/35 bg-[#140205]/90 px-4 py-2 text-xs text-red-200">
                <Palette className="h-3.5 w-3.5 text-red-400" />
                <span>Motion & Bio-HUD Components</span>
              </div>
            </div>

            {/* Downward line to Navigation Hub */}
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-gradient-to-b from-red-500/40 to-red-500/60" />
            </div>

            {/* Main Navigation Hub */}
            <div className="mx-auto flex items-center justify-center rounded-xl border border-red-700/40 bg-[#220308] px-6 py-2 text-xs font-semibold tracking-wider uppercase text-red-200 shadow-[0_0_15px_rgba(227,38,54,0.25)]">
              Main Menu & Navigation Routing
            </div>

            {/* Connector lines to the 5 Feature Modules */}
            <div className="grid grid-cols-5 gap-3 pt-2">
              {[
                {
                  name: "Findings",
                  route: "/findings",
                  desc: "Vitality Matrix Simulator",
                },
                {
                  name: "Explore",
                  route: "/explore",
                  desc: "Bio-Kinetic Mission Trials",
                },
                {
                  name: "Learnings",
                  route: "/learnings",
                  desc: "Codex & Mastery Quizzes",
                },
                {
                  name: "Settings",
                  route: "/settings",
                  desc: "Audio & Display Controls",
                },
                {
                  name: "About",
                  route: "/about",
                  desc: "IdeaLab Hacks Dossier",
                },
              ].map((mod, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 rounded-xl border border-red-900/35 bg-[#140205]/75 text-center"
                >
                  <span className="font-['Cinzel',serif] text-xs font-bold text-white mb-0.5">
                    {mod.name}
                  </span>
                  <span className="text-[10px] text-red-400/80 font-mono mb-1">
                    {mod.route}
                  </span>
                  <span className="text-[10px] text-red-300/60">
                    {mod.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Persistence Layer */}
            <div className="mx-auto flex items-center gap-4 p-4 rounded-xl border border-red-900/40 bg-[#160205]/90 max-w-lg w-full justify-around text-xs">
              <div className="flex items-center gap-2 text-red-200">
                <Database className="h-4 w-4 text-red-400" />
                <span>Dexie / IndexedDB Offline Cache</span>
              </div>
              <span className="text-red-950">&bull;</span>
              <div className="flex items-center gap-2 text-red-200">
                <Cpu className="h-4 w-4 text-red-400" />
                <span>LocalStorage Persistent Prefs</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArchitectureDiagram;
