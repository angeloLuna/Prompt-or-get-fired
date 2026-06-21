# Experience Blueprint — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Este documento describe cómo funciona la experiencia completa detrás de una partida de **Prompt or Get Fired**.

Adapta el Service Blueprint al contexto del juego: conecta lo que el jugador ve y hace con lo que ocurre detrás en el motor narrativo, el frontend, el backend, la base de datos, el evaluador de prompts, el sistema de voz y los controles de seguridad/costo.

---

# 2. Contexto general

## Producto

Prompt or Get Fired

## Servicio o experiencia analizada

Partida completa del Scope A: “Primer día en Banano Corp”.

## Usuario principal

Jugador.

## Objetivo del usuario

Completar una experiencia narrativa, superar retos de AI engineering y llegar a un ending.

## Resultado esperado

El jugador termina una partida de 5–8 minutos, entiende al menos 2–3 conceptos clave y recibe un final basado en su desempeño.

---

# 3. Relación con Player Journey

## Player Journey relacionado

Player Journey — Scope A.

## Momento de valor

Cuando el jugador recibe feedback educativo y narrativo después de una decisión o prompt.

## Etapas principales

```txt
Start
  → Onboarding
  → Concept Challenge
  → PM ambiguo
  → Prompt Challenge
  → Feedback
  → Crisis final
  → Ending
```

---

# 4. Resumen del Experience Blueprint

| Elemento | Descripción |
| --- | --- |
| Usuario principal | Jugador |
| Servicio analizado | Partida Scope A |
| Punto de inicio | Start Screen |
| Punto final | Ending Screen |
| Momento de valor | Feedback de decisión/prompt con consecuencia y concepto aprendido |
| Canales involucrados | Web app, audio, backend API |
| Equipos involucrados | Producto, diseño, desarrollo, narrativa, AI evaluation |
| Sistemas involucrados | Next.js, Zustand, NestJS, PostgreSQL, evaluador IA/mock, ElevenLabs/pre-generated audio |
| Nivel de complejidad | Medio |
| Riesgo operativo | Medio por costos/API y seguridad del prompt evaluation |

---

# 5. Blueprint general — [Scope A]

| Etapa | Acción del jugador | Frontstage visible | Backstage no visible | Procesos internos | Sistemas / datos | Evidencia visible | Riesgos / fallos |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Start | Inicia partida | Pantalla de inicio | Crear sesión anónima/local | Cargar contenido Scope A | Game session, scene data | Botón inicia y muestra primera escena | No se crea sesión o carga lenta |
| Onboarding | Avanza diálogo | Fondo, personaje, diálogo, stats | Motor cambia escena/diálogo | Reproducir audio si existe | Scene, Character, AudioAsset | Typewriter, sprite, stats visibles | Parece slide si no hay microanimación |
| Concept Challenge 1 | Elige opción | Pregunta con opciones | Resolver respuesta local | Aplicar efectos | Challenge, Option, GameState | Feedback + cambios stats | Respuesta obvia o injusta |
| PM ambiguo | Elige respuesta | Diálogo PM + choices | Aplicar efectos y nextScene | Registrar decisión opcional | Choice, GameState | PM reacciona | No se entiende matiz |
| Prompt Challenge | Escribe prompt | Textarea + tarea | Validar input, rate limit, evaluación mock/IA | Guardar evaluación, actualizar stats | Evaluation, API usage | Score, feedback, reacción Senior | Abuso de tokens, prompt injection |
| Crisis final | Elige solución | CEO/Manager + pregunta capciosa | Resolver respuesta local | Aplicar efectos acumulados | Challenge, ConceptState | Feedback de hallucination | Concepto no introducido previamente |
| Ending | Lee resultado | Ending screen + stats finales | Calcular ending según reglas | Registrar final opcional | Ending, GameSession | Final bueno/medio/malo | Ending no refleja desempeño |

---

# 6. Versión visual por capas — [Scope A]

