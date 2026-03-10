# 🤖 AuditAI - AI-Powered Code Reviewer

<div align="center">

![AuditAI Logo](https://img.shields.io/badge/AuditAI-Code%20Reviewer-blue?style=for-the-badge&logo=robot)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/Groq-FF6B35?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)

**Transform your code quality with intelligent AI-powered reviews**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)](CONTRIBUTING.md)

</div>

## 🎯 Overview

**AuditAI** is a revolutionary AI-powered code review platform that acts as your personal coding mentor. Leveraging the lightning-fast capabilities of Groq's LLaMA models, it provides instant, intelligent feedback on code written in any programming language. Whether you're a beginner learning to code or an experienced developer seeking optimization insights, AuditAI helps you write better, cleaner, and more efficient code.



## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌍 **Multi-Language Support** | Supports 50+ programming languages with intelligent syntax recognition |
| ⚡ **Lightning-Fast Reviews** | Get comprehensive feedback in seconds using Groq's LLaMA models |
| 🔍 **Deep Code Analysis** | Bug detection, security vulnerabilities, performance optimization |
| 📚 **Educational Insights** | Learn best practices with detailed explanations and examples |
| 🎨 **Beautiful Interface** | Modern, responsive design with enhanced Markdown rendering |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile devices |
| 🔒 **Privacy-First** | Your code is processed securely and never stored permanently |
| 🌙 **Dark Mode** | Toggle between light and dark themes for comfortable coding |
| ✨ **Enhanced Markdown** | Rich formatting with syntax highlighting and contextual icons |

