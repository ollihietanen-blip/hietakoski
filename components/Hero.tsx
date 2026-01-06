'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="etusivu" className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-deep-charcoal via-slate-blue to-deep-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hietakoski Oy - Muuttovalmiit kodit"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-slate-blue/75 to-deep-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,93,44,0.1),transparent_50%)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-aged-copper/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-light-oak/10 rounded-full blur-3xl hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Muuttovalmiit kodit – turvallisesti valmiina
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl lg:text-2xl font-light mb-12 leading-relaxed max-w-3xl"
            >
              Hietakoski Oy rakentaa paritaloja ja pienkohteita kasvukeskuksiin.
              Kohteet toteutetaan hallitulla ketjulla: kotimaiset puuelementit, kokenut työnjohto ja viimeistely valmiiksi ennen myyntiä.
              Asiakas ostaa kodin – ei keskeneräistä lupausta.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link href="/kohteet">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg text-center cursor-pointer"
              >
                Myytävät asunnot
              </motion.div>
            </Link>
            
            <motion.a
              href="#elma"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('elma')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg text-center"
            >
              Ota yhteyttä
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

