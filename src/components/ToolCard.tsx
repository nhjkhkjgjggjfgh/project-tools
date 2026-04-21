import React from 'react'

interface ToolCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
  className?: string
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-slate-800 rounded-lg p-6 border border-slate-700
        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20
        transition-all duration-200 cursor-pointer text-left w-full
        transform hover:-translate-y-1 ${className}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl text-blue-400 flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
    </button>
  )
}
