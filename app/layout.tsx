import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Suspense } from 'react'
import { I18nProvider } from '@/lib/i18n-context'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { OrganizationStructuredData, RealEstateAgentStructuredData } from '@/components/StructuredData'
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
  metadataBase: new URL('https://hietakoski.fi'),
  title: {
    default: 'Hietakoski Oy – Muuttovalmiit kodit ja loma-asunnot',
    template: '%s | Hietakoski Oy',
  },
  description: 'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille. Uusimaa – Pirkanmaa – Lappi.',
  keywords: [
    'muuttovalmis koti',
    'paritalo',
    'rivitalo',
    'loma-asunto',
    'uudiskohde',
    'Hietakoski',
    'rakentaminen',
    'Uusimaa',
    'Pirkanmaa',
    'Lappi',
    'Tuusula',
    'Vantaa',
    'Tampere',
    'Levi',
  ],
  authors: [{ name: 'Hietakoski Oy' }],
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: 'https://hietakoski.fi',
    siteName: 'Hietakoski Oy',
    title: 'Hietakoski Oy – Muuttovalmiit kodit ja loma-asunnot',
    description: 'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille. Uusimaa – Pirkanmaa – Lappi.',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hietakoski Oy – Muuttovalmiit kodit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hietakoski Oy – Muuttovalmiit kodit ja loma-asunnot',
    description: 'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille.',
    images: ['/hero.jpg'],
  },
  alternates: {
    canonical: 'https://hietakoski.fi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <OrganizationStructuredData />
        <RealEstateAgentStructuredData />
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

