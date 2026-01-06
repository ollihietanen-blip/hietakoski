'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Home, CheckCircle, Droplets, Zap, Wifi, Car } from 'lucide-react'
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
    <main className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-16 md:pt-20 pb-2 bg-white border-b border-gray-100">
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

      {/* Kohteen otsikko ja status - Vantaan Siira (ennen karusellia) */}
      {isVantaanSiira && (
        <section className="py-4 md:py-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-1.5 ${getStatusColor()} text-white text-sm font-semibold rounded-full`}>
                  Valmis ja myynnissä
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-2 leading-[1.1] tracking-tight">
                {project.name}
              </h1>
              <h2 className="font-display text-lg md:text-xl text-deep-charcoal/70 mb-4">
                Siiratie 5, Vantaa – Nikinmäki
              </h2>
              {/* Hero-nosto ja CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <p className="text-deep-charcoal/80 text-sm md:text-base">
                  A1 • 78,5 m² • Velaton hinta 270 000 € • Heti vapaa
                </p>
                <a
                  href="#a1"
                  onClick={(e) => {
                    e.preventDefault()
                    const a1 = document.getElementById('a1')
                    if (a1) a1.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-aged-copper text-white text-sm font-semibold hover:bg-aged-copper/90 transition-colors"
                >
                  Katso myynnissä oleva A1
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Hero - Vantaan Siira: Kuvakaruselli */}
      {isVantaanSiira && project.kuvat && project.kuvat.length > 0 ? (
        <section className="relative">
          <div className="relative w-full aspect-video" role="region" aria-label={`Kuvakaruselli: ${project.name}, Siiratie 5`}>
            <ImageCarousel images={project.kuvat} alt={`${project.name}, Siiratie 5`} />
          </div>
        </section>
      ) : isVantaanSiira ? (
        <section className="relative">
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <p className="text-deep-charcoal/50 text-lg">Kuvat tulossa – {project.name}</p>
          </div>
        </section>
      ) : (
        /* Regular Hero */
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
      )}

      {/* Feature-nostot (5) */}
      {isVantaanSiira && (
        <section className="py-10 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { icon: <Droplets className="text-aged-copper" size={20} />, label: 'PILP + viilennys' },
                { icon: <Droplets className="text-aged-copper" size={20} />, label: 'Vesikiertoinen lattialämmitys' },
                { icon: <Wifi className="text-aged-copper" size={20} />, label: 'Taloyhtiön kuitu' },
                { icon: <Car className="text-aged-copper" size={20} />, label: '2 autopaikkaa / asunto' },
                { icon: <Zap className="text-aged-copper" size={20} />, label: 'EV-latausvalmius' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-mist-white/60 border border-gray-200/60">
                  {f.icon}
                  <span className="text-deep-charcoal text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Yleiskuvaus - Muut projektit */}
      {!isVantaanSiira && (
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
      )}

      {/* A1-asunnon myyntikortti */}
      {isVantaanSiira && (
        <section id="a1" className="py-24 md:py-32 bg-gradient-to-br from-aged-copper/5 via-aged-copper/10 to-aged-copper/5 border-y border-aged-copper/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-xl border-2 border-aged-copper/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-aged-copper/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="mb-6 relative z-10">
                <span className="inline-block px-4 py-1.5 bg-aged-copper text-white text-sm font-semibold rounded-full mb-4">
                  Myynnissä: Asunto A1
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal">
                  Siiratie 5 A 1
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                <ul className="space-y-2 text-deep-charcoal/90">
                  <li>4h, kt, kh, s, lämmin varasto</li>
                  <li>78,5 m² • Yksitasoinen</li>
                  <li>Valmistunut 2024</li>
                  <li>Heti vapaa</li>
                </ul>
                <div className="p-6 bg-gradient-to-br from-aged-copper/10 to-aged-copper/5 rounded-xl border-2 border-aged-copper/30">
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Velaton hinta</span>
                  <p className="text-aged-copper font-bold text-4xl md:text-5xl">270 000 €</p>
                </div>
              </div>
              <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                Uusi, yksitasoinen koti viilennyksellä varustetulla poistoilmalämpöpumpulla. Vesikiertoinen lattialämmitys, taloyhtiön kuituliittymä, lasitettavissa oleva terassi sekä kaksi autopaikkaa sähköauton latausvalmiudella.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                {project.etuoviUrl && (
                  <motion.a
                    href={project.etuoviUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-aged-copper text-aged-copper font-semibold hover:bg-aged-copper hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl text-lg rounded-lg"
                  >
                    Katso A1 myynti-ilmoitus
                    <ArrowRight size={20} />
                  </motion.a>
                )}
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer rounded-lg"
                  >
                    Ota yhteyttä kohteesta
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Asunnot-osio */}
      {isVantaanSiira && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-8">Asunnot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'A1', status: 'Myynnissä', highlight: true },
                { id: 'A2', status: 'Kysy saatavuus' },
                { id: 'A3', status: 'Kysy saatavuus' },
                { id: 'A4', status: 'Kysy saatavuus' },
                { id: 'A5', status: 'Kysy saatavuus' },
                { id: 'A6', status: 'Kysy saatavuus' },
              ].map((apt) => (
                <div key={apt.id} className={`p-5 border ${apt.highlight ? 'border-aged-copper' : 'border-gray-200'} rounded-lg bg-white shadow-sm`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-deep-charcoal">Asunto {apt.id}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${apt.status === 'Myynnissä' ? 'bg-aged-copper text-white' : 'bg-gray-100 text-deep-charcoal/70'}`}>
                      {apt.status}
                    </span>
                  </div>
                  {apt.id === 'A1' ? (
                    <a href="#a1" className="text-aged-copper text-sm hover:underline">Katso A1</a>
                  ) : (
                    <Link href="/yhteystiedot#elma" className="text-aged-copper text-sm hover:underline">Kysy saatavuus</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sijainti-osio */}
      {isVantaanSiira && (
        <section className="py-20 md:py-24 bg-gradient-to-b from-white via-mist-white/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">Sijainti</h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Sijainti - Siiratie 5, Vantaa"
                  src="https://www.google.com/maps?q=Siiratie%205%20Vantaa&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed">
                Nikinmäki on rauhallinen ja arvostettu pientaloalue, joka sopii erityisesti pitkäaikaiseen asumiseen. Luonto on lähellä ja liikenneyhteydet toimivat sujuvasti.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Kohteen esittely ja tekniikka */}
      {isVantaanSiira && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">Kohteen esittely</h2>
              <p className="text-deep-charcoal/80 text-lg leading-relaxed mb-4">
                Asunto Oy Vantaan Siira on valmis kolmen paritalon kokonaisuus Nikinmäessä. Yksitasoiset perheasunnot on toteutettu laadukkaista kotimaisista puuelementeistä.
              </p>
              <p className="text-deep-charcoal/80 text-lg leading-relaxed mb-10">
                Asunnot ovat muuttovalmiita ilman rakennusriskiä. Lopputulos on nähtävissä ennen ostopäätöstä.
              </p>
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-4">Tekniikka ja asumismukavuus</h3>
              <ul className="list-disc pl-5 space-y-2 text-deep-charcoal/80">
                <li>PILP + viilennys</li>
                <li>Vesikiertoinen lattialämmitys</li>
                <li>Kuitu</li>
                <li>EV-latausvalmius</li>
                <li>Terassi mahdollista lasittaa</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Perustiedot */}
      <section className={`py-24 md:py-32 ${isVantaanSiira ? 'bg-white' : 'bg-gradient-to-b from-white via-mist-white/30 to-white'}`}>
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
            {isVantaanSiira ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Home className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Kohdetyyppi</span>
                    <p className="text-deep-charcoal font-semibold">Paritalokokonaisuus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <span className="text-aged-copper font-bold text-lg">6</span>
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Asuntoja</span>
                    <p className="text-deep-charcoal font-semibold">6 asuntoa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <span className="text-aged-copper font-bold text-sm">2024</span>
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Rakennusvuosi</span>
                    <p className="text-deep-charcoal font-semibold">2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Rakennustapa</span>
                    <p className="text-deep-charcoal font-semibold">Kotimaiset puuelementit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Droplets className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Lämmitys</span>
                    <p className="text-deep-charcoal font-semibold text-sm">PILP + vesikiertoinen lattialämmitys</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Droplets className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Viilennys</span>
                    <p className="text-deep-charcoal font-semibold">Kyllä (PILP)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Car className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Autopaikat</span>
                    <p className="text-deep-charcoal font-semibold">2 / asunto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Zap className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Sähköauto</span>
                    <p className="text-deep-charcoal font-semibold">Latausvalmius</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mist-white/50 rounded-lg border border-gray-200/60">
                  <div className="flex-shrink-0 w-10 h-10 bg-aged-copper/10 rounded-lg flex items-center justify-center">
                    <Wifi className="text-aged-copper" size={20} />
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-xs font-medium uppercase tracking-wide block mb-1">Tietoliikenne</span>
                    <p className="text-deep-charcoal font-semibold">Taloyhtiön kuitu</p>
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </motion.div>
        </div>
      </section>

      {/* Kuvat - kuvakaruselli (ei Vantaan Siira, koska se on jo hero-osassa) */}
      {!isVantaanSiira && project.kuvat && project.kuvat.length > 0 && (
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

      {/* Hyvä tietää - accordion */}
      {isVantaanSiira && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">Hyvä tietää</h2>
            {[
              { q: 'Taloyhtiö', a: 'Asunto Oy Vantaan Siira' },
              { q: 'Kohteen tila', a: 'Kohde valmis' },
              { q: 'Autopaikat', a: '2 / asunto' },
              { q: 'Netti', a: 'Kuitu' },
              { q: 'Sähköauto', a: 'Latausvalmius' },
            ].map((item, idx) => (
              <details key={idx} className="border-b border-gray-200 py-4 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-deep-charcoal">{item.q}</span>
                  <span className="text-deep-charcoal/60 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="mt-2 text-deep-charcoal/80">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}


      {/* Pohjat - jos saatavilla */}
      {project.pohjat && project.pohjat.length > 0 && (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-8">
                Pohjat
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.pohjat.map((pohja, index) => (
                  <div key={index} className="relative h-96 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={pohja}
                      alt={`${project.name} - Pohja ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Myynti/Vuokraus CTA - kontekstisidonnainen */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {project.status === 'Myynnissä' && (
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko tästä kohteesta?
                </h2>
                <p className="text-deep-charcoal/70 text-lg mb-8">
                  Myynti auttaa kaikissa kohteeseen liittyvissä kysymyksissä.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {project.etuoviUrl && (
                    <motion.a
                      href={project.etuoviUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-aged-copper text-aged-copper font-semibold hover:bg-aged-copper hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                    >
                      Katso ilmoitus Etuovessa
                      <ArrowRight size={20} />
                    </motion.a>
                  )}
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
                </div>
              </div>
            )}

            {project.status === 'Vuokrattavana' && (
              <div className="space-y-4">
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
              </div>
            )}

            {project.status === 'Valmis' && (
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko vastaavasta kohteesta?
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
                    Kysy vastaavasta kohteesta
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </div>
            )}

            {(project.status === 'Tulossa' || project.status === 'Suunnittelussa') && (
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko tulevista kohteista?
                </h2>
                <p className="text-deep-charcoal/70 text-lg mb-8">
                  Myynti auttaa kaikissa tuleviin kohteisiin liittyvissä kysymyksissä.
                </p>
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer"
                  >
                    Kysy tulevista kohteista
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </div>
            )}

            {(project.status === 'Myyty' || project.status === 'Vuokrattu') && (
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko vastaavasta kohteesta?
                </h2>
                <p className="text-deep-charcoal/70 text-lg mb-8">
                  Myynti auttaa sinua löytämään vastaavanlaisen kodin.
                </p>
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer"
                  >
                    Kysy vastaavasta kohteesta
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Luottamusblokki */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-mist-white/50 p-8 md:p-12 border border-gray-200/60 rounded-lg"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
              Toteutettu Hietakosken mallilla
            </h2>
            <p className="text-deep-charcoal/70 text-lg leading-relaxed mb-6">
              Kohde on toteutettu Hietakosken hallitulla rakennusmallilla, jossa vastuut, aikataulu ja laatu ovat selkeitä koko hankkeen ajan.
            </p>
            <Link href="/rakentaminen">
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-aged-copper font-semibold hover:underline"
              >
                Lue lisää rakentamisesta
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Loppu-CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {isVantaanSiira ? (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                  Kiinnostuitko tästä kohteesta?
                </h2>
                <p className="text-deep-charcoal/70 text-lg mb-8">
                  Ota yhteyttä ja kysy lisätietoja Asunto Oy Vantaan Siirasta tai myynnissä olevasta A1-asunnosta.
                </p>
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer"
                  >
                    Ota yhteyttä
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

