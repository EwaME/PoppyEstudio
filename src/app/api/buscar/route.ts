import { NextResponse, type NextRequest } from 'next/server';
import { getProductosFiltrados } from '@/lib/db/queries/productos';

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim() ?? '';
  if (q.length < 2) return NextResponse.json([]);

  const productos = await getProductosFiltrados({ q, limit: 3 });
  return NextResponse.json(
    productos.map((producto) => ({
      slug: producto.slug,
      nombre: producto.nombre,
      categoriaNombre: producto.categoriaNombre,
    }))
  );
}
