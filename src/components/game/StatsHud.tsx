import React, { useEffect, useState, useRef } from "react";
import { useGameStore } from "../../store/useGameStore";
import { Shield, Brain, UserCheck, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StatDelta {
  id: string;
  value: number;
  type: "reputation" | "skill" | "risk";
}

export const StatsHud: React.FC = () => {
  const {
    reputation,
    skill,
    risk,
    currentDay,
    currentScope,
    isMuted,
    toggleMute,
  } = useGameStore();

  const [deltas, setDeltas] = useState<StatDelta[]>([]);

  const prevRep = useRef(reputation);
  const prevSkill = useRef(skill);
  const prevRisk = useRef(risk);

  const addDelta = (value: number, type: "reputation" | "skill" | "risk") => {
    const id = Math.random().toString(36).substring(2);

    setDeltas((prev) => [...prev, { id, value, type }]);

    setTimeout(() => {
      setDeltas((prev) => prev.filter((d) => d.id !== id));
    }, 1500);
  };

  useEffect(() => {
    if (reputation !== prevRep.current) {
      addDelta(reputation - prevRep.current, "reputation");
      prevRep.current = reputation;
    }
  }, [reputation]);

  useEffect(() => {
    if (skill !== prevSkill.current) {
      addDelta(skill - prevSkill.current, "skill");
      prevSkill.current = skill;
    }
  }, [skill]);

  useEffect(() => {
    if (risk !== prevRisk.current) {
      addDelta(risk - prevRisk.current, "risk");
      prevRisk.current = risk;
    }
  }, [risk]);

  // Segment renderer (10 blocks per bar)
  const renderSegments = (val: number, colorClass: string, glowClass: string) => {
    const activeCount = Math.round(val / 10);

    return (
      <div className="flex gap-[3px] w-full">
        {Array.from({ length: 10 }).map((_, i) => {
          const isActive = i < activeCount;

          return (
            <div
              key={i}
              className={`h-2 flex-1 rounded-[1px] transition-all duration-300 ${
                isActive
                  ? `${colorClass} ${glowClass} border border-white/10`
                  : "bg-white/5 border border-white/5"
              }`}
            />
          );
        })}
      </div>
    );
  };

  const dayConcepts: Record<number, string[]> = {
    1: ["prompt_structure", "ambiguity"],
    2: ["hallucination", "temperature"],
    3: ["evals"],
    4: ["rag", "tools", "agents"],
    5: ["prompt_injection", "guardrails"],
  };

  const unlockedList: string[] = [];

  for (let d = 1; d <= currentDay; d++) {
    if (dayConcepts[d]) {
      unlockedList.push(...dayConcepts[d]);
    }
  }

  const conceptDefinitions = [
    { key: "prompt_structure", label: "Estructura Prompt" },
    { key: "ambiguity", label: "Ambigüedad" },
    { key: "hallucination", label: "Hallucinations" },
    { key: "temperature", label: "Temperatura" },
    { key: "evals", label: "Evaluación / Evals" },
    { key: "rag", label: "RAG Vectorial" },
    { key: "tools", label: "Tool Calling" },
    { key: "agents", label: "Agentes IA" },
    { key: "prompt_injection", label: "Inyección Prompt" },
    { key: "guardrails", label: "Guardrails" },
  ];

  const getRoleTitle = () => {
    if (currentDay >= 4) return "AI Systems Architect";
    if (currentDay >= 2) return "Associate AI Engineer";
    return "Junior AI Engineer";
  };

  return (
    <div className="hud-sidebar h-full flex flex-col justify-between bg-[#0f131c]/60 border border-white/5 backdrop-blur-[20px] rounded-xl p-5 select-none relative">
      <div className="flex flex-col gap-4">
        {/* Branding header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(252,211,77,0.25)]"
              viewBox="0 0 100 100"
            >
              <path
                d="M 32 32 C 48 38, 62 48, 68 68 C 55 64, 42 52, 32 32 Z"
                fill="#fcd34d"
              />
            </svg>

            <div>
              <div className="font-['Outfit'] font-extrabold text-sm tracking-wider">
                BANANO<span className="text-[#fcd34d]">CORP</span>
              </div>

              <div className="font-mono text-[9px] text-[#64748b] tracking-widest uppercase">
                Mainframe v1.2
              </div>
            </div>
          </div>

          {/* Mute/Unmute Audio Toggle */}
          <button
            onClick={toggleMute}
            className={`p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isMuted
                ? "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30 hover:bg-[#ef4444]/20"
                : "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30 hover:bg-[#10b981]/20 shadow-[0_0_8px_rgba(16,185,129,0.15)]"
            }`}
            title={isMuted ? "Activar sonido" : "Silenciar sonido"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 animate-pulse" />
            )}
          </button>
        </div>

        {/* User Role Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-lg p-3">
          <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
            Empleado Activo
          </div>

          <div className="font-['Outfit'] font-bold text-sm text-[#fcd34d] tracking-wide truncate mt-0.5">
            Junior AI Developer
          </div>

          <div className="text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded inline-block mt-2 uppercase tracking-widest border border-white/5">
            {getRoleTitle()}
          </div>
        </div>

        {/* Status Indicators list */}
        <div className="flex flex-col gap-4">
          {/* Reputation indicator */}
          <div className="relative bg-[#090d16]/30 border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-[10px] text-[#64748b] uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#3b82f6]" />
                Reputación
              </span>

              <span className="font-mono text-xs font-bold text-[#3b82f6]">
                {reputation}%
              </span>
            </div>

            {renderSegments(
              reputation,
              "bg-[#3b82f6]",
              "shadow-[0_0_8px_rgba(59,130,246,0.3)]",
            )}

            {/* Pop deltas */}
            <div className="absolute right-2 top-2 overflow-hidden pointer-events-none">
              <AnimatePresence>
                {deltas
                  .filter((d) => d.type === "reputation")
                  .map((d) => (
                    <motion.div
                      key={d.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -15 }}
                      exit={{ opacity: 0 }}
                      className={`font-mono text-[10px] font-bold ${
                        d.value >= 0 ? "text-[#10b981]" : "text-[#f43f5e]"
                      }`}
                    >
                      {d.value >= 0 ? `+${d.value}` : d.value}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Skill indicator */}
          <div className="relative bg-[#090d16]/30 border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-[10px] text-[#64748b] uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#10b981]" />
                Skill IA
              </span>

              <span className="font-mono text-xs font-bold text-[#10b981]">
                {skill}%
              </span>
            </div>

            {renderSegments(
              skill,
              "bg-[#10b981]",
              "shadow-[0_0_8px_rgba(16,185,129,0.3)]",
            )}

            {/* Pop deltas */}
            <div className="absolute right-2 top-2 overflow-hidden pointer-events-none">
              <AnimatePresence>
                {deltas
                  .filter((d) => d.type === "skill")
                  .map((d) => (
                    <motion.div
                      key={d.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -15 }}
                      exit={{ opacity: 0 }}
                      className={`font-mono text-[10px] font-bold ${
                        d.value >= 0 ? "text-[#10b981]" : "text-[#f43f5e]"
                      }`}
                    >
                      {d.value >= 0 ? `+${d.value}` : d.value}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Risk indicator */}
          <div className="relative bg-[#090d16]/30 border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-[10px] text-[#64748b] uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#f43f5e]" />
                Riesgo RH
              </span>

              <span className="font-mono text-xs font-bold text-[#f43f5e]">
                {risk}%
              </span>
            </div>

            {renderSegments(
              risk,
              "bg-[#f43f5e]",
              "shadow-[0_0_8px_rgba(244,63,94,0.3)]",
            )}

            {/* Pop deltas */}
            <div className="absolute right-2 top-2 overflow-hidden pointer-events-none">
              <AnimatePresence>
                {deltas
                  .filter((d) => d.type === "risk")
                  .map((d) => (
                    <motion.div
                      key={d.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -15 }}
                      exit={{ opacity: 0 }}
                      className={`font-mono text-[10px] font-bold ${
                        d.value > 0 ? "text-[#f43f5e]" : "text-[#10b981]"
                      }`}
                    >
                      {d.value > 0 ? `+${d.value}` : d.value}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Unlocked Concepts Drawer */}
        <div className="border-t border-white/5 pt-4">
          <h4 className="font-['Outfit'] font-bold text-[10px] text-[#64748b] uppercase tracking-wider mb-2">
            Conceptos Vistos
          </h4>

          <div className="flex flex-wrap gap-1">
            {conceptDefinitions.map((concept) => {
              const isUnlocked = unlockedList.includes(concept.key);

              return (
                <span
                  key={concept.key}
                  className={`font-mono text-[8px] px-1.5 py-0.5 rounded border transition-all duration-300 ${
                    isUnlocked
                      ? "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30 shadow-[0_0_8px_rgba(16,185,129,0.05)]"
                      : "bg-white/[0.01] text-[#64748b]/40 border-white/5"
                  }`}
                >
                  {concept.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress Footer Panel */}
      <div className="border-t border-white/5 pt-4 mt-5">
        <div className="flex justify-between text-[9px] font-mono text-[#64748b] uppercase tracking-widest mb-1.5">
          <span>Scope: {currentScope}</span>
          <span>Día: {currentDay} / 5</span>
        </div>

        <div className="w-full h-1.5 bg-white/5 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#fcd34d] transition-all duration-500 shadow-[0_0_6px_rgba(252,211,77,0.3)]"
            style={{ width: `${(currentDay / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};