import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { motion } from "framer-motion";
import { Play, ShieldAlert, Award, Calendar } from "lucide-react";

export const ScopeSelector: React.FC = () => {
  const startScope = useGameStore((state) => state.startScope);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-[#dfe2ef] relative z-10 select-none">
      <div className="max-w-[1000px] w-full bg-[#0f131c]/60 border border-white/5 backdrop-blur-[20px] rounded-2xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Selector Header */}
        <div className="text-center mb-10">
          <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
            {/* Pulsing glow background */}
            <div className="absolute inset-0 bg-[#fcd34d]/10 blur-xl rounded-full animate-pulse" />
            <svg className="w-full h-full relative filter drop-shadow-[0_0_15px_rgba(252,211,77,0.3)]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="44" fill="rgba(22, 30, 49, 0.6)" stroke="#fcd34d" strokeWidth="2.5" />
              <path d="M 32 32 C 48 38, 62 48, 68 68 C 55 64, 42 52, 32 32 Z" fill="#fcd34d" />
              <path d="M 68 68 L 76 76" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-4xl md:text-5xl uppercase tracking-tighter text-[#fcd34d] mb-3 filter drop-shadow-[0_0_10px_rgba(252,211,77,0.25)]">
            Prompt or Get Fired
          </h1>
          <p className="font-['Inter'] text-sm md:text-base text-[#64748b] max-w-lg mx-auto">
            Survive your career as a Junior AI Engineer at Banano Corp. Choose your scope to start the simulation.
          </p>
          
          <h2 className="font-['Outfit'] font-bold text-lg md:text-xl text-[#fcd34d] mt-5 tracking-wide uppercase filter drop-shadow-[0_0_8px_rgba(252,211,77,0.2)] animate-pulse">
            Elige un scope para iniciar el prototipo jugable
          </h2>
        </div>

        {/* Scopes Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {/* Scope A Card */}
          <motion.div 
            variants={cardVariants}
            onClick={() => startScope("A")}
            className="group relative cursor-pointer flex flex-col justify-between bg-[#0f131c]/45 border border-white/5 hover:border-[#3b82f6] rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15),_0_0_15px_rgba(59,130,246,0.1)]"
          >
            <div>
              <span className="inline-block font-mono text-xs font-bold px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 rounded mb-4 uppercase tracking-widest">
                Scope A
              </span>
              <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2">Day 1 MVP</h3>
              <p className="font-['Inter'] text-xs leading-relaxed text-[#64748b] mb-4">
                Short demo. The core loop: onboarding, 2 conceptual questions, 1 support prompt challenge, and a crisis ending.
              </p>
            </div>
            
            <div>
              <div className="border-t border-white/5 pt-4 mb-4 text-xs font-['Inter'] text-[#64748b]">
                <strong className="text-[#dfe2ef] block mb-1">Conceptos:</strong>
                Estructura de prompt, Ambigüedad, Hallucinations, Fuente de verdad.
              </div>
              <button 
                id="btn-play-scope-a"
                onClick={(e) => {
                  e.stopPropagation();
                  startScope("A");
                }}
                className="w-full flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] group-hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)]"
              >
                Play Scope A — Day 1 <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>

          {/* Scope B Card (Recommended) */}
          <motion.div 
            variants={cardVariants}
            onClick={() => startScope("B")}
            className="group relative cursor-pointer flex flex-col justify-between bg-[#0f131c]/45 border border-[#fcd34d] rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(252,211,77,0.18),_0_0_20px_rgba(252,211,77,0.12)]"
          >
            {/* Recommended Ribbon */}
            <span className="absolute -top-3 left-6 font-['Outfit'] text-[9px] font-extrabold px-3 py-1 bg-[#fcd34d] text-[#0f131c] rounded shadow-[0_2px_8px_rgba(252,211,77,0.3)] uppercase tracking-wider">
              Recomendado
            </span>
            
            <div>
              <span className="inline-block font-mono text-xs font-bold px-2 py-1 bg-[#fcd34d]/10 text-[#fcd34d] border border-[#fcd34d]/20 rounded mb-4 uppercase tracking-widest">
                Scope B
              </span>
              <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2">3 Days Prototype</h3>
              <p className="font-['Inter'] text-xs leading-relaxed text-[#64748b] mb-4">
                Full 3-day story. Adds reliability, temperature calibration, diagnostics, client demo evals, and custom endings.
              </p>
            </div>
            
            <div>
              <div className="border-t border-white/5 pt-4 mb-4 text-xs font-['Inter'] text-[#64748b]">
                <strong className="text-[#dfe2ef] block mb-1">Conceptos:</strong>
                Temperatura, Consistencia, Diagnóstico, Evals antes de Demo.
              </div>
              <button 
                id="btn-play-scope-b"
                onClick={(e) => {
                  e.stopPropagation();
                  startScope("B");
                }}
                className="w-full flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-[#fcd34d]/15 border border-[#fcd34d]/30 text-[#fcd34d] transition-all duration-300 group-hover:bg-[#fcd34d] group-hover:border-[#fcd34d] group-hover:text-[#0f131c] group-hover:shadow-[0_4px_15px_rgba(252,211,77,0.3)]"
              >
                Play Recommended Scope <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>

          {/* Scope C Card */}
          <motion.div 
            variants={cardVariants}
            onClick={() => startScope("C")}
            className="group relative cursor-pointer flex flex-col justify-between bg-[#0f131c]/45 border border-white/5 hover:border-[#8b5cf6] rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.15),_0_0_15px_rgba(139,92,246,0.1)]"
          >
            <div>
              <span className="inline-block font-mono text-xs font-bold px-2 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 rounded mb-4 uppercase tracking-widest">
                Scope C
              </span>
              <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2">Full Week</h3>
              <p className="font-['Inter'] text-xs leading-relaxed text-[#64748b] mb-4">
                Full 5-day campaign. Explores advanced architectures, RAG vector lookup, Tool APIs, Agent safety, and Prompt Injection crises.
              </p>
            </div>
            
            <div>
              <div className="border-t border-white/5 pt-4 mb-4 text-xs font-['Inter'] text-[#64748b]">
                <strong className="text-[#dfe2ef] block mb-1">Conceptos:</strong>
                RAG, Tool Calling, Agentes, Guardrails, Inyecciones, Incident Response.
              </div>
              <button 
                id="btn-play-scope-c"
                onClick={(e) => {
                  e.stopPropagation();
                  startScope("C");
                }}
                className="w-full flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-xs tracking-wider uppercase py-3 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-[#8b5cf6] group-hover:border-[#8b5cf6] group-hover:shadow-[0_4px_12px_rgba(139,92,246,0.25)]"
              >
                Play Scope C — Full Week <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Fallback Option */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 px-6 bg-slate-900/40 border border-dashed border-white/5 rounded-xl max-w-xl mx-auto">
          <p className="font-['Inter'] text-xs text-[#64748b]">
            Not sure? Start with Scope A.
          </p>
          <button 
            id="btn-start-default-scope"
            onClick={() => startScope("A")}
            className="flex items-center justify-center gap-2 font-['Outfit'] font-bold text-[10px] tracking-wider uppercase py-2 px-5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] transition-all duration-200 hover:bg-[#3b82f6] hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          >
            Start with Scope A
          </button>
        </div>

        <div className="text-center font-['Inter'] text-[9px] text-[#64748b] border-t border-white/5 pt-6 mt-8">
          Platanus Hack • Next.js High Fidelity Web Visual Simulator
        </div>

      </div>
    </div>
  );
};
