// ============================================
// PoppyEstudioSashDesigner.jsx
// Editor plano de Bandas Personalizadas
// React + Tailwind CSS (sin dependencias externas)
// ============================================

import React, { useState, useRef, useCallback, useEffect } from 'react'

// ---- Configuración ----
const FABRIC_PRESETS = [
  { hex: '#FFD700', name: 'Amarillo' },
  { hex: '#FF6B6B', name: 'Rojo' },
  { hex: '#4ECDC4', name: 'Turquesa' },
  { hex: '#9B59B6', name: 'Morado' },
  { hex: '#2ECC71', name: 'Verde' },
  { hex: '#3498DB', name: 'Azul' },
  { hex: '#F39C12', name: 'Naranja' },
  { hex: '#1ABC9C', name: 'Esmeralda' },
  { hex: '#E91E63', name: 'Fucsia' },
  { hex: '#FFFFFF', name: 'Blanco' },
  { hex: '#000000', name: 'Negro' },
]

const EMOJIS = ['⭐','🎂','🎉','🎓','⚽','🏀','🦋','👑','❤️','🌸','🎈','🎁']

const BORDER_STYLES = [
  { value: 'simple', label: 'Línea simple' },
  { value: 'double', label: 'Doble línea' },
  { value: 'zigzag', label: 'Zig-zag' },
  { value: 'dotted', label: 'Punteado' },
  { value: 'none', label: 'Sin borde' },
]

const FINISHES = [
  { value: 'satin', label: 'Satinado' },
  { value: 'matte', label: 'Mate' },
  { value: 'glossy', label: 'Brillante' },
  { value: 'velvet', label: 'Terciopelo' },
]

// ---- Helpers Canvas ----
function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1,3),16),
    parseInt(hex.slice(3,5),16),
    parseInt(hex.slice(5,7),16)
  ]
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

