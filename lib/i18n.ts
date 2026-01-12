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
      allProjects: 'Kaikki kohteet',
      projectsDescription: 'Hietakoski toteuttaa paritaloja ja pienempiä asuinkohteita kasvukeskuksiin. Alta löydät myynnissä, tulossa ja valmiit kohteet.',
      projectsCount: 'kohdetta',
      noProjects: 'Ei kohteita valittujen suodattimien mukaan.',
      clearFilters: 'Tyhjennä suodattimet',
      loading: 'Ladataan...',
      status: 'Tila',
      projectType: 'Kohdetyyppi',
      usage: 'Käyttö',
      location: 'Paikkakunta',
      all: 'Kaikki',
      completedSoldRented: 'Valmis / Myyty / Vuokrattu',
      sales: 'Myynti',
      viewInKiinteistomaailma: 'Katso Kiinteistömaailmassa',
      apartment: 'Asunto',
      reserved: 'Varattu',
      free: 'Vapaa',
      sold: 'Myyty',
      howHietakoskiBuilds: 'Näin Hietakoski rakentaa',
      howHietakoskiBuildsText1: 'Hietakosken kohteet rakennetaan kotimaisista puuelementeistä Hietakulman menetelmällä. Rakenteet valmistetaan säältä suojassa hallituissa tehdasolosuhteissa, mikä takaa tasaisen laadun ja pitkäikäisyyden.',
      howHietakoskiBuildsText2: 'Oma työmaaorganisaatio varmistaa, että jokainen kohde toteutetaan huolellisesti ja loppuun asti. Asiakas ostaa valmiin lopputuloksen – ei rakennusprojektia.',
      interestedInProjects: 'Kiinnostuitko Hietakosken kohteista?',
      interestedInProjectsText: 'Ota yhteyttä ja kysy lisätietoja kohteesta tai muista Hietakosken toteuttamista kohteista.',
      seeAlsoProjects: 'Tutustu myös näihin kohteisiin',
      area: 'Pinta-ala',
      implementation: 'Toteutusmuoto',
      buildingMethod: 'Rakennustapa',
      apartmentType: 'Asuntotyyppi',
      buildingType: 'Rakennustyyppi',
      special: 'Erityistä',
      completedRented: 'Valmistunut (vuokrattu / referenssikohde)',
      completed: 'Valmistunut',
      readyAndForSale: 'Valmis ja myynnissä',
    },
    // Footer
    footer: {
      description: 'Rakennamme muuttovalmiit kodit kasvukeskuksiin. Kotimaiset puuelementit, hallittu toteutus ja selkeät vastuut.',
      site: 'Sivusto',
      sales: 'Myynti',
      address: 'Postiosoite',
      billingInfo: 'Laskutustiedot',
      allRightsReserved: 'Kaikki oikeudet pidätetään',
      cookieSettings: 'Evästeasetukset',
    },
    // Cookie Consent
    cookieConsent: {
      title: 'Evästeasetukset',
      description: 'Käytämme välttämättömiä evästeitä sivuston toimintaan sekä (valinnaisesti) analytiikkaevästeitä palvelun kehittämiseen. Voit muuttaa valintasi milloin tahansa.',
      acceptAll: 'Hyväksy kaikki',
      reject: 'Hylkää',
      settings: 'Asetukset',
      save: 'Tallenna',
      cancel: 'Peruuta',
      necessaryTitle: 'Välttämättömät evästeet',
      necessaryDescription: 'Nämä evästeet ovat välttämättömiä sivuston perustoiminnalle eivätkä voida poistaa käytöstä.',
      analyticsTitle: 'Analytiikkaevästeet',
      analyticsDescription: 'Nämä evästeet keräävät anonyymiä tietoa sivuston käytöstä, jotta voimme parantaa palveluamme.',
      settingsDescription: 'Valitse mitkä evästeet haluat sallia. Välttämättömät evästeet ovat aina käytössä, koska ne ovat välttämättömiä sivuston toiminnan kannalta.',
    },
    // Contact Section
    contactSection: {
      title: 'Kysyttävää kohteista tai esittelyistä?',
      subtitle: 'Elma auttaa kaikissa kohteisiin ja myyntiin liittyvissä kysymyksissä.',
      salesAndRental: 'Myynti ja vuokraus',
      callOrText: 'Soita tai tekstaa',
      sendEmail: 'Lähetä sähköpostia',
      contactButton: 'Ota yhteyttä',
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
    // Status translations
    status: {
      myynnissa: 'Myynnissä',
      vuokrattavana: 'Vuokrattavana',
      tulossa: 'Tulossa',
      suunnittelussa: 'Suunnittelussa',
      valmis: 'Valmis',
      myyty: 'Myyty',
      vuokrattu: 'Vuokrattu',
      varattu: 'Varattu',
      vapaa: 'Vapaa',
    },
    // Project type translations
    projectType: {
      paritalo: 'Paritalo',
      'paritalo - kiinteistö': 'Paritalo - kiinteistö',
      rivitalo: 'Rivitalo',
      asuinkohde: 'Asuinkohde',
    },
    // Usage translations
    usage: {
      asuminen: 'Asuminen',
      'loma-asunto': 'Loma-asunto',
    },
    // Reference Highlight
    referenceHighlight: {
      location: 'Kittilä / Levi',
      projectName: 'Asunto Oy Levin Atrin Atmos',
      description: 'Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.',
    },
    // Trust Cards
    trustCards: {
      title: 'Miksi valita Hietakoski?',
      subtitle: 'Rakennamme kodit valmiiksi asti – turvallisesti ja läpinäkyvästi.',
      card1: {
        title: 'Ensin valmiiksi, sitten myyntiin',
        text: 'Keräämme kiinnostuneita jo rakentamisen aikana, mutta emme myy keskeneräisiä koteja. Kohteet rakennetaan valmiiksi ja myydään vasta, kun lopputulos on nähtävissä ja valmis arvioitavaksi.',
      },
      card2: {
        title: 'Kotimaiset puuelementit',
        text: 'Rakennamme kotimaisista puuelementeistä hallitulla ja valvotulla tuotantoketjulla. Käytämme Hietakulma Oy:n puuelementtejä ja kattoristikoita. Elementit valmistetaan säältä suojassa ja laadunvarmistus kulkee mukana koko toteutuksen ajan.',
      },
      card3: {
        title: 'Selkeät vastuut ja kokenut toteutus',
        text: 'Myynnistä ja asiakasasioista vastaa Elma, työmaiden työnjohto toteutuksesta ja laadusta. Rakentamisesta vastaavat kokeneet ammattilaiset, joilla on vuosikymmenten kokemus vaativista pientalo- ja asuntokohteista.',
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
    // Status translations
    status: {
      myynnissa: 'For sale',
      vuokrattavana: 'For rent',
      tulossa: 'Coming soon',
      suunnittelussa: 'In planning',
      valmis: 'Completed',
      myyty: 'Sold',
      vuokrattu: 'Rented',
      varattu: 'Reserved',
      vapaa: 'Free',
    },
    // Project type translations
    projectType: {
      paritalo: 'Semi-detached house',
      'paritalo - kiinteistö': 'Semi-detached house - property',
      rivitalo: 'Terraced house',
      asuinkohde: 'Residential project',
    },
    // Usage translations
    usage: {
      asuminen: 'Residential',
      'loma-asunto': 'Holiday home',
    },
    // Reference Highlight
    referenceHighlight: {
      location: 'Kittilä / Levi',
      projectName: 'Asunto Oy Levin Atrin Atmos',
      description: 'Two 118 m² holiday homes in the best locations in Levi. A structure built from Hietakulma\'s large elements ensures that your holiday home is healthy, tight and energy efficient.',
    },
    // Trust Cards
    trustCards: {
      title: 'Why choose Hietakoski?',
      subtitle: 'We build homes ready – safely and transparently.',
      card1: {
        title: 'First ready, then for sale',
        text: 'We gather interested parties during construction, but we do not sell unfinished homes. Projects are built to completion and sold only when the final result is visible and ready for evaluation.',
      },
      card2: {
        title: 'Domestic wood elements',
        text: 'We build from domestic wood elements with a controlled and monitored production chain. We use Hietakulma Oy\'s wood elements and roof trusses. Elements are manufactured protected from weather, and quality assurance runs throughout the entire implementation.',
      },
      card3: {
        title: 'Clear responsibilities and experienced implementation',
        text: 'Sales and customer matters are handled by Elma, site management handles implementation and quality. Construction is handled by experienced professionals with decades of experience in demanding single-family and residential projects.',
      },
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
      allProjects: 'All projects',
      projectsDescription: 'Hietakoski builds semi-detached houses and smaller residential projects in growth centers. Below you can find projects for sale, coming soon and completed projects.',
      projectsCount: 'projects',
      noProjects: 'No projects match the selected filters.',
      clearFilters: 'Clear filters',
      loading: 'Loading...',
      status: 'Status',
      projectType: 'Project type',
      usage: 'Usage',
      location: 'Location',
      all: 'All',
      completedSoldRented: 'Completed / Sold / Rented',
      sales: 'Sales',
      viewInKiinteistomaailma: 'View in Kiinteistomaailma',
      apartment: 'Apartment',
      reserved: 'Reserved',
      free: 'Free',
      sold: 'Sold',
      howHietakoskiBuilds: 'How Hietakoski builds',
      howHietakoskiBuildsText1: 'Hietakoski\'s projects are built from domestic wood elements using the Hietakulma method. Structures are manufactured in protected factory conditions, ensuring consistent quality and longevity.',
      howHietakoskiBuildsText2: 'Our own construction organization ensures that each project is carefully completed. The customer buys a ready result – not a construction project.',
      interestedInProjects: 'Interested in Hietakoski\'s projects?',
      interestedInProjectsText: 'Get in touch and ask for more information about the project or other projects built by Hietakoski.',
      seeAlsoProjects: 'See also these projects',
      area: 'Area',
      implementation: 'Implementation',
      buildingMethod: 'Building method',
      apartmentType: 'Apartment type',
      buildingType: 'Building type',
      special: 'Special',
      completedRented: 'Completed (rented / reference project)',
      completed: 'Completed',
      readyAndForSale: 'Ready and for sale',
    },
    // Cookie Consent
    cookieConsent: {
      title: 'Cookie settings',
      description: 'We use necessary cookies for the site\'s functionality and (optionally) analytics cookies to improve our service. You can change your choices at any time.',
      acceptAll: 'Accept all',
      reject: 'Reject',
      settings: 'Settings',
      save: 'Save',
      cancel: 'Cancel',
      necessaryTitle: 'Necessary cookies',
      necessaryDescription: 'These cookies are necessary for the site\'s basic functionality and cannot be disabled.',
      analyticsTitle: 'Analytics cookies',
      analyticsDescription: 'These cookies collect anonymous information about site usage so we can improve our service.',
      settingsDescription: 'Choose which cookies you want to allow. Necessary cookies are always enabled as they are essential for the site\'s functionality.',
    },
    // Contact Section
    contactSection: {
      title: 'Questions about projects or viewings?',
      subtitle: 'Elma helps with all questions related to projects and sales.',
      salesAndRental: 'Sales and rental',
      callOrText: 'Call or text',
      sendEmail: 'Send email',
      contactButton: 'Get in touch',
    },
    // Footer
    footer: {
      description: 'We build move-in ready homes in growth centers. Domestic wood elements, controlled implementation and clear responsibilities.',
      site: 'Site',
      sales: 'Sales',
      address: 'Mailing address',
      billingInfo: 'Billing information',
      allRightsReserved: 'All rights reserved',
      cookieSettings: 'Cookie settings',
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

// TypeScript ensures both locales have the same structure

export type TranslationKey = keyof typeof translations.fi
