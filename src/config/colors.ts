/**
 * Paleta de marca del proyecto. Fuente canonica para TypeScript.
 * Debe reflejarse en src/app/globals.css dentro de @theme (--color-brand-*),
 * unica fuente real en build de Tailwind v4.
 *
 * Los tokens de shadcn (bg-background, bg-primary, bg-muted, etc) ya cubren
 * el panel admin (UI funcional, neutral). Esta paleta es solo para el sitio
 * publico / marketing, donde se necesita identidad de marca.
 */
export const colors = {
  brand: { primary: '#F8BBD9', primaryHover: '#F48FB1', secondary: '#F7F3EF' },
  feedback: {
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const;
