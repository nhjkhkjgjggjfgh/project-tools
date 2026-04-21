import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ToolLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  showBackButton?: boolean
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({
  title,
  description,
  children,
  showBackButton = true,
}) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <header className="border-b border-slate-700 sticky top-0 bg-slate-900/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-slate-400 text-sm mt-1">{description}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>

      <footer className="border-t border-slate-700 mt-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 DevToolHub. Free forever. • Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  )
}
