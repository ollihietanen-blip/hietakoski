'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const regions = [
    { name: 'Uusimaa', href: '#kohteet', accent: 'from-blue-600/20' },
    { name: 'Pirkanmaa', href: '#kohteet', accent: 'from-green-600/20' },
    { name: 'Lappi', href: '#kohteet', accent: 'from-cyan-600/20' },
  ]

  return (
    <section id="etusivu" className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-deep-charcoal via-slate-blue to-deep-charcoal">
      {/* Background Image with more natural composition */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80&auto=format"
          alt="Finnish architecture"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* More sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-slate-blue/75 to-deep-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,93,44,0.1),transparent_50%)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-aged-copper/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-light-oak/10 rounded-full blur-3xl hidden lg:block" />

      {/* Content with asymmetric layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Small accent text */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-aged-copper text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
            >
              Rakentamista vuodesta 1980
            </motion.p>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span className="block">Laadukkaita koteja</span>
              <span className="block text-light-oak/90">ja vapaa-ajan asuntoja</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/80 mt-4 font-sans">
                Suomen halutuimmille paikoille
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mt-8 mb-12"
            >
              <div className="h-px w-16 bg-aged-copper" />
              <p className="text-white/70 text-lg md:text-xl font-light">
                Uusimaa – Pirkanmaa – Lappi
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            {regions.map((region, index) => (
              <motion.a
                key={region.name}
                href={region.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group relative px-8 py-4 bg-white/5 backdrop-blur-md 
                  border border-white/20 text-white font-medium 
                  rounded-lg hover:bg-aged-copper hover:border-aged-copper 
                  transition-all duration-300 shadow-lg hover:shadow-2xl
                  text-base sm:text-lg overflow-hidden
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${region.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <span className="relative z-10">{region.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - more subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

