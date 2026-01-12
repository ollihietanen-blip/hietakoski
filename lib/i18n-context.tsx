'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, translations, defaultLocale } from './i18n'

type Translations = typeof translations[Locale]

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with default locale to avoid hydration issues
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Load locale from localStorage after mount
    try {
      const savedLocale = localStorage.getItem('locale') as Locale | null
      if (savedLocale && (savedLocale === 'fi' || savedLocale === 'en')) {
        setLocaleState(savedLocale)
        if (typeof document !== 'undefined') {
          document.documentElement.lang = savedLocale
        }
      } else if (typeof document !== 'undefined') {
        document.documentElement.lang = defaultLocale
      }
    } catch (error) {
      // localStorage might not be available
      console.error('Error loading locale from localStorage:', error)
      if (typeof document !== 'undefined') {
        document.documentElement.lang = defaultLocale
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', newLocale)
        document.documentElement.lang = newLocale
      }
    } catch (error) {
      console.error('Error saving locale to localStorage:', error)
    }
  }

  // Ensure we always have valid translations
  const currentLocale = (locale === 'fi' || locale === 'en') ? locale : defaultLocale
  const value: I18nContextType = {
    locale: currentLocale,
    setLocale,
    t: translations[currentLocale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
