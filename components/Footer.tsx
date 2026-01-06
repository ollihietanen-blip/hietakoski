'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-deep-charcoal via-slate-blue to-deep-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Hietakoski Oy
            </p>
            <p className="text-white/60 text-sm">
              Y-tunnus 3000614-7
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Navigaatio
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/kohteet', label: 'Kohteet' },
                { href: '/rakentaminen', label: 'Rakentaminen' },
                { href: '/yhteystiedot', label: 'Yhteystiedot' },
                { href: '/yhteystiedot#laskutus', label: 'Laskutus' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block"
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
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Ota yhteyttä
            </h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="mailto:elma.alakoski@mallirakennus.fi"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Mail size={16} className="text-white/50 group-hover:text-aged-copper transition-colors" />
                  <span>elma.alakoski@mallirakennus.fi</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:+358442063617"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Phone size={16} className="text-white/50 group-hover:text-aged-copper transition-colors" />
                  <span>044 206 3617</span>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/50 text-xs md:text-sm">
            © {currentYear} Hietakoski Oy. Kaikki oikeudet pidätetään.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
