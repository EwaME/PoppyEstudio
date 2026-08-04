import {
  Shirt,
  Coffee,
  Sticker,
  Crown,
  Ribbon,
  Cake,
  FileText,
  Sparkles,
  Gift,
  Circle,
  Balloon,
  GraduationCap,
  Handbag,
  Rabbit,
  type LucideIcon,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  camisas: Shirt,
  tazas: Coffee,
  stickers: Sticker,
  coronas: Crown,
  bandas: Ribbon,
  toppers: Cake,
  papeleria: FileText,
  decoraciones: Sparkles,
  esferas: Circle,
  cajas: Gift,
  'globos-decorativos': Balloon,
  'cabezones-graduados': GraduationCap,
  'bolsas-de-regalo': Handbag,
  'peluches-de-fieltro': Rabbit,
};

/** `Gift` es el fallback para categorias sembradas fuera de este set inicial. */
export function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Gift;
}
