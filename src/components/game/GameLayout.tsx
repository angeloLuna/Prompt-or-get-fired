import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { StatsHud } from "./StatsHud";
import { VisualNovelStage } from "./VisualNovelStage";
import { DialogueBox } from "./DialogueBox";
import { ChoiceOverlay } from "./ChoiceOverlay";
import { PromptChallenge } from "./PromptChallenge";
import { FeedbackOverlay } from "./FeedbackOverlay";
import { DayRecap } from "./DayRecap";
import { EndingScreen } from "./EndingScreen";

export const GameLayout: React.FC = () => {
  const { activeDayScenes, currentSceneIndex } = useGameStore();

  const scene = activeDayScenes[currentSceneIndex];

  if (!scene) return null;

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 md:p-6 flex flex-col md:grid md:grid-cols-[280px_1fr] gap-6 min-h-[600px] relative z-10">
      {/* Sidebar Stats & Concepts Hud */}
      <aside className="w-full md:h-full">
        <StatsHud />
      </aside>

      {/* Main Gameplay Screen Area */}
      <main className="flex flex-col gap-6 h-full relative">
        <VisualNovelStage scene={scene} />

        <div className="flex flex-col gap-4">
          <DialogueBox scene={scene} />
          
          {/* Choices selector overlay */}
          {scene.type === "choice" && (
            <ChoiceOverlay scene={scene} />
          )}
        </div>

        {/* Prompt editor panel overlay */}
        {scene.type === "prompt" && (
          <PromptChallenge scene={scene} />
        )}
      </main>

      {/* Choice feedback Overlay */}
      <FeedbackOverlay />

      {/* Intermission Day Recap Panel */}
      <DayRecap />

      {/* Final Ending report board */}
      <EndingScreen />
    </div>
  );
};
