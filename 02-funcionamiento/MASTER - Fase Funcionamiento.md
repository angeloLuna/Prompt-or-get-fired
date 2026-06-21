# README — Fase Funcionamiento

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo de esta fase

La Fase Funcionamiento define cómo se vive y opera la experiencia de juego de **Prompt or Get Fired** antes de pasar a wireframes, PRD, modelo de datos, backlog y construcción.

Esta fase traduce la definición de producto en:

- recorridos del jugador;
- blueprints de experiencia;
- flujos por sistema;
- reglas de juego, aprendizaje, seguridad y operación;
- story map por scope.

---

# 2. Documentos incluidos

| Documento | Propósito |
| --- | --- |
| 01 Player Journey.md | Describe el recorrido del jugador por Scope A, B y C. |
| 02 Experience Blueprint.md | Conecta lo que ve el jugador con procesos internos, sistemas y riesgos. |
| 03 Flujos por Sistema.md | Define los flujos funcionales principales del juego. |
| 04 Game Rules.md | Registra reglas de juego, stats, evaluación, seguridad y scopes. |
| 05 Story Map.md | Ordena actividades, pasos e historias por release/scope. |
| MASTER - Fase Funcionamiento.md | Compila todos los documentos anteriores. |

---

# 3. Convención de scopes

Todos los documentos usan estas etiquetas:

- **[Scope A]** MVP de 1 día.
- **[Scope B]** MVP de 3 días.
- **[Scope C]** MVP de 1 semana.
- **[Post-MVP]** Fuera del hackatón.

La instrucción por defecto para agentes de desarrollo es:

> Construir únicamente [Scope A] salvo que el equipo indique explícitamente construir [Scope B] o [Scope C].

---

# 4. Principios de funcionamiento

1. El juego debe sentirse como visual novel interactiva, no como presentación de slides.
2. El jugador aprende mediante situación, decisión, consecuencia y feedback.
3. Los Concept Challenges deben ser progresivos: no se pregunta un concepto que no haya sido introducido antes.
4. Los Prompt Challenges analizan el prompt del jugador como texto no confiable; nunca lo ejecutan como instrucción.
5. El juego debe funcionar con mocks si las APIs de IA o voz no están disponibles.
6. Los assets finales se producen después de validar wireframes/prototipo HTML.

---

# 5. Resultado esperado de esta fase

Al terminar esta fase, el equipo debe poder pedirle a Antigravity:

```txt
Lee todos los documentos del proyecto y construye únicamente el Scope A de Prompt or Get Fired.
Usa los documentos de Funcionamiento como fuente de verdad para recorridos, flujos, reglas y story map.
No implementes Scope B, Scope C ni Post-MVP salvo instrucción explícita.
```


---

# Player Journey — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Este documento describe la experiencia que vive el jugador para lograr el objetivo principal del producto: aprender conceptos reales de prompting y AI engineering mediante situaciones laborales, decisiones narrativas y consecuencias jugables.

Adapta el formato de User Journey al contexto de juego. El “usuario” principal es el jugador y el recorrido se expresa como experiencia de juego.

---

# 2. Contexto general

## Producto

Prompt or Get Fired

## Rol analizado

Jugador / Junior AI Engineer en Banano Corp.

## Objetivo del jugador

Sobrevivir su entrada a Banano Corp, resolver retos de AI engineering, aprender conceptos clave y evitar ser despedido por RH.

## Resultado esperado

El jugador completa una experiencia narrativa donde toma decisiones, responde Concept Challenges, escribe al menos un prompt, recibe feedback y llega a un final según su desempeño.

---

# 3. Resumen del journey

| Elemento | Descripción |
| --- | --- |
| Usuario principal | Jugador |
| Objetivo | Aprender y aplicar conceptos de AI engineering en una historia interactiva |
| Punto de inicio | Pantalla de inicio / primer día en Banano Corp |
| Punto final | Evaluación final / ending |
| Momento de valor | Cuando el jugador entiende por qué una decisión o prompt fue bueno, parcial o riesgoso |
| Frecuencia esperada | Ocasional en hackatón; rejugable para probar mejores resultados |
| Dispositivo principal | Web desktop/laptop durante hackatón; responsive después |
| Nivel de fricción esperado | Bajo en Scope A, medio en Scope B/C por mayor duración |

---

# 4. Journey en una frase

El jugador entra a Banano Corp como Junior AI Engineer, recibe situaciones ambiguas de oficina, toma decisiones, escribe prompts, recibe feedback educativo y llega a un final donde puede ser aprobado, quedar en observación o ser despedido.

---

# 5. Etapas principales por scope

## [Scope A] MVP de 1 día

```txt
Inicio
  → Onboarding con manager
  → Concept Challenge: estructura de prompt
  → Encuentro con PM ambiguo
  → Concept Challenge: aclarar problema y criterio de éxito
  → Prompt Challenge: resumir tickets enterprise
  → Feedback del Senior
  → Crisis final sobre hallucinations
  → Ending
```

## [Scope B] MVP de 3 días

```txt
Día 1: Prompt básico y ambigüedad
  → Día 2: Hallucinations, fuente de verdad e información faltante
  → Día 3: Demo con cliente / crisis de producción
  → Evaluación acumulada
  → Ending
```

## [Scope C] MVP de 1 semana

```txt
Día 1: Prompting básico
  → Día 2: Hallucinations y grounding
  → Día 3: RAG básico y datos cambiantes
  → Día 4: Tools / agentes con límites
  → Día 5: Producción en llamas
  → Evaluación semanal
  → Ending avanzado
```

---

# 6. Tabla principal del Player Journey — [Scope A]

| Etapa | Acción del jugador | Pensamiento del jugador | Emoción | Dolor / fricción | Oportunidad de producto |
| --- | --- | --- | --- | --- | --- |
| Inicio | Presiona iniciar partida | “A ver de qué va este juego.” | Curiosidad | Debe entender rápido el contexto | Pantalla de inicio clara con pitch breve |
| Onboarding | Lee diálogo del manager | “Esto parece una entrevista laboral absurda.” | Humor / atención | Si hay demasiado texto puede cansar | Diálogos cortos, voz clave y typewriter effect |
| Concept Challenge 1 | Elige qué hace útil a un prompt | “Creo que contexto y formato importan.” | Seguridad moderada | Opciones no deben ser obvias ni injustas | Feedback breve después de responder |
| PM ambiguo | Decide cómo responder a petición vaga | “¿Resuelvo o pregunto primero?” | Duda | Puede sonar tentador brincar a solución | Enseñar manejo de ambigüedad |
| Concept Challenge 2 | Elige mejor primera respuesta | “La respuesta técnica no siempre es la mejor.” | Aprendizaje | Debe distinguir matiz, no trivia | Opción tentadora técnica como distractor |
| Prompt Challenge | Escribe prompt para resumir tickets | “Necesito aplicar lo aprendido.” | Concentración | Escribir puede sentirse pesado | Rúbrica visible o pistas mínimas |
| Feedback | Recibe score, reacción y stats | “Ya entendí qué me faltó.” | Satisfacción o presión | Feedback genérico sería débil | Feedback narrativo + concepto aprendido |
| Crisis final | Elige cómo evitar hallucinations | “No basta con decirle que no invente.” | Tensión | Concepto debe haber sido introducido antes | Cerrar aprendizaje con decisión capciosa |
| Ending | Ve resultado final | “Quiero rejugar para mejorar.” | Risa / logro | Final debe sentirse consecuencia real | Mostrar stats, ending y botón de reinicio |

---

# 7. Detalle por etapa — [Scope A]

## Etapa: Inicio

**Descripción:** El jugador llega a la pantalla inicial de Prompt or Get Fired.  
**Objetivo:** Entender rápido el tono, iniciar partida y aceptar la fantasía de ser Junior AI Engineer.  
**Acción principal:** Iniciar juego.  
**Pantallas relacionadas:** Start Screen.  
**Datos necesarios:** Ninguno o creación de sesión anónima.  
**Riesgos:** Si la pantalla parece presentación o landing genérica, baja la percepción de juego.

## Etapa: Onboarding con Manager

**Descripción:** El manager presenta Banano Corp y explica que el desempeño se medirá por reputación, skill y riesgo RH.  
**Objetivo:** Presentar mundo, tono y stats.  
**Acción principal:** Avanzar diálogo.  
**Pantallas relacionadas:** Game Screen.  
**Conceptos introducidos:** Stats básicos, consecuencias.  
**Riesgos:** Exposición larga sin interacción.