## 🛠️ Technology Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend & AI
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-FF6B35?style=for-the-badge&logo=groq&logoColor=white)
![AI SDK](https://img.shields.io/badge/AI_SDK-000000?style=for-the-badge&logo=openai&logoColor=white)

</div>

**Frontend Dependencies:**
- **Next.js 15.2.4** - Full-stack React framework with App Router
- **React 19** - Latest React with modern hooks and functional components
- **TypeScript 5** - Type-safe development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Markdown** - Enhanced Markdown rendering with custom components

**Backend & AI Dependencies:**
- **Next.js API Routes** - Serverless API endpoints
- **Groq AI SDK** - Lightning-fast AI inference with LLaMA models
- **AI SDK** - Unified interface for AI model interactions

**Development Tools:**
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **SWC** - Fast JavaScript/TypeScript compiler

## 📁 Project Structure

```
AuditAI/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 api/                      # API routes
│   │   └── 📂 review/
│   │       └── route.ts            # Code review API endpoint
│   ├── 📂 review/                   # Review page
│   │   ├── page.tsx                # Review page component
│   │   └── ReviewClientPage.tsx    # Client-side review logic
│   ├── globals.css                  # Global styles and CSS variables
│   ├── layout.tsx                   # Root layout with theme provider
│   └── page.tsx                     # Landing page
├── 📂 components/                   # Reusable UI components
│   ├── 📂 ui/                       # Shadcn/ui components
│   │   ├── button.tsx              # Button component
│   │   ├── card.tsx                # Card component
│   │   ├── select.tsx              # Select component
│   │   └── ...                     # Other UI components
│   ├── 📂 shared/                   # Shared components
│   │   └── code-editor.tsx         # Code editor component
│   ├── code-editor.tsx              # Main code editor
│   ├── markdown-viewer.tsx          # Enhanced Markdown renderer
│   ├── review-client.tsx            # Review client logic
│   ├── theme-provider.tsx           # Theme context provider
│   └── theme-toggle.tsx             # Theme toggle component
├── 📂 data/                         # Static data
│   └── languages.ts                 # Supported programming languages
├── 📂 hooks/                        # Custom React hooks
│   ├── use-mobile.ts                # Mobile detection hook
│   └── use-toast.ts                 # Toast notification hook
├── 📂 lib/                          # Utility libraries
│   └── utils.ts                     # Common utility functions
├── 📂 styles/                       # Additional styles
├── .env.local                       # Environment variables (create this)
├── components.json                  # Shadcn/ui configuration
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Project dependencies
├── tailwind.config.js               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **pnpm** (v8.0.0 or higher)
- **Git** - [Download here](https://git-scm.com/)
- **Groq API Key** - [Get yours here](https://console.groq.com/keys)

### 📥 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/therayyanawaz/auditai.git
cd auditai
```

#### 2. Install Dependencies

```bash
# Using npm
npm install --legacy-peer-deps

# Or using pnpm
pnpm install
```

#### 3. Environment Configuration

Create a `.env.local` file in the project root:

```bash
# Create environment file
echo "GROQ_API_KEY=your_actual_groq_api_key_here" > .env.local
```

**Important**: Replace `your_actual_groq_api_key_here` with your real Groq API key from [Groq Console](https://console.groq.com/keys).

#### 4. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

🎉 **Success!** Open your browser and navigate to `http://localhost:3000` to start using AuditAI!

## 📖 Usage Guide

### Basic Usage

1. **Open the Application**: Navigate to `http://localhost:3000`
2. **Navigate to Review**: Click "Start Code Review" or go to `/review`
3. **Write or Paste Code**: Use the code editor to input your code
4. **Select Language**: Choose the appropriate programming language
5. **Click Review**: Press the "Review Code" button to analyze your code
6. **Review Feedback**: Detailed suggestions appear in the right panel with enhanced formatting

### Example Review Session

**Input Code:**
```javascript
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }
    return total;
}
```

**AI Review Output:**
The enhanced Markdown viewer will display:
- 📋 **Summary** - Overview and assessment
- 🔍 **Code Analysis** - Key observations and strengths/weaknesses  
- ⚠️ **Issues & Concerns** - Prioritized problems with contextual icons
- 🔒 **Security Considerations** - Security vulnerabilities and best practices
- 🚀 **Performance & Optimization** - Performance implications and suggestions
- 💡 **Best Practices & Style** - Code style improvements
- 🛠️ **Suggested Improvements** - Specific examples with syntax highlighting

### Supported Languages

<details>
<summary>Click to see all supported languages</summary>

- JavaScript/TypeScript
- Python
- Java
- C/C++
- C#
- Go
- Rust
- Ruby
- PHP
- Swift
- Kotlin
- Scala
- HTML/CSS
- SQL
- And 40+ more!

</details>

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in your project root:

```env
# Required: Your Groq API key
GROQ_API_KEY=gsk_your_actual_api_key_here

# Optional: Customize API endpoint (defaults to Groq)
# GROQ_MODEL=openai/gpt-oss-20b
```

### Customizing the AI Model

You can modify the AI model in `app/api/review/route.ts`:

```typescript
// Change the model here
const model = groq("openai/gpt-oss-20b")  // or "llama-3.1-70b-versatile"
```

### Theme Configuration

The app includes a theme toggle that supports:
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes for extended coding sessions
- **System**: Automatically follows your system preference

## 🎨 Enhanced Features

### Enhanced Markdown Viewer

The new Markdown viewer provides:

- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Contextual Icons**: Automatic icon assignment based on content type
  - ✅ Good practices
  - ⚠️ Warnings and issues
  - 🔒 Security concerns
  - 💡 Tips and suggestions
  - 🚀 Performance notes
- **Professional Styling**: Clean typography and spacing
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Support**: Seamless theme integration

### Code Editor Features

- **Language Detection**: Automatic syntax highlighting
- **Line Counting**: Real-time line and character count
- **Responsive Design**: Works on all devices
- **Theme Integration**: Follows app theme settings

### Performance Optimizations

- **Fast Refresh**: Instant updates during development
- **Optimized Builds**: Efficient production builds
- **Lazy Loading**: Components load only when needed
- **Memory Management**: Proper cleanup and state management

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Environment Variables: Add GROQ_API_KEY in Vercel dashboard
```

### Alternative Platforms

#### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variable: `GROQ_API_KEY`

#### Railway
1. Connect your GitHub repository
2. Auto-detects Next.js
3. Add environment variable: `GROQ_API_KEY`

#### Render
1. Create new Web Service
2. Root directory: `/` (project root)
3. Build command: `npm run build`
4. Start command: `npm start`
5. Add environment variable: `GROQ_API_KEY`

### Environment Variables for Production

Ensure these are set in your hosting platform:
- `GROQ_API_KEY`: Your Groq API key
- `NODE_ENV`: Set to `production`

## 🔧 Troubleshooting

### Common Issues and Solutions

#### ❌ "Groq API key is missing" Error

**Problem**: API returns configuration error  
**Solution**: 
1. Get your Groq API key from [Groq Console](https://console.groq.com/keys)
2. Create `.env.local` file in project root:
   ```env
   GROQ_API_KEY=gsk_your_actual_api_key_here
   ```
3. Restart the development server

#### ❌ Build Errors

**Problem**: Build fails with dependency issues  
**Solution**:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

#### ❌ Port Already in Use

**Problem**: Port 3000 is occupied  
**Solution**:
```bash
# Use different port
npm run dev -- -p 3001
```

#### ❌ Module Resolution Errors

**Problem**: TypeScript or import errors  
**Solution**:
```bash
# Clear TypeScript cache
rm -rf .next
npm run dev
```

### Performance Tips

1. **Large Files**: For files >1000 lines, consider reviewing smaller sections
2. **API Limits**: Groq API has rate limits - wait between requests
3. **Browser Cache**: Clear cache if experiencing display issues
4. **Development Mode**: Use `npm run build && npm start` for production-like performance

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help make AuditAI even better:

### 🌟 Ways to Contribute

- 🐛 **Report Bugs**: Found an issue? Let us know!
- 💡 **Suggest Features**: Have ideas for improvements?
- 🔧 **Fix Issues**: Pick up an issue and submit a PR
- 📚 **Improve Documentation**: Help make our docs clearer
- 🎨 **Enhance UI/UX**: Make the interface more beautiful
- ⚡ **Optimize Performance**: Help us make it faster

### 📋 Contribution Process

#### 1. Setup Development Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/auditai.git
cd auditai

# Add upstream remote
git remote add upstream https://github.com/therayyanawaz/auditai.git

# Install dependencies
npm install --legacy-peer-deps
```

#### 2. Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Examples:
# git checkout -b feature/enhanced-markdown
# git checkout -b fix/api-error-handling
# git checkout -b docs/installation-guide
```

#### 3. Make Your Changes

- Write clean, well-documented TypeScript code
- Follow existing code style and conventions
- Add tests for new features (if applicable)
- Update documentation as needed

#### 4. Test Your Changes

```bash
# Build the project
npm run build

# Start development server
npm run dev
```

#### 5. Submit a Pull Request

```bash
# Commit your changes
git add .
git commit -m "feat: add enhanced markdown viewer"

# Push to your fork
git push origin feature/your-feature-name
```

### 🎯 Pull Request Guidelines

**Good PR Title Examples:**
- `feat: add enhanced markdown viewer`
- `fix: resolve API timeout issues`
- `docs: improve installation instructions`
- `style: update button component styling`

**PR Description Should Include:**
- What changes were made and why
- How to test the changes
- Screenshots (for UI changes)
- Breaking changes (if any)

### 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Details**:
   - OS and version
   - Browser and version
   - Node.js version
   - Next.js version

2. **Steps to Reproduce**:
   ```
   1. Go to '...'
   2. Click on '...'
   3. See error
   ```

3. **Expected vs Actual Behavior**
4. **Screenshots/Error Messages**
5. **Code Samples** (if applicable)

### 💡 Feature Requests

For feature requests, please provide:
- Clear description of the feature
- Use case and motivation
- Proposed implementation (if you have ideas)
- Mockups/wireframes (for UI features)

### 📝 Development Guidelines

#### Code Style

- **TypeScript**: Use strict mode, proper types, interfaces
- **React**: Use functional components, hooks, proper prop types
- **Next.js**: Follow App Router conventions, use proper file structure
- **General**: Write self-documenting code with clear comments

#### Commit Messages

Follow conventional commits:
```
type(scope): description

feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## 📋 FAQ

<details>
<summary><strong>Is my code data secure?</strong></summary>

Yes! Your code is sent to Groq's API for analysis but is not stored permanently. We recommend not submitting sensitive production code with secrets or personal information.
</details>

<details>
<summary><strong>What programming languages are supported?</strong></summary>

AuditAI supports 50+ programming languages including JavaScript, Python, Java, C++, Go, Rust, and many more. The AI model can understand and provide feedback on virtually any programming language.
</details>

<details>
<summary><strong>Are there any usage limits?</strong></summary>

The free tier of Groq's API has rate limits. For heavy usage, consider upgrading to a paid plan. The limits are quite generous for personal and small team use.
</details>

<details>
<summary><strong>Can I use this for commercial projects?</strong></summary>

Yes! AuditAI is released under the MIT License, making it free for commercial use. However, check Groq's API terms for any commercial usage restrictions.
</details>

<details>
<summary><strong>How accurate are the AI suggestions?</strong></summary>

The AI provides highly accurate suggestions for common patterns, best practices, and potential issues. However, always review suggestions critically and test changes in your specific context.
</details>

<details>
<summary><strong>What's the difference from the old version?</strong></summary>

This is a complete rewrite using Next.js 15, React 19, and TypeScript. It features a modern architecture, enhanced Markdown viewer, better performance, and improved developer experience.
</details>

## 🗺️ Roadmap

### 🚧 Currently In Development
- 🌙 **Dark Mode**: ✅ Complete with theme toggle
- ✨ **Enhanced Markdown**: ✅ Rich formatting with syntax highlighting
- 🎨 **Modern UI**: ✅ Beautiful, responsive interface
- 📱 **Mobile Optimization**: ✅ Responsive design for all devices

### 🎯 Planned Features
- **Multi-file Analysis**: Review entire projects
- **Custom Rules**: Define your own coding standards
- **Team Integration**: Collaborate on code reviews
- **IDE Extensions**: VS Code, IntelliJ plugins
- **Detailed Metrics**: Code quality scoring
- **Language-specific Analysis**: Deeper insights per language

### 💡 Ideas for the Future
- **Real-time Collaboration**: Live code review sessions
- **Learning Paths**: Guided improvement suggestions
- **Integration APIs**: Connect with GitHub, GitLab
- **Mobile App**: Native mobile code review app
- **Offline Mode**: Local AI models for privacy

Vote on features and suggest new ones in our [Discussions](https://github.com/therayyanawaz/auditai/discussions)!

## 🏆 Contributors

We're grateful to all the amazing people who have contributed to AuditAI:

<div align="center">

### 🏆 Core Team
| Contributor | Role | Contributions |
|-------------|------|---------------|
| [**Akash Rana**](https://github.com/Akashrana1001) | 👑 Creator & Lead Developer | Initial development, architecture, AI integration |
| [**therayyanawaz**](https://github.com/therayyanawaz) | 🔧 Contributor | Feature enhancements, bug fixes, documentation |

### 🌟 Special Thanks

- **Groq Team** - For the incredible fast inference API
- **Vercel** - For seamless Next.js hosting
- **Next.js Team** - For the amazing React framework
- **All Beta Testers** - For valuable feedback and bug reports

</div>

**Want to see your name here?** [Contribute to the project](#contributing) and join our growing community!

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 AuditAI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### 🌟 Star the Project

If AuditAI has helped you write better code, please consider giving it a star! ⭐

[![GitHub stars](https://img.shields.io/github/stars/therayyanawaz/auditai?style=social)](https://github.com/therayyanawaz/auditai/stargazers)

### 📞 Connect With Us

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/therayyanawaz/auditai)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

---

**Made with ❤️ by the AuditAI Community**

*Empowering developers to write better code, one review at a time.*

</div>