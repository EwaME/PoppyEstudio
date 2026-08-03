CREATE TABLE "testimonios" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre_cliente" text NOT NULL,
	"rol" text,
	"texto" text NOT NULL,
	"estrellas" integer NOT NULL,
	"destacado" boolean DEFAULT false NOT NULL,
	"activo" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
