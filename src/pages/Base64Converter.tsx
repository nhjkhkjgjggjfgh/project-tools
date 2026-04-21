import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { Editor } from '@/components/Editor'
import { CopyButton } from '@/components/CopyButton'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Tabs } from '@/components/Tabs'
import { encodeBase64, decodeBase64 } from '@/lib/utils'
import { Wand2 } from 'lucide-react'

export const Base64Converter: React.FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('encode')

  const handleEncode = () => {
    try {
      setError('')
      const encoded = encodeBase64(input)
      setOutput(encoded)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to encode')
      setOutput('')
    }
  }

  const handleDecode = () => {
    try {
      setError('')
      const decoded = decodeBase64(input)
      setOutput(decoded)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid Base64 string')
      setOutput('')
    }
  }

  return (
    <ToolLayout title="Base64 Encoder/Decoder" description="Encode and decode Base64 strings">
      <div className="space-y-6">
        <Editor
          value={input}
          onChange={setInput}
          placeholder="Enter text or Base64 string..."
          label="Input"
          minHeight="h-64"
        />

        {error && <ErrorMessage message={error} />}

        <Tabs
          tabs={[
            { label: 'Encode', id: 'encode' },
            { label: 'Decode', id: 'decode' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          <button
            onClick={activeTab === 'encode' ? handleEncode : handleDecode}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Wand2 size={20} />
            {activeTab === 'encode' ? 'Encode to Base64' : 'Decode from Base64'}
          </button>
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
