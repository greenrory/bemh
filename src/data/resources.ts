export type Resource = {
  name: string
  offers: string
  audience: string
  access: string
  urgent: boolean
  /** External URL. Omit for guidance or placeholders. */
  href?: string
}

export type ResourceCategory = {
  id: string
  title: string
  summary: string
  resources: Resource[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: "yourself",
    title: "Supporting yourself",
    summary: "Where to start when something feels heavy.",
    resources: [
      {
        name: "A trusted adult",
        offers:
          "Someone who can listen, take you seriously, and help you find the next step.",
        audience: "Any student",
        access:
          "Talk to a parent or guardian, school counselor, teacher, coach, or another adult you trust.",
        urgent: false,
      },
      {
        name: "988 Suicide & Crisis Lifeline",
        offers:
          "Free, confidential support from trained counselors for anyone in emotional distress—not only in a crisis.",
        audience: "Anyone in the United States",
        access: "Call or text 988, or chat online. Available 24/7.",
        urgent: true,
        href: "https://988lifeline.org/",
      },
    ],
  },
  {
    id: "friend",
    title: "Supporting a friend",
    summary: "You don’t have to fix it. You do have to take it seriously.",
    resources: [
      {
        name: "Listen and stay with them",
        offers:
          "Let them talk without judging or rushing to solutions. Ask how you can help.",
        audience: "Students worried about a friend",
        access: "Start with something simple: “I’ve noticed you seem off. Want to talk?”",
        urgent: false,
      },
      {
        name: "Bring in a trusted adult",
        offers:
          "Adults can connect your friend to support you can’t provide on your own.",
        audience: "Students worried about a friend",
        access:
          "Tell a parent, counselor, or teacher—even if your friend asked you to keep it secret. Their safety matters more.",
        urgent: false,
      },
      {
        name: "If a friend may be in danger",
        offers: "Immediate help from emergency or crisis services.",
        audience: "Anyone",
        access: "Call 911, or call or text 988. Stay with them if it’s safe.",
        urgent: true,
      },
    ],
  },
  {
    id: "stress",
    title: "Stress and academic pressure",
    summary: "Pressure is real. Asking for help early makes a difference.",
    resources: [
      {
        name: "Your teachers",
        offers:
          "Extra help, clarity on assignments, and sometimes flexibility when you’re overwhelmed.",
        audience: "Any student",
        access: "Talk to them after class or email them before things pile up.",
        urgent: false,
      },
      {
        name: "Academic support at Bishop England",
        offers: "Extra help from the people who teach you.",
        audience: "Bishop England students",
        access:
          "Ask your teachers. Message them on Teams, catch them after class, or email them.",
        urgent: false,
      },
    ],
  },
  {
    id: "understanding",
    title: "Understanding mental health",
    summary: "Trustworthy information, not guesses.",
    resources: [
      {
        name: "National Institute of Mental Health",
        offers:
          "Plain-language information about mental health from the U.S. government’s research agency.",
        audience: "Anyone who wants to learn",
        access: "Visit nimh.nih.gov.",
        urgent: false,
        href: "https://www.nimh.nih.gov/",
      },
      {
        name: "SAMHSA",
        offers:
          "Information on mental health and substance use from the U.S. Substance Abuse and Mental Health Services Administration.",
        audience: "Students, families, and educators",
        access: "Visit samhsa.gov.",
        urgent: false,
        href: "https://www.samhsa.gov/",
      },
    ],
  },
  {
    id: "school",
    title: "School support",
    summary: "People at Bishop England who are here for you.",
    resources: [
      {
        name: "School counseling",
        offers: "Bishop England has a counseling office. Counselors are there to talk with you.",
        audience: "Bishop England students",
        access: "Stop by the counseling office or message a counselor on Teams. Don’t be afraid to reach out.",
        urgent: false,
      },
      {
        name: "Trusted faculty and staff",
        offers: "Adults on campus you can go to when something is wrong.",
        audience: "Bishop England students",
        access: "Talk to any teacher, coach, or staff member you trust.",
        urgent: false,
      },
    ],
  },
  {
    id: "crisis",
    title: "Crisis and professional resources",
    summary: "For urgent situations and longer-term care.",
    resources: [
      {
        name: "Emergency services",
        offers: "Immediate help when someone may be in danger.",
        audience: "Anyone",
        access: "Call 911.",
        urgent: true,
      },
      {
        name: "988 Suicide & Crisis Lifeline",
        offers: "Free, confidential crisis support, 24/7.",
        audience: "Anyone in the United States",
        access: "Call or text 988, or chat online.",
        urgent: true,
        href: "https://988lifeline.org/",
      },
      {
        name: "Crisis Text Line",
        offers: "Free, 24/7 support by text with a trained crisis counselor.",
        audience: "Anyone in the United States",
        access: "Text HOME to 741741.",
        urgent: true,
        href: "https://www.crisistextline.org/",
      },
      {
        name: "SAMHSA National Helpline",
        offers:
          "Free, confidential treatment referral and information, 24/7.",
        audience: "Individuals and families",
        access: "Call 1-800-662-4357.",
        urgent: false,
        href: "https://www.samhsa.gov/find-help/national-helpline",
      },
      {
        name: "A doctor or licensed professional",
        offers: "Ongoing, professional mental-health care.",
        audience: "Anyone",
        access: "Ask a parent or guardian, your doctor, or a school counselor to help you connect.",
        urgent: false,
      },
    ],
  },
]
