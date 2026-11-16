/**
 * Web Audio API based sound synthesizer for an elegant, soft, and premium interaction effect.
 * Designed specifically for a mysterious, sophisticated fantasy game interface.
 * Zero external audio files required — completely low-latency, reliable, and consistent.
 */
export function playMenuClickSound(): void {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    const now = ctx.currentTime;

    // Master filter: low-pass filter to eliminate harsh digital edges and give an organic, warm tone
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(1.8, now);

    // Master gain node with smooth envelope
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    // Soft, rounded attack (3ms) to avoid any harsh popping
    masterGain.gain.linearRampToValueAtTime(0.065, now + 0.003);
    // Natural resonant exponential decay
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    // Primary fundamental tone: warm resonance at 432Hz
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(432, now);
    osc1.frequency.exponentialRampToValueAtTime(415, now + 0.16);

    // Secondary subtle crystalline overtone: soft octave for depth
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(864, now);
    gain2.gain.setValueAtTime(0.018, now);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    // Connect audio graph
    osc1.connect(filter);
    osc2.connect(gain2);
    gain2.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    // Start oscillators
    osc1.start(now);
    osc1.stop(now + 0.17);
    osc2.start(now);
    osc2.stop(now + 0.13);

    // Clean up audio context once sound is finished
    setTimeout(() => {
      void ctx.close();
    }, 220);
  } catch {
    // Gracefully ignore audio restrictions if unpermitted in browser
  }
}
