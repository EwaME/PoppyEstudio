import { z } from 'zod';

export const productoSchema = z.object({
  categoriaId: z.string().uuid('Selecciona una categoria'),
  nombre: z.string().min(2, 'Minimo 2 caracteres').max(150).trim(),
  slug: z
    .string()
    .min(2)
    .max(180)
    .regex(/^[a-z0-9-]+$/, 'Solo minusculas, numeros y guiones'),
  descripcionCorta: z.string().max(300).optional(),
  descripcion: z.string().max(2000).optional(),
  // Precio orientativo, no final -- Poppy Crafty personaliza bajo pedido, sin inventario.
  precioDesde: z.number().positive('El precio debe ser mayor a 0').optional(),
  tiempoEntrega: z.string().max(100).optional(),
});

export type ProductoInput = z.infer<typeof productoSchema>;
