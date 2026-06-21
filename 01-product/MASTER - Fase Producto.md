# MASTER — Fase Producto — Prompt or Get Fired

## Proyecto

**Prompt or Get Fired** es un juego web 2D tipo visual novel / career simulator donde el jugador entra como Junior AI Engineer a **Banano Corp** y debe sobrevivir a retos de prompting, conceptos de AI engineering y decisiones laborales con consecuencias.

## Decisión de construcción inicial

Construir primero **[Scope A] MVP de 1 día**.

Los documentos también contemplan:

- **[Scope B] MVP de 3 días**
- **[Scope C] MVP de 1 semana**
- **[Post-MVP] Visión futura**

## Stack definido

- Frontend: Next.js + TypeScript + Tailwind.
- Backend: NestJS + PostgreSQL + Prisma.
- IA: Claude/OpenAI para evaluación, con mock evaluator.
- Voz: ElevenLabs, preferentemente con audios pre-generados en Scope A.

## Reglas críticas

1. Los prompts del jugador se analizan, no se ejecutan.
2. El juego debe funcionar con mocks si fallan APIs.
3. No se preguntan conceptos no introducidos.
4. Los assets finales se hacen después de validar wireframes.
5. Antigravity debe construir Scope A salvo instrucción contraria.

---

# Índice

1. Product Brief
2. Scope System
3. MVP Scope
4. Roles
5. Módulos del Producto
6. Plataformas por Rol

---


# Product Brief — Prompt or Get Fired

## Estado del documento

**Proyecto:** Prompt or Get Fired  
**Fecha:** 2026-06-20  
**Responsable:** Equipo Banano Corp / Platanus Hack  
**Versión:** v0.1  
**Estado:** Borrador

---

# 1. Resumen del producto

## Descripción corta

**Prompt or Get Fired** es un juego web 2D tipo visual novel / career simulator donde el jugador vive la experiencia de trabajar como Junior AI Engineer en una startup caótica llamada **Banano Corp**. El jugador toma decisiones, responde preguntas de opción múltiple y escribe prompts que son evaluados para determinar su desempeño, reputación y riesgo de despido.

El producto enseña conceptos reales de prompting y AI engineering mediante situaciones narrativas, humor corporativo y consecuencias jugables.

## One-liner

> Aprende AI engineering sobreviviendo a tu primer día en una startup donde un mal prompt puede mandarte a RH.

## Categoría del producto

- Juego educativo.
- Web game.
- Visual novel interactiva.
- Plataforma educativa ligera.
- Simulador de carrera.

---

# 2. Contexto y oportunidad

## Contexto del mercado o industria

La adopción de IA generativa ha creado una demanda fuerte por habilidades prácticas de prompting, evaluación de respuestas, diseño de flujos con IA y criterio técnico. Muchas personas quieren aprender AI engineering, pero los recursos suelen sentirse como cursos, documentación técnica o tutoriales desconectados de situaciones reales de trabajo.

Al mismo tiempo, los hackatones y demos de IA tienden a premiar experiencias que se entienden rápido, se ven memorables y demuestran uso práctico de modelos generativos, voz y evaluación automática.

## Oportunidad detectada

Existe oportunidad de convertir el aprendizaje de AI engineering en una experiencia narrativa y divertida. En lugar de explicar conceptos de forma abstracta, el juego pone al jugador en situaciones laborales: un PM ambiguo, un CEO hypeado, un senior sarcástico, una demo con cliente y el riesgo de que RH aparezca si la IA falla.

El diferencial es que el usuario no solo consume contenido: toma decisiones, escribe prompts y recibe feedback inmediato.

---

# 3. Cliente objetivo

## Cliente comprador

Para el hackatón, el cliente comprador no es el foco inmediato. El producto se validará con jurado, participantes, desarrolladores, estudiantes y personas interesadas en aprender IA.

A futuro, posibles clientes/compradores:

- Bootcamps de programación.
- Cursos de IA.
- Comunidades tech.
- Empresas que quieren entrenar equipos en uso de IA.
- Plataformas educativas.

## Segmentos posibles

| Segmento | Descripción | Prioridad | Motivo |
| --- | --- | --- | --- |
| Participantes/jurado de hackatón | Personas que evaluarán la demo | Alta | Validación inmediata |
| Developers y estudiantes tech | Usuarios que quieren aprender AI engineering | Alta | Dolor y curiosidad claros |
| Equipos de producto/negocio | Personas que usan IA sin formación técnica profunda | Media | Pueden beneficiarse del enfoque práctico |
| Empresas/cursos de capacitación | Compradores potenciales futuros | Media | Pueden pagar por entrenamiento gamificado |

## Segmento inicial recomendado

Developers, estudiantes tech y jurado de hackatón. Son usuarios que entienden el contexto, pueden valorar el humor y perciben rápido el aprendizaje práctico.

---

# 4. Usuarios principales

## Usuario final

Persona interesada en aprender AI engineering de forma práctica y divertida. Puede ser developer, estudiante, maker, PM técnico o alguien que trabaja con IA generativa.

## Tipos de usuario

| Usuario | Qué necesita | Qué problema tiene | Qué valor espera |
| --- | --- | --- | --- |
| Jugador principiante | Entender conceptos básicos de prompting | No sabe distinguir buen prompt de prompt vago | Aprender con feedback claro |
| Jugador tech intermedio | Practicar criterio de AI engineering | Sabe usar IA pero no siempre sabe diseñar sistemas confiables | Casos con matiz y decisiones técnicas |
| Jurado/hackatón | Evaluar una demo clara y memorable | Tiene poco tiempo para entender la propuesta | Ver una experiencia jugable con IA y voz |

## Roles preliminares del producto

