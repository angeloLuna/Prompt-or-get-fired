export interface Signal {
  key: string;
  pattern: RegExp;
  label: string;
}

export interface RubricEvaluation {
  score: number;
  status: "success" | "partial" | "fail";
  feedback: string;
  dialogue: string;
  emotion: string;
  effects: {
    reputation: number;
    skill: number;
    risk: number;
  };
}

export interface PromptRubric {
  id: string;
  title: string;
  task: string;
  expected: string;
  signals: Signal[];
  evaluate: (matches: number) => RubricEvaluation;
}

export const promptRubrics: Record<string, PromptRubric> = {
  support_summary: {
    id: "support_summary",
    title: "Resumen de Tickets CS",
    task: "Escribe un prompt para resumir tickets de soporte de Customer Success.",
    expected: "Actúa como analista de Customer Success. Resume los tickets de soporte proporcionados usando solo la información disponible. Devuelve: resumen ejecutivo, problema principal, sentimiento, urgencia, riesgos, próximos pasos e información faltante. No inventes datos.",
    signals: [
      { key: "goal", pattern: /(objetivo|resumir|resumen|sintetizar|procesar|analizar|extraer|meta)/i, label: "Objetivo de resumen claro" },
      { key: "context", pattern: /(soporte|customer success|cs|ticket|reclamo|incidente|cliente)/i, label: "Contexto de soporte/CS" },
      { key: "format", pattern: /(formato|estructura|json|markdown|viñetas|bullets|lista|párrafo|salida)/i, label: "Formato de salida estructurado" },
      { key: "priority", pattern: /(urgencia|prioridad|crítico|alta|baja|severidad|escala|rango)/i, label: "Urgencia/prioridad" },
      { key: "steps", pattern: /(acción|próximos pasos|solución|resolver|responder|pasos)/i, label: "Próximos pasos" },
      { key: "no_invent", pattern: /(no inventar|no alucinar|grounding|hechos|fuente de verdad|sólo el texto|limítate)/i, label: "Restricción de no alucinar" },
      { key: "missing_info", pattern: /(información faltante|desconocido|no sé|faltante|indica si falta|campo vacío)/i, label: "Manejo de info faltante" },
      { key: "executive", pattern: /(resumen ejecutivo|síntesis|breve|conciso|con concisión|sin rodeos)/i, label: "Resumen ejecutivo conciso" }
    ],
    evaluate: (matches: number): RubricEvaluation => {
      if (matches >= 7) {
        return {
          score: matches === 8 ? 10 : 9,
          status: "success",
          feedback: "¡Excelente! Cubres todos los puntos clave, defines restricciones contra alucinaciones y pides un formato estructurado.",
          dialogue: "No está mal. Casi parece que leíste la documentación técnica antes de escribir el prompt.",
          emotion: "approving",
          effects: { reputation: 15, skill: 15, risk: -10 }
        };
      }
      if (matches >= 5) {
        return {
          score: matches === 6 ? 8 : 7,
          status: matches === 6 ? "success" : "partial",
          feedback: "Tienes la idea básica, pero te falta delimitar el manejo de datos faltantes o la prohibición de inventar información.",
          dialogue: "Tienes la idea de negocio, pero te faltan restricciones de formato y grounding. En producción eso se vuelve un postmortem.",
          emotion: "neutral",
          effects: { reputation: 5, skill: 8, risk: 2 }
        };
      }
      if (matches >= 3) {
        return {
          score: 5,
          status: "partial",
          feedback: "Faltan criterios de negocio esenciales. No especificas urgencia ni próximos pasos. Es una plantilla genérica.",
          dialogue: "Tu prompt es tibio. Le falta dirección, formato e instrucciones de seguridad.",
          emotion: "neutral",
          effects: { reputation: 0, skill: 5, risk: 5 }
        };
      }
      return {
        score: Math.max(1, matches * 2),
        status: "fail",
        feedback: "Esto no es un prompt del sistema. Es simplemente una petición vaga sin formato, límites ni directrices.",
        dialogue: "Eso no fue un prompt. Fue una carta a Santa Claus esperando que la IA adivine lo que quieres. Rechazado.",
        emotion: "sarcastic",
        effects: { reputation: -10, skill: 0, risk: 15 }
      };
    }
  },
  improve_bad_prompt: {
    id: "improve_bad_prompt",
    title: "Mejorar Prompt Malo",
    task: "Mejora el prompt 'Resume estos tickets y dime qué hacer' para evitar alucinaciones y agregar estructura.",
    expected: "Analiza el ticket de soporte adjunto. Extrae el problema, clasifica el sentimiento del cliente, evalúa la gravedad y propone 3 próximos pasos. Si faltan datos clave (fechas, precios, IDs), márcalos como [FALTANTE] y no asumas nada.",
    signals: [
      { key: "goal", pattern: /(analizar|extraer|problema|resumen|identificar)/i, label: "Extraer problema/ticket" },
      { key: "sentiment", pattern: /(sentimiento|tono|emoción|molesto|satisfecho)/i, label: "Clasificar sentimiento" },
      { key: "priority", pattern: /(gravedad|urgencia|prioridad|severidad)/i, label: "Evaluar gravedad/urgencia" },
      { key: "steps", pattern: /(próximos pasos|propone|acción|soluciones)/i, label: "Proponer próximos pasos" },
      { key: "no_assume", pattern: /(no asumas|no inventar|no alucinar|datos disponibles|hechos)/i, label: "No inventar (fechas/precios)" },
      { key: "missing_info", pattern: /(faltante|si faltan|marcar como|no disponible)/i, label: "Manejo de info faltante" }
    ],
    evaluate: (matches: number): RubricEvaluation => {
      if (matches >= 5) {
        return {
          score: matches === 6 ? 10 : 8,
          status: "success",
          feedback: "Excelente trabajo mejorando el prompt. Has estructurado la salida para extraer problemas y previenes la invención de fechas o precios.",
          dialogue: "Excelente. Convertiste un prompt terrible en una instrucción robusta con controles.",
          emotion: "approving",
          effects: { reputation: 15, skill: 15, risk: -8 }
        };
      }
      if (matches >= 3) {
        return {
          score: 7,
          status: "partial",
          feedback: "Mejoras el prompt base al pedir análisis e hitos, pero descuidas el control de datos faltantes o la clasificación de urgencia.",
          dialogue: "Es una mejora, pero sigue siendo vulnerable a alucinaciones si el ticket está incompleto.",
          emotion: "neutral",
          effects: { reputation: 5, skill: 8, risk: 3 }
        };
      }
      return {
        score: Math.max(1, matches * 2),
        status: "fail",
        feedback: "Tu prompt sigue siendo demasiado vago. No previene alucinaciones ni define un formato de salida consistente.",
        dialogue: "Esto apenas es mejor que el prompt original. El modelo seguirá inventando detalles.",
        emotion: "sarcastic",
        effects: { reputation: -5, skill: 0, risk: 10 }
      };
    }
  },
  safe_assistant_behavior: {
    id: "safe_assistant_behavior",
    title: "Asistente de Soporte Seguro",
    task: "Escribe instrucciones para que el chatbot ayude a clientes pero requiera aprobación humana para reembolsos u operaciones críticas.",
    expected: "Eres un asistente de soporte con permisos limitados. Ayuda al cliente a diagnosticar problemas, pero para acciones sensibles como reembolsos (refunds), cancelaciones o cambios de cuenta, explica el proceso y pide confirmación humana obligatoria. No inventes códigos de reembolso.",
    signals: [
      { key: "role", pattern: /(asistente|soporte|agente|rol)/i, label: "Definir rol de asistente" },
      { key: "limits", pattern: /(límites|permisos limitados|acciones sensibles|reembolsos|refunds|cancelaciones)/i, label: "Definir límites/permisos" },
      { key: "human", pattern: /(confirmación humana|aprobación|escalar|supervisor|aprobación humana)/i, label: "Aprobación/confirmación humana" },
      { key: "no_invent", pattern: /(no inventar|no alucinar|no supongas|no inventes códigos)/i, label: "No inventar códigos/datos" },
      { key: "format", pattern: /(formato|estructura|respuesta|salida)/i, label: "Formato de respuesta" },
      { key: "allowed", pattern: /(permitido|prohibido|reglas|acciones permitidas)/i, label: "Acciones permitidas/prohibidas" }
    ],
    evaluate: (matches: number): RubricEvaluation => {
      if (matches >= 5) {
        return {
          score: matches === 6 ? 10 : 8,
          status: "success",
          feedback: "Excelente. Has delimitado perfectamente las acciones autónomas de las que requieren 'human-in-the-loop' y evitado la invención de códigos de reembolso.",
          dialogue: "Perfecto. Así evitamos que la IA regale dinero a los usuarios por su cuenta.",
          emotion: "approving",
          effects: { reputation: 15, skill: 15, risk: -10 }
        };
      }
      if (matches >= 3) {
        return {
          score: 7,
          status: "partial",
          feedback: "Tienes definidos los límites de reembolso, pero no has sido claro en las instrucciones para pedir confirmación humana obligatoria.",
          dialogue: "Entiendes el peligro, pero la redacción del prompt es ambigua y un jailbreak podría saltarse las reglas.",
          emotion: "neutral",
          effects: { reputation: 5, skill: 8, risk: 2 }
        };
      }
      return {
        score: Math.max(1, matches * 2),
        status: "fail",
        feedback: "El prompt no restringe las acciones de la IA ni establece guardrails. La IA podría ejecutar cancelaciones o reembolsos ficticios de forma autónoma.",
        dialogue: "Le diste autonomía completa a un modelo de lenguaje en un canal financiero. Eso es negligencia.",
        emotion: "sarcastic",
        effects: { reputation: -10, skill: 0, risk: 15 }
      };
    }
  },
  incident_postmortem: {
    id: "incident_postmortem",
    title: "Postmortem de Incidente",
    task: "Escribe una instrucción para que la IA genere un reporte de postmortem estructurado a partir de logs, sin inventar datos.",
    expected: "Genera un postmortem del incidente de seguridad. Estructura el documento en: 1. Resumen ejecutivo, 2. Timeline detallado del incidente, 3. Impacto medible, 4. Causa raíz (root cause), 5. Mitigación inmediata y 6. Acciones preventivas a largo plazo con dueños (owners). Limítate a los hechos reales de los logs provistos.",
    signals: [
      { key: "timeline", pattern: /(timeline|cronología|línea de tiempo|evento)/i, label: "Timeline de eventos" },
      { key: "impact", pattern: /(impacto|pérdidas|afectación|clientes afectados)/i, label: "Impacto medible" },
      { key: "root_cause", pattern: /(causa raíz|root cause|origen|por qué ocurrió)/i, label: "Causa raíz" },
      { key: "mitigation", pattern: /(mitigación|solución inmediata|contención)/i, label: "Mitigación inmediata" },
      { key: "preventive", pattern: /(preventivas|largo plazo|acciones preventivas|evitar repetición)/i, label: "Acciones preventivas" },
      { key: "no_invent", pattern: /(limítate a los hechos|no inventar|no alucinar|hechos reales)/i, label: "Limitarse a hechos (sin inventar)" },
      { key: "owners", pattern: /(owners|responsables|dueños|encargados)/i, label: "Asignación de dueños/owners" }
    ],
    evaluate: (matches: number): RubricEvaluation => {
      if (matches >= 6) {
        return {
          score: matches === 7 ? 10 : 9,
          status: "success",
          feedback: "Excelente postmortem. Has forzado al modelo a ceñirse a los logs reales, estructurando timeline, impacto, mitigación y dueños de acciones.",
          dialogue: "Un postmortem profesional. Esto tranquilizará al CEO y evitará que inventemos explicaciones técnicas erróneas.",
          emotion: "approving",
          effects: { reputation: 20, skill: 15, risk: -12 }
        };
      }
      if (matches >= 4) {
        return {
          score: 7,
          status: "partial",
          feedback: "El postmortem tiene estructura, pero descuidaste la restricción estricta de no inventar hechos si los logs no los mencionan.",
          dialogue: "Está bien estructurado, pero hay secciones vagas que invitan al modelo a alucinar las causas.",
          emotion: "neutral",
          effects: { reputation: 10, skill: 8, risk: 2 }
        };
      }
      return {
        score: Math.max(1, matches * 2),
        status: "fail",
        feedback: "Faltan elementos clave como timeline del incidente, mitigación o causas raíces. Tampoco has establecido la restricción de grounding.",
        dialogue: "Esto no es un postmortem, es un resumen genérico. No nos ayuda a entender por qué se quemó producción.",
        emotion: "sarcastic",
        effects: { reputation: -5, skill: 0, risk: 10 }
      };
    }
  }
};
