export const values = [
  "Listen without judgment",
  "Speak with courage",
  "Protect each person’s dignity",
  "Turn awareness into action",
] as const

export const pillars = [
  {
    icon: "conversation",
    title: "Start conversations",
    description:
      "Make mental health easier to discuss without shame or judgment.",
  },
  {
    icon: "connect",
    title: "Connect students",
    description:
      "Help students recognize where trustworthy support exists and how to reach it.",
  },
  {
    icon: "change",
    title: "Create change",
    description:
      "Build projects and campaigns that strengthen the culture of care at Bishop England.",
  },
] as const

export type PillarIcon = (typeof pillars)[number]["icon"]

export const helpPaths = [
  {
    id: "yourself",
    title: "If you’re struggling",
    steps: [
      "Notice what you’re carrying. It counts, even if it seems small.",
      "Tell a trusted adult—a parent, counselor, teacher, or coach.",
      "If you feel unsafe, get help right away.",
    ],
    action: { href: "/support", label: "Find Support" },
  },
  {
    id: "friend",
    title: "If you’re worried about a friend",
    steps: [
      "Listen. You do not need the perfect words.",
      "Take what they say seriously.",
      "Bring in a trusted adult, even if they ask you not to.",
    ],
    action: { href: "/resources#friend", label: "How to support a friend" },
  },
] as const
