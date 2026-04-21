import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { CopyButton } from '@/components/CopyButton'
import { generateUUID, generateMultipleUUIDs } from '@/lib/utils'
import { RefreshCw } from 'lucide-react'

export const UUIDGenerator: React.FC = () => {
  const [count, setCount] = useState(1)
  const [uuids, setUUIDs] = useState<string[]>([generateUUID()])
  const [format, setFormat] = useState<'standard' | 'uppercase' | 'no-dash'>('standard')

  const handleGenerate = () => {
    const generated = generateMultipleUUIDs(count)
    setUUIDs(generated)
  }

  const formatUUID = (uuid: string): string => {
    switch (format) {
      case 'uppercase':
        return uuid.toUpperCase()
      case 'no-dash':
        return uuid.replace(/-/g, '')
      default:
        return uuid
    }
  }

  const formattedUUIDs = uuids.map(formatUUID)

  return (
    <ToolLayout title="UUID Generator" description="Generate unique identifiers">
      <div className="space-y-6">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Number of UUIDs</label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value)))}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Format</label>
            <div className="grid grid-cols-3 gap-2">
              {(['standard', 'uppercase', 'no-dash'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`py-2 px-3 rounded-lg font-medium text-sm transition-colors ${
                    format === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {f === 'standard' && 'Standard'}
                  {f === 'uppercase' && 'Uppercase'}
                  {f === 'no-dash' && 'No Dash'}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Generate UUIDs
          </button>
        </div>

        {uuids.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Generated UUIDs</h3>
              <span className="text-sm text-slate-400">{uuids.length} UUID{uuids.length > 1 ? 's' : ''}</span>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 max-h-96 overflow-y-auto space-y-2">
              {formattedUUIDs.map((uuid, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors group"
                >
                  <code className="text-sm text-blue-300 font-mono flex-1 break-all">{uuid}</code>
                  <CopyButton text={uuid} label="" />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <CopyButton text={formattedUUIDs.join('\n')} label="Copy All" />
              <button
                onClick={() => setUUIDs([])}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
