'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
      
      {/* Hero - Vantaan Siira: Kuvakaruselli */}
      {isVantaanSiira && project.kuvat && project.kuvat.length > 0 ? (
        <section className="relative pt-24 md:pt-32">
          <div className="relative w-full aspect-video" role="region" aria-label={`Kuvakaruselli: ${project.name}, Siiratie 5`}>
            <ImageCarousel images={project.kuvat} alt={`${project.name}, Siiratie 5`} />
          </div>
        </section>
      ) : isVantaanSiira ? (
        <section className="relative pt-24 md:pt-32">
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

      {/* Kohteen otsikko ja status - Vantaan Siira */}
      {isVantaanSiira && (
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-1.5 ${getStatusColor()} text-white text-sm font-semibold`}>
                  Valmis ja myynnissä
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-3 leading-[1.1] tracking-tight">
                {project.name}
              </h1>
              <h2 className="font-display text-xl md:text-2xl text-deep-charcoal/70 mb-6">
                Siiratie 5, Vantaa – Nikinmäki
              </h2>
              <p className="text-deep-charcoal/80 text-lg md:text-xl leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Kuvaus / kohteen tarina - Vantaan Siira */}
      {isVantaanSiira && (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                Kohteen kuvaus
              </h2>
              <div className="space-y-4 text-deep-charcoal/80 text-lg md:text-xl leading-relaxed">
                <p>
                  Asunto Oy Vantaan Siira on valmis kolmen paritalon kokonaisuus, joka sijaitsee rauhallisella Nikinmäen pientaloalueella Vantaalla. Kohteessa on yhteensä 6 modernia, yksitasoista perheasuntoa, jotka on toteutettu kotimaisista puuelementeistä.
                </p>
                <p>
                  Asunnot ovat muuttovalmiita ilman rakennusriskiä. Kaikki kohteet on viimeistelty valmiiksi ennen myyntiä, joten asiakas näkee lopputuloksen ennen ostopäätöstä. Varustelutaso on moderni: poistoilmalämpöpumppu viilennyksellä, vesikiertoinen lattialämmitys, taloyhtiön kuituliittymä sekä kaksi autopaikkaa per asunto sähköauton latausvalmiudella.
                </p>
              </div>
            </motion.div>
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
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Kohdetyyppi</span>
                  <p className="text-deep-charcoal font-semibold">Paritalokokonaisuus</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Asuntoja</span>
                  <p className="text-deep-charcoal font-semibold">6</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Rakennusvuosi</span>
                  <p className="text-deep-charcoal font-semibold">2024</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Rakennustapa</span>
                  <p className="text-deep-charcoal font-semibold">Kotimaiset puuelementit</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Lämmitys</span>
                  <p className="text-deep-charcoal font-semibold">Poistoilmalämpöpumppu + vesikiertoinen lattialämmitys</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Viilennys</span>
                  <p className="text-deep-charcoal font-semibold">Kyllä (PILP)</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Autopaikat</span>
                  <p className="text-deep-charcoal font-semibold">2 / asunto</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Sähköauto</span>
                  <p className="text-deep-charcoal font-semibold">Latausvalmius</p>
                </div>
                <div>
                  <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Tietoliikenne</span>
                  <p className="text-deep-charcoal font-semibold">Taloyhtiön kuituliittymä</p>
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

      {/* A1-asunnon myyntinosto - Vantaan Siira */}
      {isVantaanSiira && (
        <section id="a1" className="py-24 md:py-32 bg-gradient-to-br from-aged-copper/5 via-aged-copper/10 to-aged-copper/5 border-y border-aged-copper/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-aged-copper/20"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-aged-copper/10 text-aged-copper text-sm font-semibold rounded mb-4">
                  Myyntinosto
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-2">
                  Siiratie 5 A 1
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-1">Huoneet</span>
                    <p className="text-deep-charcoal font-semibold text-lg">4h, kt, kh, s, lämmin varasto</p>
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-1">Koko</span>
                    <p className="text-deep-charcoal font-semibold text-lg">78,5 m²</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-1">Rakennusvuosi</span>
                    <p className="text-deep-charcoal font-semibold text-lg">2024</p>
                  </div>
                  <div>
                    <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-1">Saatavuus</span>
                    <p className="text-deep-charcoal font-semibold text-lg">Heti</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-aged-copper/5 rounded-lg border border-aged-copper/20">
                <span className="text-deep-charcoal/60 text-sm font-medium uppercase tracking-wide block mb-2">Velaton hinta</span>
                <p className="text-aged-copper font-bold text-3xl">270 000 €</p>
              </div>

              <div className="mb-8">
                <p className="text-deep-charcoal/80 text-base md:text-lg leading-relaxed">
                  Uusi, yksitasoinen koti viilennyksellä varustetulla poistoilmalämpöpumpulla. Vesikiertoinen lattialämmitys, taloyhtiön kuituliittymä, lasitettavissa oleva terassi sekä kaksi autopaikkaa sähköauton latausvalmiudella.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/yhteystiedot#elma">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg cursor-pointer"
                  >
                    Ota yhteyttä A1:stä
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
                {project.etuoviUrl && (
                  <motion.a
                    href={project.etuoviUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-aged-copper text-aged-copper font-semibold hover:bg-aged-copper hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                  >
                    Katso Etuovessa
                    <ArrowRight size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
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

      <Footer />
    </main>
  )
}

