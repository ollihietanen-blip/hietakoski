'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ReferenceHighlight() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-[450px] overflow-hidden rounded-2xl shadow-2xl group"
          >
            <Image
              src="/atrin_atmos/AtrinAtmos_000.jpg"
              alt="Asunto Oy Levin Atrin Atmos"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-block px-4 py-1.5 bg-deep-teal text-white text-xs font-semibold uppercase tracking-wide rounded-lg shadow-md">
                Myynnissä
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <p className="text-deep-teal text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin size={16} />
                Kittilä / Levi
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted leading-[1.1] tracking-tight">
                Asunto Oy Levin Atrin Atmos
              </h2>
            </div>
            
            <p className="text-body-text text-base md:text-lg leading-relaxed">
              Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-sand-white text-dark-muted text-sm font-medium rounded-lg">
                118 m² / asunto
              </span>
              <span className="px-4 py-2 bg-sand-white text-dark-muted text-sm font-medium rounded-lg">
                Paritalo
              </span>
              <span className="px-4 py-2 bg-sand-white text-dark-muted text-sm font-medium rounded-lg">
                Loma-asunto
              </span>
            </div>

            <Link href="/kohteet/levi-suvannoisenkuja-10">
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 shadow-md hover:shadow-lg text-base rounded-xl cursor-pointer mt-2"
              >
                Tutustu kohteeseen
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
