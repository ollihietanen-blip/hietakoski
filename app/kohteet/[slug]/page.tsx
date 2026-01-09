'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Home, Droplets, Zap, Wifi, Car, MapPin, Building2, Calendar, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import { getProjectBySlug } from '@/lib/data'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const project = getProjectBySlug(params.slug)

  useEffect(() => {
    if (!project) {
      router.push('/kohteet')
    }
  }, [project, router])

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 md:pt-32 pb-24 text-center">
          <p className="text-deep-charcoal/70">Ladataan...</p>
        </div>
        <Footer />
      </main>
    )
  }

  const getStatusColor = () => {
    switch (project.status) {
      case 'Myynnissä':
        return 'bg-aged-copper'
      case 'Vuokrattavana':
        return 'bg-slate-blue'
      case 'Tulossa':
        return 'bg-slate-blue'
      case 'Suunnittelussa':
        return 'bg-slate-blue'
      case 'Valmis':
        return 'bg-aged-copper'
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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-16 md:pt-20 pb-3 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-deep-charcoal/60"
          >
            <Link href="/" className="hover:text-aged-copper transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Etusivu</span>
            </Link>
            <span>/</span>
            <Link href="/kohteet" className="hover:text-aged-copper transition-colors">
              Kohteet
            </Link>
            <span>/</span>
            <span className="text-deep-charcoal font-medium">{project.name}</span>
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
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-2 leading-tight">
              {project.name}
            </h1>
            <p className="text-deep-charcoal/60 text-lg mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-aged-copper" />
              {project.location}
            </p>
            <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed max-w-3xl">
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
              <p className="text-deep-charcoal/50 text-lg">Kuvat tulossa</p>
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-8">
                Kohteen esittely
              </h2>
              <div 
                className="text-deep-charcoal/80"
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
                <span className="inline-block px-4 py-1.5 bg-aged-copper text-white text-sm font-semibold uppercase tracking-wide mb-3">
                  Myynnissä
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-2">
                  Asunto {featuredApartment.id}
                </h2>
                <p className="text-deep-charcoal/60">{featuredApartment.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3 text-deep-charcoal/80 text-lg">
                  {featuredApartment.rooms && <p>• {featuredApartment.rooms}</p>}
                  {featuredApartment.size && <p>• {featuredApartment.size}</p>}
                  {project.rakennusvuosi && <p>• Valmistunut {project.rakennusvuosi}</p>}
                  <p>• Heti vapaa</p>
                </div>
                {featuredApartment.price && (
                  <div className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm">
                    <div className="text-center">
                      <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Velaton hinta</span>
                      <p className="text-aged-copper font-bold text-4xl md:text-5xl">{featuredApartment.price}</p>
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
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-aged-copper text-aged-copper font-semibold hover:bg-aged-copper hover:text-white transition-all duration-200 text-base"
                  >
                    Katso Etuovessa
                    <ArrowRight size={18} />
                  </motion.a>
                )}
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 text-base cursor-pointer"
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-6">Kaikki asunnot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.apartments.map((apt) => {
                const getStatusDisplay = (status: string) => {
                  switch (status) {
                    case 'Myynnissä':
                      return { label: 'Myynnissä', color: 'bg-aged-copper text-white' }
                    case 'Varattu':
                      return { label: 'Varattu', color: 'bg-slate-blue text-white' }
                    case 'Myyty':
                      return { label: 'Myyty', color: 'bg-gray-400 text-white' }
                    case 'Vapaa':
                      return { label: 'Kysy saatavuus', color: 'bg-gray-100 text-deep-charcoal/70' }
                    default:
                      return { label: 'Kysy saatavuus', color: 'bg-gray-100 text-deep-charcoal/70' }
                  }
                }
                const statusDisplay = getStatusDisplay(apt.status)
                const isHighlight = apt.status === 'Myynnissä'
                
                return (
                  <div key={apt.id} className={`p-4 border ${isHighlight ? 'border-aged-copper bg-aged-copper/5' : 'border-gray-200 bg-white'} rounded-lg`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-deep-charcoal">Asunto {apt.id}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${statusDisplay.color}`}>
                        {statusDisplay.label}
                      </span>
                    </div>
                    {apt.status === 'Myynnissä' ? (
                      <a href="#featured" className="text-aged-copper text-sm hover:underline">Katso tiedot</a>
                    ) : apt.status === 'Vapaa' ? (
                      <Link href="/yhteystiedot#elma" className="text-aged-copper text-sm hover:underline">Kysy saatavuus</Link>
                    ) : (
                      <span className="text-deep-charcoal/50 text-sm">{apt.status}</span>
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-8">Kohteen tiedot</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Perustiedot */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Building2 size={20} className="text-aged-copper" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-deep-charcoal">Perustiedot</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-deep-charcoal/60 text-sm">Kohdetyyppi</span>
                    <span className="text-deep-charcoal font-medium text-sm">{project.kohdetyyppi}</span>
                  </div>
                  {project.asuntojenLkm && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-deep-charcoal/60 text-sm">Asuntoja</span>
                      <span className="text-deep-charcoal font-medium text-sm">{project.asuntojenLkm}</span>
                    </div>
                  )}
                  {project.pintaAlat && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-deep-charcoal/60 text-sm">Pinta-alat</span>
                      <span className="text-deep-charcoal font-medium text-sm">{project.pintaAlat}</span>
                    </div>
                  )}
                  {project.slug === 'levi-suvannoisenkuja-10' && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-deep-charcoal/60 text-sm">Tontti</span>
                      <span className="text-deep-charcoal font-medium text-sm">Oma</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2">
                    <span className="text-deep-charcoal/60 text-sm">Status</span>
                    <span className="text-deep-charcoal font-medium text-sm">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Aikataulu */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-blue/10 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-slate-blue" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-deep-charcoal">Aikataulu</h3>
                </div>
                <div className="space-y-3">
                  {project.rakennusvuosi && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-deep-charcoal/60 text-sm">Rakennusvuosi</span>
                      <span className="text-deep-charcoal font-medium text-sm">{project.rakennusvuosi}</span>
                    </div>
                  )}
                  {project.valmistumisvuosi && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-deep-charcoal/60 text-sm">Valmistuminen</span>
                      <span className="text-deep-charcoal font-medium text-sm">{project.valmistumisvuosi}</span>
                    </div>
                  )}
                  {project.kaytto && (
                    <div className="flex justify-between py-2">
                      <span className="text-deep-charcoal/60 text-sm">Käyttötarkoitus</span>
                      <span className="text-deep-charcoal font-medium text-sm">{project.kaytto}</span>
                    </div>
                  )}
                  {!project.rakennusvuosi && !project.valmistumisvuosi && !project.kaytto && (
                    <p className="text-deep-charcoal/60 text-sm">Tiedot täydentyvät</p>
                  )}
                </div>
              </div>

              {/* Sijainti */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-aged-copper" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-deep-charcoal">Sijainti</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-deep-charcoal/60 text-sm">Paikkakunta</span>
                    <span className="text-deep-charcoal font-medium text-sm">{project.location}</span>
                  </div>
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
              {isReference 
                ? 'Kiinnostaako vastaavanlainen kohde?'
                : isUpcoming
                  ? 'Haluatko kuulla ensimmäisenä tästä kohteesta?'
                  : 'Kiinnostuitko tästä kohteesta?'
              }
            </h2>
            <p className="text-deep-charcoal/70 text-base mb-8">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 text-base cursor-pointer shadow-lg hover:shadow-xl"
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
