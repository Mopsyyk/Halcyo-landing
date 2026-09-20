import Link from "next/link"

import { LogoMark } from "@/components/icons"
import { COMING_SOON } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="flex max-w-xl flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-5 w-4 text-foreground" />
            <span className="text-sm font-semibold">Halcyo</span>
          </div>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            Not an official Minecraft product. Not approved by or associated
            with Mojang or Microsoft. Minecraft is a trademark of Mojang AB.
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground md:justify-end md:self-end"
        >
          <Link className="hover:text-foreground" href={COMING_SOON}>
            Source code
          </Link>
          <Link className="hover:text-foreground" href={COMING_SOON}>
            GPL-3.0 license
          </Link>
          <Link className="hover:text-foreground" href={COMING_SOON}>
            Contact
          </Link>
          <Link className="hover:text-foreground" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-foreground" href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
