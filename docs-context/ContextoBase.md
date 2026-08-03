# PROJECT_CONTEXT.md

# Poppy Crafty Website
## Project Master Context

> Este documento sirve como contexto maestro del proyecto. Siempre que este proyecto continúe en un nuevo chat, este archivo deberá proporcionarse al asistente para mantener la continuidad del desarrollo.

---

# Estado del proyecto

Estado actual:

🟡 Fase de planificación.

Aún NO se ha comenzado el desarrollo.

Actualmente se está elaborando una Especificación de Requerimientos del Sistema (SRS) extremadamente detallada.

El objetivo es producir documentación profesional similar a la utilizada por empresas de desarrollo de software.

---

# Objetivo del proyecto

Diseñar y documentar completamente el sitio web oficial de **Poppy Crafty**, un emprendimiento dedicado a la personalización de productos para eventos, regalos y celebraciones.

El sitio debe servir tanto como:

- Página corporativa.
- Catálogo de productos.
- Portafolio.
- Blog.
- Plataforma de captación de clientes.
- Base para una futura tienda en línea.

NO se desarrollará una tienda online en esta primera versión, pero TODA la arquitectura deberá quedar preparada para ello.

---

# Descripción del emprendimiento

Nombre:

Poppy Crafty

Ubicación:

Choluteca, Honduras.

Tipo de negocio:

Emprendimiento de personalización.

Productos principales:

- Camisas personalizadas
- Tazas sublimadas
- Stickers
- Toppers
- Coronas de cumpleaños
- Bandas personalizadas
- Decoraciones
- Cajas personalizadas
- Etiquetas
- Papelería personalizada
- Decoraciones para fiestas
- Regalos personalizados

También genera contenido educativo sobre Cricut y personalización.

---

# Objetivo del sitio

El sitio debe transmitir profesionalismo, creatividad y confianza.

No debe verse como una tienda genérica.

Debe parecer el sitio oficial de una marca consolidada.

Debe destacar por:

- diseño limpio
- experiencia de usuario
- fotografías grandes
- mucho contenido
- excelente organización

---

# Público objetivo

Personas entre 18 y 45 años.

Madres.

Emprendedores.

Negocios.

Personas que organizan eventos.

Cumpleaños.

Baby Shower.

Graduaciones.

Empresas.

Clientes que buscan regalos personalizados.

---

# Estilo visual

Minimalista.

Elegante.

Mucho espacio.

Fotografías grandes.

Animaciones suaves.

Colores claros.

Paleta:

- Blanco
- Rosa pastel
- Beige
- Gris claro
- Negro para textos

Fuentes:

Poppins

Montserrat

Inter

---

# Filosofía del proyecto

NO crear una página sencilla.

NO crear un proyecto universitario básico.

Crear un sitio web que pueda ponerse en producción.

Toda decisión debe estar orientada a calidad profesional.

---

# Tecnologías propuestas

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:

- Supabase

Base de datos:

- PostgreSQL

Almacenamiento:

- Supabase Storage

Autenticación:

- Supabase Auth

Editor:

- MDX para el blog.

---

# Características principales

El sitio deberá incluir:

- Inicio
- Nosotros
- Productos
- Categorías
- Producto individual
- Blog
- Artículo
- Galería
- Preguntas frecuentes
- Contacto
- Políticas

---

# Funcionalidades obligatorias

Catálogo.

Blog.

Galería.

Formulario de contacto.

Formulario de pedidos.

WhatsApp.

Instagram.

Facebook.

TikTok.

Mapa.

Búsqueda.

Filtros.

Productos relacionados.

Compartir artículos.

Compartir productos.

SEO.

Responsive.

Accesibilidad.

Optimización de imágenes.

---

# Funcionalidades premium

Preparar la arquitectura para:

