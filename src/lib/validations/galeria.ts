import { z } from 'zod';

export const galeriaSchema = z.object({
  titulo: z.string().min(2, 'Minimo 2 caracteres').max(150).trim(),
  slug: z
    .string()
    .min(2)
    .max(180)
    .regex(/^[a-z0-9-]+$/, 'Solo minusculas, numeros y guiones'),
  descripcion: z.string().max(1000).optional(),
  categoria: z.string().max(80).optional(),
  destacado: z.boolean().default(false),
});

export type GaleriaInput = z.infer<typeof galeriaSchema>;