```txt
Etapa:
Start → Onboarding → Concept Challenge → Prompt Challenge → Feedback → Crisis → Ending

Jugador:
Click iniciar → Lee/avanza → Selecciona → Escribe prompt → Lee feedback → Decide → Ve final

Frontstage:
UI visual novel, sprites placeholder, typewriter, opciones, prompt input, stats, audio clave

---------------- Línea de visibilidad ----------------

Backstage:
Motor de escenas, game state, cálculo de efectos, selección de siguiente escena, validaciones

Procesos internos:
Evaluación mock/IA, rate limiting, cache, almacenamiento de sesión/evaluación, fallback

Sistemas:
Next.js, Zustand, NestJS, PostgreSQL, Prisma, Claude/OpenAI opcional, ElevenLabs/pre-generated audio

Riesgos:
Costo de tokens, prompt injection, respuestas JSON inválidas, audio no disponible, mala sensación de juego
```

---

# 7. Detalle por etapa

## Etapa: Start

**Acción del jugador:** Inicia partida.  
**Frontstage visible:** Logo, one-liner, botón “Start Shift”, selector de scope futuro opcional deshabilitado.  
**Backstage:** Crea sesión anónima local o backend.  
**Sistemas/datos:** `GameSession`, `scope=A`, stats iniciales.  
**Evidencia visible:** Primera escena carga correctamente.  
**Reglas relacionadas:** RB-GEN-001, RB-EST-001.  
**Riesgos:** Si falla backend, debe iniciar con sesión local.

## Etapa: Onboarding

**Acción del jugador:** Avanza diálogos.  
**Frontstage visible:** Manager, fondo oficina, diálogo, stats.  
**Backstage:** Motor de escenas lee escena actual y transiciona.  
**Sistemas/datos:** `Scene`, `Character`, `DialogueLine`, `GameState`.  
**Evidencia visible:** Typewriter effect, sprite placeholder, stats iniciales.  
**Riesgos:** Exceso de texto o ritmo lento.

## Etapa: Concept Challenge

**Acción del jugador:** Selecciona una opción.  
**Frontstage visible:** Pregunta, opciones, feedback.  
**Backstage:** Validación local de respuesta, aplicación de efectos.  
**Sistemas/datos:** `ConceptChallenge`, `Option`, `ConceptState`.  
**Evidencia visible:** Feedback narrativo, concepto aprendido, cambios de stats.  
**Riesgos:** Pregunta con respuesta obvia o no introducida.

## Etapa: Prompt Challenge

**Acción del jugador:** Escribe y envía prompt.  
**Frontstage visible:** Tarea, textarea, botón evaluar, estado de carga.  
**Backstage:** Validación, rate limit, cache, llamada al evaluador IA/mock, parseo JSON, actualización de stats.  
**Sistemas/datos:** `PromptChallenge`, `PromptEvaluation`, `RateLimit`, `UsageLog`.  
**Evidencia visible:** Score, feedback, reacción del Senior, cambios de stats.  
**Riesgos:** Prompt injection, gasto excesivo, API failure, respuesta inválida.

## Etapa: Crisis final

**Acción del jugador:** Selecciona solución ante hallucination.  
**Frontstage visible:** CEO/Manager en crisis, opciones capciosas.  
**Backstage:** Resolver opción local y calcular efecto.  
**Sistemas/datos:** `ConceptChallenge`, `GameState`.  
**Evidencia visible:** Reacción dramática, stats finales antes del ending.  
**Riesgos:** Usar conceptos no explicados.

## Etapa: Ending

**Acción del jugador:** Lee resultado y puede reiniciar.  
**Frontstage visible:** Ending bueno/medio/malo, resumen de stats, concepto aprendido.  
**Backstage:** Cálculo de ending, persistencia opcional.  
**Sistemas/datos:** `Ending`, `GameSession`.  
**Evidencia visible:** Final acorde a desempeño.  
**Riesgos:** El ending se siente arbitrario.

---

# 8. Touchpoints / puntos de contacto

| Touchpoint | Tipo | Etapa | Usuario lo ve | Responsable |
| --- | --- | --- | --- | --- |
| Start Screen | Digital | Start | Sí | Frontend |
| Game Screen | Digital | Onboarding/diálogo | Sí | Frontend |
| Concept Challenge Panel | Digital | Concept Challenge | Sí | Frontend |
| Prompt Challenge Panel | Digital | Prompt Challenge | Sí | Frontend |
| Feedback Panel | Digital | Feedback | Sí | Frontend + Evaluator |
| Audio Playback | Automático/Manual | Diálogo clave | Sí/Oye | ElevenLabs/audio system |
| Ending Screen | Digital | Ending | Sí | Frontend |
| Prompt Evaluation API | Automático | Prompt Challenge | No | Backend |
| Usage/Rate Limit | Automático | Prompt Challenge | No | Backend |

