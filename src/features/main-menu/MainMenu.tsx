import { BackgroundMedia } from "./components/BackgroundMedia";
import { BrandHeading } from "./components/BrandHeading";
import { Tagline } from "./components/Tagline";
import { MainNavigation } from "./components/MainNavigation";
import { MusicControl } from "./components/MusicControl";
import { BuddhaBowlVisual } from "./components/BuddhaBowlVisual";

export function MainMenu() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#07050a] text-[#f3e8ff] select-none">
      {/* 1. Visual atmospheric background video with 5% blur, darkened overlay, 95% opacity, and fallback */}
      <BackgroundMedia
        videoSrc="/videos/menu-bg.mp4"
        startTime={5}
        opacity={0.95}
      />

      {/* 2. Top-right atmospheric background music controller */}
      <MusicControl videoId="UrngDTXkOEk" />

      {/* 3. Primary left-aligned cinematic content hierarchy */}
      <main className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-24">
        <div className="w-full max-w-4xl xl:max-w-5xl">
          {/* Brand Title with continuous flowing gradient wave */}
          <BrandHeading title="SYLVARA" />

          {/* Official Tagline on a single line with elegant italic serif font */}
          <Tagline text="Every meal uncovers a tale, and every tale opens a new world." />

          {/* Five Official Navigation Buttons with increased prominent dimensions */}
          <MainNavigation />
        </div>
      </main>

      {/* 4. Decorative Buddha Bowl image positioned in the right-hand corner side by side */}
      <aside
        className="absolute z-20 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 2xl:right-32 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 pointer-events-auto"
        aria-label="Culinary Visual Showcase"
      >
        <BuddhaBowlVisual imageSrc="/images/buddha-bowl.webp" />
      </aside>
    </div>
  );
}

export default MainMenu;
