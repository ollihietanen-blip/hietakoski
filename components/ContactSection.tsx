'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, MessageCircle, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

export default function ContactSection() {
  const { t } = useI18n()
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
            {t.contactSection.title}
          </h2>
          <p className="text-body-text text-base md:text-lg">
            {t.contactSection.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 sm:p-8 md:p-12 shadow-xl rounded-xl md:rounded-2xl border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center">
            {/* Left: Image and name */}
            <div className="text-center md:text-left">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-deep-teal/20 shadow-md">
                <Image
                  src="/yhteystiedot/Elma_Alakoski.jpg"
                  alt="Elma Alakoski-Tomberg"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
                />
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-dark-muted mb-1 md:mb-2">
                Elma Alakoski-Tomberg
              </h3>
              <p className="text-meta-text text-sm sm:text-base md:text-lg mb-3 md:mb-4">
                {t.contactSection.salesAndRental}
              </p>
              {/* Social links */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="https://wa.me/358442063617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-deep-teal/10 hover:bg-deep-teal flex items-center justify-center transition-all duration-200 group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="text-deep-teal group-hover:text-white transition-colors duration-200" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/elma-alakoski-6438a5331?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5XUy8sDcRQ%2B5Ooxk8sZ1dQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-deep-teal/10 hover:bg-deep-teal flex items-center justify-center transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-deep-teal group-hover:text-white transition-colors duration-200" size={20} />
                </a>
              </div>
            </div>

            {/* Right: Contact info and CTA */}
            <div className="space-y-3 md:space-y-4">
              <motion.a
                href="tel:+358442063617"
                whileHover={{ x: 5, backgroundColor: 'rgba(67, 144, 147, 0.05)' }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-gray-100 hover:border-deep-teal/30 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-deep-teal/10 rounded-xl flex items-center justify-center group-hover:bg-deep-teal transition-colors duration-200">
                  <Phone className="text-deep-teal group-hover:text-white transition-colors duration-200" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-dark-muted font-semibold text-base md:text-lg group-hover:text-deep-teal transition-colors break-words">
                    044 206 3617
                  </p>
                  <p className="text-meta-text text-xs md:text-sm">{t.contactSection.callOrText}</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:elma.alakoski@areagroup.fi"
                whileHover={{ x: 5, backgroundColor: 'rgba(67, 144, 147, 0.05)' }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-gray-100 hover:border-deep-teal/30 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-deep-teal/10 rounded-xl flex items-center justify-center group-hover:bg-deep-teal transition-colors duration-200">
                  <Mail className="text-deep-teal group-hover:text-white transition-colors duration-200" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-dark-muted font-semibold text-sm md:text-lg group-hover:text-deep-teal transition-colors break-all">
                    elma.alakoski@areagroup.fi
                  </p>
                  <p className="text-meta-text text-xs md:text-sm">{t.contactSection.sendEmail}</p>
                </div>
              </motion.a>

              <Link href="/yhteystiedot#elma" className="block mt-4 md:mt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-center px-6 md:px-8 py-3 md:py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 shadow-md hover:shadow-lg text-base md:text-lg rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  {t.contactSection.contactButton}
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
