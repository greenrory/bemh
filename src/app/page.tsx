import Image from "next/image"
import type { Metadata } from "next"
import {
  ConvergingLines,
  HeartMark,
  PillarGlyph,
} from "./components/Illustrations"
import { Reveal } from "./components/Reveal"
import {
  Button,
  Container,
  CrisisPanel,
  Eyebrow,
  TextLink,
} from "./components/ui"
import { helpPaths, joinInfo, pillars, values } from "@/data/home"
import { leadership } from "@/data/leadership"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: { absolute: site.title },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <Container className="pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="hero-stagger max-w-3xl">
            <div>
              <Eyebrow>{site.name}</Eyebrow>
            </div>
            <h1 className="mt-6 font-serif text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-navy sm:text-6xl md:text-7xl">
              You don&apos;t have to carry it alone.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl">
              The Mental Health Awareness Club is a student-led community working to make honest
              conversations, meaningful support, and mental-health awareness
              part of everyday life at Bishop England.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/support">Find Support</Button>
              <Button href="/resources" variant="secondary">
                Explore Resources
              </Button>
              <TextLink href="/#join" className="sm:ml-2">
                Join the Club
              </TextLink>
            </div>
          </div>
        </Container>

        <Container>
          <div className="relative h-[240px] overflow-hidden rounded-t-[2rem] sm:h-[340px] md:h-[440px]">
            <Image
              src="/hero.png"
              alt="Illustration of two Bishop England students in uniform sitting on the school steps, talking"
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover object-[center_60%]"
            />
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section aria-labelledby="mission-title" className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
              <h2
                id="mission-title"
                className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl"
              >
                Mental health deserves more than silence.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
                Our mission is to build a school culture in which mental health
                is understood, honest conversations are welcomed, and asking for
                help is recognized as an act of courage.
              </p>
              <div className="mt-8">
                <TextLink href="/#join">Join the Club</TextLink>
              </div>
            </Reveal>

            <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {values.map((value, i) => (
                <Reveal as="li" key={value} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-2xl border-2 border-mist bg-white px-5 py-4">
                    <HeartMark className="h-6 w-6 shrink-0" />
                    <span className="text-[17px] font-semibold text-navy">
                      {value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Why this matters */}
      <section
        aria-labelledby="why-title"
        className="overflow-hidden bg-navy py-24 text-white md:py-36"
      >
        <Container>
          <Reveal className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Eyebrow tone="inverse">Why this matters</Eyebrow>
              <h2
                id="why-title"
                className="mt-6 font-serif text-3xl font-medium leading-[1.25] tracking-tight md:text-[2.75rem]"
              >
                Students carry pressure, uncertainty, loneliness, and
                expectations that are not always visible.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Mental-health awareness begins when we make space for honest
                conversations—and take one another seriously.
              </p>
              <div className="mt-9">
                <Button href="/resources" variant="inverse">
                  Explore Resources
                </Button>
              </div>
            </div>
            <ConvergingLines className="mx-auto max-w-md lg:max-w-none" />
          </Reveal>
        </Container>
      </section>

      {/* What the club does */}
      <section aria-labelledby="pillars-title" className="bg-mist py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2
              id="pillars-title"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl"
            >
              Awareness, turned into action.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white p-7 transition-transform duration-300 ease-calm hover:-translate-y-1 md:p-8">
                  <PillarGlyph icon={pillar.icon} />
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <Button href="/#join">Join the Club</Button>
          </Reveal>
        </Container>
      </section>

      {/* How to help */}
      <section aria-labelledby="help-title" className="bg-white py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Taking a first step</Eyebrow>
            <h2
              id="help-title"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl"
            >
              Support is closer than you think.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              You do not need the perfect words to start a conversation.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {helpPaths.map((path, i) => (
              <Reveal key={path.id} delay={i * 100}>
                <article className="flex h-full flex-col rounded-3xl bg-mist p-7 md:p-10">
                  <h3 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
                    {path.title}
                  </h3>
                  <ol className="mt-6 space-y-4">
                    {path.steps.map((step, n) => (
                      <li key={step} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-evergreen text-sm font-bold text-white"
                        >
                          {n + 1}
                        </span>
                        <span className="pt-1 leading-relaxed text-navy">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-auto pt-8">
                    <Button href={path.action.href} variant="secondary">
                      {path.action.label}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leaders-title" className="bg-white py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2
              id="leaders-title"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl"
            >
              Led by students, for students.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal as="li" key={person.name} delay={i * 80}>
                <article className="h-full rounded-3xl bg-mist p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-evergreen">
                    {person.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">
                    {person.name}
                  </h3>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Join */}
      <section
        id="join"
        aria-labelledby="join-title"
        className="bg-evergreen py-24 text-white md:py-32"
      >
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow tone="inverse">Join the Club</Eyebrow>
            <h2
              id="join-title"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
            >
              Just show up.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Message Rory Green on Teams, or any club officer, if you have
              questions—then come to a meeting.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <h3 className="font-serif text-2xl font-semibold md:text-3xl">
              {joinInfo.meetingsLabel}
            </h3>
            <p className="mt-2 text-white/75">Lunch meetings for the year</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {joinInfo.meetings.map((date) => (
                <li
                  key={date}
                  className="rounded-xl bg-white/10 px-5 py-4 text-[17px] font-semibold"
                >
                  {date}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Urgent support */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <CrisisPanel />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
