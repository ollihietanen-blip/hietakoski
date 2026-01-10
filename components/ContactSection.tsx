'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="elma" className="py-20 md:py-28 bg-gradient-to-b from-warm-rose/20 to-sand-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted mb-4 leading-[1.1] tracking-tight">
            Kysyttävää kohteista tai esittelyistä?
          </h2>
          <p className="text-body-text text-base md:text-lg">
            Elma auttaa kaikissa kohteisiin ja myyntiin liittyvissä kysymyksissä.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Image and name */}
            <div className="text-center md:text-left">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-6 rounded-2xl overflow-hidden border-4 border-deep-teal/20 shadow-md">
                <Image
                  src="/Elma_Alakoski.jpg"
                  alt="Elma Alakoski-Tomberg"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-2">
                Elma Alakoski-Tomberg
              </h3>
              <p className="text-meta-text text-base md:text-lg">
                Myynti ja vuokraus
              </p>
            </div>

            {/* Right: Contact info and CTA */}
            <div className="space-y-4">
              <motion.a
                href="tel:+358442063617"
                whileHover={{ x: 5, backgroundColor: 'rgba(67, 144, 147, 0.05)' }}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-deep-teal/30 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal/10 rounded-xl flex items-center justify-center group-hover:bg-deep-teal transition-colors duration-200">
                  <Phone className="text-deep-teal group-hover:text-white transition-colors duration-200" size={22} />
                </div>
                <div>
                  <p className="text-dark-muted font-semibold text-lg group-hover:text-deep-teal transition-colors">
                    044 206 3617
                  </p>
                  <p className="text-meta-text text-sm">Soita tai tekstaa</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:elma.alakoski@areagroup.fi"
                whileHover={{ x: 5, backgroundColor: 'rgba(67, 144, 147, 0.05)' }}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-deep-teal/30 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal/10 rounded-xl flex items-center justify-center group-hover:bg-deep-teal transition-colors duration-200">
                  <Mail className="text-deep-teal group-hover:text-white transition-colors duration-200" size={22} />
                </div>
                <div>
                  <p className="text-dark-muted font-semibold text-lg group-hover:text-deep-teal transition-colors">
                    elma.alakoski@areagroup.fi
                  </p>
                  <p className="text-meta-text text-sm">Lähetä sähköpostia</p>
                </div>
              </motion.a>

              <Link href="/yhteystiedot#elma" className="block mt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-center px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 shadow-md hover:shadow-lg text-lg rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  Ota yhteyttä
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