- Jugador.
- Sistema evaluador de prompts.
- Personajes narrativos: Manager, PM, Senior AI Engineer, CEO, RH, IA asistente.

---

# 5. Problema principal

## Problema central

Personas interesadas en IA tienen dificultad para aprender AI engineering de forma práctica porque muchos recursos son teóricos, genéricos o desconectados de situaciones reales. Esto provoca que sepan “usar ChatGPT”, pero no necesariamente sepan diseñar prompts útiles, evaluar respuestas, manejar ambigüedad o reducir riesgos de hallucination.

## Problemas secundarios

- El aprendizaje de prompting suele sentirse como lista de tips.
- Muchos ejemplos no tienen consecuencias reales.
- Los usuarios no practican distinguir respuestas parcialmente correctas de respuestas realmente buenas.
- Las herramientas educativas tradicionales no aprovechan la narrativa ni el humor.
- El aprendizaje no siempre contempla progresión conceptual.

## Cómo se resuelve actualmente

- Cursos.
- Tutoriales en YouTube.
- Documentación.
- Hilos en redes.
- Prueba y error con modelos.
- Bootcamps.
- Ejemplos sueltos de prompts.

## Dolor de la solución actual

La mayoría de alternativas enseñan conceptos sin convertirlos en decisiones memorables. El usuario puede leer qué es un buen prompt, pero no siente las consecuencias de un prompt malo en un contexto laboral simulado.

---

# 6. Propuesta de valor

## Propuesta de valor principal

Para personas que quieren aprender AI engineering de forma práctica, **Prompt or Get Fired** es un juego web narrativo que permite practicar prompting, evaluación y criterio técnico en situaciones laborales ficticias, a diferencia de cursos o tutoriales tradicionales, porque convierte cada concepto en una decisión con consecuencias, feedback inmediato y humor corporativo.

## Propuesta de valor resumida

> Aprende a usar IA en serio antes de que Banano Corp te mande a RH.

## Beneficios para el jugador

- Aprende conceptos reales jugando.
- Recibe feedback inmediato.
- Practica prompts y decisiones técnicas.
- Entiende matices, no solo respuestas obvias.
- Vive una experiencia memorable y compartible.

## Beneficios para el proyecto/hackatón

- Demo fácil de explicar.
- Uso visible de IA y voz.
- Alto potencial de humor y storytelling.
- Scope controlable.
- Puede crecer como producto educativo.

---

# 7. Diferenciador

## Diferenciador principal

El juego combina visual novel, simulador de carrera, evaluación de prompts con IA y voz generada para crear una experiencia educativa que no se siente como curso.

## Alternativas o competidores

| Alternativa | Qué ofrece | Limitación | Nuestra ventaja |
| --- | --- | --- | --- |
| Cursos de prompting | Explicación estructurada | Poca interacción narrativa | Aprendizaje con consecuencias jugables |
| Tutoriales sueltos | Tips rápidos | No hay progresión ni feedback | Reto progresivo con feedback contextual |
| Juegos educativos tradicionales | Gamificación | Pueden no enseñar AI engineering real | Enseña habilidades modernas de IA |
| Simuladores narrativos | Decisiones y humor | No suelen enseñar prompting real | Mecánica central basada en prompts evaluados |

---

# 8. Alcance inicial

## Módulos principales

1. Sistema de diálogo visual novel. **[Scope A]**
2. Sistema de decisiones. **[Scope A]**
3. Concept Challenges. **[Scope A]**
4. Prompt Challenges. **[Scope A]**
5. Sistema de evaluación de prompts. **[Scope A]**
6. Sistema de stats y finales. **[Scope A]**
7. Sistema de voz con ElevenLabs. **[Scope A]**
8. Progresión por días. **[Scope B]**
9. Sistema de aprendizaje acumulado. **[Scope B]**
10. Pantalla de casa/estudio. **[Scope C]**

## Capacidades iniciales para el equipo/admin

- Definir escenas como datos.
- Definir challenges como datos.
- Configurar outcomes y efectos.
- Alternar evaluator mock / IA real.
- Controlar scopes.

## Capacidades iniciales para el usuario final

- Iniciar partida.
- Leer diálogos.
- Elegir respuestas.
- Responder preguntas de opción múltiple.
- Escribir un prompt.
- Recibir evaluación y feedback.
- Ver cambios de stats.
- Llegar a un final.

## Funcionalidad crítica

- El jugador debe entender la situación narrativa.
- El jugador debe tomar al menos una decisión conceptual.
- El jugador debe escribir al menos un prompt.
- El sistema debe evaluar el prompt o simular evaluación.
- El jugador debe recibir consecuencia y final.

---

# 9. Fuera de alcance

## No incluido en Scope A

- Sprites finales.
- Fondos finales.
- Casa/estudio.
- Carrera completa.
- Login.
- Ranking.
- Editor admin.
- Multijugador.
- Minijuegos complejos.
- Guardado persistente avanzado.

## Motivo del recorte

Estas funcionalidades pueden mejorar la experiencia, pero no son necesarias para validar la promesa principal: que un juego narrativo pueda enseñar prompting y AI engineering mediante decisiones, prompts y consecuencias.

---

# 10. MVP

## Definición del MVP

La primera versión debe permitir que un jugador viva su primer día como Junior AI Engineer en Banano Corp, responda retos conceptuales, escriba un prompt, reciba feedback y llegue a uno de tres finales.

## MVP — Equipo/Admin

- Crear contenido narrativo en archivos de datos.
- Configurar choices, concept challenges y prompt challenges.
- Configurar outcomes.
- Activar evaluator mock o IA real.
- Usar placeholders visuales.

## MVP — Usuario final

- Jugar una partida corta.
- Tomar decisiones.
- Aprender conceptos básicos.
- Escribir un prompt.
- Recibir evaluación.
- Ver resultado final.

