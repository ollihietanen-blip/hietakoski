'use client'

import { motion } from 'framer-motion'
import { Building2, Handshake, Shield, User, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MiksiHietakoskiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 1. Mitä Hietakoski tekee */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white via-mist-white/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight max-w-4xl">
              Mitä Hietakoski tekee
            </h1>
            <p className="text-deep-charcoal/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              Hietakoski Oy rakentaa paritaloja ja pienkohteita kasvukeskuksiin. Kohteet toteutetaan hallitulla ketjulla: kotimaiset puuelementit, kokenut työnjohto ja viimeistely valmiiksi ennen myyntiä. Asiakas ostaa kodin – ei keskeneräistä lupausta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Miksi tämä on turvallinen tapa ostaa */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight">
              Miksi tämä on turvallinen tapa ostaa
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-mist-white/50 p-8 border border-gray-200/60 shadow-sm"
            >
              <Shield className="text-aged-copper mb-4" size={32} />
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Valmis koti ilman riskiä
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Emme myy keskeneräisiä projekteja. Kohteet rakennetaan valmiiksi ennen myyntiä, jotta asiakas näkee mitä ostaa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-mist-white/50 p-8 border border-gray-200/60 shadow-sm"
            >
              <Building2 className="text-aged-copper mb-4" size={32} />
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Kotimaiset puuelementit
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Rakennamme kotimaisista puuelementeistä hallitulla tuotantoketjulla ja laadunvarmistuksella.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-mist-white/50 p-8 border border-gray-200/60 shadow-sm"
            >
              <Handshake className="text-aged-copper mb-4" size={32} />
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Selkeät vastuut
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Myynti ja asiakasasiat hoitaa Elma. Työmaiden työnjohto vastaa toteutuksesta ja laadusta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Yritys ja tekijät */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-mist-white/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight">
              Yritys ja tekijät
            </h2>
            <p className="text-deep-charcoal/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              Hietakoski Oy on vuonna 2019 perustettu kankaanpääläinen rakennusliike. Toimintamme ydin on yksinkertainen mutta harvinainen: rakennamme laadukkaat puutalokodit täysin valmiiksi omalla rahoituksellamme.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Elma */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-aged-copper to-aged-copper/80 flex items-center justify-center shadow-lg">
                  <User className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-2">
                    Elma Alakoski-Tomberg
                  </h3>
                  <p className="text-deep-charcoal/70 text-base mb-4">
                    Myynti, vuokraus, markkinointi, laskutus — RI
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+358442063617" className="flex items-center gap-2 text-deep-charcoal hover:text-aged-copper transition-colors">
                      <Phone size={18} />
                      <span>044 206 3617</span>
                    </a>
                    <a href="mailto:elma.alakoski@mallirakennus.fi" className="flex items-center gap-2 text-deep-charcoal hover:text-aged-copper transition-colors">
                      <Mail size={18} />
                      <span>elma.alakoski@mallirakennus.fi</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Työnjohto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-blue to-slate-blue/80 flex items-center justify-center shadow-lg">
                  <Building2 className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-4">
                    Työnjohto
                  </h3>
                  <p className="text-deep-charcoal/70 text-base leading-relaxed">
                    Työmaiden työnjohto vastaa toteutuksesta ja laadusta. Kokenut tiimi varmistaa, että jokainen projekti toteutetaan korkeimmalla laadulla ja aikataulussa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Toteutusmalli ja kumppanit */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight">
              Toteutusmalli ja kumppanit
            </h2>
            <p className="text-deep-charcoal/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              Hietakoski toimii yhteistyössä luotettavien kumppaneiden kanssa varmistaen, että jokainen projekti toteutetaan korkeimmalla laadulla.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-aged-copper to-aged-copper/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-deep-charcoal mb-3 group-hover:text-aged-copper transition-colors">
                    Hietakulma Oy
                  </h3>
                  <p className="text-deep-charcoal/70 leading-relaxed text-sm">
                    Vastaa lupaprosesseista ja teknisestä suunnittelusta. Yhdessä varmistamme, että kotisi on terveellinen, ekologinen ja energiatehokas.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/70 backdrop-blur-md p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-blue to-slate-blue/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-deep-charcoal mb-3 group-hover:text-aged-copper transition-colors">
                    Mallirakennus Oy
                  </h3>
                  <p className="text-deep-charcoal/70 leading-relaxed text-sm">
                    Pitkä kokemus pientaloista takaa, että pohjaratkaisut ovat aidosti toimivia. Kokenut suunnittelu varmistaa, että neliöt ovat hyötykäytössä.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

