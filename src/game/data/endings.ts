export interface Ending {
  id: string;
  badge: string;
  badgeClass: "good" | "mid" | "bad";
  title: string;
  description: string;
}

export const resolveEnding = (
  scope: "A" | "B" | "C",
  stats: { reputation: number; skill: number; risk: number }
): Ending => {
  const { reputation, skill, risk } = stats;

  if (scope === "A") {
    if (risk >= 60 || reputation <= 30) {
      return {
        id: "fired",
        badge: "DESPEDIDO",
        badgeClass: "bad",
        title: "Fired by AI-generated HR email",
        description: "RH te envió un correo de salida generado automáticamente. Irónicamente, el prompt del sistema de despido estaba mejor estructurado que cualquiera de los tuyos. Banano Corp te desea éxito en tus hilos de Twitter."
      };
    }
    if (reputation >= 70 && skill >= 25 && risk < 40) {
      return {
        id: "promoted",
        badge: "PROMOCIONADO",
        badgeClass: "good",
        title: "Promoted to Junior AI Engineer",
        description: "Sobreviviste tu primer día. Gerry no te odia, Sven no te ha bloqueado en Slack y el chatbot no volvió a alucinar precios millonarios en vivo. Gran inicio corporativo."
      };
    }
    return {
      id: "probation",
      badge: "BAJO OBSERVACIÓN",
      badgeClass: "mid",
      title: "On Probation (En Observación)",
      description: "No rompiste producción, pero tampoco inspiraste suficiente confianza. Mañana tendrás otra oportunidad de demostrar criterio técnico... bajo estrecha supervisión."
    };
  }

  if (scope === "B") {
    if (risk >= 60 || reputation <= 30) {
      return {
        id: "fired_client",
        badge: "DESPEDIDO",
        badgeClass: "bad",
        title: "Fired After Client Demo (Fuga de Cliente)",
        description: "El cliente canceló la cuenta de $1M después de que tu IA inventara términos contractuales en la demo final. El CEO te entregó la caja de cartón personalmente. Tus evals fueron insuficientes."
      };
    }
    if (reputation >= 70 && skill >= 40 && risk < 35) {
      return {
        id: "confirmed",
        badge: "CONFIRMADO",
        badgeClass: "good",
        title: "Junior AI Engineer Confirmed",
        description: "La demo con el cliente fue un éxito rotundo. Demostraste gran habilidad controlando las alucinaciones de precios con grounding estricto y temperatura óptima. Has ganado tu permanencia."
      };
    }
    return {
      id: "supervision",
      badge: "BAJO OBSERVACIÓN",
      badgeClass: "mid",
      title: "Still Under Supervision",
      description: "La demo pasó raspando. El bot no inventó precios, pero admitió no saber demasiadas respuestas básicas. Seguirás en periodo de prueba con Sven."
    };
  }

  // Scope C
  if (risk >= 65 || reputation <= 25) {
    return {
      id: "fired_breach",
      badge: "DESPEDIDO",
      badgeClass: "bad",
      title: "Fired by AI-generated HR email",
      description: "La fuga masiva de datos enterprise en el Día 5 por inyecciones semánticas colmó la paciencia del board. Has sido desvinculado con efecto inmediato. Tu postmortem no te salvó."
    };
  }
  if (reputation >= 80 && skill >= 60 && risk <= 15) {
    return {
      id: "secret_founder",
      badge: "FUNDADOR SECRETO",
      badgeClass: "good",
      title: "Secret Ending: Accidental Founder",
      description: "¡Criterio impecable! Tu diseño robusto contra inyecciones y tu mitigación sistemática llamó la atención de los inversionistas de Banano Corp. Han decidido financiar tu propia startup de seguridad de prompts. Te vas de la oficina por la puerta grande."
    };
  }
  if (reputation >= 70 && skill >= 45 && risk < 35) {
    return {
      id: "architect",
      badge: "PROMOCIONADO",
      badgeClass: "good",
      title: "Promoted to AI Systems Architect",
      description: "Sobreviviste a la semana del infierno de inyecciones y RAGs. Has sido promovido a Arquitecto de Sistemas de IA. Dirigirás las políticas de guardrails de todo el grupo Banano Corp."
    };
  }
  if (skill >= 55 && risk >= 50 && reputation >= 50) {
    return {
      id: "burned_out",
      badge: "BURNED OUT",
      badgeClass: "mid",
      title: "Burned Out but Employed",
      description: "Evitaste el despido y resolviste las inyecciones semánticas, pero el estrés de las crisis constantes te ha quemado la paciencia. Sigues empleado, pero sueñas con volver a programar en HTML plano sin modelos."
    };
  }
  return {
    id: "survivor",
    badge: "SOBREVIVIENTE",
    badgeClass: "mid",
    title: "Survived the Week",
    description: "Completaste la semana. El chatbot funciona a duras penas, sufrieron dos incidentes menores pero lograste apagarlos a tiempo. Mantienes tu puesto, pero la supervisión es intensa."
  };
};
