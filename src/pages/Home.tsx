import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToolCard } from '@/components/ToolCard'
import {
  Code2,
  Lock,
  Zap,
  Type,
  Link2,
  Palette,
  Github,
} from 'lucide-react'

export const Home: React.FC = () => {
  const navigate = useNavigate()

  const tools = [
    {
      id: 'json',
      title: 'JSON Formatter',
      description: 'Format, minify, and validate JSON with multiple indent options',
      icon: <Code2 />,
      path: '/tools/json-formatter',
    },
    {
      id: 'base64',
      title: 'Base64 Encoder',
      description: 'Encode and decode Base64 strings instantly',
      icon: <Lock />,
      path: '/tools/base64-converter',
    },
    {
      id: 'uuid',
      title: 'UUID Generator',
      description: 'Generate unique identifiers in multiple formats',
      icon: <Zap />,
      path: '/tools/uuid-generator',
    },
    {
      id: 'password',
      title: 'Password Generator',
      description: 'Create strong, secure random passwords with custom rules',
      icon: <Lock />,
      path: '/tools/password-generator',
    },
    {
      id: 'url',
      title: 'URL Encoder',
      description: 'Encode and decode URLs and query parameters',
      icon: <Link2 />,
      path: '/tools/url-encoder',
    },
    {
      id: 'gradient',
      title: 'Gradient Generator',
      description: 'Create beautiful CSS gradients with live preview',
      icon: <Palette />,
      path: '/tools/gradient-generator',
    },
    {
      id: 'text',
      title: 'Text Tools',
      description: 'Transform, analyze, and manipulate text data',
      icon: <Type />,
      path: '/tools/text-tools',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 bg-slate-900/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DevToolHub
              </h1>
              <p className="text-slate-400 text-sm mt-1">AI-Powered Developer Tools</p>
            </div>
            <a
              href="https://github.com"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Every Developer Tool
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                In One Place
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-2 max-w-2xl mx-auto">
              Free, fast, and powerful developer tools. Format JSON, encode Base64, generate passwords,
              and more — all instant, right in your browser.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No sign-ups. No limits. No ads. Just pure productivity.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-3 gap-4 mb-16">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-2xl font-bold text-blue-400">7+</p>
            <p className="text-slate-400 text-sm mt-1">Tools Available</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-2xl font-bold text-cyan-400">∞</p>
            <p className="text-slate-400 text-sm mt-1">Free Forever</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-2xl font-bold text-emerald-400">100%</p>
            <p className="text-slate-400 text-sm mt-1">Privacy Focused</p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Available Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                onClick={() => navigate(tool.path)}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8">Why DevToolHub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lightning Fast', desc: 'Instant results, no waiting' },
              { title: 'Privacy First', desc: 'Everything runs locally' },
              { title: 'No Limits', desc: 'Process unlimited data' },
              { title: 'Always Free', desc: 'No premium tiers' },
            ].map((feature, i) => (
              <div key={i}>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-3">Ready to boost your productivity?</h3>
          <p className="text-slate-300 mb-6">
            Start using our tools right now. No setup required.
          </p>
          <button
            onClick={() => navigate('/tools/json-formatter')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get Started
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">DevToolHub</h4>
              <p className="text-slate-400 text-sm">
                Free, fast developer tools for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {tools.map((tool) => (
                  <li key={tool.id}>
                    <button
                      onClick={() => navigate(tool.path)}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {tool.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 DevToolHub. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
