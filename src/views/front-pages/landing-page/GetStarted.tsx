// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Hooks Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const GetStarted = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const getStartedImageLight = '/images/front-pages/landing-page/get-started-bg-light.png'
  const getStartedImageDark = '/images/front-pages/landing-page/get-started-bg-dark.png'

  // Hooks
  const getStartedImage = useImageVariant(mode, getStartedImageLight, getStartedImageDark)

  return (
    <section className='relative'>
      <img
        src={getStartedImage}
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      />
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-8 gap-x-28',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex flex-col items-center lg:items-start gap-8 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h3' color='primary' className='font-bold text-[2.125rem] leading-[44px]'>
              Ready to Get Started?
            </Typography>
            <Typography variant='h5' color='text.secondary'>
              Start your project with a 14-day free trial
            </Typography>
          </div>
          <Button component={Link} size='large' href='/front-pages/payment' variant='contained'>
            Get Started
          </Button>
        </div>
        <div className='flex lg:pbs-16 z-[1]'>
          <img
            src='/images/front-pages/landing-page/crm-dashboard.png'
            alt='dashboard-image'
            className='max-is-[454px] is-full rounded-bs'
          />
        </div>
      </div>
    </section>
  )
}

export default GetStarted