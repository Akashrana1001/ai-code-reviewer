"use client"

import Editor from "react-simple-code-editor"
import Prism from "prismjs"
import "prismjs/themes/prism.css"
// Load a sensible subset of languages
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-python"
import "prismjs/components/prism-go"
import "prismjs/components/prism-rust"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-markup"

type Props = {
  value: string
  onValueChange: (val: string) => void
  language: string
  placeholder?: string
  className?: string
}

export function CodeEditor({ value, onValueChange, language, placeholder, className }: Props) {
  return (
    <Editor
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      padding={12}
      className={`text-sm font-mono leading-5 bg-background ${className || ""}`}
      style={{ minHeight: 200 }}
      highlight={(code) => {
        const lang = (language || "javascript").toLowerCase()
        const grammar = (Prism as any).languages[lang] || Prism.languages.javascript
        return Prism.highlight(code, grammar, lang)
      }}
    />
  )
}
