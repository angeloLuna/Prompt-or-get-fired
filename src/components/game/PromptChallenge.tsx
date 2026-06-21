import React, { useState, useEffect } from "react";
import { useGameStore } from "../../store/useGameStore";
import { Scene } from "../../game/data/scenes";
import { promptRubrics } from "../../game/data/rubrics";
import { PromptRubricTooltip } from "./PromptRubricTooltip";
import { motion, AnimatePresence } from "framer-motion";
import { Play, HelpCircle, Check, CircleAlert, Sparkles, Terminal, Loader2 } from "lucide-react";

interface PromptChallengeProps {
  scene: Scene;
}

export const PromptChallenge: React.FC<PromptChallengeProps> = ({ scene }) => {
  const { submitPrompt, advanceFromPrompt, promptResults } = useGameStore();
  const [inputText, setInputText] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const rubricId = scene.rubricId || "";
  const rubric = promptRubrics[rubricId];
  const result = promptResults[rubricId];

  // Reset text on scene change
  useEffect(() => {
    setInputText("");
  }, [scene.id]);

  if (!rubric) return null;

  const handleEvaluate = async () => {
    if (inputText.trim().length < 15) {
      alert("Tu prompt es demasiado corto. Escribe una solución detallada antes de evaluarlo.");
      return;
    }
    setIsEvaluating(true);
    try {
      await submitPrompt(rubricId, inputText);
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (result) return; // locked after evaluation
    const val = e.target.value;
    if (val.length <= 1500) {
      setInputText(val);
    }
  };

  return (
    <div className="absolute inset-0 bg-[#090d16] z-40 flex flex-col p-6 pt-16 overflow-y-auto select-none">
      
      {/* Help tooltip popover */}
      <PromptRubricTooltip 
        rubricId={rubricId} 
        isOpen={isTooltipOpen} 
        onClose={() => setIsTooltipOpen(false)} 
      />

      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Left Side: Instructions & Signals Checklist */}
        <div className="flex flex-col gap-4 text-left">
          
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Terminal className="w-5 h-5 text-[#fcd34d]" />
            <h2 className="font-['Outfit'] font-extrabold text-lg text-[#fcd34d] uppercase tracking-wider">
              Reto: {rubric.title}
            </h2>
          </div>

          <div className="bg-[#1c1f29]/40 border border-white/5 rounded-xl p-5 leading-relaxed text-sm text-[#dfe2ef]">
            <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-wider block mb-2">Requerimientos:</span>
            {rubric.task}
          </div>

          {/* Real-time Checklist */}
          <div className="bg-[#1c1f29]/20 border border-white/5 rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-wider">
                Verificador de Señales (Live Scan):
              </span>
              {!result && (
                <button
                  onClick={() => setIsTooltipOpen(true)}
                  className="flex items-center gap-1 font-mono text-[9px] text-[#fcd34d] hover:underline cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Ver prompt esperado
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {rubric.signals.map((sig) => {
                const matched = result 
                  ? (result.matchedSignals?.includes(sig.key) ?? false)
                  : false;
                return (
                  <div 
                    key={sig.key}
                    className={`flex items-center gap-2 text-xs p-2.5 rounded border transition-all duration-300 ${
                      matched 
                        ? "bg-[#10b981]/5 text-[#10b981] border-[#10b981]/25" 
                        : result 
                        ? "bg-[#f43f5e]/5 text-[#f43f5e] border-[#f43f5e]/25"
                        : "bg-white/[0.01] text-[#64748b] border-white/5"
                    }`}
                  >
                    <span className="font-mono">{matched ? "✅" : result ? "❌" : "❓"}</span>
                    <span className="font-['Inter']">{sig.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Text Area Editor & Scorecard card */}
        <div className="flex flex-col gap-4">
          
          {/* Terminal Editor Wrapper */}
          <div className="flex flex-col bg-[#1c1f29]/50 border border-white/5 rounded-xl overflow-hidden shadow-inner">
            
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f131c] border-b border-white/5">
              <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#fcd34d] animate-pulse" />
                Prompt System Editor
              </span>
              <span className={`font-mono text-[9px] ${inputText.length >= 1400 ? "text-[#f43f5e]" : "text-[#64748b]"}`}>
                {inputText.length} / 1500 chars
              </span>
            </div>

            <textarea
              value={inputText}
              onChange={handleTextChange}
              disabled={!!result || isEvaluating}
              placeholder="Escribe tu system prompt corporativo estructurado aquí..."
              className="w-full min-h-[200px] p-5 bg-[#090d16]/75 text-[#dfe2ef] font-mono text-xs md:text-sm leading-relaxed resize-none border-none outline-none focus:ring-0 disabled:text-[#64748b] select-text"
            />
          </div>

          {/* Evaluate trigger / Scorecard card */}
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.button
                id="btn-submit-prompt"
                onClick={handleEvaluate}
                disabled={isEvaluating}
                whileHover={isEvaluating ? {} : { scale: 1.01 }}
                whileTap={isEvaluating ? {} : { scale: 0.99 }}
                className={`w-full flex items-center justify-center gap-2 font-['Outfit'] font-extrabold text-sm tracking-wider uppercase py-3 rounded-lg text-white transition-all duration-200 cursor-pointer ${
                  isEvaluating 
                    ? "bg-[#3b82f6]/50 cursor-not-allowed" 
                    : "bg-[#3b82f6] hover:shadow-[0_4px_15px_rgba(59,130,246,0.3)]"
                }`}
              >
                {isEvaluating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Evaluando...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Evaluar Prompt
                  </>
                )}
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1c1f29]/90 border border-white/10 rounded-xl p-5 flex flex-col gap-4 text-left shadow-lg"
              >
                {/* Grading header */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-3">
                  
                  {/* Score Circle */}
                  <div className={`w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 font-mono ${
                    result.status === "success" 
                      ? "border-[#10b981] text-[#10b981]" 
                      : result.status === "partial" 
                      ? "border-[#fcd34d] text-[#fcd34d]" 
                      : "border-[#f43f5e] text-[#f43f5e]"
                  }`}>
                    <span className="text-lg font-bold leading-none">{result.score}</span>
                    <span className="text-[7px] uppercase tracking-widest leading-none">Score</span>
                  </div>

                  <div>
                    <span className={`inline-block font-mono text-[9px] font-extrabold px-2 py-0.5 rounded border uppercase tracking-wider mb-1 ${
                      result.status === "success" 
                        ? "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20" 
                        : result.status === "partial" 
                        ? "bg-[#fcd34d]/10 text-[#fcd34d] border-[#fcd34d]/20" 
                        : "bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/20"
                    }`}>
                      {result.status === "success" ? "APROBADO" : result.status === "partial" ? "PARCIAL" : "RECHAZADO"}
                    </span>
                    <p className="font-['Inter'] text-[11px] leading-relaxed text-[#dfe2ef]">
                      {result.feedback}
                    </p>
                  </div>
                </div>

                {/* Stat impact popup preview */}
                <div className="bg-[#090d16]/30 rounded-lg p-3 text-xs leading-relaxed font-['Inter'] text-[#64748b]">
                  <strong>Sven dice:</strong> "{result.dialogue}"
                </div>

                {/* Continue button */}
                <button
                  id="btn-finish-challenge"
                  onClick={() => advanceFromPrompt(result.effects)}
                  className="w-full font-['Outfit'] font-extrabold text-sm tracking-wider uppercase py-3 rounded-lg bg-white text-[#0f131c] transition-all duration-200 hover:scale-[1.01] cursor-pointer text-center"
                >
                  Continuar
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
};