## Experiencia mínima aceptable

Una persona debe poder jugar de inicio a fin sin explicación externa, entender que sus decisiones afectan los stats y percibir que aprendió al menos un concepto útil de prompting o AI engineering.

---

# 11. Supuestos

## Supuestos de negocio

- Una demo educativa con humor puede destacar en hackatón.
- El formato visual novel es suficiente para validar la experiencia.
- El aprendizaje de AI engineering tiene demanda.

## Supuestos de usuario

- El usuario entiende o se interesa por el contexto de IA.
- El usuario acepta leer diálogos cortos.
- El usuario está dispuesto a escribir un prompt corto.

## Supuestos operativos

- Los assets finales pueden esperar hasta validar wireframes.
- El contenido puede vivir en archivos Markdown/TS/JSON.
- Las voces se pueden pre-generar para ahorrar créditos.

## Supuestos técnicos

- Next.js + Tailwind es suficiente para crear sensación de juego.
- NestJS + PostgreSQL permite controlar sesiones y uso.
- El evaluator mock permite desarrollar sin gastar tokens.
- La IA solo analiza prompts; no los ejecuta.

---

# 12. Riesgos

| Riesgo | Impacto | Probabilidad | Mitigación |
| --- | --- | --- | --- |
| La demo se siente como presentación | Alto | Media | Typewriter effect, animaciones suaves, stats, feedback visual, placeholders estilo juego |
| Se gasta presupuesto de IA | Alto | Media | Rate limits, mock evaluator, cache, límites por sesión |
| Las preguntas son demasiado obvias | Medio | Media | Incluir opciones tentadoras y parcialmente correctas |
| El jugador no entiende conceptos técnicos | Medio | Media | Progresión conceptual: no preguntar conceptos no introducidos |
| Scope creep | Alto | Alta | Construir Scope A primero y etiquetar todo por scope |

---

# 13. Validación

## Preguntas que debemos validar

- ¿El jugador entiende la mecánica central en menos de un minuto?
- ¿La combinación de visual novel + prompting se siente divertida?
- ¿El feedback educativo se percibe útil?
- ¿La demo se siente como juego y no como formulario/presentación?
- ¿El uso de voz aumenta el impacto de la demo?

## Señales de validación

- El jugador termina una partida.
- El jugador entiende por qué ganó o perdió.
- El jugador comenta que aprendió algo.
- El jugador quiere reintentar para mejorar score.
- El jurado entiende rápido la propuesta.

---

# 14. Criterios de éxito

## Criterios de éxito del MVP

El MVP será exitoso si:

- Se puede jugar de inicio a fin.
- Incluye al menos 2 Concept Challenges y 1 Prompt Challenge.
- El prompt se evalúa con mock o IA real.
- Los stats cambian según decisiones.
- Hay al menos 3 finales.
- La experiencia no depende de assets finales.
- El equipo puede elegir Scope A/B/C sin cambiar documentos.

## Métricas iniciales

| Métrica | Qué mide | Meta inicial |
| --- | --- | --- |
| Tasa de finalización | Usuarios que terminan la demo | >70% en pruebas internas |
| Tiempo de partida | Duración real del Scope A | 5–8 min |
| Comprensión del concepto | Usuarios que explican qué aprendieron | >60% |
| Reintento | Usuarios que quieren jugar otra vez | Señal cualitativa positiva |

---

# 15. Modelo de negocio preliminar

## Quién paga

Post-hackatón podrían pagar bootcamps, empresas, comunidades tech o plataformas educativas que quieran entrenar usuarios en IA generativa.

## Posibles modelos de cobro

- Licencia educativa.
- Curso gamificado.
- SaaS para entrenamiento interno.
- Contenido patrocinado.
- Versión gratuita + módulos premium.

## Modelo recomendado para iniciar

Validar primero como producto educativo gratuito/demo. Después explorar licencias para capacitación o cursos.

---

# 16. Restricciones

## Restricciones de producto

- Construir Scope A primero.
- No producir assets finales antes de validar wireframes.
- No evaluar conceptos no introducidos.
- No convertir el MVP en campaña completa.

## Restricciones técnicas

- Frontend: Next.js + TypeScript + Tailwind.
- Backend: NestJS + PostgreSQL + Prisma.
- Evaluación de prompts debe pasar por backend.
- El prompt del jugador es contenido no confiable y no debe ejecutarse.
- El juego debe correr con mocks si faltan APIs.

## Restricciones de negocio

- El demo debe ser comprensible en contexto de hackatón.
- El uso de tokens y créditos debe estar limitado.
- El MVP debe poder presentarse sin setup complejo.

---

# 17. Decisiones abiertas

| Decisión | Opciones | Responsable | Fecha límite | Estado |
| --- | --- | --- | --- | --- |
| Proveedor inicial para evaluación IA | Claude / OpenAI | Equipo | Hackatón | Pendiente |
| Hosting backend | VPS / Railway / Render / Fly | Equipo | Hackatón | Pendiente |
| Estilo final de sprites | Anime tech / cartoon corporativo / pixel-ish | Equipo | Después de wireframes | Pendiente |

---

# 18. Frase guía del producto

> Cada decisión debe hacer que el jugador aprenda algo real de AI engineering sin dejar de sentir que está sobreviviendo a una startup absurda.

---

# 19. Resumen ejecutivo

**Prompt or Get Fired** es un juego web educativo tipo visual novel donde el jugador entra como Junior AI Engineer a Banano Corp y debe sobrevivir a situaciones de prompting, ambigüedad, evaluación de IA y presión corporativa.

