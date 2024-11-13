import { Noto_Kufi_Arabic } from 'next/font/google'

// MUI Imports
import Button from '@mui/material/Button'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import clx from 'clsx'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@components/layout/front-pages'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['arabic', 'latin'],
})

export const metadata = {
  title: 'Sneat - MUI Next.js Admin Dashboard Template',
  description:
    'Sneat - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.',
}

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const systemMode = getSystemMode()

  return (
    <html id="__next">
    <body className={clx('flex is-full min-bs-full flex-auto flex-col', notoKufiArabic.className)}>
    <Providers direction="ltr">
      <BlankLayout systemMode={systemMode}>
        <IntersectionProvider>
          <FrontLayout>
            {children}
            <ScrollToTop className="mui-fixed">
              <Button
                variant="contained"
                className="is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center"
              >
                <i className="bx-up-arrow-alt" />
              </Button>
            </ScrollToTop>
          </FrontLayout>
        </IntersectionProvider>
      </BlankLayout>
    </Providers>
    </body>
    </html>
  )
}

export default Layout
