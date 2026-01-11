export type Locale = 'fi' | 'en'

export const defaultLocale: Locale = 'fi'
export const locales: Locale[] = ['fi', 'en']

// Simple i18n solution using context
export const translations = {
  fi: {
    // Navigation
    nav: {
      home: 'Etusivu',
      projects: 'Kohteet',
      construction: 'Rakentaminen',
      contact: 'Yhteystiedot',
      contactButton: 'Ota yhteyttä',
    },
    // Hero
    hero: {
      title: 'Valmis koti – ei rakennusprojektia',
      subtitle: 'Rakennamme kodit valmiiksi ennen myyntiä. Näet lopputuloksen ennen ostopäätöstä – ilman rakennusvaiheen epävarmuutta.',
      ctaForSale: 'Myytävät asunnot',
      ctaForRent: 'Vuokrattavat asunnot',
    },
    // Common
    common: {
      readMore: 'Lue lisää',
      seeMore: 'Katso lisää',
      contact: 'Ota yhteyttä',
      viewProject: 'Katso kohde',
      status: 'Status',
      location: 'Sijainti',
      type: 'Kohdetyyppi',
      apartments: 'Asuntoja',
      area: 'Pinta-ala',
      usage: 'Käyttötarkoitus',
      lot: 'Tontti',
      heating: 'Lämmitys',
      parking: 'Autopaikat',
      terraces: 'Terassit',
      constructionType: 'Rakennustyyppi',
      implementation: 'Toteutusmuoto',
      buildingMethod: 'Rakennustapa',
      apartmentType: 'Asuntotyyppi',
      special: 'Erityistä',
      completed: 'Valmistunut',
      forSale: 'Myynnissä',
      coming: 'Tulossa',
      inPlanning: 'Suunnittelussa',
      rented: 'Vuokrattu',
      sold: 'Myyty',
    },
    // Projects
    projects: {
      title: 'Ajankohtaiset kohteet',
      description: 'Hietakosken toteuttamat kohteet ovat myynnissä Etuovessa eri välityskumppaneiden kautta. Toteutus, laatu ja vastuut ovat aina Hietakosken.',
      viewAll: 'Katso kaikki kohteet',
      projectEssence: 'Kohteen ydin',
      seeAlso: 'Katso myös',
      apartments: 'Huoneistot',
      contactAboutApartment: 'Ota yhteyttä asunnosta',
      askAvailability: 'Kysy saatavuus',
      viewProject: 'Katso kohde',
      seeOtherProjects: 'Katso muut kohteet',
      contact: 'Ota yhteyttä',
    },
    // Footer
    footer: {
      description: 'Rakennamme muuttovalmiit kodit kasvukeskuksiin. Kotimaiset puuelementit, hallittu toteutus ja selkeät vastuut.',
      site: 'Sivusto',
      sales: 'Myynti',
      address: 'Postiosoite',
      billingInfo: 'Laskutustiedot',
      allRightsReserved: 'Kaikki oikeudet pidätetään',
    },
    // Customer Journey
    customerJourney: {
      title: 'Näin etenet kohti uutta kotia',
      step1: {
        title: 'Löydä kohde',
        description: 'Tutustu myynnissä oleviin kohteisiin etuovi.comissa tai hietakoski.fi:ssä.',
      },
      step2: {
        title: 'Tutustu tekijään',
        description: 'Varmista, kuka kohteen rakentaa ja vastaa toteutuksesta sekä laadusta koko hankkeen ajan.',
      },
      step3: {
        title: 'Sovi esittely',
        description: 'Elma ja yhteistyökumppanina toimivat välittäjät auttavat sopimaan esittelyn kohteeseen.',
      },
      step4: {
        title: 'Osta valmis koti',
        description: 'Ostat valmiin kodin ja muutat sisään ilman rakennusvaiheen epävarmuuksia.',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      construction: 'Construction',
      contact: 'Contact',
      contactButton: 'Get in touch',
    },
    // Hero
    hero: {
      title: 'Ready home – no construction project',
      subtitle: 'We build homes ready before sale. You see the final result before purchase decision – without construction phase uncertainty.',
      ctaForSale: 'Homes for sale',
      ctaForRent: 'Homes for rent',
    },
    // Common
    common: {
      readMore: 'Read more',
      seeMore: 'See more',
      contact: 'Get in touch',
      viewProject: 'View project',
      status: 'Status',
      location: 'Location',
      type: 'Project type',
      apartments: 'Apartments',
      area: 'Area',
      usage: 'Usage',
      lot: 'Lot',
      heating: 'Heating',
      parking: 'Parking spaces',
      terraces: 'Terraces',
      constructionType: 'Construction type',
      implementation: 'Implementation',
      buildingMethod: 'Building method',
      apartmentType: 'Apartment type',
      special: 'Special',
      completed: 'Completed',
      forSale: 'For sale',
      coming: 'Coming soon',
      inPlanning: 'In planning',
      rented: 'Rented',
      sold: 'Sold',
    },
    // Projects
    projects: {
      title: 'Current projects',
      description: 'Hietakoski\'s projects are for sale on Etuovi through various partners. Implementation, quality and responsibilities are always Hietakoski\'s.',
      viewAll: 'View all projects',
      projectEssence: 'Project essence',
      seeAlso: 'See also',
      apartments: 'Apartments',
      contactAboutApartment: 'Contact about apartment',
      askAvailability: 'Ask availability',
      viewProject: 'View project',
      seeOtherProjects: 'See other projects',
      contact: 'Get in touch',
    },
    // Footer
    footer: {
      description: 'We build move-in ready homes in growth centers. Domestic wood elements, controlled implementation and clear responsibilities.',
      site: 'Site',
      sales: 'Sales',
      address: 'Mailing address',
      billingInfo: 'Billing information',
      allRightsReserved: 'All rights reserved',
    },
    // Customer Journey
    customerJourney: {
      title: 'How you progress towards a new home',
      step1: {
        title: 'Find a project',
        description: 'Explore projects for sale on etuovi.com or hietakoski.fi.',
      },
      step2: {
        title: 'Get to know the builder',
        description: 'Make sure who builds the project and is responsible for implementation and quality throughout the project.',
      },
      step3: {
        title: 'Schedule a viewing',
        description: 'Elma and partner agents help arrange a viewing of the project.',
      },
      step4: {
        title: 'Buy a ready home',
        description: 'You buy a ready home and move in without construction phase uncertainties.',
      },
    },
  },
} as const

export type TranslationKey = keyof typeof translations.fi