La primera versión validará si una experiencia narrativa con decisiones, prompts y feedback puede enseñar conceptos reales de AI engineering de forma más memorable que un curso tradicional. El Scope A será una demo de 5 a 8 minutos con dos preguntas conceptuales, un reto de prompting, stats y tres finales.

El proyecto se construirá con Next.js, Tailwind, NestJS, PostgreSQL, ElevenLabs y un sistema de evaluación de prompts con IA o mock evaluator. Los assets finales se producirán después de validar wireframes y flow.


---


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


---


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


---


# Roles del producto — Prompt or Get Fired

## 1. Objetivo del documento

Definir los roles principales que interactúan con **Prompt or Get Fired**, incluyendo tanto usuarios reales como personajes/sistemas narrativos que afectan la experiencia de juego.

---

# 2. Resumen de roles

| Rol | Tipo de usuario | Descripción breve | Nivel de acceso | Scope |
| --- | --- | --- | --- | --- |
| Jugador | Usuario final | Persona que juega y aprende AI engineering | Bajo | [Scope A] |
| Manager | Personaje narrativo | Asigna presión y evalúa desempeño | N/A | [Scope A] |
| PM ambiguo | Personaje narrativo | Plantea requerimientos vagos | N/A | [Scope A] |
| Senior AI Engineer | Personaje narrativo | Da feedback técnico y educativo | N/A | [Scope A] |
| CEO | Personaje narrativo | Representa hype y crisis ejecutiva | N/A | [Scope A/B] |
| RH | Personaje narrativo | Representa riesgo de despido | N/A | [Scope A] |
| IA asistente | Sistema/personaje | Responde o representa el output del modelo | N/A | [Scope A] |
| Sistema evaluador | Sistema interno | Evalúa prompts y devuelve feedback | Alto interno | [Scope A] |
| Equipo desarrollador | Interno | Configura contenido, scopes y APIs | Alto | [Scope A] |

---

# 3. Ficha por rol

## Rol: Jugador

### Descripción general

Usuario final que juega la experiencia. En la ficción, toma el papel de un Junior AI Engineer recién contratado en Banano Corp.

### Objetivo principal del rol

Sobrevivir a su primer día/semana en Banano Corp resolviendo retos de AI engineering.

### Responsabilidades

- Leer contexto narrativo.
- Tomar decisiones.
- Responder Concept Challenges.
- Escribir prompts.
- Interpretar feedback.

### Acciones que puede realizar

- Iniciar partida.
- Avanzar diálogo.
- Elegir respuestas.
- Escribir prompt.
- Ver feedback.
- Reiniciar partida.

### Acciones que NO puede realizar

- Modificar reglas internas.
- Acceder a API keys.
- Ejecutar tools mediante prompts.
- Cambiar outcomes directamente.

### Información que puede ver

- Diálogos.
- Stats propios.
- Feedback educativo.
- Resultado de evaluación.
- Final alcanzado.

### Necesidades principales

- Entender qué debe hacer.
- Recibir feedback claro.
- Sentir que sus decisiones importan.
- Aprender sin sentirse examinado injustamente.

### Frustraciones o problemas actuales

- Los cursos de IA pueden sentirse abstractos.
- Los quizzes pueden ser obvios o injustos.
- El feedback de prompts suele ser genérico.

### Motivación para usar el producto

Aprender conceptos prácticos de AI engineering en una experiencia breve, divertida y compartible.

### Nivel de conocimiento técnico

Medio esperado, aunque Scope A debe ser entendible para principiantes curiosos.

### Frecuencia de uso esperada

Ocasional en hackatón; potencialmente recurrente si hay campaña/progresión.

### Dispositivos principales

- Desktop / laptop.
- Web responsive como secundaria.

### Módulos relacionados

| Módulo | Nivel de acceso | Notas |
| --- | --- | --- |
| Diálogo | Ver / avanzar | Core |
| Decisiones | Completar | Core |
| Concept Challenges | Completar | Core |
| Prompt Challenges | Completar | Core |
| Stats | Ver | Core |
| Finales | Ver | Core |

---

## Rol: Manager

### Descripción general

Personaje que representa la presión laboral y las expectativas de negocio. Da contexto, asigna tareas y reacciona al desempeño del jugador.

### Objetivo principal del rol

Evaluar si el jugador puede entregar valor sin causar caos.

### Responsabilidades narrativas

- Presentar Banano Corp.
- Introducir el primer reto.
- Reaccionar a buenas/malas decisiones.
- Cerrar la evaluación final.

### Scope

- [Scope A] Presente desde el primer día.
- [Scope B/C] Puede participar en evaluaciones diarias/semanales.

---

## Rol: PM ambiguo

### Descripción general

Personaje que plantea problemas poco claros, peticiones vagas y frases como “hazlo más AI”.

### Objetivo principal del rol

Forzar al jugador a practicar manejo de ambigüedad y preguntas de clarificación.

### Responsabilidades narrativas

- Presentar requerimientos ambiguos.
- Reaccionar a respuestas del jugador.
- Introducir la necesidad de criterios de éxito.

### Scope

- [Scope A] Concept Challenge de ambigüedad.
- [Scope B/C] Más situaciones con clientes y producto.

---

## Rol: Senior AI Engineer

### Descripción general

Personaje mentor con tono sarcástico. Explica conceptos técnicos y da feedback educativo.

### Objetivo principal del rol

Guiar el aprendizaje sin convertir el juego en clase formal.

### Responsabilidades narrativas

- Introducir conceptos antes de evaluarlos.
- Dar feedback técnico.
- Explicar por qué una respuesta parcialmente correcta no basta.
- Evaluar el prompt challenge desde la historia.

### Scope

- [Scope A] Feedback del prompt challenge.
- [Scope B/C] Mentor recurrente.

---

## Rol: CEO

### Descripción general

