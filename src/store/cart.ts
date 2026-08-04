import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = { slug: string; nombre: string; cantidad: number; precioDesde: number | null };

type CartState = {
  items: CartItem[];
  addItem: (slug: string, nombre: string, cantidad: number, precioDesde: number | null) => void;
  removeItem: (slug: string) => void;
  updateCantidad: (slug: string, cantidad: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (slug, nombre, cantidad, precioDesde) =>
        set((state) => {
          const existente = state.items.find((item) => item.slug === slug);
          if (existente) {
            return {
              items: state.items.map((item) =>
                item.slug === slug ? { ...item, cantidad: item.cantidad + cantidad } : item
              ),
            };
          }
          return { items: [...state.items, { slug, nombre, cantidad, precioDesde }] };
        }),
      removeItem: (slug) => set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
      updateCantidad: (slug, cantidad) =>
        set((state) => {
          if (cantidad < 1) return { items: state.items.filter((item) => item.slug !== slug) };
          return { items: state.items.map((item) => (item.slug === slug ? { ...item, cantidad } : item)) };
        }),
      clear: () => set({ items: [] }),
    }),
    { name: 'poppy-carrito' }
  )
);
