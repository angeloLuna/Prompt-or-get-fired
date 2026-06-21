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
