import { NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(req: Request) {
  try {
    const { code, language } = (await req.json()) as { code?: string; language?: string }
    if (!code || !code.trim()) {
      return new NextResponse("Missing 'code' in request body", { status: 400 })
    }

    // Check if Groq API key is configured
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return new NextResponse("Groq API key is missing. Please configure GROQ_API_KEY environment variable.", { status: 500 })
    }

    const model = groq("openai/gpt-oss-20b")

    const system = [
      "You are an expert code reviewer. Provide comprehensive, well-structured feedback in Markdown format.",
      "Use clear headings (##) for each section and organize content logically.",
      "Focus on: correctness, readability, performance, security, and best practices.",
      "When relevant, propose improved code snippets using proper code blocks with language specification.",
      "Be language-aware based on the user's selection and provide specific recommendations.",
      "Use bullet points and numbered lists for better readability.",
      "Include severity indicators (✅ Good, ⚠️ Warning, 🔒 Security, 💡 Tip, 🚀 Performance) where appropriate.",
    ].join(" ")

    const { text } = await generateText({
      model,
      system,
      prompt: [
        `**Language:** ${language || "unknown"}`,
        "",
        "Please review the following code and provide a comprehensive analysis with the following structure:",
        "",
        "## 📋 **Summary**",
        "- Brief overview of the code",
        "- Overall assessment",
        "",
        "## 🔍 **Code Analysis**",
        "- Key observations",
        "- Strengths and weaknesses",
        "",
        "## ⚠️ **Issues & Concerns**",
        "- Prioritized list of problems",
        "- Potential bugs or errors",
        "",
        "## 🔒 **Security Considerations**",
        "- Security vulnerabilities",
        "- Best practices",
        "",
        "## 🚀 **Performance & Optimization**",
        "- Performance implications",
        "- Optimization suggestions",
        "",
        "## 💡 **Best Practices & Style**",
        "- Code style improvements",
        "- Language-specific conventions",
        "",
        "## 🛠️ **Suggested Improvements**",
        "- Specific code examples",
        "- Refactoring suggestions",
        "",
        "**Code to Review:**",
        "```" + (language || "text"),
        code,
        "```",
      ].join("\n"),
      temperature: 0.3,
    })

    return NextResponse.json({ review: text })
  } catch (err: any) {
    console.error("API Error:", err)
    // In production you might log this to an error service
    return new NextResponse(err?.message || "Internal Server Error", { status: 500 })
  }
}
