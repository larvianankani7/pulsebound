import { Music, Video } from "lucide-react";

export function CreditsSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-10 text-center font-sans"
      aria-label="Credits and Copyright"
    >
      <div className="rounded-2xl border border-red-900/35 bg-[#120204]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(227,38,54,0.15)]">
        {/* Project & Creator */}
        <div className="mb-6">
          <p className="font-['Cinzel',serif] text-xs uppercase tracking-[0.25em] text-red-400 font-semibold mb-1">
            IDEALAB HACKS SUBMISSION
          </p>
          <h4 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black text-white tracking-wider">
            PULSEBOUND
          </h4>
          <p className="mt-2 text-sm text-red-200/90 flex items-center justify-center gap-1.5">
            <span>Engineered for IdeaLab Hacks &bull;</span>
            <strong className="text-white font-semibold">Devpost 2026</strong>
          </p>
        </div>

        {/* Media Attributions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-6">
          <div className="rounded-xl border border-red-900/30 bg-[#1e0206]/60 p-3.5 flex items-center gap-3 text-xs text-red-100">
            <Music className="h-4 w-4 text-red-400 shrink-0" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-red-400/80 block font-mono">
                Soundtrack Attribution
              </span>
              <span className="font-medium text-white">
                &ldquo;Pulsebreaker&rdquo; — Cinematic Bio-Ambience
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-red-900/30 bg-[#1e0206]/60 p-3.5 flex items-center gap-3 text-xs text-red-100">
            <Video className="h-4 w-4 text-red-400 shrink-0" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-red-400/80 block font-mono">
                Visual Art Attribution
              </span>
              <span className="font-medium text-white">
                Geometric Red Vectors on Black Canvas
              </span>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-red-900/25 pt-5 text-xs text-red-300/70 space-y-2">
          <p className="font-medium text-red-100">
            &copy; {currentYear} PULSEBOUND. Built for IdeaLab Hacks.
          </p>
          <p className="text-[11px] leading-relaxed max-w-xl mx-auto text-red-300/60">
            PULSEBOUND is an independent educational experience. Third-party
            audio, video, fonts, and open-source libraries remain the
            intellectual property of their respective creators and licensors.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default CreditsSection;
