import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"
import { site, supportLink } from "@/data/site"
import { cn } from "@/utils"

type ButtonVariant = "primary" | "secondary" | "urgent" | "inverse"

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold shadow-ledge transition-[transform,box-shadow,background-color] duration-150 ease-calm active:translate-y-[3px] active:shadow-none"

const buttonVariants: Record<ButtonVariant, { className: string; ledge: string }> = {
  primary: {
    className: "bg-evergreen text-white hover:bg-be-green",
    ledge: "#083F31",
  },
  secondary: {
    className: "border-2 border-evergreen/20 bg-white text-evergreen hover:bg-mist",
    ledge: "rgba(12, 90, 70, 0.2)",
  },
  urgent: {
    className: "bg-safety text-white hover:bg-safety-deep",
    ledge: "#861A12",
  },
  inverse: {
    className: "bg-white text-navy hover:bg-mist",
    ledge: "rgba(255, 255, 255, 0.35)",
  },
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  external?: boolean
}) {
  const v = buttonVariants[variant]
  const style = { "--ledge-color": v.ledge } as CSSProperties
  const classes = cn(buttonBase, v.className, className)

  if (external || href.startsWith("tel:") || href.startsWith("sms:")) {
    const newTab = external
    return (
      <a
        href={href}
        className={classes}
        style={style}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {newTab && <ExternalMark />}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  )
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-[15px] font-semibold text-evergreen underline-offset-4 hover:underline",
        className
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-evergreen underline underline-offset-4 hover:text-be-green",
        className
      )}
    >
      {children}
      <ExternalMark />
    </a>
  )
}

export function ExternalMark() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10" />
        <path d="M9 2h5v5M14 2 7.5 8.5" />
      </svg>
      <span className="sr-only">(opens a new website)</span>
    </>
  )
}

export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "inverse"
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "inverse" ? "bg-white/10 text-white/75" : "bg-mist text-evergreen"
      )}
    >
      {children}
    </p>
  )
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "urgent"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-semibold",
        tone === "urgent" && "bg-navy text-white",
        tone === "neutral" && "bg-mist text-evergreen"
      )}
    >
      {children}
    </span>
  )
}

/** Safety red is reserved for the Call 911 button so it stands out. */
export function CrisisPanel({
  id,
  showSupportLink = true,
  className,
}: {
  id?: string
  showSupportLink?: boolean
  className?: string
}) {
  return (
    <aside
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      aria-label={id ? undefined : "Urgent support"}
      className={cn(
        "rounded-3xl bg-mist p-6 md:p-8",
        className
      )}
    >
      <p
        id={id ? `${id}-title` : undefined}
        className="text-xs font-bold uppercase tracking-[0.16em] text-navy"
      >
        Urgent support
      </p>
      <p className="mt-3 max-w-2xl font-serif text-xl leading-snug text-navy md:text-2xl">
        {site.crisis}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="tel:911" variant="urgent">
          Call 911
        </Button>
        <Button href="tel:988" variant="secondary">
          Call 988
        </Button>
        <Button href="sms:988" variant="secondary">
          Text 988
        </Button>
      </div>
      {showSupportLink && (
        <p className="mt-5 text-[15px] text-navy/70">
          Not an emergency, but need help?{" "}
          <Link
            href={supportLink.href}
            className="font-semibold text-evergreen underline underline-offset-4"
          >
            See what to do next
          </Link>
        </p>
      )}
    </aside>
  )
}

export function Disclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-sm leading-relaxed text-navy/70", className)}>
      {site.disclaimer}
    </p>
  )
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="hero-stagger max-w-3xl">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <div className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl">
        {children}
      </div>
    </div>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  )
}
