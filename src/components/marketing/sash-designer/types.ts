export type SlotTipo = 'texto' | 'icono' | 'imagen';

export type Slot = {
  tipo: SlotTipo;
  texto: string;
  color: string;
  tamano: number;
  icono: string;
  imagen: HTMLImageElement | null;
};

export const FABRIC_PRESETS = [
  { hex: '#FFD700', nombre: 'Amarillo' },
  { hex: '#FF6B6B', nombre: 'Rojo' },
  { hex: '#4ECDC4', nombre: 'Turquesa' },
  { hex: '#9B59B6', nombre: 'Morado' },
  { hex: '#2ECC71', nombre: 'Verde' },
  { hex: '#3498DB', nombre: 'Azul' },
  { hex: '#F39C12', nombre: 'Naranja' },
  { hex: '#F8BBD9', nombre: 'Rosa Poppy' },
  { hex: '#E91E63', nombre: 'Fucsia' },
  { hex: '#FFFFFF', nombre: 'Blanco' },
  { hex: '#000000', nombre: 'Negro' },
];

export const ICONOS = ['⭐', '🎂', '🎉', '🎓', '⚽', '🏀', '🦋', '👑', '❤️', '🌸', '🎈', '🎁'];

export const ESTILOS_BORDE = [
  { value: 'simple', label: 'Línea simple' },
  { value: 'doble', label: 'Doble línea' },
  { value: 'zigzag', label: 'Zig-zag' },
  { value: 'punteado', label: 'Punteado' },
  { value: 'ninguno', label: 'Sin borde' },
] as const;

export type EstiloBorde = (typeof ESTILOS_BORDE)[number]['value'];

export const ACABADOS = [
  { value: 'satinado', label: 'Satinado' },
  { value: 'mate', label: 'Mate' },
  { value: 'brillante', label: 'Brillante' },
  { value: 'terciopelo', label: 'Terciopelo' },
] as const;

export type Acabado = (typeof ACABADOS)[number]['value'];

export const SLOT_INICIAL: Slot = {
  tipo: 'texto',
  texto: '',
  color: '#000000',
  tamano: 48,
  icono: '⭐',
  imagen: null,
};
