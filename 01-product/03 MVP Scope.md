# MVP del producto — Prompt or Get Fired

## 1. Objetivo del documento

Este documento define el alcance del MVP de **Prompt or Get Fired** usando tres posibles niveles de scope: [Scope A], [Scope B] y [Scope C].

El objetivo es que el equipo pueda construir primero una demo mínima de un día y, si el prototipo se siente pequeño, subir a tres días o una semana sin cambiar la documentación base.

---

# 2. Definición del MVP

## Descripción breve del MVP

El MVP permitirá que un jugador viva una experiencia corta como Junior AI Engineer en Banano Corp. El jugador leerá diálogos, tomará decisiones, responderá preguntas conceptuales y escribirá prompts que serán evaluados para generar consecuencias narrativas.

## Propuesta de valor que debe validar

Validar si una visual novel educativa puede enseñar conceptos reales de prompting y AI engineering de forma divertida, clara y memorable.

## Usuario principal del MVP

| Usuario | Por qué es prioritario |
| --- | --- |
| Jugador interesado en IA / developer / estudiante tech | Puede entender el contexto, valorar el aprendizaje y dar feedback rápido |

## Cliente principal del MVP

| Cliente | Por qué es prioritario |
| --- | --- |
| Jurado y audiencia del hackatón | Validan si la demo comunica valor e innovación rápidamente |

---

# 3. Problema principal a validar

## Problema

Aprender AI engineering de forma práctica puede ser aburrido, abstracto o demasiado técnico. Muchas personas conocen prompts básicos, pero no practican el criterio necesario para usarlos en situaciones reales.

## Situación actual

Los usuarios aprenden con cursos, videos, documentación, ejemplos sueltos o prueba y error con modelos.

## Dolor principal

Falta una experiencia que convierta conceptos como contexto, restricciones, hallucinations y evaluación en decisiones concretas con consecuencias.

## Resultado esperado

El jugador aprende al menos un concepto útil y entiende que escribir buenos prompts requiere contexto, formato, restricciones y criterio.

---

# 4. Hipótesis del MVP

## Hipótesis principal

Creemos que usuarios interesados en IA jugarán una experiencia narrativa corta para aprender prompting y AI engineering, porque les permite practicar con feedback inmediato y humor en lugar de solo leer teoría.

## Hipótesis secundarias

| Hipótesis | Cómo se validará |
| --- | --- |
| La experiencia se siente como juego, no como presentación | Observación durante pruebas y feedback cualitativo |
| El usuario entiende la relación entre decisiones y stats | El usuario puede explicar por qué ganó/perdió |
| El prompt challenge aporta valor educativo | El usuario reconoce feedback útil sobre su prompt |
| La voz de personajes aumenta memorabilidad | Reacciones del jurado/usuarios en momentos con ElevenLabs |

---

# 5. Alcance del MVP

## Qué incluye Scope A — MVP de 1 día

| Funcionalidad / Módulo | Descripción | Por qué entra |
| --- | --- | --- |
| Visual novel core | Diálogo, personajes placeholder y fondo | Es la base de la experiencia |
| Concept Challenges | Preguntas de opción múltiple con feedback | Enseñan sin depender de prompts largos |
| Prompt Challenge | Input libre evaluado | Es la mecánica diferenciadora |
| Stats | Reputación, skill y riesgo RH | Da consecuencias visibles |
| Finales | Bueno, medio y malo | Cierra el arco narrativo |
| ElevenLabs | Voz en líneas clave o audios pre-generados | Aumenta impacto de demo |
| Mock evaluator | Evaluación local fallback | Evita bloquear por API/tokens |

## Qué incluye Scope B — MVP de 3 días

| Funcionalidad / Módulo | Descripción | Por qué entra |
| --- | --- | --- |
| Progresión por días | Día 1, Día 2, Día 3 | Da sensación de campaña |
| Más retos | Más concept y prompt challenges | Aumenta aprendizaje |
| Conceptos desbloqueados | Seguimiento interno de conceptos introducidos | Hace el juego justo |
| Resumen del día | Feedback acumulado por día | Refuerza aprendizaje |

## Qué incluye Scope C — MVP de 1 semana

| Funcionalidad / Módulo | Descripción | Por qué entra |
| --- | --- | --- |
| Semana completa | 5 días narrativos | Vertical slice completo |
| Evaluación semanal | Resultado global del desempeño | Da cierre fuerte |
| Conceptos avanzados | RAG, tools, agentes, producción | Muestra profundidad del producto |
| Casa/estudio simplificada | Pantalla para repasar/aprender | Primer paso hacia progresión amplia |

