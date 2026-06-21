import React from "react";
import { useGameStore } from "../../store/useGameStore";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export const FeedbackOverlay: React.FC = () => {
  const { pendingChoiceEffects, pendingChoiceFeedback, closeFeedback } = useGameStore();

  if (!pendingChoiceFeedback) return null;

  const isCorrect = pendingChoiceEffects && (pendingChoiceEffects.skill || 0) >= 10;

  const renderEffectBadges = () => {
    if (!pendingChoiceEffects) return null;

    const list: React.ReactNode[] = [];

    Object.entries(pendingChoiceEffects).forEach(([stat, val]) => {
      if (val === 0) return;
      const isRisk = stat === "risk";
      const isPositive = (isRisk && val < 0) || (!isRisk && val > 0);
      const label = stat === "reputation" ? "Reputación" : stat === "skill" ? "Skill IA" : "Riesgo RH";

      list.push(
        <span
          key={stat}
          className={`font-mono text-xs px-3 py-1 rounded-full border ${
            isPositive
              ? "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20"
              : "bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/20"
          }`}
        >
          {label} {val > 0 ? `+${val}` : val}
        </span>
      );
    });

    if (list.length === 0) {
      return (
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#64748b]">
          Sin impacto de estadísticas
        </span>
      );
    }

    return list;
  };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 bg-[#090d16]/95 backdrop-blur-[6px] z-50 flex flex-col items-center justify-center p-6 text-center select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[500px] w-full bg-[#1c1f29]/90 border border-white/10 rounded-xl p-8 flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Header Icon */}
          <div className="flex flex-col items-center gap-3">
            {isCorrect ? (
              <>
                <CheckCircle className="w-14 h-14 text-[#10b981] filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                <h2 className="font-['Outfit'] font-extrabold text-2xl text-[#10b981] tracking-wide uppercase">
                  ¡Respuesta Correcta!
                </h2>
              </>
            ) : (
              <>
                <XCircle className="w-14 h-14 text-[#f43f5e] filter drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]" />
                <h2 className="font-['Outfit'] font-extrabold text-2xl text-[#f43f5e] tracking-wide uppercase">
                  Respuesta No Óptima
                </h2>
              </>
            )}
          </div>

          {/* Explanation text */}
          <p className="font-['Inter'] text-sm leading-relaxed text-[#dfe2ef] py-2">
            {pendingChoiceFeedback}
          </p>

          {/* Stats Effects display */}
          <div className="flex flex-wrap gap-2 justify-center py-2 border-t border-b border-white/5 w-full">
            {renderEffectBadges()}
          </div>

          {/* Continuation Trigger Button */}
          <button
            id="btn-close-feedback"
            onClick={closeFeedback}
            className="w-full font-['Outfit'] font-extrabold text-sm tracking-wider uppercase py-3 rounded-lg bg-white text-[#0f131c] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            Continuar
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
