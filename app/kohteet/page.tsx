'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import ReferenceHighlight from '@/components/ReferenceHighlight'
import { projects } from '@/lib/data'

export default function KohteetPage() {
  // Projekteja, jotka ovat myynnissä tai rakenteilla
  const activeProjects = projects.filter(
    p => p.status === 'Ennakkomarkkinoinnissa' || p.status === 'Tulossa' || p.status === 'Myynnissä / Valmis'
  )

  // Valmistuneet kohteet (referenssit)
  const completedProjects = projects.filter(p => p.status === 'Myynnissä / Valmis')

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Myynnissä / Rakenteilla */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-4 leading-[1.1] tracking-tight">
              Myynnissä / Rakenteilla
            </h1>
            <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl">
              Hietakosken toteuttamat kohteet ovat myynnissä Etuovessa eri välityskumppaneiden kautta. Toteutus, laatu ja vastuut ovat aina Hietakosken.
            </p>
          </motion.div>

          {activeProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {activeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-deep-charcoal/70 text-lg">Ei kohteita tällä hetkellä.</p>
          )}
        </div>
      </section>

      {/* Valmistuneet kohteet */}
      {completedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-4 leading-[1.1] tracking-tight">
                Valmistuneet kohteet
              </h2>
              <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl">
                Tutustu valmistuneisiin kohteisiimme ja näe, miten Hietakoski toteuttaa laadukkaita koteja.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {completedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Keihäänkärki - Puustellin Helmi */}
      <ReferenceHighlight />

      <Footer />
    </main>
  )
}