## Etapa: Concept Challenge — estructura de prompt

**Descripción:** El manager pregunta qué hace que un prompt sea útil.  
**Objetivo:** Introducir estructura básica: objetivo, contexto, formato y restricciones.  
**Acción principal:** Seleccionar opción múltiple.  
**Conceptos introducidos:** `prompt_goal`, `context`, `output_format`, `constraints`.  
**Riesgos:** Respuesta demasiado obvia; debe tener distractor razonable.

## Etapa: PM ambiguo

**Descripción:** Un PM pide que el chatbot sea “más inteligente” y “más AI”.  
**Objetivo:** Enseñar que antes de construir hay que aclarar problema y criterio de éxito.  
**Acción principal:** Elegir respuesta al PM.  
**Conceptos introducidos:** `ambiguity`, `success_criteria`.  
**Riesgos:** Que el jugador no entienda por qué una respuesta técnica puede ser prematura.

## Etapa: Prompt Challenge

**Descripción:** El Senior pide escribir un prompt para resumir tickets de soporte enterprise.  
**Objetivo:** Aplicar estructura de prompt a una tarea concreta.  
**Acción principal:** Escribir prompt y enviarlo a evaluación.  
**Conceptos requeridos:** `prompt_goal`, `context`, `output_format`, `constraints`, `missing_information`.  
**Riesgos:** Costos de IA, abuso, prompts demasiado largos, prompt injection.

## Etapa: Crisis final

**Descripción:** El CEO avisa que la IA inventó datos frente al cliente y pregunta qué hacer.  
**Objetivo:** Enseñar que reducir hallucinations requiere fuente de verdad, límites y manejo de información faltante.  
**Acción principal:** Seleccionar opción múltiple.  
**Conceptos requeridos:** `hallucination`, `source_of_truth`, `missing_information`.  
**Riesgos:** No usar conceptos que no hayan sido introducidos antes.

## Etapa: Ending

**Descripción:** El sistema calcula ending según stats y desempeño.  
**Objetivo:** Dar cierre narrativo y feedback de aprendizaje.  
**Acción principal:** Leer resultado, reiniciar o salir.  
**Pantallas relacionadas:** Ending Screen.  
**Riesgos:** Si el ending no refleja decisiones, pierde impacto.

---

# 8. Momento de valor

## Momento de valor principal

El momento de valor ocurre cuando el jugador recibe feedback que conecta su decisión o prompt con una consecuencia narrativa y un concepto real de AI engineering.

Ejemplo:

```txt
Jugador elige preguntar por criterio de éxito
→ PM reacciona mejor
→ Skill sube
→ Feedback explica: “Antes de resolver una petición ambigua, define problema y métrica de éxito.”
```

## Qué debe pasar antes

- El jugador debe entender la situación laboral.
- El reto debe estar asociado a un concepto previamente introducido.
- La opción correcta no debe ser trivial.
- El feedback debe explicar el matiz.

## Qué pasa después

- El jugador avanza a una escena nueva.
- Stats cambian.
- El juego puede usar el concepto como base para una pregunta más difícil.

---

# 9. Fricciones críticas

| Fricción | Etapa | Impacto | Posible solución |
| --- | --- | --- | --- |
| Sentirse como slides | Todo el juego | Alto | Typewriter, sprites, transiciones, stats animados, reacciones |
| Preguntas demasiado obvias | Concept Challenges | Alto | Incluir distractores técnicos razonables |
| Preguntas injustas | Concept Challenges | Alto | No evaluar conceptos no introducidos |
| Prompt libre cansado | Prompt Challenge | Medio | Limitar a 1 en Scope A, dar tarea clara |
| Costo/abuso de IA | Prompt Challenge | Alto | Rate limit, mock evaluator, cache, longitud máxima |
| Feedback genérico | Feedback | Alto | Feedback narrativo + educativo + efectos |

---

# 10. Oportunidades detectadas

| Oportunidad | Etapa | Tipo | Prioridad |
| --- | --- | --- | --- |
| Rejugabilidad para mejorar ending | Ending | Producto | Alta |
| Humor corporativo en feedback | Feedback | Contenido | Alta |
| Conceptos desbloqueados invisibles | Todo | Aprendizaje | Alta |
| Voz ElevenLabs en líneas clave | Onboarding/finales | UX | Media |
| Resumen de conceptos aprendidos | Ending / Scope B | Aprendizaje | Media |

---

# 11. Pantallas potenciales derivadas

| Pantalla | Scope | Propósito |
| --- | --- | --- |
| Start Screen | [Scope A] | Presentar juego e iniciar partida |
| Game Screen | [Scope A] | Renderizar diálogo, personaje, fondo y stats |
| Concept Challenge Panel | [Scope A] | Mostrar pregunta y opciones |
| Prompt Challenge Panel | [Scope A] | Capturar prompt libre |
| Feedback Panel | [Scope A] | Mostrar score, feedback y cambios de stats |
| Ending Screen | [Scope A] | Mostrar resultado final |
| Day Summary Screen | [Scope B] | Resumen por día |
| Weekly Evaluation Screen | [Scope C] | Evaluación de semana completa |

---

# 12. Reglas o decisiones derivadas

| Regla / decisión | Etapa | Motivo |
| --- | --- | --- |
| Los conceptos deben introducirse antes de evaluarse | Concept Challenges | Evitar trivia injusta |
| Solo 1 Prompt Challenge en Scope A | Prompt Challenge | Controlar tiempo, costo y complejidad |
| Concept Challenges deben tener distractores razonables | Concept Challenges | Enseñar criterio, no descarte obvio |
| Los prompts del jugador no se ejecutan | Prompt Challenge | Seguridad y control de abuso |
| Placeholders antes de assets finales | Wireframes/prototipo | Validar flow antes de invertir en arte |

---

# 13. Métricas del journey

| Métrica | Qué mide | Etapa relacionada |
| --- | --- | --- |
| Completion rate | Jugadores que llegan a un ending | Todo |
| Prompt submitted rate | Jugadores que completan el Prompt Challenge | Prompt Challenge |
| Replay intent | Jugadores que reinician para mejorar | Ending |
| Average score | Calidad promedio de prompts | Prompt Challenge |
| Wrong-but-reasonable selection rate | Qué distractores confunden | Concept Challenges |
| Time to finish Scope A | Duración de la demo | Todo |

---

# 14. Journey actual vs journey ideal

## Journey actual

El usuario aprende prompting mediante documentación, tutoriales, videos, hilos o prueba y error. El aprendizaje puede ser útil pero suele estar desconectado de consecuencias reales o contexto laboral.

## Journey ideal

El usuario aprende conceptos aplicándolos en situaciones memorables, con feedback inmediato, consecuencias narrativas y humor.

| Etapa | Proceso actual | Proceso ideal |
| --- | --- | --- |
| Aprender estructura de prompt | Leer una lista de buenas prácticas | Resolver una pregunta narrativa con feedback |
| Practicar prompt | Probar prompts sin rúbrica clara | Escribir prompt en reto concreto con evaluación |
| Entender hallucinations | Leer explicación abstracta | Ver cómo un mal manejo causa crisis de demo |
| Recordar conceptos | Tomar notas | Recordar escena/personaje/consecuencia |

---

# 15. Supuestos del journey

| Supuesto | Riesgo si es falso | Cómo validarlo |
| --- | --- | --- |
| El jugador entiende el tono corporativo/startup | Humor no conecta | Observar reacciones en demo |
| Una experiencia de 5–8 minutos basta para mostrar valor | Se siente pequeña | Validar con wireframes y ajustar Scope B |
| El prompt libre no frena demasiado | Abandono | Medir completion rate |
| Los distractores razonables mejoran aprendizaje | Frustración si son demasiado difíciles | Probar preguntas con usuarios |

---

# 16. Preguntas abiertas

- ¿El MVP debe incluir una pantalla de “conceptos aprendidos” al final o basta con feedback por reto?
- ¿El Prompt Challenge debe mostrar una guía mínima o dejar que el jugador resuelva solo?
- ¿La voz debe reproducirse automáticamente o con botón para evitar fricción?
- ¿El Scope A debe durar más cerca de 5 o de 8 minutos?

---

