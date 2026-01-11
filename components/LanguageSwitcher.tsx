'use client'

import { useI18n } from '@/lib/i18n-context'
import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'fi' ? 'en' : 'fi')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-dark-muted hover:text-deep-teal transition-colors rounded-lg hover:bg-sand-white"
      aria-label="Switch language"
    >
      <Languages size={18} />
      <span className="uppercase">{locale}</span>
    </motion.button>
  )
}
