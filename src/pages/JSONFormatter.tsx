import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { Editor } from '@/components/Editor'
import { CopyButton } from '@/components/CopyButton'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Tabs } from '@/components/Tabs'
import { formatJSON, minifyJSON } from '@/lib/utils'
import { Wand2 } from 'lucide-react'

export const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [indent, setIndent] = useState(2)
  const [activeTab, setActiveTab] = useState('format')

  const handleFormat = () => {
    try {
      setError('')
      const formatted = formatJSON(input, indent)
      setOutput(formatted)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setOutput('')
    }
  }

  const handleMinify = () => {
    try {
      setError('')
      const minified = minifyJSON(input)
      setOutput(minified)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setOutput('')
    }
  }

  const handleValidate = () => {
    try {
      JSON.parse(input)
      setError('')
      setOutput('✓ Valid JSON')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setOutput('')
    }
  }

  return (
    <ToolLayout title="JSON Formatter" description="Format, minify, and validate JSON data">
      <div className="space-y-6">
        <Editor
          value={input}
          onChange={setInput}
          placeholder="Paste your JSON here..."
          label="Input JSON"
          minHeight="h-80"
        />

        {error && <ErrorMessage message={error} />}

        <Tabs
          tabs={[
            { label: 'Format', id: 'format' },
            { label: 'Minify', id: 'minify' },
            { label: 'Validate', id: 'validate' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          {activeTab === 'format' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Indent Spaces
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={indent}
                  onChange={(e) => setIndent(parseInt(e.target.value))}
                  className="w-full"
                />
                <span className="text-xs text-slate-400 mt-1 block">Current: {indent} spaces</span>
              </div>
              <button
                onClick={handleFormat}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Wand2 size={20} />
                Format JSON
              </button>
            </div>
          )}

          {activeTab === 'minify' && (
            <button
              onClick={handleMinify}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Wand2 size={20} />
              Minify JSON
            </button>
          )}

          {activeTab === 'validate' && (
            <button
              onClick={handleValidate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Wand2 size={20} />
              Validate JSON
            </button>
          )}
        </Tabs>

        {output && (
          <div className="space-y-3">
            <Editor
              value={output}
              onChange={() => {}}
              label="Output"
              readonly
              minHeight="h-80"
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
