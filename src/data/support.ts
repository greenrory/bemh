export type SupportSection = {
  id: string
  title: string
  intro: string
  points: string[]
  links?: { label: string; href: string }[]
}

export const supportSections: SupportSection[] = [
  {
    id: "talk",
    title: "I need someone to talk to",
    intro:
      "You don’t have to wait until things feel like an emergency. Reaching out early is a strong choice.",
    points: [
      "Pick one adult you trust—a parent or guardian, school counselor, teacher, or coach.",
      "You can start simply: “Something’s been hard lately. Can we talk?”",
      "If talking feels like too much, you can text or chat with 988 any time.",
    ],
  },
  {
    id: "friend",
    title: "I’m worried about a friend",
    intro: "You don’t have to fix it. You do have to take it seriously.",
    points: [
      "Listen without judging. Let them finish.",
      "Tell them you care and that they’re not a burden.",
      "Tell a trusted adult, even if your friend asked you to keep it secret.",
      "If they may be in danger, call 911 or 988 right away and stay with them if it’s safe.",
    ],
  },
  {
    id: "school",
    title: "School support",
    intro: "There are people at Bishop England whose job is to help.",
    points: [
      "Bishop England has a counseling office. Stop by or message a counselor on Teams.",
      "Your teachers can help too. Message them on Teams or talk to them after class.",
      "Don’t be afraid to reach out. That’s what they’re there for.",
    ],
  },
  {
    id: "adults",
    title: "Trusted adults and professional support",
    intro: "Some things need more support than friends can give—and that’s okay.",
    points: [
      "A parent or guardian can help you connect with a doctor or licensed professional.",
      "Your doctor can talk with you about how you’re feeling and where to go next.",
      "The SAMHSA National Helpline (1-800-662-4357) offers free, confidential referrals 24/7.",
    ],
    links: [
      {
        label: "SAMHSA National Helpline",
        href: "https://www.samhsa.gov/find-help/national-helpline",
      },
    ],
  },
  {
    id: "crisis",
    title: "Crisis resources",
    intro: "Free, confidential, and available 24 hours a day.",
    points: [
      "988 Suicide & Crisis Lifeline: call or text 988, or chat online.",
      "Crisis Text Line: text HOME to 741741.",
      "Emergency services: call 911.",
    ],
    links: [
      { label: "988 Suicide & Crisis Lifeline", href: "https://988lifeline.org/" },
      { label: "Crisis Text Line", href: "https://www.crisistextline.org/" },
    ],
  },
]
