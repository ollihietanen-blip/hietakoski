import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Suspense } from 'react'
import { I18nProvider } from '@/lib/i18n-context'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hietakoski Oy – Muuttovalmiit kodit ja loma-asunnot',
  description: 'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille. Uusimaa – Pirkanmaa – Lappi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <CookieConsentBanner />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}