## Qué NO incluye Scope A

| Funcionalidad / Módulo | Por qué queda fuera | Fase sugerida |
| --- | --- | --- |
| Sprites finales | Se validará primero flow/wireframes | Después de wireframes |
| Casa | No necesaria para demo de un día | Scope C/Post-MVP |
| Login | No aporta al loop core | Scope C/Post-MVP |
| Leaderboard | No valida el aprendizaje base | Post-MVP |
| Editor admin de contenido | Puede manejarse con archivos | Post-MVP |
| Lip sync real | Alto costo para poco impacto inicial | Post-MVP |

---

# 6. Criterios para decidir si algo entra al MVP

Una funcionalidad entra a Scope A solo si:

- Es necesaria para que el jugador termine una partida.
- Enseña o refuerza un concepto clave.
- Hace visible la consecuencia de una decisión.
- Permite mostrar uso de IA o voz.
- Reduce riesgo de que la demo parezca presentación.

Queda fuera si:

- Depende de arte final.
- Aumenta demasiado el tiempo de desarrollo.
- Pertenece a campaña larga.
- Es personalización avanzada.
- Puede simularse con placeholders.

---

# 7. Flujo principal del MVP

## Scope A

```text
Jugador inicia partida
  → Conoce Banano Corp
  → Recibe onboarding del Manager
  → Responde Concept Challenge 1
  → Enfrenta al PM ambiguo
  → Responde Concept Challenge 2
  → Escribe prompt para resumir tickets
  → Recibe evaluación y feedback
  → Resuelve crisis final
  → Obtiene final bueno / medio / malo
```

## Scope B

```text
Jugador inicia partida
  → Día 1: prompting básico
  → Día 2: hallucinations y fuente de verdad
  → Día 3: demo con cliente
  → Evaluación acumulada
  → Final según desempeño
```

## Scope C

```text
Jugador inicia semana
  → Día 1: prompting básico
  → Día 2: hallucinations
  → Día 3: RAG básico
  → Día 4: agentes/tools
  → Día 5: producción en llamas
  → Evaluación semanal
  → Final de campaña corta
```

---

# 8. Roles incluidos en el MVP

| Rol | Entra al MVP | Motivo |
| --- | --- | --- |
| Jugador | Sí | Usuario principal |
| Manager | Sí | Guía y presión narrativa |
| PM ambiguo | Sí | Introduce ambigüedad |
| Senior AI Engineer | Sí | Da feedback técnico |
| CEO | Parcial | Útil para crisis final |
| RH | Parcial | Final malo/humor |
| IA asistente | Parcial | Representa respuestas del modelo |

---

# 9. Módulos incluidos en el MVP

| Módulo | Entra al MVP | Alcance MVP |
| --- | --- | --- |
| Sistema de diálogo | Sí | Renderizar escenas y texto |
| Sistema de decisiones | Sí | Choices y efectos |
| Concept Challenges | Sí | 2 preguntas en Scope A |
| Prompt Challenges | Sí | 1 reto en Scope A |
| Evaluación IA/mock | Sí | Evaluar un prompt |
| Stats | Sí | Reputación, skill, riesgo RH |
| Finales | Sí | 3 finales |
| Voz | Parcial | Líneas clave/pre-generadas |

---

# 10. Funcionalidades por tipo de usuario

## Usuario: Jugador

### Debe poder hacer

- Iniciar partida.
- Avanzar diálogos.
- Elegir respuestas.
- Escribir un prompt.
- Ver feedback.
- Ver cambios de stats.
- Llegar a un final.

### No necesita todavía

- Crear cuenta.
- Guardar progreso avanzado.
- Personalizar avatar.
- Elegir rutas largas.
- Acceder a casa/estudio.

## Usuario: Equipo interno / desarrollador

### Debe poder hacer

- Ejecutar juego con mocks.
- Cambiar contenido desde archivos.
- Activar/desactivar proveedor IA.
- Probar Scope A.

### No necesita todavía

- Panel admin.
- CMS.
- Editor visual de escenas.

---

# 11. Reglas del MVP

- [Scope A] Debe poder jugarse sin APIs reales usando mocks.
- [Scope A] El prompt del jugador nunca debe ejecutarse como instrucción.
- [Scope A] El prompt del jugador se evalúa como texto no confiable.
- [Scope A] El jugador debe recibir feedback educativo después de cada reto.
- [Scope A] Las preguntas no deben evaluar conceptos no introducidos.
- [Scope A] El juego debe usar placeholders visuales hasta validar wireframes.
- [Scope A] Las llamadas a IA deben tener límites de uso.
- [Scope A] Si falla IA, debe responder el mock evaluator.

