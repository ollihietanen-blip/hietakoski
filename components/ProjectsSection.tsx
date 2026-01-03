'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/lib/data'

export default function ProjectsSection() {
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
          className="mb-20 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-4 leading-[1.1] tracking-tight">
            Kohteemme
          </h2>
          <p className="text-lg md:text-xl text-deep-charcoal/70 max-w-2xl leading-relaxed">
            Tutustu ajankohtaisiin projekteihimme eri puolilta Suomea
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

