'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-deep-charcoal via-slate-blue to-deep-charcoal text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-white/70 text-sm">
              Hietakoski Oy | Y-tunnus 3000614-7
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
          >
            <motion.a
              href="/kohteet"
              whileHover={{ x: 5 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              Kohteet
            </motion.a>
            <motion.a
              href="/miksi-hietakoski"
              whileHover={{ x: 5 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              Miksi Hietakoski
            </motion.a>
            <motion.a
              href="/yhteystiedot"
              whileHover={{ x: 5 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              Yhteystiedot
            </motion.a>
            <motion.a
              href="/yhteystiedot#laskutus"
              whileHover={{ x: 5 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              Laskutus
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 pt-8 text-center text-sm text-white/60"
        >
          <p>© {currentYear} Hietakoski Oy. Kaikki oikeudet pidätetään.</p>
        </motion.div>
      </div>
    </footer>
  )
}

