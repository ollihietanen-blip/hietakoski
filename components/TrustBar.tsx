'use client'

import { motion } from 'framer-motion'
import { Building2, DraftingCompass } from 'lucide-react'

export default function TrustBar() {
  const partners = [
    { 
      name: 'Hietakulma Oy', 
      role: 'Elementtitehdas',
      icon: Building2,
      color: 'aged-copper'
    },
    { 
      name: 'Mallirakennus Oy', 
      role: 'Suunnittelu',
      icon: DraftingCompass,
      color: 'slate-blue'
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-mist-white/50 py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-blue text-lg md:text-xl font-semibold mb-12"
          >
            Laadun ketju – Yhteistyössä:
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => {
              const IconComponent = partner.icon
              const isCopper = partner.color === 'aged-copper'
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className={`
                    w-40 h-32 bg-white/80 backdrop-blur-sm rounded-2xl 
                    flex flex-col items-center justify-center mb-4 
                    border-2 border-gray-200/50 shadow-lg
                    ${isCopper ? 'group-hover:border-aged-copper' : 'group-hover:border-slate-blue'}
                    group-hover:shadow-xl
                    transition-all duration-300 relative overflow-hidden
                  `}>
                    {/* Background gradient on hover */}
                    <div className={`
                      absolute inset-0 
                      ${isCopper ? 'bg-gradient-to-br from-aged-copper/5' : 'bg-gradient-to-br from-slate-blue/5'}
                      to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `} />
                    
                    {/* Icon */}
                    <div className={`
                      relative z-10 mb-3 p-4 rounded-xl 
                      ${isCopper ? 'bg-aged-copper/10 group-hover:bg-aged-copper' : 'bg-slate-blue/10 group-hover:bg-slate-blue'}
                      transition-all duration-300
                    `}>
                      <IconComponent 
                        className={`
                          ${isCopper ? 'text-aged-copper' : 'text-slate-blue'}
                          group-hover:text-white
                          transition-colors duration-300
                        `} 
                        size={32} 
                      />
                    </div>
                    
                    {/* Company Name */}
                    <span className={`
                      relative z-10 text-slate-blue text-sm font-bold text-center px-3
                      ${isCopper ? 'group-hover:text-aged-copper' : 'group-hover:text-slate-blue'}
                      transition-colors duration-300
                    `}>
                      {partner.name}
                    </span>
                  </div>
                  <p className="text-slate-blue/70 text-sm font-medium">{partner.role}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

