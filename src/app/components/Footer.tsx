import Image from "next/image"
import Link from "next/link"
import { joinLink, navLinks, site, supportLink } from "@/data/site"
import { HeartMark } from "./Illustrations"
import { Disclaimer } from "./ui"

export function Footer() {
  const links = [...navLinks, joinLink, supportLink]

  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/mhclogo.png"
              alt={site.name}
              width={108}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-[15px] text-navy/70">{site.fullName}</p>
            <a
              href={site.domain}
              className="mt-1 inline-block text-[15px] text-navy/70 underline-offset-4 hover:underline"
            >
              {site.domainLabel}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-navy underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 rounded-2xl bg-mist px-5 py-4 text-[15px] leading-relaxed text-navy">
          <span className="font-semibold">Urgent: </span>
          {site.crisis}
        </p>

        <Disclaimer className="mt-6 max-w-3xl" />

        <div className="mt-10 flex items-center gap-2 border-t border-navy/10 pt-6 text-sm text-navy/70">
          <HeartMark className="h-4 w-4" />
          <p>
            © {new Date().getFullYear()} {site.name} · {site.school}
          </p>
        </div>
      </div>
    </footer>
  )
}
