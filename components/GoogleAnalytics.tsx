'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { hasAnalyticsConsent } from '@/lib/consent'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-B0D76PNX4D'

export default function GoogleAnalytics() {
  const [consentGranted, setConsentGranted] = useState(false)

  // Tarkista consent-tila ja reagoi muutoksiin
  useEffect(() => {
    const checkConsent = () => {
      setConsentGranted(hasAnalyticsConsent())
    }

    // Tarkista heti
    checkConsent()

    // Kuuntele consent-päivityksiä
    const handleConsentUpdate = () => {
      checkConsent()
    }

    window.addEventListener('consent-updated', handleConsentUpdate)

    return () => {
      window.removeEventListener('consent-updated', handleConsentUpdate)
    }
  }, [])

  // Älä lataa gtag.js ennen kuin consent on annettu
  if (!consentGranted) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize gtag
          window.dataLayer = window.dataLayer || []
          function gtag(...args: any[]) {
            window.dataLayer.push(args)
          }
          window.gtag = gtag

          // Set default consent mode (v2) - denied by default
          // Tämä tapahtuu jo ennen kuin gtag.js ladataan,
          // mutta varmistetaan vielä täällä
          gtag('js', new Date())

          // Consent Mode v2: Analytics granted, ads denied
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          })

          // Configure GA4
          gtag('config', GA_MEASUREMENT_ID, {
            anonymize_ip: true,
            // Send page_view automatically on load
            send_page_view: true,
          })
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
          `,
        }}
      />
    </>
  )
}
