import React, { useState, useEffect, useRef } from "react";
import { useGameStore } from "../../store/useGameStore";
import { Scene } from "../../game/data/scenes";
import { ChevronRight } from "lucide-react";

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

export const DialogueBox: React.FC<DialogueBoxProps> = ({ scene, onTypingChange }) => {
  const nextScene = useGameStore((state) => state.nextScene);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    onTypingChange?.(isTyping);
  }, [isTyping, onTypingChange]);

  const charInfo = characters[scene.character] || { name: "Desconocido", color: "#64748b" };

  useEffect(() => {
    // Clear any active typewriter timers
    if (timerRef.current) clearInterval(timerRef.current);

    setDisplayedText("");
    setIsTyping(true);
    textRef.current = "";

    const targetText = scene.dialogue;
    let charIndex = 0;

    timerRef.current = setInterval(() => {
      if (charIndex < targetText.length) {
        textRef.current += targetText[charIndex];
        setDisplayedText(textRef.current);
        charIndex++;
      } else {
        setIsTyping(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 20); // Type speed 20ms per character

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [scene.dialogue]);

  const handleBoxClick = () => {
    if (isTyping) {
      // Skip typewriter animation
      if (timerRef.current) clearInterval(timerRef.current);
      setDisplayedText(scene.dialogue);
      setIsTyping(false);
    } else {
      // Trigger next scene transition
      if (scene.type !== "choice" && scene.type !== "prompt") {
        nextScene();
      }
    }
  };

  return (
    <div 
      onClick={handleBoxClick}
      className="relative w-full min-h-[140px] bg-[#0f131c]/70 border border-white/5 backdrop-blur-[20px] rounded-xl p-5 md:p-6 cursor-pointer select-none transition-all duration-300 hover:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Speaker Name Tag */}
      <div 
        className="absolute -top-4 left-6 font-['Outfit'] font-extrabold text-xs px-4 py-1.5 rounded-md border tracking-wider uppercase"
        style={{
          color: charInfo.color,
          borderColor: charInfo.color,
          backgroundColor: `rgba(15, 19, 28, 0.95)`,
          boxShadow: `0 0 10px ${charInfo.color}30`
        }}
      >
        {charInfo.name}
      </div>

      {/* Speaking Soundwave Visualizer */}
      {isTyping && (
        <div className="absolute top-4 right-6 flex items-end gap-[3px] h-4">
          <div className="w-[3px] h-2 bg-[#fcd34d] animate-[bounce_0.6s_infinite_alternate]" />
          <div className="w-[3px] h-4 bg-[#fcd34d] animate-[bounce_0.8s_infinite_alternate_0.1s]" />
          <div className="w-[3px] h-1 bg-[#fcd34d] animate-[bounce_0.5s_infinite_alternate_0.2s]" />
          <div className="w-[3px] h-3 bg-[#fcd34d] animate-[bounce_0.7s_infinite_alternate_0.15s]" />
        </div>
      )}

      {/* Dialogue Content */}
      <div className="font-['Inter'] text-sm md:text-base leading-relaxed text-[#dfe2ef] pt-2 whitespace-pre-wrap select-text pr-10">
        {displayedText}
      </div>

      {/* Click Indicator */}
      {!isTyping && scene.type !== "choice" && scene.type !== "prompt" && (
        <div className="absolute bottom-4 right-5 flex items-center gap-1 font-mono text-[9px] text-[#64748b] uppercase tracking-widest animate-pulse">
          Siguiente <ChevronRight className="w-3 h-3" />
        </div>
      )}
    </div>
  );
};
