import type { PillarIcon } from "@/data/home"
import { cn } from "@/utils"

const HEART =
  "M12 21s-7.5-4.6-9.6-9.4C.9 8 3 4 6.8 4c2.2 0 3.7 1.2 5.2 3 1.5-1.8 3-3 5.2-3C21 4 23.1 8 21.6 11.6 19.5 16.4 12 21 12 21Z"

export function HeartMark({
  className,
  outline = false,
}: {
  className?: string
  outline?: boolean
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path
        d={HEART}
        className="heart-pulse"
        fill={outline ? "none" : "#00874F"}
        stroke={outline ? "currentColor" : "#FFFFFF"}
        strokeWidth={outline ? 1.75 : 1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Several separate paths converging on one heart: a weight being shared. */
export function ConvergingLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 260"
      fill="none"
      aria-hidden="true"
      className={cn("w-full", className)}
    >
      <g stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round">
        <path className="draw-line" pathLength={1} d="M10 40 C 140 40, 200 120, 300 128" />
        <path className="draw-line" pathLength={1} d="M10 110 C 120 110, 200 132, 300 132" />
        <path className="draw-line" pathLength={1} d="M10 180 C 130 180, 210 140, 300 136" />
        <path className="draw-line" pathLength={1} d="M10 240 C 150 240, 220 150, 300 140" />
      </g>
      {[40, 110, 180, 240].map((y) => (
        <circle key={y} cx="10" cy={y} r="7" fill="#FFFFFF" />
      ))}
      <g transform="translate(300 62) scale(7.2)">
        <path
          d={HEART}
          className="heart-pulse heart-pulse-once"
          fill="#00874F"
          stroke="#FFFFFF"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

/** Chairs arranged in a circle for conversation, with one open seat. */
export function ConversationCircle({ className }: { className?: string }) {
  const chairs = 7
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      aria-hidden="true"
      className={cn("w-full", className)}
    >
      <circle cx="140" cy="140" r="118" fill="#E8F2EC" />
      {Array.from({ length: chairs }).map((_, i) => {
        const angle = (i / chairs) * 360 - 90
        const rad = (angle * Math.PI) / 180
        const x = (140 + 84 * Math.cos(rad)).toFixed(2)
        const y = (140 + 84 * Math.sin(rad)).toFixed(2)
        const open = i === 0
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${angle + 90})`}>
            <rect
              x="-17"
              y="-15"
              width="34"
              height="30"
              rx="9"
              fill={open ? "#FFFFFF" : "#0C5A46"}
              stroke={open ? "#0C5A46" : "none"}
              strokeWidth={open ? 2.5 : 0}
              strokeDasharray={open ? "5 5" : undefined}
            />
            <rect
              x="-17"
              y="-23"
              width="34"
              height="8"
              rx="4"
              fill={open ? "#E8F2EC" : "#083F31"}
            />
          </g>
        )
      })}
      <g transform="translate(116 118) scale(2)">
        <path
          d={HEART}
          className="heart-pulse heart-pulse-once"
          fill="#00874F"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function PillarGlyph({ icon }: { icon: PillarIcon }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-evergreen"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon === "conversation" && (
          <>
            <path d="M5 8.5A3.5 3.5 0 0 1 8.5 5h9A3.5 3.5 0 0 1 21 8.5v5a3.5 3.5 0 0 1-3.5 3.5H12l-5 4v-4.3A3.5 3.5 0 0 1 5 13.5Z" />
            <path d="M24 12h.5a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-2 3.2V27l-4.5-3.5H18a3.5 3.5 0 0 1-3.4-2.7" />
          </>
        )}
        {icon === "connect" && (
          <>
            <circle cx="7" cy="9" r="3" />
            <circle cx="25" cy="9" r="3" />
            <circle cx="16" cy="24" r="3" />
            <path d="M9.5 11 14 21.5M22.5 11 18 21.5M10 9h12" />
          </>
        )}
        {icon === "change" && (
          <>
            <path d="M16 28V15" />
            <path d="M16 17c0-5 3.5-8.5 9-8.5 0 5.5-3.5 8.5-9 8.5Z" />
            <path d="M16 20c0-4-2.8-7-7.5-7 0 4.4 2.8 7 7.5 7Z" />
          </>
        )}
      </svg>
    </span>
  )
}