# 17. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| Construir primero Scope A | Reducir riesgo y validar loop central | 2026-06-20 |
| Usar placeholders hasta validar wireframes | Evitar gastar tiempo en assets antes del flow | 2026-06-20 |
| Mantener Concept Challenges progresivos | Evitar preguntas injustas | 2026-06-20 |
| Usar mock evaluator como fallback | Evitar bloqueo por costo/API | 2026-06-20 |

---

# 18. Checklist de validación

- [x] El jugador principal está definido.
- [x] El objetivo del jugador está claro.
- [x] El punto de inicio está definido.
- [x] El punto final está definido.
- [x] El momento de valor está identificado.
- [x] Las etapas principales están mapeadas para Scope A/B/C.
- [x] Cada etapa tiene acciones claras.
- [x] Cada etapa tiene fricciones identificadas.
- [x] Se identificaron pantallas potenciales.
- [x] Se identificaron reglas derivadas.
- [x] Se identificaron métricas del journey.


---

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


---

# Flujos por Sistema — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Este documento describe los flujos funcionales de los sistemas principales del juego.

Adapta el template de Flujos por módulo a un juego web narrativo: en lugar de módulos de negocio tradicionales, se documentan sistemas funcionales como diálogo, decisiones, Concept Challenges, Prompt Challenges, evaluación, stats, voz y finales.

---

# 2. Resumen de sistemas funcionales

| Sistema | Descripción | Scope | Prioridad |
| --- | --- | --- | --- |
| Sistema de escenas y diálogo | Renderiza escenas, personajes, texto y transiciones | [Scope A] | Alta |
| Sistema de decisiones | Permite elegir opciones y aplicar consecuencias | [Scope A] | Alta |
| Sistema de Concept Challenges | Preguntas de opción múltiple progresivas | [Scope A] | Alta |
| Sistema de Prompt Challenges | Captura prompts libres y muestra evaluación | [Scope A] | Alta |
| Sistema de evaluación de prompts | Analiza prompts con mock/IA sin ejecutarlos | [Scope A] | Alta |
| Sistema de stats | Maneja reputación, skill y riesgo RH | [Scope A] | Alta |
| Sistema de finales | Calcula ending según desempeño | [Scope A] | Alta |
| Sistema de voz/audio | Reproduce voces en líneas clave | [Scope A] | Media |
| Sistema de progresión por días | Estructura Día 1–3 | [Scope B] | Media |
| Sistema de resumen semanal | Evaluación de semana completa | [Scope C] | Media |

---

# 3. Flujo principal del producto — [Scope A]

## Nombre del flujo principal

Partida Scope A: Primer día en Banano Corp.

## Descripción breve

El jugador inicia partida, avanza por escenas narrativas, responde retos conceptuales, escribe un prompt, recibe evaluación, enfrenta una crisis final y llega a un ending.

## Secuencia general

```txt
Start Screen
  → Crear/iniciar sesión
  → Cargar primera escena
  → Mostrar diálogo
  → Resolver Concept Challenge 1
  → Resolver decisión con PM
  → Resolver Prompt Challenge
  → Mostrar feedback
  → Resolver Crisis final
  → Calcular ending
  → Mostrar Ending Screen
```

## Resultado esperado

El jugador completa una partida de 5–8 minutos, recibe feedback educativo y entiende el valor del juego.

---

# 4. Flujo: Sistema de escenas y diálogo

## Objetivo del flujo

Mostrar escenas narrativas con personaje, emoción, fondo, texto, audio opcional y transiciones.

## Usuario principal

Jugador.

## Punto de inicio

El motor recibe `currentSceneId`.

## Punto final

La escena termina y avanza a otra escena, choice o challenge.

## Precondiciones

- Existe un archivo de escenas para el scope activo.
- La escena actual tiene ID válido.
- Los assets pueden ser placeholders.

## Pasos del flujo

```txt
Cargar escena actual
  → Renderizar fondo/personaje/emoción
  → Mostrar línea de diálogo con typewriter
  → Reproducir audio si existe y está habilitado
  → Esperar acción del jugador
  → Avanzar a siguiente línea, choice o challenge
```

## Tabla del flujo

| Paso | Acción del jugador | Pantalla / punto de contacto | Sistema hace | Resultado |
| --- | --- | --- | --- | --- |
| 1 | Inicia/continúa | Game Screen | Busca `currentSceneId` | Escena cargada |
| 2 | Observa | Game Screen | Renderiza fondo, personaje y emoción | Contexto visual visible |
| 3 | Lee/escucha | Dialogue Box | Muestra texto con typewriter y audio opcional | Diálogo vivo |
| 4 | Click continuar | Dialogue Box | Avanza línea o estado | Nuevo diálogo o reto |

## Datos necesarios

| Dato | Obligatorio | Quién lo captura | Notas |
| --- | --- | --- | --- |
| sceneId | Sí | Sistema | Fuente de verdad de navegación |
| characterId | Sí | Contenido | Puede tener placeholder |
| emotion | No | Contenido | Neutral por defecto |
| dialogueText | Sí | Contenido | Texto visible |
| audioAssetId | No | Contenido | Opcional Scope A |

## Reglas del flujo

- El juego no debe bloquearse si falta audio.
- Si falta sprite final, se usa placeholder.
- El contenido debe vivir en datos, no hardcodeado en componentes.
- Las transiciones deben ser suaves para evitar sensación de slides.

## Errores posibles

| Error | Cuándo ocurre | Manejo recomendado |
| --- | --- | --- |
| Scene ID inválido | Estado corrupto | Volver a Start o escena fallback |
| Audio no carga | Asset faltante | Continuar sin audio |
| Personaje no tiene sprite | Assets incompletos | Mostrar placeholder con nombre/emoción |

## Criterios de aceptación

- [ ] Renderiza escena desde datos.
- [ ] Permite avanzar diálogo.
- [ ] Soporta emoción/personaje placeholder.
- [ ] No falla si audio no existe.
- [ ] Se siente más como juego que presentación.

---

# 5. Flujo: Sistema de decisiones

## Objetivo del flujo

Permitir al jugador elegir una opción, aplicar efectos de stats y avanzar de escena.

## Secuencia general

```txt
Mostrar opciones
  → Jugador selecciona
  → Aplicar efectos
  → Mostrar reacción/feedback si aplica
  → Actualizar stats
  → Avanzar a siguiente escena
```

## Tabla del flujo

| Paso | Acción del jugador | Pantalla | Sistema hace | Resultado |
| --- | --- | --- | --- | --- |
| 1 | Lee opciones | Choice List | Renderiza opciones desde escena | Opciones visibles |
| 2 | Selecciona | Choice Button | Evalúa opción elegida | Choice registrado |
| 3 | Espera feedback | Game Screen | Aplica efectos a stats | Estado actualizado |
| 4 | Continúa | Game Screen | Carga `nextSceneId` | Nuevo momento narrativo |

## Reglas del flujo

- Cada opción puede tener efectos positivos, negativos o neutros.
- Las opciones incorrectas deben representar errores reales o decisiones corporativas plausibles.
- No todas las opciones incorrectas deben castigar igual.
- Debe existir al menos un camino viable al ending medio aunque el jugador falle una vez.

## Criterios de aceptación

- [ ] Las opciones se renderizan desde datos.
- [ ] Los efectos se aplican correctamente.
- [ ] Los stats muestran cambios visibles.
- [ ] El juego avanza a la escena correcta.

---

# 6. Flujo: Sistema de Concept Challenges

## Objetivo del flujo

Evaluar conceptos clave mediante opción múltiple sin que la respuesta correcta sea obvia o injusta.

## Secuencia general

```txt
Mostrar situación narrativa
  → Mostrar pregunta
  → Jugador elige opción
  → Sistema resuelve localmente
  → Mostrar feedback explicativo
  → Marcar concepto como practicado/aprendido
  → Aplicar efectos
```

## Datos necesarios

| Dato | Obligatorio | Notas |
| --- | --- | --- |
| challengeId | Sí | Identificador único |
| question | Sí | Pregunta integrada a narrativa |
| options | Sí | Idealmente 4 |
| correctOptionId | Sí | Fuente de verdad |
| feedback por opción | Sí | Explica matiz |
| requiredConcepts | Sí | Conceptos que deben estar introducidos |
| effects | Sí | Cambios de stats |

## Reglas del flujo