Personaje que representa el hype ejecutivo de IA y la presión de demos rápidas.

### Objetivo principal del rol

Crear crisis y decisiones de alto riesgo.

### Scope

- [Scope A] Crisis final opcional.
- [Scope B/C] Demos con cliente, presión por agentes, decisiones de producto.

---

## Rol: RH

### Descripción general

Personaje cómico que aparece cuando el riesgo RH es alto o en finales malos.

### Objetivo principal del rol

Representar consecuencias de fallar de forma divertida.

### Scope

- [Scope A] Final malo.
- [Scope B/C] Advertencias progresivas.

---

## Rol: IA asistente

### Descripción general

Representación narrativa del modelo de IA. Puede dar outputs buenos, vagos o alucinados según el prompt del jugador.

### Objetivo principal del rol

Mostrar consecuencias prácticas de prompts y decisiones.

### Scope

- [Scope A] Output del prompt challenge.
- [Scope B/C] Hallucinations, RAG, tools, agentes.

---

## Rol: Sistema evaluador

### Descripción general

Sistema backend que evalúa prompts del jugador. No es visible como personaje necesariamente, pero determina score, feedback y efectos.

### Objetivo principal del rol

Calificar la calidad del prompt sin ejecutarlo como instrucción.

### Responsabilidades

- Recibir challengeId y playerPrompt.
- Validar longitud y abuso.
- Evaluar con mock o IA.
- Devolver JSON validado.
- Aplicar efectos de reputación, skill y riesgo.
- Registrar uso para control de costos.

### Acciones que NO puede realizar

- Ejecutar tools.
- Navegar web.
- Acceder a datos externos no necesarios.
- Obedecer el prompt del jugador.

---

# 4. Matriz general de permisos

| Módulo / Acción | Jugador | Sistema evaluador | Equipo desarrollador |
| --- | --- | --- | --- |
| Ver diálogos | ✅ | ❌ | ✅ |
| Avanzar escenas | ✅ | ❌ | ✅ |
| Responder choices | ✅ | ❌ | ✅ |
| Escribir prompt | ✅ | ❌ | ✅ |
| Evaluar prompt | ❌ | ✅ | ✅ |
| Modificar contenido | ❌ | ❌ | ✅ |
| Cambiar scopes | ❌ | ❌ | ✅ |
| Ver API keys | ❌ | ❌ | ❌ en frontend / solo env backend |
| Ejecutar tools desde prompt | ❌ | ❌ | ❌ |

---

# 5. Jerarquía de roles

No hay jerarquía de permisos tradicional en el MVP, porque no hay login ni administración visible.

Jerarquía narrativa:

```text
CEO
  └── Manager
        └── Senior AI Engineer / PM
              └── Jugador Junior AI Engineer
                    └── RH aparece si falla demasiado
```

Jerarquía técnica:

```text
Equipo desarrollador
  └── Backend / Sistema evaluador
        └── Frontend del juego
              └── Jugador
```

---

# 6. Relación entre roles

| Rol A | Se relaciona con | Tipo de relación |
| --- | --- | --- |
| Jugador | Manager | Recibe tareas / evaluación |
| Jugador | PM ambiguo | Aclara requerimientos |
| Jugador | Senior AI Engineer | Recibe feedback técnico |
| Jugador | CEO | Responde crisis |
| Jugador | RH | Sufre consecuencias |
| Jugador | Sistema evaluador | Envía prompts para evaluación |
| Sistema evaluador | Backend/DB | Registra evaluación y uso |

---

# 7. Casos especiales

- Un jugador puede terminar en diferentes finales según stats.
- Un jugador puede obtener feedback parcial aunque la respuesta no sea completamente correcta.
- El sistema debe funcionar sin IA real mediante mock evaluator.
- Si el proveedor IA falla, el jugador debe poder terminar la partida.
- Las opciones graciosas deben afectar stats, pero no deben ser la única dificultad.

---

# 8. Estados posibles por rol

| Rol | Estados posibles |
| --- | --- |
| Jugador | Jugando, evaluando prompt, viendo feedback, finalizado |
| Sistema evaluador | Disponible, mock mode, proveedor IA activo, fallback, rate limited |
| Personaje narrativo | Neutral, positivo, negativo, sorprendido, estresado |
| Partida | Iniciada, en progreso, completada, abandonada |

---

# 9. Preguntas abiertas

- ¿El jugador podrá ingresar nombre propio en Scope A?
- ¿Se mostrará el sistema evaluador como personaje o solo como feedback UI?
- ¿Cuántas voces distintas se usarán en ElevenLabs para Scope A?

---

# 10. Decisiones tomadas

| Decisión | Motivo | Fecha |
| --- | --- | --- |
| No habrá login en Scope A | Reduce complejidad | 2026-06-20 |
| Los personajes usarán placeholders durante wireframes | Validar flow antes de assets | 2026-06-20 |
| El sistema evaluador no ejecuta prompts | Seguridad y control | 2026-06-20 |

---

# 11. Checklist de validación

- [x] Están definidos todos los roles que interactúan con el producto.
- [x] Cada rol tiene un objetivo claro.
- [x] Cada rol tiene responsabilidades definidas.
- [x] Los roles están alineados con módulos del producto.
- [x] Los permisos críticos están definidos.
- [x] Los casos especiales están documentados.


---


# Módulos del producto — Prompt or Get Fired

## 1. Objetivo del documento

Definir los módulos principales de **Prompt or Get Fired**, su propósito, usuarios relacionados, funcionalidades incluidas, dependencias, prioridad y alcance esperado.

---

# 2. Resumen de módulos

