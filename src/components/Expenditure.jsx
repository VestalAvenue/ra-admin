import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Lightweight inline multi-series line chart (no external chart lib) using SVG.
// Accepts two series arrays of numbers 0-100 representing percentages.
function MiniLineChart({ series = [], height = 140, strokeColors = [] }) {
  const width = 320
  const padding = 8
  const [hoverIdx, setHoverIdx] = useState(null)
  const [hoverX, setHoverX] = useState(null)
  const containerRef = useRef(null)
  if (!series.length) return null

  const maxPoints = series[0].length
  const stepX = (width - padding * 2) / (maxPoints - 1 || 1)

  const valueToY = (v) => padding + (1 - v / 100) * (height - padding * 2)

  // Catmull-Rom to Bezier conversion for smooth spline path
  const buildPath = (points) => {
    const coords = points.map((v, i) => [padding + i * stepX, valueToY(v)])
    if (coords.length < 2) return ''
    let d = `M${coords[0][0]},${coords[0][1]}`
    for (let i = 0; i < coords.length - 1; i++) {
      const p0 = coords[i - 1] || coords[i]
      const p1 = coords[i]
      const p2 = coords[i + 1]
      const p3 = coords[i + 2] || p2
      const tension = 0.5 // 0..1
      const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension
      const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension
      const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension
      const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension
      d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
    }
    return d
  }

  const paths = series.map((points, idx) => {
    const d = buildPath(points)
    return (
      <path
        key={idx}
        d={d}
        fill="none"
        stroke={strokeColors[idx] || 'currentColor'}
        strokeWidth={3}
        className="[filter:drop-shadow(0_2px_2px_rgba(0,0,0,0.12))]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  })

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const clamped = Math.min(Math.max(x - padding, 0), width - padding)
    const idx = Math.round(clamped / stepX)
    setHoverIdx(idx)
    setHoverX(padding + idx * stepX)
  }

  const handleLeave = () => {
    setHoverIdx(null)
    setHoverX(null)
  }

  const tooltipValues = hoverIdx != null ? series.map(s => s[hoverIdx]) : []
  const incomeVal = tooltipValues[0]
  const totalVal = tooltipValues[1]

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchMove={(e) => {
        if (!e.touches.length) return
        const t = e.touches[0]
        handleMove({ clientX: t.clientX })
      }}
      onTouchEnd={handleLeave}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
        <line
          x1={padding}
          x2={width - padding}
          y1={height - padding}
          y2={height - padding}
          stroke="#E5E7EB"
          strokeWidth={1}
        />
        {/* Hover crosshair vertical line */}
        {hoverX != null && (
          <line
            x1={hoverX}
            x2={hoverX}
            y1={padding}
            y2={height - padding}
            stroke="#9CA3AF"
            strokeDasharray="4 4"
            strokeWidth={1}
          />
        )}
        {paths}
        {/* Circles at hovered points */}
        {hoverIdx != null && series.map((s, idx) => {
          const cx = padding + hoverIdx * stepX
            const cy = valueToY(s[hoverIdx])
            return (
              <g key={idx}>
                <circle cx={cx} cy={cy} r={7} fill="#fff" opacity={0.9} />
                <circle cx={cx} cy={cy} r={5} fill={strokeColors[idx] || 'currentColor'} />
              </g>
            )
        })}
        {/* Larger invisible rect for pointer capture */}
        <rect x={0} y={0} width={width} height={height} fill="transparent" />
      </svg>
      {hoverIdx != null && (
        <div
          className="absolute z-10 px-3 py-2 bg-white dark:bg-zinc-800 rounded-md shadow-md border border-zinc-200 dark:border-zinc-700 text-xs font-medium flex flex-col gap-1"
          style={{
            top: 8,
            left: hoverX + 12 > width - 120 ? hoverX - 120 : hoverX + 12,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-[#F4B400]" />
            <span className="text-zinc-500 dark:text-zinc-400">Income:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-100 ml-1">{incomeVal}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-[#65A30D]" />
            <span className="text-zinc-500 dark:text-zinc-400">Total:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-100 ml-1">{totalVal}</span>
          </div>
        </div>
      )}
    </div>
  )
}

const Expenditure = ({
  from = 'Feb 02',
  to = 'Feb 08',
  income = 68200,
  total = 12200,
  incomeLabel = 'Income',
  totalLabel = 'Total',
  onPrev,
  onNext,
}) => {
  const formatMoney = (n) =>
    Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  // Example synthetic chart data (values 0-100)
  const incomeSeries = [10, 65, 30, 80, 45, 95, 70]
  const totalSeries = [55, 25, 60, 35, 85, 55, 60]

  return (
    <div className="relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 shadow-sm  gap-5 w-full max-w-sm">
      {/* Header Date Range */}
      <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        <button
          type="button"
          onClick={onPrev}
          className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          aria-label="Previous range"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span>{from} - {to}</span>
        <button
          type="button"
          onClick={onNext}
          className="ml-auto p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          aria-label="Next range"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Metric Pills */}
    <div className="flex gap-3 items-stretch">
    <div className="flex flex-col items-start gap-1 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700 px-4 py-3 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_0_3px_rgba(251,191,36,0.25)]" />
      <span className="font-semibold text-zinc-800 dark:text-zinc-100 text-lg leading-none whitespace-nowrap">{formatMoney(income)}</span>
          </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{incomeLabel}</span>
        </div>
    <div className="flex flex-col items-start gap-1 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700 px-4 py-3 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime-500 shadow-[0_0_0_3px_rgba(132,204,22,0.25)]" />
      <span className="font-semibold text-zinc-800 dark:text-zinc-100 text-lg leading-none whitespace-nowrap">{formatMoney(total)}</span>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{totalLabel}</span>
        </div>
      </div>

      {/* Chart */}
      <div className="-mt-2">
        <MiniLineChart
          series={[incomeSeries, totalSeries]}
          strokeColors={["#F4B400", "#65A30D"]}
        />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        In the symphony of success, our total project income resonates as the crescendo of our endeavors.
      </p>

      {/* Floating Action Button (example) */}
      <button
        type="button"
        className="absolute bottom-24 right-4 sm:bottom-4 sm:right-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl p-3 shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label="Open actions"
      >
        {/* Simple icon replacement */}
        <div className="size-5 flex items-center justify-center font-bold">◎</div>
      </button>
    </div>
  )
}

export default Expenditure
