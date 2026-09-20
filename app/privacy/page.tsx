import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import Link from "next/link"

import { COMING_SOON } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What the Halcyo launcher stores, where it goes, and how to remove it.",
  alternates: { canonical: "/privacy/" },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="September 19, 2026">
      <p>
        Halcyo is an open-source launcher for Minecraft: Java Edition. This
        policy covers the Halcyo launcher and this website. The short version:{" "}
        <strong>Halcyo has no servers and collects nothing.</strong> Everything
        described below stays on your computer or goes directly to the official
        service it belongs to.
      </p>

      <h2>What the launcher stores</h2>
      <p>
        When you sign in with a Microsoft account, the launcher saves the
        following in <code>~/.halcyo/accounts.json</code> in your user folder:
      </p>
      <ul>
        <li>your Minecraft username and UUID,</li>
        <li>
          the Microsoft refresh token, so you stay signed in between launches,
        </li>
        <li>your Xbox user ID (XUID), which the game uses for its session.</li>
      </ul>
      <p>
        The Minecraft access token is kept in memory while the launcher runs and
        is passed to the game when it starts. Your password is never seen or
        stored by Halcyo, because you only type it on Microsoft&apos;s own
        sign-in page. Launcher settings such as memory, the Minecraft version
        and disabled mods are stored in <code>~/.halcyo/config.json</code>.
      </p>

      <h2>Who the launcher talks to</h2>
      <p>
        The launcher connects only to these services, directly from your
        computer:
      </p>
      <ul>
        <li>
          <strong>Microsoft</strong> (<code>login.microsoftonline.com</code>) to
          sign you in, with the scope{" "}
          <code>XboxLive.signin offline_access</code>.
        </li>
        <li>
          <strong>Xbox Live</strong> (<code>user.auth.xboxlive.com</code>,{" "}
          <code>xsts.auth.xboxlive.com</code>) to confirm your account.
        </li>
        <li>
          <strong>Mojang and Minecraft services</strong> (
          <code>api.minecraftservices.com</code>,{" "}
          <code>sessionserver.mojang.com</code>,{" "}
          <code>piston-meta.mojang.com</code>,{" "}
          <code>libraries.minecraft.net</code>,{" "}
          <code>resources.download.minecraft.net</code>) to check your license,
          load your profile and skin, and download the game.
        </li>
        <li>
          <strong>Fabric</strong> (<code>meta.fabricmc.net</code>) and{" "}
          <strong>Modrinth</strong> (<code>api.modrinth.com</code>) to download
          Fabric and the mods you have enabled.
        </li>
      </ul>
      <p>
        These services receive the requests they need to work (for example your
        IP address) and handle them under their own privacy policies, including
        the{" "}
        <a href="https://privacy.microsoft.com/privacystatement">
          Microsoft Privacy Statement
        </a>
        . Halcyo adds nothing to these requests beyond a{" "}
        <code>halcyo-launcher</code> user agent.
      </p>

      <h2>What Halcyo does not do</h2>
      <ul>
        <li>No analytics, telemetry, crash reporting or advertising.</li>
        <li>
          No Halcyo accounts and no Halcyo servers. Your data is never sent to
          the project or its developers.
        </li>
        <li>
          No selling or sharing of data, because there is none to sell or share.
        </li>
      </ul>

      <h2>This website</h2>
      <p>
        This website is a set of static pages hosted on{" "}
        <strong>Cloudflare</strong>. We set no cookies of our own and run no
        analytics. To deliver and protect the site, Cloudflare processes
        technical data such as your IP address, user agent and request time, may
        keep standard access logs, and may set a strictly necessary security
        cookie. That processing is covered by the{" "}
        <a href="https://www.cloudflare.com/privacypolicy/">
          Cloudflare Privacy Policy
        </a>
        . The launcher itself never connects to this website.
      </p>

      <h2>Removing your data</h2>
      <p>
        Choose <strong>Sign out</strong> in the launcher&apos;s account menu to
        delete an account and its token from your computer. To remove
        everything, delete the <code>~/.halcyo</code> folder. You can also
        revoke the launcher&apos;s access at any time on your Microsoft account
        page under privacy and app permissions.
      </p>

      <h2>Changes and contact</h2>
      <p>
        Any changes to this policy are published on this page and in the{" "}
        <Link href={COMING_SOON}>source repository</Link>. Questions go to{" "}
        <Link href={COMING_SOON}>GitHub Issues</Link>.
      </p>
    </LegalPage>
  )
}
