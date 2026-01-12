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
import { useI18n } from '@/lib/i18n-context'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const { t, locale } = useI18n()
  const slug = params.slug || ''
  const project = getProjectBySlug(slug)
  
  // Get translated project name and description
  const projectName = locale === 'en' && project?.nameEn ? project.nameEn : project?.name || ''
  const projectDescription = locale === 'en' && project?.descriptionEn ? project.descriptionEn : project?.description || ''

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
          <p className="text-body-text">{t.projects.loading}</p>
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

  // Helper function to translate status
  const translateStatus = (status: string): string => {
    // Map Finnish status values to i18n keys (normalize to lowercase)
    const normalizedStatus = status.toLowerCase().replace('ä', 'a').replace('ö', 'o')
    const statusMap: Record<string, keyof typeof t.status> = {
      'myynnissä': 'myynnissa',
      'vuokrattavana': 'vuokrattavana',
      'tulossa': 'tulossa',
      'suunnittelussa': 'suunnittelussa',
      'valmis': 'valmis',
      'myyty': 'myyty',
      'vuokrattu': 'vuokrattu',
      'varattu': 'varattu',
      'vapaa': 'vapaa',
    }
    const key = statusMap[normalizedStatus]
    if (key && t.status[key]) {
      return t.status[key]
    }
    return status
  }
  
  // Helper function to translate project type
  const translateProjectType = (type: string): string => {
    // Map Finnish project type values to i18n keys (exact match)
    const typeMap: Record<string, keyof typeof t.projectType> = {
      'Paritalo': 'paritalo',
      'Paritalo - kiinteistö': 'paritalo - kiinteistö',
      'Rivitalo': 'rivitalo',
      'Asuinkohde': 'asuinkohde',
    }
    const key = typeMap[type]
    if (key && t.projectType[key]) {
      return t.projectType[key]
    }
    return type
  }
  
  // Helper function to translate usage
  const translateUsage = (usage: string): string => {
    // Map Finnish usage values to i18n keys (exact match)
    const usageMap: Record<string, keyof typeof t.usage> = {
      'Asuminen': 'asuminen',
      'Loma-asunto': 'loma-asunto',
    }
    const key = usageMap[usage]
    if (key && t.usage[key]) {
      return t.usage[key]
    }
    return usage
  }

  // Helper function to translate project details
  const translateProjectDetail = (detail: string | undefined): string => {
    if (!detail) return ''
    // Map common project detail values to i18n keys
    const detailMap: Record<string, keyof typeof t.projectDetails> = {
      'Vuokratontti - lunastusmahdollisuudella': 'leaseholdWithRedemption',
      'Oma': 'own',
      'PILP - viilennyksellä': 'pilpWithCooling',
      '2 autopaikkaa / asunto': '2ParkingSpacesPerApartment',
    }
    const key = detailMap[detail]
    if (key && t.projectDetails[key]) {
      return t.projectDetails[key]
    }
    return detail
  }

  // Helper function to translate apartment rooms
  const translateRooms = (rooms: string | undefined): string => {
    if (!rooms) return ''
    // Map common room descriptions to i18n keys
    const roomsMap: Record<string, keyof typeof t.projectDetails> = {
      '4h, kt, kh, s, lämmin varasto': 'rooms4hKtKhS',
      '4h + k + pesutilat + sauna + wc/khh': 'rooms4hKPesutilat',
    }
    const key = roomsMap[rooms]
    if (key && t.projectDetails[key]) {
      return t.projectDetails[key]
    }
    return rooms
  }

  const getStatusLabel = () => {
    switch (project.status) {
      case 'Myynnissä':
        return project.rakennusvuosi ? t.projects.readyAndForSale : translateStatus(project.status)
      default:
        return translateStatus(project.status)
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
              <span>{t.nav.home}</span>
            </Link>
            <span>/</span>
            <Link href="/kohteet" className="hover:text-deep-teal transition-colors">
              {t.nav.projects}
            </Link>
            <span>/</span>
            <span className="text-dark-muted font-medium">{projectName}</span>
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
                {projectName}
              </h1>
              <p className="text-meta-text text-lg mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-deep-teal" />
                {project.location}
              </p>
              <p className="text-body-text text-base md:text-lg leading-relaxed max-w-2xl">
                {locale === 'en' && project?.descriptionEn ? project.descriptionEn : getShortSubtitle()}
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
                  {t.projects.contact}
                  <ArrowRight size={18} />
                </motion.div>
                </Link>
              <a href="#muut-kohteet" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-deep-teal text-deep-teal font-semibold hover:bg-deep-teal/5 transition-all duration-200 text-base whitespace-nowrap">
                {t.projects.seeOtherProjects}
                <ArrowRight size={18} />
              </a>
              </div>
              
              {/* Myyntihenkilö ja Kiinteistömaailma-linkki */}
              {project.myyntihenkilo && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-meta-text mb-2">{t.projects.sales}</p>
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
                      {t.projects.viewInKiinteistomaailma}
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
            <ImageCarousel images={project.kuvat} alt={projectName} />
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
                {t.projects.projectEssence}
              </h2>
              <div className="text-body-text text-base md:text-lg leading-relaxed space-y-4">
                {(locale === 'en' && project.presentationEn) || project.presentation ? (
                  // Jos on presentation, näytä se (lyhennettynä)
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: (locale === 'en' && project.presentationEn ? project.presentationEn : project.presentation || '')
                        .replace(/<p class="mb-6[^"]*">/g, '<p class="mb-4">')
                        .replace(/<p class="mb-4[^"]*">/g, '<p class="mb-4">')
                        .replace(/<ul class="mb-6[^"]*">/g, '<ul class="mb-4 ml-6 list-disc space-y-2">')
                    }} 
                  />
                ) : (
                  // Muuten käytä description ja lisää lyhyt teksti
                  <>
                    <p>
                      {projectDescription}
                    </p>
                    <p>
                      {t.projects.howHietakoskiBuildsText1}
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
                  <h3 className="font-semibold text-dark-muted">{t.common.type}</h3>
                </div>
                <p className="text-body-text">{translateProjectType(project.kohdetyyppi)}</p>
              </div>
              {project.asuntojenLkm && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.apartments}</h3>
                  </div>
                  <p className="text-body-text">{project.asuntojenLkm}</p>
                </div>
              )}
              {project.pintaAlat && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.area}</h3>
                  </div>
                  <p className="text-body-text">{project.pintaAlat}</p>
                </div>
              )}
              {project.kaytto && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.usage}</h3>
                  </div>
                  <p className="text-body-text">{project.kaytto ? translateUsage(project.kaytto) : ''}</p>
                </div>
              )}
              {(hasOwnLot || project.tontinOmistus) && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.lot}</h3>
                  </div>
                  <p className="text-body-text">{translateProjectDetail(project.tontinOmistus || 'Oma')}</p>
                </div>
              )}
              {project.lämmitys && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Flame size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.heating}</h3>
                  </div>
                  <p className="text-body-text">{translateProjectDetail(project.lämmitys)}</p>
                </div>
              )}
              {project.autopaikat && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Car size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.parking}</h3>
                  </div>
                  <p className="text-body-text">{translateProjectDetail(project.autopaikat)}</p>
                </div>
              )}
              {project.terassit && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.terraces}</h3>
                  </div>
                  <p className="text-body-text">{project.terassit}</p>
                </div>
              )}
              {project.toteutusmuoto && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.implementation}</h3>
                  </div>
                  <p className="text-body-text">{project.toteutusmuoto}</p>
                </div>
              )}
              {project.rakennustapa && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.buildingMethod}</h3>
                  </div>
                  <p className="text-body-text">{project.rakennustapa}</p>
                </div>
              )}
              {project.asuntotyyppi && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.apartmentType}</h3>
                  </div>
                  <p className="text-body-text">{project.asuntotyyppi}</p>
                </div>
              )}
              {project.rakennustyyppi && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.buildingType}</h3>
                  </div>
                  <p className="text-body-text">{project.rakennustyyppi}</p>
                </div>
              )}
              {(project.status === 'Myyty' || project.status === 'Vuokrattu') && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.common.status}</h3>
                  </div>
                  <p className="text-body-text">
                    {project.status === 'Vuokrattu' ? t.projects.completedRented : t.projects.completed}
                  </p>
                </div>
              )}
              {project.erityista && (
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 size={20} className="text-deep-teal" />
                    <h3 className="font-semibold text-dark-muted">{t.projects.special}</h3>
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
                {t.projects.apartments}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.apartments.map((apt) => {
                  const getStatusBadge = (status: string) => {
                    switch (status) {
                      case 'Myynnissä':
                        return { label: translateStatus('Myynnissä'), color: 'bg-deep-teal text-white' }
                      case 'Varattu':
                        return { label: translateStatus('Varattu'), color: 'bg-slate-blue text-white' }
                      default:
                        return { label: translateStatus(status), color: 'bg-gray-100 text-body-text' }
                    }
                  }
                  const statusBadge = getStatusBadge(apt.status)
                  
                  return (
                    <div key={apt.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-xl font-bold text-dark-muted">
                          {t.projects.apartment} {apt.id}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full ${statusBadge.color}`}>
                          {statusBadge.label}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4 text-body-text">
                        {apt.rooms && <p className="text-sm">• {translateRooms(apt.rooms)}</p>}
                        {apt.size && <p className="text-sm">• {apt.size}</p>}
                        {apt.price && (
                          <p className="text-deep-teal font-semibold mt-3">{apt.price}</p>
                        )}
                      </div>
                      {project.myyntihenkilo && apt.status === 'Myynnissä' && (
                        <div className="mb-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-meta-text mb-1">{t.projects.sales}</p>
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
                              {t.projects.viewInKiinteistomaailma}
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
                            {apt.status === 'Myynnissä' ? t.projects.contactAboutApartment : t.projects.askAvailability}
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
                            {t.projects.contactAboutApartment}
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
              {t.projects.howHietakoskiBuilds}
            </h2>
            <div className="text-body-text text-base md:text-lg leading-relaxed space-y-3">
              <p>
                {t.projects.howHietakoskiBuildsText1}
              </p>
              <p>
                {t.projects.howHietakoskiBuildsText2}
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
                {t.projects.seeAlsoProjects}
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
                          alt={locale === 'en' && otherProject.nameEn ? otherProject.nameEn : otherProject.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold uppercase rounded ${getStatusColor(otherProject.status)} text-white`}>
                            {translateStatus(otherProject.status)}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-lg text-dark-muted mb-1">
                          {locale === 'en' && otherProject.nameEn ? otherProject.nameEn : otherProject.name}
                        </h3>
                        <p className="text-meta-text text-sm flex items-center gap-1 mb-2">
                          <MapPin size={14} className="text-deep-teal" />
                          {otherProject.location}
                        </p>
                        <p className="text-body-text text-sm line-clamp-2">
                          {locale === 'en' && otherProject.descriptionEn ? otherProject.descriptionEn : otherProject.description}
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
              {t.projects.interestedInProjects}
            </h2>
            <p className="text-body-text text-base mb-8">
              {t.projects.interestedInProjectsText}
            </p>
            <Link href="/yhteystiedot#elma">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 text-base cursor-pointer shadow-md hover:shadow-lg"
              >
                {t.projects.contact}
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
