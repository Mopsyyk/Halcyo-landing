import Link from "next/link"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <article className="mx-auto max-w-[68ch] px-4 pt-16 pb-24 sm:px-6 sm:pt-20">
      <Link href="/" className="text-[13px] text-subtle hover:text-foreground">
        Halcyo
      </Link>
      <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-[-0.03em]">
        {title}
      </h1>
      <p className="mt-3 text-[13px] text-subtle">Last updated {updated}</p>
      <div className="legal mt-10 flex flex-col text-[15px] leading-[1.7] text-muted-foreground">
        {children}
      </div>
    </article>
  )
}