- No se puede evaluar un concepto no introducido previamente.
- Cada pregunta debe tener una opción correcta, una tentadora técnica, una parcial/superficial y una graciosa/peligrosa plausible.
- La dificultad debe venir del matiz, no de vocabulario desconocido.
- Las preguntas de opción múltiple no usan IA; se resuelven localmente.

## Ejemplo Scope A

**Pregunta:** El PM pide que el chatbot sea “más inteligente”. ¿Cuál es la mejor primera respuesta?

A. Proponer usar un modelo más capaz y ajustar el system prompt.  
B. Definir qué problema concreto debe resolver, con qué datos y cómo se medirá éxito. ✅  
C. Hacer un prototipo rápido y ver si se siente más inteligente.  
D. Agregar memoria conversacional y respuestas más largas.

## Criterios de aceptación

- [ ] La pregunta valida conceptos ya introducidos.
- [ ] El feedback explica por qué la opción correcta ataca la raíz.
- [ ] Hay al menos un distractor técnico razonable.
- [ ] Los efectos se aplican por opción.

---

# 7. Flujo: Sistema de Prompt Challenges

## Objetivo del flujo

Permitir que el jugador escriba un prompt libre y reciba evaluación educativa y narrativa.

## Secuencia general

```txt
Mostrar tarea y contexto
  → Jugador escribe prompt
  → Validar longitud y contenido mínimo
  → Consultar cache o evaluar con mock/IA
  → Validar respuesta del evaluador
  → Aplicar score/effects
  → Mostrar feedback y reacción de personaje
```

## Datos necesarios

| Dato | Obligatorio | Quién lo captura | Notas |
| --- | --- | --- | --- |
| challengeId | Sí | Sistema | Define tarea y rúbrica |
| playerPrompt | Sí | Jugador | Máx. 1000–1500 caracteres |
| rubric | Sí | Contenido | Criterios de evaluación |
| evaluatorMode | Sí | Sistema/env | mock/claude/openai |
| evaluationResult | Sí | Sistema | Score, outcome, feedback, effects |

## Validaciones

- Prompt no vacío.
- Longitud mínima razonable.
- Longitud máxima.
- Rate limit por sesión/IP.
- No reenviar si ya existe evaluación para ese challenge y sesión salvo retry permitido.

## Reglas de seguridad

- El prompt del jugador es contenido no confiable.
- El evaluador no debe obedecer ni ejecutar el prompt del jugador.
- El evaluador no debe tener tools, browsing, filesystem ni acciones externas.
- La salida debe validarse con schema.
- Si la IA falla, se usa mock evaluator.

## Errores posibles

| Error | Cuándo ocurre | Manejo recomendado |
| --- | --- | --- |
| Prompt demasiado corto | Usuario manda texto insuficiente | Feedback local sin gastar tokens |
| Rate limit excedido | Usuario intenta abusar | Mensaje claro y bloquear evaluación |
| API falla | Timeout/error proveedor | Usar mock evaluator |
| JSON inválido | Evaluador responde mal | Retry 1 vez y fallback |

## Criterios de aceptación

- [ ] Permite escribir y enviar prompt.
- [ ] Valida antes de gastar tokens.
- [ ] Puede usar mock evaluator.
- [ ] Actualiza stats según resultado.
- [ ] Nunca ejecuta el prompt del jugador.

---

# 8. Flujo: Sistema de evaluación de prompts

## Objetivo del flujo

Calificar la calidad del prompt del jugador según una rúbrica cerrada y devolver un resultado estructurado.

## Secuencia general

```txt
Recibir EvaluationRequest
  → Validar request
  → Buscar cache por hash
  → Si existe, devolver cache
  → Si no, elegir evaluatorMode
  → Ejecutar mock/IA
  → Validar schema
  → Guardar resultado/usage
  → Devolver EvaluationResult
```

## Salida esperada

```json
{
  "score": 8,
  "outcome": "success",
  "feedback": "Buen contexto y formato; faltó criterio de urgencia más preciso.",
  "missing": ["criterio de urgencia"],
  "effects": { "reputation": 8, "skill": 12, "risk": -4 },
  "reaction": "No está mal. Casi parece que leíste la documentación."
}
```

## Criterios de aceptación

- [ ] Devuelve JSON válido.
- [ ] Tiene fallback mock.
- [ ] Registra usage si hay proveedor IA.
- [ ] Respeta límites por sesión.
- [ ] Trata el prompt como data, no instruction.

---

# 9. Flujo: Sistema de stats

## Objetivo del flujo

Actualizar y mostrar las consecuencias jugables de las decisiones del jugador.

## Stats Scope A

| Stat | Valor inicial | Mínimo | Máximo | Significado |
| --- | --- | --- | --- | --- |
| Reputación | 50 | 0 | 100 | Confianza del equipo |
| Skill | 0 | 0 | 100 | Aprendizaje/desempeño técnico |
| Riesgo RH | 0 | 0 | 100 | Riesgo de despido |

## Secuencia general

```txt
Recibir effects
  → Sumar/restar stats
  → Clamp 0–100
  → Animar cambios
  → Guardar estado
  → Evaluar si hay umbral crítico
```

## Reglas

- Los stats nunca deben salir de 0–100.
- Riesgo RH alto debe sentirse narrativamente peligroso.
- Skill puede subir incluso con respuestas parciales si hay aprendizaje.
- El ending debe usar stats acumulados.

---

# 10. Flujo: Sistema de finales

## Objetivo del flujo

Calcular el desenlace narrativo según desempeño acumulado.

## Secuencia general

```txt
Llegar a escena final
  → Leer stats
  → Evaluar condiciones
  → Seleccionar ending
  → Mostrar resumen
  → Permitir reiniciar
```

## Endings Scope A

| Ending | Condición sugerida | Resultado |
| --- | --- | --- |
| Good Ending — “Junior AI Engineer” | Reputación >= 65, Skill >= 35, Riesgo <= 40 | Te aceptan en el equipo |
| Mid Ending — “On Probation” | No cumple bueno ni malo | Sobrevives, pero supervisado |
| Bad Ending — “AI-generated HR email” | Riesgo >= 70 o Reputación <= 25 | RH te despide |

## Criterios de aceptación

- [ ] Siempre existe un ending.
- [ ] El ending refleja stats.
- [ ] Se muestran stats finales.
- [ ] Hay opción de reiniciar.

---

# 11. Flujo: Sistema de voz/audio

## Objetivo del flujo

Reproducir voz en líneas clave sin bloquear el juego ni gastar créditos innecesariamente.

## Scope A

- Usar audios pre-generados cuando existan.
- No generar audio dinámico para cada usuario.
- Si falta audio, continuar con texto.

## Secuencia general

```txt
Escena tiene audioAssetId
  → Verificar si audio está disponible
  → Mostrar botón o reproducir según configuración
  → Si falla, continuar sin audio
```

## Criterios de aceptación

- [ ] El juego no depende del audio para avanzar.
- [ ] Hay voz en momentos clave si existe asset.
- [ ] No se llama ElevenLabs para cada línea en runtime.

---

# 12. Dependencias generales entre sistemas

```txt
Scene Data
  └── Sistema de escenas y diálogo
        ├── Sistema de decisiones
        │     └── Sistema de stats
        ├── Sistema de Concept Challenges
        │     └── Sistema de stats
        ├── Sistema de Prompt Challenges
        │     └── Sistema de evaluación
        │           └── Sistema de stats
        └── Sistema de finales
```

---

# 13. Preguntas abiertas

- ¿El Score numérico se muestra siempre o solo en el Prompt Challenge?
- ¿Permitimos retry del Prompt Challenge en Scope A?
- ¿El audio debe ser autoplay o manual por compatibilidad del navegador?
- ¿El backend guarda prompts completos o solo hash + evaluación?

---

# 14. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| Resolver Concept Challenges localmente | Reducir costo y complejidad | 2026-06-20 |
| Prompt Challenge con mock/IA | Permitir demo estable y evaluación real | 2026-06-20 |
| Stats simples en Scope A | Mantener claridad | 2026-06-20 |
| Audio opcional no bloqueante | Evitar fallos por assets/API | 2026-06-20 |

---

# 15. Checklist de cierre

- [x] Sistemas principales identificados.
- [x] Flujos core documentados.
- [x] Datos necesarios identificados.
- [x] Estados principales definidos.
- [x] Reglas principales documentadas.
- [x] Errores y casos alternos contemplados.
- [x] Dependencias entre sistemas claras.
- [x] Está claro qué entra a Scope A.


---