---

# 12. Supuestos del MVP

| Supuesto | Riesgo si es falso | Cómo validarlo |
| --- | --- | --- |
| Visual novel web es suficiente para parecer juego | Se siente como presentación | Prototipo HTML + prueba interna |
| Un prompt challenge basta para mostrar valor | Demo se siente pequeña | Probar Scope A y evaluar subir a B |
| Usuarios entienden humor corporativo | Tono no conecta | Feedback de jurado/equipo |
| Mock evaluator permite avanzar | Feedback se siente pobre | Cambiar a IA real en demo final |

---

# 13. Métricas de éxito del MVP

| Métrica | Qué mide | Meta inicial |
| --- | --- | --- |
| Finalización | Jugadores que terminan Scope A | >70% |
| Duración | Tiempo promedio de partida | 5–8 min |
| Comprensión | Jugadores que explican qué aprendieron | >60% |
| Reintento | Deseo de jugar otra vez | Feedback positivo |
| Estabilidad | Partidas sin error crítico | >90% |

---

# 14. Señales de validación

El MVP se considera validado si:

- El jugador termina el flujo sin ayuda externa.
- El jugador entiende por qué sus decisiones cambiaron stats.
- El prompt challenge genera conversación o interés.
- El tono resulta memorable.
- El equipo puede decidir si Scope A basta o si conviene Scope B.

---

# 15. Señales de alerta

El MVP necesita replantearse si:

- Parece presentación con botones.
- El jugador no entiende qué está aprendiendo.
- El feedback se siente genérico.
- El prompt challenge rompe el ritmo.
- El uso de IA consume demasiados tokens.

---

# 16. Experiencia mínima aceptable

## UX mínima

- Diálogo con typewriter effect.
- Stats visibles.
- Botones de elección claros.
- Feedback visual al subir/bajar stats.
- Transiciones suaves.
- Pantalla final clara.

## Performance mínima

- Carga inicial razonable.
- Evaluación de prompt con respuesta rápida o fallback.
- Sin bloqueo si falla audio/IA.

## Seguridad mínima

- Rate limit en endpoint de evaluación.
- Longitud máxima de prompt.
- Prompt tratado como contenido no confiable.
- Sin ejecución de tools por parte del modelo.

## Operación mínima

- Modo mock funcional.
- Variables de entorno para IA/TTS.
- Logs básicos de evaluación.

---

# 17. Trade-offs aceptados

| Trade-off | Por qué se acepta |
| --- | --- |
| Placeholders en vez de sprites finales | Primero validamos flow |
| Audios pre-generados | Ahorra créditos ElevenLabs |
| Mock evaluator durante desarrollo | Ahorra tokens y evita bloqueo |
| Sin login | No es necesario para validar experiencia |
| Contenido en archivos | Más rápido que CMS/admin |

---

# 18. Riesgos del MVP

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Scope creep | Alto | Construir Scope A por defecto |
| Abuso de tokens | Alto | Rate limits, cache, mock fallback |
| Preguntas obvias | Medio | Usar distractores tentadores |
| Preguntas injustas | Medio | Progresión conceptual obligatoria |
| Falta de assets | Bajo | Placeholders hasta wireframes |

---

# 19. Preguntas abiertas

- ¿Usaremos Claude u OpenAI como proveedor inicial de evaluación?
- ¿Dónde se desplegará el backend NestJS?
- ¿Cuántas líneas de voz tendrá Scope A?
- ¿El prompt del jugador se guardará completo o solo hash/evaluación?

---

# 20. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| El Scope A será MVP inicial | Validar rápido y evitar scope creep | 2026-06-20 |
| El juego se llamará Prompt or Get Fired | Nombre claro y memorable | 2026-06-20 |
| La empresa será Banano Corp | Identidad divertida y flexible | 2026-06-20 |
| Los assets finales se dejan para después | Primero validar wireframes | 2026-06-20 |

---

# 21. Checklist de cierre del MVP

- [x] Está clara la hipótesis principal.
- [x] Está definido el usuario principal.
- [x] Está definido el flujo core.
- [x] Está definido qué entra al Scope A.
- [x] Está definido qué queda fuera.
- [x] Están definidos los roles incluidos.
- [x] Están definidos los módulos incluidos.
- [x] Están definidas las métricas de éxito.
- [x] Están documentados los trade-offs aceptados.
- [x] El MVP puede construirse sin funcionalidades futuras.
- [x] El MVP puede probarse con usuarios reales.
