// Next Imports
import { headers } from 'next/headers'
import { Noto_Kufi_Arabic } from 'next/font/google'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import clx from 'clsx'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// HOC Imports
import TranslationWrapper from '@/hocs/TranslationWrapper'

// Config Imports
import { i18n } from '@configs/i18n'

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

const RootLayout = ({ children, params }: ChildrenType & {
  params: { lang: Locale }
}) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]

  return (
    <TranslationWrapper headersList={headersList}
                        lang={params.lang}>
      <html id="__next"
            lang={params.lang}
            dir={direction}>
      <body className={clx('flex is-full min-bs-full flex-auto flex-col', notoKufiArabic.className)}>{children}</body>
      </html>
    </TranslationWrapper>
  )
}

export default RootLayout
