'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import ProjectFilter from '@/components/ProjectFilter'
import { projects, getUniqueLocations, getUniqueKohdetyypit, getUniqueKaytto, ProjectStatus, Kohdetyyppi, Kaytto } from '@/lib/data'

export default function KohteetPage() {
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu'>('Kaikki')
  const [selectedKohdetyyppi, setSelectedKohdetyyppi] = useState<Kohdetyyppi | 'Kaikki'>('Kaikki')
  const [selectedKaytto, setSelectedKaytto] = useState<Kaytto | 'Kaikki'>('Kaikki')
  const [selectedLocation, setSelectedLocation] = useState<string | 'Kaikki'>('Kaikki')

  const availableLocations = useMemo(() => getUniqueLocations(), [])
  const availableKohdetyypit = useMemo(() => getUniqueKohdetyypit(), [])
  const availableKaytto = useMemo(() => getUniqueKaytto(), [])

  // Suodatettu lista
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Status-suodatus
      let statusMatch = false
      if (selectedStatus === 'Kaikki') {
        statusMatch = true
      } else if (selectedStatus === 'Valmis / Myyty / Vuokrattu') {
        statusMatch = project.status === 'Valmis' || project.status === 'Myyty' || project.status === 'Vuokrattu'
      } else {
        statusMatch = project.status === selectedStatus
      }

      // Kohdetyyppi-suodatus
      const typeMatch = selectedKohdetyyppi === 'Kaikki' || project.kohdetyyppi === selectedKohdetyyppi

      // Käyttö-suodatus
      const kayttoMatch = selectedKaytto === 'Kaikki' || !project.kaytto || project.kaytto === selectedKaytto

      // Paikkakunta-suodatus
      const locationMatch = selectedLocation === 'Kaikki' || project.location === selectedLocation

      return statusMatch && typeMatch && kayttoMatch && locationMatch
    })
  }, [selectedStatus, selectedKohdetyyppi, selectedKaytto, selectedLocation])

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (selectedStatus !== 'Kaikki') count++
    if (selectedKohdetyyppi !== 'Kaikki') count++
    if (selectedKaytto !== 'Kaikki') count++
    if (selectedLocation !== 'Kaikki') count++
    return count
  }, [selectedStatus, selectedKohdetyyppi, selectedKaytto, selectedLocation])

  const handleClearFilters = () => {
    setSelectedStatus('Kaikki')
    setSelectedKohdetyyppi('Kaikki')
    setSelectedKaytto('Kaikki')
    setSelectedLocation('Kaikki')
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-4 leading-[1.1] tracking-tight">
              Kohteet
            </h1>
            <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              Hietakoski toteuttaa paritaloja ja pienempiä asuinkohteita kasvukeskuksiin ja valikoituihin kohteisiin.
              Alta löydät myynnissä, vuokrattavana, tulossa, suunnittelussa sekä valmiit kohteet.
            </p>
            <p className="text-deep-charcoal/60 text-sm md:text-base leading-relaxed max-w-3xl">
              Hietakosken toteuttamat kohteet ovat myynnissä ja vuokrattavana eri välityskumppaneiden kautta. Toteutus, laatu ja vastuut ovat aina Hietakosken.
            </p>
          </motion.div>

          {/* Suodatus */}
          <ProjectFilter
            selectedStatus={selectedStatus}
            selectedKohdetyyppi={selectedKohdetyyppi}
            selectedKaytto={selectedKaytto}
            selectedLocation={selectedLocation}
            onStatusChange={setSelectedStatus}
            onKohdetyyppiChange={setSelectedKohdetyyppi}
            onKayttoChange={setSelectedKaytto}
            onLocationChange={setSelectedLocation}
            availableLocations={availableLocations}
            availableKohdetyypit={availableKohdetyypit}
            availableKaytto={availableKaytto}
            activeFilterCount={activeFilterCount}
            onClearFilters={handleClearFilters}
          />

          {/* Kohdelistaus */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-deep-charcoal/70 text-lg mb-4">
                Ei kohteita valittujen suodattimien mukaan.
              </p>
              <button
                onClick={handleClearFilters}
                className="text-aged-copper hover:text-aged-copper/80 font-medium underline"
              >
                Tyhjennä suodattimet
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
