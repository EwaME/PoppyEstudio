# PoppyCraft_SRS.md

# Especificación de Requerimientos del Sistema (SRS)

**Proyecto:** Sitio Web Oficial de Poppy Crafty

**Versión:** 1.1

**Estado:** En planificación

**Documento:** Parte 1

---

> **Nota de consolidación (2026-08-03):** este documento forma parte de
> `docs/`. El modelo de base de datos (antes duplicado en los capítulos 6, 8 y
> 17 de este mismo archivo, con nombres de tabla contradictorios entre sí) vive
> ahora únicamente en `docs/DATABASE.md` — los tres capítulos originales se
> reemplazaron por un puntero a ese archivo. El detalle completo del cambio y
> por qué se resolvió así está en `docs/DECISIONS.md`. El resto de este SRS
> (páginas, UX, módulos funcionales) se mantiene sin alterar.

---

# Control de versiones

| Versión | Fecha | Descripción |
|---------|---------|------------|
| 1.0 | Agosto 2026 | Inicio de la documentación |
| 1.1 | 2026-08-03 | Se resuelve la contradicción de §7 Alcance (panel administrativo) y se consolidan los 3 capítulos de base de datos en `docs/DATABASE.md` |

---

# Tabla de contenido

1. Introducción
2. Contexto del Proyecto
3. Descripción del Emprendimiento
4. Problema
5. Justificación
6. Objetivos
7. Alcance
8. Público Objetivo
9. Modelo de Negocio
10. Identidad de Marca
11. Propuesta de Valor
12. Principios de Diseño del Proyecto
13. Restricciones
14. Criterios de Éxito

---

# 1. Introducción

## 1.1 Propósito del documento

El presente documento constituye la Especificación de Requerimientos del Sistema (Software Requirements Specification - SRS) para el desarrollo del sitio web oficial de **Poppy Crafty**.

Su objetivo es definir de manera precisa todos los requerimientos funcionales, no funcionales, técnicos, visuales y estratégicos que conformarán el proyecto.

Este documento servirá como referencia durante todas las fases del desarrollo, desde la planificación hasta el mantenimiento futuro del sistema.

La documentación busca eliminar ambigüedades, reducir riesgos durante el desarrollo y garantizar que todas las decisiones técnicas respondan a los objetivos del emprendimiento.

---

## 1.2 Objetivo del documento

Este documento pretende convertirse en la guía principal para el desarrollo del sitio web.

Toda modificación futura deberá respetar la arquitectura aquí descrita.

Cada componente del sitio deberá responder a las especificaciones definidas en este documento.

---

## 1.3 Audiencia

Este documento está dirigido a:

- Diseñadores UX/UI
- Desarrolladores Frontend
- Desarrolladores Backend
- Administradores del sitio
- Propietarios del emprendimiento
- Profesores o evaluadores académicos
- Colaboradores futuros

---

# 2. Contexto del Proyecto

## 2.1 Situación actual

Poppy Crafty es un emprendimiento dedicado a la elaboración de productos personalizados para diferentes tipos de eventos y celebraciones.

Actualmente la mayor parte de la comunicación con los clientes ocurre mediante redes sociales y aplicaciones de mensajería.

Si bien este modelo resulta funcional durante las primeras etapas de un emprendimiento, presenta diversas limitaciones conforme aumenta la cantidad de clientes, productos y solicitudes personalizadas.

La información de los productos se encuentra distribuida entre publicaciones, historias, conversaciones privadas y catálogos informales, dificultando que un cliente pueda conocer toda la oferta disponible.

Asimismo, no existe un espacio centralizado donde puedan mostrarse los trabajos realizados, responder preguntas frecuentes, publicar contenido educativo o fortalecer la identidad de la marca.

Como consecuencia, el crecimiento del emprendimiento depende en gran medida del alcance de las redes sociales y del tiempo invertido en responder consultas repetitivas.

---

## 2.2 Necesidad del proyecto

Se requiere desarrollar un sitio web que permita consolidar toda la presencia digital del emprendimiento en una única plataforma profesional.

El sitio deberá cumplir múltiples funciones simultáneamente:

- Representar oficialmente la marca.
- Mostrar el catálogo de productos.
- Exhibir trabajos realizados.
- Facilitar el contacto con nuevos clientes.
- Publicar contenido educativo mediante un blog.
- Posicionar la marca en motores de búsqueda.
- Preparar la infraestructura para una futura tienda en línea.

No se pretende desarrollar únicamente una página informativa, sino una plataforma escalable capaz de crecer junto con el emprendimiento.

---

## 2.3 Visión del proyecto

El sitio web deberá convertirse en el principal canal digital de Poppy Crafty.

Toda la estrategia de contenido, posicionamiento y presentación de la marca girará alrededor del sitio web.

Las redes sociales deberán funcionar como canales que dirijan tráfico hacia la página, donde el usuario encontrará información organizada, detallada y permanentemente disponible.

---

# 3. Descripción del Emprendimiento

## 3.1 Nombre comercial

**Poppy Crafty**

---

## 3.2 Descripción

Poppy Crafty es un emprendimiento creativo dedicado al diseño y elaboración de productos completamente personalizados para celebraciones, regalos, eventos sociales y emprendimientos.

Cada producto es elaborado considerando las preferencias específicas del cliente, permitiendo obtener diseños únicos adaptados a diferentes ocasiones.

---

## 3.3 Productos principales

El catálogo inicial contempla:

- Camisas personalizadas
- Tazas sublimadas
- Stickers personalizados
- Toppers para pastel
- Bandas personalizadas
- Coronas de cumpleaños
- Cajas personalizadas
- Etiquetas
- Decoraciones para fiestas
- Papelería personalizada
- Regalos personalizados

Sin embargo, el sistema deberá permitir incorporar nuevas categorías en cualquier momento sin necesidad de modificar la arquitectura del sitio.

---

## 3.4 Servicios adicionales

Además de vender productos personalizados, Poppy Crafty busca convertirse en una referencia para personas interesadas en el mundo de las manualidades y la personalización.

Por esta razón se integrará un blog con contenido educativo relacionado con:

- Cricut
- Materiales
- Tapetes
- Sublimación
- Viniles
- Personalización
- Consejos
- Manualidades
- Emprendimiento creativo

Este contenido permitirá atraer visitantes desde Google y fortalecer el posicionamiento de la marca.

---

# 4. Problema

Actualmente los clientes enfrentan diversas dificultades al intentar conocer todos los productos disponibles.

Entre los principales problemas identificados se encuentran:

- Información dispersa.
- Catálogo incompleto.
- Falta de fotografías organizadas.
- Ausencia de un portafolio profesional.
- Dificultad para responder preguntas frecuentes.
- Dependencia de redes sociales.
- Escasa presencia en motores de búsqueda.
- Falta de una identidad digital consolidada.

Desde la perspectiva administrativa también existen limitaciones importantes.

Cada cliente requiere una conversación individual para explicar procesos, precios, tiempos de entrega y opciones de personalización.

Esto incrementa considerablemente el tiempo dedicado a la atención y limita la capacidad de crecimiento del negocio.

---

# 5. Justificación

El desarrollo del sitio web permitirá resolver las limitaciones actuales mediante una plataforma moderna, organizada y escalable.

La implementación del proyecto generará beneficios tanto para el negocio como para los clientes.

Entre ellos destacan:

- Mayor confianza hacia la marca.
- Incremento de la visibilidad.
- Centralización de la información.
- Mejor experiencia para el cliente.
- Posicionamiento en buscadores.
- Automatización parcial del proceso de atención.
- Exhibición permanente del catálogo.
- Publicación constante de contenido educativo.
- Preparación para futuras funcionalidades comerciales.

---

# 6. Objetivos

## 6.1 Objetivo General

Diseñar y desarrollar una plataforma web profesional para Poppy Crafty que centralice la información del emprendimiento, presente sus productos y servicios, fortalezca la identidad de marca, mejore la experiencia del cliente y establezca las bases para la futura digitalización completa del negocio.

---

## 6.2 Objetivos específicos

- Presentar profesionalmente el emprendimiento.
- Organizar el catálogo de productos.
- Mostrar fotografías de alta calidad.
- Incorporar un sistema de blog.
- Mejorar el posicionamiento SEO.
- Facilitar el contacto mediante WhatsApp.
- Permitir el crecimiento futuro del sitio.
- Documentar completamente el sistema.
- Garantizar accesibilidad y compatibilidad.
- Crear una arquitectura escalable.

---

# 7. Alcance

## Incluye

✔ Sitio web institucional.

✔ Catálogo.

✔ Blog.

✔ Galería.

✔ Formularios.

✔ Integración con WhatsApp.

✔ SEO.

✔ Responsive.

✔ Accesibilidad.

✔ Arquitectura preparada para e-commerce.

---

## No incluye (Versión 1)

✘ Pagos en línea.

✘ Carrito de compras.

✘ Inventario automático.

✘ Facturación.

Estas funcionalidades serán contempladas durante el diseño para facilitar su incorporación en versiones posteriores.

> **Corrección 2026-08-03:** esta lista incluía originalmente "Panel
> administrativo funcional" como fuera de alcance, lo cual contradecía al
> Capítulo 7 completo de este mismo documento (Partes 7.1–7.8), que especifica
> un panel administrativo funcional detallado, y a RULES.md, que exige panel
> CRUD + RBAC desde el día uno en todo proyecto de OB Solutions. Se elimina esa
> línea — el panel administrativo **sí** es parte de la Versión 1. Ver
> `docs/DECISIONS.md` (2026-08-03, punto 5).

---

# 8. Público Objetivo

El sitio estará orientado principalmente a personas interesadas en productos personalizados y artículos para celebraciones.

Entre los segmentos identificados se encuentran:

- Personas que organizan cumpleaños.
- Padres de familia.
- Madres de familia.
- Jóvenes.
- Emprendedores.
- Pequeños negocios.
- Organizadores de eventos.
- Empresas.
- Personas que buscan regalos personalizados.

---

# 9. Modelo de Negocio

Poppy Crafty opera bajo un modelo de personalización bajo pedido.

El cliente selecciona un producto, comparte su idea o referencias visuales y posteriormente se desarrolla un diseño completamente personalizado.

No existe producción masiva.

Cada producto es elaborado específicamente para cada cliente.

El sitio web deberá reflejar esta filosofía mediante una experiencia centrada en la personalización y no únicamente en la venta de productos estándar.

---

# 10. Identidad de Marca

La identidad visual deberá transmitir:

- Creatividad.
- Profesionalismo.
- Cercanía.
- Calidad.
- Confianza.
- Elegancia.
- Personalización.

No deberá utilizar una estética infantil o sobrecargada.

El diseño deberá sentirse limpio, moderno y atemporal.

---

# 11. Propuesta de Valor

Poppy Crafty no vende únicamente productos personalizados.

Ofrece experiencias, recuerdos y detalles únicos diseñados específicamente para cada cliente.

Cada pedido representa un proyecto individual.

El sitio web deberá comunicar este concepto desde la primera interacción.

---

# 12. Principios de Diseño

Durante todo el desarrollo deberán respetarse los siguientes principios:

- Simplicidad.
- Escalabilidad.
- Modularidad.
- Alto rendimiento.
- SEO desde el diseño.
- Accesibilidad.
- Mobile First.
- Contenido primero.
- Fotografía protagonista.
- Experiencia del usuario sobre la complejidad técnica.

---

# 13. Restricciones

- El sitio deberá funcionar correctamente en dispositivos móviles.
- No dependerá exclusivamente de redes sociales.
- Todo el contenido deberá poder administrarse fácilmente en futuras versiones.
- La arquitectura deberá permitir incorporar nuevas funcionalidades sin rediseñar el proyecto.

---

# 14. Criterios de Éxito

El proyecto se considerará exitoso cuando:

- El sitio represente profesionalmente la marca.
- Los clientes puedan conocer fácilmente todos los productos.
- Exista una mejora significativa en la organización de la información.
- El blog genere tráfico orgánico.
- El catálogo resulte intuitivo.
- La navegación sea rápida.
- El sitio sea completamente responsive.
- Se encuentre preparado para futuras expansiones.
- La documentación permita mantener y evolucionar el sistema durante los próximos años.

---

## Fin de la Parte 1

# Parte 2
# Arquitectura General del Sistema

---

# 15. Arquitectura del Proyecto

## 15.1 Filosofía de Arquitectura

El sitio web de Poppy Crafty será desarrollado siguiendo una arquitectura moderna, escalable y desacoplada, permitiendo que nuevas funcionalidades puedan incorporarse sin necesidad de rediseñar el sistema completo.

El proyecto se diseñará considerando que el emprendimiento crecerá progresivamente, por lo que desde su primera versión deberá estar preparado para soportar:

- Mayor cantidad de productos.
- Mayor cantidad de artículos del blog.
- Incremento de visitas.
- Implementación de comercio electrónico.
- Panel administrativo.
- Sistema de autenticación.
- Gestión de pedidos.
- Sistema de inventario.
- Estadísticas.
- Integraciones con terceros.

La arquitectura deberá minimizar el acoplamiento entre módulos, favorecer la reutilización de componentes y facilitar el mantenimiento a largo plazo.

---

## 15.2 Tipo de Arquitectura

Se implementará una arquitectura basada en componentes utilizando el ecosistema de React.

Cada sección del sitio será independiente y reutilizable.

La lógica de negocio permanecerá separada de la presentación.

Se buscará que ningún componente dependa directamente de otro cuando pueda comunicarse mediante propiedades, hooks o servicios.

---

## 15.3 Arquitectura General

```text
                    Usuario
                       │
             Navegador Web
                       │
               Next.js (Frontend)
                       │
        ┌──────────────┴──────────────┐
        │                             │
 Supabase Database          Supabase Storage
        │                             │
 PostgreSQL               Imágenes y archivos
```

---

## 15.4 Principios de Arquitectura

Todo el sistema deberá respetar los siguientes principios:

### Modularidad

Cada componente deberá cumplir una única responsabilidad.

---

### Escalabilidad

Agregar nuevas funcionalidades no deberá afectar el funcionamiento existente.

---

### Reutilización

Los componentes deberán diseñarse para ser reutilizados en múltiples páginas.

---

### Separación de responsabilidades

Se distinguirán claramente:

- interfaz
- lógica
- datos
- servicios
- utilidades

---

### Bajo acoplamiento

Los módulos deberán depender lo menos posible entre sí.

---

### Alta cohesión

Cada módulo deberá realizar únicamente tareas relacionadas con su propósito.

---

# 16. Tecnologías

## Frontend

### Next.js

Será utilizado como framework principal.

Razones:

- Excelente SEO.
- Server Side Rendering.
- Static Site Generation.
- Image Optimization.
- Routing moderno.
- Excelente rendimiento.

---

### React

Permitirá desarrollar interfaces reutilizables mediante componentes.

---

### TypeScript

Todo el proyecto deberá escribirse en TypeScript.

No se utilizará JavaScript plano.

Esto permitirá:

- tipado fuerte
- mejor mantenimiento
- menor cantidad de errores
- autocompletado
- documentación implícita

---

### Tailwind CSS

Framework principal para estilos.

Razones:

- velocidad
- consistencia
- responsive
- mantenimiento sencillo

---

# Backend

## Supabase

Será utilizado para:

- Base de datos
- Autenticación
- Storage
- APIs
- Seguridad

---

# Base de Datos

PostgreSQL

Razones:

- escalabilidad
- seguridad
- rendimiento
- relaciones
- consultas complejas

---

# Almacenamiento

Supabase Storage

Se utilizará para:

- fotografías
- banners
- artículos
- imágenes del blog
- productos
- recursos descargables

---

# Editor del Blog

MDX

Permitirá escribir artículos utilizando Markdown con componentes React.

Ventajas:

- excelente SEO

- mantenimiento sencillo

- velocidad

- flexibilidad

---

# 17. Arquitectura del Sitio

## Mapa general

```text
Inicio
│
├── Nosotros
│
├── Productos
│      │
│      ├── Camisas
│      ├── Tazas
│      ├── Stickers
│      ├── Coronas
│      ├── Bandas
│      ├── Toppers
│      ├── Papelería
│      └── Producto
│
├── Blog
│      │
│      ├── Cricut
│      ├── Manualidades
│      ├── Consejos
│      ├── Tutoriales
│      └── Artículo
│
├── Galería
│
├── Preguntas Frecuentes
│
├── Contacto
│
├── Políticas
│
└── Error 404
```

---

# 18. Flujo General del Usuario

## Usuario nuevo

Landing

↓

Conoce la marca

↓

Explora productos

↓

Ve fotografías

↓

Consulta información

↓

Contacta por WhatsApp

↓

Solicita cotización

↓

Realiza pedido

---

## Usuario interesado en Cricut

Google

↓

Artículo del Blog

↓

Lee contenido

↓

Descubre la marca

↓

Ve productos

↓

Solicita información

---

## Cliente recurrente

Accede directamente

↓

Busca producto

↓

Solicita nuevo pedido

↓

Comparte referencias

↓

Compra nuevamente

---

# 19. Sistema de Navegación

Toda la navegación deberá ser intuitiva.

Nunca deberá existir una página "muerta".

Cada página deberá ofrecer al usuario múltiples caminos para continuar navegando.

Ejemplo:

Producto

↓

Productos relacionados

↓

Categoría

↓

Galería

↓

Contacto

↓

Blog relacionado

---

# 20. Header

El Header será fijo (Sticky).

Elementos:

Logo

Menú

Buscar

Botón WhatsApp

Modo móvil

---

## Comportamiento

Desktop

Menú horizontal.

Mobile

Menú hamburguesa.

Scroll

Reducirá ligeramente su altura.

---

# 21. Footer

El footer será considerado un centro de información.

Contendrá:

Logo.

Descripción.

Redes sociales.

Enlaces rápidos.

Categorías.

Últimos artículos.

Información de contacto.

Mapa.

Horario.

Derechos reservados.

---

# 22. Sistema de Componentes

Todo el sitio deberá construirse mediante componentes reutilizables.

Ejemplo:

Button

Card

ProductCard

BlogCard

CategoryCard

GalleryCard

Hero

Navbar

Footer

Accordion

FAQ

Carousel

Testimonials

Timeline

Badge

Chip

Tag

Breadcrumb

Pagination

SearchBar

Newsletter

ContactForm

GalleryGrid

ImageViewer

ProductGallery

CallToAction

SectionTitle

MetricCard

StatCard

---

# 23. Organización del Proyecto

```text
src/

app/

components/

components/ui/

components/layout/

components/blog/

components/products/

components/gallery/

components/forms/

components/home/

components/shared/

hooks/

services/

lib/

utils/

types/

styles/

public/

content/

blog/

products/

images/
```

---

# 24. Convenciones

Toda carpeta utilizará minúsculas.

Componentes:

PascalCase

Funciones:

camelCase

Interfaces:

PascalCase

Hooks:

useNombre()

Constantes:

UPPER_SNAKE_CASE

---

# 25. Sistema Responsive

El sitio deberá funcionar correctamente desde 320 px hasta monitores 4K.

Breakpoints:

Mobile

Tablet

Laptop

Desktop

UltraWide

---

# 26. Rendimiento Esperado

Objetivos mínimos:

Performance > 95

SEO > 95

Accessibility > 95

Best Practices > 95

(Lighthouse)

---

# 27. Estrategia SEO Técnica

Todas las páginas deberán contar con:

- URL amigables.
- Meta Title.
- Meta Description.
- Open Graph.
- Twitter Cards.
- Sitemap.
- Robots.
- Canonical URL.
- Structured Data (Schema.org).
- Breadcrumbs.
- Imágenes optimizadas.
- Lazy Loading.
- Alt descriptivos.

---

# 28. Estrategia de Contenido

La página no dependerá únicamente del catálogo.

El contenido se dividirá en cuatro pilares:

## Comercial

Productos y servicios.

---

## Educativo

Blog.

Tutoriales.

Guías.

Consejos.

---

## Inspiracional

Galerías.

Trabajos realizados.

Ideas.

---

## Conversión

WhatsApp.

CTA.

Formularios.

Promociones.

---

# 29. Filosofía UX

El usuario nunca deberá preguntarse:

"¿Ahora qué hago?"

Cada página deberá conducir naturalmente hacia otra acción.

Leer.

Ver.

Explorar.

Contactar.

Comprar.

Compartir.

Guardar.

Seguir navegando.

---

# Fin de la Parte 2

# Parte 3
# UX/UI, Branding, Arquitectura de Navegación y Sistema de Diseño

---

# 30. Experiencia de Usuario (UX)

## 30.1 Objetivo

La experiencia de usuario (User Experience - UX) define la forma en que los visitantes interactuarán con el sitio web de Poppy Crafty. Todas las decisiones relacionadas con la estructura, organización del contenido, navegación e interacción deberán priorizar la facilidad de uso, la comprensión inmediata de la información y la conversión de visitantes en clientes potenciales.

El diseño de la experiencia no deberá enfocarse únicamente en la estética, sino principalmente en resolver las necesidades de los usuarios de forma intuitiva, rápida y agradable.

---

## 30.2 Principios de UX

El desarrollo del sitio deberá respetar los siguientes principios durante todas las fases del proyecto:

### Claridad

Toda la información deberá presentarse de manera clara, organizada y comprensible.

El usuario nunca deberá preguntarse:

- ¿Dónde estoy?
- ¿Qué hace este botón?
- ¿Cómo contacto al negocio?
- ¿Dónde encuentro este producto?

Cada pantalla deberá responder estas preguntas de forma natural.

---

### Simplicidad

Se evitarán elementos innecesarios que distraigan la atención del usuario.

Cada componente deberá tener una finalidad específica.

---

### Consistencia

Los colores, botones, tipografías, iconografía, espaciados y comportamientos deberán mantenerse constantes en todas las páginas.

El usuario no deberá aprender nuevamente cómo utilizar el sitio al cambiar de sección.

---

### Rapidez

La información importante deberá encontrarse en pocos clics.

Objetivos:

- Ningún producto a más de tres clics desde la página principal.
- Ningún artículo del blog a más de tres clics.
- Contacto mediante WhatsApp disponible permanentemente.

---

### Accesibilidad

Todas las personas deberán poder utilizar el sitio independientemente del dispositivo o capacidades físicas.

Esto incluye:

- Navegación mediante teclado.
- Compatibilidad con lectores de pantalla.
- Contrastes adecuados.
- Textos alternativos.
- Jerarquía semántica correcta.

---

### Conversión

Toda página deberá conducir naturalmente al usuario hacia una acción.

Ejemplos:

- Ver un producto.
- Leer un artículo.
- Compartir contenido.
- Contactar mediante WhatsApp.
- Solicitar una cotización.

---

# 31. Identidad Visual (Branding)

## 31.1 Objetivo

La identidad visual representa la personalidad de Poppy Crafty.

El diseño deberá comunicar profesionalismo, creatividad y confianza, evitando transmitir una imagen improvisada o excesivamente recargada.

La estética deberá mantenerse coherente en todo el sitio.

---

## 31.2 Personalidad de la marca

La marca deberá percibirse como:

- Cercana.
- Creativa.
- Elegante.
- Moderna.
- Artesanal.
- Profesional.
- Confiable.
- Inspiradora.

---

## 31.3 Sensaciones que debe transmitir

El visitante deberá percibir:

- Calidad.
- Orden.
- Personalización.
- Creatividad.
- Atención al detalle.
- Profesionalismo.
- Confianza.

---

# 32. Sistema de Colores

## 32.1 Objetivo

La paleta cromática deberá transmitir delicadeza, creatividad y elegancia sin caer en un estilo infantil.

Los colores deberán utilizarse de forma consistente en todos los componentes.

---

## 32.2 Colores principales

Color Primario

Rosa pastel.

Uso:

- Botones principales.
- Enlaces destacados.
- Elementos interactivos.

---

Color Secundario

Beige claro.

Uso:

- Fondos secundarios.
- Tarjetas.
- Separadores.

---

Color Base

Blanco.

Uso:

- Fondo principal.
- Espacios negativos.

---

Color de Texto

Gris oscuro casi negro.

Uso:

Todo el contenido textual.

---

Color de Éxito

Verde suave.

Uso:

Confirmaciones.

Mensajes positivos.

---

Color de Advertencia

Ámbar.

Uso:

Avisos.

Información importante.

---

Color de Error

Rojo suave.

Uso:

Errores de formularios.

---

# 33. Tipografía

## Objetivo

La tipografía deberá favorecer la lectura prolongada y transmitir modernidad.

---

### Fuente principal

Poppins

Utilizada para:

- Títulos.
- Botones.
- Menús.
- Encabezados.

---

### Fuente secundaria

Inter

Utilizada para:

- Párrafos.
- Descripciones.
- Artículos del blog.

---

### Jerarquía tipográfica

H1

Título principal.

Solo uno por página.

---

H2

Secciones principales.

---

H3

Subsecciones.

---

H4

Componentes específicos.

---

Texto normal

16px como base.

---

Texto pequeño

14px.

---

# 34. Iconografía

Los iconos deberán seguir un único estilo visual.

Se utilizarán iconos de línea (Outline).

No deberán mezclarse estilos diferentes.

---

Se utilizarán para:

- Categorías.
- Redes sociales.
- Contacto.
- Beneficios.
- Navegación.
- FAQ.
- Blog.

---

# 35. Espaciado

Todo el sitio utilizará una escala consistente de separación.

Ejemplo:

4 px

8 px

12 px

16 px

24 px

32 px

48 px

64 px

96 px

El espaciado nunca será arbitrario.

---

# 36. Grid del Sitio

Todo el contenido deberá alinearse mediante un sistema de columnas.

Desktop

12 columnas.

Tablet

8 columnas.

Mobile

4 columnas.

---

# 37. Diseño Responsive

El sitio deberá adaptarse correctamente a:

320 px

375 px

425 px

768 px

1024 px

1280 px

1440 px

1920 px

No deberá existir desplazamiento horizontal.

---

# 38. Arquitectura de Navegación

## Objetivo

La navegación permitirá al usuario desplazarse por el sitio de forma natural, intuitiva y sin perder el contexto.

Cada página deberá facilitar el acceso a otras secciones relevantes, reduciendo al mínimo la necesidad de utilizar el botón "Atrás" del navegador.

---

## Navegación Principal

La barra de navegación superior contendrá las siguientes opciones:

- Inicio
- Nosotros
- Productos
- Blog
- Galería
- Contacto

Además incluirá:

- Botón de WhatsApp
- Buscador
- Menú responsive

---

## Navegación Secundaria

En determinadas páginas se incluirán elementos complementarios como:

- Breadcrumbs
- Productos relacionados
- Artículos relacionados
- Categorías
- Enlaces rápidos
- CTA

---

# 39. Sitemap

```text
Inicio
│
├── Nosotros
│
├── Productos
│   ├── Camisas Personalizadas
│   ├── Tazas Sublimadas
│   ├── Stickers
│   ├── Toppers
│   ├── Bandas
│   ├── Coronas
│   ├── Papelería
│   ├── Decoraciones
│   └── Producto Individual
│
├── Blog
│   ├── Cricut
│   ├── Manualidades
│   ├── Consejos
│   ├── Tutoriales
│   ├── Inspiración
│   └── Artículo
│
├── Galería
│
├── Preguntas Frecuentes
│
├── Contacto
│
├── Política de Privacidad
│
├── Términos y Condiciones
│
└── Página 404
```

---

# 40. Header

El Header será visible en todas las páginas del sitio.

Componentes:

- Logo.
- Menú principal.
- Buscador.
- Botón de WhatsApp.
- Menú móvil.

Durante el desplazamiento vertical se reducirá ligeramente su altura para maximizar el área visible del contenido.

---

# 41. Footer

El Footer actuará como centro de información del sitio.

Contendrá:

- Logo.
- Descripción de la empresa.
- Enlaces rápidos.
- Categorías.
- Últimos artículos.
- Información de contacto.
- Redes sociales.
- Horario.
- Derechos reservados.

---

# 42. Breadcrumbs

Las páginas internas deberán mostrar una ruta de navegación.

Ejemplo:

Inicio

>

Productos

>

Coronas

>

Corona Princesa Rosa

Esto permitirá mejorar tanto la experiencia del usuario como el posicionamiento SEO.

---

# 43. Sistema de Llamadas a la Acción (CTA)

Cada página deberá incluir al menos una llamada a la acción clara y visible.

Ejemplos:

- Solicitar Cotización.
- Escribir por WhatsApp.
- Ver Más Productos.
- Leer Artículo.
- Solicitar Pedido.
- Ver Galería.
- Conocer Nuestros Servicios.

Las llamadas a la acción deberán destacar visualmente mediante color, tamaño y ubicación estratégica.

---

# 44. Flujo de Navegación

El sitio deberá guiar al usuario de manera progresiva.

Ejemplo:

Visitante

↓

Página de Inicio

↓

Productos Destacados

↓

Producto

↓

Formulario de Pedido

↓

WhatsApp

Otro posible flujo:

Google

↓

Artículo del Blog

↓

Productos Relacionados

↓

Formulario de Contacto

↓

Solicitud de Cotización

---

## Fin de la Parte 3

# Parte 4.1
# Especificación de la Página de Inicio (Home)

---

# 45. Página de Inicio

## 45.1 Objetivo

La página de inicio constituye el punto de entrada principal al sitio web de Poppy Crafty y representa la primera impresión que tendrá la mayoría de los visitantes sobre la marca.

Su función principal no es vender inmediatamente un producto, sino transmitir confianza, profesionalismo y creatividad, permitiendo que el usuario comprenda en pocos segundos qué hace Poppy Crafty, qué tipo de productos ofrece y cómo puede solicitar un pedido personalizado.

La página deberá actuar como un resumen de todo el sitio web, guiando al visitante hacia las secciones de mayor interés mediante una estructura clara, organizada y visualmente atractiva.

---

## 45.2 Objetivos Específicos

La página de inicio deberá cumplir los siguientes objetivos:

- Presentar la identidad de la marca.
- Mostrar los principales productos y servicios.
- Generar confianza en nuevos visitantes.
- Facilitar el acceso a las diferentes secciones del sitio.
- Mostrar trabajos realizados.
- Destacar el contenido educativo del blog.
- Incentivar el contacto mediante WhatsApp.
- Incrementar el tiempo de permanencia del usuario.
- Mejorar el posicionamiento SEO mediante contenido estructurado.

---

## 45.3 Público Objetivo

La página está dirigida a:

- Personas interesadas en productos personalizados.
- Padres y madres que organizan cumpleaños.
- Emprendedores.
- Negocios.
- Empresas.
- Organizadores de eventos.
- Personas que buscan regalos personalizados.
- Visitantes provenientes de Google.
- Visitantes provenientes de redes sociales.

---

# 46. Estructura General

La página estará organizada en el siguiente orden:

1. Header
2. Hero Principal
3. Productos Destacados
4. Categorías
5. ¿Por qué elegir Poppy Crafty?
6. Cómo realizamos un pedido
7. Galería de trabajos
8. Artículos recientes del Blog
9. Redes Sociales
10. Llamado final a la acción
11. Footer

Cada sección tendrá un propósito específico y deberá conducir naturalmente hacia la siguiente.

---

# 47. Header

## Objetivo

Permitir la navegación inmediata hacia cualquier sección del sitio.

---

## Componentes

- Logo.
- Menú principal.
- Buscador.
- Botón WhatsApp.
- Menú móvil.
- Indicador de página activa.

---

## Comportamiento

Al cargar la página permanecerá transparente sobre el Hero.

Cuando el usuario haga scroll:

- cambiará a fondo blanco;
- reducirá ligeramente su altura;
- agregará una sombra suave para mejorar la separación visual.

---

## Responsive

En dispositivos móviles:

- menú hamburguesa;
- botón de WhatsApp siempre visible;
- navegación desplegable mediante panel lateral.

---

# 48. Hero Principal

## Objetivo

Captar inmediatamente la atención del visitante y comunicar la esencia de la marca.

El Hero deberá responder en menos de cinco segundos las siguientes preguntas:

- ¿Quiénes somos?
- ¿Qué hacemos?
- ¿Por qué elegirnos?
- ¿Cómo contacto al negocio?

---

## Contenido

Fotografía principal de alta calidad mostrando productos personalizados.

Título principal.

Subtítulo.

Descripción breve.

Botón principal:

Solicitar Pedido

Botón secundario:

Ver Productos

Indicadores visuales de confianza.

---

## Ejemplo de contenido

### Título

Creamos detalles personalizados que convierten tus momentos especiales en recuerdos inolvidables.

### Subtítulo

Personalizamos camisas, tazas, toppers, coronas, cajas, stickers y mucho más para hacer única cada celebración.

---

## Botones

Primario

Solicitar por WhatsApp

Secundario

Explorar Catálogo

---

## Animaciones

- aparición progresiva del texto;
- efecto parallax muy ligero en la imagen;
- transición suave de botones;
- indicador para continuar desplazándose.

---

## SEO

Solo existirá un H1.

La imagen principal incluirá texto alternativo descriptivo.

---

# 49. Productos Destacados

## Objetivo

Mostrar rápidamente los productos más representativos del emprendimiento.

---

## Componentes

Tarjetas de producto.

Cada tarjeta incluirá:

- fotografía;
- nombre;
- descripción corta;
- precio desde;
- botón Ver más.

---

## Cantidad

Desktop

6 productos.

Tablet

4 productos.

Mobile

Carrusel horizontal.

---

## Productos sugeridos

- Camisas personalizadas.
- Tazas sublimadas.
- Coronas.
- Bandas.
- Stickers.
- Toppers.

---

## Interacciones

Hover

- aumento ligero;
- sombra;
- aparición del botón.

---

# 50. Categorías

## Objetivo

Permitir que el usuario encuentre rápidamente el tipo de producto que busca.

---

## Componentes

Cada categoría tendrá:

- imagen;
- icono;
- nombre;
- cantidad de productos.

---

## Categorías iniciales

Camisas

Tazas

Stickers

Coronas

Bandas

Toppers

Papelería

Decoraciones

---

# 51. Beneficios

## Objetivo

Generar confianza.

Responder por qué comprar en Poppy Crafty.

---

## Beneficios

Personalización completa.

Diseños exclusivos.

Materiales de calidad.

Atención personalizada.

Entrega responsable.

Cobertura nacional.

---

## Diseño

Se utilizarán tarjetas con iconografía consistente.

---

# 52. ¿Cómo realizamos tu pedido?

## Objetivo

Explicar el proceso de compra.

Reducir preguntas frecuentes.

---

## Pasos

### Paso 1

Contáctanos.

---

### Paso 2

Cuéntanos tu idea.

---

### Paso 3

Envíanos referencias.

---

### Paso 4

Diseñamos tu producto.

---

### Paso 5

Fabricación.

---

### Paso 6

Entrega.

---

## Diseño

Timeline horizontal.

En móvil:

Timeline vertical.

---

# 53. Galería

## Objetivo

Mostrar evidencia del trabajo realizado.

---

## Contenido

Fotografías reales.

No utilizar imágenes de stock.

---

## Distribución

Masonry Grid.

---

## Interacciones

Click

Abrir visor.

Zoom.

Desplazamiento.

---

# 54. Blog

## Objetivo

Mostrar contenido educativo.

Mejorar SEO.

Captar tráfico desde Google.

---

## Artículos mostrados

Últimos tres artículos.

---

Cada tarjeta mostrará:

Imagen.

Categoría.

Fecha.

Tiempo de lectura.

Título.

Resumen.

Botón Leer más.

---

# 55. Redes Sociales

## Objetivo

Incrementar la comunidad.

---

## Plataformas

Instagram.

Facebook.

TikTok.

---

## Componentes

Feed reciente.

Botón seguir.

---

# 56. CTA Final

## Objetivo

Cerrar la página incentivando el contacto.

---

## Texto sugerido

¿Listo para crear algo único?

Hablemos sobre tu próximo proyecto personalizado.

---

## Botones

Solicitar Cotización.

Escribir por WhatsApp.

---

# 57. Footer

## Componentes

Logo.

Descripción.

Menú.

Productos.

Blog.

Contacto.

Mapa.

Redes sociales.

Horario.

Copyright.

Políticas.

---

# 58. Responsive

## Desktop

Distribución completa.

---

## Tablet

Reorganización de columnas.

---

## Mobile

Diseño completamente vertical.

Botones grandes.

Menús desplegables.

Imágenes optimizadas.

---

# 59. Accesibilidad

La página deberá cumplir con WCAG 2.2 AA.

Esto implica:

