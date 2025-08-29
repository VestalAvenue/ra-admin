import React, { useState, useRef } from 'react'

// Converts numeric series into a smooth Catmull-Rom spline path
function buildSplinePath(values, { width, height, padding, max }) {
  const stepX = (width - padding * 2) / (values.length - 1 || 1)
  const valueToY = (v) => padding + (1 - v / max) * (height - padding * 2)
  const pts = values.map((v, i) => [padding + i * stepX, valueToY(v)])
  if (!pts.length) return ''
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const t = 0.5
    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * t
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * t
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * t
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * t
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

const defaultDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

// totalHours: line (spline), spentHours: bars
const Activityhours = ({
  totalHours = [6, 3, 7, 4, 8, 6, 7],
  spentHours = [1, 5, 2, 7, 1, 4, 1],
  days = defaultDays,
  max = 10,
  height = 220,
  width = 360,
  lineColor = '#06b6d4', // cyan-500
  barColor = 'rgba(6,182,212,0.18)',
  dotColor = '#06b6d4',
  performanceText = 'Your work performance is 30% better compare to last month'
}) => {
  const padding = 16
  const svgRef = useRef(null)
  const [hoverIdx, setHoverIdx] = useState(null)
  const stepX = (width - padding * 2) / (totalHours.length - 1 || 1)
  const valueToY = (v) => padding + (1 - v / max) * (height - padding * 2)

  const linePath = buildSplinePath(totalHours, { width, height, padding, max })

  const handleMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const idx = Math.round((x - padding) / stepX)
    if (idx >= 0 && idx < totalHours.length) setHoverIdx(idx)
  }
  const clearHover = () => setHoverIdx(null)

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 shadow-sm flex flex-col">
      <h2 className="text-base font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Activity Hours</h2>
      <div className="relative w-full h-[230px] flex-none" onMouseMove={handleMove} onMouseLeave={clearHover}>
        <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
          {/* horizontal grid lines */}
          {Array.from({ length: 5 }).map((_, i) => {
            const y = padding + (i / 4) * (height - padding * 2)
            return <line key={i} x1={padding} x2={width - padding} y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="3 5" strokeWidth={1} />
          })}
          {/* Bars for spent hours */}
          {spentHours.map((v, i) => {
            const cx = padding + i * stepX
            const barW = Math.min(18, stepX * 0.5)
            const y = valueToY(v)
            return (
              <rect
                key={i}
                x={cx - barW / 2}
                y={y}
                width={barW}
                height={height - padding - y}
                rx={barW / 2}
                fill={barColor}
              />
            )
          })}
          {/* Spline line */}
          <path d={linePath} fill="none" stroke={lineColor} strokeWidth={3} strokeLinecap="round" />
          {/* Shadow glow using same path (blur via filter) */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d={linePath} fill="none" stroke={lineColor} strokeOpacity={0.35} strokeWidth={6} filter="url(#glow)" />
          {/* Dots */}
            {totalHours.map((v, i) => {
              const cx = padding + i * stepX
              const cy = valueToY(v)
              const active = hoverIdx === i
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={7} fill="#fff" opacity={active ? 1 : 0.9} />
                  <circle cx={cx} cy={cy} r={5} fill={dotColor} className="transition-all" />
                </g>
              )
            })}
          {/* Day labels */}
          {days.map((d, i) => {
            const cx = padding + i * stepX
            return (
              <text key={d + i} x={cx} y={height - 4} textAnchor="middle" fontSize={12} fill="#6b7280">{d}</text>
            )
          })}
          {/* Hover tooltip */}
          {hoverIdx != null && (
            <g>
              <line
                x1={padding + hoverIdx * stepX}
                x2={padding + hoverIdx * stepX}
                y1={padding}
                y2={height - padding}
                stroke="#94a3b8"
                strokeDasharray="4 4"
              />
            </g>
          )}
        </svg>
        {hoverIdx != null && (
          <div
            className="absolute top-2 left-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-[11px] shadow-sm"
          >
            <div className="flex gap-2 items-center">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: lineColor }} />
              Total: <strong>{totalHours[hoverIdx]}</strong>
            </div>
            <div className="flex gap-2 items-center">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: barColor }} />
              Spent: <strong>{spentHours[hoverIdx]}</strong>
            </div>
          </div>
        )}
      </div>
  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed">
        {performanceText}
      </p>
    </div>
  )
}

export default Activityhours
