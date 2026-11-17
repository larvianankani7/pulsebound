import { motion, useReducedMotion } from "motion/react";
import { BackgroundMedia } from "../main-menu/components/BackgroundMedia";
import { MusicControl } from "../main-menu/components/MusicControl";
import { AboutHeader } from "./components/AboutHeader";
import { InspirationSection } from "./components/InspirationSection";
import { WhatItDoesSection } from "./components/WhatItDoesSection";
import { HowIBuiltItSection } from "./components/HowIBuiltItSection";
import { ChallengesSection } from "./components/ChallengesSection";
import { AccomplishmentsSection } from "./components/AccomplishmentsSection";
import { WhatILearnedSection } from "./components/WhatILearnedSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { WhatItTeachesSection } from "./components/WhatItTeachesSection";
import { CreditsSection } from "./components/CreditsSection";

export function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f3eeee]">
      {/* 1. Reused Visual Atmospheric Background Video */}
      <BackgroundMedia videoSrc="/videos/pulsebound-bg.mp4" startTime={0} />

      {/* 2. Reused Atmospheric Background Music Controller */}
      <MusicControl audioSrc="/audio/pulsebound-theme.mp3" />

      {/* 3. Scrollable Main Content Showcase */}
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
        {/* Page Header (Back button, Section label, Brand title, Tagline, Intro) */}
        <AboutHeader />

        {/* Large Translucent Glassmorphism Card */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-red-900/40 bg-[#0b0809]/85 backdrop-blur-2xl p-6 sm:p-10 md:p-14 shadow-[0_0_60px_rgba(227,38,54,0.18)]"
        >
          {/* Section 1: Inspiration */}
          <InspirationSection />

          {/* Section 2: What It Does */}
          <WhatItDoesSection />

          {/* Section 3: How I Built It & Mermaid Architecture Diagram */}
          <HowIBuiltItSection />

          {/* Section 4: Challenges I Ran Into */}
          <ChallengesSection />

          {/* Section 5: Accomplishments That I'm Proud Of */}
          <AccomplishmentsSection />

          {/* Section 6: What I Learned */}
          <WhatILearnedSection />

          {/* Section 7: What's Next for PULSEBOUND */}
          <RoadmapSection />

          {/* Section 8: What It Teaches */}
          <WhatItTeachesSection />

          {/* Copyright & Creator Credits */}
          <CreditsSection />
        </motion.div>
      </main>
    </div>
  );
}

export default AboutPage;
