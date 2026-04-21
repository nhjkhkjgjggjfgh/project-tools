import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { CopyButton } from '@/components/CopyButton'
import { generatePassword } from '@/lib/utils'
import { RefreshCw, Eye, EyeOff } from 'lucide-react'

export const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState(generatePassword())
  const [length, setLength] = useState(16)
  const [showPassword, setShowPassword] = useState(false)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })

  const handleGenerate = () => {
    const newPassword = generatePassword(length, options)
    setPassword(newPassword)
  }

  const toggleOption = (key: keyof typeof options) => {
    const updated = { ...options, [key]: !options[key] }
    const hasAtLeastOne = Object.values(updated).some((v) => v)
    if (hasAtLeastOne) {
      setOptions(updated)
    }
  }

  const strengthScore = [
    options.uppercase,
    options.lowercase,
    options.numbers,
    options.symbols,
  ].filter(Boolean).length

  const strengthColor =
    strengthScore <= 1
      ? 'bg-red-600'
      : strengthScore === 2
        ? 'bg-yellow-600'
        : strengthScore === 3
          ? 'bg-blue-600'
          : 'bg-green-600'

  return (
    <ToolLayout title="Password Generator" description="Create secure random passwords">
      <div className="space-y-6">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-4">
          {/* Password Display */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Generated Password</label>
            <div className="flex gap-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                readOnly
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white font-mono text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <CopyButton text={password} label="" />
            </div>
          </div>

          {/* Strength Indicator */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password Strength</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    i <= strengthScore ? strengthColor : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {strengthScore === 1 && 'Weak'}
              {strengthScore === 2 && 'Fair'}
              {strengthScore === 3 && 'Good'}
              {strengthScore === 4 && 'Strong'}
            </p>
          </div>

          {/* Length */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Length: {length} characters
            </label>
            <input
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Options</label>
            <div className="space-y-2">
              {(
                [
                  { key: 'uppercase', label: 'Uppercase Letters (A-Z)' },
                  { key: 'lowercase', label: 'Lowercase Letters (a-z)' },
                  { key: 'numbers', label: 'Numbers (0-9)' },
                  { key: 'symbols', label: 'Symbols (!@#$...)' },
                ] as const
              ).map(({ key, label }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={() => toggleOption(key)}
                    className="w-4 h-4 rounded bg-slate-700 border-slate-600 cursor-pointer"
                  />
                  <span className="text-sm text-slate-300">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Generate Password
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
