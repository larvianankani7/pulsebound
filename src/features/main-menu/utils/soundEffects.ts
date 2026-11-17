import { useSettingsStore } from "../../settings/store/useSettingsStore";

/**
 * Audio playback helper for bundled sound effects with Web Audio synthetic fallback.
 * Checks useSettingsStore for effective SFX volume and mute state.
 */
function playAudioFile(src: string, fallbackSynth?: () => void): void {
  try {
    const sfxVol = useSettingsStore.getState().getEffectiveSfxVolume();
    if (sfxVol <= 0) return;

    if (typeof Audio !== "undefined") {
      const audio = new Audio(src);
      audio.volume = Math.max(0, Math.min(1, sfxVol));
      audio.play().catch(() => {
        if (fallbackSynth) fallbackSynth();
      });
    } else if (fallbackSynth) {
      fallbackSynth();
    }
  } catch {
    if (fallbackSynth) fallbackSynth();
  }
}

/**
 * Synthetic Web Audio click fallback.
 */
function synthClickSound(freq = 440, duration = 0.12): void {
  try {
    const sfxVol = useSettingsStore.getState().getEffectiveSfxVolume();
    if (sfxVol <= 0) return;

    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") void ctx.resume();

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.75, now + duration);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08 * sfxVol, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);

    setTimeout(
      () => {
        void ctx.close();
      },
      (duration + 0.1) * 1000
    );
  } catch {
    // Audio context unavailable
  }
}

export function playMenuClickSound(): void {
  playAudioFile("/audio/sfx/click.mp3", () => synthClickSound(480, 0.12));
}

export function playSelectSound(): void {
  playAudioFile("/audio/sfx/select.mp3", () => synthClickSound(620, 0.16));
}

export function playCompleteSound(): void {
  playAudioFile("/audio/sfx/complete.mp3", () => {
    synthClickSound(523.25, 0.15);
    setTimeout(() => synthClickSound(659.25, 0.25), 120);
  });
}

export function playErrorSound(): void {
  synthClickSound(180, 0.22);
}
