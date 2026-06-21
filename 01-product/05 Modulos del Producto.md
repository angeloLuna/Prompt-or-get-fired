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
