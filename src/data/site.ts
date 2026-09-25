export const site = {
  name: "Mental Health Awareness Club",
  fullName: "Bishop England Mental Health Awareness Club",
  domain: "https://bemh.club",
  domainLabel: "bemh.club",
  school: "Bishop England High School",
  schoolUrl: "https://www.behs.com/",
  title: "Mental Health Awareness Club | Bishop England",
  description:
    "The Mental Health Awareness Club is Bishop England’s student-led club building a culture of conversation, connection, support, and action.",
  disclaimer:
    "The Mental Health Awareness Club is a student-led organization and does not provide counseling, diagnosis, treatment, or emergency services. Students seeking personal support should contact a parent or guardian, school counselor, trusted adult, licensed professional, or an appropriate crisis service.",
  crisis:
    "If you or someone else may be in immediate danger, call 911. In the United States, call or text 988 to reach the Suicide & Crisis Lifeline.",
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
] as const

export const supportLink = { href: "/support", label: "Need Support Now" } as const

export const joinLink = { href: "/#join", label: "Join the Club" } as const
