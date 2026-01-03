'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-deep-charcoal via-slate-blue to-deep-charcoal text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 md:mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              Ekologisia koteja ja vapaa-ajan asuntoja Suomen parhaille paikoille.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-lg md:text-xl mb-5 md:mb-6">Navigaatio</h3>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { href: '/#etusivu', label: 'Etusivu' },
                { href: '/#kohteet', label: 'Kohteet' },
                { href: '/yritys', label: 'Yritys' },
                { href: '/yhteystiedot', label: 'Ota yhteyttä' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-lg md:text-xl mb-5 md:mb-6">Yhteystiedot</h3>
            <ul className="space-y-3 text-sm md:text-base text-white/80">
              <li>
                <motion.a
                  href="mailto:info@hietakoski.fi"
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors inline-block"
                >
                  info@hietakoski.fi
                </motion.a>
              </li>
              <li>Kuninkaanlähteenkatu 8</li>
              <li>38700 Kankaanpää</li>
            </ul>
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

