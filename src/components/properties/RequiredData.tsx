import CustomTabs from '@components/properties/CustomTabs'
import SaleTab from '@components/properties/SaleTab'
import RentTab from '@components/properties/RentTab'
import { Button } from '@components/ui/button'

import type { TabItem } from '@/types/AddProperty/TabsTypes'
import type { FormEvent } from 'react'

export default function RequiredData() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const PROPERTY_TYPES: TabItem[] = [
    {
      value: 'sale',
      label: 'للبيع',
      content: <SaleTab />,
    },
    {
      value: 'rent',
      label: 'للايجار',
      content: <RentTab />,
    },
  ]

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="text-lg font-medium text-gold-400">المعلومات الاساسية</p>

      <div>
        <p className="font-semibold [direction:rtl]">سبب عرض العقار</p>
        <CustomTabs
          tabs={PROPERTY_TYPES}
          label="عرض العقار"
        />
      </div>

      <Button type="submit">submit</Button>
    </form>
  )
}
