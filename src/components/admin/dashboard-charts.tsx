'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const MARK = '#F48FB1';

const PRODUCTOS_POR_CATEGORIA = [
  { categoria: 'Camisas', valor: 14 },
  { categoria: 'Tazas', valor: 9 },
  { categoria: 'Coronas', valor: 6 },
  { categoria: 'Bandas', valor: 5 },
  { categoria: 'Papeleria', valor: 4 },
];

const SOLICITUDES_7_DIAS = [
  { dia: 'Lun', valor: 3 },
  { dia: 'Mar', valor: 5 },
  { dia: 'Mie', valor: 2 },
  { dia: 'Jue', valor: 6 },
  { dia: 'Vie', valor: 4 },
  { dia: 'Sab', valor: 7 },
  { dia: 'Dom', valor: 5 },
];

const WIDTH = 480;
const HEIGHT = 220;
const PADDING_BOTTOM = 28;
const PADDING_TOP = 24;
const CHART_H = HEIGHT - PADDING_BOTTOM - PADDING_TOP;

function roundedTopBarPath(x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, h);
  return `M${x},${y + h} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + w - radius},${y} Q${x + w},${y} ${x + w},${y + radius} L${x + w},${y + h} Z`;
}

export function ProductosPorCategoriaChart() {
  const [hover, setHover] = useState<number | null>(null);
  const maxValor = Math.max(...PRODUCTOS_POR_CATEGORIA.map((d) => d.valor));
  const slot = WIDTH / PRODUCTOS_POR_CATEGORIA.length;
  const barWidth = Math.min(24, slot * 0.5);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">Productos por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Productos por categoria">
            <line
              x1={0}
              y1={HEIGHT - PADDING_BOTTOM}
              x2={WIDTH}
              y2={HEIGHT - PADDING_BOTTOM}
              className="stroke-border"
              strokeWidth={1}
            />
            {PRODUCTOS_POR_CATEGORIA.map((d, i) => {
              const barHeight = (d.valor / maxValor) * (CHART_H - 20);
              const x = i * slot + (slot - barWidth) / 2;
              const y = HEIGHT - PADDING_BOTTOM - barHeight;
              const isHover = hover === i;
              return (
                <g key={d.categoria}>
                  <path
                    d={roundedTopBarPath(x, y, barWidth, barHeight, 4)}
                    fill={MARK}
                    opacity={isHover ? 1 : 0.85}
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 6}
                    textAnchor="middle"
                    className="fill-foreground text-[11px] font-medium"
                  >
                    {d.valor}
                  </text>
                  <text
                    x={i * slot + slot / 2}
                    y={HEIGHT - PADDING_BOTTOM + 16}
                    textAnchor="middle"
                    className="fill-muted-foreground text-[10px]"
                  >
                    {d.categoria}
                  </text>
                  <rect
                    x={i * slot}
                    y={0}
                    width={slot}
                    height={HEIGHT - PADDING_BOTTOM}
                    fill="transparent"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  />
                </g>
              );
            })}
          </svg>
          {hover !== null && (
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-md bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background shadow-md"
              style={{
                left: `${((hover + 0.5) / PRODUCTOS_POR_CATEGORIA.length) * 100}%`,
                top: `${(1 - PRODUCTOS_POR_CATEGORIA[hover].valor / maxValor) * ((CHART_H - 20) / HEIGHT) * 100 + (PADDING_TOP / HEIGHT) * 100 - 4}%`,
              }}
            >
              <span className="font-semibold">{PRODUCTOS_POR_CATEGORIA[hover].valor}</span>{' '}
              {PRODUCTOS_POR_CATEGORIA[hover].categoria}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function SolicitudesSemanaChart() {
  const [hover, setHover] = useState<number | null>(null);
  const maxValor = Math.max(...SOLICITUDES_7_DIAS.map((d) => d.valor));
  const stepX = WIDTH / (SOLICITUDES_7_DIAS.length - 1);

  const points = SOLICITUDES_7_DIAS.map((d, i) => ({
    x: i * stepX,
    y: PADDING_TOP + (1 - d.valor / maxValor) * (CHART_H - 10),
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${points[points.length - 1].x},${HEIGHT - PADDING_BOTTOM} L${points[0].x},${HEIGHT - PADDING_BOTTOM} Z`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Solicitudes de la ultima semana
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="w-full"
            role="img"
            aria-label="Solicitudes de la ultima semana"
          >
            <line
              x1={0}
              y1={HEIGHT - PADDING_BOTTOM}
              x2={WIDTH}
              y2={HEIGHT - PADDING_BOTTOM}
              className="stroke-border"
              strokeWidth={1}
            />
            <path d={areaPath} fill={MARK} opacity={0.1} stroke="none" />
            <path d={linePath} fill="none" stroke={MARK} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            {points.map((p, i) => {
              const isHover = hover === i;
              return (
                <g key={SOLICITUDES_7_DIAS[i].dia}>
                  {isHover && (
                    <line
                      x1={p.x}
                      y1={PADDING_TOP}
                      x2={p.x}
                      y2={HEIGHT - PADDING_BOTTOM}
                      className="stroke-border"
                      strokeWidth={1}
                    />
                  )}
                  <circle cx={p.x} cy={p.y} r={isHover ? 6 : 5} fill="white" />
                  <circle cx={p.x} cy={p.y} r={isHover ? 5 : 4} fill={MARK} />
                  <text
                    x={p.x}
                    y={HEIGHT - PADDING_BOTTOM + 16}
                    textAnchor="middle"
                    className={cn('text-[10px]', isHover ? 'fill-foreground font-medium' : 'fill-muted-foreground')}
                  >
                    {SOLICITUDES_7_DIAS[i].dia}
                  </text>
                  <rect
                    x={p.x - stepX / 2}
                    y={0}
                    width={stepX}
                    height={HEIGHT - PADDING_BOTTOM}
                    fill="transparent"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  />
                </g>
              );
            })}
          </svg>
          {hover !== null && (
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-md bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background shadow-md"
              style={{
                left: `${(points[hover].x / WIDTH) * 100}%`,
                top: `${(points[hover].y / HEIGHT) * 100 - 4}%`,
              }}
            >
              <span className="font-semibold">{SOLICITUDES_7_DIAS[hover].valor}</span> solicitudes
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
