'use client'

import { motion } from 'framer-motion'
import { Search, CheckCircle, Calendar, Home } from 'lucide-react'
import Link from 'next/link'

export default function CustomerJourney() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Löydä kohde',
      description: 'Selaa kohteita etuovi.com tai hietakoski.fi',
    },
    {
      number: 2,
      icon: CheckCircle,
      title: 'Tutustu tekijään',
      description: 'Varmista, kuka rakentaa ja vastaa laadusta',
    },
    {
      number: 3,
      icon: Calendar,
      title: 'Sovi esittely',
      description: 'Elma auttaa kaikissa asioissa',
      link: '/yhteystiedot#elma',
    },
    {
      number: 4,
      icon: Home,
      title: 'Osta valmis koti',
      description: 'Muuta uuteen kotiin ilman riskejä',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-mist-white/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
            Näin etenet kohti uutta kotia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-aged-copper/20 transition-all duration-300"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-mist-white rounded-full flex items-center justify-center mb-4 mt-2 group-hover:bg-aged-copper/10 transition-colors duration-300">
                  <Icon className="text-aged-copper" size={28} />
                </div>
                
                {/* Content */}
                <h3 className={`font-display text-lg md:text-xl font-bold text-deep-charcoal mb-2 ${step.link ? 'group-hover:text-aged-copper' : ''} transition-colors`}>
                  {step.title}
                </h3>
                <p className="text-deep-charcoal/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )

            if (step.link) {
              return (
                <Link key={index} href={step.link} className="cursor-pointer">
                  {content}
                </Link>
              )
            }

            return <div key={index}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