---

# 9. Actores involucrados

| Actor | Tipo | Responsabilidad dentro de la experiencia |
| --- | --- | --- |
| Jugador | Usuario | Toma decisiones y escribe prompts |
| Manager | Personaje | Presenta presión, feedback y consecuencias |
| PM | Personaje | Introduce ambigüedad de producto |
| Senior AI Engineer | Personaje | Da feedback técnico y educativo |
| CEO | Personaje | Genera crisis/hype |
| RH | Personaje/Sistema narrativo | Representa riesgo de despido |
| Motor narrativo | Sistema | Controla escenas y decisiones |
| Evaluador de prompts | Sistema | Analiza prompt como texto no confiable |
| Sistema de voz | Sistema externo/interno | Reproduce líneas clave |

---

# 10. Sistemas involucrados

| Sistema | Para qué se usa | Etapas | Crítico |
| --- | --- | --- | --- |
| Next.js frontend | Renderizar juego | Todas | Sí |
| Zustand store | Estado de juego local | Todas | Sí |
| NestJS backend | Sesiones, evaluación, usage | Prompt Challenge | Medio/Alto |
| PostgreSQL/Prisma | Persistir sesiones/evaluaciones | Prompt Challenge/Ending | Medio |
| Mock Evaluator | Evaluación sin costo/API | Prompt Challenge | Sí como fallback |
| Claude/OpenAI | Evaluación IA real | Prompt Challenge | No si existe mock |
| ElevenLabs/pre-generated audio | Voces | Diálogos clave | No crítico |

---

# 11. Datos y entidades involucradas

| Entidad / dato | Descripción | Etapas |
| --- | --- | --- |
| GameSession | Sesión anónima con scope, escena y stats | Todas |
| GameState | Reputación, skill, riesgo RH, conceptos introducidos | Todas |
| Scene | Unidad narrativa renderizable | Onboarding/diálogo |
| Character | Personaje, emoción, sprite/audio placeholder | Diálogo |
| ConceptChallenge | Pregunta de opción múltiple | Concept Challenges |
| PromptChallenge | Reto de prompt libre | Prompt Challenge |
| PromptEvaluation | Score, outcome, feedback, efectos | Prompt Challenge/Feedback |
| Ending | Final calculado | Ending |
| UsageLog | Conteo de evaluaciones/tokens | Prompt Challenge |

---

# 12. Reglas detectadas

| Regla | Etapa | Motivo |
| --- | --- | --- |
| Los prompts se analizan, no se ejecutan | Prompt Challenge | Seguridad |
| Máximo 1 evaluación IA por Prompt Challenge en Scope A | Prompt Challenge | Control de costo |
| Si IA falla, usar mock evaluator | Prompt Challenge | Mantener demo funcional |
| No evaluar conceptos no introducidos | Concept Challenges | Justicia educativa |
| Ending depende de stats acumulados | Ending | Consecuencia jugable |

---

# 13. Automatizaciones posibles

| Automatización | Etapa | Prioridad | Entra al MVP |
| --- | --- | --- | --- |
| Aplicar efectos de choice automáticamente | Choices | Alta | Sí [Scope A] |
| Calcular ending automáticamente | Ending | Alta | Sí [Scope A] |
| Cachear evaluación por hash | Prompt Challenge | Media | Sí si hay tiempo [Scope A/B] |
| Pre-generar audios | Voz | Media | Parcial [Scope A] |
| Resumen del día | Day Summary | Media | [Scope B] |

---

# 14. Procesos manuales aceptados en MVP

| Proceso manual | Quién lo hace | Por qué se acepta | Riesgo |
| --- | --- | --- | --- |
| Escribir contenido narrativo directo en archivos | Equipo | Velocidad de hackatón | Bajo |
| Usar placeholders de sprites/fondos | Equipo | Validar flow antes de arte | Bajo |
| Pre-generar audios clave | Equipo | Ahorrar créditos en ejecución | Bajo/Medio |
| Ajustar rúbrica manualmente | Equipo | Mejor control educativo | Bajo |

