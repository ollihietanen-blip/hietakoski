'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Rakennamme muuttovalmiit kodit kasvukeskuksiin. Kotimaiset puuelementit, hallittu toteutus ja selkeät vastuut.
            </p>
            <p className="text-white/50 text-xs">
              Y-tunnus 3000614-7
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-base mb-6 text-white">
              Sivusto
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/kohteet', label: 'Kohteet' },
                { href: '/rakentaminen', label: 'Rakentaminen' },
                { href: '/yhteystiedot', label: 'Yhteystiedot' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1 cursor-pointer"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
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
            <h3 className="font-display font-bold text-base mb-6 text-white">
              Myynti
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-white/90 font-medium text-sm mb-1">Elma Alakoski-Tomberg</p>
              </li>
              <li>
                <a
                  href="tel:+358442063617"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Phone size={14} className="text-aged-copper" />
                  <span>044 206 3617</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:elma.alakoski@mallirakennus.fi"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Mail size={14} className="text-aged-copper" />
                  <span>elma.alakoski@mallirakennus.fi</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-bold text-base mb-6 text-white">
              Postiosoite
            </h3>
            <div className="flex items-start gap-3 text-white/70 text-sm">
              <MapPin size={14} className="text-aged-copper mt-0.5 flex-shrink-0" />
              <div>
                <p>Kuninkaanlähteenkatu 8</p>
                <p>38700 Kankaanpää</p>
              </div>
            </div>

            <Link href="/yhteystiedot#laskutus" className="mt-6 block">
              <motion.span
                whileHover={{ x: 4 }}
                className="text-aged-copper hover:text-aged-copper/80 text-sm inline-flex items-center gap-1 cursor-pointer"
              >
                Laskutustiedot
                <ArrowRight size={14} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-xs">
            © {currentYear} Hietakoski Oy. Kaikki oikeudet pidätetään.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