- navegación mediante teclado;
- contraste adecuado;
- textos alternativos;
- etiquetas semánticas;
- indicadores visibles de foco;
- compatibilidad con lectores de pantalla.

---

# 60. Optimización SEO

La página deberá incluir:

- Meta Title.
- Meta Description.
- Open Graph.
- Twitter Cards.
- Schema.org.
- Breadcrumbs cuando aplique.
- Imágenes en formato WebP.
- Lazy Loading.
- URLs amigables.
- Datos estructurados para organización y negocio local.

---

# 61. Métricas de Rendimiento

Objetivos mínimos:

LCP < 2.5 s

CLS < 0.1

INP < 200 ms

Performance Lighthouse ≥ 95

SEO ≥ 95

Accessibility ≥ 95

Best Practices ≥ 95

---

# 62. Criterios de Aceptación

La página de inicio será considerada terminada cuando:

- represente correctamente la identidad de Poppy Crafty;
- permita comprender el negocio en menos de diez segundos;
- dirija al usuario hacia el catálogo, blog o contacto;
- funcione correctamente en todos los dispositivos definidos;
- cumpla con los objetivos de accesibilidad;
- obtenga las métricas de rendimiento establecidas;
- sirva como punto central de navegación del sitio.

---

## Fin de la Parte 4.1

# Parte 4.2
# Especificación Funcional – Página "Nosotros"

---

# 63. Página Nosotros

## 63.1 Objetivo General

La página **Nosotros** tiene como finalidad presentar la identidad de Poppy Crafty, transmitir confianza y fortalecer el vínculo emocional con los visitantes.

A diferencia de una página comercial orientada únicamente a vender productos, esta sección busca mostrar quién está detrás del emprendimiento, cómo nació, cuáles son sus valores y por qué cada producto es elaborado con dedicación y atención al detalle.

Su propósito principal es humanizar la marca y diferenciarla de otras opciones disponibles en el mercado.

---

# 63.2 Objetivos Específicos

La página deberá cumplir los siguientes objetivos:

- Presentar la historia del emprendimiento.
- Mostrar la filosofía de trabajo.
- Comunicar la misión y visión.
- Reforzar la confianza del visitante.
- Explicar qué hace diferente a Poppy Crafty.
- Motivar al usuario a continuar explorando el catálogo.
- Generar cercanía con los clientes.

---

# 63.3 Objetivos de Negocio

Esta página contribuirá directamente a:

- Incrementar la confianza en la marca.
- Mejorar la percepción de profesionalismo.
- Reducir la incertidumbre de nuevos clientes.
- Incrementar la tasa de conversión.
- Reforzar el posicionamiento de la marca.

---

# 63.4 Público Objetivo

Esta página está orientada principalmente a:

- Clientes que visitan la marca por primera vez.
- Personas provenientes de redes sociales.
- Usuarios que llegan desde Google.
- Empresas interesadas en realizar pedidos.
- Personas que desean conocer la trayectoria del emprendimiento antes de realizar una compra.

---

# 64. Estructura General

La página estará compuesta por las siguientes secciones:

1. Hero Institucional
2. Nuestra Historia
3. Nuestra Filosofía
4. Misión
5. Visión
6. Valores
7. ¿Por qué elegirnos?
8. Nuestro proceso creativo
9. Estadísticas del emprendimiento
10. Llamado a la acción
11. Footer

---

# 65. Hero Institucional

## Objetivo

Introducir al visitante a la identidad de la empresa mediante una imagen representativa y un mensaje inspirador.

---

## Componentes

- Imagen principal.
- Título.
- Subtítulo.
- Botón "Ver Productos".
- Botón "Contáctanos".

---

## Ejemplo de contenido

### Título

Conoce la historia detrás de cada creación.

### Descripción

En Poppy Crafty creemos que los pequeños detalles pueden convertirse en los recuerdos más importantes. Cada diseño es elaborado pensando en la persona que lo recibirá, cuidando cada elemento para ofrecer productos únicos y completamente personalizados.

---

## Comportamiento

La imagen deberá ocupar aproximadamente el 50 % del ancho en escritorio y el 100 % en dispositivos móviles.

Los botones deberán mantenerse visibles sin necesidad de desplazarse.

---

# 66. Nuestra Historia

## Objetivo

Explicar cómo surgió el emprendimiento.

No deberá tratarse únicamente de una línea de tiempo, sino de una narrativa que permita al visitante comprender el origen de la marca.

---

## Contenido sugerido

- Inicio del emprendimiento.
- Primeros productos.
- Evolución del catálogo.
- Incorporación de nuevas técnicas.
- Crecimiento del negocio.
- Situación actual.

---

## Diseño

Texto acompañado por fotografías reales del proceso de trabajo.

No utilizar imágenes genéricas.

---

# 67. Filosofía

## Objetivo

Transmitir la esencia de Poppy Crafty.

El visitante deberá comprender que no se venden únicamente productos personalizados, sino experiencias y recuerdos.

---

## Contenido

Explicar principios como:

- Atención al detalle.
- Creatividad.
- Personalización.
- Calidad.
- Cercanía con el cliente.
- Compromiso.

---

# 68. Misión

## Objetivo

Presentar la razón de existir del emprendimiento.

---

## Contenido sugerido

Diseñar y elaborar productos personalizados que transformen momentos especiales en recuerdos inolvidables, ofreciendo atención cercana, creatividad y calidad en cada detalle.

---

# 69. Visión

## Objetivo

Mostrar hacia dónde desea crecer la empresa.

---

## Contenido sugerido

Consolidarse como una marca reconocida en Honduras por la calidad, creatividad e innovación en productos personalizados, convirtiéndose en una referencia para celebraciones y regalos únicos.

---

# 70. Valores

## Objetivo

Mostrar los principios que guían el trabajo diario.

---

## Valores principales

- Creatividad.
- Honestidad.
- Compromiso.
- Calidad.
- Innovación.
- Responsabilidad.
- Cercanía.
- Respeto.

---

## Diseño

Cada valor será presentado mediante una tarjeta con:

- Icono.
- Nombre.
- Breve descripción.

---

# 71. ¿Por qué elegir Poppy Crafty?

## Objetivo

Responder a la pregunta que todo cliente se hace antes de realizar un pedido.

¿Por qué comprar aquí y no con otra persona?

---

## Beneficios

- Diseños completamente personalizados.
- Materiales de alta calidad.
- Atención personalizada.
- Comunicación constante.
- Entregas responsables.
- Amplia variedad de productos.
- Asesoría durante el proceso.

---

## Diseño

Tarjetas organizadas en una cuadrícula adaptable.

---

# 72. Nuestro Proceso Creativo

## Objetivo

Explicar cómo se desarrolla un pedido desde la idea inicial hasta la entrega.

---

## Pasos

1. Recepción de la idea.
2. Análisis de requerimientos.
3. Diseño.
4. Aprobación del cliente.
5. Producción.
6. Control de calidad.
7. Empaque.
8. Entrega.

---

## Diseño

Timeline horizontal en escritorio.

Timeline vertical en dispositivos móviles.

---

# 73. Estadísticas

## Objetivo

Mostrar evidencia del crecimiento del emprendimiento.

---

## Ejemplos

Productos elaborados.

Clientes atendidos.

Categorías disponibles.

Años de experiencia.

Proyectos personalizados.

---

## Observación

Las cifras deberán actualizarse fácilmente desde el panel administrativo en futuras versiones.

---

# 74. Llamado a la Acción

## Objetivo

Evitar que el usuario abandone la página sin realizar ninguna acción.

---

## Texto sugerido

¿Tienes una idea en mente?

Permítenos ayudarte a convertirla en un detalle único y completamente personalizado.

---

## Botones

- Solicitar cotización.
- Ver catálogo.

---

# 75. Requerimientos Funcionales

RF-NOS-001

El sistema deberá mostrar la historia del emprendimiento.

---

RF-NOS-002

El sistema deberá mostrar la misión.

---

RF-NOS-003

El sistema deberá mostrar la visión.

---

RF-NOS-004

El sistema deberá mostrar los valores institucionales.

---

RF-NOS-005

El sistema deberá mostrar el proceso creativo.

---

RF-NOS-006

El sistema deberá mostrar estadísticas del negocio.

---

RF-NOS-007

El sistema deberá incluir llamadas a la acción visibles.

---

# 76. Requerimientos No Funcionales

RNF-NOS-001

La página deberá cargar en menos de dos segundos bajo condiciones normales.

---

RNF-NOS-002

Todas las imágenes deberán estar optimizadas.

---

RNF-NOS-003

El contenido deberá ser completamente responsive.

---

RNF-NOS-004

Toda la información deberá estar correctamente estructurada mediante etiquetas HTML semánticas.

---

RNF-NOS-005

La página deberá cumplir con WCAG 2.2 nivel AA.

---

# 77. SEO

La página deberá incluir:

- Meta Title.
- Meta Description.
- Open Graph.
- Datos estructurados.
- URL amigable.
- Encabezados jerárquicos.
- Imágenes con texto alternativo.
- Contenido original.

---

# 78. Accesibilidad

La navegación deberá realizarse completamente mediante teclado.

Todos los botones deberán tener indicadores visibles de foco.

Las imágenes deberán incluir descripciones alternativas.

Los colores deberán cumplir las relaciones mínimas de contraste.

---

# 79. Estados de la Página

## Estado Normal

Toda la información disponible.

---

## Estado de Carga

Skeletons para imágenes y textos.

---

## Estado de Error

Mensaje amigable indicando que la información no pudo cargarse.

Botón para reintentar.

---

## Estado Vacío

En caso de que aún no exista contenido configurado, deberá mostrarse un mensaje institucional sin romper el diseño.

---

# 80. Criterios de Aceptación

La página será considerada terminada cuando:

- Comunique claramente la identidad de Poppy Crafty.
- Genere confianza en nuevos visitantes.
- Explique el origen y propósito del emprendimiento.
- Permita comprender la filosofía de trabajo.
- Funcione correctamente en todos los dispositivos.
- Cumpla con los criterios de accesibilidad establecidos.
- Mantenga coherencia visual con el resto del sitio.

---

## Fin de la Parte 4.2

# Parte 4.3
# Especificación Funcional – Página "Productos"

---

# 81. Página Productos

## 81.1 Objetivo General

La página **Productos** constituye el catálogo principal del sitio web y representa el núcleo comercial de Poppy Crafty.

Su finalidad es presentar de manera organizada todos los productos disponibles, permitiendo que el usuario explore las diferentes categorías, conozca las opciones de personalización y encuentre rápidamente el producto que mejor se adapte a sus necesidades.

A diferencia de una tienda en línea tradicional, esta página no busca finalizar una compra inmediata, sino facilitar la exploración del catálogo y conducir al visitante hacia una solicitud de cotización o contacto mediante WhatsApp.

---

# 81.2 Objetivos Específicos

La página deberá:

- Mostrar el catálogo completo.
- Organizar los productos por categorías.
- Facilitar la búsqueda.
- Permitir filtrar resultados.
- Mostrar fotografías de alta calidad.
- Explicar brevemente cada producto.
- Dirigir al usuario hacia la página individual del producto.
- Facilitar la solicitud de un pedido personalizado.

---

# 81.3 Objetivos de Negocio

La página contribuirá a:

- Incrementar el número de solicitudes de cotización.
- Reducir consultas repetitivas.
- Mostrar toda la oferta comercial.
- Incentivar la navegación.
- Mejorar el SEO mediante páginas indexables.

---

# 82. Distribución General

La página estará organizada de la siguiente manera:

1. Hero de la sección
2. Buscador
3. Filtros
4. Categorías destacadas
5. Catálogo de productos
6. Paginación
7. CTA
8. Footer

---

# 83. Hero

## Objetivo

Presentar el catálogo e introducir al usuario en el universo de productos personalizados de Poppy Crafty.

---

## Componentes

- Imagen principal.
- Título.
- Descripción.
- Botón "Solicitar Cotización".

---

### Ejemplo

# Productos Personalizados

Encuentra inspiración para tu próxima celebración con nuestra colección de productos personalizados elaborados especialmente para cada cliente.

---

# 84. Sistema de Búsqueda

## Objetivo

Permitir localizar rápidamente un producto.

---

## Funcionamiento

El buscador deberá filtrar resultados en tiempo real.

La búsqueda deberá considerar:

- Nombre.
- Categoría.
- Etiquetas.
- Palabras clave.

---

## Ejemplos

Usuario escribe:

Camisa

Resultado:

Camisas Personalizadas

---

Usuario escribe:

Cumpleaños

Resultado:

Coronas

Bandas

Toppers

Decoraciones

---

# 85. Sistema de Filtros

Los filtros permitirán reducir el catálogo.

---

## Categoría

- Camisas
- Tazas
- Stickers
- Coronas
- Bandas
- Toppers
- Papelería
- Decoraciones

---

## Ocasión

- Cumpleaños
- Baby Shower
- Graduación
- Boda
- Empresa
- Regalos

---

## Personalización

- Fotografía
- Nombre
- Fecha
- Texto
- Logo

---

## Precio

Precio desde.

---

# 86. Categorías Destacadas

Antes del catálogo aparecerán tarjetas grandes con las categorías principales.

Cada categoría mostrará:

- Imagen.
- Nombre.
- Cantidad de productos.
- Descripción corta.

---

# 87. Catálogo

El catálogo utilizará un Grid Responsive.

Desktop

4 columnas.

Tablet

3 columnas.

Mobile

2 columnas.

---

Cada tarjeta incluirá:

Fotografía.

Nombre.

Descripción corta.

Precio desde.

Categoría.

Botón Ver Producto.

Botón Compartir.

---

# 88. Tarjeta de Producto

## Componentes

Imagen principal.

Nombre.

Precio desde.

Descripción.

Categoría.

Etiqueta "Nuevo" (opcional).

Etiqueta "Más vendido" (opcional).

---

## Hover

Desktop

- Elevación.
- Zoom ligero.
- Cambio de sombra.
- Aparición del botón.

---

Mobile

No existirán efectos hover.

---

# 89. Ordenamiento

El usuario podrá ordenar por:

- Más recientes.
- Más populares.
- Nombre A-Z.
- Nombre Z-A.
- Precio menor.
- Precio mayor.

---

# 90. Estados del Catálogo

## Estado Normal

Productos disponibles.

---

## Estado de Carga

Skeleton Cards.

---

## Estado Vacío

No se encontraron productos.

Se sugerirán otras categorías.

---

## Estado Error

Mensaje amigable.

Botón Reintentar.

---

# 91. Paginación

Cuando existan más productos de los permitidos por página, el sistema mostrará:

Anterior

Página actual

Siguiente

---

También podrá utilizarse carga progresiva ("Cargar más") si se considera una mejor experiencia de usuario.

---

# 92. CTA

Después del catálogo aparecerá una sección de conversión.

---

## Texto

¿No encontraste exactamente lo que buscabas?

Creamos diseños completamente personalizados según tu idea.

---

Botones

Solicitar Cotización

Escribir por WhatsApp

---

# 93. Requerimientos Funcionales

RF-PROD-001

El sistema deberá listar todos los productos disponibles.

---

RF-PROD-002

El sistema deberá permitir búsquedas.

---

RF-PROD-003

El sistema deberá permitir filtrar productos.

---

RF-PROD-004

El sistema deberá mostrar categorías.

---

RF-PROD-005

El sistema deberá permitir ordenar resultados.

---

RF-PROD-006

Cada producto deberá tener su propia página.

---

RF-PROD-007

El usuario podrá compartir un producto.

---

RF-PROD-008

El sistema deberá mostrar productos relacionados.

---

RF-PROD-009

El sistema deberá mostrar el precio desde.

---

RF-PROD-010

El sistema deberá permitir acceder al formulario de pedido.

---

# 94. Requerimientos No Funcionales

RNF-PROD-001

Carga inferior a dos segundos.

---

RNF-PROD-002

Lazy Loading de imágenes.

---

RNF-PROD-003

Responsive.

---

RNF-PROD-004

Optimización SEO.

---

RNF-PROD-005

Accesibilidad WCAG 2.2.

---

RNF-PROD-006

Imágenes WebP.

---

RNF-PROD-007

Navegación mediante teclado.

---

# 95. SEO

Cada producto deberá ser indexable.

Cada categoría deberá tener:

- URL amigable.
- Meta Description.
- Meta Title.
- OpenGraph.
- Datos estructurados.
- Canonical.
- Breadcrumbs.

---

# 96. Accesibilidad

Todo el catálogo deberá poder utilizarse sin mouse.

Las tarjetas deberán ser navegables mediante teclado.

Las imágenes deberán incluir texto alternativo.

---

# 97. Analítica

Se registrarán eventos como:

- Producto visto.
- Categoría visitada.
- Búsqueda realizada.
- Producto compartido.
- Botón WhatsApp presionado.
- Solicitud de cotización iniciada.

Estos datos permitirán identificar los productos más consultados y optimizar futuras campañas de marketing.

---

# 98. Criterios de Aceptación

La página será aceptada cuando:

- Muestre correctamente todos los productos publicados.
- Los filtros funcionen sin recargar la página.
- El buscador arroje resultados relevantes.
- Las categorías sean intuitivas.
- La navegación hacia el detalle del producto sea rápida.
- El catálogo funcione correctamente en dispositivos móviles, tabletas y escritorio.
- El rendimiento y la accesibilidad cumplan con los objetivos definidos en el proyecto.

---

## Fin de la Parte 4.3

# Parte 4.4
# Especificación Funcional – Página "Producto Individual"

---

# 99. Página Producto Individual

## 99.1 Objetivo General

La página **Producto Individual** representa el nivel más profundo del catálogo y constituye el principal punto de conversión del sitio web.

Su propósito es proporcionar al usuario toda la información necesaria para comprender el producto, visualizarlo desde diferentes perspectivas, conocer las posibilidades de personalización y solicitar un pedido sin necesidad de realizar consultas adicionales.

La página deberá transmitir profesionalismo, confianza y transparencia, facilitando el proceso de decisión y reduciendo la incertidumbre del cliente.

Aunque en la primera versión del sitio no existirá un sistema de compra en línea, toda la arquitectura deberá quedar preparada para incorporar funcionalidades de comercio electrónico en futuras versiones sin necesidad de rediseñar la interfaz.

---

# 99.2 Objetivos Específicos

La página deberá:

- Presentar información completa del producto.
- Mostrar fotografías de alta calidad.
- Explicar las opciones de personalización.
- Informar materiales y características.
- Mostrar el proceso de pedido.
- Resolver dudas frecuentes.
- Facilitar el contacto mediante WhatsApp.
- Recomendar productos relacionados.
- Favorecer el posicionamiento SEO.

---

# 99.3 Objetivos de Negocio

La página contribuirá a:

- Incrementar solicitudes de cotización.
- Reducir consultas repetitivas.
- Mejorar la confianza del cliente.
- Incrementar el tiempo de permanencia.
- Favorecer ventas cruzadas mediante productos relacionados.
- Preparar la futura implementación de una tienda en línea.

---

# 100. Estructura General

La página estará organizada de la siguiente forma:

1. Breadcrumbs
2. Galería principal
3. Información general
4. Opciones de personalización
5. Especificaciones del producto
6. Materiales utilizados
7. Proceso de compra
8. Preguntas frecuentes
9. Productos relacionados
10. Compartir producto
11. CTA principal
12. Footer

---

# 101. Breadcrumbs

Ejemplo:

Inicio

>

Productos

>

Coronas

>

Corona Princesa Rosa

---

Objetivos:

- Facilitar la navegación.
- Mejorar el SEO.
- Permitir regresar fácilmente a la categoría.

---

# 102. Galería de Imágenes

## Objetivo

Mostrar el producto desde diferentes perspectivas.

---

## Componentes

Imagen principal.

Miniaturas.

Visor ampliado.

Zoom.

Pantalla completa.

---

## Funcionalidades

Cambio mediante clic.

Cambio mediante teclado.

Cambio mediante gestos táctiles.

---

## Cantidad recomendada

Entre 5 y 12 fotografías por producto.

---

## Tipos de fotografías

Vista frontal.

Vista lateral.

Detalle.

Producto terminado.

Producto en uso.

Proceso de elaboración.

---

# 103. Información General

La sección mostrará:

Nombre.

Categoría.

Precio desde.

Descripción.

Tiempo estimado de elaboración.

Disponibilidad.

Código interno.

Etiquetas.

---

## Ejemplo

Corona Personalizada Princesa Rosa

Desde L.120

Tiempo de elaboración:

3 a 5 días hábiles.

---

# 104. Opciones de Personalización

Dependiendo del producto podrán configurarse:

Nombre.

Edad.

Fotografía.

Texto.

Colores.

Temática.

Personaje.

Logotipo.

Fecha.

Mensaje.

---

## Observación

Estas opciones inicialmente serán únicamente informativas.

En futuras versiones se convertirán en controles interactivos.

---

# 105. Materiales

El sistema deberá listar los materiales utilizados.

Ejemplo:

Foami.

Foami perchado.

Vinil textil.

Cartulina.

Papel fotográfico.

Cintas decorativas.

Piedras.

Pegamento especializado.

---

# 106. Especificaciones Técnicas

Cada producto deberá incluir información estructurada.

Ejemplo:

Medidas.

Peso aproximado.

Material principal.

Uso recomendado.

Reutilizable.

Método de limpieza.

Tiempo de producción.

---

# 107. Proceso de Pedido

Se mostrará un resumen visual del proceso.

1. Contacto.

2. Envío de referencias.

3. Diseño.

4. Aprobación.

5. Producción.

6. Entrega.

---

# 108. Preguntas Frecuentes

Cada producto podrá incluir preguntas específicas.

Ejemplos:

¿Puedo cambiar los colores?

¿Puedo agregar una fotografía?

¿Realizan envíos?

¿Cuánto tarda?

¿Qué métodos de pago aceptan?

---

# 109. Productos Relacionados

El sistema mostrará productos similares.

Ejemplo:

Si el usuario observa una Corona.

Se recomendarán:

Bandas.

Toppers.

Decoraciones.

Cajas.

---

Cantidad sugerida:

4 productos.

---

# 110. Compartir Producto

El visitante podrá compartir el producto mediante:

WhatsApp.

Facebook.

Instagram (copiando enlace).

Correo electrónico.

Copiar enlace.

---

# 111. CTA Principal

Título:

¿Te gustó este diseño?

Texto:

Podemos personalizarlo completamente según tu idea.

---

Botones

Solicitar Cotización

Escribir por WhatsApp

---

# 112. Estados de la Página

## Estado Normal

Toda la información disponible.

---

## Estado de Carga

Skeletons.

Galería simulada.

Texto simulado.

---

## Estado Vacío

Producto no encontrado.

Botón para regresar.

Productos sugeridos.

---

## Estado Error

Mensaje amigable.

Botón Reintentar.

---

# 113. Requerimientos Funcionales

RF-DET-001

El sistema deberá mostrar la información completa del producto.

---

RF-DET-002

El sistema deberá mostrar múltiples imágenes.

---

RF-DET-003

El sistema deberá permitir ampliar imágenes.

---

RF-DET-004

El sistema deberá mostrar especificaciones.

---

RF-DET-005

El sistema deberá mostrar materiales.

---

RF-DET-006

El sistema deberá mostrar preguntas frecuentes.

---

RF-DET-007

El sistema deberá mostrar productos relacionados.

---

RF-DET-008

El sistema deberá permitir compartir el producto.

---

RF-DET-009

El sistema deberá permitir contactar mediante WhatsApp.

---

RF-DET-010

El sistema deberá mostrar el proceso para realizar el pedido.

---

# 114. Requerimientos No Funcionales

RNF-DET-001

Carga inferior a dos segundos.

---

RNF-DET-002

Galería optimizada.

---

RNF-DET-003

Imágenes WebP.

---

RNF-DET-004

Responsive.

---

RNF-DET-005

Compatible con teclado.

---

RNF-DET-006

Cumplimiento WCAG 2.2.

---

RNF-DET-007

Preparado para futuras funciones de e-commerce.

---

# 115. SEO

Cada producto deberá generar automáticamente:

Meta Title.

Meta Description.

Slug amigable.

OpenGraph.

Twitter Cards.

Schema Product.

Schema Breadcrumb.

Canonical.

Keywords relacionadas.

---

# 116. Datos Estructurados

Se implementará Schema.org Product preparado para futuras versiones.

Campos previstos:

Nombre.

Imagen.

Descripción.

Marca.

Categoría.

Precio.

Disponibilidad.

URL.

---

# 117. Analítica

Se registrarán eventos como:

Producto visitado.

Tiempo de permanencia.

Galería utilizada.

Zoom utilizado.

Producto compartido.

WhatsApp presionado.

Solicitud iniciada.

Productos relacionados abiertos.

---

# 118. Futuras Funcionalidades

La arquitectura deberá contemplar:

Sistema de reseñas.

Calificaciones.

Wishlist.

Favoritos.

Comparador.

Carrito.

Inventario.

Variantes.

Stock.

Promociones.

Cupones.

Descuentos.

Productos vistos recientemente.

Historial del usuario.

Personalizador interactivo.

Vista previa del diseño.

Calculadora automática de precio.

Seguimiento del pedido.

---

# 119. Criterios de Aceptación

La página será considerada finalizada cuando:

- Muestre toda la información del producto de forma clara y organizada.
- Permita visualizar todas las imágenes correctamente.
- Explique el proceso de personalización.
- Incluya materiales y especificaciones.
- Muestre productos relacionados.
- Permita compartir fácilmente el producto.
- Facilite el contacto mediante WhatsApp.
- Sea completamente responsive.
- Cumpla con los estándares de accesibilidad.
- Obtenga una puntuación mínima de 95 en Lighthouse para SEO, Performance, Best Practices y Accessibility.

---

## Fin de la Parte 4.4

# Parte 4.5
# Especificación Funcional – Página "Blog"

---

# 120. Página Blog

## 120.1 Objetivo General

La página **Blog** constituye el centro de contenido educativo del sitio web de Poppy Crafty.

Su propósito es atraer visitantes mediante contenido de valor relacionado con la personalización de productos, Cricut, sublimación, papelería creativa, manualidades y consejos para eventos.

Además de fortalecer el posicionamiento SEO del sitio, el blog servirá como una herramienta para generar confianza, demostrar experiencia en el área y convertir lectores en futuros clientes.

El contenido publicado deberá responder preguntas frecuentes, inspirar nuevos proyectos y mostrar el conocimiento de la marca en el ámbito de la personalización.

---

# 120.2 Objetivos Específicos

La página deberá:

- Mostrar todos los artículos publicados.
- Organizar el contenido por categorías.
- Facilitar la búsqueda de artículos.
- Mostrar publicaciones destacadas.
- Incrementar el tiempo de permanencia.
- Favorecer el posicionamiento en buscadores.
- Dirigir lectores hacia los productos relacionados.
- Motivar el contacto con Poppy Crafty.

---

# 120.3 Objetivos de Negocio

La página contribuirá a:

- Incrementar el tráfico orgánico desde Google.
- Captar nuevos clientes.
- Posicionar a Poppy Crafty como referente en personalización.
- Mejorar la autoridad del dominio.
- Aumentar la conversión mediante contenido educativo.
- Generar visitas recurrentes.

---

# 121. Estructura General

La página estará organizada en el siguiente orden:

1. Hero del Blog
2. Buscador
3. Categorías
4. Artículo Destacado
5. Últimos Artículos
6. Artículos Populares
7. Etiquetas
8. CTA
9. Footer

---

# 122. Hero del Blog

## Objetivo

Presentar el blog como un espacio donde los usuarios pueden aprender, inspirarse y resolver dudas relacionadas con la personalización de productos.

---

## Componentes

- Imagen principal.
- Título.
- Descripción.
- Buscador.

---

### Ejemplo

# Blog Poppy Crafty

Consejos, tutoriales, ideas e inspiración para crear productos personalizados y aprovechar al máximo tu Cricut.

---

# 123. Sistema de Búsqueda

## Objetivo

Permitir encontrar rápidamente un artículo.

---

## Funcionamiento

La búsqueda deberá considerar:

- Título.
- Contenido.
- Categorías.
- Etiquetas.
- Palabras clave.

---

## Búsqueda en tiempo real

Mientras el usuario escribe, los resultados deberán actualizarse dinámicamente sin recargar la página.

---

# 124. Categorías

Las publicaciones estarán organizadas por categorías.

---

## Categorías iniciales

- Cricut
- Sublimación
- Manualidades
- Personalización
- Consejos
- Tutoriales
- Materiales
- Inspiración
- Eventos
- Emprendimiento

---

Cada categoría mostrará:

- Nombre.
- Imagen representativa.
- Cantidad de artículos.

---

# 125. Artículo Destacado

## Objetivo

Resaltar la publicación más importante o reciente.

---

## Componentes

Imagen principal.

Categoría.

Fecha.

Tiempo de lectura.

Título.

Resumen.

Botón "Leer artículo".

---

# 126. Listado de Artículos

El listado principal utilizará un Grid Responsive.

---

Desktop

3 columnas.

---

Tablet

2 columnas.

---

Mobile

1 columna.

---

Cada tarjeta mostrará:

- Imagen destacada.
- Categoría.
- Fecha.
- Tiempo de lectura.
- Autor.
- Título.
- Resumen.
- Botón Leer más.

---

# 127. Artículos Populares

## Objetivo

Mostrar las publicaciones más consultadas para incentivar la navegación.

---

## Criterios

Inicialmente se ordenarán manualmente.

En futuras versiones podrán utilizar métricas de visitas.

---

# 128. Etiquetas

Cada artículo podrá tener múltiples etiquetas.

Ejemplos:

- Cricut
- Vinil
- HTV
- Stickers
- Sublimación
- Cumpleaños
- Foami
- Cartulina
- Toppers
- Emprendimiento

Las etiquetas permitirán descubrir contenido relacionado.

---

# 129. Barra Lateral (Desktop)

En pantallas grandes se mostrará un panel lateral con:

- Buscador.
- Categorías.
- Artículos recientes.
- Artículos populares.
- Etiquetas.
- Botón de WhatsApp.

En dispositivos móviles este contenido aparecerá debajo del listado principal.

---

# 130. Llamado a la Acción

## Objetivo

Convertir lectores en clientes.

---

## Texto sugerido

¿Te gustaron estas ideas?

En Poppy Crafty podemos ayudarte a convertirlas en un producto completamente personalizado.

---

Botones:

- Ver Productos.
- Solicitar Cotización.

---

# 131. Estados de la Página

## Estado Normal

Listado completo de publicaciones.

---

## Estado de Carga

Skeleton Cards.

---

## Estado Vacío

No existen artículos publicados.

Se mostrará un mensaje institucional.

---

## Estado Error

No fue posible cargar las publicaciones.

Botón Reintentar.

---

# 132. Requerimientos Funcionales

RF-BLOG-001

El sistema deberá listar todos los artículos publicados.

---

RF-BLOG-002

El sistema deberá permitir búsquedas.

---

RF-BLOG-003

El sistema deberá mostrar categorías.

---

RF-BLOG-004

El sistema deberá mostrar artículos destacados.

---

RF-BLOG-005

El sistema deberá mostrar artículos populares.

---

RF-BLOG-006

El sistema deberá mostrar etiquetas.

---

RF-BLOG-007

Cada artículo deberá tener una página individual.

---

RF-BLOG-008

El sistema deberá permitir acceder al catálogo desde el blog.

---

RF-BLOG-009

El sistema deberá permitir compartir artículos.

---

# 133. Requerimientos No Funcionales

RNF-BLOG-001

Carga inferior a dos segundos.

---

RNF-BLOG-002

Optimización de imágenes.

---

RNF-BLOG-003

Compatible con dispositivos móviles.

---

RNF-BLOG-004

Accesibilidad WCAG 2.2.

---

RNF-BLOG-005

Contenido optimizado para SEO.

---

RNF-BLOG-006

URLs amigables.

---

# 134. SEO

Cada artículo deberá generar automáticamente:

- Meta Title.
- Meta Description.
- URL amigable.
- Open Graph.
- Twitter Cards.
- Canonical.
- Breadcrumbs.
- Schema.org Article.
- Imagen destacada optimizada.

La página principal del blog incluirá:

- Descripción optimizada.
- Encabezados jerárquicos.
- Enlaces internos.
- Sitemap XML.
- Datos estructurados para Blog.

---

# 135. Analítica

Se registrarán eventos como:

- Artículo abierto.
- Tiempo de lectura.
- Categoría visitada.
- Búsqueda realizada.
- Artículo compartido.
- Clic en productos relacionados.
- Clic en botón de WhatsApp.
- Conversión hacia formulario de contacto.

---

# 136. Futuras Funcionalidades

La arquitectura deberá contemplar:

- Newsletter.
- Comentarios moderados.
- Reacciones.
- Favoritos.
- Historial de lectura.
- Recomendaciones personalizadas.
- Series de artículos.
- Índices automáticos.
- Tabla de contenidos.
- Traducción a múltiples idiomas.
- Artículos relacionados mediante IA.
- Estadísticas por publicación.
- Programación automática de publicaciones.

---

# 137. Criterios de Aceptación

La página será considerada finalizada cuando:

- Muestre correctamente todos los artículos publicados.
- Permita filtrar por categorías y etiquetas.
- El buscador funcione correctamente.
- Los artículos destacados sean visibles.
- El diseño sea completamente responsive.
- Se cumplan los requisitos de accesibilidad.
- La estructura favorezca el posicionamiento SEO.
- Existan llamadas a la acción hacia los productos y el contacto.

---

## Fin de la Parte 4.5

# Parte 4.6
# Especificación Funcional – Página "Artículo del Blog"

---

# 138. Página Artículo del Blog

## 138.1 Objetivo General

La página **Artículo del Blog** tiene como propósito presentar contenido educativo, informativo e inspirador relacionado con el mundo de la personalización, Cricut, sublimación, papelería creativa y emprendimiento.

Cada artículo deberá aportar valor al lector antes de intentar vender un producto. La estrategia consiste en generar confianza mediante conocimiento especializado, fortaleciendo la autoridad de la marca y posicionando a Poppy Crafty como un referente en su sector.

El contenido deberá estar optimizado para buscadores (SEO), facilitar una lectura agradable en cualquier dispositivo y conducir de forma natural al usuario hacia otros artículos, productos o formularios de contacto.

---

# 138.2 Objetivos Específicos

La página deberá:

- Mostrar el contenido completo del artículo.
- Facilitar una lectura cómoda.
- Optimizar el posicionamiento SEO.
- Favorecer la navegación hacia otros artículos.
- Mostrar productos relacionados con el tema.
- Incentivar el contacto con Poppy Crafty.
- Incrementar el tiempo de permanencia del usuario.
- Facilitar el contenido compartible en redes sociales.

---

# 138.3 Objetivos de Negocio

Esta página contribuirá a:

- Aumentar el tráfico orgánico.
- Incrementar la autoridad del dominio.
- Convertir lectores en clientes.
- Mejorar el posicionamiento de palabras clave.
- Disminuir la tasa de rebote.
- Incrementar la cantidad de páginas vistas por sesión.

---

# 139. Estructura General

La página estará organizada en el siguiente orden:

1. Breadcrumbs
2. Hero del artículo
3. Información del artículo
4. Índice de contenidos
5. Contenido principal
6. Galerías e imágenes
7. Bloques destacados
8. Productos relacionados
9. Artículos relacionados
10. Compartir publicación
11. CTA final
12. Footer

---

# 140. Breadcrumbs

Ejemplo:

Inicio

>

Blog

>

Cricut

>

Materiales y Tapetes para Cricut

---

Objetivos

- Mejorar la navegación.
- Favorecer el SEO.
- Mostrar la ubicación del usuario.

---

# 141. Hero del Artículo

## Componentes

Imagen destacada.

Categoría.

Fecha de publicación.

Fecha de actualización.

Tiempo estimado de lectura.

Título.

Resumen.

---

Ejemplo:

Materiales y Tapetes para Cricut: cuál usar y cuándo

Tiempo de lectura:

7 minutos.

Categoría:

Cricut.

---

# 142. Información del Artículo

Se mostrará:

- Autor.
- Fecha de publicación.
- Fecha de modificación.
- Tiempo de lectura.
- Categoría principal.
- Etiquetas.

---

## Tiempo de lectura

Se calculará automáticamente considerando la cantidad de palabras del artículo.

---

# 143. Índice de Contenidos

## Objetivo

Permitir al lector navegar rápidamente entre las diferentes secciones del artículo.

---

## Funcionamiento

El índice se generará automáticamente a partir de los encabezados H2 y H3.

