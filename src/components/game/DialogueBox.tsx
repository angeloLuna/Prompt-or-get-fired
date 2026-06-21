import React, { useState, useEffect, useRef } from "react";
import { useGameStore } from "../../store/useGameStore";
import { Scene } from "../../game/data/scenes";
import { ChevronRight } from "lucide-react";
import { playSfx } from "../../utils/audio";

interface DialogueBoxProps {
  scene: Scene;
  onTypingChange?: (isTyping: boolean) => void;
}

const characters = {
  manager: { name: "Gerry (Manager)", color: "#fcd34d" },
  pm: { name: "Pam (PM)", color: "#ec4899" },
  senior: { name: "Sven (Senior AI Eng)", color: "#3b82f6" },
  ceo: { name: "Don Banano (CEO)", color: "#ef4444" },
  hr: { name: "Helga (HR)", color: "#8b5cf6" }
};

const CHARACTER_VOICES: Record<string, string> = {
  manager: "CwhRBWXzGAHq8TQ4Fs17",
  pm: "FGY2WhTYpPnrIDTdsKH5",
  senior: "cjVigY5qzO86Huf0OWal",
  ceo: "pNInz6obpgDQGcFmaJgB",
  hr: "XrExE9yKIg1WjnnlVkGX"
};

export const DialogueBox: React.FC<DialogueBoxProps> = ({ scene, onTypingChange }) => {
  const nextScene = useGameStore((state) => state.nextScene);
  const isMuted = useGameStore((state) => state.isMuted);

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const textRef = useRef("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    onTypingChange?.(isTyping || isAudioPlaying);
  }, [isTyping, isAudioPlaying, onTypingChange]);

  useEffect(() => {
    if (isMuted && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsAudioPlaying(false);
    }
  }, [isMuted]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const charInfo = characters[scene.character] || {
    name: "Desconocido",
    color: "#64748b"
  };

  useEffect(() => {
    let cancelled = false;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsAudioPlaying(false);

    playSfx("transition");

    if (scene.type === "choice" || scene.type === "prompt") {
      playSfx("question");
    }

    const deferTimer = setTimeout(() => {
      if (cancelled) return;

      setDisplayedText("");
      setIsTyping(true);
      textRef.current = "";

      const targetText = scene.dialogue;
      let charIndex = 0;

      timerRef.current = setInterval(() => {
        if (charIndex < targetText.length) {
          const currentChar = targetText[charIndex];

          textRef.current += currentChar;
          setDisplayedText(textRef.current);

          if (
            !isMuted &&
            charIndex % 3 === 0 &&
            currentChar.trim() !== ""
          ) {
            playSfx("typewriter", scene.character);
          }

          charIndex++;
        } else {
          setIsTyping(false);

          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        }
      }, 20);
    }, 0);

    const fetchAndPlayAudio = async () => {
      if (isMuted) return;

      try {
        const voiceId = CHARACTER_VOICES[scene.character] || "21m00Tcm4TlvDq8ikWAM";

        const response = await fetch("/api/tts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: scene.dialogue,
            voiceId
          })
        });

        if (cancelled) return;

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          console.warn("Failed to fetch TTS audio:", response.status, errData);
          return;
        }

        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const data = await response.json();
          console.log("TTS Mock Mode:", data.message);
          return;
        }

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);

        audioRef.current = audio;

        audio.onplay = () => {
          if (!cancelled) setIsAudioPlaying(true);
        };

        audio.onended = () => {
          if (!cancelled) setIsAudioPlaying(false);
          URL.revokeObjectURL(audioUrl);
        };

        audio.onerror = () => {
          if (!cancelled) setIsAudioPlaying(false);
          URL.revokeObjectURL(audioUrl);
        };

        await audio.play();
      } catch (error) {
        if (!cancelled) {
          console.warn("Audio playback error:", error);
          setIsAudioPlaying(false);
        }
      }
    };

    fetchAndPlayAudio();

    return () => {
      cancelled = true;

      clearTimeout(deferTimer);

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      setIsAudioPlaying(false);
    };
  }, [scene.id, scene.dialogue, scene.character, scene.type, isMuted]);

  const handleBoxClick = () => {
    if (isTyping) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      setDisplayedText(scene.dialogue);
      setIsTyping(false);
      return;
    }

    if (scene.type !== "choice" && scene.type !== "prompt") {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      setIsAudioPlaying(false);
      nextScene();
    }
  };

  return (
    <div
      onClick={handleBoxClick}
      className="relative w-full min-h-[140px] bg-[#0f131c]/70 border border-white/5 backdrop-blur-[20px] rounded-xl p-5 md:p-6 cursor-pointer select-none transition-all duration-300 hover:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      <div
        className="absolute -top-4 left-6 font-['Outfit'] font-extrabold text-xs px-4 py-1.5 rounded-md border tracking-wider uppercase"
        style={{
          color: charInfo.color,
          borderColor: charInfo.color,
          backgroundColor: "rgba(15, 19, 28, 0.95)",
          boxShadow: `0 0 10px ${charInfo.color}30`
        }}
      >
        {charInfo.name}
      </div>

      {(isTyping || isAudioPlaying) && (
        <div className="absolute top-4 right-6 flex items-end gap-[3px] h-4">
          <div className="w-[3px] h-2 bg-[#fcd34d] animate-[bounce_0.6s_infinite_alternate]" />
          <div className="w-[3px] h-4 bg-[#fcd34d] animate-[bounce_0.8s_infinite_alternate_0.1s]" />
          <div className="w-[3px] h-1 bg-[#fcd34d] animate-[bounce_0.5s_infinite_alternate_0.2s]" />
          <div className="w-[3px] h-3 bg-[#fcd34d] animate-[bounce_0.7s_infinite_alternate_0.15s]" />
        </div>
      )}

      <div className="font-['Inter'] text-sm md:text-base leading-relaxed text-[#dfe2ef] pt-2 whitespace-pre-wrap select-text pr-10">
        {displayedText}
      </div>

      {!isTyping && scene.type !== "choice" && scene.type !== "prompt" && (
        <div className="absolute bottom-4 right-5 flex items-center gap-1 font-mono text-[9px] text-[#64748b] uppercase tracking-widest animate-pulse">
          Siguiente <ChevronRight className="w-3 h-3" />
        </div>
      )}
    </div>
  );
};