// ---- Componente Canvas de la Banda ----
function SashCanvas({ fabricColor, fabricFinish, borderStyle, slots, canvasRef }) {
  const internalRef = useRef(null)
  const actualRef = canvasRef || internalRef

  const draw = useCallback(() => {
    const canvas = actualRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height
    const pad = 20
    const sashW = W - pad * 2
    const sashH = 180
    const sashX = pad
    const sashY = (H - sashH) / 2
    const r = 16

    ctx.clearRect(0, 0, W, H)

    // Sombra
    ctx.save()
    ctx.shadowColor = 'rgba(0,0,0,0.15)'
    ctx.shadowBlur = 24
    ctx.shadowOffsetY = 8
    ctx.fillStyle = fabricColor
    roundRect(ctx, sashX, sashY, sashW, sashH, r)
    ctx.fill()
    ctx.restore()

    // Fondo tela
    ctx.fillStyle = fabricColor
    roundRect(ctx, sashX, sashY, sashW, sashH, r)
    ctx.fill()

    // Textura de tela
    const [fr, fg, fb] = hexToRgb(fabricColor)
    ctx.save()
    roundRectPath(ctx, sashX, sashY, sashW, sashH, r)
    ctx.clip()

    ctx.globalAlpha = 0.06
    for (let i = sashX; i < sashX + sashW; i += 3) {
      ctx.fillStyle = (i % 6 === 0) ? '#000' : '#fff'
      ctx.fillRect(i, sashY, 1, sashH)
    }
    for (let j = sashY; j < sashY + sashH; j += 3) {
      ctx.fillStyle = (j % 6 === 0) ? '#000' : '#fff'
      ctx.fillRect(sashX, j, sashW, 1)
    }
    ctx.globalAlpha = 1.0

    // Acabado
    if (fabricFinish === 'satin' || fabricFinish === 'glossy') {
      const grad = ctx.createLinearGradient(sashX, sashY, sashX + sashW, sashY + sashH)
      grad.addColorStop(0, 'rgba(255,255,255,0.18)')
      grad.addColorStop(0.4, 'rgba(255,255,255,0)')
      grad.addColorStop(0.6, 'rgba(255,255,255,0)')
      grad.addColorStop(1, 'rgba(255,255,255,0.12)')
      ctx.fillStyle = grad
      ctx.fillRect(sashX, sashY, sashW, sashH)
    }
    if (fabricFinish === 'glossy') {
      const g2 = ctx.createLinearGradient(sashX, sashY, sashX, sashY + sashH)
      g2.addColorStop(0, 'rgba(255,255,255,0.25)')
      g2.addColorStop(0.5, 'rgba(255,255,255,0)')
      g2.addColorStop(1, 'rgba(255,255,255,0.05)')
      ctx.fillStyle = g2
      ctx.fillRect(sashX, sashY, sashW, sashH)
    }
    if (fabricFinish === 'velvet') {
      ctx.globalAlpha = 0.1
      for (let k = 0; k < 800; k++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff'
        ctx.fillRect(sashX + Math.random() * sashW, sashY + Math.random() * sashH, 2, 2)
      }
      ctx.globalAlpha = 1.0
    }
    ctx.restore()

    // Borde decorativo
    if (borderStyle !== 'none') {
      ctx.save()
      roundRectPath(ctx, sashX + 4, sashY + 4, sashW - 8, sashH - 8, r - 4)
      ctx.clip()
      if (borderStyle === 'simple') {
        ctx.strokeStyle = 'rgba(0,0,0,0.15)'
        ctx.lineWidth = 3
        roundRect(ctx, sashX + 6, sashY + 6, sashW - 12, sashH - 12, r - 6)
        ctx.stroke()
      } else if (borderStyle === 'double') {
        ctx.strokeStyle = 'rgba(0,0,0,0.12)'
        ctx.lineWidth = 2
        roundRect(ctx, sashX + 6, sashY + 6, sashW - 12, sashH - 12, r - 6)
        ctx.stroke()
        roundRect(ctx, sashX + 10, sashY + 10, sashW - 20, sashH - 20, r - 10)
        ctx.stroke()
      } else if (borderStyle === 'zigzag') {
        ctx.strokeStyle = 'rgba(0,0,0,0.15)'
        ctx.lineWidth = 2
        const step = 12
        ctx.beginPath()
        for (let i = sashX + 6; i < sashX + sashW - 6; i += step) {
          ctx.lineTo(i, sashY + 6 + (i % (step*2) < step ? 0 : 6))
        }
        ctx.stroke()
        ctx.beginPath()
        for (let i = sashX + 6; i < sashX + sashW - 6; i += step) {
          ctx.lineTo(i, sashY + sashH - 6 - (i % (step*2) < step ? 0 : 6))
        }
        ctx.stroke()
      } else if (borderStyle === 'dotted') {
        ctx.strokeStyle = 'rgba(0,0,0,0.2)'
        ctx.lineWidth = 2
        ctx.setLineDash([6, 6])
        roundRect(ctx, sashX + 8, sashY + 8, sashW - 16, sashH - 16, r - 8)
        ctx.stroke()
        ctx.setLineDash([])
      }
      ctx.restore()
    }

    // Slots
    const slotW = sashW / 3
    const slotPadding = 16

    slots.forEach((slot, idx) => {
      const sx = sashX + idx * slotW
      const sy = sashY + slotPadding
      const sw = slotW - slotPadding * 2
      const sh = sashH - slotPadding * 2

      if (idx > 0) {
        ctx.strokeStyle = 'rgba(0,0,0,0.06)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(sashX + idx * slotW, sashY + 20)
        ctx.lineTo(sashX + idx * slotW, sashY + sashH - 20)
        ctx.stroke()
      }

      if (slot.type === 'text' && slot.text) {
        ctx.save()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = 'bold ' + slot.size + 'px system-ui, sans-serif'

        ctx.fillStyle = 'rgba(0,0,0,0.15)'
        ctx.fillText(slot.text, sx + slotW/2 + 1, sy + sh/2 + 2)

        if (slot.color.toUpperCase() === '#8B6914' || slot.color.toUpperCase() === '#FFD700') {
          const tgrad = ctx.createLinearGradient(sx + slotW/2 - sw/2, sy, sx + slotW/2 + sw/2, sy + sh)
          tgrad.addColorStop(0, '#B8860B')
          tgrad.addColorStop(0.3, '#FFD700')
          tgrad.addColorStop(0.5, '#DAA520')
          tgrad.addColorStop(0.7, '#FFD700')
          tgrad.addColorStop(1, '#B8860B')
          ctx.fillStyle = tgrad
        } else {
          ctx.fillStyle = slot.color
        }
        ctx.fillText(slot.text, sx + slotW/2, sy + sh/2)

        ctx.globalAlpha = 0.25
        ctx.fillStyle = '#fff'
        ctx.fillText(slot.text, sx + slotW/2 - 0.5, sy + sh/2 - 1.5)
        ctx.globalAlpha = 1.0
        ctx.restore()
      }

      if (slot.type === 'icon' && slot.icon) {
        ctx.save()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = slot.size + 'px serif'
        ctx.fillText(slot.icon, sx + slotW/2, sy + sh/2)
        ctx.restore()
      }

      if (slot.type === 'image' && slot.image) {
        const img = slot.image
        const aspect = img.width / img.height
        let iw = slot.size
        let ih = slot.size / aspect
        if (ih > sh - 10) {
          ih = sh - 10
          iw = ih * aspect
        }
        ctx.save()
        roundRectPath(ctx, sx + slotW/2 - iw/2, sy + sh/2 - ih/2, iw, ih, 8)
        ctx.clip()
        ctx.drawImage(img, sx + slotW/2 - iw/2, sy + sh/2 - ih/2, iw, ih)
        ctx.restore()
      }
    })

    // Puntas en V
    ctx.fillStyle = fabricColor
    ctx.beginPath()
    ctx.moveTo(sashX + sashW, sashY + 10)
    ctx.lineTo(sashX + sashW + 20, sashY + sashH/2)
    ctx.lineTo(sashX + sashW, sashY + sashH - 10)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(sashX, sashY + 10)
    ctx.lineTo(sashX - 20, sashY + sashH/2)
    ctx.lineTo(sashX, sashY + sashH - 10)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = 'rgba(0,0,0,0.12)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(sashX + sashW, sashY + 10)
    ctx.lineTo(sashX + sashW + 20, sashY + sashH/2)
    ctx.lineTo(sashX + sashW, sashY + sashH - 10)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(sashX, sashY + 10)
    ctx.lineTo(sashX - 20, sashY + sashH/2)
    ctx.lineTo(sashX, sashY + sashH - 10)
    ctx.stroke()
  }, [fabricColor, fabricFinish, borderStyle, slots])

  useEffect(() => {
    draw()
  }, [draw])

  return (
    <canvas
      ref={actualRef}
      width={900}
      height={300}
      className="max-w-full h-auto rounded-lg shadow-lg"
    />
  )
}

