import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Award } from "lucide-react";

export const DayRecap: React.FC = () => {
  const { currentDay, isDayRecapOpen, closeRecap, reputation, skill, risk } = useGameStore();

  if (!isDayRecapOpen) return null;

  const recapsText: Record<number, { title: string; items: string[] }> = {
    1: { 
      title: "Día 1 Completado", 
      items: [
        "Estructura básica de prompts (Objetivo, Contexto, Formato y Restricciones)",
        "Manejo de requerimientos de negocio ambiguos",
        "Grounding inicial contra alucinaciones básicas"
      ] 
    },
    2: { 
      title: "Día 2 Completado", 
      items: [
        "Calibración de Temperatura de LLM para consistencia",
        "Grounding avanzado de información faltante",
        "Diagnóstico de respuestas de modelo estructurado"
      ] 
    },
    3: { 
      title: "Día 3 Completado", 
      items: [
        "Pruebas de evaluación (Evals) ante cliente final",
        "Límites de contingencia (Fallback en diálogos)",
        "Criterios de seguridad comercial en Demos"
      ] 
    },
    4: { 
      title: "Día 4 Completado", 
      items: [
        "Arquitectura RAG para consultar PDFs dinámicos",
        "Llamada de Funciones (Tool Calling) en APIs",
        "Límites y confirmaciones en Agentes Autónomos"
      ] 
    }
  };

  const recap = recapsText[currentDay] || { title: "Día Completado", items: ["Conceptos avanzados revisados"] };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 bg-[#090d16]/95 backdrop-blur-[6px] z-50 flex flex-col items-center justify-center p-6 text-center select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[500px] w-full bg-[#1c1f29]/90 border border-white/10 rounded-xl p-8 flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/5 pb-4 w-full justify-center">
            <Award className="w-8 h-8 text-[#fcd34d] filter drop-shadow-[0_0_8px_rgba(252,211,77,0.3)]" />
            <h2 className="font-['Outfit'] font-extrabold text-2xl text-white tracking-wide uppercase">
              {recap.title}
            </h2>
          </div>

          <p className="font-['Inter'] text-xs text-[#64748b] leading-relaxed uppercase tracking-wider">
            Resumen de conceptos vistos hoy en Banano Corp:
          </p>

          {/* Unlocked Concepts Checklist */}
          <div className="flex flex-col gap-3 w-full">
            {recap.items.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 bg-[#0f131c]/40 border border-white/5 p-3 rounded-lg"
              >
                <div className="w-5 h-5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                </div>
                <span className="font-['Inter'] text-xs md:text-sm text-[#dfe2ef] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Current Stats summary */}
          <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-white/5">
            <div className="bg-[#0f131c]/40 border border-white/5 p-3 rounded-lg text-center">
              <span className="font-mono text-[9px] text-[#64748b] uppercase block">Reputación</span>
              <strong className="font-mono text-base text-[#3b82f6]">{reputation}%</strong>
            </div>
            <div className="bg-[#0f131c]/40 border border-white/5 p-3 rounded-lg text-center">
              <span className="font-mono text-[9px] text-[#64748b] uppercase block">Skill IA</span>
              <strong className="font-mono text-base text-[#10b981]">{skill}%</strong>
            </div>
            <div className="bg-[#0f131c]/40 border border-white/5 p-3 rounded-lg text-center">
              <span className="font-mono text-[9px] text-[#64748b] uppercase block">Riesgo RH</span>
              <strong className="font-mono text-base text-[#f43f5e]">{risk}%</strong>
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={closeRecap}
            className="w-full flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-sm tracking-wider uppercase py-3 rounded-lg bg-[#fcd34d] text-[#0f131c] transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_4px_12px_rgba(252,211,77,0.3)] cursor-pointer mt-2"
          >
            Siguiente Día <ArrowRight className="w-4 h-4" />
          </button>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
