'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RakentaminenPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero / Johdanto */}
      <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-deep-charcoal via-slate-blue to-deep-charcoal">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/rakentaminen_hero.jpg"
            alt="Rakentaminen - Hietakoski Oy"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-slate-blue/75 to-deep-charcoal/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,93,44,0.1),transparent_50%)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-aged-copper/10 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-light-oak/10 rounded-full blur-3xl hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Rakentaminen
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl">
                Hietakoski rakentaa muuttovalmiit kodit hallitulla ja vastuullisella tavalla.
                Kohteet toteutetaan vaiheittain ja viimeistellään valmiiksi ennen myyntiä.
                Asiakas ostaa valmiin kodin, ei keskeneräistä projektia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Hietakosken tarina (lyhyt) */}
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
              Hietakoski lyhyesti
            </h2>
            <div className="space-y-4 text-deep-charcoal/80 text-lg md:text-xl leading-relaxed max-w-3xl">
              <p>
                Hietakoski Oy on suomalainen rakennusliike, joka keskittyy paritalojen ja pienempien asuinkohteiden toteutukseen. Toiminnan ydin on selkeä: kohteet rakennetaan valmiiksi asti ennen myyntiä, jotta asiakas voi tehdä päätöksen todelliseen lopputulokseen perustuen.
              </p>
              <p>
                Rakentamista ohjaa käytännönläheinen ajattelu, kokenut työnjohto ja hallittu toteutus. Ratkaisut perustuvat toistettavuuteen, kotimaisiin materiaaleihin ja selkeisiin vastuisiin koko hankkeen ajan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Näin kohde rakentuu (vaiheittain) */}
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
              Näin kohde rakentuu
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Vaihe 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Suunnittelu ja valmistelu
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Kohteet suunnitellaan käytännöllisiksi ja pitkäikäisiksi. Suunnittelussa huomioidaan tontti, ympäristö ja kohteen käyttötarkoitus, jotta rakentaminen voidaan toteuttaa hallitusti.
              </p>
            </motion.div>

            {/* Vaihe 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Rakentaminen hallitulla ketjulla
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Rakentaminen etenee sovitun aikataulun mukaisesti. Työmaalla vastaa nimetty työnjohto, joka huolehtii laadusta, turvallisuudesta ja kokonaisuuden etenemisestä.
              </p>
            </motion.div>

            {/* Vaihe 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Viimeistely ja tarkastus
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Ennen myyntiä kohteet viimeistellään valmiiksi. Tilat ja yksityiskohdat käydään läpi, jotta lopputulos vastaa suunniteltua kokonaisuutta.
              </p>
            </motion.div>

            {/* Vaihe 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aged-copper text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-3">
                Myynti ja luovutus
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                Kohde tuodaan myyntiin vasta, kun se on valmis. Myynti tapahtuu Etuoven kautta, ja luovutus tehdään selkeästi ilman keskeneräisiä vaiheita.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Vastuut ja ihmiset */}
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
              Selkeät vastuut koko hankkeen ajan
            </h2>
            <p className="text-deep-charcoal/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              Hietakosken hankkeissa vastuut ovat selkeitä ja ennakoitavia.
            </p>
            <ul className="space-y-4 text-deep-charcoal/80 text-lg leading-relaxed max-w-3xl">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>Rakentamisen toteutuksesta ja laadusta vastaa työmaan työnjohto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>Myynti ja asiakasviestintä hoidetaan keskitetysti</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>Asiakas tietää koko ajan, kenen puoleen kääntyä</span>
              </li>
            </ul>
            <p className="text-deep-charcoal/70 text-lg leading-relaxed max-w-3xl mt-8">
              Tämä toimintamalli vähentää epäselvyyksiä ja tekee koko prosessista hallitun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Mitä "valmis koti" tarkoittaa */}
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
              Mitä valmis koti tarkoittaa asiakkaalle
            </h2>
            <ul className="space-y-4 text-deep-charcoal/80 text-lg leading-relaxed max-w-3xl">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>kohde on rakennettu valmiiksi ennen myyntiä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>asiakas näkee lopputuloksen ennen ostopäätöstä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>aikataulu ja sisältö ovat selkeitä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>ei rakennusaikaista epävarmuutta</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-aged-copper flex-shrink-0 mt-1" size={24} />
                <span>ei keskeneräisiä lupauksia</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA: yhteys myyntiin */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight">
              Kysyttävää kohteista tai rakentamisesta?
            </h2>
            <p className="text-deep-charcoal/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Myynti auttaa kaikissa kohteisiin, esittelyihin ja toteutukseen liittyvissä kysymyksissä.
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
