import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import Link from "next/link"

import { COMING_SOON } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for using the Halcyo launcher.",
  alternates: { canonical: "/terms/" },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="September 19, 2026">
      <p>
        These terms apply to the Halcyo launcher and this website. By using them
        you agree to what is written below.
      </p>

      <h2>License</h2>
      <p>
        Halcyo is free software, released under the{" "}
        <Link href={COMING_SOON}>GNU General Public License v3.0</Link>. You may
        use, study, share and modify it under the terms of that license. Mods
        downloaded by the launcher, such as Sodium, Lithium, ImmediatelyFast,
        Iris and Fabric API, are separate projects under their own licenses.
      </p>

      <h2>Minecraft</h2>
      <p>
        Halcyo is not an official Minecraft product and is not approved by or
        associated with Mojang or Microsoft. To play, you need a Microsoft
        account that owns Minecraft: Java Edition. The game is downloaded from
        Mojang&apos;s servers, and your use of it is covered by the{" "}
        <a href="https://www.minecraft.net/eula">
          Minecraft End User License Agreement
        </a>{" "}
        and the{" "}
        <a href="https://www.minecraft.net/usage-guidelines">
          Minecraft Usage Guidelines
        </a>
        .
      </p>

      <h2>Fair play</h2>
      <p>
        Halcyo contains no cheats and gives no unfair advantage. Follow the
        rules of the servers you play on, including their rules about which mods
        are allowed. Do not use or modify Halcyo to cheat, to harm other
        players, or to break Microsoft&apos;s or Mojang&apos;s terms.
      </p>

      <h2>No warranty</h2>
      <p>
        Halcyo is provided &ldquo;as is&rdquo;, without warranty of any kind, as
        described in the GPL-3.0 license. The developers are not liable for any
        loss of data, worlds or accounts from using it. Back up worlds you care
        about.
      </p>

      <h2>Contact</h2>
      <p>
        Questions and reports go to{" "}
        <Link href={COMING_SOON}>GitHub Issues</Link>.
      </p>
    </LegalPage>
  )
}
