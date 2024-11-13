import { FormProvider, useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import type { getDictionary } from '@/utils/getDictionary'
import ToggleButtonGroupField
  from '@components/properties/ToggleButtonGroupField'


type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export default function AddPropertyForm({ dictionary }: Props) {
  const methods = useForm<FormData>()
  const { handleSubmit } = methods

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-medium text-gold-400">
          {dictionary['dashboard'].requiredData}
        </p>

        <div className="space-y-2">
          <p className="font-medium">سبب عرض</p>

          <ToggleButtonGroupField
            name="type"
            label="عرض العقار"
            gridColumns={4}
            options={[
              { value: 'sale', label: 'بيع' },
              { value: 'rent', label: 'ايجار' },
              { value: 'rent', label: 'ايجار' },
            ]}
          />
        </div>
      </form>
    </FormProvider>
  )
}
