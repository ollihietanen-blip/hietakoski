'use client'

import { useState, useEffect } from 'react'
import { X, Check } from 'lucide-react'
import { getConsent, setConsent, hasConsentChoice, type CookieConsent } from '@/lib/consent'

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Automaattinen hyväksyntä kehitysympäristössä (vain localhost)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      const consent = getConsent()
      if (!consent) {
        // Hyväksy automaattisesti kehitysympäristössä
        const autoConsent: CookieConsent = {
          necessary: true,
          analytics: true,
          updatedAt: new Date().toISOString(),
        }
        setConsent(autoConsent)
        setAnalyticsEnabled(true)
        return
      }
    }

    // Näytä banner vain jos konsenttia ei ole vielä annettu
    if (!hasConsentChoice()) {
      setShowBanner(true)
    }

    // Tarkista nykyinen analytics-tila
    const consent = getConsent()
    if (consent) {
      setAnalyticsEnabled(consent.analytics)
    }

    // Kuuntele consent-päivityksiä (esim. footer-linkin kautta)
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsent>
      setAnalyticsEnabled(customEvent.detail.analytics)
      setShowBanner(true)
      setShowSettings(true)
    }

    window.addEventListener('consent-updated', handleConsentUpdate)
    window.addEventListener('open-cookie-settings', () => {
      setShowBanner(true)
      setShowSettings(true)
    })

    return () => {
      window.removeEventListener('consent-updated', handleConsentUpdate)
      window.removeEventListener('open-cookie-settings', () => {})
    }
  }, [])

  const saveConsent = (analytics: boolean) => {
    const consent: CookieConsent = {
      necessary: true, // Välttämättömät aina päällä
      analytics,
      updatedAt: new Date().toISOString(),
    }
    setConsent(consent)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleAcceptAll = () => {
    saveConsent(true)
  }

  const handleReject = () => {
    saveConsent(false)
  }

  const handleSaveSettings = () => {
    saveConsent(analyticsEnabled)
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-bold text-base md:text-lg text-dark-muted mb-2">
                  Evästeasetukset
                </h3>
                <p className="text-sm text-body-text leading-relaxed">
                  Käytämme välttämättömiä evästeitä sivuston toimintaan sekä (valinnaisesti) analytiikkaevästeitä palvelun kehittämiseen. Voit muuttaa valintasi milloin tahansa.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm font-medium text-body-text bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Hylkää
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-body-text bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Asetukset
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-deep-teal rounded-md hover:bg-deep-teal/90 transition-colors"
                >
                  Hyväksy kaikki
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-xl text-dark-muted">
                  Evästeasetukset
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-body-text hover:text-dark-muted transition-colors"
                  aria-label="Sulje"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-body-text mb-6 leading-relaxed">
                Valitse mitkä evästeet haluat sallia. Välttämättömät evästeet ovat aina käytössä, koska ne ovat välttämättömiä sivuston toiminnan kannalta.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {/* Välttämättömät - aina päällä */}
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-dark-muted mb-1">
                        Välttämättömät evästeet
                      </h3>
                      <p className="text-sm text-meta-text">
                        Nämä evästeet ovat välttämättömiä sivuston perustoiminnalle eivätkä voida poistaa käytöstä.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-10 h-6 bg-deep-teal rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-60">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytiikka - valittavissa */}
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-dark-muted mb-1">
                        Analytiikkaevästeet
                      </h3>
                      <p className="text-sm text-meta-text">
                        Nämä evästeet keräävät anonyymiä tietoa sivuston käytöstä, jotta voimme parantaa palveluamme.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                        className={`relative w-10 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 ${
                          analyticsEnabled ? 'bg-deep-teal' : 'bg-gray-300'
                        }`}
                        aria-label="Ota analytiikka käyttöön"
                        role="switch"
                        aria-checked={analyticsEnabled}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            analyticsEnabled ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                        {analyticsEnabled && (
                          <Check size={14} className="absolute top-1 left-1 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-sm font-medium text-body-text bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Peruuta
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 text-sm font-medium text-white bg-deep-teal rounded-md hover:bg-deep-teal/90 transition-colors"
                >
                  Tallenna
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
