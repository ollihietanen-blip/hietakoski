'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Droplets, Zap, Wifi, Car, MapPin, Building2, Calendar, Users, Flame } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import { getProjectBySlug, projects } from '@/lib/data'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const slug = params.slug || ''
  const project = getProjectBySlug(slug)

  useEffect(() => {
    if (slug && !project) {
      // If project not found, redirect to projects page
      router.push('/kohteet')
    }
  }, [project, router, slug])

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 md:pt-32 pb-24 text-center">
          <p className="text-body-text">Ladataan...</p>
        </div>
        <Footer />
      </main>
    )
  }

  const getStatusColor = (status?: string) => {
    const statusToCheck = status || project.status
    switch (statusToCheck) {
      case 'Myynnissä':
        return 'bg-deep-teal'
      case 'Vuokrattavana':
        return 'bg-slate-blue'
      case 'Tulossa':
        return 'bg-slate-blue'
      case 'Suunnittelussa':
        return 'bg-slate-blue'
      case 'Valmis':
        return 'bg-deep-teal'
      case 'Myyty':
        return 'bg-gray-500'
      case 'Vuokrattu':
        return 'bg-slate-blue'
      default:
        return 'bg-slate-blue'
    }
  }

  const getStatusLabel = () => {
    switch (project.status) {
      case 'Myynnissä':
        return project.rakennusvuosi ? 'Valmis ja myynnissä' : 'Myynnissä'
      default:
        return project.status
    }
  }

  // Laske asuntojen tilanne dynaamisesti
  const apartmentsForSale = project.apartments?.filter(apt => apt.status === 'Myynnissä') || []
  const apartmentsFree = project.apartments?.filter(apt => apt.status === 'Vapaa') || []
  const allSoldOrReserved = project.apartments && project.apartments.every(apt => apt.status === 'Myyty' || apt.status === 'Varattu')
  const hasAvailableApartments = apartmentsForSale.length > 0 || apartmentsFree.length > 0
  const featuredApartment = apartmentsForSale[0]

  // Onko kohde valmis (myyty/vuokrattu/referenssi)
  const isReference = project.status === 'Myyty' || project.status === 'Vuokrattu' || project.status === 'Valmis'
  const isUpcoming = project.status === 'Tulossa' || project.status === 'Suunnittelussa'

  // Hae muut kohteet "See also" -osiota varten (ei itse kohtetta)
  const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 6)

  // Lyhyt alateksti hero-osioon
  const getShortSubtitle = () => {
    // Jos on presentation, käytä sitä lyhyenä, muuten käytä description
    if (project.presentation) {
      // Poista HTML-tagit ja ota ensimmäinen lause
      const text = project.presentation.replace(/<[^>]*>/g, '').trim()
      const firstSentence = text.split('.')[0]
      return firstSentence ? firstSentence + '.' : project.description
    }
    return project.description
  }

  // Tarkista onko tontti oma (tällä hetkellä vain Levi Atrin Atmoksella)
  const hasOwnLot = project.slug === 'levi-suvannoisenkuja-10'

  // Uusi trust-building portfolio -rakenne kaikille kohteille
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* A) HERO (compact) */}
      <section className="pt-16 md:pt-20 pb-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-meta-text mb-6"
          >
            <Link href="/" className="hover:text-deep-teal transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Etusivu</span>
            </Link>
            <span>/</span>
            <Link href="/kohteet" className="hover:text-deep-teal transition-colors">
              Kohteet
            </Link>
            <span>/</span>
            <span className="text-dark-muted font-medium">{project.name}</span>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          >
            <div className="flex-1">
              <span className={`inline-block px-4 py-1.5 ${getStatusColor()} text-white text-xs font-semibold uppercase tracking-wide mb-4`}>
                {getStatusLabel()}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted mb-3 leading-tight">
                {project.name}
              </h1>
              <p className="text-meta-text text-lg mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-deep-teal" />
                {project.location}
              </p>
              <p className="text-body-text text-base md:text-lg leading-relaxed max-w-2xl">
                {getShortSubtitle()}
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 text-base cursor-pointer shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    Ota yhteyttä
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
                <a href="#muut-kohteet" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-deep-teal text-deep-teal font-semibold hover:bg-deep-teal/5 transition-all duration-200 text-base whitespace-nowrap">
                  Katso muut kohteet
                  <ArrowRight size={18} />
                </a>
              </div>
              
              {/* Myyntihenkilö ja Kiinteistömaailma-linkki */}
              {project.myyntihenkilo && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-meta-text mb-2">Myynti</p>
                  <p className="font-semibold text-dark-muted mb-1">{project.myyntihenkilo.nimi}</p>
                  {project.myyntihenkilo.yritys && (
                    <p className="text-sm text-body-text mb-2">{project.myyntihenkilo.yritys}</p>
                  )}
                  <div className="flex flex-col gap-1 text-sm text-body-text">
                    <a href={`mailto:${project.myyntihenkilo.email}`} className="hover:text-deep-teal transition-colors">
                      {project.myyntihenkilo.email}
                    </a>
                    <a href={`tel:${project.myyntihenkilo.puhelin}`} className="hover:text-deep-teal transition-colors">
                      {project.myyntihenkilo.puhelin}
                    </a>
                  </div>
                  {project.kiinteistomaailmaUrl && (
                    <a 
                      href={project.kiinteistomaailmaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-deep-teal font-semibold hover:underline"
                    >
                      Katso Kiinteistömaailmassa
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* B) FEATURE GALLERY (primary content) */}
      {project.kuvat && project.kuvat.length > 0 && (
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImageCarousel images={project.kuvat} alt={project.name} />
          </div>
        </section>
      )}

      {/* C) Kohteen ydin */}
      {(project.presentation || project.description) && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-6">
                Kohteen ydin
              </h2>
              <div className="text-body-text text-base md:text-lg leading-relaxed space-y-4">
                {project.presentation ? (
                  // Jos on presentation, näytä se (lyhennettynä)
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: project.presentation
                        .replace(/<p class="mb-6[^"]*">/g, '<p class="mb-4">')
                        .replace(/<p class="mb-4[^"]*">/g, '<p class="mb-4">')
                        .replace(/<ul class="mb-6[^"]*">/g, '<ul class="mb-4 ml-6 list-disc space-y-2">')
                    }} 
                  />
                ) : (
                  // Muuten käytä description ja lisää lyhyt teksti
                  <>
                    <p>
                      {project.description}
                    </p>
                    <p>
                      Kohde on toteutettu kotimaisista puuelementeistä Hietakulman menetelmällä. Rakenteet valmistetaan hallituissa tehdasolosuhteissa, mikä takaa tasaisen laadun, hyvän ääneneristyksen ja pitkäikäiset rakenteet.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* D) LIGHT FACT PANEL */}
      <section className="py-12 md:py-16 bg-mist-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 size={20} className="text-deep-teal" />
                  <h3 className="font-semibold text-dark-muted">Kohdetyyppi</h3>
                </div>
                <p className="text-body-text">{project.kohdetyyppi}</p>
              </div>
              {project.asuntojenLkm && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Asuntoja</h3>
                  </div>
                  <p className="text-body-text">{project.asuntojenLkm}</p>
                </div>
              )}
              {project.pintaAlat && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Pinta-ala</h3>
                  </div>
                  <p className="text-body-text">{project.pintaAlat}</p>
                </div>
              )}
              {project.kaytto && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Käyttötarkoitus</h3>
                  </div>
                  <p className="text-body-text">{project.kaytto}</p>
                </div>
              )}
              {(hasOwnLot || project.tontinOmistus) && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Tontin omistus</h3>
                  </div>
                  <p className="text-body-text">{project.tontinOmistus || 'Oma'}</p>
                </div>
              )}
              {project.lämmitys && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Flame size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Lämmitys</h3>
                  </div>
                  <p className="text-body-text">{project.lämmitys}</p>
                </div>
              )}
              {project.autopaikat && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Car size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Autopaikat</h3>
                  </div>
                  <p className="text-body-text">{project.autopaikat}</p>
                </div>
              )}
              {project.terassit && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Terassit</h3>
                  </div>
                  <p className="text-body-text">{project.terassit}</p>
                </div>
              )}
              {project.toteutusmuoto && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Toteutusmuoto</h3>
                  </div>
                  <p className="text-body-text">{project.toteutusmuoto}</p>
                </div>
              )}
              {project.rakennustapa && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Rakennustapa</h3>
                  </div>
                  <p className="text-body-text">{project.rakennustapa}</p>
                </div>
              )}
              {project.asuntotyyppi && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Asuntotyyppi</h3>
                  </div>
                  <p className="text-body-text">{project.asuntotyyppi}</p>
                </div>
              )}
              {project.rakennustyyppi && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Rakennustyyppi</h3>
                  </div>
                  <p className="text-body-text">{project.rakennustyyppi}</p>
                </div>
              )}
              {(project.status === 'Myyty' || project.status === 'Vuokrattu') && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Status</h3>
                  </div>
                  <p className="text-body-text">
                    {project.status === 'Vuokrattu' ? 'Valmistunut (vuokrattu / referenssikohde)' : 'Valmistunut'}
                  </p>
                </div>
              )}
              {project.erityista && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Erityistä</h3>
                  </div>
                  <p className="text-body-text">{project.erityista}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* E) APARTMENT CARDS (lightweight) */}
      {project.apartments && project.apartments.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-8">
                Huoneistot
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.apartments.map((apt) => {
                  const getStatusBadge = (status: string) => {
                    switch (status) {
                      case 'Myynnissä':
                        return { label: 'Myynnissä', color: 'bg-deep-teal text-white' }
                      case 'Varattu':
                        return { label: 'Varattu', color: 'bg-slate-blue text-white' }
                      default:
                        return { label: status, color: 'bg-gray-100 text-body-text' }
                    }
                  }
                  const statusBadge = getStatusBadge(apt.status)
                  
                  return (
                    <div key={apt.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-xl font-bold text-dark-muted">
                          Asunto {apt.id}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full ${statusBadge.color}`}>
                          {statusBadge.label}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4 text-body-text">
                        {apt.rooms && <p className="text-sm">• {apt.rooms}</p>}
                        {apt.size && <p className="text-sm">• {apt.size}</p>}
                        {apt.price && (
                          <p className="text-deep-teal font-semibold mt-3">{apt.price}</p>
                        )}
                      </div>
                      {project.myyntihenkilo && apt.status === 'Myynnissä' && (
                        <div className="mb-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-meta-text mb-1">Myynti</p>
                          <p className="text-sm font-semibold text-dark-muted mb-1">{project.myyntihenkilo.nimi}</p>
                          <div className="flex flex-col gap-1 text-xs text-body-text">
                            <a href={`mailto:${project.myyntihenkilo.email}`} className="hover:text-deep-teal transition-colors">
                              {project.myyntihenkilo.email}
                            </a>
                            <a href={`tel:${project.myyntihenkilo.puhelin}`} className="hover:text-deep-teal transition-colors">
                              {project.myyntihenkilo.puhelin}
                            </a>
                          </div>
                          {apt.etuoviUrl && (
                            <a 
                              href={apt.etuoviUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-2 text-xs text-deep-teal font-semibold hover:underline"
                            >
                              Katso Kiinteistömaailmassa
                              <ArrowRight size={12} />
                            </a>
                          )}
                        </div>
                      )}
                      {(project.myyntihenkilo && apt.status !== 'Myynnissä') || !project.myyntihenkilo ? (
                        <Link href="/yhteystiedot#elma">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-deep-teal font-semibold text-sm cursor-pointer hover:underline"
                          >
                            {apt.status === 'Myynnissä' ? 'Ota yhteyttä asunnosta' : 'Kysy saatavuus'}
                            <ArrowRight size={16} />
                          </motion.div>
                        </Link>
                      ) : (
                        <Link href={`mailto:${project.myyntihenkilo.email}`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-deep-teal font-semibold text-sm cursor-pointer hover:underline"
                          >
                            Ota yhteyttä asunnosta
                            <ArrowRight size={16} />
                          </motion.div>
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* F) BRAND TRUST STRIP */}
      <section className="py-12 md:py-16 bg-warm-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-6">
              Näin Hietakoski rakentaa
            </h2>
            <div className="text-body-text text-base md:text-lg leading-relaxed space-y-3">
              <p>
                Hietakosken kohteet rakennetaan kotimaisista puuelementeistä Hietakulman menetelmällä. Rakenteet valmistetaan säältä suojassa hallituissa tehdasolosuhteissa, mikä takaa tasaisen laadun ja pitkäikäisyyden.
              </p>
              <p>
                Oma työmaaorganisaatio varmistaa, että jokainen kohde toteutetaan huolellisesti ja loppuun asti. Asiakas ostaa valmiin lopputuloksen – ei rakennusprojektia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* G) SEE ALSO: Other Projects */}
      {otherProjects.length > 0 && (
        <section id="muut-kohteet" className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-8">
                Tutustu myös näihin kohteisiin
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((otherProject, index) => (
                  <Link key={otherProject.id} href={`/kohteet/${otherProject.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={otherProject.imageUrl}
                          alt={otherProject.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold uppercase rounded ${getStatusColor(otherProject.status)} text-white`}>
                            {otherProject.status}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-lg text-dark-muted mb-1">
                          {otherProject.name}
                        </h3>
                        <p className="text-meta-text text-sm flex items-center gap-1 mb-2">
                          <MapPin size={14} className="text-deep-teal" />
                          {otherProject.location}
                        </p>
                        <p className="text-body-text text-sm line-clamp-2">
                          {otherProject.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* H) CONTACT CTA (soft) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-mist-white/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-4">
              Kiinnostuitko Hietakosken kohteista?
            </h2>
            <p className="text-body-text text-base mb-8">
              Ota yhteyttä ja kysy lisätietoja kohteesta tai muista Hietakosken toteuttamista kohteista.
            </p>
            <Link href="/yhteystiedot#elma">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 text-base cursor-pointer shadow-md hover:shadow-lg"
              >
                Ota yhteyttä
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
