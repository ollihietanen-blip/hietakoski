'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '@/lib/data'

export default function ProjectsSection() {
  // Näytä vain myynnissä olevat kohteet etusivulla (max 6)
  const myynnissaProjects = projects.filter(p => p.status === 'Myynnissä').slice(0, 6)

  return (
    <section id="kohteet" className="py-24 md:py-32 bg-warm-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,#000_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-4 leading-[1.1] tracking-tight">
            Ajankohtaiset kohteet
          </h2>
          <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl">
            Hietakosken toteuttamat kohteet ovat myynnissä Etuovessa eri välityskumppaneiden kautta. Toteutus, laatu ja vastuut ovat aina Hietakosken.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {myynnissaProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Link to all projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/kohteet"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-aged-copper font-semibold text-lg hover:underline"
          >
            Katso kaikki kohteet
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

