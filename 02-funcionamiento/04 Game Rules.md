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
