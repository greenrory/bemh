import type { Metadata } from "next"
import Link from "next/link"
import {
  Button,
  Container,
  CrisisPanel,
  Disclaimer,
  ExternalLink,
  PageIntro,
} from "../components/ui"
import { supportSections } from "@/data/support"

export const metadata: Metadata = {
  title: "Need Support Now",
  description:
    "What to do next if you or a friend are struggling—urgent help, trusted adults, school support, and crisis resources.",
  alternates: { canonical: "/support" },
}

export default function SupportPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <PageIntro eyebrow="Need support now" title="You deserve to be taken seriously.">
            <p>
              If something feels wrong, overwhelming, or unsafe, reaching out to
              a trusted adult is a meaningful first step.
            </p>
          </PageIntro>

          <CrisisPanel id="danger" showSupportLink={false} className="mt-10" />

          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {supportSections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="inline-flex min-h-[44px] items-center rounded-xl border-2 border-navy/15 bg-white px-4 text-[15px] font-semibold text-evergreen transition-colors hover:bg-mist"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl">
          <div className="space-y-5">
            {supportSections.map((s) => (
              <article
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="rounded-3xl bg-mist p-7 md:p-10"
              >
                <h2
                  id={`${s.id}-title`}
                  className="font-serif text-2xl font-semibold text-navy md:text-3xl"
                >
                  {s.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-navy/70">{s.intro}</p>

                <ul className="mt-6 space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-navy">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-be-green"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {s.links && (
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <ExternalLink href={l.href}>{l.label}</ExternalLink>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-3xl border-2 border-mist p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="font-serif text-xl font-semibold text-navy md:text-2xl">
              Looking for more?
            </p>
            <Button href="/resources" variant="secondary">
              Explore Resources
            </Button>
          </div>

          <Disclaimer className="mt-12" />
        </Container>
      </section>
    </>
  )
}
