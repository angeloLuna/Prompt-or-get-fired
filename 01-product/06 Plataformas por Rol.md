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