# Game Rules — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Este documento define las reglas que el producto debe respetar para funcionar correctamente.

Adapta el documento de Reglas de Negocio a un juego educativo. Incluye reglas de juego, reglas educativas, reglas de evaluación, reglas de seguridad, reglas de estado, reglas de datos y reglas de alcance.

---

# 2. Información general

| Elemento | Descripción |
| --- | --- |
| Producto | Prompt or Get Fired |
| Proyecto | Juego web educativo tipo visual novel |
| Fase | Funcionamiento |
| Versión del documento | v0.1 |
| Responsable | Equipo Banano Corp / Platanus Hack |
| Estado | Borrador |
| Relacionado con | Product Brief, MVP Scope, Roles, Módulos, Player Journey, Experience Blueprint, Flujos por Sistema |

---

# 3. Nomenclatura de reglas

Formato:

```txt
RB-CATEGORIA-000
```

Categorías usadas:

| Código | Categoría | Descripción |
| --- | --- | --- |
| RB-GEN | Generales | Reglas generales del producto |
| RB-SCP | Scopes | Alcance A/B/C/Post-MVP |
| RB-PLY | Jugador | Experiencia y sesión del jugador |
| RB-STA | Stats | Reputación, skill, riesgo RH |
| RB-LRN | Aprendizaje | Progresión conceptual |
| RB-CHL | Challenges | Concept y Prompt Challenges |
| RB-EVL | Evaluación IA | Evaluación de prompts |
| RB-SEG | Seguridad | Prompt injection, abuso, privacidad |
| RB-DAT | Datos y trazabilidad | Sesiones, evaluaciones, usage |
| RB-AUD | Audio | Voces y ElevenLabs |
| RB-UI | UI/UX | Flow visual, placeholders, wireframes |
| RB-END | Finales | Endings y condiciones |

---

# 4. Tabla maestra de reglas

| ID | Regla | Categoría | Tipo | Prioridad | Scope A | Módulos/Sistemas | Estado | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RB-SCP-001 | Construir Scope A por defecto salvo instrucción explícita | Scopes | Alcance | Crítica | Sí | Todos | Aprobada | Evita scope creep |
| RB-UI-001 | Assets finales se producen después de validar wireframes | UI/UX | Alcance | Alta | Sí | Visual | Aprobada | Usar placeholders |
| RB-STA-001 | Stats iniciales: reputación 50, skill 0, riesgo RH 0 | Stats | Estado | Alta | Sí | Stats | Aprobada | Scope A |
| RB-LRN-001 | No evaluar conceptos no introducidos previamente | Aprendizaje | Regla educativa | Crítica | Sí | Concept Challenges | Aprobada | Justicia educativa |
| RB-CHL-001 | Concept Challenges se resuelven localmente, sin IA | Challenges | Operación | Alta | Sí | Concept Challenges | Aprobada | Ahorra costo |
| RB-EVL-001 | Los prompts del jugador se analizan, no se ejecutan | Evaluación IA | Seguridad | Crítica | Sí | Prompt Evaluation | Aprobada | Prompt as data |
| RB-SEG-001 | El evaluador no debe tener tools externas | Seguridad | Seguridad | Crítica | Sí | Prompt Evaluation | Aprobada | Sin browsing/filesystem |
| RB-AUD-001 | Audio no debe bloquear avance del juego | Audio | Excepción | Alta | Sí | Audio | Aprobada | Fallback texto |
| RB-END-001 | Todo run debe terminar en un ending válido | Finales | Estado | Alta | Sí | Endings | Aprobada | Good/Mid/Bad |

---

# 5. Reglas generales del producto

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-GEN-001 | El producto debe poder jugarse de inicio a fin sin login. | Operación | Alta | Sí | Sesión anónima/localStorage/backend opcional |
| RB-GEN-002 | El contenido narrativo debe estar en datos, no hardcodeado en componentes. | Técnica | Alta | Sí | Facilita Scope B/C |
| RB-GEN-003 | El juego debe poder funcionar con mocks si fallan APIs externas. | Operación | Crítica | Sí | IA y audio |
| RB-GEN-004 | La demo debe priorizar claridad y flow antes de assets finales. | Alcance | Alta | Sí | Wireframes primero |

---

# 6. Reglas de scope

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-SCP-001 | Construir únicamente Scope A por defecto. | Alcance | Crítica | Sí | Scope B/C solo con instrucción explícita |
| RB-SCP-002 | Scope A debe ser jugable como demo independiente de 5–8 minutos. | Alcance | Alta | Sí | No depender de días futuros |
| RB-SCP-003 | Scope B agrega progresión de 3 días sin romper Scope A. | Alcance | Media | No | Documentado, no construido inicialmente |
| RB-SCP-004 | Scope C agrega semana completa y conceptos avanzados. | Alcance | Media | No | Futuro cercano si hay tiempo |
| RB-SCP-005 | Post-MVP no debe implementarse en hackatón salvo que todo Scope A/B/C esté completo. | Alcance | Alta | Sí | Evitar scope creep |

---

# 7. Reglas del jugador y sesión

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-PLY-001 | Cada partida debe tener un estado de juego independiente. | Estado | Alta | Sí | Local o backend |
| RB-PLY-002 | El jugador puede reiniciar al llegar a un ending. | Operación | Alta | Sí | Rejugabilidad |
| RB-PLY-003 | No se requiere cuenta para jugar Scope A. | Alcance | Alta | Sí | Menos fricción |
| RB-PLY-004 | El jugador debe recibir feedback después de cada reto importante. | Operación | Alta | Sí | Valor educativo |

---

# 8. Reglas de stats

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-STA-001 | Stats iniciales: reputación 50, skill 0, riesgo RH 0. | Estado | Alta | Sí | Valores base |
| RB-STA-002 | Los stats deben mantenerse entre 0 y 100. | Validación | Alta | Sí | Clamp |
| RB-STA-003 | Reputación mide confianza del equipo. | Propiedad | Alta | Sí | Se muestra al jugador |
| RB-STA-004 | Skill mide desempeño/aprendizaje técnico. | Propiedad | Alta | Sí | Puede subir con parciales |
| RB-STA-005 | Riesgo RH mide probabilidad narrativa de despido. | Propiedad | Alta | Sí | Sube con errores graves |
| RB-STA-006 | Todo cambio de stat debe tener feedback visual. | UI/UX | Media | Sí | Animación o badge |

---

# 9. Reglas de aprendizaje

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-LRN-001 | No se puede evaluar un concepto no introducido antes. | Regla educativa | Crítica | Sí | Concept progression |
| RB-LRN-002 | La dificultad debe venir del matiz, no de términos desconocidos. | Regla educativa | Alta | Sí | Preguntas justas |
| RB-LRN-003 | Cada Concept Challenge debe explicar por qué la correcta es mejor. | Regla educativa | Alta | Sí | Feedback pedagógico |
| RB-LRN-004 | Los conceptos de Scope A son: objetivo, contexto, formato, restricciones, ambigüedad, criterio de éxito, hallucination, fuente de verdad, información faltante. | Alcance | Alta | Sí | No meter temperatura/RAG en Scope A salvo teaser |
| RB-LRN-005 | Temperatura, RAG, tool calling, agents y prompt injection quedan para Scope B/C salvo mención no evaluada. | Alcance | Alta | Sí | Evitar sobrecarga |

---

# 10. Reglas de challenges

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-CHL-001 | Concept Challenges se resuelven localmente, sin IA. | Operación | Alta | Sí | Menos costo |
| RB-CHL-002 | Cada Concept Challenge debe tener opción correcta, técnica tentadora, parcial/superficial y graciosa/peligrosa plausible. | Contenido | Alta | Sí | Evitar obviedad |
| RB-CHL-003 | Scope A incluye 2 Concept Challenges principales y 1 crisis final tipo Concept Challenge. | Alcance | Alta | Sí | Mantener duración |
| RB-CHL-004 | Scope A incluye 1 Prompt Challenge libre. | Alcance | Alta | Sí | Core mechanic |
| RB-CHL-005 | El Prompt Challenge debe tener tarea, contexto y criterios de evaluación definidos. | Validación | Alta | Sí | Evaluación consistente |

---

