import type { Metadata } from "next"
import Link from "next/link"

import { LogoMark } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Halcyo downloads, source code and contact are coming soon.",
  robots: { index: false },
  alternates: { canonical: "/coming-soon/" },
}

export default function ComingSoonPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:py-36">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card">
        <LogoMark className="h-7 w-6 text-foreground" />
      </div>
      <h1 className="mt-8 text-4xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
        Coming soon
      </h1>
      <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted-foreground">
        The download, the source code on GitHub and the issue tracker will be
        published with the first release of Halcyo.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "xl" }),
          "mt-9"
        )}
      >
        Back to home
      </Link>
    </section>
  )
}
