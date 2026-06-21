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
