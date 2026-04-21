import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { Editor } from '@/components/Editor'
import { CopyButton } from '@/components/CopyButton'
import { Tabs } from '@/components/Tabs'
import { countCharacters, reverseString } from '@/lib/utils'
import { Type, RefreshCw } from 'lucide-react'

export const TextTools: React.FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [activeTab, setActiveTab] = useState('stats')

  const stats = countCharacters(input)

  const handleReverse = () => {
    setOutput(reverseString(input))
  }

  const handleUppercase = () => {
    setOutput(input.toUpperCase())
  }

  const handleLowercase = () => {
    setOutput(input.toLowerCase())
  }

  const handleCapitalize = () => {
    setOutput(
      input
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    )
  }

  const handleRemoveSpaces = () => {
    setOutput(input.replace(/\s/g, ''))
  }

  const handleRemoveDuplicates = () => {
    const lines = input.split('\n')
    const unique = [...new Set(lines)]
    setOutput(unique.join('\n'))
  }

  return (
    <ToolLayout title="Text Tools" description="Manipulate and analyze text">
      <div className="space-y-6">
        <Editor
          value={input}
          onChange={setInput}
          placeholder="Enter your text here..."
          label="Input Text"
          minHeight="h-64"
        />

        <Tabs
          tabs={[
            { label: 'Character Stats', id: 'stats' },
            { label: 'Transform', id: 'transform' },
            { label: 'Modify', id: 'modify' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          {activeTab === 'stats' && (
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-slate-400 text-sm mb-1">Total Characters</p>
                <p className="text-3xl font-bold text-blue-400">{stats.total}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-slate-400 text-sm mb-1">Without Spaces</p>
                <p className="text-3xl font-bold text-blue-400">{stats.noSpaces}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-slate-400 text-sm mb-1">Words</p>
                <p className="text-3xl font-bold text-blue-400">{stats.words}</p>
              </div>
            </div>
          )}

          {activeTab === 'transform' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleUppercase}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Type size={18} />
                UPPERCASE
              </button>
              <button
                onClick={handleLowercase}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Type size={18} />
                lowercase
              </button>
              <button
                onClick={handleCapitalize}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Type size={18} />
                Capitalize
              </button>
              <button
                onClick={handleReverse}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Reverse
              </button>
            </div>
          )}

          {activeTab === 'modify' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleRemoveSpaces}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Remove Spaces
              </button>
              <button
                onClick={handleRemoveDuplicates}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Remove Duplicates
              </button>
            </div>
          )}
        </Tabs>

        {output && (
          <div className="space-y-3">
            <Editor
              value={output}
              onChange={() => {}}
              label="Output"
              readonly
              minHeight="h-64"
            />
            <div className="flex gap-3">
              <CopyButton text={output} />
              <button
                onClick={() => {
                  setInput(output)
                  setOutput('')
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
              >
                Use as Input
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
