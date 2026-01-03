'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="yhteystiedot" className="py-24 md:py-32 bg-gradient-to-b from-mist-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-aged-copper" />
            <span className="text-aged-copper text-sm font-medium tracking-wider uppercase">Yhteystiedot</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight max-w-3xl">
            Ota yhteyttä
          </h2>
          <p className="text-lg md:text-xl text-deep-charcoal/60 max-w-2xl leading-relaxed">
            Olemme täällä auttamassa sinua löytämään unelmiesi kodin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Asuntomyynti */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-aged-copper to-aged-copper/80 flex items-center justify-center mb-4 shadow-lg">
                <ExternalLink className="text-white" size={28} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">Asuntomyynti</h3>
              <p className="text-deep-charcoal/70 text-base leading-relaxed mb-8">
                Katso tarkemmat myyntitiedot ja esittelyt Etuovesta.
              </p>
            </div>
            <motion.a
              href="https://www.etuovi.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Siirry Etuoviin
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>

          {/* Right Column - Hietakoski Oy Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-blue to-slate-blue/80 flex items-center justify-center mb-4 shadow-lg">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">Hietakoski Oy</h3>
              <p className="text-deep-charcoal/70 text-base leading-relaxed mb-8">
                Kiinnostuitko? Kysy lisää asunnoista tai tarjoa tonttia.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:info@hietakoski.fi"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 hover:bg-mist-white/50 transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center group-hover:bg-aged-copper transition-colors duration-200">
                  <Mail className="text-aged-copper group-hover:text-white transition-colors duration-200" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-deep-charcoal font-semibold mb-1 text-sm">Sähköposti</p>
                  <p className="text-deep-charcoal/70 group-hover:text-aged-copper transition-colors">
                    info@hietakoski.fi
                  </p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center">
                  <MapPin className="text-aged-copper" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-deep-charcoal font-semibold mb-1 text-sm">Osoite</p>
                  <p className="text-deep-charcoal/70">Kankaanpää</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

