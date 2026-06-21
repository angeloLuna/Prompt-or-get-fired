import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { resolveEnding } from "../../game/data/endings";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Home, ArrowRight, ClipboardList } from "lucide-react";

export const EndingScreen: React.FC = () => {
  const { 
    currentScope, 
    reputation, 
    skill, 
    risk, 
    decisions, 
    isEndingOpen, 
    restartCurrentScope, 
    returnToSelector, 
    continueToNextScope 
  } = useGameStore();

  if (!isEndingOpen || !currentScope) return null;

  const ending = resolveEnding(currentScope, { reputation, skill, risk });

  const getBadgeStyle = (klass: "good" | "mid" | "bad") => {
    if (klass === "good") return "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]";
    if (klass === "bad") return "bg-[#f43f5e]/15 text-[#f43f5e] border-[#f43f5e]/30 shadow-[0_0_10px_rgba(244,63,94,0.15)]";
    return "bg-[#fcd34d]/15 text-[#fcd34d] border-[#fcd34d]/30 shadow-[0_0_10px_rgba(252,211,77,0.15)]";
  };

  const getTitleStyle = (klass: "good" | "mid" | "bad") => {
    if (klass === "good") return "text-[#10b981]";
    if (klass === "bad") return "text-[#f43f5e]";
    return "text-[#fcd34d]";
  };

  const getScopeLabel = () => {
    if (currentScope === "A") return "Scope A: Day 1 MVP";
    if (currentScope === "B") return "Scope B: 3 Days Prototype";
    return "Scope C: Full Week";
  };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 bg-[#090d16] z-50 flex flex-col p-6 overflow-y-auto select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[750px] w-full mx-auto bg-[#1c1f29]/75 border border-white/5 rounded-2xl p-8 flex flex-col gap-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] my-6"
        >
          
          {/* Ending Header */}
          <div className="text-center pb-5 border-b border-white/5 flex flex-col items-center">
            <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-widest mb-2 block">
              Expediente Laboral Final • {getScopeLabel()}
            </span>
            <span className={`inline-block font-['Outfit'] font-extrabold text-sm px-4 py-1.5 rounded-md border uppercase tracking-wider mb-3 ${getBadgeStyle(ending.badgeClass)}`}>
              {ending.badge}
            </span>
            <h2 className={`font-['Outfit'] font-extrabold text-2xl md:text-3xl tracking-tight mb-2 ${getTitleStyle(ending.badgeClass)}`}>
              {ending.title}
            </h2>
            <p className="font-['Inter'] text-sm leading-relaxed text-[#dfe2ef] max-w-xl mx-auto">
              {ending.description}
            </p>
          </div>

          {/* Stats Breakdown Row */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="bg-[#0f131c]/50 border border-white/5 p-4 rounded-xl text-center">
              <span className="font-mono text-[10px] text-[#64748b] uppercase block mb-1">Reputación Final</span>
              <strong className="font-mono text-xl md:text-2xl text-[#3b82f6]">{reputation}%</strong>
            </div>
            <div className="bg-[#0f131c]/50 border border-white/5 p-4 rounded-xl text-center">
              <span className="font-mono text-[10px] text-[#64748b] uppercase block mb-1">Skill IA Final</span>
              <strong className="font-mono text-xl md:text-2xl text-[#10b981]">{skill}%</strong>
            </div>
            <div className="bg-[#0f131c]/50 border border-white/5 p-4 rounded-xl text-center">
              <span className="font-mono text-[10px] text-[#64748b] uppercase block mb-1">Riesgo RH Final</span>
              <strong className="font-mono text-xl md:text-2xl text-[#f43f5e]">{risk}%</strong>
            </div>
          </div>

          {/* Decisions Log Checklist */}
          <div className="bg-[#0f131c]/40 border border-white/5 rounded-xl p-5 w-full">
            <h3 className="font-['Outfit'] font-bold text-xs text-[#64748b] uppercase tracking-wider border-b border-white/5 pb-2 mb-3 flex items-center gap-1.5">
              <ClipboardList className="w-4 h-4 text-[#fcd34d]" /> Registro de Decisiones
            </h3>
            
            <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1 text-xs font-['Inter']">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#64748b]">Bases de Prompting (Día 1):</span>
                <span className="text-white font-bold">{decisions.concept1}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#64748b]">Iniciativa Ambigua (Día 1):</span>
                <span className="text-white font-bold">{decisions.concept2}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-[#64748b]">System Prompt CS (Día 1):</span>
                <span className="text-white font-bold">{decisions.prompt1}</span>
              </div>

              {/* Day 1 Crisis / Scope A */}
              {currentScope === "A" && decisions.crisis1 && decisions.crisis1 !== "No tomado" && (
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#64748b]">Crisis Alucinación (Día 1):</span>
                  <span className="text-white font-bold">{decisions.crisis1}</span>
                </div>
              )}

              {/* Scope B & C Logs */}
              {(currentScope === "B" || currentScope === "C") && (
                <>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Estabilizar Temperatura (Día 2):</span>
                    <span className="text-white font-bold">{decisions.temp}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Diagnóstico Fechas (Día 2):</span>
                    <span className="text-white font-bold">{decisions.diag}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Optimizar Prompt PM (Día 2):</span>
                    <span className="text-white font-bold">{decisions.prompt2}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Validación Demo (Día 3):</span>
                    <span className="text-white font-bold">{decisions.evals}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Pregunta Reembolso (Día 3):</span>
                    <span className="text-white font-bold">{decisions.crisis3}</span>
                  </div>
                </>
              )}

              {/* Scope C Logs */}
              {currentScope === "C" && (
                <>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Bases RAG (Día 4):</span>
                    <span className="text-white font-bold">{decisions.rag}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Tool Calling Base (Día 4):</span>
                    <span className="text-white font-bold">{decisions.tools}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Permisos Agentes (Día 4):</span>
                    <span className="text-white font-bold">{decisions.agents}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Prompt Asistente Seguro (Día 4):</span>
                    <span className="text-white font-bold">{decisions.prompt3}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Inyección de Prompt (Día 5):</span>
                    <span className="text-white font-bold">{decisions.injection}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Arquitectura Guardrails (Día 5):</span>
                    <span className="text-white font-bold">{decisions.guardrails}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Incidente de Fuga (Día 5):</span>
                    <span className="text-white font-bold">{decisions.crisis5}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#64748b]">Prompt Postmortem (Día 5):</span>
                    <span className="text-white font-bold">{decisions.prompt4}</span>
                  </div>
                </>
              )}

            </div>
          </div>

          {/* Ending Actions Buttons Panel */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center w-full">
            <button
              onClick={restartCurrentScope}
              className="flex-1 flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-white/10 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reintentar
            </button>

            {/* Continuation Trigger Buttons */}
            {currentScope === "A" && ending.badgeClass !== "bad" && (
              <button
                onClick={continueToNextScope}
                className="flex-1 flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-[#fcd34d]/15 border border-[#fcd34d]/30 text-[#fcd34d] transition-all duration-200 hover:bg-[#fcd34d] hover:text-[#0f131c] cursor-pointer"
              >
                Continuar a Scope B <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {currentScope === "B" && ending.badgeClass !== "bad" && (
              <button
                onClick={continueToNextScope}
                className="flex-1 flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-[#fcd34d]/15 border border-[#fcd34d]/30 text-[#fcd34d] transition-all duration-200 hover:bg-[#fcd34d] hover:text-[#0f131c] cursor-pointer"
              >
                Continuar a Scope C <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={returnToSelectorScreen => returnToSelector()}
              className="flex-1 flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-[#3b82f6] text-white transition-all duration-200 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" /> Menú Inicial
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
