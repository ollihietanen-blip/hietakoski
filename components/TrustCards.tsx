'use client'

import { motion } from 'framer-motion'

export default function TrustCards() {
  const cards = [
    {
      title: 'Valmis koti ilman riskiä',
      text: 'Emme myy keskeneräisiä projekteja. Kohteet rakennetaan valmiiksi ennen myyntiä, jotta asiakas näkee mitä ostaa.',
    },
    {
      title: 'Kotimaiset puuelementit',
      text: 'Rakennamme kotimaisista puuelementeistä hallitulla tuotantoketjulla ja laadunvarmistuksella.',
    },
    {
      title: 'Selkeät vastuut',
      text: 'Myynti ja asiakasasiat hoitaa Elma. Työmaiden työnjohto vastaa toteutuksesta ja laadusta.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-mist-white/50 p-8 md:p-10 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
                {card.title}
              </h3>
              <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

