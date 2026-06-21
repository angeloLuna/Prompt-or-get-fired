import { create } from "zustand";
import { Scene, Choice, scenesByDay, day1CrisisScenes } from "../game/data/scenes";
import { promptRubrics, RubricEvaluation } from "../game/data/rubrics";
import { Ending, resolveEnding } from "../game/data/endings";

export interface GameState {
  currentScope: "A" | "B" | "C" | null;
  currentDay: number;
  currentSceneIndex: number;
  reputation: number;
  skill: number;
  risk: number;
  unlockedConcepts: string[];
  decisions: Record<string, string>;
  promptResults: Record<string, RubricEvaluation>;
  isDayRecapOpen: boolean;
  isEndingOpen: boolean;
  activeDayScenes: Scene[];
  
  pendingChoiceEffects: Choice["effects"] | null;
  pendingChoiceNext: string | null;
  pendingChoiceFeedback: string | null;

  startScope: (scope: "A" | "B" | "C") => void;
  nextScene: () => void;
  submitChoice: (choice: Choice, sceneId: string) => void;
  closeFeedback: () => void;
  submitPrompt: (rubricId: string, text: string) => void;
  advanceFromPrompt: (effects: RubricEvaluation["effects"] | undefined) => void;
  closeRecap: () => void;
  restartCurrentScope: () => void;
  returnToSelector: () => void;
  continueToNextScope: () => void;
}

const clamp = (val: number) => Math.min(100, Math.max(0, val));

