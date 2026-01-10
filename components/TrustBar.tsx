'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustBar() {
  const partners = [
    { 
      name: 'Hietakulma Oy', 
      logo: '/Hietakulma_logo.jpg',
      description: 'Vastaa suunnittelusta, lupa-asioista ja energialaskennoista. Yhteistyössä elementtitehtaan kanssa varmistamme, että rakennuksemme ovat terveellisiä, tiiviitä ja energiatehokkaita. Kestävä rakentaminen ja vihreät arvot ovat ytimessä.',
      highlights: ['Suunnittelu', 'Lupa-asiat', 'Energialaskennat', 'Kestävä rakentaminen']
    },
    { 
      name: 'Mallirakennus Oy', 
      logo: '/mallirakennus.jpg',
      description: 'Hoitaa rakentamisen alusta loppuun pitkällä kokemuksella ja ammattitaidolla. Yhteistyössä suunnittelemme tontin ja huoneistojen pohjat. Jokainen projekti toteutetaan korkeimmalla laadulla.',
      highlights: ['Rakentaminen alusta loppuun', 'Tontin suunnittelu', 'Huoneistojen pohjat', 'Pitkä kokemus']
    },
  ]

  return (
    <section className="bg-sand-white py-20 md:py-28 border-y border-gray-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted mb-4">
            Laadun ketju
          </h2>
          <p className="text-slate-blue/70 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Yhteistyössä luomme koteja, joissa laatu, kestävyys ja ammattitaito kohtaavat
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              {/* Logo */}
              <div className="relative w-full h-32 mb-8">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Description */}
              <p className="text-body-text text-base md:text-lg leading-relaxed mb-6">
                {partner.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {partner.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 bg-sand-white text-slate-blue text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