---

# 15. Puntos de fallo críticos

| Punto de fallo | Etapa | Impacto | Prevención | Recuperación |
| --- | --- | --- | --- | --- |
| API de IA no responde | Prompt Challenge | Alto | Timeout + fallback | Mock evaluator |
| Usuario abusa del endpoint | Prompt Challenge | Alto | Rate limit + max length | Bloquear/rechazar request |
| Prompt injection intenta controlar evaluador | Prompt Challenge | Alto | System prompt + tratar input como data | Validación + fallback |
| JSON inválido de IA | Prompt Challenge | Medio | Schema + retry | Mock evaluator |
| Audio no carga | Diálogos | Bajo | Audio opcional | Continuar sin audio |
| Stats no actualizan bien | Todo | Alto | Tests básicos | Recalcular desde eventos o reset |

---

# 16. Evidencias visibles para el jugador

| Evidencia | Qué confirma | Etapa |
| --- | --- | --- |
| Cambio de stats animado | La decisión tuvo consecuencia | Choices/Feedback |
| Reacción emocional de personaje | La narrativa responde al jugador | Feedback |
| Score de prompt | El prompt fue evaluado | Prompt Challenge |
| Concepto aprendido | Hay aprendizaje real | Feedback |
| Ending final | La partida tuvo cierre | Ending |

---

# 17. Métricas del servicio

| Métrica | Qué mide | Etapa |
| --- | --- | --- |
| Completion rate | Usuarios que completan partida | Todo |
| Evaluation success rate | Evaluaciones que devuelven resultado válido | Prompt Challenge |
| Fallback rate | Qué tanto se usa mock por fallos/costo | Prompt Challenge |
| Average game duration | Duración real del Scope A | Todo |
| Ending distribution | Balance de dificultad | Ending |
| Token usage per session | Costo de IA | Prompt Challenge |

---

# 18. Decisiones de diseño derivadas

| Decisión | Motivo | Etapa |
| --- | --- | --- |
| Usar typewriter effect | Evitar sensación de slides | Diálogo |
| Usar placeholders con emoción | Validar flow sin assets finales | Todo |
| Mostrar stats siempre | Reforzar consecuencia jugable | Todo |
| Feedback como diálogo de personaje | Aprendizaje más memorable | Feedback |
| Usar audio solo en líneas clave | Reducir costo y complejidad | Diálogo |

---

# 19. Implicaciones técnicas

| Implicación | Área afectada | Prioridad |
| --- | --- | --- |
| Separar contenido en datos | Frontend | Alta |
| Crear backend con mock evaluator | Backend | Alta |
| Validar JSON de IA con schema | Backend | Alta |
| Rate limit por IP/sesión | Seguridad | Alta |
| Cache de evaluaciones | Backend/DB | Media |
| Audio pre-generado | Frontend/Assets | Media |

---

# 20. Preguntas abiertas

- ¿La sesión anónima se guardará en backend desde Scope A o solo localStorage al inicio?
- ¿Cuántas líneas tendrán audio pre-generado para la demo?
- ¿El equipo usará Claude u OpenAI en la primera integración real?
- ¿Se mostrará el score numérico al jugador o solo outcome + feedback?

---

# 21. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| Prompt evaluation con mock fallback | Evitar bloqueo por API/costo | 2026-06-20 |
| No generar assets finales antes de wireframes | Reducir desperdicio | 2026-06-20 |
| Build inicial Scope A | Entregar demo jugable rápido | 2026-06-20 |
| Backend propio NestJS/PostgreSQL | Control de datos/costos/seguridad | 2026-06-20 |

---

# 22. Checklist de validación

- [x] La experiencia analizada está definida.
- [x] El usuario principal está definido.
- [x] El punto de inicio y final están definidos.
- [x] El momento de valor está identificado.
- [x] Las etapas principales están alineadas con el Player Journey.
- [x] Están documentadas las acciones visibles del jugador.
- [x] Está documentado lo que ocurre detrás.
- [x] Están identificados sistemas, datos, reglas y fallos.
- [x] Está claro qué puede ser manual en MVP.
- [x] Están identificadas implicaciones técnicas.
