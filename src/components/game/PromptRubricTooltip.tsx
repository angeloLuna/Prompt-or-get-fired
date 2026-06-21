import React from "react";
import { promptRubrics } from "../../game/data/rubrics";
import { X, Check } from "lucide-react";

interface PromptRubricTooltipProps {
  rubricId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const PromptRubricTooltip: React.FC<PromptRubricTooltipProps> = ({
  rubricId,
  isOpen,
  onClose
}) => {
  const rubric = promptRubrics[rubricId];

  if (!isOpen || !rubric) return null;

  return (
    <div className="absolute inset-4 bg-[#0f131c]/95 border border-[#fcd34d]/20 rounded-xl p-6 z-50 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)] text-left select-none">
      
      {/* Tooltip Header */}
      <div className="flex justify-between items-center pb-3 border-b border-white/5">
        <h4 className="font-['Outfit'] font-bold text-sm text-[#fcd34d] tracking-wide uppercase">
          Rúbrica de Evaluación: {rubric.title}
        </h4>
        <button 
          onClick={onClose}
          className="text-[#64748b] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tooltip Contents scrollable */}
      <div className="flex-1 my-4 overflow-y-auto pr-2 flex flex-col gap-4">
        
        {/* Expected prompt block */}
        <div>
          <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-wider block mb-1">
            System Prompt Sugerido (Referencia):
          </span>
          <div className="bg-[#1c1f29] border border-white/5 rounded-lg p-3 font-mono text-xs text-[#dfe2ef] whitespace-pre-wrap leading-relaxed select-text select-all">
            {rubric.expected}
          </div>
        </div>

        {/* Signals Checklist */}
        <div>
          <span className="font-mono text-[9px] text-[#64748b] uppercase tracking-wider block mb-2">
            Criterios de Evaluación / Expresiones Regulares:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {rubric.signals.map((sig) => (
              <div 
                key={sig.key} 
                className="flex items-center gap-2 bg-[#1c1f29]/40 border border-white/5 p-2 rounded"
              >
                <Check className="w-3.5 h-3.5 text-[#fcd34d]" />
                <span className="text-white/80 font-['Inter']">{sig.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Info Box */}
        <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/20 rounded-lg p-3 text-xs text-[#3b82f6] leading-relaxed">
          <strong>Testing Note:</strong> Este panel auxiliar está disponible durante el prototipo/demo para facilitar las pruebas y validar los patrones semánticos requeridos de forma rápida en el hackatón.
        </div>

      </div>

      {/* Close button at bottom */}
      <div className="pt-3 border-t border-white/5 flex justify-end">
        <button
          onClick={onClose}
          className="font-['Outfit'] font-bold text-xs tracking-wider uppercase py-2 px-6 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-white/10 cursor-pointer"
        >
          Cerrar Ayuda
        </button>
      </div>

    </div>
  );
};
