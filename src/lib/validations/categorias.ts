import { z } from 'zod';

export const categoriaSchema = z.object({
  nombre: z.string().min(2, 'Minimo 2 caracteres').max(100).trim(),
  slug: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Solo minusculas, numeros y guiones'),
});

export type CategoriaInput = z.infer<typeof categoriaSchema>;
