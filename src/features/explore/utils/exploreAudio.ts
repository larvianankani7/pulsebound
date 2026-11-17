import { useSettingsStore } from "../../settings/store/useSettingsStore";

function playSfxFile(src: string, fallbackSynth: () => void): void {
  try {
    const sfxVol = useSettingsStore.getState().getEffectiveSfxVolume();
    if (sfxVol <= 0) return;

    if (typeof Audio !== "undefined") {
      const audio = new Audio(src);
      audio.volume = Math.max(0, Math.min(1, sfxVol));
      audio.play().catch(() => fallbackSynth());
    } else {
      fallbackSynth();
    }
  } catch {
    fallbackSynth();
  }
}

function getAudioContext(): AudioContext | null {
  try {
    const sfxVol = useSettingsStore.getState().getEffectiveSfxVolume();
    if (sfxVol <= 0) return null;

    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return null;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      void ctx.resume();
    }
    return ctx;
  } catch {
    return null;
  }
}

export function playExploreSelectSound(): void {
  playSfxFile("/audio/sfx/select.mp3", () => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
      setTimeout(() => void ctx.close(), 160);
    } catch {
      // Fallback
    }
  });
}

export function playExploreSuccessSound(): void {
  playSfxFile("/audio/sfx/complete.mp3", () => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const notes = [528, 660, 792, 1056];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteTime = now + idx * 0.08;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.0001, noteTime);
        gain.gain.linearRampToValueAtTime(0.05, noteTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(noteTime);
        osc.stop(noteTime + 0.48);
      });
      setTimeout(() => void ctx.close(), 900);
    } catch {
      // Fallback
    }
  });
}

export function playExploreIncorrectSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.23);
    setTimeout(() => void ctx.close(), 300);
  } catch {
    // Fallback
  }
}

export function playExploreTransitionSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.35);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
    setTimeout(() => void ctx.close(), 500);
  } catch {
    // Fallback
  }
}
