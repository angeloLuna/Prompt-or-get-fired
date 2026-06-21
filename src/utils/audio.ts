/**
 * Native Web Audio API SFX Synthesizer Engine
 * Generates all game audio procedurally without external assets or dependencies.
 */

export type SfxType = 
  | "success" 
  | "failure" 
  | "partial" 
  | "question" 
  | "hover" 
  | "confirm" 
  | "transition" 
  | "typewriter";

let ctx: AudioContext | null = null;
let lastHoverTime = 0;

/**
 * Lazy initialization of the AudioContext.
 * Resolves browser autoplay restriction issues by resuming context on user interactions.
 */
export function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  
  if (!ctx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      ctx = new AudioContextClass();
    }
  }
  
  if (ctx && ctx.state === "suspended") {
    ctx.resume().catch(() => {
      // Ignored: standard autoplay security block
    });
  }
  
  return ctx;
}

/**
 * Check if the game audio is muted.
 * Mute setting is read directly from localStorage to keep the utility fully decoupled.
 */
function isMuted(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("game_audio_muted") === "true";
}

/**
 * Trigger procedural SFX playbacks using Web Audio API nodes.
 */
export function playSfx(type: SfxType, characterId?: string) {
  if (isMuted()) return;

  const audioCtx = getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;

  switch (type) {
    case "success": {
      // 3 ascending notes (C5 -> E5 -> G5) over 240ms
      const notes = [523.25, 659.25, 783.99];
      const noteDuration = 0.08;
      
      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);
        
        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.04, now + index * 0.08 + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + noteDuration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + noteDuration);
      });
      break;
    }

    case "failure": {
      // 2 low descending notes (A3 -> D3) over 150ms
      const notes = [220.00, 146.83];
      const noteDuration = 0.15;
      
      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = "triangle"; // warmer buzzy tone
        osc.frequency.setValueAtTime(freq, now + index * 0.12);
        
        gain.gain.setValueAtTime(0, now + index * 0.12);
        gain.gain.linearRampToValueAtTime(0.05, now + index * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.12 + noteDuration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now + index * 0.12);
        osc.stop(now + index * 0.12 + noteDuration);
      });
      break;
    }

    case "partial": {
      // 2 static neutral notes (A4 -> A4) over 100ms
      const notes = [440.00, 440.00];
      const noteDuration = 0.08;
      
      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.10);
        
        gain.gain.setValueAtTime(0, now + index * 0.10);
        gain.gain.linearRampToValueAtTime(0.04, now + index * 0.10 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.10 + noteDuration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now + index * 0.10);
        osc.stop(now + index * 0.10 + noteDuration);
      });
      break;
    }

    case "question": {
      // 3 short ticks spaced by 150ms
      const ticks = 3;
      const tickDuration = 0.02;
      
      for (let i = 0; i < ticks; i++) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(1400 - i * 150, now + i * 0.15);
        
        gain.gain.setValueAtTime(0, now + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.025, now + i * 0.15 + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.15 + tickDuration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + tickDuration + 0.005);
      }
      break;
    }

    case "hover": {
      // Short blip with 60ms cooldown throttle
      const timeNow = Date.now();
      if (timeNow - lastHoverTime < 60) return;
      lastHoverTime = timeNow;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(880.00, now);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.015, now + 0.002); // very low volume
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.02);
      break;
    }

    case "confirm": {
      // Ascending clicky sweep over 50ms
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 0.055);
      break;
    }

    case "transition": {
      // Filtered noise sweep whoosh over 150ms
      const bufferSize = audioCtx.sampleRate * 0.15;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = buffer;
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(350, now + 0.15);
      filter.Q.value = 1.2;
      
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.015, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      
      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      noiseSource.start(now);
      noiseSource.stop(now + 0.16);
      break;
    }

    case "typewriter": {
      // Retro Animal Crossing character blip voice synthesizer
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const lowpass = audioCtx.createBiquadFilter();

      // Pitch definitions based on characters roles/vibes
      let baseFreq = 220;
      if (characterId === "ceo") baseFreq = 85;          // Don Banano: deep executive low voice
      else if (characterId === "senior") baseFreq = 135;  // Sven: tired developer low-mid voice
      else if (characterId === "manager" || characterId === "pm") baseFreq = 210; // Gerry/Pam: PM voice
      else if (characterId === "hr") baseFreq = 380;      // Helga: friendly HR high-pitched voice

      // Formant frequency jitter to sound organic
      const jitter = (Math.random() - 0.5) * 15;
      const freq = baseFreq + jitter;

      lowpass.type = "lowpass";
      lowpass.frequency.value = baseFreq * 2.2; // cut high harmonics for warm retro tone

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.02, now + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038); // 38ms decay blip

      osc.connect(lowpass);
      lowpass.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.042);
      break;
    }
  }
}
