'use client'

import { motion } from 'framer-motion'
import { Building2, Handshake, Award, Users, User } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-24 bg-gradient-to-b from-white via-warm-rose/30 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-rose/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-deep-teal" />
              <span className="text-deep-teal text-sm font-medium tracking-wider uppercase">Tietoja meistä</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight max-w-3xl">
              Kankaanpääläistä rakennusosaamista suurella sydämellä
            </h1>
          </motion.div>

          {/* Main Introduction */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-dark-muted/80 text-lg md:text-xl leading-relaxed font-light">
                  Hietakoski Oy on vuonna 2019 perustettu kankaanpääläinen rakennusliike. Toimintamme ydin on yksinkertainen mutta harvinainen: rakennamme laadukkaat puutalokodit täysin valmiiksi omalla rahoituksellamme, jotta sinä voit tehdä ostopäätöksen ilman riskiä. Vahva kasvu ja vakaa talous ovat osoitus siitä, että konseptimme toimii.
                </p>
              </div>

              {/* Stats or Features */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <Award className="text-deep-teal mb-3" size={28} />
                  <p className="text-xl font-bold text-dark-muted mb-1">Laatu</p>
                  <p className="text-xs text-dark-muted/50 uppercase tracking-wider">Tinkimätön</p>
                </div>
                <div className="p-5 bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <Users className="text-deep-teal mb-3" size={28} />
                  <p className="text-xl font-bold text-dark-muted mb-1">Kokemus</p>
                  <p className="text-xs text-dark-muted/50 uppercase tracking-wider">Vankka</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-96 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Construction and building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-blue/80 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* The Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-muted mb-4">
                Kasvollinen rakentaja
              </h2>
              <p className="text-dark-muted/70 text-lg leading-relaxed max-w-3xl">
                Hietakoski Oy:tä luotsaavat kokeneet ammattilaiset, jotka vastaavat työn jäljestä omilla kasvoillamme.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-2 group-hover:text-deep-teal transition-colors">
                      Janne Alakoski
                    </h3>
                    <p className="text-dark-muted/60 text-sm">Hallituksen puheenjohtaja</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-blue to-slate-blue/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-2 group-hover:text-deep-teal transition-colors">
                      Olli Hietanen
                    </h3>
                    <p className="text-dark-muted/60 text-sm">Hallituksen jäsen</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Partner Network Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-dark-muted mb-3 group-hover:text-deep-teal transition-colors">
                    Hietakulma Oy – Turvallinen rakenne
                  </h3>
                  <p className="text-dark-muted/70 leading-relaxed text-sm">
                    Hietakulma vastaa lupaprosesseista ja teknisestä suunnittelusta, me toteutuksesta. Yhdessä varmistamme, että kotisi on terveellinen, ekologinen ja energiatehokas. Laadun ketju on katkeamaton suunnittelupöydältä avainten luovutukseen.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-blue to-slate-blue/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-dark-muted mb-3 group-hover:text-deep-teal transition-colors">
                    Mallirakennus Oy – Arjessa toimivat kodit
                  </h3>
                  <p className="text-dark-muted/70 leading-relaxed text-sm">
                    Mallirakennus Oy:n pitkä kokemus pientaloista takaa, että pohjaratkaisut ovat aidosti toimivia. Kokenut suunnittelu varmistaa, että neliöt ovat hyötykäytössä ja koti palvelee asukkaiden tarpeita vuosikymmeniä.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