Cada elemento será un enlace interno que desplazará suavemente la página hacia la sección correspondiente.

En escritorio podrá permanecer visible mediante una barra lateral fija.

En dispositivos móviles se mostrará como un panel desplegable.

---

# 144. Contenido Principal

El contenido del artículo deberá admitir una amplia variedad de bloques para enriquecer la experiencia de lectura.

Entre ellos:

- Párrafos.
- Encabezados.
- Listas.
- Tablas.
- Citas.
- Bloques de código (cuando sea necesario).
- Imágenes.
- Galerías.
- Videos embebidos.
- Botones.
- Separadores.
- Notas informativas.

---

# 145. Bloques Especiales

El sistema deberá permitir incorporar distintos tipos de bloques visuales para destacar información importante.

## Consejo

Utilizado para recomendaciones prácticas.

---

## Advertencia

Utilizado para alertar sobre errores comunes o situaciones que requieren atención.

---

## Nota

Información adicional que complementa el contenido principal.

---

## Curiosidad

Datos interesantes relacionados con el tema tratado.

---

## Recomendación

Sugerencias de materiales, herramientas o buenas prácticas.

---

# 146. Imágenes y Galerías

Las imágenes deberán cumplir con los siguientes requisitos:

- Alta resolución.
- Optimización en formato WebP.
- Carga diferida (Lazy Loading).
- Texto alternativo descriptivo.
- Posibilidad de ampliación mediante visor.

Cuando un artículo incluya varias imágenes consecutivas, el sistema podrá mostrarlas en formato de galería.

---

# 147. Productos Relacionados

## Objetivo

Convertir el interés generado por el contenido en una posible venta.

---

Dependiendo del tema del artículo, se mostrarán productos asociados.

Ejemplo:

Artículo:

Coronas de Fomi.

Productos relacionados:

- Coronas personalizadas.
- Bandas.
- Toppers.
- Decoraciones.

---

Cantidad recomendada:

4 productos.

---

# 148. Artículos Relacionados

El sistema deberá sugerir publicaciones relacionadas utilizando criterios como:

- Misma categoría.
- Etiquetas compartidas.
- Temática similar.

Se mostrarán entre tres y seis artículos.

---

# 149. Compartir Artículo

El lector podrá compartir el contenido mediante:

- WhatsApp.
- Facebook.
- X (Twitter).
- Copiar enlace.
- Correo electrónico.

---

# 150. Llamado a la Acción

## Objetivo

Transformar al lector en un cliente potencial.

---

Texto sugerido:

¿Te gustaría crear un proyecto como este?

En Poppy Crafty podemos ayudarte a hacerlo realidad.

---

Botones:

- Solicitar Cotización.
- Ver Productos.
- Escribir por WhatsApp.

---

# 151. Estados de la Página

## Estado Normal

Artículo cargado completamente.

---

## Estado de Carga

Skeleton para encabezado, imagen y contenido.

---

## Estado Vacío

Artículo no disponible.

Se sugerirán otras publicaciones.

---

## Estado Error

Mensaje indicando que no fue posible cargar el contenido.

Botón para reintentar.

---

# 152. Requerimientos Funcionales

RF-ART-001

El sistema deberá mostrar el contenido completo del artículo.

---

RF-ART-002

El sistema deberá generar automáticamente el índice de contenidos.

---

RF-ART-003

El sistema deberá calcular el tiempo estimado de lectura.

---

RF-ART-004

El sistema deberá mostrar imágenes optimizadas.

---

RF-ART-005

El sistema deberá mostrar productos relacionados.

---

RF-ART-006

El sistema deberá mostrar artículos relacionados.

---

RF-ART-007

El sistema deberá permitir compartir el artículo.

---

RF-ART-008

El sistema deberá mostrar etiquetas y categorías.

---

RF-ART-009

El sistema deberá permitir la navegación mediante breadcrumbs.

---

# 153. Requerimientos No Funcionales

RNF-ART-001

Carga inferior a dos segundos.

---

RNF-ART-002

Contenido completamente responsive.

---

RNF-ART-003

Optimización SEO avanzada.

---

RNF-ART-004

Compatibilidad con lectores de pantalla.

---

RNF-ART-005

Cumplimiento WCAG 2.2.

---

RNF-ART-006

Optimización de imágenes.

---

# 154. SEO

Cada artículo deberá incluir:

- Meta Title.
- Meta Description.
- URL amigable.
- Open Graph.
- Twitter Cards.
- Canonical.
- Schema.org Article.
- BreadcrumbList.
- FAQ Schema cuando aplique.
- Índice HTML semántico.
- Enlaces internos.
- Enlaces externos relevantes.
- Sitemap XML.

---

# 155. Analítica

Se registrarán métricas como:

- Tiempo de lectura.
- Profundidad de desplazamiento (Scroll Depth).
- Porcentaje de lectura completada.
- Productos relacionados abiertos.
- Artículos relacionados visitados.
- Compartidos en redes sociales.
- Clics en botones de contacto.
- Conversión hacia solicitudes de cotización.

---

# 156. Futuras Funcionalidades

La arquitectura deberá permitir incorporar:

- Comentarios moderados.
- Valoración de artículos.
- Guardar para leer después.
- Favoritos.
- Newsletter.
- Recomendaciones mediante IA.
- Traducción automática.
- Modo lectura.
- Audio del artículo.
- Resumen generado por IA.
- Historial de lectura del usuario.
- Contenido recomendado según intereses.

---

# 157. Criterios de Aceptación

La página será considerada finalizada cuando:

- El contenido sea fácilmente legible en cualquier dispositivo.
- El índice funcione correctamente.
- Los enlaces internos sean operativos.
- Los productos relacionados sean relevantes.
- La navegación entre artículos sea intuitiva.
- Se cumplan los requisitos de accesibilidad.
- El artículo obtenga un excelente rendimiento en Lighthouse.
- La estructura favorezca el posicionamiento SEO y la conversión hacia el catálogo o el contacto.

---

## Fin de la Parte 4.6

# Parte 4.7
# Especificación Funcional – Páginas Complementarias

---

# 158. Página Galería

## 158.1 Objetivo General

La página **Galería** funcionará como un portafolio visual del trabajo realizado por Poppy Crafty.

Su objetivo principal será inspirar a futuros clientes mediante fotografías reales de productos terminados, permitiendo apreciar la calidad de los acabados, los materiales utilizados y la variedad de proyectos desarrollados.

A diferencia del catálogo de productos, la galería no representa necesariamente artículos disponibles para la venta, sino trabajos realizados que sirven como referencia para futuros pedidos personalizados.

---

# 158.2 Objetivos Específicos

La página deberá:

- Mostrar fotografías de alta calidad.
- Inspirar a nuevos clientes.
- Evidenciar la calidad del trabajo.
- Permitir explorar proyectos anteriores.
- Facilitar compartir imágenes.
- Incrementar la confianza en la marca.

---

# 159. Estructura

La página estará compuesta por:

1. Hero.
2. Buscador.
3. Filtros.
4. Grid Masonry.
5. Visor de imágenes.
6. CTA.
7. Footer.

---

# 160. Hero

Título:

Nuestro Trabajo

Descripción:

Cada fotografía representa un proyecto elaborado con dedicación y completamente personalizado para nuestros clientes.

---

# 161. Sistema de Filtros

Los visitantes podrán filtrar por:

- Camisas.
- Coronas.
- Toppers.
- Bandas.
- Tazas.
- Stickers.
- Decoraciones.
- Papelería.

También podrán filtrar por:

- Cumpleaños.
- Baby Shower.
- Graduaciones.
- Empresas.
- Bodas.

---

# 162. Grid de Imágenes

La galería utilizará un diseño tipo Masonry.

Cada fotografía mostrará:

- Imagen.
- Categoría.
- Nombre del proyecto.
- Fecha (opcional).

---

# 163. Visor

Al seleccionar una imagen se abrirá un Lightbox.

Permitirá:

- Zoom.
- Navegar entre imágenes.
- Compartir.
- Cerrar mediante teclado.

---

# 164. Requerimientos Funcionales

RF-GAL-001

Mostrar todas las fotografías.

---

RF-GAL-002

Permitir filtrar.

---

RF-GAL-003

Permitir ampliar imágenes.

---

RF-GAL-004

Permitir compartir.

---

RF-GAL-005

Responsive.

---

# 165. SEO

La galería deberá incluir:

- Meta Title.
- Meta Description.
- Imágenes optimizadas.
- Texto alternativo.

---

# 166. Criterios de Aceptación

La página deberá funcionar correctamente en escritorio, tablet y móvil.

Todas las imágenes deberán abrirse correctamente.

Los filtros deberán funcionar sin recargar la página.

---

# 167. Página Contacto

## Objetivo General

Facilitar la comunicación entre el cliente y Poppy Crafty.

La página deberá ofrecer múltiples canales de contacto y permitir solicitar cotizaciones de forma sencilla.

---

# 168. Componentes

Hero.

Información de contacto.

Formulario.

Mapa.

Redes sociales.

Preguntas rápidas.

CTA.

---

# 169. Información

Se mostrarán:

WhatsApp.

Correo electrónico.

Ubicación:

Choluteca, Honduras.

Horario de atención.

Tiempo promedio de respuesta.

---

# 170. Formulario

Campos:

Nombre.

Correo.

Teléfono.

Tipo de producto.

Mensaje.

Adjuntar referencia (preparado para futuras versiones).

---

Validaciones

Nombre obligatorio.

Correo válido.

Mensaje mínimo de 20 caracteres.

---

# 171. Mapa

Mapa de Google.

Marcador con ubicación aproximada del emprendimiento.

Botón:

Cómo llegar.

---

# 172. Redes Sociales

Instagram.

Facebook.

TikTok.

WhatsApp.

Cada botón abrirá la red correspondiente en una nueva pestaña.

---

# 173. Requerimientos Funcionales

RF-CON-001

Enviar formulario.

---

RF-CON-002

Validar información.

---

RF-CON-003

Mostrar mapa.

---

RF-CON-004

Mostrar redes sociales.

---

RF-CON-005

Mostrar horarios.

---

# 174. Preguntas Frecuentes

## Objetivo

Resolver dudas comunes antes de que el cliente contacte al negocio.

---

# 175. Organización

Las preguntas estarán agrupadas por categorías.

Ejemplos:

Pedidos.

Pagos.

Envíos.

Materiales.

Personalización.

Tiempos de entrega.

---

Cada pregunta utilizará un componente Accordion.

---

# 176. Funcionalidades

Buscar preguntas.

Expandir.

Contraer.

Compartir respuesta.

Enlaces relacionados.

---

# 177. Requerimientos

RF-FAQ-001

Mostrar preguntas.

---

RF-FAQ-002

Buscar preguntas.

---

RF-FAQ-003

Expandir respuestas.

---

RF-FAQ-004

Responsive.

---

# 178. Página Políticas

La página contendrá información legal y comercial.

Secciones:

Política de privacidad.

Términos y condiciones.

Política de pedidos.

Política de devoluciones.

Política de envíos.

Política de cookies.

Uso de imágenes.

Propiedad intelectual.

---

Cada documento tendrá:

Fecha de actualización.

Índice.

Encabezados jerárquicos.

Versión.

---

# 179. Página 404

## Objetivo

Informar al usuario cuando intenta acceder a una página inexistente.

---

Contenido:

Ilustración amigable.

Mensaje.

Botón Inicio.

Botón Productos.

Buscador.

Artículos populares.

Productos destacados.

---

Texto sugerido

Ups...

Parece que esta página decidió irse a hacer manualidades.

Mientras tanto puedes explorar nuestros productos o leer alguno de nuestros artículos.

---

# 180. Página de Resultados de Búsqueda

Cuando el usuario utilice el buscador global se mostrará una página con resultados combinados.

Secciones:

Productos.

Artículos.

Categorías.

Preguntas frecuentes.

---

Cada resultado mostrará:

Título.

Descripción.

Categoría.

Tipo.

---

# 181. Página de Categoría

Cada categoría tendrá su propia página.

Ejemplos:

/productos/coronas

/productos/tazas

/blog/cricut

---

Estas páginas incluirán:

Descripción.

Imagen.

Listado filtrado.

SEO específico.

Breadcrumbs.

---

# 182. Estados Globales

Todas las páginas deberán contemplar:

Estado normal.

Estado de carga.

Estado vacío.

Estado sin resultados.

Estado error.

Estado mantenimiento (preparado para futuras versiones).

---

# 183. Requerimientos Generales

Todas las páginas deberán cumplir con:

Responsive.

SEO.

Accesibilidad.

Carga rápida.

Imágenes optimizadas.

Compatibilidad con navegadores modernos.

Lazy Loading.

Navegación mediante teclado.

Modo oscuro preparado para futuras versiones.

---

# 184. Criterios Generales de Aceptación

El capítulo "Páginas del Sitio" será considerado finalizado cuando:

- Todas las páginas estén completamente documentadas.
- Existan objetivos y funcionalidades claramente definidas para cada sección.
- Se contemplen estados de carga, error y contenido vacío.
- La navegación sea consistente entre todas las páginas.
- El diseño sea coherente con la identidad visual de Poppy Crafty.
- Se garantice una experiencia responsive y accesible.
- Se establezcan criterios claros para el desarrollo y validación de cada página.

---

## Fin del Capítulo 4
## Especificación Funcional de Todas las Páginas

# Capítulo 5
# Especificación de Módulos del Sistema

---

# 185. Introducción

## 185.1 Objetivo

Este capítulo documenta los diferentes módulos funcionales que conforman el sistema web de Poppy Crafty.

A diferencia del capítulo anterior, donde se describía el comportamiento de cada página, aquí se define la lógica interna del sistema, la organización de la información, los procesos de negocio y las reglas que deberán seguirse durante el desarrollo.

Cada módulo será diseñado de forma desacoplada, permitiendo su mantenimiento, ampliación y reutilización sin afectar el funcionamiento del resto del sistema.

La arquitectura propuesta permitirá que el sitio evolucione progresivamente desde un catálogo institucional hacia una plataforma completa de comercio electrónico.

---

# 186. Arquitectura Modular

El sistema estará dividido en módulos independientes.

Cada módulo tendrá responsabilidades claramente definidas.

Los módulos se comunicarán mediante servicios internos y acceso a la base de datos, evitando dependencias innecesarias entre ellos.

---

## Módulos principales

- Gestión de productos.
- Gestión de categorías.
- Gestión de imágenes.
- Gestión del blog.
- Gestión de etiquetas.
- Gestión de galerías.
- Gestión de formularios.
- Gestión de archivos.
- Gestión de SEO.
- Gestión de usuarios (futuro).
- Gestión de pedidos (futuro).
- Panel administrativo (futuro).

---

# 187. Módulo de Productos

## Objetivo

Administrar toda la información relacionada con los productos ofrecidos por Poppy Crafty.

Este módulo será el núcleo del catálogo y servirá como base para una futura tienda en línea.

Toda la información deberá almacenarse de forma estructurada para facilitar búsquedas, filtros, posicionamiento SEO y reutilización en otras secciones del sitio.

---

# 188. Responsabilidades

El módulo deberá permitir:

- Crear productos.
- Editar productos.
- Desactivar productos.
- Organizar categorías.
- Administrar galerías.
- Gestionar imágenes.
- Gestionar etiquetas.
- Configurar productos destacados.
- Asociar artículos del blog.
- Relacionar productos similares.

---

# 189. Información de un Producto

Cada producto deberá almacenar como mínimo:

Identificador.

Slug.

Nombre.

Descripción corta.

Descripción completa.

Precio desde.

Categoría.

Subcategoría.

Estado.

Orden de visualización.

Fecha de creación.

Fecha de actualización.

Imagen principal.

Galería.

Etiquetas.

Productos relacionados.

Tiempo de elaboración.

Materiales.

Características.

SEO.

---

# 190. Campos Detallados

## Información General

Nombre.

Slug.

Descripción corta.

Descripción larga.

Resumen.

Precio desde.

Código interno.

Estado.

---

## Clasificación

Categoría.

Subcategoría.

Colección.

Temática.

Tipo de evento.

Nivel de personalización.

---

## Producción

Tiempo estimado.

Materiales.

Colores disponibles.

Requiere fotografía.

Requiere nombre.

Requiere fecha.

Requiere diseño personalizado.

---

## Multimedia

Imagen principal.

Galería.

Miniaturas.

Video (futuro).

Modelo 3D (futuro).

---

## SEO

Meta Title.

Meta Description.

Canonical.

OpenGraph.

Keywords.

---

# 191. Estados del Producto

Un producto podrá encontrarse en alguno de los siguientes estados:

Borrador.

Publicado.

Oculto.

Archivado.

Eliminado lógicamente.

---

# 192. Flujo de Vida del Producto

Creación

↓

Borrador

↓

Revisión

↓

Publicado

↓

Actualización

↓

Archivado

---

El sistema nunca eliminará físicamente un producto salvo mediante procesos administrativos especiales.

---

# 193. Relaciones

Cada producto podrá relacionarse con:

Una categoría.

Múltiples etiquetas.

Muchos artículos.

Muchos productos relacionados.

Muchas imágenes.

Muchas galerías.

Muchos pedidos (futuro).

Muchos clientes (futuro).

---

# 194. Productos Relacionados

El sistema deberá permitir definir relaciones manuales.

Posteriormente podrán generarse automáticamente utilizando criterios como:

Misma categoría.

Etiquetas similares.

Materiales similares.

Temática.

Popularidad.

---

# 195. Productos Destacados

Algunos productos podrán marcarse como destacados.

Estos aparecerán automáticamente en:

Inicio.

Categorías.

Blog.

Resultados de búsqueda.

Página principal.

---

# 196. Variantes (Arquitectura Preparada)

Aunque inicialmente no existirán variantes seleccionables, el sistema deberá contemplar su incorporación.

Ejemplos:

Color.

Tamaño.

Material.

Acabado.

Tipo de impresión.

Cantidad.

---

# 197. Etiquetas

Cada producto podrá tener múltiples etiquetas.

Ejemplo:

Cumpleaños.

Princesa.

Foami.

Sublimación.

Cricut.

Personalizado.

Regalo.

---

Las etiquetas mejorarán:

SEO.

Búsqueda.

Recomendaciones.

---

# 198. Búsqueda

La búsqueda de productos deberá considerar:

Nombre.

Descripción.

Categoría.

Etiquetas.

Materiales.

Palabras clave SEO.

---

Las búsquedas serán insensibles a:

Mayúsculas.

Minúsculas.

Acentos.

Caracteres especiales.

---

# 199. Ordenamiento

Los productos podrán ordenarse por:

Más recientes.

Más antiguos.

Nombre.

Precio.

Popularidad.

Orden personalizado.

---

# 200. Paginación

El sistema utilizará paginación para optimizar el rendimiento.

Cantidad inicial sugerida:

12 productos por página.

Preparado para carga infinita en futuras versiones.

---

# 201. Caché

Los productos publicados podrán almacenarse temporalmente en caché para reducir tiempos de respuesta.

La caché deberá invalidarse automáticamente cuando:

Se publique un nuevo producto.

Se edite un producto.

Se elimine un producto.

Se actualicen sus imágenes.

---

# 202. Requerimientos Funcionales

RF-MOD-PROD-001

Crear productos.

---

RF-MOD-PROD-002

Editar productos.

---

RF-MOD-PROD-003

Publicar productos.

---

RF-MOD-PROD-004

Archivar productos.

---

RF-MOD-PROD-005

Relacionar productos.

---

RF-MOD-PROD-006

Administrar galerías.

---

RF-MOD-PROD-007

Gestionar imágenes.

---

RF-MOD-PROD-008

Gestionar SEO.

---

RF-MOD-PROD-009

Gestionar etiquetas.

---

RF-MOD-PROD-010

Realizar búsquedas.

---

# 203. Requerimientos No Funcionales

RNF-MOD-PROD-001

Consultas inferiores a 300 ms.

---

RNF-MOD-PROD-002

Imágenes optimizadas.

---

RNF-MOD-PROD-003

Escalable a miles de productos.

---

RNF-MOD-PROD-004

Compatible con futuras funciones de e-commerce.

---

RNF-MOD-PROD-005

Optimizado para SEO.

---

RNF-MOD-PROD-006

Preparado para internacionalización.

---

# 204. Criterios de Aceptación

El módulo será considerado finalizado cuando:

- Permita administrar completamente el catálogo.
- Soporte múltiples imágenes por producto.
- Gestione correctamente categorías y etiquetas.
- Permita búsquedas rápidas.
- Facilite la relación entre productos.
- Mantenga una estructura preparada para futuras funciones de comercio electrónico.
- Garantice un rendimiento adecuado incluso con un catálogo de gran tamaño.

---

## Fin de la Parte 5.1

# Parte 5.2
# Módulo de Gestión de Categorías

---

# 205. Introducción

## 205.1 Objetivo

El módulo de **Gestión de Categorías** será el encargado de organizar toda la información publicada en el sitio web.

Permitirá clasificar productos, artículos del blog y, en futuras versiones, galerías, promociones y colecciones.

La correcta organización de las categorías facilitará la navegación del usuario, mejorará el posicionamiento SEO y permitirá implementar sistemas de búsqueda y recomendaciones mucho más eficientes.

Este módulo deberá diseñarse pensando en la escalabilidad, permitiendo incorporar nuevas categorías sin necesidad de modificar el código del sistema.

---

# 206. Objetivos del Módulo

El módulo deberá cumplir los siguientes objetivos:

- Organizar el catálogo de productos.
- Organizar el contenido del blog.
- Facilitar la navegación.
- Mejorar el SEO.
- Simplificar los filtros de búsqueda.
- Permitir futuras expansiones del catálogo.
- Centralizar la administración de categorías.

---

# 207. Tipos de Categorías

El sistema manejará diferentes tipos de categorías.

## Categorías de Productos

Ejemplos:

- Camisas Personalizadas
- Tazas Sublimadas
- Coronas de Fomi
- Stickers
- Toppers
- Bandas
- Papelería
- Cajas Personalizadas
- Decoraciones
- Regalos

---

## Categorías del Blog

Ejemplos:

- Cricut
- Sublimación
- Manualidades
- Consejos
- Materiales
- Tutoriales
- Emprendimiento
- Inspiración
- Eventos

---

## Colecciones (Preparado)

Aunque inicialmente no se implementarán, el sistema deberá permitir crear colecciones temporales como:

- San Valentín
- Navidad
- Día de la Madre
- Regreso a Clases
- Halloween
- Graduaciones

---

# 208. Información de una Categoría

Cada categoría almacenará como mínimo:

- Identificador único.
- Nombre.
- Slug.
- Descripción corta.
- Descripción completa.
- Imagen principal.
- Icono (opcional).
- Color representativo (opcional).
- Estado.
- Orden de visualización.
- Fecha de creación.
- Fecha de actualización.
- SEO.

---

# 209. Jerarquía

La arquitectura deberá soportar jerarquías.

Ejemplo:

Productos

→ Papelería

→→ Invitaciones

→→ Etiquetas

→→ Cajas

---

Otro ejemplo:

Blog

→ Cricut

→→ Materiales

→→ Tapetes

→→ Cuchillas

---

Aunque inicialmente solo se utilizará un nivel, la base de datos deberá permitir múltiples niveles.

---

# 210. Estados

Cada categoría podrá encontrarse en alguno de los siguientes estados:

- Activa.
- Oculta.
- Archivada.
- Eliminada lógicamente.

Las categorías archivadas no aparecerán en el sitio público, pero conservarán toda su información histórica.

---

# 211. Relación con Productos

Una categoría podrá contener múltiples productos.

Cada producto pertenecerá, como mínimo, a una categoría principal.

Opcionalmente podrá asociarse a una categoría secundaria.

Ejemplo:

Producto:

Corona Personalizada Princesa

Categoría principal:

Coronas

Categoría secundaria:

Cumpleaños Infantiles

---

# 212. Relación con Artículos

Cada artículo del blog deberá pertenecer al menos a una categoría.

Opcionalmente podrá pertenecer a varias.

Ejemplo:

Artículo:

Materiales para Cricut

Categorías:

- Cricut
- Materiales
- Tutoriales

---

# 213. Orden de Visualización

Cada categoría tendrá un campo denominado **Display Order**.

Este valor determinará el orden en que aparecerán en:

- Menú principal.
- Página de productos.
- Página del blog.
- Buscador.
- Panel administrativo.

---

# 214. Imagen Representativa

Cada categoría podrá tener:

- Imagen principal.
- Imagen para banner.
- Miniatura.
- Icono SVG (opcional).

Todas las imágenes deberán almacenarse en Supabase Storage.

---

# 215. SEO

Cada categoría deberá contar con su propia configuración SEO.

Campos:

- Meta Title.
- Meta Description.
- Slug.
- Canonical.
- Open Graph.
- Keywords.
- Imagen para redes sociales.

---

Cada categoría generará automáticamente una URL amigable.

Ejemplos:

/productos/coronas

/productos/tazas

/blog/cricut

/blog/tutoriales

---

# 216. Navegación

Las categorías serán utilizadas en:

- Menú principal.
- Mega menú (futuro).
- Breadcrumbs.
- Buscador.
- Filtros.
- Productos relacionados.
- Artículos relacionados.

---

# 217. Sistema de Búsqueda

Las categorías deberán poder localizarse mediante:

- Nombre.
- Slug.
- Palabras clave.
- Descripción.

Las búsquedas serán:

- Insensibles a mayúsculas.
- Insensibles a acentos.
- Tolerantes a errores menores de escritura (preparado para futuras versiones).

---

# 218. Caché

Las categorías se almacenarán temporalmente en caché debido a que cambian con poca frecuencia.

La caché deberá invalidarse automáticamente cuando:

- Se cree una categoría.
- Se edite una categoría.
- Se archive una categoría.
- Se elimine una categoría.

---

# 219. Requerimientos Funcionales

RF-CAT-001

Crear categorías.

---

RF-CAT-002

Editar categorías.

---

RF-CAT-003

Publicar categorías.

---

RF-CAT-004

Archivar categorías.

---

RF-CAT-005

Ordenar categorías.

---

RF-CAT-006

Asignar imágenes.

---

RF-CAT-007

Configurar SEO.

---

RF-CAT-008

Relacionar productos.

---

RF-CAT-009

Relacionar artículos.

---

RF-CAT-010

Generar URLs amigables automáticamente.

---

# 220. Requerimientos No Funcionales

RNF-CAT-001

Consultas inferiores a 150 ms.

---

RNF-CAT-002

Escalable a cientos de categorías.

---

RNF-CAT-003

Compatible con múltiples niveles jerárquicos.

---

RNF-CAT-004

Preparado para internacionalización.

---

RNF-CAT-005

Optimizado para SEO.

---

RNF-CAT-006

Compatible con futuras colecciones estacionales.

---

# 221. Criterios de Aceptación

El módulo será considerado finalizado cuando:

- Permita administrar categorías de productos y del blog de forma independiente.
- Genere automáticamente URLs amigables.
- Soporte estructuras jerárquicas sin afectar el rendimiento.
- Permita configurar imágenes y metadatos SEO para cada categoría.
- Mantenga una navegación consistente en todo el sitio.
- Sea fácilmente escalable para incorporar nuevas categorías, colecciones y secciones en futuras versiones.

---

## Fin de la Parte 5.2

# Parte 5.3
# Módulo de Gestión del Blog (CMS)

---

# 222. Introducción

## 222.1 Objetivo

El módulo de Gestión del Blog será el sistema encargado de administrar todo el contenido educativo publicado por Poppy Crafty.

Su propósito no será únicamente almacenar artículos, sino proporcionar una plataforma moderna, escalable y optimizada para SEO que permita publicar contenido de alta calidad, fortalecer la presencia digital de la marca y convertir visitantes en clientes potenciales.

La arquitectura estará basada en contenido estructurado, facilitando futuras integraciones con sistemas de búsqueda, inteligencia artificial, newsletters, RSS, traducciones y automatización de publicaciones.

---

# 223. Objetivos del Módulo

El CMS deberá permitir:

- Crear artículos.
- Editar artículos.
- Guardar borradores.
- Programar publicaciones.
- Organizar categorías.
- Administrar etiquetas.
- Relacionar productos.
- Optimizar SEO.
- Gestionar imágenes.
- Controlar versiones.
- Reutilizar componentes.
- Escalar a cientos o miles de publicaciones.

---

# 224. Arquitectura del Contenido

El contenido se almacenará utilizando archivos MDX.

Cada artículo combinará:

- Markdown.
- Componentes React.
- Metadatos.
- Imágenes.
- Componentes personalizados.

Esta arquitectura permitirá crear contenido muy enriquecido sin perder rendimiento.

---

# 225. Estructura de un Artículo

Cada publicación deberá contener:

- ID.
- Slug.
- Título.
- Subtítulo.
- Resumen.
- Contenido.
- Imagen destacada.
- Autor.
- Fecha de creación.
- Fecha de actualización.
- Estado.
- Categoría principal.
- Categorías secundarias.
- Etiquetas.
- Tiempo de lectura.
- SEO.
- Open Graph.
- Productos relacionados.
- Artículos relacionados.

---

# 226. Estados de Publicación

Cada artículo podrá encontrarse en alguno de los siguientes estados:

- Borrador.
- En revisión.
- Programado.
- Publicado.
- Archivado.
- Eliminado lógicamente.

Esta estructura permitirá implementar un flujo editorial profesional en futuras versiones.

---

# 227. Flujo Editorial

El ciclo de vida de un artículo será:

Idea

↓

Borrador

↓

Revisión

↓

Corrección

↓

Programación

↓

Publicado

↓

Actualización

↓

Archivado

---

Cada transición deberá conservar un historial de cambios.

---

# 228. Editor MDX

El sistema utilizará MDX como formato principal de edición.

El editor deberá permitir insertar bloques reutilizables sin necesidad de escribir código manualmente.

Entre ellos:

- Consejos.
- Advertencias.
- Notas.
- Citas.
- Galerías.
- Tablas.
- FAQs.
- Botones.
- CTAs.
- Videos.
- Separadores.
- Productos relacionados.

---

# 229. Componentes Disponibles

El CMS deberá incluir componentes reutilizables como:

<HeroArticle />

<TableOfContents />

<Tip />

<Warning />

<Info />

<Quote />

<Gallery />

<ProductCard />

<ProductGrid />

<FAQ />

<CTA />

<ImageComparison />

<YouTube />

<InstagramEmbed />

---

Todos estos componentes deberán poder utilizarse desde cualquier artículo.

---

# 230. Gestión de Imágenes

Cada artículo podrá tener:

- Imagen destacada.
- Banner.
- Galería.
- Imágenes internas.
- Miniaturas.
- Imagen Open Graph.

Todas las imágenes serán almacenadas en Supabase Storage.

---

# 231. Sistema de Etiquetas

Los artículos podrán tener múltiples etiquetas.

Ejemplo:

Cricut.

Vinil.

Foami.

HTV.

Sublimación.

Tutorial.

Emprendimiento.

Papelería.

Cumpleaños.

Estas etiquetas servirán para:

- SEO.
- Recomendaciones.
- Búsquedas.
- Artículos relacionados.

---

# 232. Productos Relacionados

Cada artículo podrá asociarse con uno o varios productos del catálogo.

Ejemplo:

Artículo:

Coronas de Fomi.

Productos:

- Corona Personalizada.
- Banda.
- Topper.

Esto permitirá convertir contenido educativo en oportunidades comerciales.

---

# 233. Artículos Relacionados

Las recomendaciones podrán generarse utilizando:

- Misma categoría.
- Etiquetas compartidas.
- Palabras clave similares.
- Relación manual.
- Popularidad.

Inicialmente las relaciones serán manuales.

---

# 234. Tiempo de Lectura

El sistema calculará automáticamente el tiempo estimado de lectura considerando el número de palabras del artículo.

El cálculo deberá actualizarse automáticamente después de cada modificación.

---

# 235. Tabla de Contenidos

El índice del artículo se generará automáticamente a partir de los encabezados H2 y H3.

Cada elemento funcionará como un enlace interno.

La tabla deberá actualizarse automáticamente cuando cambie el contenido.

---

# 236. Versionado

El CMS deberá conservar versiones anteriores de cada artículo.

Cada versión almacenará:

- Fecha.
- Autor.
- Resumen de cambios.
- Contenido.

En futuras versiones se permitirá restaurar cualquier versión anterior.

---

# 237. Programación

El sistema permitirá programar publicaciones.

Cada artículo podrá definir:

Fecha.

Hora.

Zona horaria.

Una vez alcanzada la fecha programada el artículo pasará automáticamente al estado Publicado.

---

# 238. SEO del Artículo

Cada publicación deberá almacenar:

Meta Title.

Meta Description.

Slug.

Canonical.

Open Graph.

Twitter Cards.

Keywords.

Imagen Open Graph.

Schema.org Article.

---

# 239. Enlaces Internos

El editor deberá incentivar la creación de enlaces hacia:

Otros artículos.

Categorías.

Productos.

Preguntas frecuentes.

Esto favorecerá el SEO y la navegación.

---

# 240. Sitemap

Cada publicación publicada deberá agregarse automáticamente al sitemap XML.

Los artículos archivados dejarán de aparecer.

---

# 241. RSS

El sistema estará preparado para generar automáticamente un Feed RSS del blog.

Esto permitirá futuras integraciones con lectores de noticias y plataformas externas.

---

# 242. Analítica

Se recopilarán métricas como:

Visitas.

Tiempo promedio de lectura.

Profundidad de desplazamiento.

CTR hacia productos.

CTR hacia WhatsApp.

Artículos compartidos.

Categorías más consultadas.

Etiquetas más utilizadas.

---

# 243. Requerimientos Funcionales

RF-CMS-001

Crear artículos.

---

RF-CMS-002

Editar artículos.

---

RF-CMS-003

Guardar borradores.

---

RF-CMS-004

Programar publicaciones.

---

RF-CMS-005

Relacionar productos.

---

RF-CMS-006

Relacionar artículos.

---

RF-CMS-007

Administrar categorías.

---

RF-CMS-008

Administrar etiquetas.

---

RF-CMS-009

Generar automáticamente la tabla de contenidos.

---

RF-CMS-010

Calcular automáticamente el tiempo de lectura.

---

RF-CMS-011

Generar automáticamente metadatos SEO.

---

RF-CMS-012

Versionar artículos.

---

# 244. Requerimientos No Funcionales

RNF-CMS-001

Escalable a miles de publicaciones.

---

RNF-CMS-002

Compatible con MDX.

---

RNF-CMS-003

Carga inferior a dos segundos.

---

RNF-CMS-004

Compatible con dispositivos móviles.

---

RNF-CMS-005

Preparado para múltiples autores.

---

RNF-CMS-006

Preparado para múltiples idiomas.

---

RNF-CMS-007

Preparado para integración con IA.

---

RNF-CMS-008

Optimizado para SEO.

---

# 245. Criterios de Aceptación

El módulo será considerado finalizado cuando:

- Permita administrar artículos de forma eficiente.
- Soporte contenido enriquecido mediante MDX.
- Genere automáticamente índices, tiempo de lectura y metadatos SEO.
- Permita relacionar productos y publicaciones.
- Mantenga un historial de versiones.
- Soporte programación de publicaciones.
- Esté preparado para crecer hasta miles de artículos sin afectar el rendimiento.
- Facilite futuras integraciones con sistemas de inteligencia artificial, newsletters, traducciones y automatización editorial.

---

## Fin de la Parte 5.3

# Capítulo 6
# Diseño de la Base de Datos

> **Consolidado en `docs/DATABASE.md` (2026-08-03).** Esta fue la primera de
> tres versiones contradictorias del modelo de datos dentro de este SRS —
> usaba nombres de tabla en inglés (`products`, `product_categories`,
> `posts`...). Las otras dos están (estaban) en los capítulos 8 y 17 de
> este mismo documento. El esquema vigente, único, en español y sin
> contradicciones está en `docs/DATABASE.md`. Ver `docs/DECISIONS.md` para
> el detalle completo de qué se tomó de cada versión.

# Capítulo 7
# Panel Administrativo

---

# 313. Introducción

## 313.1 Objetivo

El Panel Administrativo será la plataforma interna utilizada para gestionar el contenido, la configuración y los recursos del sitio web de Poppy Crafty.

Su propósito será centralizar todas las operaciones administrativas en una única interfaz segura, intuitiva y escalable, permitiendo mantener actualizado el catálogo, el blog y los diferentes elementos del sitio sin necesidad de modificar el código fuente.

El acceso al panel estará restringido exclusivamente a usuarios autorizados mediante autenticación.

