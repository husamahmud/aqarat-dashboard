import type { ReactNode } from 'react'

export type TabItem = {
  value: string
  label: string
  content: ReactNode
}

export type CustomTabsProps = {
  tabs: TabItem[]
  label: string
  initialTab?: string
}
