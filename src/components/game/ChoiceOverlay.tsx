import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { Scene, Choice } from "../../game/data/scenes";
import { motion } from "framer-motion";
import { playSfx } from "../../utils/audio";

interface ChoiceOverlayProps {
  scene: Scene;
}

export const ChoiceOverlay: React.FC<ChoiceOverlayProps> = ({ scene }) => {
  const submitChoice = useGameStore((state) => state.submitChoice);

  if (!scene.choices) return null;

  const handleChoiceClick = (choice: Choice) => {
    playSfx("confirm");
    submitChoice(choice, scene.id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col gap-3 mt-4"
    >
      {scene.choices.map((choice: Choice, idx: number) => {
        return (
          <motion.button
            key={idx}
            onClick={() => handleChoiceClick(choice)}
            onMouseEnter={() => playSfx("hover")}
            whileHover={{ 
              x: [0, -2, 2, -1, 1, 0],
              transition: { duration: 0.25 }
            }}
            className="w-full text-left font-['Inter'] text-xs md:text-sm py-4 px-6 rounded-lg bg-[#0f131c]/60 border border-white/10 hover:border-transparent text-[#dfe2ef] transition-all duration-200 cursor-pointer relative overflow-hidden group"
          >
            {/* Hover Background Gradient */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 block pr-6">
              {choice.text}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};
