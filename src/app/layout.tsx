import type { Metadata, Viewport } from "next"
import { Fraunces, Inter } from "next/font/google"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Providers } from "./components/providers"
import { site } from "@/data/site"
import { cn } from "@/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.fullName,
  alternateName: site.name,
  url: site.domain,
  logo: `${site.domain}/mhclogo.png`,
  description: site.description,
  parentOrganization: {
    "@type": "HighSchool",
    name: site.school,
    url: site.schoolUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, fraunces.variable)}>
      <body className="min-h-screen bg-white font-sans text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Header />
          <main id="main" className="pt-16 md:pt-[4.5rem]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
