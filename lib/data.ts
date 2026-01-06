export type ProjectStatus = 'Myynnissä' | 'Vuokrattavana' | 'Tulossa' | 'Suunnittelussa' | 'Valmis' | 'Myyty' | 'Vuokrattu';

export type Kohdetyyppi = 'Paritalo' | 'Rivitalo' | 'Asuinkohde';

export type Kaytto = 'Asuminen' | 'Loma-asunto';

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
}

export const projects: Project[] = [
  // MYNNISSÄ / VUOKRATTAVANA
  {
    id: 'levi-suvannoisenkuja',
    slug: 'levi-suvannoisenkuja-10',
    name: 'Levi – Suvannoisenkuja 10',
    location: 'Kittilä / Levi',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.',
    specs: '118 m² / asunto | Paritalo | 2 asuntoa',
    tag: 'Luksus vapaa-aika',
    imageUrl: '/AtrinAtmos_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Loma-asunto',
    asuntojenLkm: 2,
    pintaAlat: '118 m² / asunto',
    kuvat: [
      '/AtrinAtmos_001.jpg',
      '/AtrinAtmos_001.jpg',
    ],
  },
  {
    id: 'vantaan-siira',
    slug: 'asunto-oy-vantaan-siira-siiratie-5',
    name: 'Asunto Oy Vantaan Siira',
    location: 'Vantaa',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Valmis kolmen paritalon kokonaisuus rauhallisella Nikinmäen pientaloalueella Vantaalla. Modernit, yksitasoiset perheasunnot on toteutettu kotimaisista puuelementeistä ja ne ovat muuttovalmiita ilman rakennusriskiä.',
    specs: '3 paritaloa / 6 asuntoa | Paritalo',
    tag: 'Uusimaa',
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 6,
    rakennusvuosi: 2024,
    kuvat: [
      '/Siiratie5_001.jpg',
      '/Siiratie5_001.jpg', // Voi korvata oikeilla kuvilla
    ],
  },

  // TULOSSA / SUUNNITTELUSSA
  {
    id: 'liittokallionkatu-5',
    slug: 'liittokallionkatu-5-tampere',
    name: 'Liittokallionkatu 5',
    location: 'Tampere',
    status: 'Suunnittelussa',
    statusColor: 'slate-blue',
    description: 'Moderni asuinkohde arvostetussa Kaarilassa. Kävelymatka Tesoman juna-asemalle ja Westerin palveluihin. Rauhallinen pientaloalue hyvien yhteyksien äärellä.',
    specs: 'n. 5 asuntoa | Asuinkohde',
    tag: 'Kaupunkikoti',
    imageUrl: '/Liittokallio_001.jpeg',
    kohdetyyppi: 'Asuinkohde',
    kaytto: 'Asuminen',
    asuntojenLkm: 5,
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
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
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
    imageUrl: '/Liittokallio_001.jpeg',
    kohdetyyppi: 'Rivitalo',
    kaytto: 'Asuminen',
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
    imageUrl: '/hero.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
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
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
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
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
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
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
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
    imageUrl: '/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
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
