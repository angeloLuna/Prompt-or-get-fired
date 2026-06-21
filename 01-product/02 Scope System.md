# Scope System — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Objetivo del documento

Definir los niveles de alcance del proyecto para que la documentación pueda servir a tres posibles versiones del MVP sin reescribir documentos.

El objetivo es que Antigravity, Claude o cualquier agente de desarrollo pueda leer todos los documentos y construir solo el scope solicitado.

---

# 2. Regla general

Cada feature, pantalla, sistema, flujo, personaje, escena o integración debe marcarse con una etiqueta de scope:

- **[Scope A] MVP de 1 día**
- **[Scope B] MVP de 3 días**
- **[Scope C] MVP de 1 semana**
- **[Post-MVP] Fuera del hackatón**

La instrucción por defecto es:

> Construir únicamente [Scope A]. Ignorar [Scope B], [Scope C] y [Post-MVP] salvo que el equipo indique lo contrario.

---

# 3. Scope A — MVP de 1 día

## Objetivo

Construir una demo mínima jugable, clara y presentable de **Prompt or Get Fired**.

## Duración esperada de juego

5 a 8 minutos.

## Experiencia incluida

El jugador vive su primer día como Junior AI Engineer en Banano Corp. Debe superar una secuencia corta de onboarding, preguntas conceptuales, un reto de prompting y una crisis final.

## Incluye

- Pantalla de inicio.
- Pantalla principal tipo visual novel.
- Sistema de diálogo.
- Sistema de decisiones.
- Stats básicos: reputación, skill y riesgo RH.
- 2 Concept Challenges de opción múltiple.
- 1 Prompt Challenge con input libre.
- Evaluación del prompt con IA o mock evaluator.
- Feedback educativo.
- 3 finales posibles.
- Voz ElevenLabs en momentos clave o audios pre-generados.
- Placeholders visuales para sprites y fondos.

## No incluye

- Sprites finales.
- Casa o entrenamiento.
- Mapa explorable.
- Carrera completa.
- Login.
- Leaderboard.
- Minijuegos avanzados.
- Animación compleja o lip sync real.

---

# 4. Scope B — MVP de 3 días

## Objetivo

Extender la demo para que tenga sensación de progresión y aprendizaje acumulado.

## Duración esperada de juego

12 a 20 minutos.

## Incluye todo Scope A, más:

- Progresión por días.
- Día 1: prompting básico y ambigüedad.
- Día 2: hallucinations, fuente de verdad e información faltante.
- Día 3: demo con cliente o crisis de producción.
- Más Concept Challenges.
- Más Prompt Challenges.
- Feedback acumulado.
- Mayor impacto de stats.
- Conceptos desbloqueados internamente.
- Pantalla de resumen del día.

---

# 5. Scope C — MVP de 1 semana

## Objetivo

Crear un vertical slice completo de campaña.

## Duración esperada de juego

30 a 45 minutos.

## Incluye todo Scope A y Scope B, más:

- 5 días narrativos.
- Evaluación semanal.
- Más personajes.
- Más finales.
- Conceptos avanzados introducidos progresivamente: RAG básico, tool calling, agentes, prompt injection y producción.
- Posible pantalla simplificada de casa/estudio.
- Más variedad de consecuencias narrativas.
- Sistema de desempeño acumulado más robusto.

---

# 6. Post-MVP

Elementos de visión futura que no deben bloquear el hackatón:

- Carrera completa.
- Casa explorable.
- Sistema profundo de habilidades.
- Inventario.
- Múltiples empresas.
- Temporadas.
- Ranking.
- Guardado persistente complejo.
- Animaciones avanzadas.
- Lip sync real.
- Assets definitivos para todos los personajes.

---

# 7. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| El proyecto tendrá tres scopes documentados | Permite elegir alcance sin reescribir docs | 2026-06-20 |
| Scope A será el objetivo inicial | Reduce riesgo y permite validar rápido | 2026-06-20 |
| Assets finales se dejan para después de wireframes | Evita bloquear producto por arte | 2026-06-20 |
| Los documentos deben poder alimentar Antigravity | El proyecto se construirá con prompting intensivo | 2026-06-20 |
