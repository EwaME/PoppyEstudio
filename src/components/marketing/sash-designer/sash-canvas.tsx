'use client';

import { useCallback, useEffect, type RefObject } from 'react';
import type { Acabado, EstiloBorde, Slot } from './types';

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function SashCanvas({
  canvasRef,
  fabricColor,
  fabricFinish,
  borderStyle,
  slots,
}: {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  fabricColor: string;
  fabricFinish: Acabado;
  borderStyle: EstiloBorde;
  slots: Slot[];
}) {
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const pad = 20;
    const sashW = W - pad * 2;
    const sashH = 180;
    const sashX = pad;
    const sashY = (H - sashH) / 2;
    const r = 16;

    ctx.clearRect(0, 0, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = fabricColor;
    roundRect(ctx, sashX, sashY, sashW, sashH, r);
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = fabricColor;
    roundRect(ctx, sashX, sashY, sashW, sashH, r);
    ctx.fill();

    ctx.save();
    roundRect(ctx, sashX, sashY, sashW, sashH, r);
    ctx.clip();

    ctx.globalAlpha = 0.06;
    for (let i = sashX; i < sashX + sashW; i += 3) {
      ctx.fillStyle = i % 6 === 0 ? '#000' : '#fff';
      ctx.fillRect(i, sashY, 1, sashH);
    }
    for (let j = sashY; j < sashY + sashH; j += 3) {
      ctx.fillStyle = j % 6 === 0 ? '#000' : '#fff';
      ctx.fillRect(sashX, j, sashW, 1);
    }
    ctx.globalAlpha = 1.0;

    if (fabricFinish === 'satinado' || fabricFinish === 'brillante') {
      const grad = ctx.createLinearGradient(sashX, sashY, sashX + sashW, sashY + sashH);
      grad.addColorStop(0, 'rgba(255,255,255,0.18)');
      grad.addColorStop(0.4, 'rgba(255,255,255,0)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0)');
      grad.addColorStop(1, 'rgba(255,255,255,0.12)');
      ctx.fillStyle = grad;
      ctx.fillRect(sashX, sashY, sashW, sashH);
    }
    if (fabricFinish === 'brillante') {
      const g2 = ctx.createLinearGradient(sashX, sashY, sashX, sashY + sashH);
      g2.addColorStop(0, 'rgba(255,255,255,0.25)');
      g2.addColorStop(0.5, 'rgba(255,255,255,0)');
      g2.addColorStop(1, 'rgba(255,255,255,0.05)');
      ctx.fillStyle = g2;
      ctx.fillRect(sashX, sashY, sashW, sashH);
    }
    if (fabricFinish === 'terciopelo') {
      ctx.globalAlpha = 0.1;
      for (let k = 0; k < 800; k++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
        ctx.fillRect(sashX + Math.random() * sashW, sashY + Math.random() * sashH, 2, 2);
      }
      ctx.globalAlpha = 1.0;
    }
    ctx.restore();

    if (borderStyle !== 'ninguno') {
      ctx.save();
      roundRect(ctx, sashX + 4, sashY + 4, sashW - 8, sashH - 8, r - 4);
      ctx.clip();
      if (borderStyle === 'simple') {
        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 3;
        roundRect(ctx, sashX + 6, sashY + 6, sashW - 12, sashH - 12, r - 6);
        ctx.stroke();
      } else if (borderStyle === 'doble') {
        ctx.strokeStyle = 'rgba(0,0,0,0.12)';
        ctx.lineWidth = 2;
        roundRect(ctx, sashX + 6, sashY + 6, sashW - 12, sashH - 12, r - 6);
        ctx.stroke();
        roundRect(ctx, sashX + 10, sashY + 10, sashW - 20, sashH - 20, r - 10);
        ctx.stroke();
      } else if (borderStyle === 'zigzag') {
        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 2;
        const step = 12;
        ctx.beginPath();
        for (let i = sashX + 6; i < sashX + sashW - 6; i += step) {
          ctx.lineTo(i, sashY + 6 + (i % (step * 2) < step ? 0 : 6));
        }
        ctx.stroke();
        ctx.beginPath();
        for (let i = sashX + 6; i < sashX + sashW - 6; i += step) {
          ctx.lineTo(i, sashY + sashH - 6 - (i % (step * 2) < step ? 0 : 6));
        }
        ctx.stroke();
      } else if (borderStyle === 'punteado') {
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        roundRect(ctx, sashX + 8, sashY + 8, sashW - 16, sashH - 16, r - 8);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();
    }

    const slotW = sashW / 3;
    const slotPadding = 16;

    slots.forEach((slot, idx) => {
      const sx = sashX + idx * slotW;
      const sy = sashY + slotPadding;
      const sh = sashH - slotPadding * 2;

      if (idx > 0) {
        ctx.strokeStyle = 'rgba(0,0,0,0.06)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sashX + idx * slotW, sashY + 20);
        ctx.lineTo(sashX + idx * slotW, sashY + sashH - 20);
        ctx.stroke();
      }

      if (slot.tipo === 'texto' && slot.texto) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `bold ${slot.tamano}px system-ui, sans-serif`;

        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillText(slot.texto, sx + slotW / 2 + 1, sy + sh / 2 + 2);

        ctx.fillStyle = slot.color;
        ctx.fillText(slot.texto, sx + slotW / 2, sy + sh / 2);

        ctx.globalAlpha = 0.25;
        ctx.fillStyle = '#fff';
        ctx.fillText(slot.texto, sx + slotW / 2 - 0.5, sy + sh / 2 - 1.5);
        ctx.globalAlpha = 1.0;
        ctx.restore();
      }

      if (slot.tipo === 'icono' && slot.icono) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${slot.tamano}px serif`;
        ctx.fillText(slot.icono, sx + slotW / 2, sy + sh / 2);
        ctx.restore();
      }

      if (slot.tipo === 'imagen' && slot.imagen) {
        const img = slot.imagen;
        const aspect = img.width / img.height;
        let iw = slot.tamano;
        let ih = slot.tamano / aspect;
        if (ih > sh - 10) {
          ih = sh - 10;
          iw = ih * aspect;
        }
        ctx.save();
        roundRect(ctx, sx + slotW / 2 - iw / 2, sy + sh / 2 - ih / 2, iw, ih, 8);
        ctx.clip();
        ctx.drawImage(img, sx + slotW / 2 - iw / 2, sy + sh / 2 - ih / 2, iw, ih);
        ctx.restore();
      }
    });

    ctx.fillStyle = fabricColor;
    ctx.beginPath();
    ctx.moveTo(sashX + sashW, sashY + 10);
    ctx.lineTo(sashX + sashW + 20, sashY + sashH / 2);
    ctx.lineTo(sashX + sashW, sashY + sashH - 10);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(sashX, sashY + 10);
    ctx.lineTo(sashX - 20, sashY + sashH / 2);
    ctx.lineTo(sashX, sashY + sashH - 10);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sashX + sashW, sashY + 10);
    ctx.lineTo(sashX + sashW + 20, sashY + sashH / 2);
    ctx.lineTo(sashX + sashW, sashY + sashH - 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sashX, sashY + 10);
    ctx.lineTo(sashX - 20, sashY + sashH / 2);
    ctx.lineTo(sashX, sashY + sashH - 10);
    ctx.stroke();
  }, [canvasRef, fabricColor, fabricFinish, borderStyle, slots]);

  useEffect(() => {
    draw();
  }, [draw]);

  return <canvas ref={canvasRef} width={900} height={300} className="h-auto w-full max-w-full rounded-lg shadow-lg" />;
}
