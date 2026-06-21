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
