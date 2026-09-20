import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Halcyo: open-source Minecraft launcher",
    template: "%s \u00b7 Halcyo",
  },
  description:
    "Halcyo is an open-source launcher for Minecraft: Java Edition. No ads, no tracking, no data sold, nothing running on anyone else's servers.",
  openGraph: {
    type: "website",
    siteName: "Halcyo",
    url: "/",
    title: "Halcyo: open-source Minecraft launcher",
    description:
      "An open-source launcher for Minecraft: Java Edition. No ads, no tracking, nothing to sell.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Halcyo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halcyo: open-source Minecraft launcher",
    description:
      "An open-source launcher for Minecraft: Java Edition. No ads, no tracking, nothing to sell.",
    images: ["/og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased", sans.variable, mono.variable)}
    >
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