| Módulo | Descripción breve | Roles relacionados | Prioridad | Estado |
| --- | --- | --- | --- | --- |
| Motor narrativo | Controla escenas, diálogos, choices y navegación | Jugador, Sistema | Alta | [Scope A] |
| Sistema visual novel | Renderiza personajes, fondos, diálogos y transiciones | Jugador | Alta | [Scope A] |
| Concept Challenges | Preguntas de opción múltiple con feedback educativo | Jugador | Alta | [Scope A] |
| Prompt Challenges | Retos donde el jugador escribe prompts | Jugador, Evaluador | Alta | [Scope A] |
| Evaluador de prompts | Califica prompts con mock o IA | Sistema evaluador | Alta | [Scope A] |
| Stats y consecuencias | Maneja reputación, skill y riesgo RH | Jugador, Sistema | Alta | [Scope A] |
| Finales | Determina ending según desempeño | Jugador, Sistema | Alta | [Scope A] |
| Voz/audio | Reproduce líneas clave con ElevenLabs o audios pre-generados | Jugador, Personajes | Media | [Scope A] |
| Progresión por días | Permite jugar varios días | Jugador | Media | [Scope B] |
| Learning progression | Controla conceptos introducidos/desbloqueados | Sistema | Alta | [Scope B] |
| Casa/estudio | Pantalla de práctica y descanso | Jugador | Media | [Scope C] |
| Admin/content tooling | Edición visual de contenido | Equipo | Baja | [Post-MVP] |

---

# 3. Clasificación de módulos

## Módulos core

- Motor narrativo. **[Scope A]**
- Sistema visual novel. **[Scope A]**
- Sistema de decisiones. **[Scope A]**
- Concept Challenges. **[Scope A]**
- Prompt Challenges. **[Scope A]**
- Evaluador de prompts. **[Scope A]**
- Stats y finales. **[Scope A]**

## Módulos administrativos

- Configuración por archivos de datos. **[Scope A]**
- Admin/content tooling. **[Post-MVP]**

## Módulos de experiencia de usuario

- Visual novel UI. **[Scope A]**
- Feedback educativo. **[Scope A]**
- Voz/audio. **[Scope A]**
- Resumen del día. **[Scope B]**
- Casa/estudio. **[Scope C]**

## Módulos de soporte / plataforma

- Backend de evaluación. **[Scope A]**
- Rate limiting. **[Scope A]**
- Cache de evaluaciones. **[Scope B]**
- Usage tracking. **[Scope B]**

## Módulos futuros

- Carrera completa.
- Ranking.
- CMS de escenas.
- Editor de challenges.
- Sistema de cuentas.

---

# 4. Ficha por módulo

## Módulo: Motor narrativo

### Descripción general

Controla qué escena se muestra, qué choices existen, qué challenge aparece y cuál es la siguiente escena según la decisión del jugador.

### Problema que resuelve

Evita hardcodear la historia dentro de componentes, permitiendo que el juego crezca por datos.

### Objetivo del módulo

Permitir construir Scope A/B/C usando estructuras de escenas reutilizables.

### Roles que usan este módulo

| Rol | Tipo de interacción |
| --- | --- |
| Jugador | Lo experimenta |
| Equipo desarrollador | Define escenas |
| Sistema | Resuelve transiciones |

### Funcionalidades incluidas

- Cargar escena actual.
- Avanzar diálogo.
- Mostrar choices.
- Aplicar efectos.
- Resolver siguiente escena.
- Enlazar prompt/concept challenges.

### Funcionalidades excluidas por ahora

- Editor visual de escenas.
- Rutas complejas con cientos de branches.
- Guardado avanzado por cuenta.

### Información que gestiona

- Scene.
- Character.
- DialogueLine.
- Choice.
- Challenge.
- Ending.
- GameState.

### Estados posibles

| Estado | Significado |
| --- | --- |
| idle | Esperando interacción |
| dialogue | Mostrando texto |
| choice | Esperando selección |
| prompt_challenge | Esperando prompt |
| evaluating | Evaluando prompt |
| feedback | Mostrando resultado |
| ending | Partida terminada |

### Prioridad

Alta. Sin este módulo no hay juego escalable.

### Alcance recomendado

[Scope A].

### Métrica de éxito

El Scope A puede completarse modificando datos de escenas sin tocar componentes principales.

---

## Módulo: Sistema visual novel

### Descripción general

Renderiza la interfaz del juego: fondo, personaje, diálogo, nombre del personaje, choices, stats y animaciones básicas.

### Problema que resuelve

Hace que la experiencia se sienta como juego y no como presentación.

### Funcionalidades incluidas

- Fondo placeholder.
- Personaje placeholder.
- Variantes emocionales representadas por texto/estado visual.
- Typewriter effect.
- Transiciones suaves.
- Animación idle sutil.
- Reacciones visuales a cambios de stats.

### Funcionalidades excluidas por ahora

- Sprites finales.
- Lip sync real.
- Animaciones complejas.

### Alcance recomendado

[Scope A] con placeholders; assets finales después de wireframes.

---

## Módulo: Concept Challenges

### Descripción general

Preguntas de opción múltiple integradas en la narrativa para enseñar conceptos clave sin obligar al jugador a escribir prompts todo el tiempo.

### Problema que resuelve

Evita que el juego dependa únicamente de input libre y permite enseñar conceptos de forma controlada.

### Reglas básicas

- No deben tener respuesta obvia.
- Deben incluir al menos una opción técnica tentadora pero incorrecta/incompleta.
- No deben evaluar conceptos no introducidos.
- Cada opción debe tener feedback.
- Las respuestas parcialmente correctas pueden tener efectos menos severos.

### Alcance recomendado

[Scope A] 2 preguntas; [Scope B/C] más preguntas progresivas.

---

## Módulo: Prompt Challenges

### Descripción general

Retos donde el jugador escribe un prompt para resolver una situación laboral.

