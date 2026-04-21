import React from 'react'

interface TabsProps {
  tabs: { label: string; id: string }[]
  activeTab: string
  onTabChange: (tabId: string) => void
  children: React.ReactNode
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, children, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex gap-2 border-b border-slate-700 mb-6 -mx-6 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 py-3 font-medium text-sm transition-colors border-b-2
              ${
                activeTab === tab.id
                  ? 'text-blue-400 border-blue-400'
                  : 'text-slate-400 border-transparent hover:text-slate-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  )
}
