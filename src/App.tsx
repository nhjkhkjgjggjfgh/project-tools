import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <header className="border-b border-slate-700 sticky top-0 bg-slate-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-3xl font-bold">DevToolHub</h1>
            <p className="text-slate-300 text-sm mt-1">AI-Powered Developer Tools</p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to DevToolHub</h2>
            <p className="text-xl text-slate-300 mb-8">
              Free, AI-powered developer tools in one place
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Format JSON, encode Base64, generate UUIDs, passwords, gradients — instant, in your browser.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">JSON Formatter</h3>
              <p className="text-slate-300">Format and beautify JSON data instantly</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">Base64 Encoder</h3>
              <p className="text-slate-300">Encode and decode Base64 strings</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">UUID Generator</h3>
              <p className="text-slate-300">Generate unique identifiers instantly</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">Password Generator</h3>
              <p className="text-slate-300">Create secure random passwords</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">Gradient Generator</h3>
              <p className="text-slate-300">Create beautiful CSS gradients</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-slate-300">AI-powered help with every tool</p>
            </div>
          </section>

          <section className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <h2 className="text-2xl font-bold mb-4">Try it now</h2>
            <p className="text-slate-300 mb-6">Get started with our developer tools today</p>
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Get Started (clicked {count} times)
            </button>
          </section>
        </main>

        <footer className="border-t border-slate-700 mt-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
            <p>&copy; 2026 DevToolHub. Free forever.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