### Problema que resuelve

Es la mecánica diferenciadora del juego y permite practicar prompting real.

### Funcionalidades incluidas

- Mostrar tarea.
- Capturar prompt.
- Validar longitud.
- Enviar a evaluator.
- Mostrar score y feedback.
- Aplicar efectos.

### Reglas básicas

- El prompt del jugador es texto no confiable.
- El sistema nunca debe ejecutar ni obedecer el prompt.
- La evaluación debe usar rúbrica.
- Debe existir fallback mock.

### Alcance recomendado

[Scope A] 1 prompt challenge; [Scope B] 2–3; [Scope C] 5+.

---

## Módulo: Evaluador de prompts

### Descripción general

Backend que evalúa el prompt del jugador usando mock evaluator o proveedor IA.

### Problema que resuelve

Permite dar feedback matizado y convertir el prompt en score/consecuencia.

### Funcionalidades incluidas

- Validación previa.
- Rate limit.
- Mock evaluator.
- Provider abstraction.
- Respuesta JSON validada.
- Registro de uso.

### Riesgos o complejidades

- Prompt injection.
- Gasto de tokens.
- JSON inválido.
- Latencia.

### Mitigación

- No tools.
- No ejecución.
- Zod schema.
- Cache.
- Fallback mock.
- Límite por sesión/IP.

### Alcance recomendado

[Scope A].

---

## Módulo: Stats y consecuencias

### Descripción general

Maneja reputación, skill y riesgo RH.

### Funcionalidades incluidas

- Estado inicial.
- Efectos por choice.
- Efectos por evaluación.
- Animación de cambios.
- Condiciones de final.

### Estados iniciales

- Reputación: 50.
- Skill: 0.
- Riesgo RH: 0.

### Alcance recomendado

[Scope A].

---

## Módulo: Voz/audio

### Descripción general

Usa ElevenLabs o audios pre-generados para dar voz a líneas clave.

### Funcionalidades incluidas en Scope A

- Reproducir audio en momentos clave.
- Permitir modo sin audio si falla.
- No generar audio dinámico para cada línea.

### Funcionalidades excluidas

- Voz dinámica para todo feedback.
- Lip sync real.
- Doblaje completo.

### Alcance recomendado

[Scope A] parcial.

---

# 5. Matriz módulo vs rol

| Módulo | Jugador | Sistema evaluador | Equipo desarrollador |
| --- | --- | --- | --- |
| Motor narrativo | Recibe | Consulta/actualiza estado | Configura |
| Visual novel UI | Usa | Sin acceso | Implementa |
| Concept Challenges | Completa | Valida local | Configura |
| Prompt Challenges | Completa | Evalúa | Configura |
| Stats | Ve | Actualiza | Define reglas |
| Voz/audio | Escucha | Sin acceso | Configura |
| Progresión por días | Juega | Actualiza | Configura |

---

# 6. Matriz de prioridad

| Módulo | Valor para usuario | Valor para negocio/demo | Complejidad | Prioridad final | Fase |
| --- | --- | --- | --- | --- | --- |
| Motor narrativo | Alta | Alta | Media | Alta | [Scope A] |
| Visual novel UI | Alta | Alta | Media | Alta | [Scope A] |
| Concept Challenges | Alta | Alta | Baja | Alta | [Scope A] |
| Prompt Challenges | Alta | Alta | Media | Alta | [Scope A] |
| Evaluador de prompts | Alta | Alta | Media/Alta | Alta | [Scope A] |
| Stats/finales | Alta | Alta | Baja | Alta | [Scope A] |
| Voz/audio | Media | Alta | Media | Media | [Scope A] |
| Progresión por días | Alta | Media | Media | Media | [Scope B] |
| Casa/estudio | Media | Baja | Media | Baja | [Scope C] |

---

# 7. Módulos recomendados para MVP

| Módulo | Por qué entra al MVP |
| --- | --- |
| Motor narrativo | Permite jugar de inicio a fin |
| Visual novel UI | Da forma a la experiencia |
| Concept Challenges | Enseña conceptos de forma controlada |
| Prompt Challenges | Diferenciador central |
| Evaluador de prompts | Hace que el prompt tenga consecuencia |
| Stats/finales | Convierte aprendizaje en juego |
| Voz/audio | Aprovecha ElevenLabs y mejora demo |

---

# 8. Módulos fuera del MVP Scope A

| Módulo | Motivo para dejarlo fuera | Fase sugerida |
| --- | --- | --- |
| Casa/estudio | No necesario para un día | [Scope C] |
| Editor admin | Se puede manejar con archivos | [Post-MVP] |
| Login | No valida loop core | [Scope C/Post-MVP] |
| Ranking | No necesario para demo | [Post-MVP] |
| Lip sync real | Alto esfuerzo visual | [Post-MVP] |

---

# 9. Dependencias generales entre módulos

```text
Motor narrativo
  ├── Visual novel UI
  ├── Concept Challenges
  ├── Prompt Challenges
  │     └── Evaluador de prompts
  ├── Stats y consecuencias
  │     └── Finales
  └── Voz/audio
```

---

# 10. Checklist de validación

- [x] Todos los módulos principales están identificados.
- [x] Cada módulo tiene propósito claro.
- [x] Cada módulo está relacionado con roles.
- [x] Cada módulo tiene prioridad y scope.
- [x] Se identificaron dependencias.
- [x] El MVP puede explicarse solo con módulos Scope A.


---


# Plataformas por rol — Prompt or Get Fired

## 1. Objetivo del documento

Definir desde qué tipo de interfaz, dispositivo o canal operará cada rol del producto.

Para **Prompt or Get Fired**, este documento también orienta los wireframes, ya que el juego debe sentirse como experiencia web de escritorio primero, sin impedir uso responsive.

