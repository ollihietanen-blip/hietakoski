'use client'

import { useI18n } from '@/lib/i18n-context'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'fi' ? 'en' : 'fi')
  }

  const currentLanguage = locale.toUpperCase()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center justify-center px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-deep-teal/50 hover:bg-sand-white/50 transition-all duration-200 shadow-sm hover:shadow-md group min-w-[44px]"
      aria-label={`Switch language to ${locale === 'fi' ? 'English' : 'Finnish'}`}
      title={`Switch to ${locale === 'fi' ? 'English' : 'Finnish'}`}
    >
      <motion.span
        key={locale}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="text-sm font-semibold text-dark-muted group-hover:text-deep-teal transition-colors"
      >
        {currentLanguage}
      </motion.span>
    </motion.button>
  )
}
