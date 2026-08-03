# PROJECT_CONTEXT.md

## Poppy Crafty — Contexto Maestro del Proyecto

> Este documento es el contexto oficial del proyecto. Si esta conversación
> continúa en una sesión nueva, este archivo (junto con `DECISIONS.md` y
> `CHANGELOG.md`) debe leerse primero para mantener continuidad.

---

## Estado del proyecto

🟢 Documentación consolidada (`docs/`). El SRS, el design system, el modelo de
datos y el roadmap están definidos. El código sigue siendo la plantilla base de
OB Solutions (`README.md` del repo dice "OB Template", `src/config/site.ts` y
`src/config/colors.ts` todavía tienen los valores placeholder genéricos, no los
de Poppy Crafty) — el desarrollo específico de Poppy Crafty **no ha comenzado**.

Ver `ROADMAP.md` para el checklist de qué falta antes de empezar a codear.

---

## Objetivo del proyecto

Diseñar, documentar e implementar el sitio web oficial de **Poppy Crafty**, un
emprendimiento de personalización de productos para eventos, regalos y
celebraciones.

El sitio debe servir como:

- Página corporativa.
- Catálogo de productos.
- Portafolio / galería.
- Blog.
- Plataforma de captación de clientes (formulario de contacto + solicitud de
  cotización).
- Base para una futura tienda en línea.

La tienda en línea (carrito, pagos, inventario, checkout) **no se construye en
esta versión**, pero toda la arquitectura — base de datos, panel administrativo,
RBAC — queda preparada para incorporarla sin rediseño. Ver "Dominio futuro" en
`DATABASE.md`.

---

## El emprendimiento

| | |
|---|---|
| Nombre | Poppy Crafty |
| Ubicación | Choluteca, Honduras |
| Modelo de negocio | Personalización bajo pedido — no hay producción en masa ni inventario. El cliente elige un producto, comparte su idea/referencias, y se desarrolla un diseño exclusivo para él. |

Productos principales: camisas personalizadas, tazas sublimadas, stickers,
toppers, coronas de cumpleaños, bandas personalizadas, cajas y etiquetas
personalizadas, papelería, decoraciones para fiestas, regalos personalizados.

También genera contenido educativo sobre Cricut, sublimación y manualidades —
el blog no es una sección secundaria, es una pieza central de la estrategia de
adquisición vía SEO (ver `MARKETING.md`).

---

## Público objetivo

Personas de 18–45 años: madres, emprendedores, negocios y empresas, organizadores
de eventos (cumpleaños, baby showers, graduaciones), personas que buscan regalos
personalizados. Detalle completo de segmentos y buyer personas en `MARKETING.md`.

---

## Filosofía del proyecto

- NO es una página sencilla ni un proyecto académico básico — se documenta y
  construye con estándar de producción real.
- El sitio debe transmitir profesionalismo, creatividad y confianza — no debe
  verse como tienda genérica, sino como marca consolidada.
- Debe destacar por diseño limpio, fotografías grandes, experiencia de usuario y
  organización del contenido, no por cantidad de funcionalidades.

---

## Stack técnico

El stack técnico de implementación (ORM, RBAC, patrón de módulo CRUD,
convenciones de carpetas, etc.) sigue **RULES.md** del repositorio como fuente
de verdad — es la plantilla de arquitectura de OB Solutions, no específica de
Poppy Crafty. Resumen:

| Capa | Tecnología |
|---|---|
| Framework | Next.js (App Router, RSC) — ver `AGENTS.md`, esta versión de Next tiene cambios respecto al entrenamiento del asistente, hay que leer `node_modules/next/dist/docs/` antes de escribir código nuevo. |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS v4 + shadcn/ui |
| Base de datos | PostgreSQL vía Supabase, ORM Drizzle |
| Auth | Supabase Auth |
| Validación | Zod |
| Forms | react-hook-form + zodResolver |
| Editor de blog | MDX |
| Gestor de paquetes | pnpm |

Modelo de datos completo: `DATABASE.md`. Sistema de diseño (paleta, tipografía,
componentes): `DESIGN_SYSTEM.md`.

---

## Alcance de la Versión 1

Ver `docs/SRS.md` §7 (corregido — la versión original de ese párrafo se
contradecía con el resto del propio documento, ver `DECISIONS.md`
2026-08-03 punto 5) y `ROADMAP.md`.

**Incluye:** sitio institucional, catálogo, blog, galería, formularios (contacto
y solicitud de cotización), integración WhatsApp/redes sociales, SEO,
responsive, accesibilidad, **panel administrativo funcional completo con RBAC**,
arquitectura preparada para e-commerce.

**No incluye:** pagos en línea, carrito de compras, inventario automático,
facturación.

---

## Estructura de la documentación (`docs/`)

```
docs/
├── PROJECT_CONTEXT.md   ← este archivo
├── SRS.md                Especificación funcional completa (UX, páginas, módulos)
├── DESIGN_SYSTEM.md       Paleta, tipografía, componentes, convenciones de UI
├── DATABASE.md            Modelo de datos — fuente única de verdad del schema
├── MARKETING.md           Estrategia digital, FODA, KPIs, buyer personas
├── ROADMAP.md             Qué falta, en qué orden, fases futuras (e-commerce)
├── CHANGELOG.md           Bitácora simple por fecha
└── DECISIONS.md           Por qué se decidió cada cosa no obvia
```

---

## Instrucciones para futuras conversaciones

1. Leer este archivo completo, luego `DECISIONS.md` y las últimas entradas de
   `CHANGELOG.md`.
2. Asumir que `docs/` (no `docs-context/`) es el contexto oficial vigente.
   `docs-context/` queda como material fuente histórico — en caso de conflicto,
   **`docs/` gana**.
3. No reinventar arquitectura ya decidida (RBAC, patrón CRUD, modelo de datos)
   salvo que se pida expresamente — son decisiones de la plantilla OB Solutions,
   no solo de este proyecto.
4. Toda decisión importante nueva se anota en `DECISIONS.md`. Todo avance real
   de desarrollo se anota en `CHANGELOG.md`.
