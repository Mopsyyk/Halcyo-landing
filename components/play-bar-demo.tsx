"use client"

import { ChevronDown, Ellipsis, Play, Square } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Step = {
  label: "Play" | "Installing" | "Launching" | "Stop"
  status: string
  busy: boolean
  progress?: number | null
  ms: number
}

const ASSETS = 3410

const RUN: Step[] = [
  {
    label: "Installing",
    status: "Installing Minecraft 26.2 + Fabric…",
    busy: true,
    progress: null,
    ms: 1400,
  },
  {
    label: "Installing",
    status: "Downloading assets",
    busy: true,
    progress: 0,
    ms: 2600,
  },
  {
    label: "Installing",
    status: "Installing mods…",
    busy: true,
    progress: null,
    ms: 1300,
  },
  {
    label: "Launching",
    status: "Launching the game…",
    busy: true,
    progress: null,
    ms: 1500,
  },
  { label: "Stop", status: "Game running", busy: false, ms: 0 },
]
const IDLE: Step = { label: "Play", status: "Ready", busy: false, ms: 0 }

export function PlayBarDemo() {
  const [step, setStep] = useState<Step>(IDLE)
  const [progress, setProgress] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const timers: number[] = []
    let at = 0
    for (const s of RUN) {
      timers.push(
        window.setTimeout(() => {
          setStep(s)
          if (s.progress === 0) setProgress(0)
        }, at)
      )
      if (s.progress === 0) {
        const ticks = 40
        for (let i = 1; i <= ticks; i++) {
          timers.push(
            window.setTimeout(
              () => setProgress(i / ticks),
              at + (s.ms / ticks) * i
            )
          )
        }
      }
      at += s.ms
    }
    timers.push(window.setTimeout(() => setRunning(false), at))
    return () => timers.forEach(window.clearTimeout)
  }, [running])

  const downloading = step.busy && step.progress === 0
  const counter = downloading
    ? ` ${Math.round(progress * ASSETS)}/${ASSETS}`
    : ""

  return (
    <div className="flex items-center gap-2">
      <FakeButton
        className="w-[88px] shrink-0 justify-between px-4"
        disabled={step.busy}
      >
        <span className="text-[15px] font-medium">26.2</span>
        <ChevronDown className="size-4 text-subtle" strokeWidth={1.75} />
      </FakeButton>
      <button
        type="button"
        onClick={() => {
          if (step.busy) return
          if (step.label === "Stop") setStep(IDLE)
          else setRunning(true)
        }}
        aria-label={
          step.label === "Stop"
            ? "Stop the demo and go back to Play"
            : "Play the launch demo"
        }
        className={cn(
          "flex h-12 min-w-0 flex-1 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-[background-color,transform] duration-150 active:scale-[0.97] sm:w-[188px] sm:flex-none",
          step.busy ? "cursor-default" : "hover:bg-[#e4e4e7]"
        )}
      >
        <span
          key={step.label}
          className="flex animate-label-in items-center gap-2.5"
        >
          {step.busy ? (
            <Spinner />
          ) : step.label === "Stop" ? (
            <Square className="size-3.5 fill-current" strokeWidth={1.75} />
          ) : (
            <Play className="size-4 fill-current" strokeWidth={1.75} />
          )}
          <span className="text-[15px] font-semibold">{step.label}</span>
        </span>
      </button>
      <FakeButton className="w-12 shrink-0 justify-center" disabled={step.busy}>
        <Ellipsis className="size-[18px]" strokeWidth={1.75} />
      </FakeButton>

      <span className="sr-only" aria-live="polite">
        {step.status}
      </span>
      <div
        className="ml-4 hidden w-[300px] flex-col md:flex"
        aria-hidden="true"
      >
        <div className="flex items-center gap-3">
          <p
            key={step.status}
            className={cn(
              "flex-1 animate-label-in truncate text-[13px]",
              step.busy ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {step.status}
          </p>
          {downloading && (
            <span className="font-mono text-xs text-foreground tabular-nums">
              {Math.round(progress * 100)}%
            </span>
          )}
        </div>
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-(--ease-settle)",
            step.busy
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-accent">
              {downloading ? (
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-100"
                  style={{ width: `${progress * 100}%` }}
                />
              ) : (
                <div className="h-full w-2/5 animate-indeterminate rounded-full bg-primary" />
              )}
            </div>
            <p className="mt-1.5 h-4 font-mono text-[11px] text-subtle tabular-nums">
              {counter && `${counter.trim()} files`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FakeButton({
  className,
  disabled,
  children,
}: {
  className?: string
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 items-center gap-2 rounded-xl border border-border transition-opacity duration-150",
        disabled && "opacity-50",
        className
      )}
    >
      {children}
    </div>
  )
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-4 animate-spin-arc"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path
        d="M8 1.5a6.5 6.5 0 0 1 6.4 5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