---

# 314. Objetivos del Panel

El panel deberá permitir:

- Administrar productos.
- Administrar categorías.
- Administrar artículos.
- Administrar imágenes.
- Administrar galerías.
- Gestionar solicitudes de contacto.
- Gestionar solicitudes de cotización.
- Configurar el sitio.
- Visualizar estadísticas.
- Gestionar SEO.
- Administrar archivos multimedia.
- Gestionar usuarios (futuro).
- Preparar funcionalidades de comercio electrónico.

---

# 315. Principios de Diseño

El panel administrativo deberá cumplir los siguientes principios:

- Simplicidad.
- Rapidez.
- Consistencia visual.
- Navegación intuitiva.
- Diseño responsive.
- Accesibilidad.
- Alto rendimiento.
- Seguridad.

La interfaz priorizará la productividad del administrador sobre elementos decorativos.

---

# 316. Tecnologías

El panel compartirá la misma base tecnológica del sitio público.

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:

- Supabase

Autenticación:

- Supabase Auth

Base de datos:

- PostgreSQL

Almacenamiento:

- Supabase Storage

---

# 317. Acceso al Panel

El acceso estará disponible mediante una ruta protegida.

Ejemplo:

/admin

El acceso directo sin autenticación deberá redirigir automáticamente a la página de inicio de sesión.

---

# 318. Flujo de Autenticación

Usuario accede a:

/admin

↓

Sistema verifica sesión.

↓

Si no existe sesión:

Redirigir a Login.

↓

Si existe sesión válida:

Verificar rol.

↓

Si posee permisos:

Mostrar Dashboard.

↓

Si no posee permisos:

Mostrar página de acceso denegado.

---

# 319. Inicio de Sesión

La pantalla de autenticación incluirá:

- Logotipo de Poppy Crafty.
- Correo electrónico.
- Contraseña.
- Botón de iniciar sesión.
- Indicador de carga.
- Mensajes de error.
- Recuperación de contraseña (futuro).

---

# 320. Requisitos de Autenticación

El sistema deberá:

- Validar formato del correo.
- Validar contraseña.
- Limitar intentos consecutivos.
- Cerrar sesiones inválidas.
- Renovar tokens automáticamente.
- Cerrar sesión manualmente.
- Expirar sesiones inactivas.

---

# 321. Estructura General del Panel

La interfaz estará dividida en cuatro áreas principales:

1. Barra lateral de navegación.
2. Barra superior.
3. Área principal de contenido.
4. Panel de notificaciones.

---

# 322. Barra Lateral

La barra lateral permanecerá visible en escritorio y será colapsable.

Contendrá los accesos a todos los módulos administrativos.

Opciones iniciales:

- Dashboard
- Productos
- Categorías
- Blog
- Galerías
- Multimedia
- Contactos
- Cotizaciones
- SEO
- Configuración

Preparadas para futuras versiones:

- Usuarios
- Pedidos
- Clientes
- Inventario
- Promociones
- Estadísticas avanzadas

---

# 323. Barra Superior

La barra superior incluirá:

- Nombre del módulo actual.
- Barra de búsqueda global.
- Accesos rápidos.
- Notificaciones.
- Avatar del usuario.
- Menú de perfil.
- Botón para cerrar sesión.

---

# 324. Área Principal

El contenido principal cambiará dinámicamente según el módulo seleccionado.

Cada módulo deberá mantener una estructura consistente:

- Encabezado.
- Acciones principales.
- Filtros.
- Tabla o tarjetas.
- Paginación.
- Estado vacío.
- Indicadores de carga.

---

# 325. Navegación

La navegación será completamente del lado del cliente (Client Navigation) utilizando el App Router de Next.js.

Las transiciones entre módulos deberán ser inmediatas y mantener el estado cuando sea posible.

---

# 326. Diseño Responsive

El panel deberá adaptarse a:

Desktop

≥1280 px

Experiencia completa.

---

Tablet

768–1279 px

Barra lateral colapsable.

---

Móvil

<768 px

Menú lateral oculto.

Controles reorganizados.

Tablas adaptadas mediante tarjetas cuando sea necesario.

---

# 327. Sistema de Permisos

El panel deberá estar preparado para múltiples roles.

Inicialmente:

Administrador.

En futuras versiones:

- Editor.
- Moderador.
- Gestor de contenido.
- Cliente empresarial.

Cada módulo verificará permisos antes de permitir cualquier acción.

---

# 328. Estados Globales

Todos los módulos compartirán los siguientes estados visuales:

Cargando.

Vacío.

Error.

Sin conexión.

Sin permisos.

Contenido disponible.

Esto garantizará consistencia en toda la aplicación.

---

# 329. Sistema de Confirmaciones

Las acciones críticas requerirán confirmación explícita.

Ejemplos:

- Archivar producto.
- Eliminar imagen.
- Publicar artículo.
- Restaurar registro.
- Cambiar configuración crítica.

Los cuadros de diálogo deberán explicar claramente las consecuencias de la acción.

---

# 330. Notificaciones

El sistema mostrará notificaciones temporales para informar el resultado de las operaciones.

Tipos:

- Éxito.
- Información.
- Advertencia.
- Error.

Cada notificación deberá desaparecer automáticamente después de unos segundos, permitiendo también su cierre manual.

---

# 331. Registro de Actividad

El panel deberá registrar internamente acciones relevantes realizadas por los administradores.

Ejemplos:

- Creación de productos.
- Publicación de artículos.
- Eliminación lógica de registros.
- Cambios en la configuración.
- Inicio y cierre de sesión.

Este historial facilitará futuras auditorías y la resolución de incidencias.

---

# 332. Requerimientos Funcionales

RF-ADM-001

Permitir autenticación mediante Supabase Auth.

---

RF-ADM-002

Restringir el acceso a usuarios autorizados.

---

RF-ADM-003

Mostrar un Dashboard con información resumida.

---

RF-ADM-004

Proporcionar navegación entre módulos sin recargar la página.

---

RF-ADM-005

Permitir cerrar sesión de forma segura.

---

RF-ADM-006

Mantener consistencia visual entre todos los módulos.

---

# 333. Requerimientos No Funcionales

RNF-ADM-001

Tiempo de carga inicial inferior a 2 segundos.

---

RNF-ADM-002

Compatible con los navegadores modernos.

---

RNF-ADM-003

Responsive para escritorio, tablet y móvil.

---

RNF-ADM-004

Accesible mediante teclado.

---

RNF-ADM-005

Preparado para múltiples idiomas.

---

RNF-ADM-006

Escalable para incorporar nuevos módulos sin modificar la arquitectura existente.

---

# 334. Criterios de Aceptación

El Panel Administrativo será considerado correctamente implementado cuando:

- El acceso esté protegido mediante autenticación.
- La navegación entre módulos sea fluida.
- Exista una estructura consistente para todas las secciones.
- El diseño sea responsive y accesible.
- Las acciones críticas requieran confirmación.
- Las operaciones informen correctamente su resultado mediante notificaciones.
- La arquitectura permita incorporar nuevos módulos sin rediseños importantes.

---

## Fin de la Parte 7.1

# Parte 7.2
# Dashboard Administrativo

---

# 335. Introducción

## 335.1 Objetivo

El Dashboard Administrativo será la pantalla principal del panel de administración de Poppy Crafty.

Su finalidad será proporcionar una visión general del estado del sitio web, permitiendo al administrador acceder rápidamente a la información más relevante, identificar tareas pendientes y navegar hacia los diferentes módulos del sistema.

El Dashboard deberá minimizar la cantidad de clics necesarios para realizar las operaciones más frecuentes.

---

# 336. Objetivos del Dashboard

El Dashboard deberá:

- Mostrar un resumen del estado del sitio.
- Facilitar el acceso rápido a los módulos principales.
- Mostrar indicadores clave (KPIs).
- Informar sobre actividad reciente.
- Alertar sobre elementos pendientes.
- Proporcionar estadísticas generales.
- Escalar fácilmente con nuevos widgets.

---

# 337. Diseño General

La interfaz estará dividida en las siguientes secciones:

1. Encabezado.
2. Tarjetas de métricas.
3. Accesos rápidos.
4. Actividad reciente.
5. Solicitudes recientes.
6. Resumen del contenido.
7. Área de alertas.
8. Información del sistema.

Cada sección podrá reorganizarse en futuras versiones.

---

# 338. Encabezado

El encabezado mostrará:

- Saludo personalizado.
- Nombre del administrador autenticado.
- Fecha actual.
- Hora.
- Último inicio de sesión.
- Estado general del sistema.

Ejemplo:

Buenos días, María.

Hoy es lunes 15 de marzo de 2027.

Último acceso:

14 de marzo de 2027 - 8:42 PM.

---

# 339. Indicadores Principales (KPIs)

El Dashboard mostrará tarjetas con información resumida.

Inicialmente incluirá:

Productos publicados.

Artículos publicados.

Categorías activas.

Imágenes almacenadas.

Mensajes sin responder.

Cotizaciones pendientes.

Visitas del sitio (futuro).

Usuarios registrados (futuro).

Pedidos (futuro).

---

Cada tarjeta incluirá:

- Ícono.
- Valor principal.
- Descripción.
- Variación respecto al período anterior (futuro).
- Enlace al módulo correspondiente.

---

# 340. Widget de Productos

Información mostrada:

- Total de productos.
- Productos publicados.
- Productos en borrador.
- Productos archivados.
- Productos destacados.

Acción rápida:

Ir al módulo de Productos.

---

# 341. Widget del Blog

Información mostrada:

- Artículos publicados.
- Borradores.
- Programados.
- Archivados.
- Categorías del blog.

Acción rápida:

Crear nuevo artículo.

---

# 342. Widget de Formularios

Mostrará:

Mensajes nuevos.

Cotizaciones pendientes.

Solicitudes respondidas.

Tiempo promedio de respuesta (futuro).

Acción rápida:

Abrir bandeja de mensajes.

---

# 343. Widget Multimedia

Información:

Número total de imágenes.

Espacio utilizado.

Cantidad de galerías.

Últimos archivos cargados.

Preparado para mostrar el porcentaje de uso del almacenamiento de Supabase Storage.

---

# 344. Accesos Rápidos

Se mostrarán botones para las acciones más utilizadas.

Ejemplos:

Nuevo Producto.

Nuevo Artículo.

Nueva Categoría.

Subir Imagen.

Crear Galería.

Ver Sitio Web.

Responder Mensajes.

Configuración.

Los accesos rápidos deberán poder ampliarse en futuras versiones.

---

# 345. Actividad Reciente

Se mostrará una línea de tiempo con las acciones administrativas más recientes.

Ejemplo:

Hace 5 minutos

Producto "Corona Princesa" actualizado.

Hace 18 minutos

Artículo "Materiales para Cricut" publicado.

Hace 30 minutos

Nueva solicitud de cotización recibida.

Cada registro incluirá:

- Fecha.
- Hora.
- Usuario responsable.
- Acción realizada.
- Enlace al elemento afectado.

---

# 346. Solicitudes Recientes

Mostrará las últimas solicitudes recibidas mediante los formularios del sitio.

Campos:

Nombre.

Tipo de solicitud.

Fecha.

Estado.

Botón para abrir el detalle.

---

# 347. Resumen del Contenido

Se mostrará un resumen consolidado de los principales módulos.

Ejemplo:

Productos:

125

Artículos:

38

Categorías:

12

Galerías:

8

Imágenes:

742

Mensajes pendientes:

4

Cotizaciones pendientes:

7

---

# 348. Área de Alertas

El sistema notificará situaciones que requieran atención.

Ejemplos:

Productos sin imagen principal.

Artículos sin SEO configurado.

Categorías vacías.

Imágenes sin texto alternativo.

Solicitudes pendientes desde hace más de siete días.

Errores de sincronización.

Las alertas deberán ordenarse por prioridad.

---

# 349. Estado del Sistema

Se mostrará información técnica relevante.

Ejemplo:

Base de datos:

Conectada.

Supabase Storage:

Disponible.

Autenticación:

Operativa.

Última copia de seguridad:

(Preparado para futuras versiones).

Versión del sistema.

Entorno (Producción / Desarrollo).

---

# 350. Búsqueda Global

Desde el Dashboard podrá realizarse una búsqueda rápida.

La búsqueda deberá localizar:

Productos.

Artículos.

Categorías.

Imágenes.

Mensajes.

Cotizaciones.

Resultados recientes.

La navegación será inmediata.

---

# 351. Actualización de Datos

Los widgets deberán actualizarse automáticamente cuando:

- Se cree un producto.
- Se publique un artículo.
- Se reciba una solicitud.
- Se modifique una categoría.
- Se elimine un registro.

Cuando no sea posible actualizar automáticamente, deberá mostrarse un botón para refrescar la información.

---

# 352. Estados Vacíos

Si no existen datos suficientes, cada widget mostrará mensajes informativos.

Ejemplos:

"Aún no existen productos publicados."

"No hay mensajes pendientes."

"No se registran actividades recientes."

Estos estados deberán incluir accesos directos para crear el primer elemento correspondiente.

---

# 353. Rendimiento

El Dashboard deberá cargar la información mediante consultas optimizadas.

Se priorizará:

Consultas agregadas.

Caché cuando sea posible.

Carga diferida (lazy loading) para widgets secundarios.

Actualización parcial de componentes.

---

# 354. Accesibilidad

Todos los widgets deberán:

- Ser navegables mediante teclado.
- Tener etiquetas accesibles.
- Mantener contraste adecuado.
- Ser compatibles con lectores de pantalla.
- Adaptarse correctamente a diferentes tamaños de pantalla.

---

# 355. Requerimientos Funcionales

RF-DASH-001

Mostrar indicadores generales del sistema.

---

RF-DASH-002

Presentar accesos rápidos a los módulos principales.

---

RF-DASH-003

Mostrar actividad reciente.

---

RF-DASH-004

Visualizar mensajes y cotizaciones pendientes.

---

RF-DASH-005

Mostrar alertas administrativas.

---

RF-DASH-006

Incorporar una búsqueda global.

---

RF-DASH-007

Actualizar automáticamente la información cuando cambien los datos.

---

# 356. Requerimientos No Funcionales

RNF-DASH-001

Carga inicial inferior a un segundo utilizando caché cuando sea posible.

---

RNF-DASH-002

Compatible con escritorio, tablet y dispositivos móviles.

---

RNF-DASH-003

Escalable para incorporar nuevos widgets sin modificar la arquitectura existente.

---

RNF-DASH-004

Optimizado para minimizar el número de consultas a la base de datos.

---

RNF-DASH-005

Cumplir con criterios de accesibilidad WCAG 2.1 nivel AA.

---

# 357. Criterios de Aceptación

El Dashboard será considerado finalizado cuando:

- Presente un resumen claro del estado del sistema.
- Permita acceder rápidamente a todos los módulos administrativos.
- Muestre métricas consistentes y actualizadas.
- Informe sobre actividades recientes y elementos pendientes.
- Funcione correctamente en dispositivos de diferentes tamaños.
- Mantenga tiempos de respuesta adecuados incluso con grandes volúmenes de información.
- Permita incorporar nuevos widgets sin afectar el funcionamiento del panel.

---

## Fin de la Parte 7.2

# Parte 7.3
# Módulo de Gestión de Productos

---

# 358. Introducción

## 358.1 Objetivo

El módulo de Gestión de Productos será el encargado de administrar el catálogo completo de Poppy Crafty.

Permitirá crear, editar, organizar, publicar, archivar y gestionar todos los productos ofrecidos por el emprendimiento, manteniendo una estructura preparada para futuras funcionalidades como comercio electrónico, control de inventario, variantes, promociones y pedidos.

Este módulo deberá ofrecer una experiencia de administración rápida, intuitiva y segura, reduciendo al mínimo el tiempo necesario para publicar nuevos productos.

---

# 359. Objetivos

El módulo deberá permitir:

- Crear productos.
- Editar productos.
- Duplicar productos.
- Archivar productos.
- Publicar productos.
- Gestionar imágenes.
- Gestionar categorías.
- Gestionar etiquetas.
- Configurar SEO.
- Relacionar productos.
- Buscar productos.
- Filtrar productos.
- Ordenar productos.
- Ejecutar acciones masivas.

---

# 360. Componentes del Módulo

El módulo estará compuesto por las siguientes vistas:

- Dashboard del módulo.
- Listado de productos.
- Formulario de creación.
- Formulario de edición.
- Vista previa.
- Gestión de imágenes.
- Configuración SEO.
- Historial de cambios.
- Papelera lógica.

Cada una de estas vistas compartirá componentes reutilizables para mantener la consistencia visual.

---

# 361. Dashboard del Módulo

Al ingresar al módulo se mostrará un resumen del estado del catálogo.

Indicadores principales:

- Total de productos.
- Publicados.
- Borradores.
- Archivados.
- Destacados.
- Sin imagen principal.
- Sin categoría.
- Sin configuración SEO.

Estos indicadores servirán para identificar rápidamente elementos que requieren atención.

---

# 362. Listado de Productos

La vista principal mostrará una tabla paginada con todos los productos registrados.

Cada fila representará un producto.

La tabla deberá ser altamente optimizada para permitir la administración de cientos o miles de registros.

---

# 363. Columnas del Listado

Cada producto mostrará:

- Imagen principal.
- Nombre.
- Categoría.
- Estado.
- Precio desde.
- Producto destacado.
- Fecha de creación.
- Fecha de actualización.
- Acciones rápidas.

Opcionalmente podrán mostrarse columnas adicionales configurables en futuras versiones.

---

# 364. Acciones Rápidas

Cada fila permitirá ejecutar acciones sin abandonar el listado.

Acciones disponibles:

- Ver.
- Editar.
- Duplicar.
- Publicar.
- Archivar.
- Gestionar imágenes.
- Configurar SEO.
- Eliminar lógicamente.

Las acciones críticas requerirán confirmación previa.

---

# 365. Sistema de Búsqueda

El listado incluirá una búsqueda global que localizará productos por:

- Nombre.
- Slug.
- Categoría.
- Etiquetas.
- Materiales.
- Palabras clave SEO.

La búsqueda deberá ser insensible a mayúsculas, minúsculas y acentos.

---

# 366. Sistema de Filtros

El administrador podrá filtrar productos mediante:

- Estado.
- Categoría.
- Etiquetas.
- Destacados.
- Fecha de creación.
- Fecha de actualización.
- Rango de precio (futuro).

Los filtros podrán combinarse entre sí.

---

# 367. Ordenamiento

Los productos podrán ordenarse por:

- Nombre.
- Fecha de creación.
- Fecha de actualización.
- Precio.
- Estado.
- Orden personalizado.

El criterio seleccionado deberá mantenerse durante la sesión del usuario.

---

# 368. Acciones Masivas

El sistema permitirá seleccionar múltiples productos para ejecutar acciones en lote.

Acciones disponibles:

- Publicar.
- Archivar.
- Cambiar categoría.
- Asignar etiquetas.
- Exportar.
- Eliminar lógicamente.

Antes de ejecutar la acción se mostrará un resumen con la cantidad de registros afectados.

---

# 369. Paginación

La cantidad inicial será de 20 productos por página.

El administrador podrá seleccionar otros tamaños de página:

- 20
- 50
- 100

El sistema recordará la última configuración utilizada.

---

# 370. Estados Visuales

Cada producto mostrará un indicador visual según su estado.

Estados:

- Borrador.
- Publicado.
- Archivado.
- Oculto.

Cada estado tendrá un color distintivo para facilitar su identificación.

---

# 371. Formulario de Creación

La creación de un nuevo producto se realizará mediante un formulario dividido en pestañas.

Secciones principales:

- Información general.
- Descripción.
- Multimedia.
- Categorización.
- SEO.
- Productos relacionados.
- Configuración avanzada.

Esta organización reducirá la complejidad visual y facilitará el mantenimiento.

---

# 372. Información General

Campos obligatorios:

- Nombre.
- Slug.
- Categoría principal.
- Estado.

Campos opcionales:

- Precio desde.
- Tiempo de elaboración.
- Materiales.
- Producto destacado.

El slug podrá generarse automáticamente a partir del nombre.

---

# 373. Descripción

El administrador podrá introducir:

- Descripción corta.
- Descripción completa.

El editor deberá admitir formato enriquecido mediante componentes reutilizables preparados para futuras versiones.

---

# 374. Gestión de Imágenes

Cada producto podrá contener:

- Imagen principal.
- Galería de imágenes.
- Miniaturas.
- Imagen para Open Graph.

Las imágenes se almacenarán en Supabase Storage y podrán reorganizarse mediante arrastrar y soltar.

---

# 375. Configuración SEO

Cada producto dispondrá de un apartado específico para optimización en buscadores.

Campos:

- Meta Title.
- Meta Description.
- URL Canónica.
- Imagen Open Graph.
- Palabras clave.

El sistema mostrará una vista previa de cómo aparecerá el producto en los resultados de búsqueda.

---

# 376. Productos Relacionados

El administrador podrá asociar manualmente productos relacionados.

Las recomendaciones aparecerán automáticamente en la ficha pública del producto.

En futuras versiones el sistema podrá sugerir relaciones automáticamente utilizando categorías, etiquetas y comportamiento de navegación.

---

# 377. Validaciones

Antes de guardar un producto se verificará:

- Nombre obligatorio.
- Slug único.
- Categoría válida.
- Precio no negativo.
- Imágenes permitidas.
- Longitud de metadatos SEO.

Los errores se mostrarán junto al campo correspondiente.

---

# 378. Guardado

El formulario permitirá:

- Guardar como borrador.
- Publicar inmediatamente.
- Guardar cambios sin abandonar la edición.

Mientras se procesa la operación se mostrará un indicador de carga y se deshabilitarán las acciones duplicadas.

---

# 379. Historial de Cambios

Cada modificación importante quedará registrada.

Información almacenada:

- Fecha.
- Usuario.
- Acción realizada.
- Campos modificados.

En futuras versiones se permitirá comparar versiones anteriores y restaurarlas.

---

# 380. Papelera Lógica

Los productos eliminados no desaparecerán de la base de datos.

Pasarán a un estado archivado desde donde podrán:

- Restaurarse.
- Eliminarse definitivamente mediante procesos administrativos especiales.

Esto reducirá el riesgo de pérdida accidental de información.

---

# 381. Requerimientos Funcionales

RF-PROD-ADM-001

Crear productos.

---

RF-PROD-ADM-002

Editar productos.

---

RF-PROD-ADM-003

Duplicar productos.

---

RF-PROD-ADM-004

Administrar imágenes.

---

RF-PROD-ADM-005

Configurar SEO.

---

RF-PROD-ADM-006

Buscar y filtrar productos.

---

RF-PROD-ADM-007

Ejecutar acciones masivas.

---

RF-PROD-ADM-008

Gestionar productos relacionados.

---

RF-PROD-ADM-009

Archivar y restaurar productos.

---

RF-PROD-ADM-010

Registrar historial de cambios.

---

# 382. Requerimientos No Funcionales

RNF-PROD-ADM-001

Carga del listado inferior a 2 segundos.

---

RNF-PROD-ADM-002

Compatible con miles de productos.

---

RNF-PROD-ADM-003

Interfaz responsive.

---

RNF-PROD-ADM-004

Preparado para integración con inventario y comercio electrónico.

---

RNF-PROD-ADM-005

Optimizado para minimizar consultas repetidas.

---

RNF-PROD-ADM-006

Compatible con accesibilidad WCAG 2.1 AA.

---

# 383. Criterios de Aceptación

El módulo será considerado finalizado cuando:

- Permita administrar completamente el catálogo.
- Gestione imágenes y categorías de forma integrada.
- Mantenga un historial de modificaciones.
- Permita búsquedas y filtros eficientes.
- Soporte acciones masivas de forma segura.
- Garantice tiempos de respuesta adecuados con grandes volúmenes de información.
- Se encuentre preparado para futuras funcionalidades de comercio electrónico.

---

## Fin de la Parte 7.3.1

# Parte 7.3.2
# Especificación Completa del Formulario de Productos

---

# 384. Introducción

## 384.1 Objetivo

El formulario de productos constituye el núcleo del módulo de administración del catálogo.

Su propósito es permitir la creación y edición de productos mediante una interfaz organizada, intuitiva y escalable, reduciendo errores de captura y facilitando la incorporación de futuras funcionalidades como variantes, inventario, comercio electrónico y personalización avanzada.

El formulario deberá mantener una experiencia consistente independientemente del tipo de producto.

---

# 385. Filosofía del Formulario

El formulario deberá cumplir los siguientes principios:

- Simplicidad.
- Organización por secciones.
- Validación en tiempo real.
- Guardado seguro.
- Bajo número de clics.
- Compatibilidad con teclado.
- Accesibilidad.
- Escalabilidad.

Nunca deberá mostrar todos los campos simultáneamente.

La información se dividirá mediante pestañas para reducir la carga cognitiva del usuario.

---

# 386. Flujo General

Crear producto

↓

Completar información general

↓

Guardar borrador automáticamente

↓

Agregar imágenes

↓

Seleccionar categoría

↓

Configurar SEO

↓

Relacionar productos

↓

Publicar

---

# 387. Organización por Pestañas

El formulario estará dividido en siete secciones principales:

1. Información General.
2. Descripción.
3. Multimedia.
4. Organización.
5. SEO.
6. Productos Relacionados.
7. Configuración Avanzada.

Cada pestaña podrá validarse de forma independiente.

---

# 388. Barra Superior

La parte superior del formulario incluirá:

- Nombre del producto.
- Estado actual.
- Último guardado.
- Botón Guardar.
- Botón Publicar.
- Botón Guardar como Borrador.
- Menú de acciones adicionales.

---

# 389. Indicador de Estado

El formulario mostrará permanentemente el estado del registro.

Estados posibles:

- Nuevo.
- Sin guardar.
- Guardando.
- Guardado.
- Publicado.
- Archivado.

Los cambios visuales deberán ser inmediatos para evitar incertidumbre.

---

# 390. Sistema de AutoGuardado

El sistema guardará automáticamente los cambios cuando:

- El usuario permanezca inactivo durante unos segundos.
- Cambie de pestaña.
- Cierre accidentalmente la pestaña del navegador (si la sincronización lo permite).

Cada guardado actualizará la fecha y hora del último cambio.

---

# 391. Confirmación de Salida

Si existen cambios pendientes de guardar, el sistema mostrará un cuadro de confirmación antes de abandonar la página.

Opciones disponibles:

- Guardar y salir.
- Salir sin guardar.
- Cancelar.

---

# 392. Pestaña: Información General

Esta será la primera sección del formulario.

Contendrá los datos esenciales del producto.

Campos incluidos:

- Nombre.
- Slug.
- Estado.
- Precio desde.
- Tiempo de elaboración.
- Materiales.
- Producto destacado.

---

# 393. Campo: Nombre

Tipo:

Texto.

Obligatorio.

Longitud máxima:

200 caracteres.

Validaciones:

- No vacío.
- Sin espacios al inicio ni al final.
- Sin caracteres de control.

El sistema mostrará un contador de caracteres.

---

# 394. Campo: Slug

Tipo:

Texto.

Generado automáticamente a partir del nombre.

El administrador podrá modificarlo manualmente.

Validaciones:

- Único.
- Minúsculas.
- Sin espacios.
- Uso exclusivo de letras, números y guiones.

Ejemplo:

corona-personalizada-princesa

---

# 395. Campo: Estado

Opciones disponibles:

- Draft.
- Published.
- Hidden.
- Archived.

El estado determinará la visibilidad pública del producto.

---

# 396. Campo: Precio Desde

Tipo:

Decimal.

Formato:

Lempiras hondureñas.

Validaciones:

- Valor positivo.
- Hasta dos decimales.

Este campo será opcional para productos cuyo precio dependa de personalizaciones.

---

# 397. Campo: Tiempo de Elaboración

Tipo:

Texto corto.

Ejemplos:

24 horas.

2 a 3 días hábiles.

1 semana.

Este campo servirá únicamente como información para el cliente.

---

# 398. Campo: Materiales

Campo multilínea.

Permitirá describir los materiales principales utilizados en el producto.

Ejemplo:

Foami diamantado.

Cartulina opalina.

Vinil textil.

Sublimación.

---

# 399. Campo: Producto Destacado

Tipo:

Interruptor (Switch).

Cuando esté activado el producto podrá aparecer automáticamente en:

- Página principal.
- Productos destacados.
- Recomendaciones.
- Promociones futuras.

---

# 400. Validaciones de Información General

El sistema impedirá guardar cuando:

- El nombre esté vacío.
- El slug exista previamente.
- El precio sea negativo.
- El estado sea inválido.

Los errores deberán mostrarse junto al campo correspondiente.

---

# 401. Navegación entre Pestañas

El usuario podrá cambiar de pestaña en cualquier momento.

Si existen errores obligatorios en la pestaña actual, el sistema los resaltará visualmente sin impedir la navegación.

---

# 402. Indicadores Visuales

Cada pestaña mostrará uno de los siguientes estados:

- Completa.
- Incompleta.
- Con errores.
- Sin cambios.
- Modificada.

Estos indicadores ayudarán al administrador a identificar rápidamente la información pendiente.

---

# 403. Accesibilidad

Todos los controles deberán:

- Ser navegables mediante teclado.
- Poseer etiquetas accesibles.
- Mostrar foco visible.
- Ser compatibles con lectores de pantalla.

---

# 404. Responsive

En escritorio:

Formulario de dos columnas cuando sea posible.

En tablet:

Una columna con agrupaciones verticales.

En móvil:

Todos los campos ocuparán el ancho completo.

Las pestañas superiores se convertirán en navegación horizontal desplazable.

---

# 405. Requerimientos Funcionales

RF-PROD-FORM-001

Permitir crear nuevos productos.

---

RF-PROD-FORM-002

Editar productos existentes.

---

RF-PROD-FORM-003

Generar automáticamente el slug.

---

RF-PROD-FORM-004

Guardar automáticamente los cambios.

---

RF-PROD-FORM-005

Validar todos los campos obligatorios.

---

RF-PROD-FORM-006

Mostrar el estado del formulario en tiempo real.

---

# 406. Requerimientos No Funcionales

RNF-PROD-FORM-001

Tiempo de respuesta inferior a 200 ms para validaciones locales.

---

RNF-PROD-FORM-002

AutoGuardado sin bloquear la interfaz.

---

RNF-PROD-FORM-003

Compatible con dispositivos móviles.

---

RNF-PROD-FORM-004

Preparado para incorporar nuevos campos sin modificar la arquitectura del formulario.

---

# 407. Criterios de Aceptación

El formulario será considerado correctamente implementado cuando:

- Permita crear y editar productos de forma intuitiva.
- Organice la información mediante pestañas.
- Valide automáticamente los datos ingresados.
- Mantenga el estado del formulario en tiempo real.
- Guarde los cambios de forma segura.
- Funcione correctamente en escritorio, tablet y dispositivos móviles.
- Permita ampliar el formulario con nuevas funcionalidades sin rediseños significativos.

---

## Fin de la Parte 7.3.2 (Sección A)

# Parte 7.3.3
# Gestión Multimedia del Producto

---

# 408. Introducción

## 408.1 Objetivo

La gestión multimedia permitirá administrar todos los recursos gráficos asociados a un producto.

Su propósito será facilitar la carga, organización, optimización y administración de imágenes de forma rápida, segura y escalable.

El sistema deberá ofrecer una experiencia intuitiva incluso cuando un producto contenga decenas de fotografías.

---

# 409. Objetivos

El módulo deberá permitir:

- Subir imágenes.
- Eliminar imágenes.
- Reordenar imágenes.
- Definir imagen principal.
- Editar texto alternativo.
- Agregar descripciones.
- Visualizar miniaturas.
- Ver imágenes en tamaño completo.
- Optimizar automáticamente los archivos.
- Gestionar metadatos.

---

# 410. Arquitectura General

Todas las imágenes serán almacenadas utilizando Supabase Storage.

La base de datos únicamente almacenará la información descriptiva y la referencia al archivo.

Cada imagen tendrá un registro asociado en la tabla `product_images`.

---

# 411. Organización de Archivos

Los archivos deberán organizarse mediante una estructura lógica.

Ejemplo:

products/

    corona-princesa/

        portada.webp

        detalle-01.webp

        detalle-02.webp

        detalle-03.webp

En futuras versiones podrá utilizarse el UUID del producto como identificador principal para evitar conflictos de nombres.

---

# 412. Tipos de Archivo Permitidos

Inicialmente se aceptarán:

- JPG
- JPEG
- PNG
- WEBP

Preparado para futuras versiones:

- AVIF
- SVG (con restricciones)
- GIF

No se permitirán formatos ejecutables ni documentos.

---

# 413. Tamaño Máximo

Cada archivo individual tendrá un tamaño máximo recomendado de:

10 MB.

El sistema advertirá al usuario cuando un archivo exceda el límite permitido.

---

# 414. Resolución Recomendada

Para mantener una buena calidad visual sin afectar el rendimiento, se recomienda:

Ancho:

1600 px

Altura:

1600 px

Relación:

1:1 o proporcional.

Las imágenes superiores podrán redimensionarse automáticamente en futuras versiones.

---

# 415. Carga de Archivos

El administrador podrá:

- Arrastrar imágenes.
- Seleccionar archivos mediante el explorador.
- Subir múltiples imágenes simultáneamente.

El sistema mostrará un área visual indicando cuándo es posible soltar los archivos.

---

# 416. Barra de Progreso

Durante la carga se mostrará:

- Nombre del archivo.
- Tamaño.
- Porcentaje de subida.
- Estado.

Estados posibles:

Pendiente.

Subiendo.

Procesando.

Completado.

Error.

---

# 417. Validaciones

Antes de iniciar la carga se verificará:

- Tipo MIME.
- Tamaño.
- Extensión.
- Archivo corrupto.
- Nombre válido.

Los archivos que no cumplan los requisitos no serán enviados al servidor.

---

# 418. Compresión Automática

En futuras versiones el sistema podrá comprimir automáticamente las imágenes antes de almacenarlas.

Objetivos:

- Reducir peso.
- Mantener calidad visual.
- Mejorar el rendimiento del sitio.

La compresión nunca deberá degradar significativamente la imagen.

---

# 419. Conversión Automática

Cuando sea posible el sistema convertirá automáticamente las imágenes a:

WEBP.

En futuras versiones:

AVIF.

Esto permitirá reducir el tiempo de carga del sitio público.

---

# 420. Generación de Miniaturas

Por cada imagen podrán generarse automáticamente diferentes tamaños.

Ejemplo:

Miniatura.

400 px.

Vista previa.

800 px.

Imagen principal.

1600 px.

Esta funcionalidad queda preparada para futuras implementaciones mediante funciones Edge o procesos automáticos.

---

# 421. Vista de Galería

Las imágenes se mostrarán mediante una cuadrícula adaptable.

Cada tarjeta incluirá:

- Miniatura.
- Nombre.
- Estado.
- Indicador de portada.
- Acciones rápidas.

---

# 422. Reordenamiento

Las imágenes podrán reorganizarse mediante Drag & Drop.

El nuevo orden se almacenará automáticamente.

La primera imagen podrá establecerse como portada de forma automática si así se configura.

---

# 423. Imagen Principal

Cada producto deberá tener únicamente una imagen principal.

La portada será utilizada en:

- Catálogo.
- Resultados de búsqueda.
- Productos relacionados.
- Página principal.
- Redes sociales.
- Open Graph (si no existe una específica).

El cambio de portada deberá reflejarse inmediatamente.

---

# 424. Texto Alternativo

Cada imagen dispondrá de un campo obligatorio para el texto alternativo.

Ejemplo:

"Corona personalizada de cumpleaños color rosa con detalles plateados."

Este texto mejorará:

- Accesibilidad.
- SEO.
- Compatibilidad con lectores de pantalla.

---

# 425. Descripción

Opcionalmente podrá añadirse una descripción para uso interno.

Ejemplo:

"Fotografía tomada con iluminación natural para portada."

Este campo no será visible públicamente.

---

# 426. Vista Completa

Al hacer clic sobre una imagen se abrirá un visor ampliado.

Desde allí podrán realizarse acciones como:

- Cambiar portada.
- Editar información.
- Descargar.
- Eliminar.
- Navegar entre imágenes.

---

# 427. Eliminación

Antes de eliminar una imagen el sistema mostrará una confirmación.

Si la imagen eliminada era la portada:

El sistema solicitará seleccionar una nueva imagen principal.

La eliminación física del archivo podrá realizarse mediante procesos programados para evitar pérdidas accidentales.

---

