'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Component Imports
import Link from '@components/Link'
import CustomTabList from '@core/components/mui/TabList'
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const ProductInventory = () => {
  // States
  const [activeTab, setActiveTab] = useState('restock')
  const [date, setDate] = useState<Date | null>(null)

  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <Card>
      <CardHeader title='Inventory' />
      <CardContent>
        <TabContext value={activeTab}>
          <div className='flex max-md:flex-col gap-6'>
            <div className='md:is-4/12'>
              <CustomTabList orientation='vertical' onChange={handleChange} pill='true'>
                <Tab
                  value='restock'
                  label='Restock'
                  icon={<i className='bx-cube' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='shipping'
                  label='Shipping'
                  icon={<i className='bx-car' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='global-delivery'
                  label='Global Delivery'
                  icon={<i className='bx-globe' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='attributes'
                  label='Attributes'
                  icon={<i className='bx-link' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
                <Tab
                  value='advanced'
                  label='Advanced'
                  icon={<i className='bx-lock' />}
                  iconPosition='start'
                  className='flex-row justify-start min-is-full text-start'
                />
              </CustomTabList>
            </div>
            <Divider orientation={isBelowMdScreen ? 'horizontal' : 'vertical'} flexItem />
            <div className='md:is-8/12'>
              <TabPanel value='restock' className='flex flex-col gap-4'>
                <Typography className='font-medium'>Options</Typography>
                <div className='flex items-end gap-4'>
                  <CustomTextField label='Add to stock' placeholder='Quantity' size='small' className='flex-auto' />
                  <Button variant='contained'>Confirm</Button>
                </div>
                <div className='flex flex-col gap-2'>
                  <Typography>
                    <span className='text-textPrimary'>Product in stock now:</span> 54
                  </Typography>
                  <Typography>
                    <span className='text-textPrimary'>Product in transit:</span> 390
                  </Typography>
                  <Typography>
                    <span className='text-textPrimary'>Last time restocked:</span> 24th June, 2022
                  </Typography>
                  <Typography>
                    <span className='text-textPrimary'>Total stock over lifetime:</span> 2,430
                  </Typography>
                </div>
              </TabPanel>
              <TabPanel value='shipping'>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium'>Shipping Type</Typography>
                  <RadioGroup
                    name='radio-buttons-group'
                    defaultValue='seller'
                    className='items-start gap-4'
                    aria-labelledby='shipping-type-radio-buttons-group-label'
                  >
                    <FormControlLabel
                      value='seller'
                      control={<Radio className='self-start' />}
                      label={
                        <>
                          <Typography variant='h6'>Fulfilled by Seller</Typography>
                          <Typography variant='body2'>
                            You&apos;ll be responsible for product delivery. Any damage or delay during shipping may
                            cost you a Damage fee
                          </Typography>
                        </>
                      }
                    />
                    <FormControlLabel
                      value='company'
                      control={<Radio className='self-start' />}
                      label={
                        <>
                          <Typography variant='h6'>Fulfilled by Company name</Typography>
                          <Typography variant='body2'>
                            Your product, Our responsibility.For a measly fee, we will handle the delivery process for
                            you.
                          </Typography>
                        </>
                      }
                    />
                  </RadioGroup>
                </div>
              </TabPanel>
              <TabPanel value='global-delivery'>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium'>Global Delivery</Typography>
                  <RadioGroup
                    name='radio-buttons-group'
                    defaultValue='worldwide'
                    className='items-start gap-4'
                    aria-labelledby='global-delivery-radio-buttons-group-label'
                  >
                    <FormControlLabel
                      value='worldwide'
                      control={<Radio className='self-start' />}
                      label={
                        <>
                          <Typography variant='h6'>Worldwide delivery</Typography>
                          <Typography variant='body2'>
                            Only available with Shipping method:{' '}
                            <Link className='text-primary'>Fulfilled by Company name</Link>
                          </Typography>
                        </>
                      }
                    />
                    <FormControlLabel
                      value='selected'
                      control={<Radio className='self-start' />}
                      label={
                        <>
                          <Typography variant='h6'>Selected Countries</Typography>
                          <CustomTextField placeholder='USA' size='small' />
                        </>
                      }
                    />
                    <FormControlLabel
                      value='local'
                      control={<Radio className='self-start' />}
                      label={
                        <>
                          <Typography variant='h6'>Local delivery</Typography>
                          <Typography variant='body2'>
                            Deliver to your country of residence{' '}
                            <Link className='text-primary'>Change profile address</Link>
                          </Typography>
                        </>
                      }
                    />
                  </RadioGroup>
                </div>
              </TabPanel>
              <TabPanel value='attributes'>
                <FormGroup className='items-start'>
                  <Typography className='font-medium mbe-2'>Attributes</Typography>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography variant='h6'>Fragile Product</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    className='mbe-2'
                    label={<Typography variant='h6'>Biodegradable</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    className='mbe-4'
                    label={
                      <>
                        <Typography variant='h6'>Frozen Product</Typography>
                        <CustomTextField placeholder='40 C' size='small' />
                      </>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <>
                        <Typography variant='h6'>Expiry Date of Product</Typography>
                        <AppReactDatepicker
                          selected={date}
                          onChange={(date: Date | null) => setDate(date)}
                          placeholderText='MM/DD/YYYY'
                          customInput={<CustomTextField fullWidth size='small' />}
                        />
                      </>
                    }
                  />
                </FormGroup>
              </TabPanel>
              <TabPanel value='advanced'>
                <FormGroup className='flex flex-col gap-4'>
                  <Typography className='font-medium'>Advanced</Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={7}>
                      <CustomTextField select fullWidth label='Product ID Type' defaultValue='ISBN'>
                        <MenuItem value='ISBN'>ISBN</MenuItem>
                        <MenuItem value='UPC'>UPC</MenuItem>
                        <MenuItem value='EAN'>EAN</MenuItem>
                        <MenuItem value='JAN'>JAN</MenuItem>
                      </CustomTextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <CustomTextField fullWidth label='Product ID' placeholder='100023' size='small' />
                    </Grid>
                  </Grid>
                </FormGroup>
              </TabPanel>
            </div>
          </div>
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default ProductInventory