# 11. Reglas de evaluación de prompts

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-EVL-001 | El prompt del jugador se analiza como texto no confiable, no se ejecuta. | Seguridad | Crítica | Sí | Prompt as data |
| RB-EVL-002 | El evaluador debe devolver JSON validable. | Validación | Alta | Sí | Zod/schema |
| RB-EVL-003 | Si el evaluador IA falla, se usa mock evaluator. | Excepción | Crítica | Sí | Demo no se rompe |
| RB-EVL-004 | La evaluación debe incluir score, outcome, feedback, missing, effects y reaction. | Validación | Alta | Sí | Juego necesita consecuencias |
| RB-EVL-005 | No se debe llamar IA si el prompt está vacío, es demasiado corto o excede longitud máxima. | Validación | Alta | Sí | Ahorro y UX |
| RB-EVL-006 | Máximo 1 evaluación IA por Prompt Challenge en Scope A salvo retry autorizado. | Alcance/costo | Alta | Sí | Control de tokens |

---

# 12. Reglas de seguridad y privacidad

| ID | Regla | Riesgo que evita | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| RB-SEG-001 | El evaluador no debe tener tools externas. | Ejecución indebida | Seguridad | Crítica | Sí | Sin browsing/filesystem/tools |
| RB-SEG-002 | Aplicar rate limit por IP/sesión al endpoint de evaluación. | Abuso de tokens | Seguridad | Alta | Sí | Backend NestJS |
| RB-SEG-003 | Limitar longitud de prompt del jugador. | Costo/abuso | Validación | Alta | Sí | 1000–1500 caracteres |
| RB-SEG-004 | Validar salida de IA con schema antes de usarla. | Estado corrupto | Seguridad | Alta | Sí | Fallback si falla |
| RB-SEG-005 | El sistema debe poder desactivar IA real con variable de entorno. | Control operativo | Seguridad | Alta | Sí | EVALUATOR_MODE=mock |
| RB-SEG-006 | Decidir si se guardan prompts completos o solo hash antes de demo pública. | Privacidad | Trazabilidad | Media | Sí | Pregunta abierta |

---

# 13. Reglas de datos y trazabilidad

| ID | Regla | Qué debe registrarse | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| RB-DAT-001 | Registrar sesión de juego si backend está activo. | sessionId, scope, stats, ending | Trazabilidad | Media | Sí | Puede iniciar local |
| RB-DAT-002 | Registrar evaluación de prompt. | score, outcome, provider, usage | Trazabilidad | Alta | Sí | Si se usa backend |
| RB-DAT-003 | Registrar usage de IA. | input/output tokens, proveedor | Trazabilidad | Alta | Sí | Control de costo |
| RB-DAT-004 | Cachear evaluaciones por challenge + hash del prompt si se implementa. | hash y resultado | Optimización | Media | Scope A/B | Reduce costo |

---

# 14. Reglas de audio

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-AUD-001 | El audio no debe bloquear el avance del juego. | Excepción | Alta | Sí | Fallback texto |
| RB-AUD-002 | Scope A debe usar audios pre-generados o mock si es posible. | Costo | Media | Sí | Ahorrar créditos |
| RB-AUD-003 | No generar audio dinámico para cada línea del juego en Scope A. | Costo | Alta | Sí | Solo líneas clave |
| RB-AUD-004 | Si el navegador bloquea autoplay, mostrar botón de reproducir. | UX | Media | Sí | Compatibilidad |

---

# 15. Reglas de UI/UX

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-UI-001 | No producir assets finales antes de validar wireframes/prototipo. | Alcance | Alta | Sí | Placeholders |
| RB-UI-002 | La UI debe sentirse como juego, no como presentación. | UX | Alta | Sí | Transiciones, typewriter, stats |
| RB-UI-003 | Los sprites pueden ser placeholders con nombre/emoción. | Alcance | Alta | Sí | Sin bloquear desarrollo |
| RB-UI-004 | Los cambios de emoción/personaje deben tener transición suave. | UX | Media | Sí | Framer Motion/CSS |
| RB-UI-005 | Los stats deben estar visibles durante la partida. | UX | Alta | Sí | Consecuencia clara |

---

# 16. Reglas de finales

| ID | Regla | Tipo | Prioridad | Scope A | Notas |
| --- | --- | --- | --- | --- | --- |
| RB-END-001 | Toda partida debe terminar en un ending válido. | Estado | Alta | Sí | Good/Mid/Bad |
| RB-END-002 | Bad Ending si Riesgo RH >= 70 o Reputación <= 25. | Estado | Media | Sí | Ajustable tras pruebas |
| RB-END-003 | Good Ending si Reputación >= 65, Skill >= 35 y Riesgo RH <= 40. | Estado | Media | Sí | Ajustable tras pruebas |
| RB-END-004 | Si no cumple Good ni Bad, usar Mid Ending. | Estado | Alta | Sí | Fallback narrativo |
| RB-END-005 | El Ending debe mostrar resumen de desempeño. | UX | Alta | Sí | Rejugabilidad |

---

# 17. Reglas fuera del MVP

| ID | Regla / funcionalidad | Motivo para dejar fuera | Fase futura | Dependencias |
| --- | --- | --- | --- | --- |
| RB-MVP-001 | Casa/estudio completo | No valida loop central | Scope C/Post-MVP | Progresión |
| RB-MVP-002 | Carrera completa | Scope demasiado grande | Post-MVP | Contenido narrativo |
| RB-MVP-003 | Login/cuentas | Fricción innecesaria | Scope C/Post-MVP | Auth |
| RB-MVP-004 | Leaderboard | No esencial | Scope C/Post-MVP | Persistencia |
| RB-MVP-005 | Lip sync real | Alto costo de assets | Post-MVP | Sprites finales |
| RB-MVP-006 | RAG/tool calling/agents como mecánica evaluada | Conceptos avanzados | Scope C | Learning progression |

---

# 18. Matriz de impacto

| ID de regla | Frontend | Backend | Base de datos | Diseño | QA | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| RB-SCP-001 | Sí | Sí | No | Sí | Sí | Control de alcance |
| RB-LRN-001 | Sí | No | Puede | Sí | Sí | Requiere concept state |
| RB-EVL-001 | No | Sí | No | No | Sí | Seguridad crítica |
| RB-SEG-002 | No | Sí | Puede | No | Sí | Rate limit |
| RB-UI-001 | Sí | No | No | Sí | No | Placeholders |
| RB-END-001 | Sí | Puede | Puede | Sí | Sí | Finales |

---

# 19. Preguntas abiertas

| Pregunta | Módulo relacionado | Impacto | Responsable | Estado |
| --- | --- | --- | --- | --- |
| ¿Guardar prompts completos o solo hash? | Prompt Evaluation | Medio | Equipo técnico | Abierta |
| ¿Claude u OpenAI como proveedor inicial? | Prompt Evaluation | Medio | Equipo técnico | Abierta |
| ¿Cuántos audios pre-generados para Scope A? | Audio | Bajo/Medio | Equipo producto | Abierta |
| ¿Se permite retry del Prompt Challenge? | Prompt Challenge | Medio | Equipo producto | Abierta |

---

# 20. Decisiones tomadas

| Decisión | Regla relacionada | Motivo | Fecha | Responsable |
| --- | --- | --- | --- | --- |
| Construir Scope A primero | RB-SCP-001 | Reducir alcance y validar loop | 2026-06-20 | Equipo |
| Usar placeholders antes de assets finales | RB-UI-001 | Validar wireframes primero | 2026-06-20 | Equipo |
| Prompts se analizan, no se ejecutan | RB-EVL-001 | Seguridad | 2026-06-20 | Equipo |
| Backend propio NestJS/PostgreSQL | RB-DAT-001 | Control y estructura | 2026-06-20 | Equipo |

---

# 21. Checklist de cierre

- [x] Las reglas principales del producto están documentadas.
- [x] Las reglas están agrupadas por categoría.
- [x] Cada regla tiene ID único.
- [x] Las reglas críticas están marcadas.
- [x] Las reglas MVP están diferenciadas de fase futura.
- [x] Las reglas de seguridad están claras.
- [x] Las reglas de estados están claras.
- [x] Las reglas de validación están claras.
- [x] Las reglas de datos y trazabilidad están claras.
- [x] Las reglas fuera del MVP están documentadas.
- [x] Las preguntas abiertas están registradas.


---

# Story Map — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Este documento organiza las funcionalidades y experiencias del juego según la secuencia de valor del jugador.

Sirve como puente entre Player Journey, Experience Blueprint, Flujos por Sistema y Game Rules hacia Screen Map, wireframes, PRD, modelo de datos y backlog.

