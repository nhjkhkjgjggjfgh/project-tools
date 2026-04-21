import React from 'react'
import { Copy, Check } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'

interface CopyButtonProps {
  text: string
  className?: string
  label?: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, className = '', label = 'Copy' }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        bg-blue-600 hover:bg-blue-700 text-white font-medium
        transition-all duration-200 ${className}
      `}
    >
      {copied ? (
        <>
          <Check size={18} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={18} />
          {label}
        </>
      )}
    </button>
  )
}
