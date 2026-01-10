'use client'

import { Suspense, useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import ProjectFilter from '@/components/ProjectFilter'
import { projects, getUniqueLocations, getUniqueKohdetyypit, getUniqueKaytto, ProjectStatus, Kohdetyyppi, Kaytto } from '@/lib/data'

function KohteetContent() {
  const searchParams = useSearchParams()
  const statusParam = searchParams.get('status')
  
  // Aseta oletusarvo URL-parametrista jos saatavilla
  const getInitialStatus = (): ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu' => {
    if (statusParam === 'Myynnissa') return 'Myynnissä'
    if (statusParam === 'Vuokrattavana') return 'Vuokrattavana'
    return 'Kaikki'
  }

  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu'>(getInitialStatus)
  const [selectedKohdetyyppi, setSelectedKohdetyyppi] = useState<Kohdetyyppi | 'Kaikki'>('Kaikki')
  const [selectedKaytto, setSelectedKaytto] = useState<Kaytto | 'Kaikki'>('Kaikki')
  const [selectedLocation, setSelectedLocation] = useState<string | 'Kaikki'>('Kaikki')

  // Päivitä suodatus kun URL-parametri muuttuu
  useEffect(() => {
    if (statusParam === 'Myynnissa') {
      setSelectedStatus('Myynnissä')
    } else if (statusParam === 'Vuokrattavana') {
      setSelectedStatus('Vuokrattavana')
    }
  }, [statusParam])

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
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-deep-teal" />
              <span className="text-deep-teal text-sm font-medium tracking-wider uppercase">Kohteet</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-4 leading-[1.1] tracking-tight">
              Kaikki kohteet
            </h1>
            <p className="text-body-text text-base md:text-lg leading-relaxed max-w-3xl">
              Hietakoski toteuttaa paritaloja ja pienempiä asuinkohteita kasvukeskuksiin. 
              Alta löydät myynnissä, tulossa ja valmiit kohteet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Projects */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Results count */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-meta-text text-sm mb-6"
          >
            {filteredProjects.length} kohdetta
          </motion.p>

          {/* Kohdelistaus */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-xl border border-gray-100"
            >
              <p className="text-body-text text-lg mb-4">
                Ei kohteita valittujen suodattimien mukaan.
              </p>
              <button
                onClick={handleClearFilters}
                className="text-deep-teal hover:text-deep-teal/80 font-medium underline"
              >
                Tyhjennä suodattimet
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default function KohteetPage() {
  return (
    <main className="min-h-screen bg-sand-white">
      <Navbar />
      <Suspense fallback={
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-body-text">Ladataan...</p>
          </div>
        </section>
      }>
        <KohteetContent />
      </Suspense>
      <Footer />
    </main>
  )
}