---

# 2. Información general

| Elemento | Descripción |
| --- | --- |
| Producto | Prompt or Get Fired |
| Proyecto | Juego web educativo tipo visual novel |
| Fase | Funcionamiento |
| Versión del documento | v0.1 |
| Responsable | Equipo Banano Corp / Platanus Hack |
| Estado | Borrador |
| Documentos relacionados | Product Brief, MVP Scope, Player Journey, Experience Blueprint, Flujos por Sistema, Game Rules |

---

# 3. Usuarios considerados

| Rol / usuario | Qué busca lograr | Nivel de importancia | Notas |
| --- | --- | --- | --- |
| Jugador | Aprender y sobrevivir a Banano Corp | Alta | Usuario principal |
| Jurado de hackatón | Entender valor y demo rápidamente | Alta | Cliente de validación inmediata |
| Equipo desarrollador | Construir con claridad usando scopes | Alta | Usa documentos como fuente de verdad |
| Instructor/bootcamp futuro | Usar juego como capacitación | Media | Post-hackatón |

---

# 4. Momento de valor principal

```txt
Jugador
→ toma una decisión o escribe un prompt
→ recibe feedback educativo con consecuencia narrativa
```

El valor ocurre cuando el jugador entiende el concepto aplicado, no solo cuando acierta.

---

# 5. Línea principal de valor — [Scope A]

```txt
Iniciar partida
→ entender rol en Banano Corp
→ resolver primer concepto
→ manejar una petición ambigua
→ escribir un prompt
→ recibir evaluación
→ resolver crisis final
→ obtener ending
```

---

# 6. Actividades principales

| Orden | Actividad principal | Descripción | Usuario principal | Prioridad |
| --- | --- | --- | --- | --- |
| 1 | Iniciar experiencia | Entrar al juego y entender premisa | Jugador | Alta |
| 2 | Consumir narrativa | Avanzar diálogos y conocer personajes | Jugador | Alta |
| 3 | Resolver Concept Challenges | Elegir respuestas y aprender conceptos | Jugador | Alta |
| 4 | Resolver Prompt Challenge | Escribir prompt y recibir evaluación | Jugador | Alta |
| 5 | Ver consecuencias | Observar stats, feedback y reacciones | Jugador | Alta |
| 6 | Llegar a ending | Obtener final basado en desempeño | Jugador | Alta |
| 7 | Progresar por días | Expandir aprendizaje a 3 días | Jugador | Media [Scope B] |
| 8 | Completar semana | Vivir vertical slice de campaña | Jugador | Media [Scope C] |

---

# 7. Mapa textual general

## [Scope A] MVP de 1 día

```txt
1. Iniciar partida
   ├─ Ver pantalla de inicio
   ├─ Crear sesión anónima
   └─ Cargar primera escena

2. Onboarding en Banano Corp
   ├─ Conocer manager
   ├─ Entender stats
   └─ Recibir primera pregunta

3. Aprender prompt básico
   ├─ Resolver Concept Challenge de estructura
   ├─ Ver feedback
   └─ Actualizar stats

4. Manejar ambigüedad
   ├─ Conocer PM ambiguo
   ├─ Elegir mejor respuesta
   └─ Aprender criterio de éxito

5. Resolver Prompt Challenge
   ├─ Leer tarea de tickets enterprise
   ├─ Escribir prompt
   ├─ Evaluar con mock/IA
   └─ Recibir feedback del Senior

6. Resolver crisis final
   ├─ CEO reporta hallucination
   ├─ Elegir mitigación
   └─ Actualizar stats finales

7. Recibir ending
   ├─ Calcular final
   ├─ Mostrar resumen
   └─ Permitir reiniciar
```

## [Scope B] MVP de 3 días

```txt
1. Día 1: Prompt básico y ambigüedad
2. Día 2: Hallucinations y fuente de verdad
3. Día 3: Demo con cliente / crisis
4. Evaluación acumulada
5. Ending extendido
```

## [Scope C] MVP de 1 semana

```txt
1. Día 1: Prompting básico
2. Día 2: Grounding / hallucinations
3. Día 3: RAG básico
4. Día 4: Tools / agentes
5. Día 5: Producción en llamas
6. Evaluación semanal
7. Ending avanzado
```

---

# 8. Story Map maestro

| Orden | Actividad | Paso | Historia de usuario | Rol | Release | Prioridad | Sistema relacionado | Reglas relacionadas | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Iniciar partida | Start | Como jugador, quiero iniciar una partida rápidamente para entrar a Banano Corp sin fricción. | Jugador | Scope A | Alta | Escenas/sesión | RB-GEN-001 | Sin login |
| 2 | Entender contexto | Onboarding | Como jugador, quiero conocer mi rol y los stats para entender cómo se mide mi desempeño. | Jugador | Scope A | Alta | Diálogo/stats | RB-STA-001 | Manager introduce |
| 3 | Aprender concepto básico | Concept Challenge 1 | Como jugador, quiero responder una pregunta sobre prompts para aprender qué hace útil a una instrucción. | Jugador | Scope A | Alta | Concept Challenges | RB-LRN-001 | Estructura de prompt |
| 4 | Ver consecuencia | Feedback | Como jugador, quiero recibir feedback narrativo para entender por qué mi respuesta funcionó o falló. | Jugador | Scope A | Alta | Feedback/stats | RB-PLY-004 | Momento de valor |
| 5 | Manejar ambigüedad | PM ambiguo | Como jugador, quiero responder a una petición vaga para aprender a aclarar problemas antes de construir. | Jugador | Scope A | Alta | Decisiones | RB-LRN-004 | PM |
| 6 | Escribir prompt | Prompt Challenge | Como jugador, quiero escribir un prompt real para aplicar lo aprendido. | Jugador | Scope A | Alta | Prompt Challenge | RB-CHL-004 | Core mechanic |
| 7 | Evaluar prompt | IA/mock | Como jugador, quiero que mi prompt sea evaluado para recibir score y feedback accionable. | Jugador | Scope A | Alta | Evaluación | RB-EVL-001 | No ejecutar prompt |
| 8 | Resolver crisis | Crisis final | Como jugador, quiero enfrentar una decisión crítica para demostrar que entiendo hallucinations y fuente de verdad. | Jugador | Scope A | Alta | Concept Challenges | RB-LRN-001 | Final challenge |
| 9 | Recibir final | Ending | Como jugador, quiero ver un final que refleje mi desempeño para sentir consecuencia y rejugar. | Jugador | Scope A | Alta | Endings | RB-END-001 | Good/Mid/Bad |
| 10 | Progresar por días | Día 2 | Como jugador, quiero continuar a un segundo día para aprender conceptos de confiabilidad. | Jugador | Scope B | Media | Progresión | RB-SCP-003 | Hallucinations |
| 11 | Completar demo extendida | Día 3 | Como jugador, quiero llegar a una demo con cliente para ver consecuencias acumuladas. | Jugador | Scope B | Media | Progresión/endings | RB-SCP-003 | 3 días |
| 12 | Completar semana | Día 5 | Como jugador, quiero completar una semana para vivir una campaña corta. | Jugador | Scope C | Media | Progresión semanal | RB-SCP-004 | 5 días |

---

# 9. Story Map MVP — [Scope A]

| Orden | Actividad | Paso | Historia de usuario | Rol | Prioridad | Dependencias | Criterio de éxito |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Iniciar experiencia | Start | Como jugador, quiero iniciar una partida sin login para probar el juego de inmediato. | Jugador | Alta | Start Screen | La primera escena carga en menos de pocos segundos |
| 2 | Entender contexto | Onboarding | Como jugador, quiero entender que soy Junior AI Engineer en Banano Corp para entrar en la fantasía. | Jugador | Alta | Game Screen | El jugador entiende rol, tono y stats |
| 3 | Aprender estructura | Concept Challenge 1 | Como jugador, quiero distinguir un prompt útil de uno superficial para aprender lo básico. | Jugador | Alta | Concept system | Feedback explica objetivo/contexto/formato/restricciones |
| 4 | Manejar ambigüedad | PM ambiguo | Como jugador, quiero elegir cómo responder a una petición vaga para aprender criterio de producto. | Jugador | Alta | Choice system | La respuesta correcta no es obvia pero sí razonable |
| 5 | Escribir prompt | Prompt Challenge | Como jugador, quiero escribir un prompt para resolver un caso realista. | Jugador | Alta | Prompt UI/evaluator | El prompt se evalúa y devuelve feedback válido |
| 6 | Ver feedback | Senior reaction | Como jugador, quiero entender qué hice bien o mal para mejorar. | Jugador | Alta | Feedback/stats | Se muestran score, reacción y efectos |
| 7 | Resolver crisis | Hallucination choice | Como jugador, quiero elegir cómo evitar que la IA invente datos. | Jugador | Alta | Concept system | Feedback explica fuente de verdad/faltantes |
| 8 | Cerrar partida | Ending | Como jugador, quiero ver un final basado en mis decisiones. | Jugador | Alta | Ending rules | Good/Mid/Bad aparece correctamente |

