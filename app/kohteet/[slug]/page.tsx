'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, CheckCircle, Droplets, Zap, Wifi, Car } from 'lucide-react'
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
        return 'bg-aged-copper'
      case 'Vuokrattu':
        return 'bg-slate-blue'
      default:
        return 'bg-slate-blue'
    }
  }

  const isVantaanSiira = project.id === 'vantaan-siira'

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-16 md:pt-20 pb-3 bg-white">
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

      {/* VANTAAN SIIRA - Yksinkertaistettu rakenne */}
      {isVantaanSiira ? (
        <>
          {/* Hero: Otsikko + Karuselli */}
          <section className="pb-0 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className={`inline-block px-3 py-1 ${getStatusColor()} text-white text-xs font-semibold uppercase tracking-wide mb-3`}>
                  Valmis ja myynnissä
                </span>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-deep-charcoal mb-2 leading-tight">
                  Asunto Oy Vantaan Siira
                </h1>
                <p className="text-deep-charcoal/60 text-lg mb-6">
                  Siiratie 5, Vantaa – Nikinmäki
                </p>
                <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed max-w-3xl">
                  Valmis kolmen paritalon kokonaisuus rauhallisella Nikinmäen pientaloalueella. Modernit, yksitasoiset perheasunnot on toteutettu kotimaisista puuelementeistä ja ne ovat muuttovalmiita ilman rakennusriskiä.
                </p>
              </motion.div>
            </div>

            {/* Kuvakaruselli */}
            {project.kuvat && project.kuvat.length > 0 ? (
              <div className="relative w-full aspect-video mt-6">
                <ImageCarousel images={project.kuvat} alt={`${project.name}, Siiratie 5`} />
              </div>
            ) : (
              <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mt-6">
                <p className="text-deep-charcoal/50 text-lg">Kuvat tulossa</p>
              </div>
            )}
          </section>

          {/* A1-asunnon nosto */}
          <section id="a1" className="py-16 md:py-20 bg-warm-cream">
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
                    Asunto A1
                  </h2>
                  <p className="text-deep-charcoal/60">Siiratie 5 A 1</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3 text-deep-charcoal/80 text-lg">
                    <p>• 4h, kt, kh, s, lämmin varasto</p>
                    <p>• 78,5 m² • Yksitasoinen</p>
                    <p>• Valmistunut 2024</p>
                    <p>• Heti vapaa</p>
                  </div>
                  <div className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm">
                    <div className="text-center">
                      <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Velaton hinta</span>
                      <p className="text-aged-copper font-bold text-4xl md:text-5xl">270 000 €</p>
                    </div>
                  </div>
                </div>

                <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                  Uusi, yksitasoinen koti viilennyksellä varustetulla poistoilmalämpöpumpulla. Vesikiertoinen lattialämmitys, taloyhtiön kuituliittymä, lasitettavissa oleva terassi sekä kaksi autopaikkaa sähköauton latausvalmiudella.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {project.etuoviUrl && (
                    <motion.a
                      href={project.etuoviUrl}
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

          {/* Asunnot */}
          {project.apartments && (
            <section className="py-16 md:py-20 bg-white">
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
                      <div key={apt.id} className={`p-4 border ${isHighlight ? 'border-aged-copper bg-aged-copper/5' : 'border-gray-200 bg-white'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-deep-charcoal">Asunto {apt.id}</h3>
                          <span className={`text-xs px-2 py-1 ${statusDisplay.color}`}>
                            {statusDisplay.label}
                          </span>
                        </div>
                        {apt.id === 'A1' ? (
                          <a href="#a1" className="text-aged-copper text-sm hover:underline">Katso tiedot</a>
                        ) : apt.status === 'Vapaa' ? (
                          <Link href="/yhteystiedot#elma" className="text-aged-copper text-sm hover:underline">Kysy saatavuus</Link>
                        ) : apt.status === 'Myyty' || apt.status === 'Varattu' ? (
                          <span className="text-deep-charcoal/50 text-sm">{apt.status}</span>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Kohteen tiedot (yhdistetty) */}
          <section className="py-16 md:py-20 bg-mist-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Vasemmalla: Kuvaus */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">Kohteen tiedot</h2>
                  <p className="text-deep-charcoal/80 text-base leading-relaxed mb-4">
                    Asunto Oy Vantaan Siira on valmis kolmen paritalon kokonaisuus Nikinmäessä. Yksitasoiset perheasunnot on toteutettu laadukkaista kotimaisista puuelementeistä.
                  </p>
                  <p className="text-deep-charcoal/80 text-base leading-relaxed mb-6">
                    Asunnot ovat muuttovalmiita ilman rakennusriskiä. Lopputulos on nähtävissä ennen ostopäätöstä.
                  </p>

                  <h3 className="font-display text-lg font-bold text-deep-charcoal mb-3">Tekniikka</h3>
                  <ul className="space-y-2 text-deep-charcoal/80 text-sm">
                    <li className="flex items-center gap-2">
                      <Droplets size={16} className="text-aged-copper flex-shrink-0" />
                      <span>PILP + viilennys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets size={16} className="text-aged-copper flex-shrink-0" />
                      <span>Vesikiertoinen lattialämmitys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wifi size={16} className="text-aged-copper flex-shrink-0" />
                      <span>Taloyhtiön kuituliittymä</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Car size={16} className="text-aged-copper flex-shrink-0" />
                      <span>2 autopaikkaa / asunto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap size={16} className="text-aged-copper flex-shrink-0" />
                      <span>Sähköauton latausvalmius</span>
                    </li>
                  </ul>
                </div>

                {/* Oikealla: Perustiedot */}
                <div>
                  <h3 className="font-display text-lg font-bold text-deep-charcoal mb-4">Perustiedot</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-deep-charcoal/60 text-sm">Kohdetyyppi</span>
                      <span className="text-deep-charcoal font-medium text-sm">Paritalokokonaisuus</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-deep-charcoal/60 text-sm">Asuntoja</span>
                      <span className="text-deep-charcoal font-medium text-sm">6</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-deep-charcoal/60 text-sm">Rakennusvuosi</span>
                      <span className="text-deep-charcoal font-medium text-sm">2024</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-deep-charcoal/60 text-sm">Rakennustapa</span>
                      <span className="text-deep-charcoal font-medium text-sm">Kotimaiset puuelementit</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-deep-charcoal/60 text-sm">Taloyhtiö</span>
                      <span className="text-deep-charcoal font-medium text-sm">Asunto Oy Vantaan Siira</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sijainti */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-6">Sijainti</h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    title="Sijainti - Siiratie 5, Vantaa"
                    src="https://www.google.com/maps?q=Siiratie%205%20Vantaa&output=embed"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div>
                  <p className="text-deep-charcoal/80 text-base leading-relaxed mb-4">
                    Nikinmäki on rauhallinen ja arvostettu pientaloalue, joka sopii erityisesti pitkäaikaiseen asumiseen. Luonto on lähellä ja liikenneyhteydet toimivat sujuvasti.
                  </p>
                  <p className="text-deep-charcoal/60 text-sm">
                    Siiratie 5, 01260 Vantaa
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Loppu-CTA */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-mist-white/30 to-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
                Kiinnostuitko tästä kohteesta?
              </h2>
              <p className="text-deep-charcoal/70 text-base mb-8">
                Ota yhteyttä ja kysy lisätietoja Asunto Oy Vantaan Siirasta tai myynnissä olevasta A1-asunnosta.
              </p>
              <Link href="/yhteystiedot#elma">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 text-base cursor-pointer"
                >
                  Ota yhteyttä
                  <ArrowRight size={18} />
                </motion.div>
              </Link>
            </div>
          </section>
        </>
      ) : (
        /* MUUT PROJEKTIT - Regular Hero */
        <>
          <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-deep-charcoal via-slate-blue to-deep-charcoal">
            <div className="absolute inset-0 z-0">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-slate-blue/75 to-deep-charcoal/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-1.5 ${getStatusColor()} text-white text-sm font-semibold`}>
                    {project.status}
                  </span>
                  <span className="text-white/80 text-sm">{project.kohdetyyppi}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight max-w-4xl">
                  {project.name}
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  {project.location}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Yleiskuvaus */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                  Kohteen kuvaus
                </h2>
                <p className="text-deep-charcoal/80 text-lg md:text-xl leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Perustiedot */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-8">
                  Kohteen perustiedot
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                  <div className="space-y-4">
                    <div>
                      <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Kohdetyyppi</span>
                      <p className="text-deep-charcoal font-semibold mt-1">{project.kohdetyyppi}</p>
                    </div>
                    <div>
                      <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Sijainti</span>
                      <p className="text-deep-charcoal font-semibold mt-1">{project.location}</p>
                    </div>
                    {project.asuntojenLkm && (
                      <div>
                        <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Asuntojen lukumäärä</span>
                        <p className="text-deep-charcoal font-semibold mt-1">{project.asuntojenLkm}</p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    {project.pintaAlat && (
                      <div>
                        <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Pinta-alat</span>
                        <p className="text-deep-charcoal font-semibold mt-1">{project.pintaAlat}</p>
                      </div>
                    )}
                    {project.valmistumisvuosi && (
                      <div>
                        <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Valmistumisvuosi</span>
                        <p className="text-deep-charcoal font-semibold mt-1">{project.valmistumisvuosi}</p>
                      </div>
                    )}
                    {project.rakennusvuosi && !project.valmistumisvuosi && (
                      <div>
                        <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Rakennusvuosi</span>
                        <p className="text-deep-charcoal font-semibold mt-1">{project.rakennusvuosi}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide">Status</span>
                      <p className="text-deep-charcoal font-semibold mt-1">{project.status}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Kuvat */}
          {project.kuvat && project.kuvat.length > 0 && (
            <section className="py-24 md:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-8">
                    Kuvat
                  </h2>
                  <ImageCarousel images={project.kuvat} alt={project.name} />
                </motion.div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko tästä kohteesta?
                </h2>
                <p className="text-deep-charcoal/70 text-lg mb-8">
                  Myynti auttaa kaikissa kohteeseen liittyvissä kysymyksissä.
                </p>
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer"
                  >
                    Ota yhteys myyntiin
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  )
}
