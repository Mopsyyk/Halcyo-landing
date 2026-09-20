import { LogoMark } from "@/components/icons"

const LUNAR_POLICY = {
  label: "Lunar Client privacy policy",
  href: "https://www.lunarclient.com/privacy",
}
const LUNAR_OPT_OUT = {
  label: "Lunar Client “Do Not Sell or Share” page",
  href: "https://www.lunarclient.com/do-not-sell-or-share-my-personal-information",
}
const DAWN_POLICY = {
  label: "Dawn privacy policy",
  href: "https://dawn.gg/privacy",
}

const quotes = [
  {
    quote:
      "For efficiency\u2019s sake, information about your interactions may be transmitted to our servers while you are not using the Services.",
    source: LUNAR_POLICY,
    reply:
      "Halcyo has no servers to send anything to, whether it's open or closed.",
  },
  {
    quote:
      "We may also collect information you make available in your Discord status, including information regarding what games you are playing, music or media you are accessing, or what apps you are using for the purpose of sending you advertisements within our Services.",
    source: LUNAR_POLICY,
    reply: "Halcyo has no idea what you're listening to. Enjoy the song.",
  },
  {
    quote:
      "We may store data for up to 5 years or longer if there is a valid business purpose or if we are legally required to do so.",
    source: LUNAR_POLICY,
    reply: "Halcyo stores your data for zero years, on zero servers.",
  },
  {
    quote:
      "If you would like to opt-out from everything, switch on Disable Amazon Publisher Audiences and switch off Customize your experience.",
    source: LUNAR_OPT_OUT,
    reply:
      "Halcyo has no privacy toggles, because there is nothing to opt out of.",
  },
  {
    quote:
      "When you use the voice-chat feature of the Services, we process and collect audio information, which naturally includes any information you broadcast over the voice-chat feature.",
    source: LUNAR_POLICY,
    reply: "Halcyo never hears you. Not even after you lose a clutch.",
  },
  {
    quote:
      "Every time you launch Minecraft through the Dawn launcher, the launcher sends a short report to InPvP immediately, without a further confirmation prompt.",
    source: DAWN_POLICY,
    reply:
      "When you launch Minecraft with Halcyo, Minecraft launches. That's the whole report.",
  },
]

export function FinePrint() {
  return (
    <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2">
      {quotes.map((item) => (
        <li
          key={item.quote}
          className="flex flex-col border-t border-border pt-6"
        >
          <figure>
            <blockquote
              cite={item.source.href}
              className="text-[17px] leading-relaxed text-foreground"
            >
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-[13px] text-subtle">
              <a
                href={item.source.href}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {item.source.label}
              </a>
            </figcaption>
          </figure>
          <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted">
              <LogoMark className="h-3 w-2.5 text-foreground" />
            </span>
            {item.reply}
          </p>
        </li>
      ))}
    </ul>
  )
}
