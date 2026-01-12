'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, TreePine, Users } from 'lucide-react'
import { useI18n } from '@/lib/i18n-context'

export default function TrustCards() {
  const { t } = useI18n()
  
  const cards = [
    {
      icon: ShieldCheck,
      title: t.trustCards.card1.title,
      text: t.trustCards.card1.text,
    },
    {
      icon: TreePine,
      title: t.trustCards.card2.title,
      text: t.trustCards.card2.text,
    },
    {
      icon: Users,
      title: t.trustCards.card3.title,
      text: t.trustCards.card3.text,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-sand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-muted mb-4">
            {t.trustCards.title}
          </h2>
          <p className="text-body-text text-base md:text-lg max-w-2xl mx-auto">
            {t.trustCards.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)' }}
                className="group bg-white p-8 md:p-10 border border-gray-200 rounded-xl shadow-sm hover:border-deep-teal/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-deep-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-deep-teal group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-deep-teal group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-dark-muted mb-3 group-hover:text-deep-teal transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-body-text text-base leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
