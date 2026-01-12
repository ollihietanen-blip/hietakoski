'use client'

export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  updatedAt: string
}

const CONSENT_STORAGE_KEY = 'cookie_consent'

/**
 * Hae tallennettu consent-tieto localStorageesta
 */
export function getConsent(): CookieConsent | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) {
      return null
    }
    return JSON.parse(stored) as CookieConsent
  } catch (error) {
    console.error('Error reading consent from localStorage:', error)
    return null
  }
}

/**
 * Tallenna consent-tieto localStorageen
 */
export function setConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    // Varmista että consent on serialisoitavissa
    const serializableConsent = {
      necessary: Boolean(consent.necessary),
      analytics: Boolean(consent.analytics),
      updatedAt: String(consent.updatedAt),
    }
    
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(serializableConsent))
    
    // Lähetä custom event, jotta komponentit voivat reagoida muutoksiin
    // Varmista että detail on serialisoitavissa
    window.dispatchEvent(new CustomEvent('consent-updated', { 
      detail: serializableConsent 
    }))
  } catch (error) {
    console.error('Error saving consent to localStorage:', error)
  }
}

/**
 * Tarkista onko analytics-consent annettu
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getConsent()
  return consent?.analytics === true
}

/**
 * Tarkista onko mitään consent-tietoa tallennettu
 */
export function hasConsentChoice(): boolean {
  return getConsent() !== null
}
