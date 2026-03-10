"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LANGUAGES } from "@/data/languages"
import { CodeEditor } from "./shared/code-editor"
import { MarkdownViewer } from "./markdown-viewer"
import { motion } from "framer-motion"

type ReviewResponse = { review: string }

export function ReviewClient() {
  const [code, setCode] = useState<string>(
    "function calculateTotal(items){\n  let total = 0;\n  for (let i=0; i<items.length; i++) total += items[i].price;\n  return total;\n}\n",
  )
  const [language, setLanguage] = useState<string>("javascript")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [review, setReview] = useState<string>("")

  const lines = useMemo(() => code.split("\n").length, [code])
  const chars = useMemo(() => code.length, [code])

  async function onReview() {
    setLoading(true)
    setError(null)
    setReview("")
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Failed to get review")
      }
      const data = (await res.json()) as ReviewResponse
      setReview(data.review)
    } catch (e: any) {
      setError(e.message || "Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-xs text-muted-foreground">
                {lines} lines • {chars} chars
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <CodeEditor
                value={code}
                onValueChange={setCode}
                language={language}
                placeholder="// Paste your code here"
                className="min-h-[280px]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button onClick={onReview} disabled={loading || !code.trim()}>
                {loading ? "Reviewing…" : "Review Code"}
              </Button>
              {error ? <span className="text-sm text-red-600">{error}</span> : null}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>AI Review</CardTitle>
          </CardHeader>
          <CardContent>
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-4">
                  <div className="animate-spin">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Analyzing your code…</p>
                  <p className="text-sm text-muted-foreground">Our AI is examining your code for improvements</p>
                </div>
              </div>
            )}
            {!loading && review && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.2 }}
                className="max-h-[600px] overflow-y-auto pr-2 review-scrollbar"
              >
                <MarkdownViewer content={review} />
              </motion.div>
            )}
            {!loading && !review && !error && (
              <div className="text-center py-12 text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-4 opacity-50">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-lg font-medium mb-2">Ready for Review</p>
                <p className="text-sm">Paste your code and click "Review Code" to get started</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
