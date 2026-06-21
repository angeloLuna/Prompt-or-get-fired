import { NextResponse } from "next/server";
import { promptRubrics } from "../../../game/data/rubrics";

export async function POST(request: Request) {
  try {
    const { promptText, rubricId } = await request.json();

    if (!promptText || !rubricId) {
      return NextResponse.json(
        { error: "Faltan parámetros: promptText o rubricId" },
        { status: 400 }
      );
    }

    const rubric = promptRubrics[rubricId];
    if (!rubric) {
      return NextResponse.json(
        { error: "Rúbrica no encontrada" },
        { status: 404 }
      );
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const evaluatorMode = process.env.EVALUATOR_MODE || "mock";

    // Fallback directly to local mock evaluator if mock mode is forced or keys are missing
    if (evaluatorMode === "mock" || (!openaiKey && !anthropicKey)) {
      // Calculate matches locally using regex signals
      let matches = 0;
      rubric.signals.forEach(sig => {
        const regex = new RegExp(sig.pattern);
        if (regex.test(promptText)) matches++;
      });

      const evaluation = rubric.evaluate(matches);
      return NextResponse.json({
        mode: "mock_fallback",
        score: evaluation.score,
        status: evaluation.status,
        feedback: evaluation.feedback,
        dialogue: evaluation.dialogue,
        emotion: evaluation.emotion,
        effects: evaluation.effects
      });
    }

    // AI Evaluation branch (OpenAI example)
    if (openaiKey) {
      const promptToEvaluator = `
        Eres un Evaluador Técnico de Ingeniería de Prompts para Banano Corp.
        Debes evaluar el siguiente prompt enviado por un jugador para resolver el reto: "${rubric.title}".
        
        Instrucciones del Reto:
        "${rubric.task}"
        
        Rúbrica de referencia (Prompt esperado):
        "${rubric.expected}"
        
        El prompt del jugador es:
        """
        ${promptText.substring(0, 1500)}
        """

        Evalúa cuántos de los siguientes criterios cumple el prompt:
        ${rubric.signals.map((sig, i) => `${i + 1}. ${sig.label}`).join("\n")}
        
        Debes responder ÚNICAMENTE con un objeto JSON estructurado con el siguiente formato, sin explicaciones ni markdown:
        {
          "score": (número del 1 al 10 basado en los criterios cumplidos),
          "status": ("success" si cumple casi todo, "partial" si cumple la mitad, "fail" si no sirve),
          "feedback": "Tu feedback educativo sobre qué faltó o qué hizo bien el prompt",
          "dialogue": "Una línea de diálogo de Sven reaccionando al código del jugador",
          "emotion": "approving | neutral | sarcastic",
          "effects": {
            "reputation": (un cambio de -15 a 20),
            "skill": (un cambio de 0 a 15),
            "risk": (un cambio de -10 a 25)
          }
        }
      `;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: "Devuelve solo JSON válido." },
            { role: "user", content: promptToEvaluator }
          ],
          temperature: 0.1
        })
      });

      if (!response.ok) {
        throw new Error("Error en la llamada a la API de OpenAI");
      }

      const openAiData = await response.json();
      const result = JSON.parse(openAiData.choices[0].message.content);
      return NextResponse.json({ mode: "openai", ...result });
    }

    // Default fallback in case things are unconfigured
    return NextResponse.json({ error: "Configuración inválida" }, { status: 500 });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}
