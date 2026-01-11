'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Droplets, Zap, Wifi, Car, MapPin, Building2, Calendar, Users } from 'lucide-react'
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
                {hasOwnLot && (
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={20} className="text-deep-teal" />
                      <h3 className="font-semibold text-dark-muted">Tontti</h3>
                    </div>
                    <p className="text-body-text">Oma</p>
                  </div>
                )}
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">Status</h3>
                  </div>
                  <p className="text-body-text">{project.status}</p>
                </div>
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-meta-text"
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
        </div>
      </section>

      {/* Hero: Otsikko + Kuvaus */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1.5 ${getStatusColor()} text-white text-xs font-semibold uppercase tracking-wide mb-4`}>
              {getStatusLabel()}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted mb-2 leading-tight">
              {project.name}
            </h1>
            <p className="text-meta-text text-lg mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-deep-teal" />
              {project.location}
            </p>
            <p className="text-body-text text-base md:text-lg leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kuvakaruselli - full width */}
      {project.kuvat && project.kuvat.length > 0 ? (
        <section className="pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImageCarousel images={project.kuvat} alt={project.name} />
          </div>
        </section>
      ) : (
        <section className="pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video bg-gradient-to-br from-mist-white to-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-meta-text text-lg">Kuvat tulossa</p>
            </div>
          </div>
        </section>
      )}

      {/* Kohteen esittely */}
      {project.presentation && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-8">
                Kohteen esittely
              </h2>
              <div 
                className="text-body-text"
                dangerouslySetInnerHTML={{ __html: project.presentation }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Myynnissä oleva asunto - nosto */}
      {featuredApartment && (
        <section id="featured" className="py-12 md:py-16 bg-warm-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-deep-teal text-white text-sm font-semibold uppercase tracking-wide mb-3">
                  Myynnissä
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-muted mb-2">
                  Asunto {featuredApartment.id}
                </h2>
                <p className="text-meta-text">{featuredApartment.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3 text-body-text text-lg">
                  {featuredApartment.rooms && <p>• {featuredApartment.rooms}</p>}
                  {featuredApartment.size && <p>• {featuredApartment.size}</p>}
                  {project.rakennusvuosi && <p>• Valmistunut {project.rakennusvuosi}</p>}
                  <p>• Heti vapaa</p>
                </div>
                {featuredApartment.price && (
                  <div className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm">
                    <div className="text-center">
                      <span className="text-meta-text text-sm font-medium uppercase tracking-wide block mb-2">Velaton hinta</span>
                      <p className="text-deep-teal font-bold text-4xl md:text-5xl">{featuredApartment.price}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {featuredApartment.etuoviUrl && (
                  <motion.a
                    href={featuredApartment.etuoviUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-deep-teal text-deep-teal font-semibold hover:bg-deep-teal hover:text-white transition-all duration-200 text-base"
                  >
                    Katso Etuovessa
                    <ArrowRight size={18} />
                  </motion.a>
                )}
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 text-base cursor-pointer"
                  >
                    Ota yhteyttä
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Asunnot-lista (jos kohteella on asuntoja) */}
      {project.apartments && project.apartments.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-6">Kaikki asunnot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.apartments.map((apt) => {
                const getStatusDisplay = (status: string) => {
                  switch (status) {
                    case 'Myynnissä':
                      return { label: 'Myynnissä', color: 'bg-deep-teal text-white' }
                    case 'Varattu':
                      return { label: 'Varattu', color: 'bg-slate-blue text-white' }
                    case 'Myyty':
                      return { label: 'Myyty', color: 'bg-gray-400 text-white' }
                    case 'Vapaa':
                      return { label: 'Kysy saatavuus', color: 'bg-gray-100 text-body-text' }
                    default:
                      return { label: 'Kysy saatavuus', color: 'bg-gray-100 text-body-text' }
                  }
                }
                const statusDisplay = getStatusDisplay(apt.status)
                const isHighlight = apt.status === 'Myynnissä'
                
                return (
                  <div key={apt.id} className={`p-4 border ${isHighlight ? 'border-deep-teal bg-deep-teal/5' : 'border-gray-200 bg-white'} rounded-lg`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-dark-muted">Asunto {apt.id}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${statusDisplay.color}`}>
                        {statusDisplay.label}
                      </span>
                    </div>
                    {apt.status === 'Myynnissä' ? (
                      <a href="#featured" className="text-deep-teal text-sm hover:underline">Katso tiedot</a>
                    ) : apt.status === 'Vapaa' ? (
                      <Link href="/yhteystiedot#elma" className="text-deep-teal text-sm hover:underline">Kysy saatavuus</Link>
                    ) : (
                      <span className="text-meta-text text-sm">{apt.status}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Kohteen perustiedot */}
      <section className="py-12 md:py-16 bg-mist-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-8">Kohteen tiedot</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Perustiedot */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-deep-teal/10 rounded-lg flex items-center justify-center">
                    <Building2 size={20} className="text-deep-teal" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark-muted">Perustiedot</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-meta-text text-sm">Kohdetyyppi</span>
                    <span className="text-dark-muted font-medium text-sm">{project.kohdetyyppi}</span>
                  </div>
                  {project.asuntojenLkm && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Asuntoja</span>
                      <span className="text-dark-muted font-medium text-sm">{project.asuntojenLkm}</span>
                    </div>
                  )}
                  {project.pintaAlat && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Pinta-alat</span>
                      <span className="text-dark-muted font-medium text-sm">{project.pintaAlat}</span>
                    </div>
                  )}
                  {project.slug === 'levi-suvannoisenkuja-10' && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Tontti</span>
                      <span className="text-dark-muted font-medium text-sm">Oma</span>
                    </div>
                  )}
                  {project.kaytto && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Käyttötarkoitus</span>
                      <span className="text-dark-muted font-medium text-sm">{project.kaytto}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2">
                    <span className="text-meta-text text-sm">Status</span>
                    <span className="text-dark-muted font-medium text-sm">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Aikataulu */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-blue/10 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-slate-blue" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark-muted">Aikataulu</h3>
                </div>
                <div className="space-y-3">
                  {project.rakennusvuosi && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Rakennusvuosi</span>
                      <span className="text-dark-muted font-medium text-sm">{project.rakennusvuosi}</span>
                    </div>
                  )}
                  {project.valmistumisvuosi ? (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Valmistuminen</span>
                      <span className="text-dark-muted font-medium text-sm">{project.valmistumisvuosi}</span>
                    </div>
                  ) : project.slug === 'levi-suvannoisenkuja-10' ? (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-meta-text text-sm">Valmistuminen</span>
                      <span className="text-dark-muted font-medium text-sm">Maaliskuu 2026</span>
                    </div>
                  ) : null}
                  {project.slug === 'levi-suvannoisenkuja-10' && (
                    <div className="flex justify-between py-2">
                      <span className="text-meta-text text-sm">Varaus</span>
                      <span className="text-deep-teal font-medium text-sm">Varattavissa heti</span>
                    </div>
                  )}
                  {!project.rakennusvuosi && !project.valmistumisvuosi && project.slug !== 'levi-suvannoisenkuja-10' && (
                    <p className="text-meta-text text-sm">Tiedot täydentyvät</p>
                  )}
                </div>
              </div>

              {/* Sijainti */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-deep-teal/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-deep-teal" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark-muted">Sijainti</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-meta-text text-sm">Paikkakunta</span>
                    <span className="text-dark-muted font-medium text-sm">{project.location}</span>
                  </div>
                  {project.slug === 'levi-suvannoisenkuja-10' && (
                    <div className="mt-4">
                      <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-deep-teal/20 shadow-sm bg-sand-white/30">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5!2d24.801!3d67.804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuvannoisenkuja%2010%2C%2099130%20Kittil%C3%A4!5e0!3m2!1sfi!2sfi!4v1234567890123!5m2!1sfi!2sfi&z=14"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full rounded-lg"
                          title="Suvannoisenkuja 10, Kittilä"
                        />
                      </div>
                      <p className="text-meta-text text-xs mt-2 text-center">Suvannoisenkuja 10, Kittilä</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loppu-CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-mist-white/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-4">
              {isReference 
                ? 'Kiinnostaako vastaavanlainen kohde?'
                : isUpcoming
                  ? 'Haluatko kuulla ensimmäisenä tästä kohteesta?'
                  : 'Kiinnostuitko tästä kohteesta?'
              }
            </h2>
            <p className="text-body-text text-base mb-8">
              {isReference 
                ? 'Ota yhteyttä ja kerro, millaista kotia etsit. Kerromme tulevista kohteista.'
                : isUpcoming
                  ? 'Jätä yhteystietosi, niin kerromme kun kohde tulee myyntiin.'
                  : hasAvailableApartments 
                    ? 'Ota yhteyttä ja kysy lisätietoja kohteesta tai myynnissä olevista asunnoista.'
                    : 'Ota yhteyttä myyntiin.'
              }
            </p>
            <Link href="/yhteystiedot#elma">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 text-base cursor-pointer shadow-md hover:shadow-lg"
              >
                {isReference ? 'Kysy tulevista kohteista' : isUpcoming ? 'Ilmoittaudu kiinnostuneeksi' : 'Ota yhteyttä'}
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
