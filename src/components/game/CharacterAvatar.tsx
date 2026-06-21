import React from "react";
import { motion } from "framer-motion";

export interface CharacterSpriteProps {
  characterId: "manager" | "pm" | "senior" | "ceo" | "hr";
  mood: string; // matches emotion
  isSpeaking?: boolean;
  isActive?: boolean;
  className?: string;
}

export interface CharacterAvatarProps {
  characterId: "manager" | "pm" | "senior" | "ceo" | "hr";
  emotion: string;
  className?: string;
}

// Central mapping of characters to their new approved banana SVG sprites
const characterSprites = {
  manager: "/characters/banana-manager.svg", // Gerry
  pm: "/characters/banana-manager.svg",      // Pam (Gerry Manager / PM / Manager use banana-manager.svg)
  senior: "/characters/banana-senior.svg",    // Sven
  ceo: "/characters/banana-ceo.svg",          // Don Banano
  hr: "/characters/banana-hr.svg"            // Helga
};

export const CharacterSprite: React.FC<CharacterSpriteProps> = ({
  characterId,
  mood,
  isSpeaking = false,
  isActive = true,
  className = ""
}) => {
  const spriteSrc = characterSprites[characterId];

  // Base motion transition configuration
  const getTransition = () => {
    if (isSpeaking) {
      return {
        y: { repeat: Infinity, duration: 0.45, ease: "easeInOut" as const },
        scale: { repeat: Infinity, duration: 0.45, ease: "easeInOut" as const },
        rotate: { repeat: Infinity, duration: 0.45, ease: "easeInOut" as const }
      };
    }
    
    // Slower breathing for idle/tired moods
    const duration = mood === "tired" ? 6 : (mood === "excited" || mood === "excited-comic" ? 2.5 : 4);
    return {
      y: { repeat: Infinity, duration: duration, ease: "easeInOut" as const },
      rotate: { type: "spring" as const, stiffness: 50, damping: 10 }
    };
  };

  // Determine dynamic animation values based on state and mood
  const getAnimateState = () => {
    let yVal = [0, -4, 0];
    let scaleVal = 1;
    let rotateVal: number | number[] = 0;
    let xVal = 0;

    // 1. Handle Speaking States (Bounce & Scale)
    if (isSpeaking) {
      yVal = [0, -8, 0];
      scaleVal = 1.025;
      
      // Speaking while angry = aggressive tilt
      if (mood === "angry" || mood === "molesto") {
        rotateVal = [-2, 2, -2];
      }
    } else {
      // Idle breathing heights
      if (mood === "tired") {
        yVal = [0, -2, 0];
      } else if (mood === "excited" || mood === "excited-comic") {
        yVal = [0, -6, 0];
      }
    }

    // 2. Handle Moods (Angle/Tilt and Jitter offsets)
    if (mood === "smug" || mood === "sarcastic" || mood === "approving") {
      rotateVal = rotateVal || 2.5; // Cocky tilt
    } else if (mood === "worried" || mood === "confused") {
      rotateVal = rotateVal || -2; // Nervous lean
    }

    return {
      y: yVal,
      scale: scaleVal,
      rotate: rotateVal,
      x: xVal,
      filter: getGlowFilter()
    };
  };

  // Mood-based glow filters (glow outline shadows)
  const getGlowFilter = () => {
    if (mood === "angry" || mood === "molesto") {
      return "drop-shadow(0 0 10px rgba(239, 68, 68, 0.4)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))";
    }
    if (mood === "approving" || mood === "excited" || mood === "excited-comic") {
      return "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))";
    }
    if (characterId === "ceo") {
      return "drop-shadow(0 0 12px rgba(252, 211, 77, 0.35)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))";
    }
    return "drop-shadow(0 4px 12px rgba(0,0,0,0.5))";
  };

  if (!spriteSrc) return null;

  return (
    <motion.div
      key={`${characterId}`}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ 
        opacity: isActive ? 1 : 0.6, 
        scale: isActive ? 1 : 0.95,
        y: 0 
      }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative select-none aspect-square flex items-center justify-center ${className}`}
    >
      {/* Animated Sprite Wrapper */}
      <motion.div
        animate={getAnimateState()}
        transition={getTransition()}
        className="w-full h-full flex items-center justify-center"
      >
        <img 
          src={spriteSrc} 
          alt={`${characterId} (${mood})`} 
          className="w-full h-full object-contain"
          draggable="false"
        />
      </motion.div>
    </motion.div>
  );
};

// Backward-compatible CharacterAvatar wrapper
export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  characterId,
  emotion,
  className = ""
}) => {
  return (
    <CharacterSprite
      characterId={characterId}
      mood={emotion}
      isSpeaking={false}
      isActive={true}
      className={className}
    />
  );
};
