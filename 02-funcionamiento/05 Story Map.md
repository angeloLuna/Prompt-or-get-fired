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
