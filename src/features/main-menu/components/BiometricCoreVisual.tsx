import { motion, useReducedMotion } from "motion/react";
import { Activity, Heart } from "lucide-react";

interface BiometricCoreVisualProps {
  imageSrc?: string;
}

export function BiometricCoreVisual({ imageSrc }: BiometricCoreVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative z-10 flex items-center justify-center pointer-events-auto"
      aria-label="Interactive Somatic Biometric Core"
    >
      {/* Ambient background crimson glow orb */}
      <div
        className="absolute inset-0 -m-6 sm:-m-8 md:-m-12 rounded-full bg-red-700/20 blur-3xl sm:blur-4xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Animated Motion Container */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : {
                y: [-8, 8, -8],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="group relative cursor-pointer select-none"
      >
        {/* Outer rotating telemetry ring */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-3 sm:-inset-4 md:-inset-5 rounded-full border border-dashed border-red-600/30 pointer-events-none"
        />

        {/* Counter-rotating segmented ring */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-1.5 sm:-inset-2 rounded-full border-t border-b border-red-500/40 pointer-events-none"
        />

        {/* Primary circular biometric chamber */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-red-600/50 bg-[#0d0204]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(193,18,43,0.35),0_0_80px_rgba(227,38,54,0.2)] transition-all duration-500 ease-out group-hover:border-red-400 group-hover:shadow-[0_0_60px_rgba(227,38,54,0.6),0_0_100px_rgba(255,77,109,0.35)] flex flex-col items-center justify-center p-6 text-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Biometric showcase"
              className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
          ) : (
            <>
              {/* Radial background gradient within core */}
              <div className="absolute inset-0 bg-radial from-red-900/40 via-red-950/20 to-transparent pointer-events-none" />

              {/* Central Pulsating Heart / Vitality glyph */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.14, 1, 1.18, 1],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-red-950 via-red-900 to-red-600/80 border border-red-500/60 shadow-[0_0_30px_rgba(227,38,54,0.7)] flex items-center justify-center"
              >
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white fill-red-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              </motion.div>

              {/* Bio-telemetry stats */}
              <div className="relative z-10 mt-4 sm:mt-5 flex flex-col items-center">
                <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold tracking-[0.2em] text-red-300 uppercase">
                  Biometric Core
                </span>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-neutral-400">
                  <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                  <span>72 BPM &bull; OPTIMAL</span>
                </div>
              </div>

              {/* Telemetry pill badges */}
              <div className="relative z-10 mt-3 flex items-center gap-1.5 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded-full bg-red-950/90 border border-red-700/40 text-red-300">
                  HOMEOSTASIS
                </span>
                <span className="px-2 py-0.5 rounded-full bg-black/60 border border-neutral-800 text-neutral-400">
                  READY
                </span>
              </div>
            </>
          )}

          {/* Holographic scanning line effect */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    top: ["0%", "100%", "0%"],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-40 pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
}

// Backwards-compatibility alias so any existing test or import succeeds
export const BuddhaBowlVisual = BiometricCoreVisual;

export default BiometricCoreVisual;
