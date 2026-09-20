import {
  ChevronDown,
  House,
  Minus,
  Package,
  Settings2,
  Square,
  X,
} from "lucide-react"

import { GithubIcon, LogoMark } from "@/components/icons"
import { PlayBarDemo } from "@/components/play-bar-demo"

const nav = [
  { icon: House, label: "Home", active: true },
  { icon: Package, label: "Mods" },
  { icon: Settings2, label: "Settings" },
]

export function LauncherMockup() {
  return (
    <figure className="animate-window-in">
      <div className="overflow-hidden rounded-[14px] border border-border bg-background shadow-[0_40px_80px_-24px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.02)]">
        <div className="flex min-h-[400px] sm:min-h-[500px]">
          <div
            aria-hidden="true"
            className="hidden w-[68px] shrink-0 flex-col items-center border-r border-border py-3.5 sm:flex"
          >
            <div className="flex size-10 items-center justify-center">
              <LogoMark className="h-6 w-5 text-foreground" />
            </div>
            <div className="mt-[22px] flex flex-col gap-1.5">
              {nav.map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={
                    active
                      ? "flex size-10 items-center justify-center rounded-[10px] bg-accent text-foreground"
                      : "flex size-10 items-center justify-center rounded-[10px] text-muted-foreground"
                  }
                >
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </div>
              ))}
            </div>
            <div className="mt-auto flex size-10 items-center justify-center text-muted-foreground">
              <GithubIcon className="size-[18px]" />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div
              aria-hidden="true"
              className="flex h-[68px] items-center justify-end px-3.5 sm:pl-12"
            >
              <div className="flex h-10 items-center gap-2.5 rounded-[10px] pr-2.5 pl-1.5">
                <div className="flex size-7 items-center justify-center rounded-md bg-muted text-[13px] font-medium">
                  P
                </div>
                <span className="text-sm font-medium">Player</span>
                <ChevronDown
                  className="size-4 text-subtle"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mx-2 ml-3 h-5 w-px bg-border" />
              <div className="flex text-muted-foreground">
                <span className="flex size-8 items-center justify-center">
                  <Minus className="size-4" strokeWidth={1.75} />
                </span>
                <span className="flex size-8 items-center justify-center">
                  <Square className="size-3.5" strokeWidth={1.75} />
                </span>
                <span className="flex size-8 items-center justify-center">
                  <X className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-5 pt-3 pb-8 sm:px-12 sm:pb-11">
              <p
                aria-hidden="true"
                className="text-[40px] leading-[1.08] font-semibold tracking-[-0.035em] sm:text-[52px]"
              >
                Halcyo
              </p>
              <p
                aria-hidden="true"
                className="mt-2.5 flex flex-wrap items-center gap-x-2.5 text-[13px] font-medium text-subtle"
              >
                <span>Minecraft 26.2</span>
                <span className="size-[3px] rounded-full bg-zinc-600" />
                <span>Fabric</span>
                <span className="size-[3px] rounded-full bg-zinc-600" />
                <span>7 mods</span>
              </p>
              <p
                aria-hidden="true"
                className="mt-[18px] max-w-[46ch] text-sm leading-[1.5] text-muted-foreground"
              >
                Open-source Minecraft client. Game files, Fabric and mods are
                installed and kept up to date before every launch.
              </p>
              <div className="mt-auto pt-10">
                <PlayBarDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] text-subtle">
        The Halcyo launcher. Press Play to see what happens before the game
        starts.
      </figcaption>
    </figure>
  )
}
