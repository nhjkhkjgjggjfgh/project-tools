import React, { useState } from 'react'
import { ToolLayout } from '@/components/ToolLayout'
import { CopyButton } from '@/components/CopyButton'
import { getGradientCSS } from '@/lib/utils'
import { RefreshCw, Copy } from 'lucide-react'

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

export const GradientGenerator: React.FC = () => {
  const [type, setType] = useState<'linear' | 'radial'>('linear')
  const [angle, setAngle] = useState(90)
  const [color1, setColor1] = useState('#3b82f6')
  const [color2, setColor2] = useState('#1e3a8a')

  const gradientValue = type === 'linear'
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`

  const cssValue = `background: ${gradientValue};`

  const handleRandomize = () => {
    setColor1(randomColor())
    setColor2(randomColor())
    setAngle(Math.floor(Math.random() * 360))
  }

  return (
    <ToolLayout title="Gradient Generator" description="Create beautiful CSS gradients">
      <div className="space-y-6">
        {/* Preview */}
        <div
          className="w-full h-64 rounded-lg border-2 border-slate-700 shadow-lg"
          style={{ background: gradientValue }}
        />

        {/* Type Selection */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Gradient Type</label>
            <div className="flex gap-2">
              {(['linear', 'radial'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                    type === t
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {t === 'linear' ? 'Linear' : 'Radial'}
                </button>
              ))}
            </div>
          </div>

          {/* Angle Slider (Linear Only) */}
          {type === 'linear' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Angle: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          )}

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Color 1</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-12 h-10 rounded-lg cursor-pointer border border-slate-600"
                />
                <input
                  type="text"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white font-mono text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Color 2</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-12 h-10 rounded-lg cursor-pointer border border-slate-600"
                />
                <input
                  type="text"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white font-mono text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleRandomize}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Randomize
          </button>
        </div>

        {/* Output */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-3">
          <h3 className="text-lg font-semibold text-white">CSS</h3>
          <div className="flex gap-2">
            <code className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-blue-300 font-mono text-sm break-all">
              {cssValue}
            </code>
            <CopyButton text={cssValue} label="" />
          </div>

          <h3 className="text-lg font-semibold text-white pt-4">Tailwind</h3>
          <div className="flex gap-2">
            <code className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-blue-300 font-mono text-sm">
              bg-gradient-to-r from-[{color1}] to-[{color2}]
            </code>
            <CopyButton text={`bg-gradient-to-r from-[${color1}] to-[${color2}]`} label="" />
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
