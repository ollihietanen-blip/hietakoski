'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ReferenceHighlight() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-96 md:h-[500px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/AtrinAtmos_001.jpg"
              alt="Levi – Suvannoisenkuja 10"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal leading-[1.1] tracking-tight">
              Levi – Suvannoisenkuja 10
            </h2>
            <p className="text-deep-charcoal/80 text-lg md:text-xl leading-relaxed">
              Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.
            </p>
            <motion.a
              href="/kohteet/levi-suvannoisenkuja-10"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Tutustu kohteeseen
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

