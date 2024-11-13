// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddCard from '@views/apps/invoice/add/AddCard'
import type { Locale } from '@configs/i18n'

// Data Imports
import { getDictionary } from '@/utils/getDictionary'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/invoice` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}
 */
const InvoiceAdd = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <Grid container
          spacing={6}>
      <Grid item
            xs={12}
            md={12}>
        <AddCard dictionary={dictionary} />
      </Grid>
    </Grid>
  )
}

export default InvoiceAdd
