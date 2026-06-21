import React from "react";
import { CharacterSprite } from "./CharacterAvatar";
import { Scene } from "../../game/data/scenes";
import { SceneBackground } from "./SceneBackground";

interface VisualNovelStageProps {
  scene: Scene;
  isSpeaking?: boolean;
}

export const VisualNovelStage: React.FC<VisualNovelStageProps> = ({ scene, isSpeaking = false }) => {
  const isCeo = scene.character === "ceo";

  return (
    <div className="relative w-full h-[320px] md:h-[400px] flex items-end justify-center overflow-hidden rounded-xl border border-white/5 bg-[#0a0e17] transition-all duration-500">
      {/* Background layer */}
      <SceneBackground characterId={scene.character} />

      {/* Alarm Siren Overlay on top of background & character */}
      {isCeo && (
        <div className="absolute inset-0 border border-[#f43f5e]/30 pointer-events-none animate-[pulse_1s_infinite] bg-[#f43f5e]/5 z-20" />
      )}

      {/* Render Character Sprite Avatar (z-10 layer) */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-end justify-center mb-[-10px]">
        <CharacterSprite 
          characterId={scene.character} 
          mood={scene.emotion} 
          isSpeaking={isSpeaking}
          isActive={true}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

