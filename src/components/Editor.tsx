import React from 'react'

interface EditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  readonly?: boolean
  minHeight?: string
  className?: string
}

export const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  placeholder = 'Enter text...',
  label,
  readonly = false,
  minHeight = 'h-64',
  className = '',
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>}
      <textarea
        value={value}
        onChange={(e) => !readonly && onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readonly}
        className={`
          w-full ${minHeight} px-4 py-3 rounded-lg
          bg-slate-700 border border-slate-600 text-white
          placeholder-slate-500 focus:border-blue-500 focus:ring-2
          focus:ring-blue-500/20 focus:outline-none transition-all
          font-mono text-sm resize-vertical ${className}
          ${readonly ? 'opacity-75 cursor-not-allowed' : ''}
        `}
      />
    </div>
  )
}
