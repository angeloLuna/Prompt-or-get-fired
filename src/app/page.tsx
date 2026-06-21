"use client";

import { useState } from "react";
import { useGameStore } from "../store/useGameStore";
import { ScopeSelector } from "../components/game/ScopeSelector";
import { GameLayout } from "../components/game/GameLayout";
import { SplashScreen } from "../components/game/SplashScreen";

export default function Home() {
  const currentScope = useGameStore((state) => state.currentScope);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="flex flex-col min-h-screen relative w-full items-center justify-center overflow-x-hidden bg-[#090d16]">
      {/* Cyber Workspace Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(252, 211, 77, 0.05) 0%, transparent 40%),
            linear-gradient(rgba(255, 255, 255, 0.007) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.007) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px"
        }}
      />

      {currentScope === null ? (
        <ScopeSelector />
      ) : (
        <GameLayout />
      )}

      {/* Splash screen — sits above everything via fixed + z-[9999] */}
      {showSplash && (
        <SplashScreen onDone={() => setShowSplash(false)} displayMs={1600} />
      )}
    </div>
  );
}