- tienda online
- carrito
- pagos
- wishlist
- favoritos
- seguimiento de pedidos
- dashboard
- estadísticas
- newsletter
- cupones
- promociones
- inventario
- cotizador automático
- personalizador de productos
- historial de pedidos

Aunque algunas NO se implementarán inicialmente.

---

# Blog

El blog es una parte fundamental.

NO es una sección secundaria.

Debe ayudar al SEO.

Debe atraer clientes.

Debe posicionar la marca.

---

# Contenido inicial del blog

Ya existen artículos escritos sobre:

- Materiales para Cricut.
- Tapetes Cricut.
- Mantenimiento Cricut.
- Errores comunes.
- Coronas de fomi.
- Consejos.
- Manualidades.

Posteriormente se agregarán más artículos.

---

# Catálogo

Cada producto tendrá:

- nombre
- descripción
- fotografías
- categoría
- galería
- precio desde
- variantes
- proceso de compra
- preguntas frecuentes

---

# Panel administrativo

Debe existir documentación completa para un panel administrativo aunque inicialmente no se implemente.

Debe contemplar:

- productos
- categorías
- pedidos
- blog
- imágenes
- usuarios
- clientes
- promociones
- estadísticas

---

# Documento principal

Se elaborará un documento llamado:

PoppyCraft_SRS.md

Será una especificación profesional.

Longitud esperada:

50–80 páginas aproximadamente.

Más de 20 000 palabras.

---

# Nivel de detalle esperado

Cada página deberá documentarse indicando:

- objetivo
- estructura
- componentes
- comportamiento
- responsive
- accesibilidad
- SEO
- animaciones
- funcionalidades
- validaciones
- rendimiento
- buenas prácticas

---

# Apartados que contendrá el SRS

1. Introducción
2. Contexto
3. Objetivos
4. Alcance
5. Modelo de negocio
6. Arquitectura
7. UX/UI
8. Branding
9. Sitemap
10. Navegación
11. Todas las páginas
12. Blog
13. Catálogo
14. Productos
15. Panel administrativo
16. Base de datos
17. Casos de uso
18. Requerimientos funcionales
19. Requerimientos no funcionales
20. Seguridad
21. SEO
22. Performance
23. Accesibilidad
24. Roadmap
25. Cronograma
26. Futuras mejoras

---

# Estándar de calidad

Todo el contenido generado deberá parecer documentación profesional de software.

No simplificar.

No omitir detalles.

Siempre priorizar:

- escalabilidad
- mantenibilidad
- experiencia del usuario
- SEO
- accesibilidad
- rendimiento
- organización

---

# Instrucciones para futuras conversaciones

Cuando este archivo sea proporcionado al asistente:

1. Leer completamente este documento.

2. Asumir que este es el contexto oficial del proyecto.

3. Continuar exactamente donde quedó el desarrollo del SRS.

4. Mantener coherencia con toda la documentación existente.

5. No reinventar la arquitectura salvo que se solicite expresamente.

6. Todo nuevo contenido debe integrarse al documento maestro PoppyCraft_SRS.md.


Ocupo implementar esto: 
crearía una carpeta docs así:

docs/
│
├── PROJECT_CONTEXT.md
├── SRS.md
├── DESIGN_SYSTEM.md
├── DATABASE.md
├── ROADMAP.md
├── CHANGELOG.md
└── DECISIONS.md

Los dos últimos te van a ahorrar muchos dolores de cabeza.

DECISIONS.md

Cada vez que tomes una decisión importante la anotás.

Ejemplo:

# Arquitectura

- Next.js App Router.
- Server Components por defecto.
- Supabase Auth.
- MDX para el blog.
- shadcn/ui como librería base.
- Tailwind CSS v4.
- Sin Redux.

Son cosas que después de tres meses uno ya no recuerda.

CHANGELOG.md

Algo simple.

## 2026-08-03

- Se terminó el SRS.
- Se terminó el Design System.
- Se definió la base de datos.
- Se inicia el desarrollo.