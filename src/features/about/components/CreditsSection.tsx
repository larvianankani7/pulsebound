import { Music } from "lucide-react";

export function CreditsSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-10 text-center font-sans"
      aria-label="Credits and Copyright"
    >
      <div className="rounded-2xl border border-purple-500/25 bg-[#120822]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.12)]">
        {/* Project & Creator */}
        <div className="mb-6">
          <p className="font-['Cinzel',serif] text-xs uppercase tracking-[0.25em] text-[#c084fc] font-semibold mb-1">
            PROJECT SHOWCASE
          </p>
          <h4 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black text-white tracking-wider">
            SYLVARA
          </h4>
          <p className="mt-2 text-sm text-[#d8b4fe]/90 flex items-center justify-center gap-1.5">
            <span>Created with passion and care by</span>
            <strong className="text-white font-semibold">Larvia Nankani</strong>
          </p>
        </div>

        {/* Music Attribution */}
        <div className="max-w-md mx-auto mb-6 rounded-xl border border-purple-500/20 bg-[#1c0f33]/60 p-3.5 flex items-center justify-center gap-3 text-xs text-[#e2d9f3]">
          <Music className="h-4 w-4 text-[#c084fc] shrink-0" />
          <div className="text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#d8b4fe]/60 block font-mono">
              Background Music Credit
            </span>
            <span className="font-medium text-white">
              &ldquo;Crosses&rdquo; — José González
            </span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-purple-500/15 pt-5 text-xs text-[#d8b4fe]/70 space-y-2">
          <p className="font-medium text-[#e2d9f3]">
            &copy; {currentYear} Larvia Nankani. All rights reserved.
          </p>
          <p className="text-[11px] leading-relaxed max-w-xl mx-auto text-[#d8b4fe]/60">
            SYLVARA is an independent educational experience. Third-party music,
            videos, fonts, and open-source libraries remain the intellectual
            property of their respective creators and licensors.
          </p>
        </div>
      </div>
    </footer>
  );
}