# 428. Estados Vacíos

Si un producto aún no posee imágenes se mostrará un estado ilustrado con:

Mensaje:

"Aún no has agregado imágenes para este producto."

Acción principal:

Subir primera imagen.

---

# 429. Optimización para SEO

Todas las imágenes deberán contar con:

- Nombre descriptivo.
- Texto alternativo.
- Compresión adecuada.
- Formato optimizado.

En futuras versiones se podrán generar automáticamente:

- Sitemap de imágenes.
- Etiquetas Open Graph.
- Metadatos adicionales.

---

# 430. Rendimiento

La galería utilizará:

- Lazy Loading.
- Carga progresiva.
- Miniaturas optimizadas.
- Caché del navegador.

La visualización de una gran cantidad de imágenes no deberá afectar significativamente el rendimiento del panel.

---

# 431. Accesibilidad

Todas las acciones deberán poder realizarse mediante teclado.

Las miniaturas incluirán:

- Etiquetas accesibles.
- Indicadores de foco.
- Texto alternativo.
- Compatibilidad con lectores de pantalla.

---

# 432. Requerimientos Funcionales

RF-MEDIA-001

Permitir carga múltiple.

---

RF-MEDIA-002

Permitir reorganizar imágenes.

---

RF-MEDIA-003

Definir imagen principal.

---

RF-MEDIA-004

Editar texto alternativo.

---

RF-MEDIA-005

Eliminar imágenes.

---

RF-MEDIA-006

Visualizar imágenes ampliadas.

---

RF-MEDIA-007

Validar archivos antes de subirlos.

---

RF-MEDIA-008

Preparar el sistema para optimización automática.

---

# 433. Requerimientos No Funcionales

RNF-MEDIA-001

Carga simultánea de múltiples archivos.

---

RNF-MEDIA-002

Compatibilidad con dispositivos móviles.

---

RNF-MEDIA-003

Optimización para conexiones lentas.

---

RNF-MEDIA-004

Preparado para integración con CDN.

---

RNF-MEDIA-005

Escalable para miles de archivos.

---

# 434. Criterios de Aceptación

El módulo multimedia será considerado finalizado cuando:

- Permita administrar completamente las imágenes de un producto.
- Soporte carga múltiple mediante arrastrar y soltar.
- Permita reorganizar imágenes visualmente.
- Garantice una única imagen principal.
- Valide correctamente los archivos antes de almacenarlos.
- Mantenga un rendimiento adecuado con grandes galerías.
- Cumpla criterios de accesibilidad y optimización para SEO.

---

## Fin de la Parte 7.3.3

# Parte 7.3.4
# SEO y Optimización por Producto

---

# 435. Introducción

## 435.1 Objetivo

Cada producto deberá contar con un módulo independiente para la configuración de SEO (Search Engine Optimization).

Su propósito será mejorar la visibilidad del catálogo en buscadores como Google, Bing y otros motores de búsqueda, así como optimizar la forma en que los productos se comparten en redes sociales y aplicaciones de mensajería.

El sistema deberá ofrecer herramientas que permitan optimizar el contenido sin necesidad de conocimientos técnicos avanzados.

---

# 436. Objetivos del Módulo

El módulo deberá permitir:

- Configurar metadatos SEO.
- Optimizar títulos y descripciones.
- Gestionar URLs canónicas.
- Configurar Open Graph.
- Configurar Twitter Cards.
- Generar datos estructurados.
- Evaluar la calidad SEO.
- Detectar errores antes de publicar.
- Mejorar el posicionamiento orgánico.

---

# 437. Organización del Módulo

La sección SEO estará dividida en los siguientes apartados:

- Configuración General.
- Vista previa en Google.
- Vista previa en Redes Sociales.
- Palabra clave principal.
- Datos estructurados.
- Configuración avanzada.
- Diagnóstico SEO.

---

# 438. Meta Title

Campo destinado al título que aparecerá en los resultados de búsqueda.

Características:

- Máximo recomendado: 60 caracteres.
- Contador visual.
- Indicador de longitud.
- Validación automática.

Cuando no se defina manualmente, el sistema generará uno utilizando el nombre del producto.

---

# 439. Meta Description

Descripción breve utilizada por buscadores.

Características:

- Máximo recomendado: 160 caracteres.
- Contador dinámico.
- Vista previa en tiempo real.
- Advertencias cuando sea demasiado corta o extensa.

---

# 440. URL Canónica

Permitirá definir la dirección oficial del producto.

Objetivos:

- Evitar contenido duplicado.
- Mejorar la indexación.
- Facilitar futuras integraciones con comercio electrónico.

Si no se especifica manualmente, el sistema utilizará automáticamente la URL generada mediante el slug.

---

# 441. Palabra Clave Principal

El administrador podrá indicar la palabra clave principal del producto.

Ejemplo:

Corona personalizada de cumpleaños.

Esta información será utilizada únicamente para el análisis SEO interno.

---

# 442. Palabras Clave Secundarias

Podrán registrarse múltiples palabras clave relacionadas.

Ejemplos:

- Corona de foami.
- Corona para cumpleaños.
- Corona personalizada.
- Decoración de cumpleaños.

El sistema utilizará estas palabras para realizar recomendaciones automáticas.

---

# 443. Vista Previa de Google

Mientras el administrador edita el producto, el sistema mostrará una simulación aproximada de cómo aparecerá en Google.

La vista incluirá:

- URL.
- Meta Title.
- Meta Description.
- Fecha (cuando aplique).

Los cambios deberán reflejarse en tiempo real.

---

# 444. Vista Previa para Redes Sociales

El sistema mostrará una representación de cómo se visualizará el producto al compartirse.

Plataformas contempladas:

- Facebook.
- Instagram (referencia visual).
- WhatsApp.
- X (Twitter).
- LinkedIn.

Elementos mostrados:

- Imagen.
- Título.
- Descripción.
- Dominio.

---

# 445. Imagen Open Graph

El administrador podrá seleccionar una imagen específica para redes sociales.

Si no existe una imagen dedicada:

El sistema utilizará automáticamente la imagen principal del producto.

---

# 446. Twitter Card

Preparado para generar automáticamente las etiquetas:

- twitter:title
- twitter:description
- twitter:image
- twitter:card

Por defecto se utilizará el formato "summary_large_image".

---

# 447. Datos Estructurados (Schema.org)

Cada producto generará automáticamente información estructurada en formato JSON-LD.

Inicialmente se utilizará el tipo:

Product.

Se incluirán, cuando existan:

- Nombre.
- Descripción.
- Imagen.
- Marca.
- Categoría.
- Precio desde.
- Disponibilidad.
- URL.

La implementación deberá ser compatible con futuras funciones de comercio electrónico.

---

# 448. Breadcrumbs

El sistema generará automáticamente la ruta de navegación.

Ejemplo:

Inicio

>

Productos

>

Coronas Personalizadas

>

Corona Princesa Rosa

Esta estructura mejorará la experiencia del usuario y el SEO.

---

# 449. Robots Meta

Cada producto podrá configurar:

- Index.
- NoIndex.
- Follow.
- NoFollow.

Por defecto:

Index + Follow.

---

# 450. Sitemap

Los productos publicados deberán incorporarse automáticamente al sitemap XML del sitio.

Los productos archivados o en borrador no deberán aparecer.

---

# 451. Diagnóstico SEO

El sistema realizará una evaluación automática del contenido.

Se analizarán aspectos como:

- Longitud del título.
- Longitud de la descripción.
- Imagen principal.
- Texto alternativo.
- URL amigable.
- Presencia de palabra clave.
- Contenido suficiente.
- Encabezados.

---

# 452. Indicador SEO

El resultado del análisis se mostrará mediante un indicador visual.

Estados:

Excelente.

Bueno.

Aceptable.

Necesita mejoras.

Deficiente.

Cada estado deberá acompañarse de recomendaciones específicas.

---

# 453. Recomendaciones Automáticas

El sistema podrá sugerir acciones como:

- Agregar descripción.
- Completar texto alternativo.
- Reducir longitud del título.
- Mejorar la descripción.
- Agregar imagen Open Graph.
- Definir palabra clave.
- Completar metadatos faltantes.

Estas recomendaciones serán únicamente informativas.

---

# 454. Advertencias Previas a la Publicación

Si el administrador intenta publicar un producto con problemas importantes de SEO, el sistema mostrará advertencias.

Ejemplos:

- El producto no posee descripción.
- No existe imagen principal.
- El Meta Title está vacío.
- La Meta Description está vacía.
- No existe texto alternativo.

La publicación seguirá siendo posible, pero el sistema informará sobre los riesgos.

---

# 455. Accesibilidad

Todas las herramientas SEO deberán ser compatibles con:

- Navegación mediante teclado.
- Lectores de pantalla.
- Alto contraste.
- Diferentes resoluciones.

---

# 456. Rendimiento

Las evaluaciones SEO deberán ejecutarse localmente siempre que sea posible.

El análisis no deberá bloquear el formulario ni afectar la experiencia del usuario.

---

# 457. Preparación para IA

La arquitectura quedará preparada para incorporar funciones inteligentes como:

- Generación automática de Meta Title.
- Generación automática de Meta Description.
- Sugerencias de palabras clave.
- Optimización de contenido.
- Generación automática de texto alternativo para imágenes.
- Recomendaciones basadas en SEO técnico.

Estas funciones no formarán parte de la primera versión.

---

# 458. Requerimientos Funcionales

RF-SEO-001

Configurar Meta Title.

---

RF-SEO-002

Configurar Meta Description.

---

RF-SEO-003

Gestionar URL Canónica.

---

RF-SEO-004

Configurar Open Graph.

---

RF-SEO-005

Mostrar vista previa en buscadores.

---

RF-SEO-006

Mostrar vista previa para redes sociales.

---

RF-SEO-007

Generar datos estructurados.

---

RF-SEO-008

Evaluar automáticamente la calidad SEO.

---

RF-SEO-009

Mostrar recomendaciones de optimización.

---

# 459. Requerimientos No Funcionales

RNF-SEO-001

Actualización en tiempo real.

---

RNF-SEO-002

Compatibilidad con futuras herramientas de IA.

---

RNF-SEO-003

Generación automática de Schema.org.

---

RNF-SEO-004

Escalable para nuevos tipos de contenido.

---

RNF-SEO-005

Sin impacto perceptible en el rendimiento del formulario.

---

# 460. Criterios de Aceptación

El módulo SEO será considerado finalizado cuando:

- Permita configurar completamente los metadatos del producto.
- Muestre vistas previas de buscadores y redes sociales.
- Genere automáticamente datos estructurados.
- Evalúe la calidad SEO del contenido.
- Proporcione recomendaciones útiles para mejorar el posicionamiento.
- Se encuentre preparado para futuras funcionalidades basadas en inteligencia artificial.

---

## Fin de la Parte 7.3.4

# Parte 7.3.5
# Variantes, Personalización y Configuración Avanzada del Producto

---

# 461. Introducción

## 461.1 Objetivo

El módulo de Configuración Avanzada permitirá definir características adicionales para cada producto que no forman parte de la información básica, pero que serán esenciales para la evolución del sistema hacia una plataforma completa de comercio electrónico.

Aunque estas funciones no estarán habilitadas en la primera versión pública del sitio, toda la arquitectura deberá diseñarse para soportarlas desde el inicio, evitando migraciones complejas en el futuro.

---

# 462. Objetivos

El módulo deberá permitir preparar el sistema para:

- Variantes de productos.
- Personalización por parte del cliente.
- Opciones adicionales.
- Precios variables.
- Inventario.
- Promociones.
- Cupones.
- Productos digitales.
- Disponibilidad.
- Configuración comercial.

---

# 463. Arquitectura

Toda la información avanzada deberá almacenarse de manera desacoplada del producto principal.

El producto será únicamente el elemento base.

Las configuraciones adicionales se relacionarán mediante tablas independientes.

Esta arquitectura facilitará:

- Escalabilidad.
- Mantenimiento.
- Integración con e-commerce.
- Integración con ERP.
- Integración con inventario.

---

# 464. Variantes

El sistema quedará preparado para manejar múltiples variantes de un mismo producto.

Ejemplos:

Camisa personalizada

Variantes:

- Talla S
- Talla M
- Talla L
- Talla XL

Color:

- Blanco
- Negro
- Rosa

Material:

- Algodón
- Dry Fit

Cada combinación podrá convertirse en una variante independiente.

---

# 465. Configuración de Variantes

Cada variante podrá tener:

- Nombre.
- SKU.
- Precio.
- Imagen.
- Estado.
- Inventario.
- Código interno.
- Peso.
- Dimensiones.

Aunque inicialmente no se utilizarán todos estos campos, deberán contemplarse en la arquitectura.

---

# 466. Personalización

Muchos productos de Poppy Crafty requieren información proporcionada por el cliente.

Por ejemplo:

Coronas:

- Nombre.
- Edad.
- Colores.

Tazas:

- Fotografía.
- Frase.
- Diseño.

Camisas:

- Nombre.
- Número.
- Color.
- Talla.

El sistema deberá permitir definir qué datos serán solicitados al cliente para cada tipo de producto.

---

# 467. Campos Personalizados

Cada producto podrá incorporar campos configurables.

Tipos soportados:

- Texto corto.
- Texto largo.
- Número.
- Fecha.
- Color.
- Lista desplegable.
- Casilla de verificación.
- Selección múltiple.
- Carga de archivos (futuro).

---

# 468. Reglas de Validación

Cada campo personalizado podrá definir:

- Obligatorio.
- Longitud mínima.
- Longitud máxima.
- Valor mínimo.
- Valor máximo.
- Expresión regular.
- Texto de ayuda.
- Valor por defecto.

---

# 469. Opciones Adicionales

Algunos productos podrán ofrecer extras con costo adicional.

Ejemplos:

Corona:

+ Glitter especial.

+ Flores decorativas.

+ Piedras.

Camisa:

+ Estampado en espalda.

+ Nombre personalizado.

+ Manga personalizada.

Cada opción podrá modificar el precio final.

---

# 470. Precios Variables

La arquitectura permitirá definir reglas de precios.

Ejemplos:

Precio base:

L.120

Agregar fotografía:

+L.30

Agregar glitter:

+L.20

Agregar caja personalizada:

+L.80

El cálculo automático será implementado en versiones futuras.

---

# 471. Disponibilidad

Cada producto podrá definir:

- Disponible.
- Bajo pedido.
- Temporalmente agotado.
- Descontinuado.

Esta información será independiente del estado de publicación.

---

# 472. Inventario

Aunque inicialmente no existirá control de inventario, el sistema deberá contemplar:

- Cantidad disponible.
- Stock mínimo.
- Stock máximo.
- Reservado.
- Disponible para venta.

---

# 473. SKU

Cada producto podrá tener un identificador comercial.

Ejemplo:

POP-COR-001

POP-TAZA-014

POP-CAM-103

El SKU será único.

---

# 474. Código Interno

Opcionalmente podrá registrarse un código utilizado únicamente por la administración.

Este código no será visible para los clientes.

---

# 475. Peso

Pensando en futuros envíos nacionales, cada producto podrá registrar:

- Peso.
- Unidad.
- Peso volumétrico (futuro).

---

# 476. Dimensiones

Podrán registrarse:

- Alto.
- Ancho.
- Largo.

Esto facilitará futuros cálculos de envío.

---

# 477. Productos Digitales

La arquitectura permitirá distinguir entre:

- Producto físico.
- Producto digital.
- Servicio.

Inicialmente todos los productos serán físicos.

---

# 478. Configuración Comercial

Cada producto podrá definir:

- Permitir pedidos.
- Mostrar precio.
- Solicitar cotización.
- Mostrar disponibilidad.
- Producto destacado.
- Mostrar en portada.

---

# 479. Etiquetas Comerciales

El administrador podrá asignar etiquetas como:

- Nuevo.
- Popular.
- Recomendado.
- Edición limitada.
- Oferta.
- Próximamente.

Estas etiquetas podrán mostrarse visualmente en el catálogo.

---

# 480. Preparación para Promociones

La arquitectura contemplará:

- Descuento fijo.
- Descuento porcentual.
- Promoción temporal.
- Precio especial.

Estas funciones permanecerán deshabilitadas en la primera versión.

---

# 481. Preparación para Cupones

El sistema permitirá asociar productos a campañas promocionales.

Ejemplos:

- Cupón de bienvenida.
- Descuento por temporada.
- Promoción navideña.
- Black Friday.

---

# 482. Compatibilidad Futura

Este módulo deberá ser compatible con:

- Carrito de compras.
- Wishlist.
- Comparador.
- Historial de pedidos.
- Inventario.
- Facturación.
- Pasarelas de pago.

---

# 483. Requerimientos Funcionales

RF-PROD-ADV-001

Permitir configurar variantes.

---

RF-PROD-ADV-002

Permitir crear campos personalizados.

---

RF-PROD-ADV-003

Configurar opciones adicionales.

---

RF-PROD-ADV-004

Preparar reglas de precios.

---

RF-PROD-ADV-005

Gestionar disponibilidad.

---

RF-PROD-ADV-006

Preparar integración con inventario.

---

RF-PROD-ADV-007

Asignar SKU y códigos internos.

---

RF-PROD-ADV-008

Configurar propiedades comerciales.

---

# 484. Requerimientos No Funcionales

RNF-PROD-ADV-001

Arquitectura desacoplada.

---

RNF-PROD-ADV-002

Escalable para miles de variantes.

---

RNF-PROD-ADV-003

Compatible con futuras funciones de e-commerce.

---

RNF-PROD-ADV-004

Sin afectar el rendimiento del formulario principal.

---

RNF-PROD-ADV-005

Preparado para integración con APIs externas.

---

# 485. Criterios de Aceptación

El módulo será considerado correctamente diseñado cuando:

- Permita ampliar un producto sin modificar su estructura base.
- Sea compatible con variantes y personalizaciones.
- Contemple reglas comerciales futuras.
- Facilite la integración con un sistema de comercio electrónico.
- Mantenga una arquitectura limpia, escalable y desacoplada.
- Evite la necesidad de rediseñar la base de datos al incorporar nuevas funcionalidades.

---

## Fin de la Parte 7.3.5

# Parte 7.3.6
# Arquitectura de Base de Datos del Catálogo

---

# 486. Introducción

## 486.1 Objetivo

El modelo de datos del catálogo será la base sobre la cual se construirá todo el sistema de productos de Poppy Crafty.

La arquitectura deberá diseñarse siguiendo principios de normalización, escalabilidad y mantenibilidad, permitiendo incorporar nuevas funcionalidades sin necesidad de rediseñar la estructura existente.

La base de datos deberá ser compatible con PostgreSQL y utilizar las capacidades ofrecidas por Supabase.

---

# 487. Principios de Diseño

La arquitectura seguirá los siguientes principios:

- Normalización hasta Tercera Forma Normal (3FN) cuando sea conveniente.
- Desacoplamiento entre entidades.
- Evitar duplicación de información.
- Uso de claves primarias UUID.
- Uso consistente de claves foráneas.
- Integridad referencial.
- Soft Delete.
- Auditoría completa.
- Escalabilidad horizontal.

---

# 488. Convenciones de Nomenclatura

Todas las tablas utilizarán nombres en inglés y en formato snake_case.

Ejemplos:

products

product_images

product_categories

product_tags

product_tag_relations

blog_posts

blog_categories

contact_requests

Todos los campos seguirán el mismo estándar.

Ejemplo:

created_at

updated_at

deleted_at

created_by

updated_by

is_featured

---

# 489. Identificadores

Todas las entidades principales utilizarán UUID como clave primaria.

Ejemplo:

id UUID PRIMARY KEY

Ventajas:

- Mayor seguridad.
- Mejor integración con Supabase.
- Evita conflictos entre entornos.
- Facilita sincronización futura.

---

# 490. Auditoría

Todas las tablas principales deberán incluir:

id

created_at

updated_at

deleted_at

created_by

updated_by

deleted_by

Estos campos permitirán conocer el historial administrativo de cada registro.

---

# 491. Soft Delete

Los registros nunca serán eliminados físicamente desde el panel administrativo.

Cuando un elemento sea eliminado:

- Se completará deleted_at.
- Se registrará deleted_by.
- El registro dejará de mostrarse públicamente.

La eliminación permanente solo podrá realizarse mediante procesos administrativos especiales.

---

# 492. Tabla Products

Representará cada producto del catálogo.

Información principal:

- Nombre.
- Slug.
- Descripción.
- Estado.
- Precio base.
- Tiempo de elaboración.
- Producto destacado.
- Configuración SEO.
- Estado comercial.

Esta tabla será el núcleo del catálogo.

---

# 493. Campos de Products

id

UUID

PRIMARY KEY

---

name

VARCHAR(200)

NOT NULL

---

slug

VARCHAR(220)

UNIQUE

NOT NULL

---

short_description

TEXT

NULL

---

description

TEXT

NULL

---

base_price

NUMERIC(10,2)

NULL

---

production_time

VARCHAR(100)

NULL

---

is_featured

BOOLEAN

DEFAULT FALSE

---

status

ENUM

draft

published

hidden

archived

---

created_at

TIMESTAMP

---

updated_at

TIMESTAMP

---

deleted_at

TIMESTAMP

NULL

---

# 494. Índices de Products

Se crearán índices para:

slug

status

is_featured

created_at

updated_at

category_id (futuro)

Los índices deberán optimizar las consultas más frecuentes del catálogo.

---

# 495. Tabla Product Categories

Contendrá las categorías principales.

Ejemplos:

Camisas

Tazas

Coronas

Bandas

Stickers

Papelería

Decoraciones

Cada categoría podrá contener múltiples productos.

---

# 496. Campos de Product Categories

id

UUID

---

name

VARCHAR(120)

---

slug

VARCHAR(140)

UNIQUE

---

description

TEXT

---

display_order

INTEGER

---

is_active

BOOLEAN

---

created_at

updated_at

deleted_at

---

# 497. Relación Producto - Categoría

Relación:

Una categoría

↓

Muchos productos

Tipo:

1:N

Cada producto pertenecerá inicialmente a una categoría principal.

La arquitectura permitirá múltiples categorías en versiones futuras mediante una tabla intermedia.

---

# 498. Tabla Product Images

Almacenará la información descriptiva de cada imagen.

El archivo físico permanecerá en Supabase Storage.

La base de datos almacenará únicamente:

- Ruta.
- Nombre.
- Tamaño.
- Tipo.
- Texto alternativo.
- Orden.

---

# 499. Campos de Product Images

id

UUID

---

product_id

UUID

FK

---

storage_path

TEXT

---

filename

TEXT

---

alt_text

TEXT

---

caption

TEXT

---

display_order

INTEGER

---

is_primary

BOOLEAN

---

created_at

updated_at

---

# 500. Relación Producto - Imagen

Relación:

Producto

↓

Muchas imágenes

Tipo:

1:N

Solo una imagen podrá tener:

is_primary = TRUE

---

# 501. Tabla Product Tags

Permitirá clasificar productos mediante etiquetas.

Ejemplos:

Personalizado

Nuevo

Popular

Foami

Sublimación

Infantil

Estas etiquetas facilitarán filtros y búsquedas.

---

# 502. Relación Producto - Etiquetas

Tipo:

Muchos a muchos (N:M)

Se utilizará una tabla intermedia:

product_tag_relations

---

# 503. Tabla Product Tag Relations

Campos:

id

product_id

tag_id

created_at

Esta estructura evitará duplicación de información.

---

# 504. Tabla Product SEO

Aunque inicialmente algunos campos podrán residir en Products, la arquitectura contempla separarlos en una tabla independiente.

Campos previstos:

meta_title

meta_description

canonical_url

og_image

robots_index

robots_follow

schema_enabled

seo_score

---

# 505. Relación Producto - SEO

Tipo:

Uno a uno (1:1)

Cada producto tendrá una única configuración SEO.

---

# 506. Tabla Product Related

Permitirá asociar productos relacionados.

Ejemplo:

Corona Princesa

↓

Flores decorativas

↓

Topper personalizado

↓

Banda de cumpleaños

La relación será autorreferenciada.

---

# 507. Integridad Referencial

Todas las claves foráneas deberán utilizar restricciones que impidan referencias inválidas.

Las eliminaciones seguirán políticas de:

RESTRICT

o

SET NULL

según corresponda.

No se utilizará CASCADE DELETE para evitar pérdidas accidentales de información.

---

# 508. Optimización

Las consultas del catálogo utilizarán:

- Índices.
- Paginación.
- Consultas selectivas.
- Relaciones optimizadas.
- Caché cuando sea posible.

La carga del catálogo no deberá depender de consultas innecesarias.

---

# 509. Preparación para Escalabilidad

La arquitectura deberá permitir incorporar posteriormente:

- Inventario.
- Variantes.
- Promociones.
- Cupones.
- Pedidos.
- Carrito.
- Pagos.
- Historial de compras.
- Wishlist.
- Valoraciones.

Sin modificar la estructura principal de Products.

---

# 510. Seguridad

Las tablas estarán protegidas mediante Row Level Security (RLS) de Supabase.

Se definirán políticas independientes para:

- Visitantes.
- Clientes autenticados.
- Administradores.
- Servicios internos.

Las políticas se documentarán en una sección específica del SRS.

---

# 511. Requerimientos Funcionales

RF-DB-001

Almacenar correctamente toda la información del catálogo.

---

RF-DB-002

Mantener relaciones consistentes entre entidades.

---

RF-DB-003

Permitir auditoría completa de cambios.

---

RF-DB-004

Implementar eliminación lógica.

---

RF-DB-005

Preparar la base de datos para futuras funcionalidades de comercio electrónico.

---

# 512. Requerimientos No Funcionales

RNF-DB-001

Compatibilidad completa con PostgreSQL.

---

RNF-DB-002

Compatibilidad con Supabase.

---

RNF-DB-003

Escalabilidad para decenas de miles de productos.

---

RNF-DB-004

Consultas optimizadas mediante índices.

---

RNF-DB-005

Integridad referencial garantizada.

---

# 513. Criterios de Aceptación

La arquitectura de base de datos será considerada correcta cuando:

- Mantenga una estructura normalizada y coherente.
- Permita ampliar el catálogo sin rediseños.
- Garantice integridad referencial.
- Soporte auditoría y eliminación lógica.
- Sea compatible con Supabase y PostgreSQL.
- Esté preparada para evolucionar hacia una plataforma completa de comercio electrónico.

---

## Fin de la Parte 7.3.6

# Parte 7.4
# Gestión de Categorías

---

# 514. Introducción

## 514.1 Objetivo

El módulo de Gestión de Categorías será el encargado de organizar el catálogo de productos de Poppy Crafty mediante una estructura jerárquica, flexible y escalable.

Su finalidad será facilitar la navegación del usuario, mejorar la organización interna del catálogo, optimizar el posicionamiento SEO y preparar la arquitectura para futuras funcionalidades como filtros avanzados, mega menús y comercio electrónico.

Las categorías constituirán uno de los pilares fundamentales del sitio, ya que permitirán agrupar productos relacionados y construir una experiencia de navegación clara para el visitante.

---

# 515. Objetivos del Módulo

El sistema deberá permitir:

- Crear categorías.
- Editar categorías.
- Eliminar lógicamente categorías.
- Activar o desactivar categorías.
- Crear categorías padre.
- Crear subcategorías.
- Reordenar categorías.
- Configurar SEO.
- Asignar imágenes.
- Asignar banners.
- Configurar iconos.
- Administrar colores personalizados.
- Definir categorías destacadas.

Toda la estructura deberá ser reutilizable por el catálogo, el blog y futuras secciones del sitio.

---

# 516. Funciones Principales

El módulo deberá incluir las siguientes vistas:

- Dashboard de categorías.
- Listado de categorías.
- Crear categoría.
- Editar categoría.
- Vista previa.
- Papelera lógica.
- Configuración SEO.

Cada una compartirá componentes reutilizables con el resto del panel administrativo.

---

# 517. Dashboard del Módulo

Al ingresar se mostrará un resumen con indicadores principales.

Información presentada:

- Total de categorías.
- Categorías activas.
- Categorías ocultas.
- Categorías destacadas.
- Categorías sin productos.
- Categorías sin imagen.
- Categorías sin SEO.

Este resumen permitirá detectar rápidamente problemas de organización.

---

# 518. Listado de Categorías

Las categorías se mostrarán en una tabla jerárquica.

Cada registro incluirá:

- Imagen.
- Nombre.
- Slug.
- Categoría padre.
- Cantidad de productos.
- Estado.
- Orden.
- Destacada.
- Fecha de actualización.
- Acciones.

Las subcategorías deberán visualizarse mediante indentación para representar la jerarquía.

---

# 519. Búsqueda

El administrador podrá localizar categorías mediante:

- Nombre.
- Slug.
- Descripción.
- Estado.

La búsqueda será instantánea y no distinguirá mayúsculas, minúsculas ni acentos.

---

# 520. Filtros

El sistema permitirá filtrar por:

- Estado.
- Categoría padre.
- Destacadas.
- Con productos.
- Sin productos.
- Fecha de creación.
- Fecha de modificación.

Los filtros podrán combinarse entre sí.

---

# 521. Ordenamiento

Las categorías podrán ordenarse por:

- Nombre.
- Fecha de creación.
- Fecha de modificación.
- Orden manual.
- Cantidad de productos.

El orden seleccionado se conservará durante la sesión del administrador.

---

# 522. Acciones Masivas

Será posible ejecutar operaciones sobre múltiples categorías.

Acciones disponibles:

- Activar.
- Desactivar.
- Destacar.
- Quitar destacadas.
- Eliminar lógicamente.
- Exportar.

Antes de aplicar una acción se mostrará un resumen indicando cuántos registros serán afectados.

---

# 523. Formulario de Categoría

El formulario estará dividido en las siguientes pestañas:

1. Información General.
2. Multimedia.
3. Organización.
4. SEO.
5. Configuración Avanzada.

Esta estructura permitirá mantener un formulario limpio y escalable.

---

# 524. Información General

Campos disponibles:

- Nombre.
- Slug.
- Descripción corta.
- Descripción completa.
- Categoría padre.
- Estado.
- Orden de visualización.

El slug podrá generarse automáticamente a partir del nombre.

---

# 525. Jerarquía de Categorías

Cada categoría podrá pertenecer a otra categoría.

Ejemplo:

Productos

↓

Camisas

↓

Camisas Deportivas

↓

Camisas Infantiles

No existirá un límite estricto de niveles, aunque para mantener una buena experiencia de usuario se recomienda un máximo de tres niveles visibles.

El sistema deberá impedir relaciones circulares entre categorías.

---

# 526. Imagen de Categoría

Cada categoría podrá tener una imagen representativa.

Esta imagen podrá utilizarse en:

- Página de categorías.
- Tarjetas del catálogo.
- Resultados destacados.
- Página principal.

Solo podrá existir una imagen principal por categoría.

---

# 527. Banner

Opcionalmente se podrá asignar un banner para la cabecera de la página de la categoría.

El banner deberá almacenarse de forma independiente a la imagen principal.

---

# 528. Icono

Cada categoría podrá disponer de un icono identificativo.

Inicialmente se utilizarán iconos SVG compatibles con el sistema de diseño.

En versiones futuras podrá integrarse una biblioteca completa de iconografía.

---

# 529. Color Personalizado

El administrador podrá asignar un color representativo.

Este color podrá utilizarse para:

- Etiquetas.
- Tarjetas.
- Filtros.
- Elementos destacados.

El uso del color será opcional y deberá respetar criterios de accesibilidad.

---

# 530. Categorías Destacadas

Una categoría podrá marcarse como destacada.

Las categorías destacadas podrán mostrarse automáticamente en:

- Página de inicio.
- Menú principal.
- Bloques promocionales.

La cantidad máxima de categorías destacadas será configurable.

---

# 531. SEO por Categoría

Cada categoría dispondrá de configuración SEO independiente.

Campos disponibles:

- Meta Title.
- Meta Description.
- URL Canónica.
- Imagen Open Graph.
- Robots.
- Datos estructurados.

La implementación seguirá los mismos principios definidos para los productos.

---

# 532. URL Amigable

Cada categoría utilizará un slug único.

Ejemplo:

/productos/camisas-personalizadas

/productos/tazas-sublimadas

El sistema verificará automáticamente la unicidad del slug.

---

# 533. Integración con el Catálogo

Al crear un producto, el sistema permitirá seleccionar una categoría existente.

Si una categoría es eliminada lógicamente, los productos asociados conservarán la referencia hasta que el administrador decida reasignarlos.

El sistema advertirá cuando una categoría contenga productos antes de permitir su eliminación.

---

# 534. Integración con Navegación

Las categorías serán utilizadas para construir:

- Menú principal.
- Mega menú (futuro).
- Breadcrumbs.
- Filtros del catálogo.
- Productos relacionados.
- Buscador.

La información deberá mantenerse sincronizada automáticamente.

---

# 535. Rendimiento

Las consultas de categorías deberán estar optimizadas mediante índices.

Las estructuras jerárquicas deberán resolverse utilizando consultas eficientes para evitar recorridos innecesarios.

El listado deberá soportar cientos de categorías sin degradar el rendimiento.

---

# 536. Accesibilidad

Todas las operaciones deberán ser accesibles mediante teclado.

Las estructuras jerárquicas deberán ser interpretables por lectores de pantalla.

Los indicadores visuales deberán mantener suficiente contraste.

---

# 537. Requerimientos Funcionales

RF-CAT-001

Crear categorías.

---

RF-CAT-002

Editar categorías.

---

RF-CAT-003

Administrar jerarquías.

---

RF-CAT-004

Configurar SEO.

---

RF-CAT-005

Asignar imágenes y banners.

---

RF-CAT-006

Reordenar categorías.

---

RF-CAT-007

Gestionar categorías destacadas.

---

RF-CAT-008

Integrar categorías con el catálogo.

---

# 538. Requerimientos No Funcionales

RNF-CAT-001

Arquitectura escalable.

---

RNF-CAT-002

Compatibilidad con PostgreSQL y Supabase.

---

RNF-CAT-003

Carga optimizada.

---

RNF-CAT-004

Compatible con dispositivos móviles.

---

RNF-CAT-005

Preparado para mega menús y filtros avanzados.

---

# 539. Criterios de Aceptación

El módulo será considerado finalizado cuando:

- Permita administrar categorías de forma jerárquica.
- Mantenga relaciones consistentes con los productos.
- Soporte configuración SEO independiente.
- Permita organizar visualmente el catálogo.
- Sea escalable para futuras funcionalidades.
- Mantenga un rendimiento adecuado incluso con grandes volúmenes de información.

---

## Fin de la Parte 7.4

# Parte 7.5
# Gestión del Blog (CMS Editorial)

---

# 540. Introducción

## 540.1 Objetivo

El módulo de Gestión del Blog permitirá administrar todo el contenido educativo e informativo publicado en el sitio web de Poppy Crafty.

El blog será uno de los principales pilares de posicionamiento orgánico (SEO), captación de clientes y fortalecimiento de la marca.

A diferencia de un simple sistema de publicaciones, este módulo deberá funcionar como un CMS editorial completo, preparado para múltiples autores, flujos de revisión, optimización SEO y crecimiento futuro.

---

# 541. Objetivos del Módulo

El sistema deberá permitir:

- Crear artículos.
- Editar artículos.
- Guardar borradores.
- Publicar contenido.
- Programar publicaciones.
- Organizar artículos.
- Administrar categorías.
- Administrar etiquetas.
- Gestionar imágenes.
- Optimizar SEO.
- Controlar estados editoriales.
- Mantener historial de revisiones.

---

# 542. Alcance

El módulo administrará todo el contenido editorial del sitio.

Entre los artículos iniciales se encuentran:

- Materiales para Cricut.
- Tipos de tapetes.
- Mantenimiento de Cricut.
- Errores comunes.
- Coronas de fomi.
- Personalización.
- Consejos para emprendedores.
- Manualidades.

La arquitectura permitirá agregar cientos o miles de publicaciones sin afectar el rendimiento.

---

# 543. Dashboard Editorial

El panel principal mostrará indicadores generales.

Información disponible:

- Total de artículos.
- Publicados.
- Borradores.
- Programados.
- Archivados.
- Categorías.
- Etiquetas.
- Artículos más vistos (futuro).
- Artículos recientes.

También se mostrarán accesos rápidos para crear un nuevo artículo y continuar editando los borradores recientes.

---

# 544. Listado de Artículos

Los artículos se presentarán en una tabla administrativa.

Cada fila incluirá:

- Imagen destacada.
- Título.
- Autor.
- Categoría.
- Estado.
- Fecha de publicación.
- Fecha de modificación.
- Tiempo estimado de lectura.
- Acciones rápidas.

El listado deberá soportar paginación y búsqueda instantánea.

---

# 545. Búsqueda

La búsqueda permitirá localizar artículos utilizando:

- Título.
- Slug.
- Categoría.
- Etiquetas.
- Autor.
- Fragmentos del contenido.

La búsqueda será insensible a mayúsculas, minúsculas y acentos.

---

# 546. Filtros

Será posible filtrar por:

- Estado.
- Autor.
- Categoría.
- Etiqueta.
- Fecha de creación.
- Fecha de publicación.
- Última modificación.

Los filtros podrán combinarse libremente.

---

# 547. Ordenamiento

Los artículos podrán ordenarse por:

- Fecha de publicación.
- Fecha de actualización.
- Orden alfabético.
- Tiempo de lectura.
- Estado.

El sistema conservará la última preferencia del administrador durante la sesión.

---

# 548. Estados Editoriales

Cada artículo podrá encontrarse en uno de los siguientes estados:

- Borrador.
- En revisión.
- Programado.
- Publicado.
- Archivado.

Estos estados permitirán implementar flujos editoriales más complejos en futuras versiones.

---

# 549. Acciones Masivas

El administrador podrá seleccionar múltiples artículos y ejecutar acciones conjuntas.

Operaciones disponibles:

- Publicar.
- Archivar.
- Eliminar lógicamente.
- Cambiar categoría.
- Cambiar autor.
- Exportar.

Antes de ejecutar la acción se mostrará una confirmación indicando el número de registros afectados.

---

# 550. Crear Artículo

La creación de un nuevo artículo abrirá un formulario dividido por secciones para facilitar la edición.

Apartados principales:

- Información General.
- Contenido.
- Multimedia.
- SEO.
- Configuración.
- Publicación.

Esta estructura permitirá mantener una experiencia clara incluso en artículos extensos.

---

# 551. Información General

Campos principales:

- Título.
- Slug.
- Resumen.
- Categoría.
- Etiquetas.
- Autor.
- Estado.

El slug podrá generarse automáticamente a partir del título y deberá ser único.

---

# 552. Contenido del Artículo

El contenido será el elemento principal del CMS.

El editor deberá permitir redactar artículos extensos con una estructura organizada y preparada para posicionamiento SEO.

El contenido se almacenará utilizando MDX, permitiendo combinar texto, componentes interactivos e imágenes dentro del mismo documento.

---

# 553. Editor de Contenido

El editor deberá ofrecer una experiencia similar a plataformas modernas de gestión de contenido.

Funciones previstas:

- Encabezados.
- Párrafos.
- Listas.
- Tablas.
- Imágenes.
- Bloques de código.
- Citas.
- Separadores.
- Enlaces internos.
- Enlaces externos.
- Componentes reutilizables.

La arquitectura deberá facilitar la incorporación futura de un editor visual tipo Block Editor.

---

# 554. Guardado Automático

Mientras el administrador escribe, el sistema realizará guardados automáticos periódicos.

Objetivos:

- Evitar pérdida de información.
- Recuperar cambios tras cierres inesperados.
- Reducir el riesgo de errores humanos.

El intervalo de guardado será configurable.

---

# 555. Vista Previa

Antes de publicar, el administrador podrá visualizar el artículo exactamente como aparecerá en el sitio público.

La vista previa utilizará el mismo sistema de renderizado que el frontend para garantizar consistencia.

---

# 556. Requerimientos Funcionales

RF-BLOG-001

Crear artículos.

---

RF-BLOG-002

Editar artículos.

---

RF-BLOG-003

Guardar borradores.

---

RF-BLOG-004

Publicar contenido.

---

RF-BLOG-005

Programar publicaciones.

---

RF-BLOG-006

Administrar categorías y etiquetas.

---

RF-BLOG-007

Visualizar vista previa.

---

RF-BLOG-008

Guardar automáticamente el contenido.

---

# 557. Requerimientos No Funcionales

RNF-BLOG-001

Compatibilidad con MDX.

---

RNF-BLOG-002

Escalable para miles de artículos.

---

RNF-BLOG-003

Editor optimizado para contenidos extensos.

---

RNF-BLOG-004

Carga rápida incluso con artículos de gran tamaño.

---

RNF-BLOG-005

Compatible con futuras funciones colaborativas.

---

# 558. Criterios de Aceptación

El módulo será considerado correctamente implementado cuando:

- Permita administrar completamente el contenido del blog.
- Soporte múltiples estados editoriales.
- Mantenga un flujo de publicación organizado.
- Ofrezca una experiencia de edición moderna.
- Sea compatible con optimización SEO y crecimiento futuro.
- Permita publicar artículos sin afectar el rendimiento general del sistema.

---

## Fin de la Parte 7.5.1

# Parte 7.5.2
# Editor Profesional MDX

---

# 559. Introducción

## 559.1 Objetivo

El Editor Profesional MDX será el componente principal para la creación y mantenimiento de contenido dentro del blog de Poppy Crafty.

Su propósito será ofrecer una experiencia moderna, intuitiva y altamente productiva para redactar artículos de calidad profesional, manteniendo compatibilidad con Markdown, componentes React (MDX), SEO y futuras funciones colaborativas.

El editor deberá permitir escribir contenido complejo sin limitar la creatividad del administrador.

---

# 560. Objetivos

El editor deberá permitir:

- Redacción profesional.
- Organización clara del contenido.
- Inserción de componentes enriquecidos.
- Vista previa en tiempo real.
- Optimización SEO.
- Guardado automático.
- Historial de cambios.
- Compatibilidad con dispositivos móviles.
- Integración con el gestor multimedia.
- Escalabilidad para futuras funciones colaborativas.

---

# 561. Arquitectura General

El editor estará basado en MDX.

Esto permitirá combinar:

- Markdown.
- Componentes React.
- Imágenes.
- Videos.
- Bloques personalizados.
- Componentes reutilizables.

El contenido será almacenado como texto enriquecido compatible con Git, control de versiones y procesamiento estático mediante Next.js.

---

# 562. Distribución de la Interfaz

La pantalla de edición estará dividida en áreas claramente diferenciadas.

Componentes principales:

- Barra superior.
- Barra de herramientas.
- Panel lateral de configuración.
- Área principal de edición.
- Vista previa.
- Barra inferior de estado.

Cada sección deberá mantenerse desacoplada para facilitar futuras ampliaciones.

---

# 563. Barra Superior

La barra superior mostrará acciones globales.

Acciones disponibles:

- Guardar.
- Guardar borrador.
- Publicar.
- Programar.
- Vista previa.
- Historial.
- Configuración.
- Salir.

El estado del documento deberá mostrarse permanentemente.

Ejemplos:

Guardado.

Guardando...

Cambios sin guardar.

---

# 564. Barra de Herramientas

Dispondrá de herramientas para insertar elementos comunes.

Botones disponibles:

- Encabezado H1.
- H2.
- H3.
- H4.
- Párrafo.
- Lista.
- Lista numerada.
- Checklist.
- Cita.
- Código.
- Tabla.
- Línea divisoria.
- Imagen.
- Video.
- Enlace.
- Botón CTA.
- Bloque informativo.
- Advertencia.
- Consejo.
- Galería.

La barra será completamente configurable.

---

# 565. Área de Edición

Será el espacio principal donde el administrador redactará el contenido.

Características:

- Escritura fluida.
- Soporte Markdown.
- Componentes MDX.
- Resaltado de sintaxis.
- Scroll sincronizado.
- Soporte Unicode.

El editor deberá responder inmediatamente a las acciones del usuario.

---

# 566. Vista Previa

El administrador podrá activar una vista previa en tiempo real.

Modos disponibles:

- Solo editor.
- Solo vista previa.
- Editor + Vista previa.

La representación deberá utilizar exactamente los mismos componentes del sitio público.

---

# 567. Panel Lateral

El panel derecho mostrará información contextual.

Entre ella:

- Estado.
- Autor.
- Categoría.
- Etiquetas.
- Imagen destacada.
- SEO.
- Fecha.
- Tiempo estimado.
- Palabras.
- Caracteres.

El panel podrá contraerse para aumentar el área de edición.

---

# 568. Barra Inferior

Mostrará información útil durante la escritura.

Ejemplo:

Palabras:

1456

Caracteres:

9278

Tiempo estimado:

9 minutos

Último guardado:

Hace 10 segundos

Idioma:

Español

---

# 569. Guardado Automático

El sistema realizará guardados automáticos.

Eventos:

- Cada cierto intervalo.
- Al perder el foco.
- Antes de abandonar la página.
- Tras cambios importantes.

El usuario siempre será informado del estado del guardado.

---

# 570. Recuperación Automática

Si ocurre un cierre inesperado del navegador, el sistema permitirá recuperar la última versión guardada automáticamente.

La recuperación deberá ofrecer:

- Fecha.
- Hora.
- Diferencias respecto a la versión actual.

---

# 571. Historial Local

Mientras se edita un artículo se conservará un historial temporal.

Permitirá:

- Deshacer.
- Rehacer.
- Recuperar cambios recientes.

Este historial será independiente del historial oficial de revisiones.

---

# 572. Atajos de Teclado

El editor deberá soportar combinaciones de teclado.

Ejemplos:

Ctrl + S

Guardar.

Ctrl + B

Negrita.

Ctrl + I

Cursiva.

Ctrl + K

Insertar enlace.

Ctrl + Shift + P

Vista previa.

Ctrl + Z

Deshacer.

Ctrl + Y

Rehacer.

---

# 573. Inserción de Imágenes

Las imágenes podrán agregarse mediante:

- Arrastrar archivos.
- Copiar y pegar.
- Selección desde biblioteca.
- URL.

Las imágenes serán enviadas automáticamente al gestor multimedia.

---

# 574. Componentes MDX

El editor permitirá insertar componentes personalizados.

Ejemplos:

Callout.

Accordion.

Tabs.

Cards.

Galerías.

Botones.

Comparadores.

Videos.

Productos relacionados.

Estos componentes podrán reutilizarse en cualquier artículo.

---

# 575. Bloques Reutilizables

El administrador podrá guardar bloques completos.

Ejemplos:

Aviso legal.

Promoción.

CTA.

Formulario.

Tabla comparativa.

Estos bloques podrán actualizarse centralizadamente en futuras versiones.

---

# 576. Tablas

El editor permitirá crear tablas responsivas.

Características:

- Agregar columnas.
- Agregar filas.
- Alinear contenido.
- Encabezados.
- Scroll horizontal en móviles.

---

# 577. Código

El editor soportará bloques de código.

Funciones:

- Resaltado de sintaxis.
- Copiar código.
- Numeración de líneas.
- Selección de lenguaje.

---

# 578. Embeds

Será posible insertar contenido externo.

Ejemplos:

YouTube.

Instagram.

TikTok.

Facebook.

Google Maps.

Spotify.

La arquitectura quedará preparada para nuevos proveedores.

---

# 579. Tabla de Contenidos

El editor detectará automáticamente:

H2

H3

H4

Generando una tabla de contenidos para el artículo.

Esta funcionalidad mejorará la navegación y el SEO.

---

# 580. Tiempo de Lectura

El sistema calculará automáticamente:

- Palabras.
- Tiempo estimado de lectura.

El cálculo se actualizará en tiempo real.

---

# 581. Validaciones

El editor verificará automáticamente:

- Encabezados vacíos.
- Imágenes sin texto alternativo.
- Enlaces rotos (futuro).
- Componentes inválidos.
- Errores MDX.

Las advertencias no impedirán guardar el artículo.

---

# 582. Accesibilidad

Todo el editor deberá ser completamente navegable mediante teclado.

Compatibilidad:

- Lectores de pantalla.
- Alto contraste.
- Zoom.
- Navegación sin mouse.

---

# 583. Rendimiento

El editor deberá soportar artículos muy extensos.

Objetivos:

- Más de 30 000 palabras.
- Decenas de imágenes.
- Múltiples componentes.
- Sin pérdida perceptible de rendimiento.

---

# 584. Preparación para Colaboración

La arquitectura deberá contemplar futuras funciones como:

- Edición simultánea.
- Comentarios internos.
- Revisiones.
- Control de cambios.
- Resolución de conflictos.
- Presencia de usuarios.

Estas funciones no estarán disponibles en la primera versión.

---

# 585. Requerimientos Funcionales

RF-EDITOR-001

Crear contenido MDX.

---

RF-EDITOR-002

Guardar automáticamente.

---

RF-EDITOR-003

Vista previa en tiempo real.

---

RF-EDITOR-004

Insertar componentes.

---

RF-EDITOR-005

Gestionar imágenes.

---

RF-EDITOR-006

Mostrar estadísticas del documento.

---

RF-EDITOR-007

Calcular tiempo de lectura.

---

RF-EDITOR-008

Mantener historial local.

---

# 586. Requerimientos No Funcionales

RNF-EDITOR-001

Compatibilidad con MDX.

---

RNF-EDITOR-002

Renderizado rápido.

---

RNF-EDITOR-003

Escalable para nuevos componentes.

---

RNF-EDITOR-004

Compatible con dispositivos móviles.

---

RNF-EDITOR-005

Preparado para colaboración en tiempo real.

---

# 587. Criterios de Aceptación

El Editor Profesional MDX será considerado completo cuando:

- Permita crear artículos complejos con una experiencia fluida.
- Soporte componentes enriquecidos reutilizables.
- Mantenga guardado automático y recuperación de cambios.
- Sea compatible con el gestor multimedia.
- Permita una vista previa fiel al sitio público.
- Se encuentre preparado para futuras funciones colaborativas.
- Mantenga un rendimiento óptimo incluso con documentos extensos.

---

## Fin de la Parte 7.5.2

# Parte 7.5.3
# Sistema de Versionado y Flujo Editorial

---

# 588. Introducción

## 588.1 Objetivo

El Sistema de Versionado y Flujo Editorial permitirá controlar todo el ciclo de vida de un artículo, desde su creación hasta su publicación y archivado.

El módulo garantizará la trazabilidad de cada modificación realizada sobre el contenido, permitiendo recuperar versiones anteriores, gestionar revisiones y preparar el sistema para futuros escenarios de trabajo colaborativo.

---

# 589. Objetivos

El sistema deberá permitir:

- Mantener historial completo de versiones.
- Restaurar versiones anteriores.
- Comparar revisiones.
- Administrar estados editoriales.
- Registrar auditoría.
- Programar publicaciones.
- Gestionar múltiples autores.
- Evitar conflictos de edición.
- Preparar colaboración en tiempo real.

---

# 590. Filosofía del Sistema

Ningún cambio importante realizado sobre un artículo deberá perderse.

Toda modificación relevante quedará registrada como una nueva versión, permitiendo consultar el historial completo del contenido.

Esto facilitará:

- Recuperación ante errores.
- Auditoría.
- Trabajo en equipo.
- Seguimiento editorial.
- Control de calidad.

---

# 591. Flujo Editorial

Cada artículo recorrerá un flujo de publicación claramente definido.

Estados disponibles:

Borrador

↓

En revisión

↓

Aprobado

↓

Programado

↓

Publicado

↓

Archivado

Cada transición deberá quedar registrada en el historial del sistema.

---

# 592. Estado: Borrador

Corresponde al contenido que aún se encuentra en elaboración.

Características:

- Visible únicamente para administradores.
- Editable libremente.
- No indexable.
- No accesible públicamente.

Un artículo podrá permanecer indefinidamente en este estado.

---

# 593. Estado: En Revisión

Cuando el autor considere finalizado el contenido podrá enviarlo a revisión.

Durante esta etapa:

- El contenido podrá revisarse.
- Se podrán solicitar cambios.
- No será visible públicamente.

En futuras versiones este estado permitirá la participación de editores.

---

# 594. Estado: Aprobado

Un artículo aprobado estará listo para publicarse.

Desde este estado será posible:

- Publicar inmediatamente.
- Programar publicación.
- Volver a revisión.

---

# 595. Estado: Programado

Permitirá definir una fecha y hora de publicación.

Campos:

- Fecha.
- Hora.
- Zona horaria.

El sistema publicará automáticamente el artículo cuando llegue el momento indicado.

---

# 596. Estado: Publicado

Representa contenido visible para todos los visitantes.

Características:

- Indexable.
- Visible en buscadores.
- Incluido en sitemap.
- Compartible.

Las modificaciones posteriores generarán nuevas versiones.

---

# 597. Estado: Archivado

Los artículos archivados dejarán de aparecer públicamente.

Sin embargo:

- No serán eliminados.
- Mantendrán todo su historial.
- Podrán restaurarse posteriormente.

---

# 598. Historial de Versiones

Cada modificación importante generará automáticamente una nueva versión.

Cada versión almacenará:

- Número.
- Fecha.
- Autor.
- Comentario.
- Estado.
- Cambios realizados.

---

# 599. Numeración

Las versiones seguirán un esquema incremental.

Ejemplo:

v1

v2

v3

v4

v5

El sistema también podrá mostrar la versión actual mediante etiquetas visuales.

---

# 600. Información de cada Versión

Cada revisión registrará:

- Fecha.
- Hora.
- Usuario.
- Estado editorial.
- Resumen del cambio.
- Identificador interno.

Toda esta información permanecerá disponible para auditoría.

---

# 601. Comentarios de Versión

Al guardar una nueva versión el administrador podrá registrar un comentario.

Ejemplos:

"Actualización de fotografías."

"Corrección ortográfica."

"Optimización SEO."

"Nuevo apartado sobre Cricut."

Estos comentarios facilitarán el seguimiento del historial.

---

# 602. Comparación de Versiones

El sistema permitirá comparar dos versiones.

Se visualizarán diferencias como:

- Texto agregado.
- Texto eliminado.
- Imágenes nuevas.
- Componentes modificados.
- Cambios de metadatos.

La comparación será únicamente informativa.

---

# 603. Restauración

Cualquier versión anterior podrá restaurarse.

Al restaurar:

- No se eliminarán versiones posteriores.
- Se generará automáticamente una nueva versión basada en la restauración.

De esta forma nunca se perderá información.

---

# 604. Registro de Auditoría

Cada acción importante quedará registrada.

Ejemplos:

Crear artículo.

Editar.

Guardar.

Publicar.

Programar.

Archivar.

Eliminar.

Restaurar.

El registro incluirá:

- Usuario.
- Fecha.
- Hora.
- Dirección IP (futuro).
- Acción ejecutada.

---

# 605. Bloqueo de Edición

Para evitar conflictos, el sistema detectará cuando un artículo esté siendo editado.

Mientras un usuario mantenga abierto el editor, el resto visualizará un aviso indicando:

"Este artículo está siendo editado actualmente."

Inicialmente será un bloqueo informativo.

En futuras versiones podrá convertirse en un bloqueo exclusivo.

---

# 606. Programación Automática

Los artículos programados serán publicados mediante procesos automáticos.

El proceso deberá verificar:

- Estado.
- Fecha.
- Hora.
- Integridad del contenido.

En caso de error se registrará el incidente en el sistema.

---

# 607. Publicación Manual

El administrador podrá publicar inmediatamente cualquier artículo aprobado.

Antes de la publicación se realizarán validaciones básicas.

Ejemplos:

- Título.
- Contenido.
- Imagen destacada.
- SEO mínimo.

Las advertencias no impedirán publicar.

---

# 608. Despublicación

El sistema permitirá retirar un artículo publicado.

Opciones:

- Convertir en borrador.
- Archivar.

La URL podrá mantenerse para evitar enlaces rotos.

---

# 609. Múltiples Autores

La arquitectura permitirá asociar uno o varios autores a un mismo artículo.

Inicialmente solo existirá un autor principal.

En futuras versiones podrán añadirse:

- Coautores.
- Revisores.
- Editores.

---

# 610. Comentarios Internos

El sistema quedará preparado para incorporar comentarios editoriales.

Estos comentarios:

- No serán públicos.
- Se asociarán a una versión específica.
- Facilitarán la revisión colaborativa.

---

# 611. Solicitudes de Cambios

En futuras versiones un editor podrá solicitar modificaciones.

Ejemplo:

"Agregar más imágenes."

"Expandir la sección de mantenimiento."

"Reducir la introducción."

Estas solicitudes quedarán asociadas al historial editorial.

---

# 612. Notificaciones

La arquitectura contemplará futuras notificaciones.

Eventos:

- Nuevo borrador.
- Solicitud de revisión.
- Artículo aprobado.
- Publicación programada.
- Publicación realizada.

---

# 613. Integridad

El historial nunca deberá modificarse manualmente.

Las versiones serán inmutables.

Solo será posible:

- Consultar.
- Comparar.
- Restaurar.

---

# 614. Requerimientos Funcionales

RF-VERSION-001

Crear versiones automáticamente.

---

RF-VERSION-002

Consultar historial.

---

RF-VERSION-003

Comparar revisiones.

---

RF-VERSION-004

Restaurar versiones.

---

RF-VERSION-005

Administrar estados editoriales.

---

RF-VERSION-006

Programar publicaciones.

---

RF-VERSION-007

Registrar auditoría.

---

RF-VERSION-008

Detectar edición simultánea.

---

# 615. Requerimientos No Funcionales

RNF-VERSION-001

Historial permanente.

---

RNF-VERSION-002

Recuperación rápida.

---

RNF-VERSION-003

Escalable para miles de versiones.

---

RNF-VERSION-004

Preparado para colaboración.

---

RNF-VERSION-005

Sin pérdida de información.

---

# 616. Criterios de Aceptación

El módulo será considerado completo cuando:

- Mantenga un historial íntegro de revisiones.
- Permita restaurar cualquier versión anterior.
- Gestione correctamente los estados editoriales.
- Registre todas las acciones importantes.
- Permita programar publicaciones.
- Se encuentre preparado para trabajo colaborativo sin requerir cambios estructurales futuros.

---

## Fin de la Parte 7.5.3

# Parte 7.5.4

# Arquitectura de Contenido MDX y Componentes Reutilizables

---

# 617. Introducción

## 617.1 Objetivo

El sistema de contenido estará basado en **MDX (Markdown + JSX)**, permitiendo combinar texto estructurado con componentes React reutilizables.

Esta arquitectura permitirá que los artículos del blog mantengan una identidad visual consistente y que elementos complejos puedan reutilizarse sin duplicar código.

El objetivo es que un administrador pueda crear contenido de nivel profesional utilizando bloques predefinidos, sin necesidad de conocimientos de programación.

---

# 618. Filosofía del Sistema de Componentes

Todos los componentes deberán cumplir los siguientes principios:

* Reutilizables.
* Consistentes.
* Responsive.
* Accesibles.
* Optimizados para SEO.
* Compatibles con modo oscuro futuro.
* Independientes entre sí.

Cada componente deberá poder utilizarse en cualquier artículo sin configuraciones adicionales.

---

# 619. Categorías de Componentes

La biblioteca se organizará en los siguientes grupos:

## Componentes Informativos

* Info
* Tip
* Warning
* Error
* Success

## Componentes Visuales

* Gallery
* Carousel
* BeforeAfter
* ImageGrid

## Componentes Comerciales

* ProductCard
* ProductGrid
* CTA
* WhatsAppButton

## Componentes Educativos

* FAQ
* Accordion
* Tabs
* Timeline
* Checklist

## Componentes Técnicos

* CodeBlock
* Table
* Mermaid
* Math

## Componentes Exclusivos de Poppy Crafty

* MaterialRecomendado
* NivelDificultad
* TiempoEstimado
* HerramientasNecesarias

---

# 620. Componente: Info

Se utilizará para mostrar información adicional o aclaraciones.

Características:

* Fondo azul suave.
* Ícono informativo.
* Título opcional.
* Contenido libre.

Uso típico:

Definiciones, notas técnicas, explicaciones complementarias.

---

# 621. Componente: Tip

Destinado a consejos prácticos.

Características:

* Fondo verde suave.
* Ícono de bombilla.
* Diseño compacto.

Uso frecuente en tutoriales y guías paso a paso.

---

# 622. Componente: Warning

Mostrará advertencias importantes.

Características:

* Fondo amarillo.
* Ícono de advertencia.
* Alto contraste.

Ejemplos:

* Errores comunes.
* Riesgos al utilizar materiales.
* Recomendaciones de seguridad.

---

# 623. Componente: Error

Se utilizará para indicar acciones que no deben realizarse.

Características:

* Fondo rojo suave.
* Ícono de error.
* Enfatiza consecuencias negativas.

---

# 624. Componente: Success

Indicará resultados positivos o procesos completados correctamente.

Uso habitual:

* Confirmaciones.
* Buenas prácticas.
* Resultados esperados.

---

# 625. Componente: Gallery

Permitirá mostrar múltiples imágenes relacionadas.

Características:

* Grid responsive.
* Lightbox.
* Navegación entre imágenes.
* Textos alternativos individuales.

Uso principal:

Mostrar proyectos terminados y procesos de elaboración.

---

# 626. Componente: Carousel

Mostrará imágenes mediante un carrusel horizontal.

Características:

* Navegación por flechas.
* Indicadores inferiores.
* Soporte táctil en móviles.

---

# 627. Componente: BeforeAfter

Comparará dos imágenes mediante un deslizador interactivo.

Aplicaciones:

* Antes / Después de personalizar una prenda.
* Material original vs resultado final.
* Restauraciones o mejoras.

---

# 628. Componente: ImageGrid

Mostrará varias imágenes en formato mosaico.

Ideal para:

* Portafolios.
* Inspiración.
* Variaciones de un mismo producto.

---

# 629. Componente: ProductCard

Permitirá insertar un producto del catálogo dentro de un artículo.

Información mostrada:

* Imagen.
* Nombre.
* Precio desde.
* Botón de contacto.

El componente obtendrá la información automáticamente desde la base de datos.

---

# 630. Componente: ProductGrid

Mostrará una cuadrícula de productos relacionados.

Configuraciones posibles:

* Manual.
* Por categoría.
* Por etiquetas.
* Automática.

---

# 631. Componente: CTA

Bloque de llamada a la acción.

Elementos:

* Título.
* Descripción.
* Botón principal.
* Botón secundario (opcional).

Ejemplo:

"¿Quieres una corona personalizada como esta? Escríbenos por WhatsApp y cotiza tu diseño."

---

# 632. Componente: WhatsAppButton

Botón especializado para iniciar conversaciones.

Permitirá configurar un mensaje predefinido automáticamente.

---

# 633. Componente: FAQ

Mostrará preguntas frecuentes relacionadas con el artículo.

Características:

* Expandible.
* Compatible con Schema.org FAQ.
* Optimizado para rich snippets de Google.

---

# 634. Componente: Accordion

Permitirá organizar grandes cantidades de información sin hacer el artículo excesivamente largo.

Uso recomendado:

* Listados de materiales.
* Pasos detallados.
* Explicaciones técnicas.

---

# 635. Componente: Tabs

Permitirá mostrar contenido organizado por pestañas.

Ejemplo:

* Materiales.
* Herramientas.
* Tiempo estimado.

---

# 636. Componente: Timeline

Representará procesos cronológicos.

Ejemplo:

Pedido → Diseño → Producción → Entrega.

---

# 637. Componente: Checklist

Lista interactiva de verificación.

Ideal para tutoriales y preparación de materiales.

---

# 638. Componente: CodeBlock

Preparado para mostrar fragmentos de código cuando sea necesario.

Aunque el blog será principalmente de manualidades, esta función permitirá publicar contenido técnico sobre la página web o herramientas digitales.

---

# 639. Componente: Table

Tabla completamente responsive.

Características:

* Scroll horizontal en móviles.
* Encabezados destacados.
* Soporte para alineación.

---

# 640. Componente: Mermaid

Permitirá generar diagramas directamente desde texto.

Aplicaciones:

* Flujos de trabajo.
* Procesos de producción.
* Arquitectura del sitio.

---

# 641. Componente: Math

Preparado para futuras necesidades de fórmulas mediante KaTeX.

No será utilizado inicialmente, pero la arquitectura deberá soportarlo.

---

# 642. Componente Exclusivo: MaterialRecomendado

Mostrará materiales sugeridos por Poppy Crafty.

Elementos:

* Nombre.
* Imagen.
* Nivel de recomendación.
* Comentario.

---

# 643. Componente Exclusivo: NivelDificultad

Indicará la complejidad de un proyecto.

Niveles:

* Principiante.
* Intermedio.
* Avanzado.

Representación visual mediante indicadores.

---

# 644. Componente Exclusivo: TiempoEstimado

Mostrará el tiempo aproximado necesario para completar un proyecto.

Ejemplo:

⏱️ 45 minutos.

---

# 645. Componente Exclusivo: HerramientasNecesarias

Lista visual de herramientas requeridas.

Ejemplos:

* Cricut Explore 3.
* Tapete StandardGrip.
* Depilador.
* Espátula.
* Plancha térmica.

---

# 646. Integración con SEO

Todos los componentes deberán generar HTML semántico.

Requisitos:

* Encabezados correctos.
* Texto alternativo obligatorio.
* Marcado estructurado cuando aplique.
* Compatibilidad con rastreadores.

---

# 647. Integración con Analytics

La arquitectura permitirá registrar interacciones como:

* Clics en CTAs.
* Apertura de acordeones.
* Reproducción de videos.
* Clics en productos relacionados.

Estas métricas servirán para optimizar el contenido futuro.

---

# 648. Rendimiento

Los componentes deberán cargarse de forma optimizada.

Estrategias:

* Lazy Loading.
* Importación dinámica.
* Optimización de imágenes.
* División de código cuando sea necesario.

---

# 649. Accesibilidad

Todos los componentes deberán cumplir WCAG 2.1 AA.

Requisitos:

* Navegación por teclado.
* Etiquetas ARIA cuando corresponda.
* Contraste adecuado.
* Compatibilidad con lectores de pantalla.

---

# 650. Requerimientos Funcionales

RF-MDX-001

Insertar componentes reutilizables.

---

RF-MDX-002

Renderizar correctamente en el sitio público.

---

RF-MDX-003

Permitir configuración mediante propiedades.

---

RF-MDX-004

Integrarse con productos y multimedia.

---

RF-MDX-005

Mantener consistencia visual en todos los artículos.

---

# 651. Requerimientos No Funcionales

RNF-MDX-001

Componentes desacoplados.

---

RNF-MDX-002

Escalables para futuras ampliaciones.

---

RNF-MDX-003

Optimización de rendimiento.

---

RNF-MDX-004

Compatibilidad con Next.js y renderizado estático.

---

RNF-MDX-005

Preparados para internacionalización.

---

# 652. Criterios de Aceptación

La arquitectura MDX será considerada finalizada cuando:

* Exista una biblioteca organizada de componentes reutilizables.
* Todos los componentes sean compatibles con SEO y accesibilidad.
* El contenido pueda enriquecerse sin escribir código adicional.
* La arquitectura permita incorporar nuevos componentes sin modificar los existentes.
* El sistema mantenga un rendimiento adecuado incluso con artículos altamente interactivos.

---

## Fin de la Parte 7.5.4

# Parte 7.5.5
# SEO Avanzado para Artículos y Automatización de Contenido

---

# 617. Introducción

## 617.1 Objetivo

El módulo de SEO Avanzado proporcionará todas las herramientas necesarias para optimizar cada artículo publicado en el blog de Poppy Crafty.

El sistema deberá asistir al administrador durante la redacción, analizando el contenido en tiempo real y ofreciendo recomendaciones para mejorar su posicionamiento en buscadores como Google y Bing.

La arquitectura estará inspirada en herramientas profesionales como Yoast SEO, Rank Math y Ghost SEO, pero integrada directamente en el CMS.

---

# 618. Objetivos

El sistema deberá permitir:

- Configurar metadatos SEO.
- Analizar el contenido automáticamente.
- Calcular una puntuación SEO.
- Detectar errores comunes.
- Generar metadatos.
- Crear Open Graph.
- Generar Twitter Cards.
- Administrar URLs canónicas.
- Crear datos estructurados.
- Optimizar enlaces internos.
- Optimizar imágenes.
- Preparar el contenido para buscadores.

---

# 619. Panel SEO

Dentro del editor existirá una pestaña exclusiva denominada "SEO".

Esta sección reunirá todas las configuraciones relacionadas con el posicionamiento del artículo.

El panel estará dividido en:

- Información general.
- Metadatos.
- Redes sociales.
- Indexación.
- Datos estructurados.
- Análisis SEO.
- Vista previa.

---

# 620. Meta Title

Cada artículo dispondrá de un título SEO independiente.

Características:

- Longitud recomendada entre 50 y 60 caracteres.
- Contador en tiempo real.
- Advertencias visuales cuando sea demasiado corto o largo.
- Posibilidad de usar el título principal automáticamente.

---

# 621. Meta Description

Cada publicación dispondrá de una descripción SEO personalizada.

Características:

- Longitud recomendada entre 140 y 160 caracteres.
- Contador dinámico.
- Indicador de calidad.
- Posibilidad de generarla automáticamente a partir del resumen del artículo.

---

# 622. URL Canónica

El administrador podrá especificar una URL canónica.

Objetivos:

- Evitar contenido duplicado.
- Consolidar autoridad SEO.
- Facilitar la indexación correcta.

Si no se especifica una URL, el sistema utilizará automáticamente la URL del artículo.

---

# 623. Robots

Cada artículo permitirá configurar instrucciones para motores de búsqueda.

Opciones:

- Index / No Index.
- Follow / No Follow.
- No Archive.
- No Snippet.
- No Image Index.

Estas opciones estarán disponibles mediante controles simples.

---

# 624. Open Graph

El sistema generará automáticamente metadatos Open Graph.

Campos:

- OG Title.
- OG Description.
- OG Image.
- OG URL.
- OG Type.

El administrador podrá personalizar cada uno de ellos.

---

# 625. Twitter Cards

Cada artículo podrá configurar información específica para Twitter/X.

Campos disponibles:

- Card Type.
- Title.
- Description.
- Image.

Por defecto se reutilizarán los datos de Open Graph.

---

# 626. Imagen para Redes Sociales

Cada artículo podrá disponer de una imagen exclusiva para compartir en redes sociales.

Si no se especifica, se utilizará automáticamente la imagen destacada.

El sistema verificará:

- Resolución mínima.
- Relación de aspecto recomendada.
- Peso del archivo.

---

# 627. Vista Previa en Buscadores

El administrador visualizará una simulación del resultado en Google.

La vista previa incluirá:

- URL.
- Título.
- Descripción.

Los cambios se reflejarán en tiempo real.

---

# 628. Vista Previa para Redes Sociales

También se mostrará una simulación del contenido compartido en:

- Facebook.
- Instagram (referencial).
- WhatsApp.
- Twitter/X.
- LinkedIn.

Esto permitirá verificar que las imágenes y textos se visualicen correctamente.

---

# 629. Palabra Clave Principal

Cada artículo podrá definir una palabra clave objetivo.

Ejemplos:

"Cricut"

"Coronas de fomi"

"Tapetes Cricut"

"Personalización de camisetas"

El sistema utilizará esta palabra para realizar el análisis SEO.

---

# 630. Palabras Clave Secundarias

Será posible registrar múltiples palabras clave relacionadas.

Estas servirán para ampliar el alcance semántico del artículo.

---

# 631. Análisis SEO Automático

El sistema analizará continuamente:

- Longitud del contenido.
- Densidad de palabra clave.
- Uso de encabezados.
- Meta Description.
- Meta Title.
- URL.
- Imágenes.
- Enlaces internos.
- Enlaces externos.

Los resultados se actualizarán automáticamente mientras el usuario escribe.

---

# 632. Indicadores de Calidad

Cada recomendación mostrará un estado visual.

Estados:

- Correcto.
- Advertencia.
- Error.

Esto permitirá identificar rápidamente los aspectos que requieren atención.

---

# 633. Puntuación SEO

Cada artículo obtendrá una puntuación entre 0 y 100.

Factores considerados:

- Estructura.
- Longitud.
- Encabezados.
- Imágenes.
- Metadatos.
- Enlaces.
- Legibilidad.

La puntuación será orientativa y no impedirá publicar el contenido.

---

# 634. Optimización de Imágenes

El sistema verificará automáticamente:

- Existencia de texto alternativo.
- Nombre descriptivo del archivo.
- Peso.
- Dimensiones.
- Formato recomendado.

Las imágenes sin texto alternativo generarán una advertencia.

---

# 635. Enlaces Internos

El CMS detectará oportunidades para enlazar artículos relacionados.

Ejemplo:

Un artículo sobre "Tapetes Cricut" podrá sugerir enlaces hacia:

- Materiales para Cricut.
- Mantenimiento.
- Errores comunes.

Inicialmente estas sugerencias serán manuales.

---

# 636. Enlaces Externos

El sistema verificará que existan referencias externas cuando el contenido lo requiera.

También advertirá sobre enlaces rotos en futuras versiones.

---

# 637. Legibilidad

El sistema calculará indicadores de lectura.

Entre ellos:

- Longitud promedio de párrafos.
- Longitud de oraciones.
- Uso de subtítulos.
- Distribución del contenido.

El objetivo será facilitar una lectura cómoda para el usuario.

---

# 638. Datos Estructurados

Cada artículo incluirá automáticamente Schema.org.

Tipos soportados:

- Article.
- BlogPosting.
- BreadcrumbList.
- ImageObject.
- Organization.

La arquitectura permitirá incorporar nuevos esquemas posteriormente.

---

# 639. Sitemap

Los artículos publicados se incorporarán automáticamente al sitemap XML.

Los borradores, artículos archivados o con "No Index" no serán incluidos.

---

# 640. RSS

Cada publicación aparecerá automáticamente en el feed RSS del sitio.

Esto facilitará la distribución del contenido y la integración con servicios externos.

---

# 641. Automatización de Contenido

La arquitectura quedará preparada para futuras funciones como:

- Generación automática de resúmenes.
- Sugerencias de títulos.
- Recomendaciones SEO mediante IA.
- Sugerencias de enlaces internos.
- Propuestas de imágenes.
- Recomendaciones de categorías.

Estas funciones no estarán disponibles en la primera versión.

---

# 642. Requerimientos Funcionales

RF-SEO-001

Configurar metadatos SEO.

---

RF-SEO-002

Analizar contenido automáticamente.

---

RF-SEO-003

Calcular puntuación SEO.

---

RF-SEO-004

Generar Open Graph.

---

RF-SEO-005

Administrar Robots.

---

RF-SEO-006

Crear datos estructurados.

---

RF-SEO-007

Generar Sitemap automáticamente.

---

RF-SEO-008

Mostrar vista previa para buscadores y redes sociales.

---

# 643. Requerimientos No Funcionales

RNF-SEO-001

Compatibilidad con estándares actuales de SEO.

---

RNF-SEO-002

Análisis en tiempo real sin afectar el rendimiento del editor.

---

RNF-SEO-003

Arquitectura extensible para nuevas reglas SEO.

---

RNF-SEO-004

Integración completa con Next.js y generación estática.

---

RNF-SEO-005

Preparado para futuras herramientas basadas en inteligencia artificial.

---

# 644. Criterios de Aceptación

El módulo será considerado completo cuando:

- Permita configurar completamente el SEO de cada artículo.
- Analice el contenido automáticamente.
- Genere metadatos compatibles con buscadores y redes sociales.
- Muestre recomendaciones claras para mejorar el posicionamiento.
- Genere datos estructurados y sitemap de forma automática.
- Quede preparado para incorporar automatizaciones avanzadas en futuras versiones.

---

## Fin de la Parte 7.5.5

# Parte 7.5.6
# Biblioteca Multimedia (Digital Asset Management - DAM)

---

# 645. Introducción

## 645.1 Objetivo

La Biblioteca Multimedia será el sistema centralizado para administrar todos los recursos digitales utilizados por el sitio web de Poppy Crafty.

Su propósito será almacenar, organizar, optimizar, reutilizar y distribuir imágenes, documentos y otros archivos multimedia utilizados tanto por el catálogo de productos como por el blog y demás secciones del sitio.

El sistema deberá evitar la duplicación de archivos, facilitar su búsqueda y mantener una organización escalable a largo plazo.

---

# 646. Objetivos

La biblioteca deberá permitir:

- Subir archivos.
- Organizar recursos.
- Buscar imágenes.
- Clasificar mediante carpetas.
- Clasificar mediante etiquetas.
- Reutilizar archivos existentes.
- Optimizar imágenes.
- Administrar versiones.
- Eliminar archivos.
- Restaurar archivos.
- Integrarse con el editor MDX.
- Integrarse con el catálogo.
- Integrarse con futuras funcionalidades.

---

# 647. Tipos de Archivos Soportados

Inicialmente el sistema permitirá almacenar:

Imágenes

- JPG
- JPEG
- PNG
- WEBP
- AVIF
- SVG

Documentos

- PDF

Diseños

- SVG

En futuras versiones podrá ampliarse el soporte para videos y archivos ZIP.

---

# 648. Arquitectura

Los archivos físicos serán almacenados en Supabase Storage.

La base de datos únicamente conservará la información descriptiva de cada recurso.

Esta separación permitirá reemplazar el sistema de almacenamiento sin modificar la estructura del CMS.

---

# 649. Dashboard Multimedia

El módulo contará con una pantalla principal que mostrará un resumen general.

Indicadores:

- Total de archivos.
- Espacio utilizado.
- Imágenes.
- Documentos.
- Archivos recientes.
- Recursos sin utilizar.
- Recursos duplicados (futuro).

---

# 650. Vista Principal

Los recursos podrán visualizarse mediante:

- Cuadrícula.
- Lista.

Cada elemento mostrará:

- Miniatura.
- Nombre.
- Tipo.
- Peso.
- Fecha.
- Dimensiones.
- Acciones rápidas.

---

# 651. Carpetas Virtuales

La organización utilizará carpetas lógicas.

Ejemplos:

Productos

Blog

Banners

Logotipos

Redes Sociales

Documentos

Las carpetas no dependerán del almacenamiento físico.

---

# 652. Etiquetas

Cada archivo podrá disponer de múltiples etiquetas.

Ejemplos:

Cricut

Foami

Camisas

Topper

Taza

Cumpleaños

Infantil

Promoción

Estas etiquetas facilitarán la búsqueda avanzada.

---

# 653. Búsqueda Inteligente

La búsqueda permitirá localizar recursos utilizando:

- Nombre.
- Etiquetas.
- Tipo.
- Fecha.
- Tamaño.
- Dimensiones.
- Texto alternativo.

Las búsquedas serán instantáneas.

---

# 654. Filtros

Será posible filtrar archivos por:

- Tipo.
- Carpeta.
- Etiquetas.
- Fecha.
- Tamaño.
- Orientación.
- Estado.

Los filtros podrán combinarse.

---

# 655. Subida de Archivos

El sistema permitirá:

- Arrastrar archivos.
- Seleccionar desde el explorador.
- Copiar y pegar imágenes.
- Subidas múltiples.

Durante la carga se mostrará el progreso individual de cada archivo.

---

# 656. Validaciones

Antes de aceptar un archivo se verificará:

- Formato permitido.
- Tamaño máximo.
- Integridad.
- Nombre.
- Duplicados.

Los errores deberán mostrarse claramente al usuario.

---

# 657. Optimización Automática

Después de la carga el sistema ejecutará procesos automáticos.

Entre ellos:

- Compresión.
- Eliminación de metadatos innecesarios.
- Conversión opcional a WebP.
- Conversión opcional a AVIF.
- Generación de miniaturas.

Estos procesos deberán ejecutarse en segundo plano.

---

# 658. Miniaturas

Para cada imagen se generarán versiones reducidas.

Ejemplos:

Thumbnail

Small

Medium

Large

Original

Estas versiones permitirán optimizar el rendimiento del sitio.

---

# 659. Información del Archivo

Cada recurso almacenará:

- Nombre.
- Nombre original.
- Tamaño.
- Peso.
- Resolución.
- Tipo MIME.
- Fecha de subida.
- Usuario.
- Texto alternativo.
- Descripción.
- Etiquetas.
- Carpeta.

---

# 660. Texto Alternativo

Todas las imágenes podrán disponer de un texto alternativo.

El sistema advertirá cuando una imagen utilizada públicamente no tenga ALT definido.

Esto contribuirá a la accesibilidad y al SEO.

---

# 661. Editor Básico

La biblioteca podrá incorporar herramientas simples de edición.

Funciones previstas:

- Recortar.
- Rotar.
- Voltear.
- Cambiar proporción.
- Redimensionar.

Las modificaciones generarán nuevas versiones del recurso.

---

# 662. Versionado de Recursos

Cada modificación importante generará una nueva versión del archivo.

Será posible:

- Consultar historial.
- Restaurar versiones anteriores.
- Comparar información.

El archivo original nunca será sobrescrito permanentemente.

---

# 663. Reemplazo Inteligente

Un archivo podrá reemplazarse sin modificar sus referencias.

Ejemplo:

banner-home.jpg

↓

Nueva versión

Todos los artículos y productos continuarán utilizando el mismo recurso actualizado.

---

# 664. Recursos No Utilizados

El sistema identificará archivos que no estén asociados a ningún contenido.

Esto permitirá liberar espacio de almacenamiento de forma controlada.

---

# 665. Integración con Productos

Desde el formulario de productos será posible abrir directamente la biblioteca multimedia para seleccionar imágenes existentes.

No será necesario subir nuevamente un archivo ya disponible.

---

# 666. Integración con el Blog

El editor MDX utilizará la biblioteca como origen único para insertar imágenes.

Esto evitará duplicaciones y facilitará el mantenimiento.

---

# 667. Integración Futura

La arquitectura permitirá utilizar la biblioteca en:

- Banners.
- Landing Pages.
- Formularios.
- Newsletter.
- Tienda Online.
- Dashboard.
- Emails.
- Redes Sociales.

---

# 668. Seguridad

Solo los administradores podrán:

- Subir archivos.
- Modificar recursos.
- Eliminar recursos.
- Restaurar versiones.

Los visitantes únicamente accederán a los archivos públicos necesarios para visualizar el sitio.

---

# 669. Rendimiento

La carga de imágenes deberá utilizar:

- Lazy Loading.
- Caché.
- CDN (futuro).
- Formatos modernos.
- Miniaturas adaptativas.

El objetivo será minimizar el consumo de ancho de banda.

---

# 670. Requerimientos Funcionales

RF-MEDIA-001

Subir archivos.

---

RF-MEDIA-002

Buscar recursos.

---

RF-MEDIA-003

Clasificar mediante carpetas.

---

RF-MEDIA-004

Clasificar mediante etiquetas.

---

RF-MEDIA-005

Optimizar imágenes automáticamente.

---

RF-MEDIA-006

Generar miniaturas.

---

RF-MEDIA-007

Versionar recursos.

---

RF-MEDIA-008

Integrar la biblioteca con el blog y el catálogo.

---

# 671. Requerimientos No Funcionales

RNF-MEDIA-001

Compatibilidad con Supabase Storage.

---

RNF-MEDIA-002

Escalable para decenas de miles de archivos.

---

RNF-MEDIA-003

Optimización automática de imágenes.

---

RNF-MEDIA-004

Búsquedas rápidas.

---

RNF-MEDIA-005

Arquitectura preparada para CDN.

---

# 672. Criterios de Aceptación

La Biblioteca Multimedia será considerada completa cuando:

- Centralice todos los recursos digitales del sitio.
- Permita organizar archivos de forma eficiente.
- Evite duplicaciones.
- Genere automáticamente versiones optimizadas.
- Se integre completamente con el editor MDX y el catálogo.
- Mantenga un rendimiento adecuado incluso con grandes volúmenes de recursos.
- Quede preparada para futuras funcionalidades de gestión avanzada de activos digitales.

---

## Fin de la Parte 7.5.6

# Parte 7.6
# Gestión de Clientes y Solicitudes de Personalización (CRM)

---

# 673. Introducción

## 673.1 Objetivo

El módulo de Gestión de Clientes permitirá administrar toda la información relacionada con las personas que solicitan productos personalizados a través del sitio web.

El objetivo será centralizar la información del cliente, registrar cada solicitud, mantener un historial de interacciones y facilitar el seguimiento del proceso de producción sin depender exclusivamente de conversaciones en WhatsApp.

Este módulo será la base para una futura plataforma de gestión de pedidos y comercio electrónico.

---

# 674. Objetivos

El sistema deberá permitir:

- Registrar clientes.
- Administrar información de contacto.
- Crear solicitudes de personalización.
- Adjuntar archivos enviados por el cliente.
- Registrar referencias de diseño.
- Mantener historial de conversaciones.
- Dar seguimiento al estado del proyecto.
- Asignar responsables.
- Registrar notas internas.
- Preparar integración con pedidos y pagos.

---

# 675. Alcance

El módulo abarcará:

- Clientes registrados.
- Clientes invitados.
- Solicitudes recibidas desde formularios.
- Solicitudes recibidas mediante WhatsApp (registro manual).
- Cotizaciones.
- Referencias gráficas.
- Seguimiento de producción.

No incluirá pagos ni facturación en la primera versión.

---

# 676. Dashboard del CRM

El panel principal mostrará indicadores generales.

Información disponible:

- Total de clientes.
- Clientes nuevos.
- Solicitudes pendientes.
- Solicitudes en diseño.
- Solicitudes en producción.
- Pedidos listos.
- Pedidos entregados.
- Solicitudes canceladas.

También incluirá accesos rápidos para crear un nuevo cliente o registrar una nueva solicitud.

---

# 677. Listado de Clientes

Los clientes se mostrarán en una tabla administrativa.

Cada registro incluirá:

- Fotografía (opcional).
- Nombre completo.
- Teléfono.
- Correo electrónico.
- Ciudad.
- Fecha de registro.
- Última interacción.
- Cantidad de solicitudes.
- Estado.

---

# 678. Búsqueda

Será posible localizar clientes utilizando:

- Nombre.
- Apellido.
- Teléfono.
- Correo.
- Número de solicitud.
- Redes sociales (futuro).

La búsqueda será instantánea y no distinguirá mayúsculas, minúsculas ni acentos.

---

# 679. Filtros

Los administradores podrán filtrar clientes por:

- Fecha de registro.
- Ciudad.
- Estado.
- Clientes frecuentes.
- Clientes nuevos.
- Clientes con solicitudes activas.

Los filtros podrán combinarse.

---

# 680. Perfil del Cliente

Cada cliente dispondrá de una ficha completa.

Información incluida:

- Datos personales.
- Información de contacto.
- Dirección.
- Redes sociales (opcional).
- Historial de pedidos.
- Historial de solicitudes.
- Archivos enviados.
- Conversaciones registradas.
- Notas internas.

---

# 681. Registro de Solicitudes

Cada solicitud representará un proyecto independiente.

Podrá asociarse a:

- Un cliente existente.
- Un cliente nuevo.

Cada solicitud tendrá un identificador único.

Ejemplo:

PC-2026-00015

---

# 682. Información General de la Solicitud

Cada solicitud almacenará:

- Número.
- Cliente.
- Fecha.
- Producto solicitado.
- Cantidad.
- Estado.
- Prioridad.
- Responsable.

---

# 683. Productos Solicitados

Inicialmente una solicitud podrá contener un producto principal.

Ejemplos:

- Camisa personalizada.
- Taza sublimada.
- Topper.
- Corona de fomi.
- Caja personalizada.
- Banda de graduación.

La arquitectura permitirá múltiples productos por solicitud en futuras versiones.

---

# 684. Descripción de la Personalización

El cliente podrá especificar:

- Texto.
- Colores.
- Temática.
- Estilo.
- Materiales.
- Medidas.
- Fecha del evento.

Toda esta información quedará registrada como parte del proyecto.

---

# 685. Archivos Adjuntos

Cada solicitud permitirá adjuntar:

- Fotografías.
- Logotipos.
- Diseños.
- Referencias.
- Capturas de pantalla.
- Documentos PDF.

Todos los archivos serán almacenados en la Biblioteca Multimedia.

---

# 686. Referencias de Diseño

Será posible registrar enlaces o imágenes de inspiración.

Ejemplos:

- Pinterest.
- Instagram.
- Facebook.
- Fotografías propias.

Estas referencias facilitarán la elaboración del diseño final.

---

# 687. Prioridad

Cada solicitud podrá clasificarse como:

- Baja.
- Normal.
- Alta.
- Urgente.

La prioridad permitirá organizar la carga de trabajo.

---

# 688. Pipeline de Producción

Las solicitudes recorrerán un flujo de trabajo visual tipo Kanban.

Estados disponibles:

Pendiente

↓

En revisión

↓

Diseño

↓

Aprobación del cliente

↓

Producción

↓

Control de calidad

↓

Listo para entrega

↓

Entregado

↓

Archivado

Cada cambio quedará registrado automáticamente.

---

# 689. Vista Kanban

El administrador podrá visualizar las solicitudes mediante columnas.

Cada tarjeta mostrará:

- Cliente.
- Producto.
- Prioridad.
- Fecha límite.
- Responsable.

Las tarjetas podrán moverse mediante Drag & Drop.

---

# 690. Historial

Cada solicitud conservará un historial completo.

Eventos registrados:

- Creación.
- Cambios de estado.
- Ediciones.
- Archivos agregados.
- Notas.
- Asignación de responsables.

---

# 691. Notas Internas

Los administradores podrán registrar comentarios privados.

Ejemplos:

"Cliente solicita cambio de color."

"Pendiente confirmar talla."

"Esperando fotografía en mejor resolución."

Estas notas nunca serán visibles para el cliente.

---

# 692. Responsable

Cada solicitud podrá asignarse a un responsable.

Inicialmente existirá un único administrador.

La arquitectura permitirá múltiples colaboradores en el futuro.

---

# 693. Fechas Importantes

Cada proyecto podrá registrar:

- Fecha de creación.
- Fecha límite.
- Fecha estimada de entrega.
- Fecha real de entrega.

Estas fechas facilitarán la planificación.

---

# 694. Integración con WhatsApp

Cada cliente dispondrá de acceso rápido para iniciar una conversación mediante WhatsApp.

En futuras versiones el sistema podrá registrar automáticamente ciertos eventos relacionados con la comunicación.

---

# 695. Recordatorios

El sistema quedará preparado para generar recordatorios automáticos.

Ejemplos:

- Pedido próximo a vencer.
- Cliente sin respuesta.
- Entrega pendiente.
- Solicitud detenida.

---

# 696. Integración con Productos

Cada solicitud podrá asociarse directamente con productos existentes del catálogo.

Esto permitirá reutilizar información y preparar futuras cotizaciones automáticas.

---

# 697. Preparación para Comercio Electrónico

La arquitectura permitirá incorporar posteriormente:

- Carrito.
- Pagos.
- Facturación.
- Seguimiento de envíos.
- Historial de compras.
- Recompensas.
- Cupones.
- Inventario.

Sin modificar la estructura principal del CRM.

---

# 698. Seguridad

Solo los administradores podrán acceder a la información del CRM.

Toda la información de los clientes deberá protegerse mediante políticas de Row Level Security (RLS) y cumplir con principios básicos de privacidad.

---

# 699. Requerimientos Funcionales

RF-CRM-001

Registrar clientes.

---

RF-CRM-002

Crear solicitudes.

---

RF-CRM-003

Administrar estados del proyecto.

---

RF-CRM-004

Adjuntar archivos.

---

RF-CRM-005

Registrar historial.

---

RF-CRM-006

Administrar notas internas.

---

RF-CRM-007

Visualizar solicitudes en Kanban.

---

RF-CRM-008

Preparar integración con pedidos y pagos.

---

# 700. Requerimientos No Funcionales

RNF-CRM-001

Escalable para miles de clientes.

---

RNF-CRM-002

Compatible con Supabase.

---

RNF-CRM-003

Optimizado para dispositivos móviles.

---

RNF-CRM-004

Arquitectura preparada para múltiples usuarios.

---

RNF-CRM-005

Compatible con futuras funciones de comercio electrónico.

---

# 701. Criterios de Aceptación

El módulo será considerado completo cuando:

- Permita administrar clientes y solicitudes desde un único lugar.
- Mantenga un historial completo de cada proyecto.
- Facilite el seguimiento mediante un pipeline visual.
- Centralice archivos, referencias y notas internas.
- Se encuentre preparado para evolucionar hacia un sistema completo de gestión de pedidos.
- Garantice la seguridad y privacidad de la información de los clientes.

---

## Fin de la Parte 7.6

# Parte 7.7
# Sistema de Cotizaciones Inteligentes

---

# 702. Introducción

## 702.1 Objetivo

El Sistema de Cotizaciones Inteligentes permitirá generar presupuestos profesionales para productos personalizados de forma rápida, organizada y consistente.

Este módulo reducirá el tiempo necesario para responder consultas de clientes, disminuirá errores en el cálculo de precios y permitirá llevar un historial completo de todas las cotizaciones emitidas.

Aunque inicialmente funcionará como un sistema independiente, su arquitectura estará preparada para convertirse posteriormente en el módulo de pedidos del comercio electrónico.

---

# 703. Objetivos

El sistema deberá permitir:

- Crear cotizaciones.
- Asociarlas a un cliente.
- Agregar uno o varios productos.
- Calcular precios automáticamente.
- Aplicar descuentos.
- Agregar costos adicionales.
- Generar documentos PDF.
- Compartir cotizaciones.
- Registrar aceptación o rechazo.
- Convertir una cotización en pedido.

---

# 704. Flujo General

El flujo de trabajo será el siguiente:

Solicitud del cliente

↓

Creación de cotización

↓

Cálculo automático

↓

Revisión

↓

Envío al cliente

↓

Aceptada / Rechazada

↓

Conversión a pedido (futuro)

Todo el proceso quedará registrado en el historial.

---

# 705. Dashboard de Cotizaciones

El módulo contará con un panel principal.

Indicadores:

- Cotizaciones pendientes.
- Cotizaciones enviadas.
- Cotizaciones aceptadas.
- Cotizaciones rechazadas.
- Cotizaciones vencidas.
- Valor total cotizado.
- Tasa de conversión.
- Tiempo promedio de respuesta.

---

# 706. Listado de Cotizaciones

Cada cotización mostrará:

- Número.
- Cliente.
- Fecha.
- Total.
- Estado.
- Responsable.
- Fecha de vencimiento.

Acciones rápidas:

- Ver.
- Editar.
- Duplicar.
- Descargar PDF.
- Compartir.
- Convertir en pedido.

---

# 707. Numeración

Cada cotización tendrá un identificador único.

Ejemplo:

COT-2026-000001

La numeración será automática y secuencial.

---

# 708. Información General

Cada cotización almacenará:

- Cliente.
- Fecha.
- Estado.
- Responsable.
- Moneda.
- Observaciones.
- Vigencia.

---

# 709. Productos

Una cotización podrá contener múltiples productos.

Cada producto incluirá:

- Nombre.
- Categoría.
- Cantidad.
- Precio unitario.
- Subtotal.
- Observaciones.

---

# 710. Configuración del Producto

Cada producto podrá personalizarse mediante atributos.

Ejemplos:

Camisas

- Talla.
- Color.
- Tipo de tela.
- Tipo de impresión.

Tazas

- Capacidad.
- Color.
- Tipo de sublimación.

Toppers

- Medidas.
- Cantidad de capas.
- Material.

Coronas

- Tamaño.
- Edad.
- Colores.
- Fotografía.

---

# 711. Cálculo Automático

El sistema calculará automáticamente:

Precio base

+

Extras

+

Urgencia

+

Diseño personalizado

+

Envío

-

Descuentos

=

Total

Cada modificación actualizará inmediatamente el resultado.

---

# 712. Descuentos

Será posible aplicar:

- Porcentaje.
- Valor fijo.

Tipos:

- Promoción.
- Cliente frecuente.
- Descuento manual.
- Evento especial.

Todo descuento quedará registrado.

---

# 713. Costos Adicionales

Podrán agregarse cargos como:

- Diseño personalizado.
- Material premium.
- Producción urgente.
- Envío.
- Empaque especial.

Cada costo indicará su motivo.

---

# 714. Impuestos

La arquitectura permitirá configurar impuestos.

Inicialmente podrán mantenerse desactivados.

En futuras versiones se podrán definir:

- ISV.
- Exoneraciones.
- Impuestos regionales.

---

# 715. Vigencia

Cada cotización tendrá una fecha de expiración.

Ejemplo:

Válida durante 15 días.

Después de vencer:

- No podrá aceptarse.
- Podrá duplicarse.
- Permanecerá en el historial.

---

# 716. Estados

Estados disponibles:

Borrador

↓

En revisión

↓

Enviada

↓

Aceptada

↓

Rechazada

↓

Vencida

↓

Convertida en pedido

Cada cambio generará un registro en el historial.

---

# 717. PDF Profesional

El sistema generará automáticamente un documento PDF.

El documento incluirá:

- Logo de Poppy Crafty.
- Información del cliente.
- Número de cotización.
- Fecha.
- Tabla de productos.
- Totales.
- Condiciones.
- Vigencia.
- Información de contacto.

El diseño deberá ser limpio, profesional y listo para impresión.

---

# 718. Compartir Cotización

Será posible compartir mediante:

- Descarga directa.
- Correo electrónico (futuro).
- WhatsApp.
- Enlace privado (futuro).

---

# 719. Historial

Cada cotización conservará un historial.

Eventos registrados:

- Creación.
- Edición.
- Envío.
- Descarga.
- Aceptación.
- Rechazo.
- Conversión.

---

# 720. Duplicar Cotización

El administrador podrá generar una copia completa.

Esto permitirá reutilizar presupuestos similares sin volver a introducir toda la información.

---

# 721. Conversión a Pedido

En futuras versiones una cotización aceptada podrá convertirse automáticamente en un pedido.

La conversión reutilizará:

- Cliente.
- Productos.
- Observaciones.
- Archivos.
- Totales.

Sin necesidad de volver a capturar datos.

---

# 722. Integración con CRM

Cada cotización quedará vinculada al perfil del cliente.

Desde la ficha del cliente será posible consultar:

- Cotizaciones activas.
- Historial.
- Total cotizado.
- Conversión.

---

# 723. Integración con Catálogo

Cuando un producto exista en el catálogo, sus datos podrán importarse automáticamente.

Información reutilizable:

- Nombre.
- Precio base.
- Categoría.
- Fotografías.

---

# 724. Preparación para Comercio Electrónico

La arquitectura quedará preparada para:

- Pago en línea.
- Firma digital.
- Anticipos.
- Facturación.
- Inventario.
- Envíos.
- Estados de pago.

---

# 725. Seguridad

Solo usuarios autorizados podrán:

- Crear cotizaciones.
- Modificarlas.
- Eliminarlas.
- Convertirlas.

Todas las acciones quedarán registradas.

---

# 726. Requerimientos Funcionales

RF-QUOTE-001

Crear cotizaciones.

---

RF-QUOTE-002

Agregar múltiples productos.

---

RF-QUOTE-003

Calcular precios automáticamente.

---

RF-QUOTE-004

Aplicar descuentos.

---

RF-QUOTE-005

Generar PDF.

---

RF-QUOTE-006

Registrar historial.

---

RF-QUOTE-007

Compartir cotizaciones.

---

RF-QUOTE-008

Preparar conversión a pedido.

---

# 727. Requerimientos No Funcionales

RNF-QUOTE-001

Generación rápida de documentos.

---

RNF-QUOTE-002

Escalable para miles de cotizaciones.

---

RNF-QUOTE-003

Compatible con dispositivos móviles.

---

RNF-QUOTE-004

Arquitectura preparada para comercio electrónico.

---

RNF-QUOTE-005

Integración completa con CRM y catálogo.

---

# 728. Criterios de Aceptación

El módulo será considerado completo cuando:

- Permita generar cotizaciones profesionales.
- Calcule automáticamente los importes.
- Genere documentos PDF listos para enviar.
- Mantenga un historial completo.
- Se integre con clientes y productos.
- Quede preparado para evolucionar hacia un sistema completo de pedidos y ventas.

---

## Fin de la Parte 7.7

# Parte 7.8
# Sistema de Analítica y Dashboard Ejecutivo (Business Intelligence)

---

# 729. Introducción

## 729.1 Objetivo

El Sistema de Analítica y Dashboard Ejecutivo proporcionará una visión centralizada del rendimiento general del sitio web y del emprendimiento Poppy Crafty.

Su objetivo será transformar los datos generados por el sitio en información útil para la toma de decisiones, permitiendo identificar tendencias, oportunidades de crecimiento, productos con mayor demanda y el comportamiento de los visitantes.

El módulo estará diseñado para crecer progresivamente, integrando en el futuro herramientas externas de analítica y marketing.

---

# 730. Objetivos

El sistema deberá permitir:

- Visualizar indicadores clave del negocio.
- Analizar el comportamiento de los visitantes.
- Medir el rendimiento del catálogo.
- Medir el rendimiento del blog.
- Analizar solicitudes recibidas.
- Evaluar conversiones.
- Exportar reportes.
- Comparar períodos.
- Preparar integración con herramientas externas.

---

# 731. Dashboard Principal

Al ingresar al panel administrativo, el usuario visualizará un Dashboard Ejecutivo.

Este dashboard resumirá el estado general del negocio mediante tarjetas informativas, gráficos y tablas.

Toda la información deberá actualizarse automáticamente utilizando datos almacenados en la base de datos.

---

# 732. Indicadores Principales (KPIs)

El sistema mostrará indicadores estratégicos.

Entre ellos:

- Total de visitas.
- Visitantes únicos.
- Productos publicados.
- Productos más consultados.
- Solicitudes recibidas.
- Solicitudes completadas.
- Clientes registrados.
- Artículos publicados.
- Tiempo promedio de permanencia.
- Tasa de conversión.

Cada indicador mostrará:

- Valor actual.
- Variación respecto al período anterior.
- Tendencia (positiva, negativa o estable).

---

# 733. Tarjetas Resumen

Las tarjetas superiores deberán mostrar información resumida.

Ejemplos:

Productos publicados

145

↑ +12 este mes

---

Solicitudes recibidas

68

↑ +18%

---

Artículos publicados

24

↑ +3

---

Clientes registrados

312

↑ +9%

---

# 734. Gráficos

El Dashboard utilizará diferentes tipos de gráficos.

Entre ellos:

- Líneas.
- Barras.
- Área.
- Dona.
- Circular.
- Columnas.

Cada gráfico podrá cambiar el período analizado.

---

# 735. Filtros Globales

Todo el Dashboard responderá a filtros comunes.

Ejemplos:

Hoy

Últimos 7 días

Últimos 30 días

Últimos 90 días

Este año

Personalizado

Todos los indicadores deberán actualizarse automáticamente.

---

# 736. Rendimiento del Blog

Se mostrará información específica sobre el blog.

Indicadores:

- Artículos más visitados.
- Tiempo promedio de lectura.
- Artículos con mayor permanencia.
- Artículos con mayor conversión.
- Nuevos artículos publicados.

---

# 737. Rendimiento del Catálogo

El sistema mostrará estadísticas del catálogo.

Ejemplos:

- Productos más consultados.
- Categorías más populares.
- Productos compartidos.
- Productos con mayor cantidad de solicitudes.

---

# 738. Conversión

Se analizará el recorrido del visitante.

Embudo:

Visita

↓

Consulta de producto

↓

Formulario

↓

Solicitud enviada

↓

Cliente

↓

Pedido (futuro)

Esto permitirá detectar puntos de abandono.

---

# 739. Clientes

Se mostrarán indicadores relacionados con clientes.

Ejemplos:

- Clientes nuevos.
- Clientes frecuentes.
- Clientes activos.
- Clientes sin actividad.
- Promedio de solicitudes por cliente.

---

# 740. Solicitudes

El Dashboard incluirá estadísticas del CRM.

Indicadores:

- Pendientes.
- En diseño.
- En producción.
- Entregadas.
- Canceladas.

También mostrará tiempos promedio entre etapas.

---

# 741. Productos Más Solicitados

Se generará automáticamente un ranking.

Ejemplo:

1. Camisas personalizadas

2. Tazas sublimadas

3. Coronas de cumpleaños

4. Toppers

5. Stickers

El ranking podrá filtrarse por fechas.

---

# 742. Categorías Más Populares

El sistema calculará las categorías con mayor interacción.

Esto permitirá identificar oportunidades de expansión.

---

# 743. Tendencias

El Dashboard mostrará tendencias temporales.

Ejemplos:

- Crecimiento mensual.
- Estacionalidad.
- Fechas con mayor actividad.
- Productos de temporada.

---

# 744. SEO

El sistema incorporará indicadores básicos.

Entre ellos:

- Artículos indexados.
- Puntuación SEO promedio.
- Meta descriptions faltantes.
- Imágenes sin ALT.
- Artículos pendientes de optimización.

---

# 745. Rendimiento Técnico

El Dashboard mostrará información técnica.

Ejemplos:

- Tiempo promedio de carga.
- Imágenes optimizadas.
- Recursos pendientes.
- Errores registrados.

---

# 746. Exportación

Todos los reportes podrán exportarse.

Formatos previstos:

- PDF.
- Excel.
- CSV.

La exportación respetará los filtros activos.

---

# 747. Comparativas

Será posible comparar diferentes períodos.

Ejemplos:

Este mes vs mes anterior

Este año vs año anterior

Últimos 30 días vs últimos 30 días anteriores

---

# 748. Alertas

El Dashboard podrá generar alertas.

Ejemplos:

- Aumento significativo de visitas.
- Disminución de conversiones.
- Artículos sin tráfico.
- Productos sin imágenes.
- Solicitudes atrasadas.

Inicialmente serán informativas.

---

# 749. Integraciones Futuras

La arquitectura quedará preparada para integrarse con:

- Google Analytics 4.
- Google Search Console.
- Meta Pixel.
- Google Tag Manager.
- Microsoft Clarity.
- Google Looker Studio.

Estas integraciones no estarán disponibles en la primera versión.

---

# 750. Seguridad

La información analítica solo estará disponible para administradores autorizados.

Los datos deberán respetar las políticas de privacidad y protección de información personal.

---

# 751. Rendimiento

Las consultas estadísticas deberán ejecutarse de forma eficiente.

Los indicadores más utilizados podrán almacenarse temporalmente en caché para reducir la carga sobre la base de datos.

---

# 752. Requerimientos Funcionales

RF-ANALYTICS-001

Visualizar KPIs.

---

RF-ANALYTICS-002

Mostrar gráficos dinámicos.

---

RF-ANALYTICS-003

Aplicar filtros globales.

---

RF-ANALYTICS-004

Generar rankings.

---

RF-ANALYTICS-005

Exportar reportes.

---

RF-ANALYTICS-006

Comparar períodos.

---

RF-ANALYTICS-007

Mostrar indicadores SEO.

---

RF-ANALYTICS-008

Preparar integraciones externas.

---

# 753. Requerimientos No Funcionales

RNF-ANALYTICS-001

Actualización rápida de indicadores.

---

RNF-ANALYTICS-002

Escalable para grandes volúmenes de datos.

---

RNF-ANALYTICS-003

Compatible con dispositivos móviles.

---

RNF-ANALYTICS-004

Arquitectura preparada para Business Intelligence.

---

RNF-ANALYTICS-005

Integración futura con herramientas externas.

---

# 754. Criterios de Aceptación

El módulo será considerado completo cuando:

- Presente un Dashboard Ejecutivo claro y organizado.
- Muestre indicadores relevantes para la toma de decisiones.
- Permita analizar el comportamiento del sitio y de los clientes.
- Facilite la exportación de reportes.
- Permita comparar períodos.
- Se encuentre preparado para futuras integraciones con plataformas de analítica y marketing digital.

---

## Fin de la Parte 7.8

# CAPÍTULO 8
# Arquitectura de la Base de Datos

> **Consolidado en `docs/DATABASE.md` (2026-08-03).** Este capítulo definía
> principios generales (UUID, soft delete, auditoría, RLS) y prometía un
> desarrollo por dominios (8.1 Usuarios y Autenticación, 8.2 Roles y
> Permisos, ... 8.14 Tablas auxiliares) que nunca se llegó a escribir — el
> documento salta directo al Capítulo 9 sin definir una sola tabla aquí.
> Fue la segunda de tres versiones contradictorias del esquema (usaba
> nombres de tabla en inglés). Los mismos principios, ya aplicados de forma
> concreta y sin contradicciones, están en `docs/DATABASE.md`. Ver
> `docs/DECISIONS.md` para el detalle de la fusión.

# Capítulo 9. Arquitectura del Sistema

## 9.1 Objetivo

Este capítulo define la arquitectura técnica del sistema, las tecnologías utilizadas, la organización del código y la interacción entre los distintos componentes. Su propósito es establecer una base sólida que facilite el desarrollo, mantenimiento y escalabilidad del proyecto.

---

## 9.2 Arquitectura General

El sistema seguirá una arquitectura cliente-servidor basada en tecnologías modernas.

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- MDX para el blog

### Backend