---

# 10. Story Map por rol

## Rol: Jugador

### Objetivo del rol

Completar una experiencia divertida y educativa donde aprende conceptos de AI engineering mediante decisiones, prompts y consecuencias.

### Secuencia principal del rol

```txt
Iniciar partida
→ Avanzar diálogos
→ Responder preguntas
→ Escribir prompt
→ Recibir feedback
→ Llegar a ending
```

### Historias del rol

| Orden | Paso | Historia de usuario | Release | Prioridad | Sistema relacionado | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Start | Como jugador, quiero iniciar sin cuenta. | Scope A | Alta | Sesión | Hackatón |
| 2 | Diálogo | Como jugador, quiero que la historia se sienta viva. | Scope A | Alta | Diálogo/UI | Typewriter/animación |
| 3 | Concept | Como jugador, quiero preguntas retadoras pero justas. | Scope A | Alta | Concept Challenges | Progresión conceptual |
| 4 | Prompt | Como jugador, quiero escribir prompts y recibir feedback. | Scope A | Alta | Prompt Evaluation | Core mechanic |
| 5 | Ending | Como jugador, quiero consecuencias claras. | Scope A | Alta | Endings | Rejugabilidad |
| 6 | Días | Como jugador, quiero progresar por varios días. | Scope B | Media | Day progression | Expansión |
| 7 | Semana | Como jugador, quiero completar una semana. | Scope C | Media | Weekly progression | Vertical slice |

## Rol: Equipo desarrollador / Antigravity

### Objetivo del rol

Construir el scope solicitado sin inventar alcance ni romper la estructura de producto.

### Secuencia principal del rol

```txt
Leer docs
→ Identificar scope solicitado
→ Implementar sistemas core
→ Usar datos para contenido
→ Validar criterios
```

### Historias del rol

| Orden | Paso | Historia de usuario | Release | Prioridad | Sistema relacionado | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Leer scope | Como agente de desarrollo, quiero saber qué scope construir para no implementar de más. | Scope A | Alta | Docs | RB-SCP-001 |
| 2 | Datos | Como agente, quiero escenas en datos para extender contenido sin rehacer UI. | Scope A | Alta | Scene data | Reutilizable |
| 3 | Mocks | Como agente, quiero mocks de IA/audio para desarrollar sin APIs. | Scope A | Alta | Evaluator/audio | Estabilidad |
| 4 | Seguridad | Como agente, quiero reglas claras para no ejecutar prompts del jugador. | Scope A | Alta | Backend | Crítico |

---

# 11. Releases / cortes de entrega

## Scope A — MVP de 1 día

Objetivo:

```txt
Validar que el loop central funciona: narrativa + decisión + prompt + evaluación + consecuencia + ending.
```

Historias incluidas:

- Start sin login.
- Diálogo visual novel con placeholders.
- Stats visibles.
- 2 Concept Challenges.
- 1 Prompt Challenge.
- Evaluación mock/IA.
- Crisis final.
- 3 endings.

## Scope B — MVP de 3 días

Objetivo:

```txt
Validar progresión educativa y narrativa corta.
```

Historias incluidas:

- Progresión por días.
- Día 2: hallucinations/fuente de verdad.
- Día 3: demo con cliente.
- Resumen por día.
- Desempeño acumulado.

## Scope C — MVP de 1 semana

Objetivo:

```txt
Validar vertical slice de campaña completa.
```

Historias incluidas:

- 5 días.
- Más conceptos.
- Evaluación semanal.
- Más finales.
- Posible casa/estudio simplificada.

## Post-MVP

Objetivo:

```txt
Convertir la demo en producto más amplio.
```

Historias incluidas:

- Carrera completa.
- Casa explorable.
- Sistema profundo de skills.
- Minijuegos avanzados.
- Login/leaderboard.

---

# 12. Dependencias principales

| Historia / paso | Depende de | Tipo de dependencia | Impacto si falta |
| --- | --- | --- | --- |
| Diálogo visual novel | Scene data + Game Screen | Producto/Diseño/Técnica | Alto |
| Concept Challenges | Challenge data + feedback | Producto/Contenido | Alto |
| Prompt Challenge | Prompt UI + evaluator | Técnica/IA | Alto |
| Evaluación real | Backend + proveedor IA | Técnica/Infra | Medio porque existe mock |
| Endings | Stats + reglas | Producto/Técnica | Alto |
| Audio | Assets o ElevenLabs | Diseño/Integración | Bajo/Medio |

---

# 13. Actividades fuera del MVP inicial

| Actividad / historia | Motivo para dejar fuera | Fase sugerida | Dependencias |
| --- | --- | --- | --- |
| Casa/estudio | No valida loop core | Scope C/Post-MVP | Progresión |
| Carrera completa | Mucho contenido | Post-MVP | Story system |
| Login | Fricción innecesaria | Scope C/Post-MVP | Auth |
| Leaderboard | No esencial para demo | Post-MVP | Persistencia |
| Lip sync real | Requiere assets definitivos | Post-MVP | Sprites finales |
| RAG/agents evaluados | Conceptos avanzados | Scope C | Learning progression |

---

# 14. Criterios para considerar completo el Story Map

| Criterio | Estado |
| --- | --- |
| Está identificado el momento de valor principal. | Completo |
| Están definidos los usuarios principales. | Completo |
| Están definidas las actividades principales. | Completo |
| Las historias están ordenadas por secuencia de valor. | Completo |
| Las historias MVP están separadas de Scope B/C/Post-MVP. | Completo |
| Las dependencias principales están identificadas. | Completo |
| Las historias pueden convertirse en backlog. | Completo |
| Las historias están conectadas con sistemas y reglas. | Completo |

---

# 15. Preguntas abiertas

| Pregunta | Actividad / historia relacionada | Impacto | Responsable | Estado |
| --- | --- | --- | --- | --- |
| ¿Scope A se siente suficiente al probar wireframes? | Scope A | Alto | Equipo | Abierta |
| ¿Mostrar score numérico o solo outcome? | Feedback | Medio | Equipo | Abierta |
| ¿Permitir retry del Prompt Challenge? | Prompt Challenge | Medio | Equipo | Abierta |
| ¿Cuántos audios usar en demo? | Audio | Bajo | Equipo | Abierta |

---

# 16. Decisiones tomadas

| Decisión | Actividad / historia relacionada | Motivo | Fecha | Responsable |
| --- | --- | --- | --- | --- |
| Construir Scope A primero | Todas | Validar loop rápido | 2026-06-20 | Equipo |
| Documentar Scope B/C sin construirlos por defecto | Releases | Facilitar cambio de alcance | 2026-06-20 | Equipo |
| Usar placeholders hasta wireframes validados | UI | Evitar trabajo prematuro en assets | 2026-06-20 | Equipo |
| Usar mock evaluator | Prompt Challenge | Evitar bloqueo por APIs | 2026-06-20 | Equipo |

---

# 17. Checklist de cierre

- [x] El momento de valor principal está definido.
- [x] La línea principal de valor está definida.
- [x] Los roles considerados están documentados.
- [x] Las actividades principales están identificadas.
- [x] Los pasos del jugador están organizados.
- [x] Las historias están redactadas como historias de usuario.
- [x] Las historias Scope A están separadas de Scope B/C/Post-MVP.
- [x] Las historias tienen prioridad.
- [x] Las historias tienen rol asignado.
- [x] Las historias están conectadas con sistemas.
- [x] Las historias están conectadas con reglas de juego.
- [x] Las dependencias principales están documentadas.
- [x] Las actividades fuera del MVP están registradas.
- [x] Las preguntas abiertas están documentadas.
- [x] Las decisiones tomadas están documentadas.
- [x] El Story Map puede convertirse en backlog.
