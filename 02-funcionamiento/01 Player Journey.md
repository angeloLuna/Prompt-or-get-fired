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
