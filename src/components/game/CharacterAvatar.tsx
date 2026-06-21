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

// ---------------------------------------------------------------------------
// Central sprite maps — mood + speaking variants per character.
// Priority: isSpeaking → mood → fallback
// Characters without PNG sets (hr) fall back to their banana SVG.
// ---------------------------------------------------------------------------

type SpriteMap = Record<string, string>;

const SPRITE_MAPS: Record<string, SpriteMap> = {
  // PM and Manager share the pm_* PNG set
  pm: {
    neutral: "/characters/pm_neutral.png",
    approving: "/characters/pm_happy.png",
    excited: "/characters/pm_happy.png",
    confused: "/characters/pm_worried.png",
    worried: "/characters/pm_worried.png",
    smug: "/characters/pm_smug.png",
    angry: "/characters/pm_angry.png",
    molesto: "/characters/pm_angry.png",
    _speaking: "/characters/pm_speaking.png",
    _fallback: "/characters/pm_neutral.png",
  },
  manager: {
    neutral: "/characters/pm_neutral.png",
    approving: "/characters/pm_happy.png",
    excited: "/characters/pm_happy.png",
    confused: "/characters/pm_worried.png",
    worried: "/characters/pm_worried.png",
    smug: "/characters/pm_smug.png",
    angry: "/characters/pm_angry.png",
    molesto: "/characters/pm_angry.png",
    _speaking: "/characters/pm_speaking.png",
    _fallback: "/characters/pm_neutral.png",
  },
  senior: {
    neutral: "/characters/senior_neutral.png",
    happy: "/characters/senior_happy.png",
    approving: "/characters/senior_happy.png",
    smug: "/characters/senior_smug.png",
    worried: "/characters/senior_worried.png",
    confused: "/characters/senior_worried.png",
    tired: "/characters/senior_tired.png",
    _speaking: "/characters/senior_speaking.png",
    _fallback: "/characters/senior_neutral.png",
  },
  ceo: {
    neutral: "/characters/ceo_neutral.png",
    intense: "/characters/ceo_angry.png",
    angry: "/characters/ceo_angry.png",
    happy: "/characters/ceo_happy.png",
    approving: "/characters/ceo_happy.png",
    smug: "/characters/ceo_smug.png",
    worried: "/characters/ceo_worried.png",
    _speaking: "/characters/ceo_speaking.png",
    _fallback: "/characters/ceo_neutral.png",
  },
  // Characters without PNG sets — single SVG fallback
  hr: {
    _fallback: "/characters/banana-hr.svg",
  },
};

/**
 * Resolve the correct sprite path for a character.
 * Priority:
 *   1. Speaking variant  (if isSpeaking and _speaking exists)
 *   2. Mood-matched PNG  (if mood key exists in map)
 *   3. Fallback sprite   (_fallback key — SVG or neutral PNG)
 */
function resolveSprite(characterId: string, mood: string, isSpeaking: boolean): string {
  const map = SPRITE_MAPS[characterId];
  if (!map) return "/characters/banana-hr.svg"; // ultimate safety net

  if (isSpeaking && map._speaking) return map._speaking;
  if (map[mood]) return map[mood];
  return map._fallback ?? "/characters/banana-hr.svg";
}

export const CharacterSprite: React.FC<CharacterSpriteProps> = ({
  characterId,
  mood,
  isSpeaking = false,
  isActive = true,
  className = ""
}) => {
  const spriteSrc = resolveSprite(characterId, mood, isSpeaking);

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
