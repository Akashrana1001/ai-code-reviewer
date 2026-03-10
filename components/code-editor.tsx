"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CodeEditorProps = {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  className?: string
}

export function CodeEditor({ value, onChange, placeholder, className }: CodeEditorProps) {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const el = e.currentTarget
      const start = el.selectionStart
      const end = el.selectionEnd
      const newValue = value.slice(0, start) + "  " + value.slice(end)
      onChange(newValue)
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.selectionStart = ref.current.selectionEnd = start + 2
        }
      })
    }
  }

  const lines = React.useMemo(() => value.split("\n"), [value])

  return (
    <div className={cn("grid h-full grid-cols-[48px,1fr] overflow-hidden rounded-md border bg-card", className)}>
      {/* Line numbers */}
      <div className="select-none border-r bg-muted/40 p-3 text-right text-xs text-muted-foreground">
        {lines.map((_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          placeholder={placeholder}
          className="h-full w-full resize-none bg-transparent p-3 font-mono text-sm leading-6 outline-none"
          style={{ tabSize: 2 }}
          aria-label="Code editor"
        />
      </div>
    </div>
  )
}