---

# 2. Pregunta principal

Para cada rol del producto:

> ¿Desde dónde necesita operar este usuario para cumplir sus tareas principales?

---

# 3. Roles incluidos

| Rol | Superficie principal | Superficie secundaria | Prioridad móvil | Prioridad desktop | Notas |
| --- | --- | --- | --- | --- | --- |
| Jugador | Web desktop/laptop | Web responsive | Media | Alta | Hackatón y demo se jugarán probablemente en laptop |
| Equipo desarrollador | Repo / VS Code / Antigravity | Notion/Markdown | No aplica | Alta | Configura contenido y código |
| Sistema evaluador | Backend API | N/A | No aplica | No aplica | Servicio interno |
| Personajes narrativos | Pantalla del juego | N/A | Media | Alta | Se renderizan dentro de UI visual novel |

---

# 4. Contexto de uso por rol

## Rol: Jugador

**Superficie principal:**

Web app en desktop/laptop.

**Superficie secundaria:**

Web responsive en móvil/tablet si el diseño lo permite.

**Contexto real de uso:**

El jugador entra a una URL durante el hackatón o demo, juega una partida corta de 5–8 minutos y evalúa la experiencia. Probablemente estará en laptop o monitor.

**Tareas principales desde la superficie principal:**

- Iniciar partida.
- Leer diálogos.
- Elegir respuestas.
- Escribir prompt.
- Ver feedback.
- Ver final.

**Tareas que pueden quedar en superficie secundaria:**

- Rejugar.
- Compartir resultado.
- Ver créditos.

**Implicaciones para wireframes:**

- Diseñar primero desktop/laptop.
- UI debe tener composición tipo visual novel: fondo + personaje + caja de diálogo.
- Prompt input debe tener espacio suficiente para escribir cómodamente.
- Stats deben ser visibles sin saturar.
- Mobile responsive puede existir, pero no debe liderar el diseño inicial.

---

## Rol: Equipo desarrollador

**Superficie principal:**

Repositorio, Markdown docs, Antigravity/Claude, terminal.

**Superficie secundaria:**

Notion si se decide importar documentación.

**Contexto real de uso:**

El equipo construye el proyecto durante hackatón usando prompting intensivo. Necesita documentos claros, scopes marcados y estructura de datos predecible.

**Tareas principales desde la superficie principal:**

- Leer docs.
- Generar wireframes.
- Construir frontend.
- Construir backend.
- Configurar mocks/API.
- Ajustar contenido narrativo.

**Implicaciones para wireframes:**

- Los wireframes deben usar placeholders.
- Deben representar Scope A primero.
- Deben permitir decidir si subir a Scope B.

---

## Rol: Sistema evaluador

**Superficie principal:**

Backend NestJS API.

**Superficie secundaria:**

Logs / base de datos / proveedor IA.

**Contexto real de uso:**

Recibe prompts del jugador y devuelve evaluación controlada. No tiene UI propia en Scope A.

**Tareas principales:**

- Validar request.
- Aplicar rate limits.
- Ejecutar mock evaluator o IA real.
- Devolver JSON.
- Registrar uso.

**Implicaciones para wireframes:**

- No requiere pantalla propia.
- Su resultado se muestra en Feedback Screen o modal.

---

# 5. Reglas generales de superficie

- El MVP es desktop-first.
- La experiencia debe funcionar como web app.
- No se construirá app nativa.
- No se requiere PWA en Scope A.
- No se requiere login.
- El prototipo debe poder abrirse por URL.
- Las superficies principales para wireframes son: Start Screen, Game Screen, Prompt Challenge, Feedback, Ending.
- Mobile responsive es deseable, pero no prioridad para Scope A.

---

# 6. Impacto en navegación

- No habrá navegación tradicional tipo dashboard.
- La navegación será narrativa: escena actual → interacción → siguiente escena.
- El jugador no debe necesitar menú lateral.
- Puede existir botón de reinicio o volver al inicio.
- Los stats deben persistir visualmente durante la partida.
- En Scope B/C puede aparecer pantalla de selección/resumen de día.

---

# 7. Impacto en wireframes

| Rol | Wireframes requeridos | Prioridad |
| --- | --- | --- |
| Jugador | Desktop principal, responsive opcional | Alta |
| Equipo desarrollador | No requiere wireframe, requiere docs/prompts | Media |
| Sistema evaluador | No requiere wireframe, solo API/feedback UI | Alta indirecta |
| Personajes | Representados en Game Screen | Alta |

---

# 8. Impacto técnico preliminar

- Frontend será Next.js web app.
- UI con Tailwind y Framer Motion o animaciones CSS.
- Backend NestJS separado.
- Base de datos PostgreSQL.
- No se usará Supabase/Firebase.
- No se usará Godot, Phaser o Ren'Py en Scope A.
- El juego debe poder correr en modo mock sin proveedores externos.
- Audio debe poder fallar sin romper la partida.

---

# 9. Decisiones abiertas

| Pregunta | Estado | Responsable | Fecha objetivo |
| --- | --- | --- | --- |
| ¿Qué tan pulido será mobile en Scope A? | Abierta | Equipo | Después de wireframes |
| ¿Se usará Framer Motion o CSS puro? | Abierta | Equipo técnico | Construcción frontend |
| ¿La demo se presentará en una sola laptop o pública por URL? | Abierta | Equipo | Hackatón |

---

# 10. Resumen de decisión

> Prompt or Get Fired será una web app desktop-first para hackatón. Los wireframes deben priorizar una experiencia visual novel en laptop/desktop, con placeholders de personajes y fondos. Mobile responsive será secundario. El sistema evaluador operará como backend sin UI propia, y los resultados se mostrarán dentro de la interfaz de juego.
