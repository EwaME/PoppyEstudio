import { Shirt, Coffee, Sticker, Crown, Ribbon, PartyPopper, FileText, Sparkles, Gift, type LucideIcon } from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  camisas: Shirt,
  tazas: Coffee,
  stickers: Sticker,
  coronas: Crown,
  bandas: Ribbon,
  toppers: PartyPopper,
  papeleria: FileText,
  decoraciones: Sparkles,
};

/** `Gift` es el fallback para categorias sembradas fuera de este set inicial. */
export function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Gift;
}
