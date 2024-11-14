import React from 'react'

import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import TabButton from '@/components/properties/TabButton'

import type { CustomTabsProps, TabItem } from '@/types/AddProperty/TabsTypes'

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, label, initialTab }) => {
  return (
    <Tabs
      className="w-full"
      defaultValue={initialTab}
    >
      <p className="pb-3 pt-1 [direction:rtl]">{label}</p>
      <TabsList className="flex w-full gap-3 bg-transparent">
        {tabs.map((tab: TabItem) => (
          <TabButton
            key={tab.value}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </TabsList>

      {tabs.map((tab: TabItem) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="pt-4"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default CustomTabs
