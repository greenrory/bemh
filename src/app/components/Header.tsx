"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, type CSSProperties } from "react"
import { joinLink, navLinks, site, supportLink } from "@/data/site"
import { cn } from "@/utils"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[4.5rem] md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center py-2"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/mhclogo.png"
            alt={site.name}
            width={108}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {navLinks.map((link) => {
            const active = link.href === pathname
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[15px] underline-offset-[6px] transition-colors hover:text-navy hover:underline",
                  active ? "font-semibold text-navy" : "text-navy/70"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={supportLink.href}
            aria-current={pathname === supportLink.href ? "page" : undefined}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border-2 border-safety bg-white px-3 text-sm font-semibold text-safety transition-colors hover:bg-safety hover:text-white md:px-4"
          >
            <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
            <span className="sm:hidden">Get help</span>
            <span className="hidden sm:inline">{supportLink.label}</span>
          </Link>

          <Link
            href={joinLink.href}
            style={{ "--ledge-color": "#083F31" } as CSSProperties}
            className="hidden min-h-[40px] items-center rounded-xl bg-evergreen px-4 text-sm font-semibold text-white shadow-ledge transition-[transform,box-shadow,background-color] duration-150 hover:bg-be-green active:translate-y-[3px] active:shadow-none sm:inline-flex"
          >
            {joinLink.label}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-navy hover:bg-mist md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span
                className={cn(
                  "h-0.5 rounded bg-current transition-transform duration-200",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-0.5 rounded bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 rounded bg-current transition-transform duration-200",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-navy/10 bg-white md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={link.href === pathname ? "page" : undefined}
                className="flex min-h-[48px] items-center text-lg text-navy underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="sm:hidden">
            <Link
              href={joinLink.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center text-lg font-semibold text-evergreen underline-offset-4 hover:underline"
            >
              {joinLink.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
