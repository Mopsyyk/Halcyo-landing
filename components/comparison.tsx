import { Check, X } from "lucide-react"

import { cn } from "@/lib/utils"

type Cell = { yes: boolean; note?: number }

const clients = [
  { name: "Halcyo" },
  { name: "Lunar", sub: "and Badlion" },
  { name: "Dawn", sub: "formerly Feather" },
] as const

const rows: { label: string; good: boolean; cells: [Cell, Cell, Cell] }[] = [
  {
    label: "Open source",
    good: true,
    cells: [{ yes: true }, { yes: false }, { yes: false }],
  },
  {
    label: "Ads in the launcher",
    good: false,
    cells: [{ yes: false }, { yes: true, note: 1 }, { yes: true, note: 2 }],
  },
  {
    label: "Shares your data with advertisers",
    good: false,
    cells: [{ yes: false }, { yes: true, note: 1 }, { yes: true, note: 2 }],
  },
  {
    label: "Data \u201csold\u201d or passed to data brokers",
    good: false,
    cells: [{ yes: false }, { yes: true, note: 1 }, { yes: false, note: 2 }],
  },
  {
    label: "Tracking on by default, without asking",
    good: false,
    cells: [{ yes: false }, { yes: true, note: 3 }, { yes: true, note: 2 }],
  },
  {
    label: "Reads your Discord status for ads",
    good: false,
    cells: [{ yes: false }, { yes: true, note: 1 }, { yes: false, note: 2 }],
  },
]

const notes = [
  {
    id: 1,
    text: (
      <>
        Moonsworth privacy policy for Lunar Client and Badlion Client, last
        updated September 22, 2025. Since August 13, 2024 it has disclosed IP
        address, Unified ID, zip code, internet activity and a hashed email
        address for targeted advertising, which &ldquo;may also be referred to
        as the &lsquo;sale&rsquo; or &lsquo;sharing&rsquo; of your Personal
        Information&rdquo;. Advertisers &ldquo;may include entities known as
        &lsquo;Data Brokers&rsquo;&rdquo;. It may collect your Discord status
        (games, music, apps) to show you ads, integrates Google Analytics, may
        send interaction data while you are not using the app, and may keep data
        for up to 5 years or longer.
      </>
    ),
    href: "https://www.lunarclient.com/privacy",
  },
  {
    id: 2,
    text: (
      <>
        Dawn privacy policy (InPvP Inc., successor to Feather Client), last
        updated August 9, 2026. It states that it does not sell your data and
        does not track activity outside the launcher. The launcher displays ads,
        data is shared with its advertising partners, and a telemetry report is
        sent every time you launch Minecraft, without a confirmation prompt.
      </>
    ),
    href: "https://dawn.gg/privacy",
  },
  {
    id: 3,
    text: (
      <>
        Lunar Client &ldquo;Do Not Sell or Share&rdquo; page, last updated
        August 23, 2026: the Analytics and Optimized Ads settings &ldquo;are
        enabled by default&rdquo;, so you have to find them in the launcher
        settings and turn them off yourself.
      </>
    ),
    href: "https://www.lunarclient.com/do-not-sell-or-share-my-personal-information",
  },
]

export function Comparison() {
  return (
    <div>
      <div className="overflow-hidden rounded-[14px] border border-border bg-card">
        <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
          <caption className="sr-only">
            Halcyo compared with Lunar Client, Badlion Client and Dawn
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[40%] px-4 py-4 font-medium text-muted-foreground sm:px-5"
              >
                <span className="sr-only">Feature</span>
              </th>
              {clients.map((client, i) => (
                <th
                  key={client.name}
                  scope="col"
                  className={cn(
                    "w-[20%] px-1 py-4 text-center text-[13px] font-medium sm:px-4 sm:text-[15px]",
                    i === 0
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {client.name}
                  {"sub" in client && (
                    <span className="mt-0.5 block text-[11px] font-normal text-subtle sm:text-xs">
                      {client.sub}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-border">
                <th
                  scope="row"
                  className="px-4 py-4 font-normal text-foreground sm:px-5"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={clients[i].name}
                    className={cn(
                      "px-1 py-4 text-center sm:px-4",
                      i === 0 && "bg-muted"
                    )}
                  >
                    <span className="relative inline-flex align-middle">
                      <Mark yes={cell.yes} good={cell.yes === row.good} />
                      {cell.note && (
                        <a
                          href={`#note-${cell.note}`}
                          className="absolute -top-1.5 -right-3 text-[11px] leading-none text-subtle hover:text-foreground"
                          aria-label={`Source ${cell.note}`}
                        >
                          {cell.note}
                        </a>
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ol className="mt-5 flex max-w-[80ch] flex-col gap-2 text-[13px] leading-relaxed text-subtle">
        {notes.map((note) => (
          <li key={note.id} id={`note-${note.id}`} className="scroll-mt-8">
            <span className="mr-1.5 text-muted-foreground">{note.id}.</span>
            {note.text}{" "}
            <a
              href={note.href}
              className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Read the policy
            </a>
          </li>
        ))}
        <li className="mt-1">
          Based on each company&apos;s own published policies, checked September
          19, 2026.
        </li>
      </ol>
    </div>
  )
}

function Mark({ yes, good }: { yes: boolean; good: boolean }) {
  const Icon = yes ? Check : X
  return (
    <span className="inline-flex">
      <Icon
        aria-hidden="true"
        strokeWidth={2}
        className={cn(
          "size-[18px]",
          good ? "text-foreground" : "text-destructive"
        )}
      />
      <span className="sr-only">{yes ? "Yes" : "No"}</span>
    </span>
  )
}
