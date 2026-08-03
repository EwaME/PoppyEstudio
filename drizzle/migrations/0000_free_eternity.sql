CREATE TYPE "public"."mensaje_estado" AS ENUM('nuevo', 'leido', 'respondido', 'archivado');--> statement-breakpoint
CREATE TYPE "public"."solicitud_estado" AS ENUM('pendiente', 'en_revision', 'cotizada', 'aceptada', 'rechazada', 'finalizada');--> statement-breakpoint
CREATE TABLE "permissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"modulo" text NOT NULL,
	"accion" text NOT NULL,
	"label" text NOT NULL,
	CONSTRAINT "permissions_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "role_permissions" (
	"role_id" uuid NOT NULL,
	"permission_id" uuid NOT NULL,
	CONSTRAINT "role_permissions_role_id_permission_id_pk" PRIMARY KEY("role_id","permission_id")
);
--> statement-breakpoint
CREATE TABLE "roles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"descripcion" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "roles_nombre_unique" UNIQUE("nombre")
);
--> statement-breakpoint
CREATE TABLE "user_roles" (
	"user_id" uuid NOT NULL,
	"role_id" uuid NOT NULL,
	CONSTRAINT "user_roles_user_id_role_id_pk" PRIMARY KEY("user_id","role_id")
);
--> statement-breakpoint
CREATE TABLE "auditorias" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usuario_id" uuid NOT NULL,
	"accion" text NOT NULL,
	"tabla" text NOT NULL,
	"registro_id" text NOT NULL,
	"entidad" text,
	"antes" jsonb,
	"despues" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nombres" text,
	"apellidos" text,
	"telefono" text,
	"avatar_url" text,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categorias" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"descripcion" text,
	"imagen_url" text,
	"orden" integer DEFAULT 0 NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "categorias_nombre_unique" UNIQUE("nombre"),
	CONSTRAINT "categorias_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "producto_etiqueta_relaciones" (
	"producto_id" uuid NOT NULL,
	"etiqueta_id" uuid NOT NULL,
	CONSTRAINT "producto_etiqueta_relaciones_producto_id_etiqueta_id_pk" PRIMARY KEY("producto_id","etiqueta_id")
);
--> statement-breakpoint
CREATE TABLE "producto_etiquetas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "producto_etiquetas_nombre_unique" UNIQUE("nombre"),
	CONSTRAINT "producto_etiquetas_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "producto_imagenes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"producto_id" uuid NOT NULL,
	"url" text NOT NULL,
	"alt" text,
	"principal" boolean DEFAULT false NOT NULL,
	"orden" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "producto_opciones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"producto_id" uuid NOT NULL,
	"nombre" text NOT NULL,
	"valor" text NOT NULL,
	"incremento_precio" numeric(10, 2) DEFAULT 0 NOT NULL,
	"orden" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "producto_relacionados" (
	"producto_id" uuid NOT NULL,
	"producto_relacionado_id" uuid NOT NULL,
	CONSTRAINT "producto_relacionados_producto_id_producto_relacionado_id_pk" PRIMARY KEY("producto_id","producto_relacionado_id")
);
--> statement-breakpoint
CREATE TABLE "productos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"categoria_id" uuid NOT NULL,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"descripcion_corta" text,
	"descripcion" text,
	"precio_desde" numeric(10, 2),
	"tiempo_entrega" text,
	"destacado" boolean DEFAULT false NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"seo_title" text,
	"seo_description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "productos_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "blog_categorias" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"descripcion" text,
	"orden" integer DEFAULT 0 NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blog_categorias_nombre_unique" UNIQUE("nombre"),
	CONSTRAINT "blog_categorias_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "blog_post_tags" (
	"post_id" uuid NOT NULL,
	"tag_id" uuid NOT NULL,
	CONSTRAINT "blog_post_tags_post_id_tag_id_pk" PRIMARY KEY("post_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "blog_posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"categoria_id" uuid NOT NULL,
	"autor_id" uuid,
	"titulo" text NOT NULL,
	"slug" text NOT NULL,
	"resumen" text,
	"contenido" text NOT NULL,
	"imagen_portada" text,
	"tiempo_lectura" integer,
	"publicado" boolean DEFAULT false NOT NULL,
	"fecha_publicacion" timestamp with time zone,
	"seo_title" text,
	"seo_description" text,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "blog_relacionados" (
	"post_id" uuid NOT NULL,
	"post_relacionado_id" uuid NOT NULL,
	CONSTRAINT "blog_relacionados_post_id_post_relacionado_id_pk" PRIMARY KEY("post_id","post_relacionado_id")
);
--> statement-breakpoint
CREATE TABLE "blog_tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blog_tags_nombre_unique" UNIQUE("nombre"),
	CONSTRAINT "blog_tags_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "galeria" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titulo" text NOT NULL,
	"slug" text NOT NULL,
	"descripcion" text,
	"imagen_url" text NOT NULL,
	"categoria" text,
	"destacado" boolean DEFAULT false NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "galeria_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "clientes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"telefono" text,
	"email" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cotizaciones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"solicitud_id" uuid NOT NULL,
	"subtotal" numeric(10, 2),
	"descuento" numeric(10, 2) DEFAULT 0,
	"total" numeric(10, 2),
	"observaciones" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "cotizaciones_solicitud_id_unique" UNIQUE("solicitud_id")
);
--> statement-breakpoint
CREATE TABLE "mensajes_contacto" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" text NOT NULL,
	"email" text NOT NULL,
	"telefono" text,
	"asunto" text,
	"mensaje" text NOT NULL,
	"estado" "mensaje_estado" DEFAULT 'nuevo' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solicitud_adjuntos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"solicitud_id" uuid NOT NULL,
	"url" text NOT NULL,
	"nombre" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solicitudes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cliente_id" uuid NOT NULL,
	"producto_id" uuid,
	"asunto" text NOT NULL,
	"descripcion" text NOT NULL,
	"estado" "solicitud_estado" DEFAULT 'pendiente' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "configuracion" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre_negocio" text,
	"slogan" text,
	"descripcion" text,
	"telefono" text,
	"email" text,
	"direccion" text,
	"horario" text,
	"facebook" text,
	"instagram" text,
	"tiktok" text,
	"whatsapp" text,
	"logo_url" text,
	"favicon_url" text,
	"seo_title_default" text,
	"seo_description_default" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faq" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"producto_id" uuid,
	"pregunta" text NOT NULL,
	"respuesta" text NOT NULL,
	"orden" integer DEFAULT 0 NOT NULL,
	"publicado" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "redirecciones_seo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url_anterior" text NOT NULL,
	"url_nueva" text NOT NULL,
	"codigo_estado" integer DEFAULT 301 NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "redirecciones_seo_url_anterior_unique" UNIQUE("url_anterior")
);
--> statement-breakpoint
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permissions_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permissions_permission_id_permissions_id_fk" FOREIGN KEY ("permission_id") REFERENCES "public"."permissions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_etiqueta_relaciones" ADD CONSTRAINT "producto_etiqueta_relaciones_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_etiqueta_relaciones" ADD CONSTRAINT "producto_etiqueta_relaciones_etiqueta_id_producto_etiquetas_id_fk" FOREIGN KEY ("etiqueta_id") REFERENCES "public"."producto_etiquetas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_imagenes" ADD CONSTRAINT "producto_imagenes_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_opciones" ADD CONSTRAINT "producto_opciones_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_relacionados" ADD CONSTRAINT "producto_relacionados_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "producto_relacionados" ADD CONSTRAINT "producto_relacionados_producto_relacionado_id_productos_id_fk" FOREIGN KEY ("producto_relacionado_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoria_id_categorias_id_fk" FOREIGN KEY ("categoria_id") REFERENCES "public"."categorias"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_tags" ADD CONSTRAINT "blog_post_tags_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_tags" ADD CONSTRAINT "blog_post_tags_tag_id_blog_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."blog_tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_categoria_id_blog_categorias_id_fk" FOREIGN KEY ("categoria_id") REFERENCES "public"."blog_categorias"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_autor_id_perfiles_id_fk" FOREIGN KEY ("autor_id") REFERENCES "public"."perfiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_relacionados" ADD CONSTRAINT "blog_relacionados_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_relacionados" ADD CONSTRAINT "blog_relacionados_post_relacionado_id_blog_posts_id_fk" FOREIGN KEY ("post_relacionado_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cotizaciones" ADD CONSTRAINT "cotizaciones_solicitud_id_solicitudes_id_fk" FOREIGN KEY ("solicitud_id") REFERENCES "public"."solicitudes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solicitud_adjuntos" ADD CONSTRAINT "solicitud_adjuntos_solicitud_id_solicitudes_id_fk" FOREIGN KEY ("solicitud_id") REFERENCES "public"."solicitudes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solicitudes" ADD CONSTRAINT "solicitudes_cliente_id_clientes_id_fk" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solicitudes" ADD CONSTRAINT "solicitudes_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faq" ADD CONSTRAINT "faq_producto_id_productos_id_fk" FOREIGN KEY ("producto_id") REFERENCES "public"."productos"("id") ON DELETE cascade ON UPDATE no action;