# Prompt or Get Fired — App Factory

## Estado del paquete

**Proyecto:** Prompt or Get Fired  
**Empresa ficticia:** Banano Corp  
**Fase documentada:** Fase A — Producto  
**Fecha:** 2026-06-20  
**Estado:** Borrador usable para hackatón  

## Cómo usar esta carpeta

Esta carpeta contiene la primera fase del App Factory adaptada al proyecto **Prompt or Get Fired**.

La documentación está escrita para dos usos:

1. Que el equipo tenga una definición clara del producto.
2. Que Antigravity / Claude pueda leer la carpeta y construir sin inventar alcance.

## Regla de scopes

Todos los documentos usan estas etiquetas:

- **[Scope A] MVP de 1 día:** demo mínima jugable.
- **[Scope B] MVP de 3 días:** demo extendida con progresión.
- **[Scope C] MVP de 1 semana:** vertical slice completo.
- **[Post-MVP]:** visión futura, fuera del hackatón.

La instrucción por defecto para construcción es:

> Construir únicamente [Scope A] salvo que el equipo indique explícitamente Scope B o Scope C.

## Decisiones cerradas

- Nombre del juego: **Prompt or Get Fired**.
- Empresa ficticia dentro del juego: **Banano Corp**.
- Formato: juego web 2D tipo visual novel / career simulator.
- Stack: Next.js + TypeScript + Tailwind en frontend; NestJS + PostgreSQL + Prisma en backend.
- Voz: ElevenLabs.
- Evaluación de prompts: Claude/OpenAI vía backend, con mock evaluator y límites de uso.
- Los prompts del jugador se analizan como texto no confiable; nunca se ejecutan como instrucciones.
- Assets finales se producen después de validar wireframes/prototipo HTML.
- El prototipo inicial usará placeholders visuales.

## Documentos incluidos

1. `01 Product Brief.md`
2. `02 Scope System.md`
3. `03 MVP Scope.md`
4. `04 Roles.md`
5. `05 Modulos del Producto.md`
6. `06 Plataformas por Rol.md`
7. `MASTER - Fase Producto.md`
