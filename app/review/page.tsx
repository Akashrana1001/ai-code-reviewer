import ReviewClientPage from "./ReviewClientPage"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "AuditAI — Reviewer",
}

export default function ReviewPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Global header (keep this one) */}
      <header className="mb-6 flex items-center justify-between border-b pb-3 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="font-semibold tracking-tight">AuditAI</div>
        <ThemeToggle />
      </header>

      {/* Hero: keep a single instance here (removed from client page) */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-pretty">Code Reviewer</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Paste your code, select a language, and get a structured review.
        </p>
      </div>

      {/* Client UI (no extra header/hero or main inside) */}
      <ReviewClientPage />
    </main>
  )
}
