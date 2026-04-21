# DevToolHub 🛠️

> Every developer tool in one place. Free forever.

A modern, fast, and feature-rich collection of developer tools built with React, TypeScript, and Tailwind CSS. All tools run entirely in your browser — no server, no data collection, 100% privacy.

## ✨ Features

### 📊 Available Tools

1. **JSON Formatter**
   - Format JSON with custom indentation
   - Minify JSON to single line
   - Validate JSON syntax
   - Copy formatted output

2. **Base64 Encoder/Decoder**
   - Encode text to Base64
   - Decode Base64 to text
   - Error handling for invalid input
   - Copy results instantly

3. **UUID Generator**
   - Generate single or bulk UUIDs
   - Multiple format options (standard, uppercase, no-dash)
   - Batch generate up to 100 UUIDs
   - Copy all at once

4. **Password Generator**
   - Create secure random passwords
   - Customizable length (6-64 characters)
   - Toggle character types (uppercase, lowercase, numbers, symbols)
   - Real-time strength indicator
   - Show/hide password toggle

5. **URL Encoder/Decoder**
   - URL-safe encoding and decoding
   - Proper handling of special characters
   - Error handling for invalid inputs

6. **Gradient Generator**
   - Create linear and radial gradients
   - Adjust angle for linear gradients
   - Live color preview
   - Multiple output formats (CSS, Tailwind)
   - Copy CSS directly to clipboard

7. **Text Tools**
   - Character statistics (total, without spaces, word count)
   - Text transformations (uppercase, lowercase, capitalize, reverse)
   - Text modifications (remove spaces, remove duplicates)
   - Real-time updates

### 🎨 UI/UX Features

- **Beautiful Design**: Modern dark theme with smooth gradients
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Fast Performance**: Instant processing with no latency
- **Copy to Clipboard**: One-click copy for all outputs
- **Keyboard Friendly**: Full keyboard navigation support
- **Error Handling**: Clear error messages for invalid inputs
- **Visual Feedback**: Animations and transitions for better UX

### 🔒 Privacy & Performance

- ✅ All operations run locally in your browser
- ✅ No data is sent to any server
- ✅ No tracking or analytics
- ✅ Works offline (after first load)
- ✅ Instant results with zero latency

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/nhjkhkjgjggjfgh/project-tools.git
cd project-tools

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CopyButton.tsx   # Copy to clipboard button
│   ├── Editor.tsx       # Text editor/viewer
│   ├── ErrorMessage.tsx # Error display
│   ├── Tabs.tsx         # Tab navigation
│   ├── ToolCard.tsx     # Tool showcase card
│   └── ToolLayout.tsx   # Common tool page layout
├── lib/
│   └── utils.ts         # Utility functions for all tools
├── pages/               # Tool pages
│   ├── Home.tsx         # Landing page
│   ├── JSONFormatter.tsx
│   ├── Base64Converter.tsx
│   ├── UUIDGenerator.tsx
│   ├── PasswordGenerator.tsx
│   ├── GradientGenerator.tsx
│   ├── URLEncoder.tsx
│   └── TextTools.tsx
├── App.tsx              # Main app with routing
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **UI Components**: 25+ Radix UI components
- **Animation**: Framer Motion
- **Date Handling**: date-fns
- **HTTP Client**: TanStack React Query

## 📚 Component Library

The project includes a comprehensive collection of reusable components:

- **Form Components**: Input, Select, Checkbox, Radio, Switch
- **Dialog Components**: Dialog, Alert Dialog, Popover
- **Navigation**: Tabs, Navigation Menu, Dropdown Menu
- **Feedback**: Toast notifications, Progress indicators
- **Display**: Cards, Badges, Avatars, Tooltips
- **Layout**: Scroll Area, Separator, Aspect Ratio

## 🎯 Utility Functions

Organized utilities in `src/lib/utils.ts`:

- **JSON**: formatJSON, minifyJSON
- **Base64**: encodeBase64, decodeBase64
- **UUID**: generateUUID, generateMultipleUUIDs
- **Password**: generatePassword with options
- **URL**: encodeURL, decodeURL
- **Text**: reverseString, countCharacters
- **Gradient**: generateLinearGradient, generateRadialGradient
- **Color**: hexToRgb, rgbToHex, isValidColor

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 🌐 Deployment

### Vercel (Recommended)

The project is optimized for Vercel deployment:

```bash
npm i -g vercel
vercel
```

### Other Platforms

The `dist/` folder contains a fully static application that can be deployed to:
- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 📝 Code Quality

- TypeScript strict mode enabled
- ESLint configuration with best practices
- Component-based architecture
- Proper error handling throughout
- Responsive design with mobile-first approach
- Accessibility considerations (semantic HTML, ARIA labels)

## 🎓 Learning Resources

This project demonstrates:

- Advanced React patterns (hooks, routing, composition)
- TypeScript best practices
- Tailwind CSS for modern styling
- Component library architecture
- Responsive design patterns
- Error handling strategies
- State management patterns

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new tools
- Improve existing tools
- Enhance UI/UX
- Optimize performance

## 📞 Contact

Built with ❤️ for developers everywhere.

---

**DevToolHub** - Making developer tools simple, fast, and free.