// ---- Panel de un Slot ----
function SlotPanel({ index, slot, onChange }) {
  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const img = new Image()
      img.onload = () => {
        onChange(index, { ...slot, image: img })
      }
      img.src = ev.target.result
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        const img = new Image()
        img.onload = () => onChange(index, { ...slot, image: img })
        img.src = ev.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-3">
      {/* Selector de tipo */}
      <div className="flex gap-2">
        {['text','icon','image'].map(t => (
          <button
            key={t}
            onClick={() => onChange(index, { ...slot, type: t })}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
              slot.type === t
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {t === 'text' ? 'Texto' : t === 'icon' ? 'Icono' : 'Imagen'}
          </button>
        ))}
      </div>

      {/* Campos según tipo */}
      {slot.type === 'text' && (
        <>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">Texto</label>
            <input
              type="text"
              value={slot.text}
              onChange={e => onChange(index, { ...slot, text: e.target.value })}
              placeholder="Escribe aquí..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-500">Color</label>
              <input
                type="color"
                value={slot.color}
                onChange={e => onChange(index, { ...slot, color: e.target.value })}
                className="h-9 w-full cursor-pointer rounded-lg border border-gray-300 p-1"
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-500">Tamaño</label>
              <input
                type="range"
                min={20}
                max={80}
                value={slot.size}
                onChange={e => onChange(index, { ...slot, size: parseInt(e.target.value) })}
                className="w-full accent-gray-900"
              />
            </div>
          </div>
        </>
      )}

      {slot.type === 'icon' && (
        <>
          <div>
            <label className="mb-2 block text-xs font-medium text-gray-500">Selecciona un icono</label>
            <div className="grid grid-cols-6 gap-2">
              {EMOJIS.map(em => (
                <button
                  key={em}
                  onClick={() => onChange(index, { ...slot, icon: em })}
                  className={`flex aspect-square items-center justify-center rounded-lg border text-xl transition-all ${
                    slot.icon === em
                      ? 'border-gray-900 bg-gray-100'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">Tamaño</label>
            <input
              type="range"
              min={30}
              max={100}
              value={slot.size}
              onChange={e => onChange(index, { ...slot, size: parseInt(e.target.value) })}
              className="w-full accent-gray-900"
            />
          </div>
        </>
      )}

      {slot.type === 'image' && (
        <>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center text-sm transition-all ${
              slot.image
                ? 'border-green-400 bg-green-50 text-green-600'
                : 'border-gray-300 bg-white text-gray-400 hover:border-gray-900 hover:text-gray-600'
            }`}
          >
            {slot.image ? (
              <div className="flex flex-col items-center gap-2">
                <img src={slot.image.src} alt="preview" className="max-h-16 rounded" />
                <span className="text-xs">Imagen cargada ✓</span>
              </div>
            ) : (
              <div>Arrastra una imagen o haz clic para subir</div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">Tamaño</label>
            <input
              type="range"
              min={40}
              max={120}
              value={slot.size}
              onChange={e => onChange(index, { ...slot, size: parseInt(e.target.value) })}
              className="w-full accent-gray-900"
            />
          </div>
        </>
      )}
    </div>
  )
}

// ---- App Principal ----
export default function PoppyEstudioSashDesigner() {
  const canvasRef = useRef(null)
  const [activeSlot, setActiveSlot] = useState(0)
  const [fabricColor, setFabricColor] = useState('#FFD700')
  const [fabricFinish, setFabricFinish] = useState('satin')
  const [borderStyle, setBorderStyle] = useState('simple')
  const [slots, setSlots] = useState([
    { type: 'text', text: 'HAPPY BIRTHDAY', color: '#000000', size: 48, icon: '⭐', image: null },
    { type: 'text', text: 'EDWARD', color: '#8B6914', size: 56, icon: '⭐', image: null },
    { type: 'text', text: '', color: '#000000', size: 40, icon: '⭐', image: null },
  ])

  const updateSlot = (idx, newSlot) => {
    setSlots(prev => {
      const next = [...prev]
      next[idx] = newSlot
      return next
    })
  }

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'banda-poppy-estudio.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const fabricLabel = FABRIC_PRESETS.find(p => p.hex === fabricColor)?.name || 'Personalizado'

  const summaryText = slots.map((s, i) => {
    if (s.type === 'text' && s.text) return `Espacio ${i+1}: Texto "${s.text}"`
    if (s.type === 'icon') return `Espacio ${i+1}: Icono ${s.icon}`
    if (s.type === 'image' && s.image) return `Espacio ${i+1}: Imagen subida`
    return `Espacio ${i+1}: Vacío`
  }).join('%0A')

  const waLink = `https://wa.me/?text=${encodeURIComponent(
    `Hola Poppy Estudio! Quiero encargar una banda personalizada:

🎨 Color cinta: ${fabricLabel}
${summaryText.replace(/%0A/g, '
')}

¿Me pueden dar precio y tiempo de entrega?`
  )}`

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium text-gray-900 md:text-3xl">Poppy Estudio</h1>
          <p className="mt-1 text-gray-500">Diseña tu banda personalizada con 3 espacios</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Preview */}
          <div className="flex-1">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-sm">
              <SashCanvas
                canvasRef={canvasRef}
                fabricColor={fabricColor}
                fabricFinish={fabricFinish}
                borderStyle={borderStyle}
                slots={slots}
              />
            </div>
            <button
              onClick={handleDownload}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Descargar imagen
            </button>
          </div>

          {/* Controls */}
          <div className="w-full max-w-sm space-y-4">
            {/* Fabric */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Configuración de la cinta</h3>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-medium text-gray-500">Color de fondo</label>
                <div className="mb-2 flex flex-wrap gap-2">
                  {FABRIC_PRESETS.map(p => (
                    <button
                      key={p.hex}
                      onClick={() => setFabricColor(p.hex)}
                      title={p.name}
                      className={`h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 ${
                        fabricColor === p.hex ? 'border-gray-900 scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: p.hex }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={fabricColor}
                  onChange={e => setFabricColor(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-lg border border-gray-300 p-1"
                />
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-xs font-medium text-gray-500">Acabado</label>
                <select
                  value={fabricFinish}
                  onChange={e => setFabricFinish(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  {FINISHES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-500">Borde decorativo</label>
                <select
                  value={borderStyle}
                  onChange={e => setBorderStyle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  {BORDER_STYLES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>
            </div>

            {/* Slots */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Contenido de la banda</h3>
              <div className="mb-3 flex gap-2">
                {[0,1,2].map(i => (
                  <button
                    key={i}
                    onClick={() => setActiveSlot(i)}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                      activeSlot === i
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Espacio {i+1}
                  </button>
                ))}
              </div>
              <SlotPanel
                index={activeSlot}
                slot={slots[activeSlot]}
                onChange={updateSlot}
              />
            </div>

            {/* Summary + WhatsApp */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Resumen del diseño</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Color cinta:</span>
                  <span className="font-medium text-gray-900">{fabricLabel}</span>
                </div>
                {slots.map((s, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-500">Espacio {i+1}:</span>
                    <span className="font-medium text-gray-900">
                      {s.type === 'text' && s.text ? `Texto: ${s.text}`
                        : s.type === 'icon' ? `Icono: ${s.icon}`
                        : s.type === 'image' && s.image ? 'Imagen subida'
                        : 'Vacío'}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar diseño por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
