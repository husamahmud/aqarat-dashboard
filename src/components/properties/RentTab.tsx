import { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type RentPriceOption = {
  value: string
  label: string
}

const RentTab = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [rentPrices, setRentPrices] = useState<Record<string, number>>({})

  const handleOptionToggle = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== value))
      setRentPrices((prev) => {
        const { [value]: _, ...rest } = prev

        return rest
      })
    } else {
      setSelectedOptions([...selectedOptions, value])
      setRentPrices((prev) => ({ ...prev, [value]: 0 }))
    }
  }

  const handlePriceChange = (value: string, price: number) => {
    setRentPrices((prev) => ({ ...prev, [value]: price }))
  }

  const rentPriceOptions: RentPriceOption[] = [
    { value: 'day', label: 'يوم' },
    { value: 'week', label: 'اسبوع' },
    { value: 'month', label: 'شهر' },
    { value: 'year', label: 'سنوي' },
  ]

  return (
    <div>
      <div className="space-y-2">
        <p className="font-medium [direction:rtl]">نوع الايجار</p>
        <ToggleGroup
          type="multiple"
          className="grid grid-cols-4 [direction:rtl]"
        >
          {rentPriceOptions.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              aria-label={`Toggle ${option.label}`}
              className="border border-stone-200 bg-transparent data-[state=on]:bg-gold-600 data-[state=on]:text-white"
              onClick={() => handleOptionToggle(option.value)}
              data-state={selectedOptions.includes(option.value) ? 'on' : 'off'}
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {selectedOptions.map((option) => (
          <div
            key={option}
            className="space-y-2"
          >
            <InputPrice
              label={rentPriceOptions.find((o) => o.value === option)?.label as string}
              value={rentPrices[option]}
              onChange={(price) => handlePriceChange(option, price)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

interface InputPriceProps {
  label: string
  value: number
  onChange: (price: number) => void
}

const InputPrice: React.FC<InputPriceProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value)

    onChange(isNaN(price) ? 0 : price)
  }

  return (
    <div className="space-y-2">
      <Label
        htmlFor={`input-${label}`}
        className="[direction:rtl]"
      >
        مبلغ الايجار {label}
      </Label>
      <div className="relative">
        <Input
          id={`input-${label}`}
          className="pe-12 ps-6 [direction:rtl]"
          placeholder="ادخل السعر"
          type="text"
          value={value.toString()}
          onChange={handleChange}
        />
        <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
          ر.س
        </span>
      </div>
    </div>
  )
}

export default RentTab
