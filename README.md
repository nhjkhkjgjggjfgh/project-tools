# DevToolHub — AI-Powered Developer Tools

A modern collection of **17 free, AI-powered developer tools** built with React, TypeScript, Vite, and TailwindCSS.

## 🚀 Features

- ⚡ **Fast & Offline** - All tools run in your browser, no server needed
- 🎨 **Beautiful UI** - Modern design with Shadcn components
- 🔍 **Instant Search** - Use Cmd+K to quickly find any tool
- ⭐ **Pin Favorites** - Save your most-used tools for quick access
- 📊 **History Tracking** - Recently used tools appear on home
- 🤖 **AI Assistance** - Each tool has AI suggestions built-in
- 📱 **Fully Responsive** - Works perfectly on mobile and desktop
- 🌙 **Dark Mode Ready** - Beautiful dark theme support

## 🛠️ Available Tools (17 Total)

### Data & Encoding (4)
- **Base64 Encode/Decode** - Convert text to/from Base64
- **URL Encoder/Decoder** - Encode/decode URLs and query strings
- **JSON to CSV** - Transform JSON arrays to CSV format
- **Hash Generator** - SHA-1, SHA-256, SHA-384, SHA-512

### Formatters (3)
- **JSON Formatter** - Pretty-print, validate, and minify JSON
- **XML Formatter** - Format and validate XML documents
- **CSS Gradient** - Visual CSS gradient builder with preview

### Generators (4)
- **UUID Generator** - Generate v4 UUIDs in bulk
- **Password Generator** - Strong, customizable passwords
- **QR Code Generator** - Create QR codes for URLs/text
- **Lorem Ipsum** - Generate placeholder text quickly

### Text Tools (2)
- **Case Converter** - Convert between case styles (camelCase, snake_case, etc.)
- **Text Statistics** - Analyze text (word count, reading time, etc.)

### Utilities & Other (2)
- **Regex Tester** - Test and debug regular expressions with flags
- **JWT Decoder** - Decode and inspect JSON Web Tokens
- **Color Converter** - Convert between HEX, RGB, HSL formats
- **Timestamp Converter** - Unix timestamp to human-readable dates

## 🎯 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── home/          # Home page components
│   ├── tool/          # Shared tool UI components
│   ├── layout/        # Navbar, Footer, Layout
│   └── ui/            # Shadcn UI components
├── tools/
│   ├── impl/          # Individual tool implementations
│   ├── registry.ts    # Tool registry & definitions
│   └── types.ts       # TypeScript types
├── pages/             # Route pages
├── store/             # Zustand state management
├── hooks/             # Custom React hooks
├── services/          # API & services
└── lib/               # Utilities
```

## ⌨️ Keyboard Shortcuts

- **Cmd/Ctrl + K** - Open search/command palette
- **Arrow Keys** - Navigate search results
- **Enter** - Select tool
- **Escape** - Close search

## 🎨 UI/UX Highlights

- Featured tools section on home page
- Toolkit Collections - curated tool bundles for workflows
- Category filtering - browse tools by type
- Search with keywords - find tools by name, keyword, or category
- Recently used tracking - quick access to recent tools
- Pin/favorite system - customize your tool access
- Responsive grid - adapts to all screen sizes
- Smooth animations - motion effects for better UX
- Copy buttons - one-click copying of results
- Dark mode - beautiful dark theme

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Shadcn UI** - Component library
- **Framer Motion** - Animations
- **Zustand** - State management
- **React Router** - Routing

## 🚀 Performance

- All tools load on-demand (lazy loading)
- Optimized bundle size (~480KB gzipped)
- All processing client-side, no server requests
- Fast tool switching and instant results

## 🤝 Contributing

Want to add a new tool? 

1. Create implementation in `src/tools/impl/YourTool.tsx`
2. Add to registry in `src/tools/registry.ts`
3. Update types in `src/tools/types.ts`
4. Test and build

## 📄 License

MIT - Feel free to use this project however you want.
