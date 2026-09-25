import type { Metadata } from "next"
import Link from "next/link"
import {
  Container,
  Disclaimer,
  ExternalLink,
  PageIntro,
  Pill,
} from "../components/ui"
import { resourceCategories, type Resource } from "@/data/resources"
import { supportLink } from "@/data/site"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Trustworthy mental-health resources for Bishop England students—supporting yourself, supporting a friend, school support, and crisis help.",
  alternates: { canonical: "/resources" },
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <details className="group rounded-2xl border-2 border-mist bg-white transition-colors open:border-navy/15">
      <summary className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl p-5 md:p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-navy">{resource.name}</h3>
            {resource.urgent ? (
              <Pill tone="urgent">Urgent · 24/7</Pill>
            ) : (
              <Pill>Non-urgent</Pill>
            )}
          </div>
          <p className="mt-2 leading-relaxed text-navy/70">{resource.offers}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist text-evergreen transition-transform duration-300 ease-calm group-open:rotate-45"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M8 3v10M3 8h10" />
          </svg>
        </span>
      </summary>

      <dl className="grid gap-4 border-t-2 border-mist px-5 pb-6 pt-5 text-[15px] sm:grid-cols-2 md:px-6">
        <div>
          <dt className="font-semibold text-navy">Who it’s for</dt>
          <dd className="mt-1 text-navy/70">{resource.audience}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">How to access it</dt>
          <dd className="mt-1 text-navy/70">{resource.access}</dd>
        </div>
        {resource.href && (
          <div className="sm:col-span-2">
            <dt className="sr-only">Website</dt>
            <dd>
              <ExternalLink href={resource.href}>
                Visit {resource.name}
              </ExternalLink>
              <span className="ml-2 text-sm text-navy/70">Leaves this website</span>
            </dd>
          </div>
        )}
      </dl>
    </details>
  )
}

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <PageIntro eyebrow="Resources" title="Know where to turn.">
            <p>
              Trustworthy places to learn, get help, and help someone else. Tap
              any resource for details.
            </p>
          </PageIntro>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-mist px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-navy">
              <span className="font-semibold">In danger right now?</span>{" "}
              Call 911, or call or text 988.
            </p>
            <Link
              href={supportLink.href}
              className="text-[15px] font-semibold text-evergreen underline underline-offset-4"
            >
              {supportLink.label}
            </Link>
          </div>

          <nav aria-label="Resource categories" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {resourceCategories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`#${c.id}`}
                    className="inline-flex min-h-[44px] items-center rounded-xl border-2 border-navy/15 bg-white px-4 text-[15px] font-semibold text-evergreen transition-colors hover:bg-mist"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {resourceCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-title`}
                className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div>
                  <h2
                    id={`${category.id}-title`}
                    className="font-serif text-3xl font-semibold leading-tight text-navy"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-navy/70">{category.summary}</p>
                </div>
                <div className="space-y-3">
                  {category.resources.map((r) => (
                    <ResourceCard key={`${category.id}-${r.name}`} resource={r} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Disclaimer className="mt-20 max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
