import React from 'react'
import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  message: string
  className?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  return (
    <div
      className={`
        flex items-start gap-3 p-4 rounded-lg
        bg-red-900/30 border border-red-700 text-red-300 ${className}
      `}
    >
      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
      <p className="text-sm">{message}</p>
    </div>
  )
}
