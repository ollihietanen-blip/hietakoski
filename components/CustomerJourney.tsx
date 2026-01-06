'use client'

import { motion } from 'framer-motion'
import { Search, CheckCircle, Calendar, Home } from 'lucide-react'

export default function CustomerJourney() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Löydä kohde Etuovesta',
    },
    {
      number: 2,
      icon: CheckCircle,
      title: 'Varmista tekijä – tutustu Hietakoskeen',
    },
    {
      number: 3,
      icon: Calendar,
      title: 'Sovi esittely – Elma auttaa',
    },
    {
      number: 4,
      icon: Home,
      title: 'Osta valmis koti',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-aged-copper/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-aged-copper" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-deep-charcoal">
                  {step.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

