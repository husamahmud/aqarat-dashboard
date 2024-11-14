'use client'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import type { getDictionary } from '@/utils/getDictionary'
import AddPropertyForm from '@components/properties/AddPropertyForm'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

const AddAction = ({ dictionary }: Props) => {
  return (
    <Card className="">
      <CardContent className="sm:!p-12">
        <Grid container>
          <Grid
            item
            xs={12}
            className="mb-5"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{dictionary['dashboard'].addProperty}</p>
              <p>{dictionary['dashboard'].inputData}</p>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            className="rounded-lg border border-stone-100 p-5"
          >
            <AddPropertyForm />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AddAction
