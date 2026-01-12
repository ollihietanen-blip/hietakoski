import { motion } from 'framer-motion'
import { Mail, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TietosuojaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-24 bg-gradient-to-b from-white via-warm-rose/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-deep-teal" />
              <span className="text-deep-teal text-sm font-medium tracking-wider uppercase">Tietosuoja</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-muted mb-4 leading-[1.1] tracking-tight">
              Tietosuojaseloste
            </h1>
            <p className="text-body-text text-sm text-meta-text">
              Viimeksi päivitetty: 12.1.2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="prose prose-lg max-w-none space-y-8"
          >
            {/* Rekisterinpitäjä */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4 flex items-center gap-3">
                <Shield className="text-deep-teal" size={24} />
                Rekisterinpitäjä
              </h2>
              <div className="text-body-text space-y-2">
                <p><strong>Hietakoski Oy</strong></p>
                <p>Y-tunnus: 3000614-7</p>
                <p>Kuninkaanlähteenkatu 8</p>
                <p>38700 Kankaanpää</p>
                <p>
                  Sähköposti:{' '}
                  <a href="mailto:hietakoski@gmail.com" className="text-deep-teal hover:underline">
                    hietakoski@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Mitä henkilötietoja käsitellään */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Mitä henkilötietoja käsitellään
              </h2>
              <div className="text-body-text space-y-4">
                <div>
                  <h3 className="font-semibold text-dark-muted mb-2">Yhteydenottojen käsittely</h3>
                  <p>Käsittelemme seuraavia henkilötietoja, kun otat meihin yhteyttä verkkosivustomme lomakkeen tai sähköpostin kautta:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Nimi (etunimi ja sukunimi)</li>
                    <li>Sähköpostiosoite</li>
                    <li>Puhelinnumero (jos annat sen)</li>
                    <li>Viestin sisältö ja mahdollinen kohde/asia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-muted mb-2">Tekniset tiedot</h3>
                  <p>Keräämme automaattisesti teknisiä tietoja sivustomme käytöstä:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP-osoite</li>
                    <li>Lokitiedot (päivämäärä, aika, käyttämäsi sivut)</li>
                    <li>Selaimesi ja laitteen tiedot</li>
                  </ul>
                  <p className="mt-2 text-sm text-meta-text">
                    Nämä tiedot kerätään tietoturvan ja palvelun toiminnan varmistamiseksi.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-muted mb-2">Analytiikka</h3>
                  <p>
                    Jos olet antanut suostumuksesi, käytämme Google Analytics -palvelua sivustomme käytön analysointiin. 
                    Analytiikkaa kerätään vain suostumuksella, ja voit muuttaa valintasi milloin tahansa evästeasetuksista.
                  </p>
                </div>
              </div>
            </section>

            {/* Käsittelyn tarkoitukset */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Käsittelyn tarkoitukset
              </h2>
              <div className="text-body-text space-y-2">
                <p>Henkilötietoja käsittelemme seuraaviin tarkoituksiin:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Yhteydenottoihin vastaaminen ja asiakaspalvelu</li>
                  <li>Tarjous- ja asuntokyselyiden käsittely</li>
                  <li>Mahdollisen asiakassuhteen hoito ja kehittäminen</li>
                  <li>Sivuston kehittäminen ja parantaminen (analytiikka, vain suostumuksella)</li>
                  <li>Tietoturvan varmistaminen ja tekninen ylläpito</li>
                </ul>
              </div>
            </section>

            {/* Käsittelyn oikeusperusteet */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Käsittelyn oikeusperusteet
              </h2>
              <div className="text-body-text space-y-3">
                <p>Henkilötietojen käsittely perustuu seuraaviin oikeusperusteisiin:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>
                    <strong>Sopimuksen valmistelu:</strong> Yhteydenottopyyntöjen käsittely perustuu 
                    oikeutettuun etuun ja sopimuksen valmisteluun, kun otat meihin yhteyttä.
                  </li>
                  <li>
                    <strong>Oikeutettu etu:</strong> Asiakaspalvelu ja liiketoiminnan kehittäminen 
                    (siltä osin kuin se ei vaadi suostumusta).
                  </li>
                  <li>
                    <strong>Suostumus:</strong> Evästeet ja analytiikka (kuten Google Analytics) 
                    perustuvat suostumukseesi. Voit peruuttaa suostumuksesi milloin tahansa.
                  </li>
                </ul>
              </div>
            </section>

            {/* Tietojen säilytysajat */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Tietojen säilytysajat
              </h2>
              <div className="text-body-text space-y-3">
                <p>Henkilötietoja säilytetään seuraavasti:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>
                    <strong>Yhteydenotot:</strong> Yhteydenottopyyntöjen tiedot säilytetään 12 kuukautta, 
                    ellei asiakassuhdetta synny. Jos asiakassuhde syntyy, tiedot säilytetään asiakassuhteen 
                    keston ajan ja sen jälkeen kirjanpitovelvoitteiden mukaisesti.
                  </li>
                  <li>
                    <strong>Asiakassuhteeseen liittyvät tiedot:</strong> Asiakassuhteeseen liittyvät 
                    henkilötiedot säilytetään tarpeen mukaan ja kirjanpitovelvoitteet huomioiden.
                  </li>
                  <li>
                    <strong>Tekniset tiedot:</strong> IP-osoitteet ja lokitiedot säilytetään yleensä 
                    enintään 12 kuukautta tietoturvan varmistamiseksi.
                  </li>
                </ul>
              </div>
            </section>

            {/* Vastaanottajat ja käsittelijät */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Vastaanottajat ja käsittelijät
              </h2>
              <div className="text-body-text space-y-3">
                <p>Henkilötietoja voivat käsitellä seuraavat osapuolet:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>
                    <strong>Hosting-palveluntarjoaja:</strong> Sivustomme hosting-palveluntarjoaja 
                    käsittelee teknisiä tietoja palvelun toiminnan varmistamiseksi.
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> Jos olet antanut suostumuksesi, Google LLC 
                    käsittelee analytiikkatietoja Google Analytics -palvelun kautta. Google toimii 
                    itsenäisenä rekisterinpitäjänä näiden tietojen osalta.
                  </li>
                  <li>
                    <strong>Sähköpostipalvelu:</strong> Yhteydenottolomakkeiden käsittelyssä 
                    käytämme sähköpostipalvelua, joka voi käsitellä henkilötietoja.
                  </li>
                </ul>
                <p className="mt-3 text-sm text-meta-text">
                  Kaikki palveluntarjoajat ovat velvollisia noudattamaan tietosuoja-asetusta ja 
                  käsittelemään tietoja vain määrättyihin tarkoituksiin.
                </p>
              </div>
            </section>

            {/* Siirrot EU/ETA-alueen ulkopuolelle */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Siirrot EU/ETA-alueen ulkopuolelle
              </h2>
              <div className="text-body-text space-y-2">
                <p>
                  Osa palveluntarjoajistamme voi käsitellä henkilötietoja EU/ETA-alueen ulkopuolella. 
                  Tämä koskee erityisesti Google Analytics -palvelua, joka voi siirtää tietoja 
                  Yhdysvaltoihin.
                </p>
                <p>
                  Tällaiset siirrot perustuvat soveltuviin siirtomekanismeihin, kuten 
                  standardisopimussolmuihin (Standard Contractual Clauses) ja muihin 
                  EU:n hyväksymiin suojatoimiin, jotka varmistavat henkilötietojen riittävän 
                  suojan myös EU/ETA-alueen ulkopuolella.
                </p>
              </div>
            </section>

            {/* Rekisteröidyn oikeudet */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Rekisteröidyn oikeudet
              </h2>
              <div className="text-body-text space-y-3">
                <p>Sinulla on seuraavat oikeudet henkilötietojesi käsittelyyn liittyen:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>
                    <strong>Oikeus saada pääsy tietoihin:</strong> Voit pyytää kopion henkilötiedoistasi.
                  </li>
                  <li>
                    <strong>Oikeus oikaista tiedot:</strong> Voit pyytää korjaamaan virheelliset tiedot.
                  </li>
                  <li>
                    <strong>Oikeus poistaa tiedot:</strong> Voit pyytää poistamaan henkilötietojasi 
                    tietyin edellytyksin.
                  </li>
                  <li>
                    <strong>Oikeus rajoittaa käsittelyä:</strong> Voit pyytää rajoittamaan henkilötietojesi 
                    käsittelyä tietyin edellytyksin.
                  </li>
                  <li>
                    <strong>Oikeus vastustaa käsittelyä:</strong> Voit vastustaa henkilötietojesi 
                    käsittelyä oikeutetun edun perusteella.
                  </li>
                  <li>
                    <strong>Oikeus siirtää tiedot:</strong> Voit pyytää siirtämään henkilötietosi 
                    toiselle rekisterinpitäjälle (soveltuvin osin).
                  </li>
                  <li>
                    <strong>Suostumuksen peruuttaminen:</strong> Jos käsittely perustuu suostumukseen 
                    (esim. analytiikka/evästeet), voit peruuttaa suostumuksesi milloin tahansa. 
                    Suostumuksen peruuttaminen ei vaikuta käsittelyyn, joka on tapahtunut ennen 
                    peruuttamista.
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Valitusoikeus:</strong> Jos katsot, että henkilötietojesi käsittelyssä on 
                  rikottu tietosuoja-asetusta, sinulla on oikeus tehdä valitus Tietosuojavaltuutetulle.
                </p>
                <p className="text-sm text-meta-text mt-2">
                  Tietosuojavaltuutettu: <br />
                  <a 
                    href="https://tietosuoja.fi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-deep-teal hover:underline"
                  >
                    www.tietosuoja.fi
                  </a>
                </p>
              </div>
            </section>

            {/* Evästeet */}
            <section className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4">
                Evästeet
              </h2>
              <div className="text-body-text space-y-2">
                <p>
                  Käytämme sivustollamme evästeitä palvelun toiminnan varmistamiseksi ja 
                  analytiikkatietojen keräämiseksi (suostumuksella).
                </p>
                <p>
                  Voit muuttaa evästeasetuksiasi milloin tahansa sivuston footerissa olevasta 
                  "Evästeasetukset" -linkistä. Lisätietoja evästeistä löydät evästeasetuksista.
                </p>
              </div>
            </section>

            {/* Yhteydenotto */}
            <section className="bg-deep-teal/10 backdrop-blur-sm p-8 border border-deep-teal/20 shadow-sm rounded-lg">
              <h2 className="font-display font-bold text-2xl text-dark-muted mb-4 flex items-center gap-3">
                <Mail className="text-deep-teal" size={24} />
                Tietosuojapyynnöt
              </h2>
              <div className="text-body-text space-y-3">
                <p>
                  Jos haluat käyttää oikeuksiasi tai sinulla on kysymyksiä henkilötietojesi 
                  käsittelystä, ota meihin yhteyttä:
                </p>
                <div className="bg-white/60 p-4 rounded-md border border-deep-teal/10">
                  <p className="font-semibold text-dark-muted mb-2">Hietakoski Oy</p>
                  <p className="text-sm">Sähköposti:{' '}
                    <a href="mailto:hietakoski@gmail.com" className="text-deep-teal hover:underline">
                      hietakoski@gmail.com
                    </a>
                  </p>
                  <p className="text-sm mt-1">Aihe: Tietosuojapyyntö</p>
                </div>
                <p className="text-sm text-meta-text mt-3">
                  Vastaamme pyyntöösi mahdollisimman pian, kuitenkin viimeistään kuukauden kuluessa.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
