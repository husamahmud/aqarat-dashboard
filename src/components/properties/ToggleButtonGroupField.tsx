import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface Option {
  value: string;
  label: string;
}

interface ToggleButtonGroupFieldProps {
  name: string;
  options: Option[];
  label: string;
  gridColumns?: number
}

const gridColumnClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
}

export default function ToggleButtonGroupField({
                                                 name,
                                                 options,
                                                 label,
                                                 gridColumns = 2,
                                               }: ToggleButtonGroupFieldProps) {
  const { register } = useFormContext()
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newValue: string | null) => {
    setValue(newValue || '')
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}
             className="block font-medium mb-2">
        {label}
      </label>

      <ToggleButtonGroup
        value={value}
        exclusive
        {...register(name)}
        onChange={handleChange}
        aria-label={label}
        className="w-full grid grid-cols-2 gap-4"
      >
        {options.map((option: Option, index: number) => (
          <ToggleButton
            key={index}
            value={option.value}
            aria-label={option.label}
            className={`flex-1 rounded-lg ${gridColumnClasses[gridColumns]} border-r border-gray-300`}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}
