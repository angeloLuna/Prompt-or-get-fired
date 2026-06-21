import React from "react";
import { CharacterAvatar } from "./CharacterAvatar";
import { Scene } from "../../game/data/scenes";

interface VisualNovelStageProps {
  scene: Scene;
}

export const VisualNovelStage: React.FC<VisualNovelStageProps> = ({ scene }) => {
  const isCeo = scene.character === "ceo";
  const isHr = scene.character === "hr";

  // Determine stage background style based on active speaker
  const getStageBackground = () => {
    if (isCeo) {
      return "radial-gradient(circle, rgba(239, 68, 68, 0.2) 10%, transparent 80%)";
    }
    if (isHr) {
      return "radial-gradient(circle, rgba(139, 92, 246, 0.15) 10%, transparent 80%)";
    }
    return "radial-gradient(circle, rgba(30, 41, 59, 0.45) 10%, transparent 80%)";
  };

  return (
    <div 
      className="relative w-full h-[320px] md:h-[400px] flex items-end justify-center overflow-hidden rounded-xl border border-white/5 bg-[#0a0e17]/80 transition-all duration-500"
      style={{ backgroundImage: getStageBackground() }}
    >
      {/* Alarm Siren Overlay */}
      {isCeo && (
        <div className="absolute inset-0 border border-[#f43f5e]/30 pointer-events-none animate-[pulse_1s_infinite] bg-[#f43f5e]/5 z-0" />
      )}

      {/* Cyber Grid background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px"
        }}
      />

      {/* Render Character Sprite Avatar */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-end justify-center mb-[-10px]">
        <CharacterAvatar 
          characterId={scene.character} 
          emotion={scene.emotion} 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
