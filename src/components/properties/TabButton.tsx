import { TabsTrigger } from '@components/ui/tabs'

type Props = {
  value: string
  label: string
}

export default function TabButton({ value, label }: Props) {
  return (
    <TabsTrigger
      value={value}
      className="flex-1 py-3 border bg-transparent border-stone-200 data-[state=active]:bg-gold-600 data-[state=active]:text-white"
    >
      {label}
    </TabsTrigger>
  )
}
