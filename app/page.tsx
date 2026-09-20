import { Download } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Comparison } from "@/components/comparison"
import { FinePrint } from "@/components/fine-print"
import { LauncherMockup } from "@/components/launcher-mockup"
import { buttonVariants } from "@/components/ui/button"
import { COMING_SOON } from "@/lib/site"

const features = [
  {
    name: "Fabric, set up for you",
    text: "Fabric Loader and Fabric API are installed and kept up to date before every launch.",
  },
  {
    name: "Performance mods",
    text: "Sodium, Lithium, ImmediatelyFast and Iris, each one can be turned off.",
  },
  {
    name: "Your own mods",
    text: "Add the mods you want and the launcher will keep them updated.",
  },
  {
    name: "Your own instance",
    text: "Every setup gets its own folder, mods and memory, kept apart from your other launchers.",
  },
]

const fair = [
  {
    title: "No cheats, in any form",
    text: "Halcyo has no cheats, hacks or hidden features built in, and never gives you an advantage over other players.",
  },
  {
    title: "Nothing leaves your computer",
    text: "There is no Halcyo account, no Halcyo server and no telemetry. The launcher has nowhere to send anything, and nothing to sell.",
  },
  {
    title: "Mods come from their authors",
    text: "Every mod is an unmodified file from Modrinth, under its author's license. Nothing is changed or added to them.",
  },
]

export const metadata: Metadata = { alternates: { canonical: "/" } }

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
        <h1 className="max-w-[17ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl">
          An open-source launcher for Minecraft: Java&nbsp;Edition
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
          Halcyo sets up Minecraft, Fabric and your mods in one click. No ads,
          no tracking, and nothing about you to sell.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={COMING_SOON} className={buttonVariants({ size: "xl" })}>
            <Download data-icon="inline-start" strokeWidth={1.75} />
            Download for Windows
          </Link>
          <Link
            href="/privacy/"
            className={buttonVariants({ variant: "outline", size: "xl" })}
          >
            Privacy policy
          </Link>
        </div>
        <p className="mt-5 text-[13px] text-subtle">
          Free and open source under the GPL-3.0 license.
        </p>

        <div className="mt-14 sm:mt-16">
          <LauncherMockup />
        </div>
      </section>

      <Section
        id="launcher"
        title="Everything before you press Play"
        lead="The launcher handles the setup, so you only choose a version and play."
      >
        <ul className="grid overflow-hidden rounded-[14px] border border-border bg-card sm:grid-cols-2">
          {features.map((item) => (
            <li
              key={item.name}
              className="-mt-px -ml-px flex flex-col gap-1.5 border-t border-l border-border p-6"
            >
              <h3 className="text-[15px] font-medium">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="compare"
        title="How Halcyo compares"
        lead="Lunar, Badlion and Dawn are free, and their own privacy policies explain how your data pays for it. Halcyo has no servers, no ads and nothing to sell."
      >
        <Comparison />
      </Section>

      <Section
        id="fine-print"
        title="The fine print, in their own words"
        lead="Quoted straight from Lunar's and Dawn's own policies. We didn't change a word, we just wrote back."
      >
        <FinePrint />
      </Section>

      <Section
        id="play-fair"
        title="Play fair"
        lead="Halcyo is a launcher, not a cheat client. There are no cheats built into it in any way, and there never will be."
      >
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {fair.map((rule) => (
            <div
              key={rule.title}
              className="border-t border-foreground/80 pt-5"
            >
              <h3 className="text-[15px] font-medium">{rule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string
  title: string
  lead: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl scroll-mt-8 px-4 py-14 last:pb-24 sm:px-6 sm:py-20"
    >
      <h2
        id={`${id}-title`}
        className="text-[28px] leading-tight font-semibold tracking-[-0.025em] sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
        {lead}
      </p>
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  )
}
