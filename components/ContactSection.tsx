'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="elma" className="py-24 md:py-32 bg-gradient-to-b from-mist-white to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight text-center">
            Kysyttävää kohteista tai esittelyistä?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-2">
              Elma Alakoski-Tomberg
            </h3>
            <p className="text-deep-charcoal/70 text-base md:text-lg">
              Myynti, vuokraus, markkinointi, laskutus — RI
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            <motion.a
              href="tel:+358442063617"
              whileHover={{ x: 5 }}
              className="flex items-center justify-center gap-4 p-4 hover:bg-mist-white/50 transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center group-hover:bg-aged-copper transition-colors duration-200">
                <Phone className="text-aged-copper group-hover:text-white transition-colors duration-200" size={20} />
              </div>
              <p className="text-deep-charcoal font-semibold text-lg group-hover:text-aged-copper transition-colors">
                044 206 3617
              </p>
            </motion.a>

            <motion.a
              href="mailto:elma.alakoski@mallirakennus.fi"
              whileHover={{ x: 5 }}
              className="flex items-center justify-center gap-4 p-4 hover:bg-mist-white/50 transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center group-hover:bg-aged-copper transition-colors duration-200">
                <Mail className="text-aged-copper group-hover:text-white transition-colors duration-200" size={20} />
              </div>
              <p className="text-deep-charcoal font-semibold text-lg group-hover:text-aged-copper transition-colors">
                elma.alakoski@mallirakennus.fi
              </p>
            </motion.a>
          </div>

          <motion.a
            href="mailto:elma.alakoski@mallirakennus.fi"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full text-center px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Ota yhteyttä Elmaan
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

