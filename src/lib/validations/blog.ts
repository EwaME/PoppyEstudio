import { z } from 'zod';

export const blogPostSchema = z.object({
  categoriaId: z.string().uuid('Selecciona una categoria'),
  titulo: z.string().min(2, 'Minimo 2 caracteres').max(200).trim(),
  slug: z
    .string()
    .min(2)
    .max(220)
    .regex(/^[a-z0-9-]+$/, 'Solo minusculas, numeros y guiones'),
  resumen: z.string().max(300).optional(),
  contenido: z.string().min(10, 'El contenido no puede estar vacio'),
  imagenPortada: z.union([z.literal(''), z.string().url('URL invalida')]).optional(),
  tiempoLectura: z.number().int().positive().optional(),
  publicado: z.boolean(),
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;
