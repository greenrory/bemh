"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/utils"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li"
}

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-calm",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}