- Supabase Auth
- PostgreSQL
- Supabase Storage
- Row Level Security (RLS)

La comunicación entre el frontend y el backend se realizará mediante el cliente oficial de Supabase y funciones del servidor cuando sea necesario.

---

## 9.3 Organización del Proyecto

La estructura propuesta será:

```text
src/
│
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── types/
├── utils/
├── styles/
└── middleware.ts
```

Cada módulo del sistema estará desacoplado para facilitar su mantenimiento y reutilización.

---

## 9.4 Organización por Módulos

El proyecto se dividirá funcionalmente en los siguientes módulos:

- Sitio público
- Catálogo de productos
- Blog
- CRM
- Cotizaciones
- Panel administrativo
- Dashboard de analítica
- Configuración del sistema

Cada módulo será independiente en cuanto a componentes, lógica y servicios.

---

## 9.5 Componentes

Los componentes se clasificarán en:

| Tipo | Descripción |
|------|-------------|
| UI | Botones, inputs, tarjetas, badges, modales. |
| Layout | Header, Footer, Sidebar, Breadcrumbs. |
| Feature | Componentes propios de cada módulo. |
| Shared | Componentes reutilizables en toda la aplicación. |

Se priorizará la reutilización para evitar duplicación de código.

---

## 9.6 Gestión de Estado

Se utilizará el estado local de React siempre que sea suficiente.

Para información compartida se emplearán Context API o librerías de estado únicamente cuando aporten una ventaja clara.

La información persistente residirá en Supabase.

---

## 9.7 Navegación

El sitio utilizará App Router de Next.js.

Las rutas se organizarán por dominio funcional.

Ejemplo:

```text
/
├── productos/
├── blog/
├── contacto/
├── admin/
├── dashboard/
└── api/
```

Las rutas administrativas estarán protegidas mediante autenticación.

---

## 9.8 Renderizado

Según el tipo de contenido se utilizarán distintas estrategias:

| Estrategia | Uso |
|------------|-----|
| SSG | Páginas estáticas (Inicio, Nosotros, Políticas). |
| ISR | Catálogo y Blog. |
| SSR | Panel administrativo y datos privados. |
| CSR | Componentes interactivos. |

Esta combinación optimiza el SEO y el rendimiento.

---

## 9.9 Manejo de Archivos

Las imágenes y documentos se almacenarán en Supabase Storage.

Se organizarán en carpetas lógicas:

```text
/products/
/blog/
/avatars/
/customers/
/quotes/
/uploads/
```

El sistema optimizará automáticamente las imágenes antes de mostrarlas.

---

## 9.10 Manejo de Errores

La aplicación implementará:

- Páginas 404 y 500 personalizadas.
- Mensajes de error amigables.
- Validaciones en cliente y servidor.
- Registro de errores para diagnóstico.

Nunca se mostrarán mensajes técnicos al usuario final.

---

## 9.11 Escalabilidad

La arquitectura deberá permitir incorporar nuevos módulos sin modificar la estructura existente.

Ejemplos:

- Tienda en línea.
- Carrito de compras.
- Pagos.
- Inventario.
- Sistema de envíos.
- Programa de fidelización.

---

## 9.12 Buenas Prácticas

Durante el desarrollo se seguirán las siguientes directrices:

- Componentes pequeños y reutilizables.
- Separación entre presentación y lógica.
- Tipado estricto con TypeScript.
- Convenciones de nombres consistentes.
- Código documentado cuando sea necesario.
- Uso de ESLint y Prettier.
- Evitar duplicación de código (DRY).
- Mantener simplicidad (KISS).

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-ARC-001 | Organizar el proyecto por módulos. |
| RF-ARC-002 | Implementar rutas protegidas para el panel administrativo. |
| RF-ARC-003 | Centralizar la comunicación con Supabase. |
| RF-ARC-004 | Gestionar archivos mediante Supabase Storage. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-ARC-001 | Arquitectura modular y escalable. |
| RNF-ARC-002 | Compatibilidad con Next.js App Router. |
| RNF-ARC-003 | Alto nivel de mantenibilidad. |
| RNF-ARC-004 | Bajo acoplamiento entre módulos. |

---

## Criterios de Aceptación

La arquitectura será considerada adecuada cuando:

- Los módulos sean independientes entre sí.
- La estructura del proyecto facilite el mantenimiento.
- El sistema pueda crecer sin reorganizaciones importantes.
- Las tecnologías seleccionadas cubran los requisitos funcionales y no funcionales del proyecto.

# Capítulo 10. API y Comunicación con el Backend

## 10.1 Objetivo

Este capítulo define la comunicación entre el frontend y el backend, estableciendo las operaciones disponibles, el flujo de datos, las validaciones y las reglas para el intercambio de información entre la aplicación y Supabase.

---

## 10.2 Arquitectura de Comunicación

El frontend interactuará con Supabase mediante:

- Supabase Client para operaciones autenticadas.
- Server Components para consultas de lectura cuando sea apropiado.
- Server Actions para operaciones que modifiquen datos.
- Middleware para proteger rutas administrativas.

Toda la lógica de negocio deberá centralizarse en servicios reutilizables, evitando consultas directas desde los componentes.

---

## 10.3 Recursos Principales

La API administrará los siguientes recursos:

| Recurso | Descripción |
|----------|-------------|
| Productos | Gestión del catálogo. |
| Categorías | Clasificación de productos y artículos. |
| Blog | Publicación y administración de contenido. |
| Multimedia | Gestión de imágenes y archivos. |
| Clientes | Información de clientes. |
| Solicitudes | Proyectos personalizados. |
| Cotizaciones | Presupuestos y seguimiento. |
| Usuarios | Administración del panel. |
| Configuración | Parámetros generales del sistema. |

---

## 10.4 Operaciones

Todos los recursos implementarán operaciones CRUD cuando corresponda.

| Método | Acción |
|---------|--------|
| GET | Consultar información. |
| POST | Crear registros. |
| PUT/PATCH | Actualizar registros. |
| DELETE | Eliminación lógica (Soft Delete). |

Las operaciones deberán validar permisos antes de ejecutarse.

---

## 10.5 Formato de Datos

La comunicación utilizará JSON.

Ejemplo:

```json
{
  "success": true,
  "data": {},
  "message": "Operación realizada correctamente."
}
```

En caso de error:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Los datos proporcionados no son válidos."
  }
}
```

Se utilizará una estructura uniforme en todas las respuestas.

---

## 10.6 Validaciones

Las validaciones se realizarán tanto en cliente como en servidor.

Se verificará:

- Campos obligatorios.
- Tipos de datos.
- Longitud de textos.
- Formatos de correo.
- Tamaño de archivos.
- Tipos MIME permitidos.
- Permisos del usuario.

Las validaciones del servidor prevalecerán sobre las del cliente.

---

## 10.7 Manejo de Errores

Los errores deberán clasificarse para facilitar su tratamiento.

| Código | Descripción |
|---------|-------------|
| 400 | Solicitud inválida. |
| 401 | Usuario no autenticado. |
| 403 | Acceso denegado. |
| 404 | Recurso no encontrado. |
| 409 | Conflicto de datos. |
| 422 | Error de validación. |
| 500 | Error interno del servidor. |

Los mensajes mostrados al usuario deberán ser claros y no revelar información técnica.

---

## 10.8 Seguridad

Las operaciones protegidas requerirán autenticación mediante Supabase Auth.

El acceso a la información dependerá del rol del usuario y de las políticas RLS definidas en la base de datos.

Las acciones críticas deberán registrarse en la auditoría del sistema.

---

## 10.9 Subida de Archivos

Los archivos se almacenarán en Supabase Storage.

Antes de almacenarlos se verificará:

- Tipo de archivo.
- Tamaño máximo permitido.
- Nombre normalizado.
- Permisos del usuario.

Las imágenes podrán optimizarse automáticamente para reducir tiempos de carga.

---

## 10.10 Paginación

Los recursos con grandes volúmenes de información deberán implementarse mediante paginación.

Características:

- Tamaño de página configurable.
- Ordenamiento.
- Filtros.
- Búsqueda.
- Total de registros.

Esto reducirá el consumo de recursos y mejorará la experiencia del usuario.

---

## 10.11 Auditoría

Las operaciones sensibles registrarán:

- Usuario.
- Fecha y hora.
- Acción ejecutada.
- Recurso afectado.
- Identificador del registro.

Este historial facilitará el seguimiento de cambios y la resolución de incidencias.

---

## 10.12 Escalabilidad

La API deberá diseñarse para admitir futuras funcionalidades como:

- Comercio electrónico.
- Pagos en línea.
- Inventario.
- Envíos.
- Integraciones con terceros.
- Aplicaciones móviles.

La incorporación de nuevos recursos no deberá afectar la estructura existente.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-API-001 | Proporcionar operaciones CRUD para los módulos principales. |
| RF-API-002 | Validar información antes de almacenarla. |
| RF-API-003 | Gestionar archivos mediante Supabase Storage. |
| RF-API-004 | Registrar acciones críticas en la auditoría. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-API-001 | Mantener una estructura uniforme de respuestas. |
| RNF-API-002 | Garantizar la seguridad mediante autenticación y RLS. |
| RNF-API-003 | Facilitar la escalabilidad del sistema. |
| RNF-API-004 | Optimizar el rendimiento mediante paginación y consultas eficientes. |

---

## Criterios de Aceptación

El módulo será considerado completo cuando:

- Todos los recursos implementen operaciones consistentes.
- La validación se realice en cliente y servidor.
- Las respuestas mantengan un formato uniforme.
- El acceso esté protegido mediante autenticación y permisos.
- La arquitectura permita incorporar nuevos módulos sin modificar la API existente.

# Capítulo 11. Seguridad

## 11.1 Objetivo

Este capítulo establece las políticas y mecanismos de seguridad que protegerán la información del sistema, garantizando la confidencialidad, integridad y disponibilidad de los datos tanto para los administradores como para los clientes.

---

## 11.2 Autenticación

La autenticación será gestionada mediante **Supabase Auth**.

Características:

- Inicio de sesión con correo y contraseña.
- Recuperación de contraseña.
- Cierre de sesión seguro.
- Persistencia de sesión.
- Renovación automática del token.

En la primera versión únicamente existirán cuentas administrativas.

---

## 11.3 Autorización

El acceso al sistema estará basado en roles.

| Rol | Permisos |
|------|----------|
| Administrador | Acceso completo al sistema. |
| Editor *(futuro)* | Gestión de contenido sin acceso a configuraciones críticas. |
| Colaborador *(futuro)* | Acceso limitado según funciones asignadas. |

La arquitectura permitirá agregar nuevos roles sin modificar el resto del sistema.

---

## 11.4 Protección de Rutas

Las rutas administrativas estarán protegidas mediante middleware.

Se verificará:

- Sesión activa.
- Usuario autenticado.
- Permisos suficientes.
- Estado válido de la cuenta.

Los usuarios no autorizados serán redirigidos a la pantalla de inicio de sesión.

---

## 11.5 Row Level Security (RLS)

Todas las tablas privadas implementarán políticas RLS.

Estas políticas impedirán:

- Lectura de información no autorizada.
- Modificación de registros ajenos.
- Eliminación sin permisos.
- Acceso directo desde clientes no autorizados.

La seguridad principal residirá en la base de datos.

---

## 11.6 Validación de Datos

Toda la información recibida será validada antes de almacenarse.

Se verificará:

- Campos obligatorios.
- Formato de datos.
- Longitud de textos.
- Archivos permitidos.
- Tamaño máximo.
- Tipos MIME.

Nunca se confiará únicamente en las validaciones del navegador.

---

## 11.7 Protección de Archivos

Antes de almacenar un archivo se validará:

- Tipo.
- Tamaño.
- Extensión.
- Nombre normalizado.

Los archivos se almacenarán en buckets privados o públicos según su finalidad.

---

## 11.8 Variables de Entorno

Las credenciales y configuraciones sensibles se almacenarán mediante variables de entorno.

Ejemplos:

- URL de Supabase.
- Clave pública.
- Claves de servicios.
- Tokens de integración.

Ninguna credencial deberá incluirse en el código fuente.

---

## 11.9 Auditoría

Las acciones críticas quedarán registradas.

Eventos auditables:

- Inicio de sesión.
- Creación.
- Edición.
- Eliminación.
- Publicación.
- Cambios de configuración.

Cada registro incluirá usuario, fecha, acción y recurso afectado.

---

## 11.10 Respaldo y Recuperación

La estrategia de respaldo dependerá de Supabase para la base de datos.

Los archivos almacenados deberán mantenerse organizados para facilitar su recuperación en caso de incidente.

---

## 11.11 Buenas Prácticas

Durante el desarrollo se aplicarán las siguientes medidas:

- Principio de mínimo privilegio.
- Soft Delete para evitar pérdidas accidentales.
- Sanitización de entradas.
- Uso exclusivo de conexiones HTTPS.
- Dependencias actualizadas.
- Gestión segura de secretos.
- Registro de errores sin exponer información sensible.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-SEC-001 | Autenticar administradores mediante Supabase Auth. |
| RF-SEC-002 | Proteger rutas privadas mediante middleware. |
| RF-SEC-003 | Aplicar políticas RLS en la base de datos. |
| RF-SEC-004 | Registrar acciones críticas del sistema. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-SEC-001 | Garantizar la confidencialidad de la información. |
| RNF-SEC-002 | Evitar accesos no autorizados. |
| RNF-SEC-003 | Mantener las credenciales fuera del código fuente. |
| RNF-SEC-004 | Cumplir buenas prácticas de desarrollo seguro. |

---

## Criterios de Aceptación

La estrategia de seguridad será considerada adecuada cuando:

- Solo usuarios autorizados accedan al panel administrativo.
- Todas las tablas privadas estén protegidas mediante RLS.
- Las acciones críticas queden registradas.
- La información sensible permanezca protegida durante todo el ciclo de vida del sistema.

# Capítulo 12. SEO y Marketing Digital

## 12.1 Objetivo

Este capítulo define la estrategia de optimización para motores de búsqueda (SEO) y las prácticas de marketing digital que permitirán aumentar la visibilidad de Poppy Crafty, atraer tráfico orgánico y convertir visitantes en clientes.

---

## 12.2 Objetivos Específicos

La estrategia SEO deberá:

- Mejorar el posicionamiento en Google.
- Incrementar el tráfico orgánico.
- Potenciar el blog como fuente de visitas.
- Favorecer la indexación del catálogo.
- Mejorar la conversión desde búsquedas.

---

## 12.3 SEO Técnico

El sitio deberá implementar las siguientes prácticas:

- URLs amigables.
- Metadata dinámica.
- Sitemap XML.
- Robots.txt.
- Canonical URLs.
- Open Graph.
- Twitter Cards.
- Datos estructurados (Schema.org).
- Optimización de Core Web Vitals.
- HTTPS obligatorio.

---

## 12.4 Estructura de URLs

Las rutas seguirán una estructura clara y descriptiva.

| Sección | Ejemplo |
|----------|----------|
| Inicio | `/` |
| Productos | `/productos` |
| Categoría | `/productos/camisas-personalizadas` |
| Producto | `/productos/taza-personalizada-floral` |
| Blog | `/blog` |
| Artículo | `/blog/materiales-para-cricut` |
| Galería | `/galeria` |
| Contacto | `/contacto` |

Las URLs deberán mantenerse estables y utilizar slugs legibles.

---

## 12.5 Metadata

Cada página contará con información optimizada para buscadores.

Se definirá:

- Título.
- Descripción.
- Palabras clave (opcionales).
- Imagen destacada.
- URL canónica.
- Open Graph.
- Twitter Card.

La metadata será dinámica para productos y artículos.

---

## 12.6 Blog como Estrategia SEO

El blog será uno de los principales canales de captación.

Cada artículo deberá:

- Resolver una necesidad del usuario.
- Incluir títulos jerárquicos (H1-H3).
- Contener imágenes optimizadas.
- Incorporar enlaces internos.
- Relacionarse con productos del catálogo.
- Finalizar con llamadas a la acción.

---

## 12.7 SEO para Productos

Cada producto incluirá:

- Título optimizado.
- Descripción única.
- Imágenes con atributo ALT.
- URL amigable.
- Datos estructurados.
- Productos relacionados.

Se evitará contenido duplicado.

---

## 12.8 Datos Estructurados

Se implementarán esquemas de Schema.org cuando corresponda.

Tipos previstos:

- Organization.
- Website.
- Product.
- BlogPosting.
- BreadcrumbList.
- FAQPage.

Esto favorecerá la aparición de Rich Results en buscadores.

---

## 12.9 Optimización de Imágenes

Todas las imágenes deberán:

- Comprimirse antes de publicarse.
- Utilizar formatos modernos cuando sea posible.
- Incluir texto alternativo (ALT).
- Cargarse mediante Lazy Loading.
- Adaptarse a distintos tamaños de pantalla.

---

## 12.10 Enlazado Interno

El sitio fomentará la navegación mediante enlaces entre contenidos relacionados.

Ejemplos:

- Artículos relacionados.
- Productos relacionados.
- Categorías relacionadas.
- Enlaces desde el blog hacia el catálogo.
- Enlaces desde productos hacia artículos educativos.

---

## 12.11 Integraciones

La arquitectura quedará preparada para integrar:

- Google Search Console.
- Google Analytics 4.
- Google Tag Manager.
- Meta Pixel.
- Microsoft Clarity.

Estas herramientas facilitarán el análisis del rendimiento y las campañas de marketing.

---

## 12.12 Buenas Prácticas

Durante el desarrollo se deberán evitar:

- Contenido duplicado.
- URLs rotas.
- Imágenes sin ALT.
- Metadata incompleta.
- Páginas sin indexación adecuada.
- Redirecciones innecesarias.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-SEO-001 | Generar metadata dinámica para productos y artículos. |
| RF-SEO-002 | Generar automáticamente el sitemap XML. |
| RF-SEO-003 | Crear URLs amigables mediante slugs. |
| RF-SEO-004 | Implementar datos estructurados compatibles con Schema.org. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-SEO-001 | Optimizar el sitio para motores de búsqueda. |
| RNF-SEO-002 | Cumplir buenas prácticas de SEO técnico. |
| RNF-SEO-003 | Favorecer tiempos de carga reducidos. |
| RNF-SEO-004 | Facilitar la indexación de todo el contenido público. |

---

## Criterios de Aceptación

La estrategia SEO será considerada adecuada cuando:

- Todas las páginas públicas cuenten con metadata optimizada.
- El sitio genere automáticamente el sitemap.
- Los productos y artículos sean fácilmente indexables.
- El blog contribuya al posicionamiento orgánico del emprendimiento.

# Capítulo 13. Performance y Optimización

## 13.1 Objetivo

Este capítulo establece las estrategias para garantizar un sitio web rápido, eficiente y escalable, optimizando la experiencia del usuario y el posicionamiento en buscadores.

---

## 13.2 Objetivos Específicos

- Reducir los tiempos de carga.
- Optimizar el consumo de recursos.
- Minimizar las solicitudes al servidor.
- Mejorar los indicadores Core Web Vitals.
- Mantener una experiencia fluida en dispositivos móviles.

---

## 13.3 Estrategias de Renderizado

Cada tipo de contenido utilizará la estrategia de renderizado más adecuada.

| Estrategia | Aplicación |
|------------|------------|
| SSG | Páginas informativas y políticas. |
| ISR | Catálogo y blog. |
| SSR | Panel administrativo y contenido privado. |
| CSR | Componentes interactivos. |

---

## 13.4 Optimización de Recursos

Se implementarán las siguientes prácticas:

- Compresión de imágenes.
- Formatos modernos (WebP o AVIF cuando sea posible).
- Lazy Loading para imágenes y componentes.
- Minificación de CSS y JavaScript.
- División automática del código (Code Splitting).
- Eliminación de código no utilizado.

---

## 13.5 Optimización de Imágenes

Las imágenes deberán:

- Ajustarse automáticamente al tamaño del dispositivo.
- Cargarse únicamente cuando sean visibles.
- Mantener una buena relación entre calidad y peso.
- Incluir dimensiones definidas para evitar cambios de diseño (CLS).

---

## 13.6 Optimización de Consultas

Las consultas a la base de datos deberán:

- Recuperar únicamente la información necesaria.
- Implementar paginación.
- Aplicar filtros desde el servidor.
- Utilizar índices adecuados.
- Evitar consultas repetitivas.

---

## 13.7 Caché

Se aprovecharán los mecanismos de caché disponibles en Next.js y el navegador para reducir tiempos de respuesta.

Se aplicará principalmente a:

- Imágenes.
- Páginas estáticas.
- Artículos del blog.
- Catálogo de productos.

---

## 13.8 Core Web Vitals

El sitio deberá mantener valores óptimos en:

| Métrica | Objetivo |
|----------|----------|
| LCP | ≤ 2.5 segundos |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

Estas métricas serán monitoreadas periódicamente.

---

## 13.9 Monitoreo

Se recomienda utilizar herramientas como:

- Google Lighthouse.
- PageSpeed Insights.
- Google Search Console.
- Microsoft Clarity.
- Google Analytics.

Estas permitirán identificar oportunidades de mejora.

---

## 13.10 Buenas Prácticas

- Evitar dependencias innecesarias.
- Reutilizar componentes.
- Reducir el tamaño de los paquetes.
- Mantener consultas eficientes.
- Optimizar recursos multimedia.
- Revisar periódicamente el rendimiento del sitio.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-PER-001 | Optimizar la carga de imágenes. |
| RF-PER-002 | Implementar carga diferida cuando corresponda. |
| RF-PER-003 | Aplicar estrategias de renderizado según el contenido. |
| RF-PER-004 | Implementar paginación en recursos de gran tamaño. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-PER-001 | Mantener tiempos de carga reducidos. |
| RNF-PER-002 | Optimizar el uso de recursos del cliente y servidor. |
| RNF-PER-003 | Cumplir con los estándares de Core Web Vitals. |
| RNF-PER-004 | Garantizar una experiencia fluida en dispositivos móviles. |

---

## Criterios de Aceptación

La estrategia de rendimiento será considerada adecuada cuando:

- El sitio cargue rápidamente en conexiones comunes.
- Las imágenes estén correctamente optimizadas.
- El catálogo y el blog respondan de forma eficiente.
- Se cumplan las métricas objetivo de Core Web Vitals.

# Capítulo 14. Accesibilidad y Responsive Design

## 14.1 Objetivo

Este capítulo establece los criterios de accesibilidad y diseño adaptable que permitirán ofrecer una experiencia consistente, inclusiva y funcional en cualquier dispositivo, cumpliendo con las buenas prácticas de desarrollo web.

---

## 14.2 Responsive Design

El sitio adoptará una estrategia **Mobile First**, priorizando la experiencia en dispositivos móviles y escalando progresivamente hacia pantallas de mayor tamaño.

Se garantizará una correcta visualización en:

- Teléfonos móviles.
- Tablets.
- Laptops.
- Monitores de escritorio.
- Pantallas de alta resolución.

---

## 14.3 Breakpoints

Se utilizarán los breakpoints definidos por Tailwind CSS.

| Dispositivo | Breakpoint |
|--------------|-----------:|
| Móvil | < 640 px |
| Tablet | ≥ 640 px |
| Laptop | ≥ 1024 px |
| Escritorio | ≥ 1280 px |
| Pantallas grandes | ≥ 1536 px |

---

## 14.4 Adaptación de la Interfaz

La interfaz deberá adaptarse automáticamente según el tamaño de pantalla.

Se contemplarán aspectos como:

- Reorganización de columnas.
- Menús responsivos.
- Galerías adaptables.
- Tablas con desplazamiento horizontal cuando sea necesario.
- Formularios optimizados para dispositivos táctiles.

---

## 14.5 Accesibilidad

El desarrollo seguirá como referencia las recomendaciones **WCAG 2.1 nivel AA**.

Se procurará que el sitio pueda utilizarse por la mayor cantidad de personas posible, independientemente de sus capacidades o del dispositivo empleado.

---

## 14.6 Navegación

La navegación deberá ser accesible mediante:

- Teclado.
- Lectores de pantalla.
- Dispositivos táctiles.

Todos los elementos interactivos deberán ser alcanzables sin necesidad del mouse.

---

## 14.7 Formularios

Todos los formularios deberán incluir:

- Etiquetas asociadas a cada campo.
- Mensajes de error claros.
- Indicación de campos obligatorios.
- Ayudas contextuales cuando sea necesario.
- Confirmación visual tras un envío exitoso.

---

## 14.8 Contenido Multimedia

Las imágenes deberán incluir texto alternativo (ALT) cuando aporten información relevante.

Los videos o contenido audiovisual deberán incorporar subtítulos o descripciones cuando sea posible.

---

## 14.9 Diseño Visual

Se mantendrá una interfaz consistente mediante:

- Contraste adecuado entre texto y fondo.
- Tipografía legible.
- Espaciado uniforme.
- Iconografía consistente.
- Estados visuales para botones, enlaces y formularios.

---

## 14.10 Buenas Prácticas

Durante el desarrollo se evitará:

- Texto con bajo contraste.
- Elementos demasiado pequeños para dispositivos táctiles.
- Contenido que dependa únicamente del color para transmitir información.
- Navegación inconsistente entre páginas.
- Componentes inaccesibles mediante teclado.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-UX-001 | Adaptar la interfaz a diferentes tamaños de pantalla. |
| RF-UX-002 | Permitir navegación mediante teclado. |
| RF-UX-003 | Incorporar etiquetas y mensajes accesibles en formularios. |
| RF-UX-004 | Optimizar la experiencia en dispositivos móviles. |

---

## Requerimientos No Funcionales

| Código | Descripción |
|---------|-------------|
| RNF-UX-001 | Cumplir las recomendaciones WCAG 2.1 AA cuando sea posible. |
| RNF-UX-002 | Garantizar una experiencia consistente en todos los dispositivos. |
| RNF-UX-003 | Mantener una interfaz intuitiva y fácil de utilizar. |
| RNF-UX-004 | Favorecer la accesibilidad para usuarios con distintas capacidades. |

---

## Criterios de Aceptación

Se considerará que el sistema cumple este capítulo cuando:

- El sitio funcione correctamente en móviles, tablets y computadoras.
- La navegación sea posible mediante teclado.
- Los formularios sean comprensibles y accesibles.
- La interfaz mantenga consistencia visual en todas las páginas.
- No existan problemas graves de accesibilidad detectados durante las pruebas.

# Capítulo 15. Casos de Uso

## 15.1 Objetivo

Este capítulo describe los principales flujos de interacción entre los usuarios y el sistema, permitiendo comprender cómo cada funcionalidad contribuye al proceso de atención al cliente y administración del emprendimiento.

---

## 15.2 Actores

| Actor | Descripción |
|--------|-------------|
| Visitante | Usuario que navega el sitio sin autenticarse. |
| Cliente | Persona interesada en solicitar un producto personalizado. |
| Administrador | Responsable de gestionar el contenido y las operaciones del sistema. |

---

# CU-01 – Explorar el sitio web

**Actor:** Visitante

**Objetivo:** Conocer la marca, sus productos y servicios.

**Flujo principal**

1. El visitante ingresa al sitio.
2. Explora la página de inicio.
3. Navega por el catálogo.
4. Consulta productos y categorías.
5. Accede al blog o galería.
6. Decide contactar a Poppy Crafty.

**Resultado esperado**

El visitante obtiene información suficiente para iniciar un pedido o solicitar una cotización.

---

# CU-02 – Consultar un producto

**Actor:** Visitante

**Objetivo:** Obtener información detallada sobre un producto.

**Flujo principal**

1. Accede al catálogo.
2. Filtra o busca un producto.
3. Abre la ficha del producto.
4. Consulta imágenes, descripción, variantes y proceso de compra.
5. Selecciona un medio de contacto.

**Resultado esperado**

El visitante conoce las características del producto y puede iniciar una solicitud.

---

# CU-03 – Solicitar una cotización

**Actor:** Cliente

**Objetivo:** Solicitar información para un producto personalizado.

**Flujo principal**

1. Completa el formulario de solicitud.
2. Describe su idea.
3. Adjunta imágenes de referencia (opcional).
4. Envía la solicitud.
5. El sistema registra la información.
6. El administrador recibe la solicitud.

**Resultado esperado**

La solicitud queda registrada para su posterior atención.

---

# CU-04 – Contactar mediante WhatsApp

**Actor:** Cliente

**Objetivo:** Comunicarse rápidamente con el emprendimiento.

**Flujo principal**

1. El cliente presiona el botón de WhatsApp.
2. Se abre una conversación con un mensaje predefinido.
3. Continúa la comunicación directamente con Poppy Crafty.

**Resultado esperado**

El cliente inicia una conversación sin abandonar el sitio.

---

# CU-05 – Publicar un artículo

**Actor:** Administrador

**Objetivo:** Crear contenido para el blog.

**Flujo principal**

1. Accede al panel administrativo.
2. Ingresa al módulo Blog.
3. Crea un nuevo artículo.
4. Agrega imágenes y contenido.
5. Configura SEO.
6. Publica el artículo.

**Resultado esperado**

El artículo queda disponible para los visitantes.

---

# CU-06 – Crear un producto

**Actor:** Administrador

**Objetivo:** Incorporar un nuevo producto al catálogo.

**Flujo principal**

1. Accede al módulo Productos.
2. Registra la información.
3. Sube imágenes.
4. Asigna categoría.
5. Configura precio de referencia.
6. Publica el producto.

**Resultado esperado**

El producto aparece automáticamente en el catálogo.

---

# CU-07 – Gestionar solicitudes

**Actor:** Administrador

**Objetivo:** Dar seguimiento a los pedidos recibidos.

**Flujo principal**

1. Consulta las solicitudes pendientes.
2. Revisa la información enviada por el cliente.
3. Cambia el estado del proceso.
4. Agrega observaciones internas.
5. Genera una cotización cuando corresponda.

**Resultado esperado**

La solicitud permanece organizada y actualizada durante todo el proceso.

---

# CU-08 – Administrar la galería

**Actor:** Administrador

**Objetivo:** Mostrar trabajos realizados.

**Flujo principal**

1. Accede al módulo Galería.
2. Carga fotografías.
3. Agrega descripción y categoría.
4. Publica el contenido.

**Resultado esperado**

La galería se actualiza automáticamente para los visitantes.

---

# CU-09 – Administrar contenido

**Actor:** Administrador

**Objetivo:** Mantener actualizado el sitio.

**Flujo principal**

El administrador puede:

- Crear, editar y eliminar productos.
- Gestionar categorías.
- Publicar artículos.
- Administrar imágenes.
- Modificar configuraciones.
- Consultar estadísticas.

**Resultado esperado**

Toda la información del sitio permanece actualizada.

---

# CU-10 – Flujo completo del cliente

```text
Visita al sitio
      │
      ▼
Explora el catálogo
      │
      ▼
Consulta un producto
      │
      ▼
Solicita una cotización
      │
      ▼
Administrador revisa la solicitud
      │
      ▼
Se genera una cotización
      │
      ▼
Cliente acepta
      │
      ▼
Producción
      │
      ▼
Entrega
```

Este representa el flujo principal del negocio y servirá como referencia para futuras funcionalidades como pedidos, pagos e inventario.

---

## Requerimientos Funcionales

| Código | Descripción |
|---------|-------------|
| RF-CU-001 | Permitir la navegación completa del sitio sin autenticación. |
| RF-CU-002 | Registrar solicitudes de clientes. |
| RF-CU-003 | Gestionar productos y artículos desde el panel administrativo. |
| RF-CU-004 | Dar seguimiento a las solicitudes hasta su finalización. |

---

## Criterios de Aceptación

Los casos de uso serán considerados completos cuando todos los procesos principales del negocio puedan ejecutarse sin ambigüedades y sirvan como guía para el desarrollo y las pruebas del sistema.

# Capítulo 16. Requerimientos del Sistema

## 16.1 Objetivo

Este capítulo consolida los requerimientos funcionales y no funcionales definidos a lo largo del documento, sirviendo como referencia para el desarrollo, las pruebas y la validación del sistema.

---

## 16.2 Requerimientos Funcionales

### Sitio Web

| Código | Descripción |
|---------|-------------|
| RF-001 | Mostrar información institucional del emprendimiento. |
| RF-002 | Mostrar el catálogo de productos. |
| RF-003 | Permitir filtrar y buscar productos. |
| RF-004 | Mostrar el detalle de cada producto. |
| RF-005 | Mostrar la galería de trabajos realizados. |
| RF-006 | Publicar artículos del blog. |
| RF-007 | Mostrar preguntas frecuentes. |
| RF-008 | Mostrar información de contacto. |

### Clientes

| Código | Descripción |
|---------|-------------|
| RF-009 | Permitir enviar solicitudes mediante formulario. |
| RF-010 | Permitir contactar por WhatsApp. |
| RF-011 | Adjuntar imágenes de referencia en solicitudes. |
| RF-012 | Registrar automáticamente las solicitudes recibidas. |

### Panel Administrativo

| Código | Descripción |
|---------|-------------|
| RF-013 | Administrar productos. |
| RF-014 | Administrar categorías. |
| RF-015 | Administrar artículos del blog. |
| RF-016 | Gestionar archivos multimedia. |
| RF-017 | Gestionar solicitudes y clientes. |
| RF-018 | Generar cotizaciones. |
| RF-019 | Consultar estadísticas del sistema. |
| RF-020 | Configurar parámetros generales del sitio. |

### Seguridad

| Código | Descripción |
|---------|-------------|
| RF-021 | Autenticar administradores. |
| RF-022 | Proteger rutas privadas. |
| RF-023 | Aplicar permisos según el rol del usuario. |
| RF-024 | Registrar acciones importantes mediante auditoría. |

---

## 16.3 Requerimientos No Funcionales

### Rendimiento

| Código | Descripción |
|---------|-------------|
| RNF-001 | Optimizar los tiempos de carga del sitio. |
| RNF-002 | Optimizar imágenes y recursos estáticos. |
| RNF-003 | Implementar estrategias de renderizado adecuadas. |

### Seguridad

| Código | Descripción |
|---------|-------------|
| RNF-004 | Proteger la información mediante autenticación y RLS. |
| RNF-005 | Mantener las credenciales fuera del código fuente. |
| RNF-006 | Validar toda la información recibida por el sistema. |

### Usabilidad

| Código | Descripción |
|---------|-------------|
| RNF-007 | Diseñar una interfaz intuitiva y consistente. |
| RNF-008 | Garantizar compatibilidad con dispositivos móviles. |
| RNF-009 | Cumplir recomendaciones de accesibilidad WCAG 2.1 AA. |

### Escalabilidad

| Código | Descripción |
|---------|-------------|
| RNF-010 | Permitir incorporar nuevos módulos sin rediseñar la arquitectura. |
| RNF-011 | Mantener una estructura modular y reutilizable. |
| RNF-012 | Facilitar el mantenimiento del sistema a largo plazo. |

---

## 16.4 Priorización

Los requerimientos se implementarán según la siguiente prioridad:

| Prioridad | Descripción |
|-----------|-------------|
| Alta | Funcionalidades indispensables para la primera versión. |
| Media | Funcionalidades que mejoran la experiencia del usuario. |
| Baja | Mejoras previstas para futuras versiones. |

---

## 16.5 Trazabilidad

Cada requerimiento deberá estar asociado a:

- Un módulo del sistema.
- Uno o más casos de uso.
- Sus pruebas correspondientes.
- La documentación técnica relacionada.

Esto permitirá validar que todos los requerimientos fueron implementados correctamente.

---

## Criterios de Aceptación

Los requerimientos se considerarán completos cuando:

- Todos puedan ser verificados mediante pruebas.
- No existan ambigüedades en su interpretación.
- Cubran las necesidades funcionales y técnicas del proyecto.
- Sirvan como base para el desarrollo y mantenimiento del sistema.

# Capítulo 17. Diseño de Base de Datos

> **Consolidado en `docs/DATABASE.md` (2026-08-03).** Este capítulo era la
> tercera versión del modelo de datos dentro de este mismo SRS (después de
> los capítulos 6 y 8), la única en español y la más completa — por eso fue
> la base tomada para `docs/DATABASE.md`, que ahora es la fuente única de
> verdad del esquema (incluye además etiquetas de producto, relacionados,
> redirecciones SEO y el catálogo de permisos RBAC que este capítulo no
> cubría). Ver `docs/DECISIONS.md` para el detalle completo de la fusión.

## Fin del SRS

El roadmap y el cronograma de implementación viven en `docs/ROADMAP.md`.
| created_at | TIMESTAMPTZ |