export const useGameStore = create<GameState>((set, get) => ({
  currentScope: null,
  currentDay: 1,
  currentSceneIndex: 0,
  reputation: 50,
  skill: 0,
  risk: 0,
  unlockedConcepts: [],
  decisions: {},
  promptResults: {},
  isDayRecapOpen: false,
  isEndingOpen: false,
  activeDayScenes: [],
  
  pendingChoiceEffects: null,
  pendingChoiceNext: null,
  pendingChoiceFeedback: null,

  startScope: (scope) => {
    const freshDecisions: Record<string, string> = {
      concept1: "No tomado",
      concept2: "No tomado",
      prompt1: "No evaluado",
      crisis1: "No tomado",
      temp: "No tomado",
      diag: "No tomado",
      prompt2: "No evaluado",
      evals: "No tomado",
      crisis3: "No tomado",
      rag: "No tomado",
      tools: "No tomado",
      agents: "No tomado",
      prompt3: "No evaluado",
      injection: "No tomado",
      guardrails: "No tomado",
      crisis5: "No tomado",
      prompt4: "No evaluado"
    };

    set({
      currentScope: scope,
      currentDay: 1,
      currentSceneIndex: 0,
      reputation: 50,
      skill: 0,
      risk: 0,
      unlockedConcepts: [],
      decisions: freshDecisions,
      promptResults: {},
      isDayRecapOpen: false,
      isEndingOpen: false,
      activeDayScenes: JSON.parse(JSON.stringify(scenesByDay[1])),
      pendingChoiceEffects: null,
      pendingChoiceNext: null,
      pendingChoiceFeedback: null
    });
  },

  nextScene: () => {
    const { activeDayScenes, currentSceneIndex, currentScope, currentDay } = get();
    const scene = activeDayScenes[currentSceneIndex];
    if (!scene) return;

    if (scene.type === "choice" || scene.type === "prompt") return; // block linear progression on interactive stages

    if (scene.next) {
      if (scene.next === "day1_crisis_redirect") {
        if (currentScope === "A") {
          // Scope A branches to final crisis directly
          const merged = activeDayScenes.concat(JSON.parse(JSON.stringify(day1CrisisScenes)));
          const crisisIntroIdx = merged.findIndex(s => s.id === "crisis_intro");
          set({
            activeDayScenes: merged,
            currentSceneIndex: crisisIntroIdx
          });
        } else {
          // Scope B/C triggers day recap panel
          set({ isDayRecapOpen: true });
        }
      } else if (scene.next === "day1_recap_trigger") {
        // Ending of Scope A
        set({ isEndingOpen: true });
      } else if (scene.next === "day2_completed_marker") {
        set({ isDayRecapOpen: true });
      } else if (scene.next === "day3_recap_trigger") {
        if (currentScope === "B") {
          set({ isEndingOpen: true });
        } else {
          set({ isDayRecapOpen: true });
        }
      } else if (scene.next === "day4_completed_marker") {
        set({ isDayRecapOpen: true });
      } else if (scene.next === "day5_completed_marker") {
        set({ isEndingOpen: true });
      } else {
        // Standard next ID search
        const nextIdx = activeDayScenes.findIndex(s => s.id === scene.next);
        if (nextIdx !== -1) {
          set({ currentSceneIndex: nextIdx });
        }
      }
    }
  },

  submitChoice: (choice, sceneId) => {
    const { decisions } = get();
    const isCorrect = choice.effects.skill > 3 ? "Correcto" : "Incorrecto";
    const decisionText = `${choice.text.substring(0, 2)} - ${isCorrect}`;
    
    const newDecisions = { ...decisions };
    
    // Map choices to decisions history
    if (sceneId === "concept_1_question") newDecisions.concept1 = decisionText;
    else if (sceneId === "concept_2_question") newDecisions.concept2 = decisionText;
    else if (sceneId === "day2_q1") newDecisions.temp = decisionText;
    else if (sceneId === "day2_q2") newDecisions.diag = decisionText;
    else if (sceneId === "day3_q1") newDecisions.evals = decisionText;
    else if (sceneId === "day3_crisis_q") newDecisions.crisis3 = decisionText;
    else if (sceneId === "day4_q1") newDecisions.rag = decisionText;
    else if (sceneId === "day4_q2") newDecisions.tools = decisionText;
    else if (sceneId === "day4_q3") newDecisions.agents = decisionText;
    else if (sceneId === "day5_q1") newDecisions.injection = decisionText;
    else if (sceneId === "day5_q2") newDecisions.guardrails = decisionText;
    else if (sceneId === "day5_crisis_q") newDecisions.crisis5 = decisionText;
    else if (sceneId === "crisis_question") newDecisions.crisis1 = decisionText;

    set({
      pendingChoiceEffects: choice.effects,
      pendingChoiceNext: choice.next,
      pendingChoiceFeedback: choice.feedback,
      decisions: newDecisions
    });
  },

  closeFeedback: () => {
    const { pendingChoiceEffects, pendingChoiceNext, activeDayScenes, reputation, skill, risk } = get();
    
    let nextRep = reputation;
    let nextSkill = skill;
    let nextRisk = risk;

    if (pendingChoiceEffects) {
      nextRep = clamp(reputation + (pendingChoiceEffects.reputation || 0));
      nextSkill = clamp(skill + (pendingChoiceEffects.skill || 0));
      nextRisk = clamp(risk + (pendingChoiceEffects.risk || 0));
    }

    set({
      reputation: nextRep,
      skill: nextSkill,
      risk: nextRisk,
      pendingChoiceEffects: null,
      pendingChoiceNext: null,
      pendingChoiceFeedback: null
    });

    if (pendingChoiceNext) {
      if (pendingChoiceNext === "game_ending_eval") {
        set({ isEndingOpen: true });
      } else {
        const nextIdx = activeDayScenes.findIndex(s => s.id === pendingChoiceNext);
        if (nextIdx !== -1) {
          set({ currentSceneIndex: nextIdx });
        }
      }
    }
  },

  submitPrompt: (rubricId, text) => {
    const rubric = promptRubrics[rubricId];
    if (!rubric) return;

    // Count matched signals
    let matches = 0;
    rubric.signals.forEach(sig => {
      if (sig.pattern.test(text)) matches++;
    });

    const result = rubric.evaluate(matches);
    const { promptResults, decisions, activeDayScenes, currentSceneIndex } = get();
    
    const newResults = { ...promptResults, [rubricId]: result };
    const newDecisions = { ...decisions };
    const outcomeStr = `${result.status.toUpperCase()} (Score: ${result.score}/10)`;
    
    if (rubricId === "support_summary") newDecisions.prompt1 = outcomeStr;
    else if (rubricId === "improve_bad_prompt") newDecisions.prompt2 = outcomeStr;
    else if (rubricId === "safe_assistant_behavior") newDecisions.prompt3 = outcomeStr;
    else if (rubricId === "incident_postmortem") newDecisions.prompt4 = outcomeStr;

    const currentScene = activeDayScenes[currentSceneIndex];
    
    // Inject dynamic reaction scene
    const reactionSceneId = currentScene.next!;
    const nextIdx = activeDayScenes.findIndex(s => s.id === reactionSceneId);
    
    if (nextIdx !== -1) {
      const nextScenes = [...activeDayScenes];
      nextScenes[nextIdx] = {
        id: reactionSceneId,
        character: "senior",
        emotion: result.emotion,
        dialogue: result.dialogue,
        effects: result.effects,
        next: currentScene.id === "prompt_challenge_1_play" ? "day1_pre_crisis" 
              : (currentScene.id === "day2_prompt_challenge_play" ? "day2_end_scene" 
                 : (currentScene.id === "day4_prompt_challenge_play" ? "day4_end_scene" 
                    : "day5_end_scene"))
      };
      
      set({
        promptResults: newResults,
        decisions: newDecisions,
        activeDayScenes: nextScenes
      });
    }
  },

  advanceFromPrompt: (effects) => {
    const { activeDayScenes, currentSceneIndex, reputation, skill, risk } = get();
    const scene = activeDayScenes[currentSceneIndex];
    if (!scene) return;

    let nextRep = reputation;
    let nextSkill = skill;
    let nextRisk = risk;

    if (effects) {
      nextRep = clamp(reputation + (effects.reputation || 0));
      nextSkill = clamp(skill + (effects.skill || 0));
      nextRisk = clamp(risk + (effects.risk || 0));
    }

    const nextIdx = activeDayScenes.findIndex(s => s.id === scene.next);
    if (nextIdx !== -1) {
      set({
        reputation: nextRep,
        skill: nextSkill,
        risk: nextRisk,
        currentSceneIndex: nextIdx
      });
    }
  },

  closeRecap: () => {
    const { currentDay, unlockedConcepts } = get();
    const nextDay = currentDay + 1;
    
    const dayConcepts: Record<number, string[]> = {
      1: ["Estructura de prompt", "Ambigüedad", "Hallucinations", "Fuente de verdad"],
      2: ["Estructura + Temperatura", "Consistencia", "Diagnóstico", "Evals antes de Demo"],
      3: ["Evals", "Límites", "Seguridad"],
      4: ["RAG", "Tool Calling", "Agentes"]
    };

    const newConcepts = Array.from(new Set([...unlockedConcepts, ...(dayConcepts[currentDay] || [])]));

    set({
      currentDay: nextDay,
      currentSceneIndex: 0,
      activeDayScenes: JSON.parse(JSON.stringify(scenesByDay[nextDay])),
      isDayRecapOpen: false,
      unlockedConcepts: newConcepts
    });
  },

  restartCurrentScope: () => {
    const { currentScope } = get();
    if (currentScope) {
      get().startScope(currentScope);
    }
  },

  returnToSelector: () => {
    set({
      currentScope: null,
      currentDay: 1,
      currentSceneIndex: 0,
      activeDayScenes: [],
      isDayRecapOpen: false,
      isEndingOpen: false
    });
  },

  continueToNextScope: () => {
    const { currentScope, reputation, skill, risk, unlockedConcepts, decisions, promptResults } = get();
    
    let nextScope: "B" | "C" = "B";
    let nextDay = 2;
    
    if (currentScope === "A") {
      nextScope = "B";
      nextDay = 2;
    } else if (currentScope === "B") {
      nextScope = "C";
      nextDay = 4;
    }

    // Keep decisions and carry over stats, but adjust scope setup
    set({
      currentScope: nextScope,
      currentDay: nextDay,
      currentSceneIndex: 0,
      isEndingOpen: false,
      isDayRecapOpen: false,
      activeDayScenes: JSON.parse(JSON.stringify(scenesByDay[nextDay])),
      reputation,
      skill,
      risk,
      unlockedConcepts,
      decisions,
      promptResults
    });
  }
}));
