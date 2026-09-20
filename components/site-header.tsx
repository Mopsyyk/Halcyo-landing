import Link from "next/link"

import { GithubIcon, LogoMark } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { COMING_SOON } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

export function SiteHeader() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4 sm:px-6">
        <Link
          href="/"
          className="-ml-1 flex items-center gap-2.5 rounded-lg px-1 py-1"
        >
          <LogoMark className="h-6 w-5 text-foreground" />
          <span className="text-[15px] font-semibold tracking-tight">
            Halcyo
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={COMING_SOON}
            aria-label="Source code on GitHub"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "text-muted-foreground"
            )}
          >
            <GithubIcon className="size-[18px]" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
