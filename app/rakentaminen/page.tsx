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
      <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-dark-muted via-slate-blue to-dark-muted">
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
          <div className="absolute inset-0 bg-gradient-to-br from-dark-muted/80 via-black/70 to-dark-muted/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(31,43,43,0.15),transparent_50%)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-deep-teal/8 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-warm-rose/8 rounded-full blur-3xl hidden lg:block" />

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
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/90 text-lg md:text-xl lg:text-2xl font-light mb-12 leading-relaxed max-w-3xl"
              >
                Hietakoski rakentaa muuttovalmiit kodit hallitulla ja vastuullisella tavalla. Kohteet toteutetaan vaiheittain ja viimeistellään täysin valmiiksi ennen myyntiä, jotta asiakas voi tehdä ostopäätöksen todelliseen lopputulokseen perustuen.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl"
              >
                Asiakas ei osta rakennusprojektia, aikatauluja tai lupauksia – vaan valmiin kodin, johon voi muuttaa ilman rakentamiseen liittyvää epävarmuutta.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Hietakoski lyhyesti */}
      <section className="py-24 md:py-32 bg-sand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
              Hietakoski lyhyesti
            </h2>
            <div className="space-y-6 text-body-text text-lg md:text-xl leading-relaxed max-w-3xl">
              <p>
                Hietakoski Oy on suomalainen rakennusliike, joka keskittyy paritalojen ja pienempien asuinkohteiden toteutukseen kasvukeskuksissa. Toimintamme ydin on selkeä: kohteet rakennetaan valmiiksi asti ennen myyntiä, jotta asiakas näkee, mitä on ostamassa.
              </p>
              <p>
                Rakentamista ohjaa käytännönläheinen ajattelu, kokenut työnjohto ja hallittu toteutus. Ratkaisut perustuvat toistettaviin, hyväksi todettuihin rakenteisiin, kotimaisiin materiaaleihin ja selkeisiin vastuihin koko hankkeen ajan.
              </p>
              <p>
                Tämä toimintamalli mahdollistaa tasaisen laadun, ennakoitavat kustannukset ja huolettoman asumisen myös pitkällä aikavälillä.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Näin kohde rakentuu (vaiheittain) */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-warm-rose/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
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
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-dark-muted mb-3">
                Suunnittelu ja valmistelu
              </h3>
              <p className="text-body-text leading-relaxed">
                Kohteet suunnitellaan käytännöllisiksi, toimiviksi ja pitkäikäisiksi. Suunnittelussa huomioidaan tontti, ympäristö ja asumisen arki, jotta lopputulos palvelee käyttäjäänsä vuodesta toiseen.
              </p>
              <p className="text-meta-text text-sm mt-3 leading-relaxed">
                Ratkaisut eivät perustu yksittäisiin kokeiluihin, vaan kokemukseen vastaavista kohteista. Jos asiakas varaa kohteen riittävän aikaisessa vaiheessa, voi olla mahdollista vaikuttaa pintamateriaalivalintoihin ennalta määritellyissä rajoissa.
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
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-dark-muted mb-3">
                Rakentaminen hallitulla ketjulla
              </h3>
              <p className="text-body-text leading-relaxed">
                Rakentaminen etenee sovitun aikataulun mukaisesti. Työmaalla vastaa nimetty työnjohto, joka huolehtii laadusta, turvallisuudesta ja kokonaisuuden etenemisestä.
              </p>
              <p className="text-meta-text text-sm mt-3 leading-relaxed">
                Rakentamisen hallittu ketju ja selkeä vastuunjako vähentävät virheitä ja pitävät toteutuksen johdonmukaisena.
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
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h3 className="font-display text-2xl font-bold text-dark-muted mb-3">
                Viimeistely ja tarkastus
              </h3>
              <p className="text-body-text leading-relaxed">
                Ennen myyntiä kohteet viimeistellään täysin valmiiksi. Tilat, pinnat ja yksityiskohdat käydään läpi, jotta kokonaisuus vastaa suunniteltua ja luvattua lopputulosta.
              </p>
              <p className="text-meta-text text-sm mt-3 leading-relaxed">
                Asiakas näkee asunnon siinä kunnossa, jossa se luovutetaan.
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
                <div className="flex-shrink-0 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-dark-muted mb-3">
                Myynti ja luovutus
              </h3>
              <p className="text-body-text leading-relaxed">
                Kohde tuodaan myyntiin vasta, kun se on valmis. Myynti tapahtuu Etuoven kautta, ja luovutus tehdään selkeästi ilman keskeneräisiä vaiheita tai avoimia kysymyksiä.
              </p>
              <p className="text-meta-text text-sm mt-3 leading-relaxed">
                Ostopäätös perustuu todelliseen kohteeseen – ei tulevaan lupaukseen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Vastuut ja ihmiset */}
      <section className="py-24 md:py-32 bg-sand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
              Selkeät vastuut koko hankkeen ajan
            </h2>
            <p className="text-body-text text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              Hietakosken hankkeissa vastuut ovat selkeitä ja ennakoitavia:
            </p>
            <ul className="space-y-4 text-body-text text-lg leading-relaxed max-w-3xl mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>Rakentamisen toteutuksesta ja laadusta vastaa nimetty työnjohto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>Myynti ja asiakasviestintä hoidetaan keskitetysti</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>Asiakas tietää koko ajan, kenen puoleen kääntyä</span>
              </li>
            </ul>
            <p className="text-body-text text-lg leading-relaxed max-w-3xl">
              Tämä toimintamalli vähentää epäselvyyksiä ja tekee koko prosessista rauhallisen myös asiakkaan näkökulmasta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Mitä "valmis koti" tarkoittaa */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-warm-rose/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
              Mitä valmis koti tarkoittaa asiakkaalle
            </h2>
            <p className="text-body-text text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              Valmis koti tarkoittaa käytännössä sitä, että:
            </p>
            <ul className="space-y-4 text-body-text text-lg leading-relaxed max-w-3xl mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>kohde on rakennettu valmiiksi ennen myyntiä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>asiakas näkee lopputuloksen ennen ostopäätöstä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>aikataulu ja sisältö ovat selkeitä</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>asumisen kustannukset ja kokonaisuus ovat ennakoitavissa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>ei rakennusaikaista epävarmuutta</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-deep-teal flex-shrink-0 mt-1" size={24} />
                <span>ei keskeneräisiä lupauksia</span>
              </li>
            </ul>
            <p className="text-body-text text-lg leading-relaxed max-w-3xl">
              Asiakas voi keskittyä muuttoon ja asumiseen – ei rakentamisen seuraamiseen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA: yhteys myyntiin */}
      <section className="py-24 md:py-32 bg-sand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
              Kysyttävää kohteista tai rakentamisesta?
            </h2>
            <p className="text-body-text text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Myynti auttaa kaikissa kohteisiin, esittelyihin ja toteutukseen liittyvissä kysymyksissä.
            </p>
            <Link href="/yhteystiedot#elma">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 shadow-md hover:shadow-lg text-lg cursor-pointer"
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
