import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export type BackgroundCharacterId = "manager" | "pm" | "senior" | "ceo" | "hr";

const backgroundMapping: Record<BackgroundCharacterId, string> = {
  hr: "/background-proposals/normal-office/scene-hr-office.svg",
  manager: "/background-proposals/normal-office/scene-manager-meeting-room.svg",
  pm: "/background-proposals/normal-office/scene-manager-meeting-room.svg",
  senior: "/background-proposals/normal-office/scene-senior-dev-desk.svg",
  ceo: "/background-proposals/normal-office/scene-ceo-office.svg"
};

interface SceneBackgroundProps {
  characterId: BackgroundCharacterId;
  className?: string;
}

export const SceneBackground: React.FC<SceneBackgroundProps> = ({
  characterId,
  className = ""
}) => {
  const bgSrc = backgroundMapping[characterId] || backgroundMapping.hr;

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </AnimatePresence>
    </div>
  );
};
