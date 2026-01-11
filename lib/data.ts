export type ProjectStatus = 'Myynnissä' | 'Vuokrattavana' | 'Tulossa' | 'Suunnittelussa' | 'Valmis' | 'Myyty' | 'Vuokrattu';

export type Kohdetyyppi = 'Paritalo' | 'Rivitalo' | 'Asuinkohde';

export type Kaytto = 'Asuminen' | 'Loma-asunto';

export type ApartmentStatus = 'Myynnissä' | 'Varattu' | 'Myyty' | 'Vapaa';

export interface Apartment {
  id: string;
  name: string;
  status: ApartmentStatus;
  rooms?: string;
  size?: string;
  price?: string;
  etuoviUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  statusColor: 'copper' | 'slate-blue';
  description: string;
  specs: string;
  tag: string;
  imageUrl: string;
  kohdetyyppi: Kohdetyyppi;
  kaytto?: Kaytto;
  etuoviUrl?: string;
  kuvat?: string[];
  pohjat?: string[];
  asuntojenLkm?: number;
  pintaAlat?: string;
  rakennusvuosi?: number;
  valmistumisvuosi?: number;
  apartments?: Apartment[];
  presentation?: string;
}

export const projects: Project[] = [
  // MYNNISSÄ / VUOKRATTAVANA
  {
    id: 'levi-suvannoisenkuja',
    slug: 'levi-suvannoisenkuja-10',
    name: 'Asunto Oy Levin Atrin Atmos',
    location: 'Kittilä / Levi',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.',
    specs: '118 m² / asunto | Paritalo | 2 asuntoa',
    tag: 'Luksus vapaa-aika',
    imageUrl: '/atrin_atmos/AtrinAtmos_000.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Loma-asunto',
    asuntojenLkm: 2,
    pintaAlat: '118 m² / asunto',
    apartments: [
      {
        id: 'A',
        name: 'Huoneisto A',
        status: 'Myynnissä',
        size: '118 m²',
        rooms: '4h + k + pesutilat + sauna + wc/khh',
        price: '539 000 €',
      },
      {
        id: 'B',
        name: 'Huoneisto B',
        status: 'Varattu',
        size: '118 m²',
      },
    ],
    kuvat: [
      '/atrin_atmos/AtrinAtmos_000.jpg',
      '/atrin_atmos/AtrinAtmos_001.jpg',
      '/atrin_atmos/AtrinAtmos_002.jpg',
      '/atrin_atmos/AtrinAtmos_003.jpg',
      '/atrin_atmos/AtrinAtmos_004.jpg',
      '/atrin_atmos/AtrinAtmos_005.jpg',
      '/atrin_atmos/AtrinAtmos_006.jpg',
      '/atrin_atmos/AtrinAtmos_007.jpg',
      '/atrin_atmos/AtrinAtmos_008.jpg',
      '/atrin_atmos/AtrinAtmos_009.jpg',
      '/atrin_atmos/AtrinAtmos_010.jpg',
      '/atrin_atmos/AtrinAtmos_011.jpg',
      '/atrin_atmos/AtrinAtmos_012.jpg',
      '/atrin_atmos/AtrinAtmos_013.jpg',
      '/atrin_atmos/AtrinAtmos_014.jpg',
      '/atrin_atmos/AtrinAtmos_015.jpg',
      '/atrin_atmos/AtrinAtmos_016.jpg',
      '/atrin_atmos/AtrinAtmos_017.jpg',
      '/atrin_atmos/AtrinAtmos_018.jpg',
      '/atrin_atmos/AtrinAtmos_019.jpg',
    ],
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Levin palveluiden läheisyydessä, omalla tontilla, valmistuva korkeatasoinen paritalohuoneisto, jossa yhdistyvät Lapin loma-asumisen tunnelma, moderni käyttömukavuus ja hallittu rakennuslaatu. Levin Atrin Atmos on kahden huoneiston kokonaisuus, joka on toteutettu huolellisesti suunnitellulla ja testatulla rakennusratkaisulla – painottaen laatua, energiatehokkuutta ja pitkäikäisyyttä.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">Huoneisto A käsittää 4h + k + pesutilat + sauna + wc/khh, ja kokonaisuuden kruunaa katettu terassi. Pohjaratkaisu on selkeä ja toimiva: avara oleskelutila, reilut makuuhuoneet ja sujuva arjen logiikka. Tunnelmaa luo takkavaraus / varaava takka, ja oma sauna viimeistelee Lapin vapaa-ajan asumisen olennaiset elementit.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">Kohde on toteutettu laadukkaalla Hietakulman puuelementtimenetelmällä, jossa rakenteet valmistetaan hallituissa tehdasolosuhteissa. Elementtirakentaminen näkyy valmiissa kohteessa tasaisena laatuna, hyvänä ääneneristyksenä ja pitkäikäisinä rakenteina.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">Levin Atrin Atmos on energiatehokas puuelementtikohde, jossa sekä seinärakenteet että yläpohja on toteutettu nykyaikaiset vaatimukset täyttävällä eristystasolla. Huoneistokohtainen ilmanvaihto ja moderni lämmitysratkaisu tukevat tasapainoista sisäilmaa ja tehokasta energiankäyttöä.</p>

<p class="mb-4 text-base md:text-lg leading-relaxed font-semibold text-dark-muted">Varustelutaso</p>
<ul class="mb-6 ml-6 list-disc space-y-2 text-base md:text-lg leading-relaxed">
  <li>kotimaiset ikkunat ja ovet, integroidut sälekaihtimet</li>
  <li>laadukkaat kodinkoneet ja pintamateriaalit</li>
  <li>huoneistokohtainen talotekniikka ja nykyaikainen energiaratkaisu</li>
</ul>

<p class="text-base md:text-lg leading-relaxed">Taloyhtiörakenne on poikkeuksellisen selkeä: vain kaksi huoneistoa, oma tontti ja ei yhtiölainaa. Tämä tekee omistamisesta vaivatonta ja kustannuksista ennakoitavia.</p>`,
  },
  {
    id: 'vantaan-siira',
    slug: 'asunto-oy-vantaan-siira-siiratie-5',
    name: 'As Oy Vantaan Siira',
    location: 'Vantaa',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Valmis kolmen paritalon kokonaisuus rauhallisella Nikinmäen pientaloalueella Vantaalla. Modernit, yksitasoiset perheasunnot on toteutettu kotimaisista puuelementeistä ja ne ovat muuttovalmiita ilman rakennusriskiä.',
    specs: '3 paritaloa / 6 asuntoa | Paritalo',
    tag: 'Uusimaa',
    imageUrl: '/as_oy_vantaan_siira/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 6,
    rakennusvuosi: 2024,
    kuvat: [
      '/as_oy_vantaan_siira/Siiratie5_001.jpg',
      '/as_oy_vantaan_siira/Siira1.jpg',
      '/as_oy_vantaan_siira/Siira2.jpg',
      '/as_oy_vantaan_siira/Siira3.jpg',
      '/as_oy_vantaan_siira/Siira4.jpg',
      '/as_oy_vantaan_siira/Siira5.jpg',
      '/as_oy_vantaan_siira/Siira6.jpg',
      '/as_oy_vantaan_siira/Siira7.jpg',
      '/as_oy_vantaan_siira/Siira12.jpg',
      '/as_oy_vantaan_siira/Siira13.jpg',
      '/as_oy_vantaan_siira/Siira15.jpg',
      '/as_oy_vantaan_siira/Siira22.jpg',
    ],
    apartments: [
      {
        id: 'A1',
        name: 'Siiratie 5 A 1',
        status: 'Myynnissä',
        rooms: '4h, kt, kh, s, lämmin varasto',
        size: '78,5 m²',
        price: '270 000 €',
        etuoviUrl: 'https://www.etuovi.com/kohde/34567890',
      },
      {
        id: 'A2',
        name: 'Siiratie 5 A 2',
        status: 'Myyty',
      },
      {
        id: 'A3',
        name: 'Siiratie 5 A 3',
        status: 'Vapaa',
      },
      {
        id: 'A4',
        name: 'Siiratie 5 A 4',
        status: 'Vapaa',
      },
      {
        id: 'A5',
        name: 'Siiratie 5 A 5',
        status: 'Vapaa',
      },
      {
        id: 'A6',
        name: 'Siiratie 5 A 6',
        status: 'Varattu',
      },
    ],
  },

  // TULOSSA / SUUNNITTELUSSA
  {
    id: 'liittokallionkatu-5',
    slug: 'liittokallionkatu-5-tampere',
    name: 'Liittokallionkatu 5',
    location: 'Tampere',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Moderni asuinkohde arvostetussa Kaarilassa. Kävelymatka Tesoman juna-asemalle ja Westerin palveluihin. Rauhallinen pientaloalue hyvien yhteyksien äärellä.',
    specs: 'n. 5 asuntoa | Asuinkohde',
    tag: 'Kaupunkikoti',
    imageUrl: '/liittokallionkatu/liittokallionkatu_001.jpg',
    kohdetyyppi: 'Asuinkohde',
    kaytto: 'Asuminen',
    asuntojenLkm: 5,
    kuvat: [
      '/liittokallionkatu/liittokallionkatu_001.jpg',
      '/liittokallionkatu/liittokallionkatu_002.jpg',
      '/liittokallionkatu/liittokallionkatu_003.jpg',
      '/liittokallionkatu/liittokallionkatu_004.jpg',
    ],
  },
  {
    id: 'sankimaankuja',
    slug: 'sankimaankuja-tuusula',
    name: 'Sänkimaankuja',
    location: 'Tuusula',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Uusi paritalokohde Tuusulassa. Rakentamislupavaiheessa.',
    specs: 'Paritalo',
    tag: 'Uusimaa',
    imageUrl: '/sankimaankuja/sankimaankuja_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    kuvat: [
      '/sankimaankuja/sankimaankuja_001.jpg',
      '/sankimaankuja/sankimaankuja_003.jpg',
      '/sankimaankuja/sankimaankuja_004.jpg',
    ],
  },
  {
    id: 'ojala',
    slug: 'ojala-tampere',
    name: 'Ojala',
    location: 'Tampere',
    status: 'Suunnittelussa',
    statusColor: 'slate-blue',
    description: 'Aluerakennushanke puurakenteisilla rivitaloilla. Hietakulma Oy:n elementtiratkaisut keskiössä.',
    specs: 'Rivitalo / asuinkokonaisuus',
    tag: 'Kaupunkikoti',
    imageUrl: '/ojala/ojala_001.jpg',
    kohdetyyppi: 'Rivitalo',
    kaytto: 'Asuminen',
    kuvat: [
      '/ojala/ojala_001.jpg',
      '/ojala/ojala_002.jpg',
      '/ojala/ojala_003.jpg',
      '/ojala/ojala_004.jpg',
    ],
  },

  // VALMISTUNEET / REFERENSSIT
  {
    id: 'puustellin-helmi',
    slug: 'asunto-oy-puustellin-helmi',
    name: 'Asunto Oy Puustellin Helmi',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Esimerkki Hietakosken viimeistellystä toteutuksesta ja materiaaliosaamisesta. Referenssi näyttää, miten suunnittelu ja toteutus viimeistellään kokonaisuudeksi.',
    specs: '1 paritalo / 2 asuntoa | Asuinparitalo',
    tag: 'Referenssi',
    imageUrl: '/puustellin_helmi/puustellin_helmi_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    kuvat: [
      '/puustellin_helmi/puustellin_helmi_001.jpg',
      '/puustellin_helmi/puustellin_helmi_002.jpg',
      '/puustellin_helmi/puustellin_helmi_003.jpg',
      '/puustellin_helmi/puustellin_helmi_004.jpg',
      '/puustellin_helmi/puustellin_helmi_005.jpg',
      '/puustellin_helmi/puustellin_helmi_006.jpg',
      '/puustellin_helmi/puustellin_helmi_007.jpg',
      '/puustellin_helmi/puustellin_helmi_008.jpg',
      '/puustellin_helmi/puustellin_helmi_009.jpg',
      '/puustellin_helmi/puustellin_helmi_010.jpg',
      '/puustellin_helmi/puustellin_helmi_011.jpg',
    ],
  },
  {
    id: 'maitiaisentie-9',
    slug: 'maitiaisentie-9-tuusula',
    name: 'Maitiaisentie 9',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokokonaisuus Tuusulassa.',
    specs: '2 paritaloa / 4 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/maitiaisentie/maitiaisentie_000.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
    kuvat: [
      '/maitiaisentie/maitiaisentie_000.jpg',
      '/maitiaisentie/maitiaisentie_001.jpg',
      '/maitiaisentie/maitiaisentie_002.jpg',
      '/maitiaisentie/maitiaisentie_003.jpg',
      '/maitiaisentie/maitiaisentie_004.jpg',
      '/maitiaisentie/maitiaisentie_005.jpg',
      '/maitiaisentie/maitiaisentie_006.jpg',
      '/maitiaisentie/maitiaisentie_007.jpg',
      '/maitiaisentie/maitiaisentie_008.jpg',
    ],
  },
  {
    id: 'hietarinteentie-6',
    slug: 'hietarinteentie-6-tuusula',
    name: 'Hietarinteentie 6',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalo Tuusulassa.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/hietarinteentie/Ulkokuva.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    kuvat: [
      '/hietarinteentie/Ulkokuva.jpg',
      '/hietarinteentie/Olohuone_2.jpg',
      '/hietarinteentie/Olohuone_3.jpg',
      '/hietarinteentie/Keittiö_2.jpg',
      '/hietarinteentie/Makuuhuone_1.jpg',
      '/hietarinteentie/Eteinen.jpg',
      '/hietarinteentie/Pesuhuone_1.jpg',
      '/hietarinteentie/Pesuhuone_2.jpg',
      '/hietarinteentie/Sauna_2.jpg',
      '/hietarinteentie/WC1.jpg',
    ],
  },
  {
    id: 'kiekontie-5',
    slug: 'kiekontie-5-tuusula',
    name: 'Kiekontie 5',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalo Tuusulassa.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/kiekontie/Kiekontie_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    kuvat: [
      '/kiekontie/Kiekontie_001.jpg',
      '/kiekontie/Olohuone_1.jpg',
      '/kiekontie/Keittiö_1.jpg',
      '/kiekontie/Makuuhuone_2.jpg',
      '/kiekontie/Sauna_1.jpg',
      '/kiekontie/WC2.jpg',
    ],
  },
  {
    id: 'laurintie',
    slug: 'laurintie-vantaa',
    name: 'Laurintie',
    location: 'Vantaa',
    status: 'Vuokrattu',
    statusColor: 'slate-blue',
    description: 'Valmistunut paritalokokonaisuus Vantaalla. Tällä hetkellä vuokrattu.',
    specs: '2 paritaloa / 4 asuntoa | Paritalo',
    tag: 'Vuokrattu',
    imageUrl: '/laurintie/laurintie_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
    kuvat: [
      '/laurintie/laurintie_001.jpg',
      '/laurintie/laurintie_002.jpg',
      '/laurintie/laurintie_003.jpg',
      '/laurintie/laurintie_004.jpg',
      '/laurintie/laurintie_005.jpg',
      '/laurintie/laurintie_006.jpg',
      '/laurintie/laurintie_007.jpg',
      '/laurintie/Kylpyhuone (1).jpg',
    ],
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Helper function to get all unique locations
export function getUniqueLocations(): string[] {
  const locations = projects.map(p => p.location);
  return Array.from(new Set(locations));
}

// Helper function to get all unique kohdetyypit
export function getUniqueKohdetyypit(): Kohdetyyppi[] {
  const types = projects.map(p => p.kohdetyyppi);
  return Array.from(new Set(types));
}

// Helper function to get all unique kaytto
export function getUniqueKaytto(): Kaytto[] {
  const kaytto = projects.filter(p => p.kaytto).map(p => p.kaytto!);
  return Array.from(new Set(kaytto));
}
