import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        evergreen: "#0C5A46",
        "evergreen-deep": "#083F31",
        "be-green": "#00874F",
        navy: "#0A163C",
        mist: "#E8F2EC",
        safety: "#B42318",
        "safety-deep": "#861A12",
      },
      boxShadow: {
        // Solid "ledge" under buttons; it collapses on press for tactile feedback.
        ledge: "0 3px 0 0 var(--ledge-color)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
export default config
