import { BackgroundMedia } from "./components/BackgroundMedia";
import { BrandHeading } from "./components/BrandHeading";
import { Tagline } from "./components/Tagline";
import { MainNavigation } from "./components/MainNavigation";
import { MusicControl } from "./components/MusicControl";
import { BiometricCoreVisual } from "./components/BiometricCoreVisual";
import { OperativeStatusBadge } from "./components/OperativeStatusBadge";

export function MainMenu() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-[#f3eeee] select-none">
      {/* 1. Visual atmospheric background video with blur, darkened overlay, and vignette */}
      <BackgroundMedia
        videoSrc="/videos/pulsebound-bg.mp4"
        startTime={0}
        opacity={0.95}
      />

      {/* 2. Top-right atmospheric background music controller */}
      <MusicControl audioSrc="/audio/pulsebound-theme.mp3" />

      {/* 3. Primary left-aligned cinematic content hierarchy */}
      <main className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-24">
        <div className="w-full max-w-4xl xl:max-w-5xl">
          {/* Status HUD pill */}
          <OperativeStatusBadge />

          {/* Brand Title with continuous flowing gradient wave */}
          <BrandHeading title="PULSEBOUND" />

          {/* Official Tagline on a single line with elegant italic serif font */}
          <Tagline text="Forge the flesh. Master the pulse. Unlock your vitality." />

          {/* Five Official Navigation Buttons */}
          <MainNavigation />
        </div>
      </main>

      {/* 4. Decorative Somatic Biometric Core Visual */}
      <aside
        className="absolute z-20 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 2xl:right-32 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 pointer-events-auto"
        aria-label="Somatic Biometric Core Showcase"
      >
        <BiometricCoreVisual />
      </aside>
    </div>
  );
}

export default MainMenu;
