"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Code, 
  Lightbulb,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from "lucide-react"

interface MarkdownViewerProps {
  content: string
  className?: string
}

export function MarkdownViewer({ content, className = "" }: MarkdownViewerProps) {
  // Custom components for enhanced Markdown rendering
  const components = {
    // Enhanced headings with icons and styling
    h1: ({ children, ...props }: any) => (
      <h1 
        {...props} 
        className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4"
      >
        <Code className="h-6 w-6 text-blue-600" />
        {children}
      </h1>
    ),
    
    h2: ({ children, ...props }: any) => (
      <h2 
        {...props} 
        className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3"
      >
        <ArrowRight className="h-5 w-5 text-green-600" />
        {children}
      </h2>
    ),
    
    h3: ({ children, ...props }: any) => (
      <h3 
        {...props} 
        className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2"
      >
        <Info className="h-4 w-4 text-blue-500" />
        {children}
      </h3>
    ),

    // Enhanced code blocks with syntax highlighting
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "")
      const language = match ? match[1] : "text"
      
      if (inline) {
        return (
          <code 
            {...props} 
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm font-mono"
          >
            {children}
          </code>
        )
      }

      return (
        <div className="my-4">
          <div className="flex items-center justify-between bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg">
            <span className="text-sm font-medium">{language}</span>
            <Badge variant="secondary" className="text-xs">
              <Code className="h-3 w-3 mr-1" />
              Code Block
            </Badge>
          </div>
          <SyntaxHighlighter
            style={oneDark}
            language={language}
            PreTag="div"
            className="rounded-b-lg !mt-0"
            customStyle={{
              margin: 0,
              borderRadius: "0 0 0.5rem 0.5rem",
            }}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      )
    },

    // Enhanced blockquotes
    blockquote: ({ children, ...props }: any) => (
      <blockquote 
        {...props} 
        className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300"
      >
        {children}
      </blockquote>
    ),

    // Enhanced lists with icons
    ul: ({ children, ...props }: any) => (
      <ul {...props} className="space-y-2 my-4 pl-6">
        {children}
      </ul>
    ),

    ol: ({ children, ...props }: any) => (
      <ol {...props} className="space-y-2 my-4 pl-6 list-decimal">
        {children}
      </ol>
    ),

    // Enhanced list items with contextual icons
    li: ({ children, ...props }: any) => {
      const content = String(children)
      let icon = <ArrowRight className="h-4 w-4 text-gray-400" />
      
      // Detect different types of list items and assign appropriate icons
      if (content.includes("✅") || content.includes("✓") || content.includes("Good")) {
        icon = <CheckCircle className="h-4 w-4 text-green-500" />
      } else if (content.includes("⚠️") || content.includes("Warning") || content.includes("Issue")) {
        icon = <AlertTriangle className="h-4 w-4 text-yellow-500" />
      } else if (content.includes("💡") || content.includes("Tip") || content.includes("Suggestion")) {
        icon = <Lightbulb className="h-4 w-4 text-blue-500" />
      } else if (content.includes("🚀") || content.includes("Performance")) {
        icon = <Zap className="h-4 w-4 text-purple-500" />
      } else if (content.includes("🔒") || content.includes("Security")) {
        icon = <Shield className="h-4 w-4 text-red-500" />
      } else if (content.includes("⏱️") || content.includes("Time")) {
        icon = <Clock className="h-4 w-4 text-orange-500" />
      }

      return (
        <li {...props} className="flex items-start gap-2">
          <span className="mt-0.5 flex-shrink-0">{icon}</span>
          <span className="text-gray-700 dark:text-gray-300">{children}</span>
        </li>
      )
    },

    // Enhanced paragraphs
    p: ({ children, ...props }: any) => (
      <p {...props} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
        {children}
      </p>
    ),

    // Enhanced strong text
    strong: ({ children, ...props }: any) => (
      <strong {...props} className="font-semibold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),

    // Enhanced emphasis
    em: ({ children, ...props }: any) => (
      <em {...props} className="italic text-gray-600 dark:text-gray-400">
        {children}
      </em>
    ),

    // Enhanced links
    a: ({ href, children, ...props }: any) => (
      <a 
        {...props} 
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-dotted underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Enhanced tables
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-4">
        <table {...props} className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
          {children}
        </table>
      </div>
    ),

    th: ({ children, ...props }: any) => (
      <th {...props} className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
        {children}
      </th>
    ),

    td: ({ children, ...props }: any) => (
      <td {...props} className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
        {children}
      </td>
    ),
  }

  return (
    <div className={`prose prose-sm dark:prose-invert max-w-none space-y-4 ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
