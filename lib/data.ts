export type ProjectStatus = 'Myynnissä' | 'Vuokrattavana' | 'Tulossa' | 'Suunnittelussa' | 'Valmis' | 'Myyty' | 'Vuokrattu';

export type Kohdetyyppi = 'Paritalo' | 'Paritalo - kiinteistö' | 'Rivitalo' | 'Asuinkohde';

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
  nameEn?: string;
  location: string;
  status: ProjectStatus;
  statusColor: 'copper' | 'slate-blue';
  description: string;
  descriptionEn?: string;
  specs: string;
  tag: string;
  imageUrl: string;
  kohdetyyppi: Kohdetyyppi;
  kaytto?: Kaytto;
  etuoviUrl?: string;
  kiinteistomaailmaUrl?: string;
  myyntihenkilo?: {
    nimi: string;
    email: string;
    puhelin: string;
    yritys?: string;
  };
  kuvat?: string[];
  pohjat?: string[];
  asuntojenLkm?: number;
  pintaAlat?: string;
  rakennusvuosi?: number;
  valmistumisvuosi?: number;
  apartments?: Apartment[];
  presentation?: string;
  presentationEn?: string;
  tontinOmistus?: string;
  lämmitys?: string;
  autopaikat?: string;
  terassit?: string;
  toteutusmuoto?: string;
  rakennustapa?: string;
  rakennustyyppi?: string;
  asuntotyyppi?: string;
  erityista?: string;
}

export const projects: Project[] = [
  // MYNNISSÄ / VUOKRATTAVANA
  {
    id: 'levi-suvannoisenkuja',
    slug: 'levi-suvannoisenkuja-10',
    name: 'Asunto Oy Levin Atrin Atmos',
    nameEn: 'Asunto Oy Levin Atrin Atmos',
    location: 'Kittilä / Levi',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.',
    descriptionEn: 'Two 118 m² holiday homes in the best locations in Levi. A structure built from Hietakulma\'s large elements ensures that your holiday home is healthy, tight and energy efficient.',
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
        rooms: '4h + k + pesutilat + sauna + wc/khh',
      },
    ],
    kuvat: [
      '/atrin_atmos/AtrinAtmos_000.jpg',
      '/atrin_atmos/AtrinAtmos_001.jpg',
      '/atrin_atmos/AtrinAtmos_002.jpg',
      '/atrin_atmos/AtrinAtmos_004.jpg',
      '/atrin_atmos/AtrinAtmos_006.jpg',
      '/atrin_atmos/AtrinAtmos_008.jpg',
      '/atrin_atmos/AtrinAtmos_009.jpg',
      '/atrin_atmos/AtrinAtmos_010.jpg',
      '/atrin_atmos/AtrinAtmos_011.jpg',
      '/atrin_atmos/AtrinAtmos_012.jpg',
      '/atrin_atmos/AtrinAtmos_014.jpg',
      '/atrin_atmos/AtrinAtmos_015.jpg',
      '/atrin_atmos/AtrinAtmos_016.jpg',
      '/atrin_atmos/AtrinAtmos_018.jpg',
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
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">A high-quality semi-detached apartment under construction near Levi's services, on its own lot, combining the atmosphere of Lapland holiday living, modern comfort and controlled construction quality. Levin Atrin Atmos is a two-apartment complex built with a carefully designed and tested construction solution – emphasizing quality, energy efficiency and longevity.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">Apartment A includes 4 rooms + kitchen + utility room + sauna + bathroom, and the complex is crowned by a covered terrace. The floor plan is clear and functional: spacious living area, generous bedrooms and smooth everyday logic. Atmosphere is created by fireplace reservation / reserve fireplace, and own sauna completes the essential elements of Lapland leisure living.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">The project is built using Hietakulma's quality wood element method, where structures are manufactured in controlled factory conditions. Element construction is visible in the completed project as consistent quality, good sound insulation and long-lasting structures.</p>

<p class="mb-6 text-base md:text-lg leading-relaxed">Levin Atrin Atmos is an energy-efficient wood element project, where both wall structures and upper floor are built to meet modern insulation requirements. Apartment-specific ventilation and modern heating solution support balanced indoor air and efficient energy use.</p>

<p class="mb-4 text-base md:text-lg leading-relaxed font-semibold text-dark-muted">Equipment Level</p>
<ul class="mb-6 ml-6 list-disc space-y-2 text-base md:text-lg leading-relaxed">
  <li>domestic windows and doors, integrated blinds</li>
  <li>quality appliances and surface materials</li>
  <li>apartment-specific building services and modern energy solution</li>
</ul>

<p class="text-base md:text-lg leading-relaxed">The housing company structure is exceptionally clear: only two apartments, own lot and no housing company loan. This makes ownership hassle-free and costs predictable.</p>`,
  },
  {
    id: 'vantaan-siira',
    slug: 'asunto-oy-vantaan-siira-siiratie-5',
    name: 'As Oy Vantaan Siira',
    nameEn: 'As Oy Vantaan Siira',
    location: 'Vantaa',
    status: 'Myynnissä',
    statusColor: 'copper',
    description: 'Valmis kolmen paritalon kokonaisuus rauhallisella Nikinmäen pientaloalueella Vantaalla. Modernit, yksitasoiset perheasunnot on toteutettu kotimaisista puuelementeistä ja ne ovat muuttovalmiita ilman rakennusriskiä.',
    descriptionEn: 'A completed three semi-detached house complex in the peaceful Nikinmäki single-family area in Vantaa. Modern, single-story family apartments built from domestic wood elements, move-in ready without construction risk.',
    specs: '3 paritaloa / 6 asuntoa | Paritalo',
    tag: 'Uusimaa',
    imageUrl: '/as_oy_vantaan_siira/Siiratie5_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 6,
    rakennusvuosi: 2024,
    tontinOmistus: 'Vuokratontti - lunastusmahdollisuudella',
    lämmitys: 'PILP - viilennyksellä',
    autopaikat: '2 autopaikkaa / asunto',
    kiinteistomaailmaUrl: 'https://www.kiinteistomaailma.fi/vantaa_myytavat_rivitalot-paritalot/1372606',
    myyntihenkilo: {
      nimi: 'Ira Saxholm',
      email: 'ira.saxholm@kiinteistomaailma.fi',
      puhelin: '040 647 7267',
      yritys: 'Kiinteistömaailma',
    },
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
        etuoviUrl: 'https://www.kiinteistomaailma.fi/vantaa_myytavat_rivitalot-paritalot/1372606',
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
    name: 'Asunto Oy Tampereen Liittokallionkatu 5',
    nameEn: 'Asunto Oy Tampereen Liittokallionkatu 5',
    location: 'Tampere',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Moderni asuinkohde arvostetussa Kaarilassa. Kävelymatka Tesoman juna-asemalle ja Westerin palveluihin. Rauhallinen pientaloalue hyvien yhteyksien äärellä.',
    descriptionEn: 'Modern residential project in the esteemed Kaarila. Walking distance to Tesoma train station and Westeri services. A peaceful single-family area with good connections.',
    specs: 'n. 5 asuntoa | Asuinkohde',
    tag: 'Kaupunkikoti',
    imageUrl: '/liittokallionkatu/liittokallionkatu_001.jpg',
    kohdetyyppi: 'Asuinkohde',
    kaytto: 'Asuminen',
    asuntojenLkm: 5,
    lämmitys: 'Maalämpö',
    autopaikat: '2 autopaikkaa / asunto',
    terassit: 'Lasitetut terassit',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Liittokallionkatu on ennakkomarkkinointiin tuleva, viidestä perheasunnosta koostuva asuinkohde rauhallisella ja arvostetulla Kaarilan pientaloalueella. Alueella arki on sujuvaa: lähikauppa, päiväkoti, koulu ja bussiyhteydet sijaitsevat kävelyetäisyydellä, ja palvelut ovat helposti saavutettavissa.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asunnot on suunniteltu toimivaan perheasumiseen ja viimeistelty ajattomalla ilmeellä. Rapatut julkisivut ja panelointi luovat rauhallisen kokonaisuuden, lasitetut terassit laajentavat oleskelutiloja ja jokaiselle asunnolle kuuluu kaksi autopaikkaa. Luonto ja ulkoilumahdollisuudet alkavat lähes kotiovelta, mikä tekee alueesta erityisen pidetyn.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Liittokallionkatu is a residential project coming to pre-marketing, consisting of five family apartments in the peaceful and esteemed Kaarila single-family area. Daily life is smooth in the area: nearby store, daycare, school and bus connections are within walking distance, and services are easily accessible.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">The apartments are designed for functional family living and finished with a timeless look. Plastered facades and paneling create a peaceful whole, glazed terraces expand living spaces and each apartment includes two parking spaces. Nature and outdoor opportunities start almost from the front door, making the area particularly popular.</p>`,
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
    name: 'PT Sänkimaankuja',
    nameEn: 'PT Sänkimaankuja',
    location: 'Tuusula',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Ennakkomarkkinointiin tuleva paritalokohde rauhallisella pientaloalueella Tuusulassa. Kohde koostuu kahdesta kiinteistömuotoisesta asunnosta ja tarjoaa huolettoman vaihtoehdon omakotitalomaiselle asumiselle.',
    descriptionEn: 'A semi-detached house project coming to pre-marketing in a peaceful single-family area in Tuusula. The project consists of two property-type apartments and offers a carefree alternative to single-family house living.',
    specs: 'Paritalo',
    tag: 'Uusimaa',
    imageUrl: '/sankimaankuja/sankimaankuja_001.jpg',
    kohdetyyppi: 'Paritalo - kiinteistö',
    kaytto: 'Asuminen',
    lämmitys: 'PILP - viilennyksellä',
    autopaikat: '2 autopaikkaa / asunto',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Sänkimaankuja on ennakkomarkkinointiin tuleva, kahden asunnon paritalokohde Tuusulassa. Kiinteistömuotoinen toteutus ja hallinnanjakosopimus tarjoavat selkeän omistusrakenteen ja omakotitalomaisen asumisen edut. Suunnittelu on käynnissä.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asuntojen lämmitys toteutetaan poistoilmalämpöpumpulla viilennyksellä, mikä mahdollistaa energiatehokkaan ja miellyttävän asumisen ympäri vuoden. Jokaiselle asunnolle kuuluu kaksi autopaikkaa. Kohde on suunniteltu toimivaan arkeen ja viimeistellään muuttovalmiiksi.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Kohteen arvioitu valmistuminen on kesällä 2026.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Sänkimaankuja is a semi-detached house project with two apartments coming to pre-marketing in Tuusula. Property-type implementation and management division agreement provide a clear ownership structure and the benefits of single-family house living. Planning is underway.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Apartment heating is implemented with exhaust air heat pump with cooling, which enables energy-efficient and pleasant living year-round. Each apartment includes two parking spaces. The project is designed for functional everyday life and will be finished move-in ready.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">The project's estimated completion is in summer 2026.</p>`,
    kuvat: [
      '/sankimaankuja/sankimaankuja_001.jpg',
      '/sankimaankuja/sankimaankuja_003.jpg',
      '/sankimaankuja/sankimaankuja_004.jpg',
    ],
  },
  {
    id: 'ojala',
    slug: 'ojala-tampere',
    name: 'Asunto Oy Tampereen Ojalanpuisto',
    nameEn: 'Asunto Oy Tampereen Ojalanpuisto',
    location: 'Tampere',
    status: 'Suunnittelussa',
    statusColor: 'slate-blue',
    description: 'Laajempi aluerakennushanke Ojalassa, jossa toteutetaan puurakenteisia rivitaloja viihtyisään ja kehittyvään asuinympäristöön. Kohde on suunnitteluvaiheessa.',
    descriptionEn: 'A larger area development project in Ojala, where wood-structured terraced houses will be built in a pleasant and developing residential environment. The project is in the planning phase.',
    specs: 'Rivitalo / asuinkokonaisuus',
    tag: 'Kaupunkikoti',
    imageUrl: '/ojala/ojala_001.jpg',
    kohdetyyppi: 'Rivitalo',
    kaytto: 'Asuminen',
    toteutusmuoto: 'Aluerakennushanke, vaiheittain toteutettava',
    rakennustapa: 'Puurakenteinen',
    asuntotyyppi: 'Perheasunnot',
    lämmitys: 'Maalämpö',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Ojala on suunnitteilla oleva aluerakennushanke Tampereella, jossa toteutetaan useista rakennuksista koostuva rivitalokokonaisuus. Kohde sijoittuu rauhalliselle alueelle, joka kehittyy vaiheittain moderniksi ja toimivaksi asuinympäristöksi.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Suunnitelmissa on puurakenteisia rivitaloasuntoja, joissa korostuvat selkeät pihapiirit, toimivat pohjaratkaisut ja arkeen sopiva asuminen. Alueen toteutus perustuu kokonaisuuden hallintaan: asunnot, pihat, pysäköinti ja yhteiset alueet muodostavat yhtenäisen ja viihtyisän kokonaisuuden.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Hanke etenee vaiheittain suunnittelusta toteutukseen, ja kohteesta tiedotetaan lisää hankkeen edetessä.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Ojala is a planned area development project in Tampere, where a terraced house complex consisting of several buildings will be built. The project is located in a peaceful area that will develop gradually into a modern and functional residential environment.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Plans include wood-structured terraced house apartments, where clear yard areas, functional floor plans and everyday-appropriate living are emphasized. The area's implementation is based on overall management: apartments, yards, parking and common areas form a unified and pleasant whole.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">The project progresses step by step from planning to implementation, and more information about the project will be provided as it progresses.</p>`,
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
    nameEn: 'Asunto Oy Puustellin Helmi',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokohde Tuusulassa. Puustellin Helmi toimi Tuusulan asuntomessukohteena ja edustaa Hietakosken viimeisteltyä toteutusta ja materiaaliosaamista – kokonaisuutta, jossa suunnittelu ja toteutus kohtaavat poikkeuksellisen huolellisella tasolla.',
    descriptionEn: 'Completed semi-detached house project in Tuusula. Puustellin Helmi served as Tuusula\'s housing fair project and represents Hietakoski\'s finished implementation and material expertise – a whole where design and implementation meet at an exceptionally careful level.',
    specs: '1 paritalo / 2 asuntoa | Asuinparitalo',
    tag: 'Referenssi',
    imageUrl: '/puustellin_helmi/puustellin_helmi_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    erityista: 'Tuusulan asuntomessukohde',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Asunto Oy Puustellin Helmi on Hietakosken toteuttama paritalokohde Tuusulassa ja Tuusulan asuntomessuilla esitelty referenssikohde. Kohde havainnollistaa, miten harkittu suunnittelu, laadukkaat materiaalivalinnat ja viimeistelty toteutus muodostavat yhtenäisen ja ajattoman kokonaisuuden.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Messukohteena Puustellin Helmi toimi esimerkkinä siitä, miten asumisen laatu, toimivat pohjaratkaisut ja yksityiskohtiin panostaminen näkyvät valmiissa lopputuloksessa. Kohde on suunniteltu arkeen ja pitkäaikaiseen asumiseen ilman kompromisseja.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Asunto Oy Puustellin Helmi is a semi-detached house project built by Hietakoski in Tuusula and a reference project presented at Tuusula housing fair. The project illustrates how thoughtful design, quality material choices and finished implementation form a unified and timeless whole.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">As a fair project, Puustellin Helmi served as an example of how living quality, functional floor plans and attention to detail are visible in the finished result. The project is designed for everyday life and long-term living without compromises.</p>`,
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
    name: 'Asunto Oy Tuusulan Maitiaisentie 9',
    nameEn: 'Asunto Oy Tuusulan Maitiaisentie 9',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokokonaisuus Tuusulassa. Kohde toimii referenssinä Hietakosken toteuttamasta, huolellisesti viimeistellystä asuinrakentamisesta rauhallisella pientaloalueella.',
    descriptionEn: 'Completed semi-detached house complex in Tuusula. The project serves as a reference for Hietakoski\'s carefully finished residential construction in a peaceful single-family area.',
    specs: '2 paritaloa / 4 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/maitiaisentie/maitiaisentie_000.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Maitiaisentie 9 on Hietakosken toteuttama ja valmistunut paritalokokonaisuus Tuusulassa. Kohde koostuu neljästä asunnosta ja edustaa selkeää, toimivaa ja pitkäikäistä pientaloasumista.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Kohde on toteutettu hallitulla kokonaisuudella, jossa suunnittelu, rakentaminen ja viimeistely on viety loppuun huolellisesti. Lopputulos on rauhallinen ja ajaton – valmis asumiseen ilman kompromisseja.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Maitiaisentie 9 is a semi-detached house complex built and completed by Hietakoski in Tuusula. The project consists of four apartments and represents clear, functional and long-lasting single-family living.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">The project is implemented with controlled overall management, where design, construction and finishing have been carefully completed. The result is peaceful and timeless – ready for living without compromises.</p>`,
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
    name: 'PT Hietarinteentie 6',
    nameEn: 'PT Hietarinteentie 6',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Kompakti ja huolella toteutettu paritalokohde Tuusulassa. Hietarinteentie 6 edustaa selkeää ja mutkatonta pientaloasumista, jossa painopiste on toimivissa tilaratkaisuissa ja valmiissa lopputuloksessa.',
    descriptionEn: 'A compact and carefully built semi-detached house project in Tuusula. Hietarinteentie 6 represents clear and straightforward single-family living, where the focus is on functional spatial solutions and a ready end result.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/hietarinteentie/Ulkokuva.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Hietarinteentie 6 on valmistunut paritalokohde Tuusulassa, jossa arjen toimivuus ja tilojen valoisuus ovat keskiössä. Olohuoneesta avautuvat suuret liukulasiovet johtavat suoraan terassille ja tuovat oleskelutiloihin runsaasti luonnonvaloa sekä sujuvan yhteyden ulkotilaan.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Pohjaratkaisut on suunniteltu käytännölliseen asumiseen, ja tilojen selkeys tekee kodista helposti muunneltavan eri elämäntilanteisiin. Kokonaisuus on rauhallinen ja ajaton – valmis koti, jossa sisä- ja ulkotilat muodostavat yhtenäisen kokonaisuuden.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Hietarinteentie 6 is a completed semi-detached house project in Tuusula, where everyday functionality and space brightness are central. Large sliding glass doors open from the living room directly to the terrace and bring plenty of natural light to living spaces as well as a smooth connection to outdoor space.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Floor plans are designed for practical living, and space clarity makes the home easily adaptable to different life situations. The whole is peaceful and timeless – a ready home where interior and exterior spaces form a unified whole.</p>`,
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
    name: 'PT Kiekontie 5',
    nameEn: 'PT Kiekontie 5',
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokokonaisuus rauhallisella pientaloalueella Tuusulassa. Kiekontie 5 muodostuu kahdesta paritalosta, joissa tyylikäs ja harkittu väriyhdistelmä antaa kohteelle ajattoman ja viimeistellyn ilmeen.',
    descriptionEn: 'Completed semi-detached house complex in a peaceful single-family area in Tuusula. Kiekontie 5 consists of two semi-detached houses, where a stylish and thoughtful color combination gives the project a timeless and finished look.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/kiekontie/Kiekontie_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Kiekontie 5 on valmistunut paritalokokonaisuus rauhallisella pientaloalueella Tuusulassa. Kohde koostuu kahdesta paritalosta, jotka muodostavat yhtenäisen ja harkitun kokonaisuuden niin arkkitehtuuriltaan kuin piharatkaisuiltaan.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asuntojen oleskelutilat avautuvat terasseille suurten lasipintojen kautta, mikä tuo sisätiloihin valoa ja tekee piha-alueista luontevan osan asumista. Julkisivujen hillitty ja tyylikäs väriyhdistelmä viimeistelee kokonaisuuden ja antaa kohteelle ajattoman ilmeen.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">Kiekontie 5 is a completed semi-detached house complex in a peaceful single-family area in Tuusula. The project consists of two semi-detached houses that form a unified and thoughtful whole both architecturally and in yard solutions.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Apartment living spaces open to terraces through large glass surfaces, which brings light to interior spaces and makes yard areas a natural part of living. The restrained and stylish color combination of the facades finishes the whole and gives the project a timeless look.</p>`,
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
    name: 'As Oy Vantaan Laurintie 37',
    nameEn: 'As Oy Vantaan Laurintie 37',
    location: 'Vantaa',
    status: 'Vuokrattu',
    statusColor: 'slate-blue',
    description: 'Valmistunut paritalokokonaisuus Vantaalla modernilla otteella, toteutettu kaksikerroksisena ja korkealla olohuoneella. Kohde on tällä hetkellä vuokrattu ja toimii referenssinä toimivasta ja nykyaikaisesta pientaloasumisesta.',
    descriptionEn: 'Completed semi-detached house complex in Vantaa with a modern approach, built as two-story with a high living room. The project is currently rented and serves as a reference for functional and modern single-family living.',
    specs: '2 paritaloa / 4 asuntoa | Paritalo',
    tag: 'Vuokrattu',
    imageUrl: '/laurintie/laurintie_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
    rakennustyyppi: 'Kaksikerroksinen paritalo',
    lämmitys: 'PILP - viilennyksellä',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">As Oy Vantaan Laurintie 37 on valmistunut paritalokokonaisuus Vantaalla, jossa moderni arkkitehtuuri ja asumismukavuus ovat keskiössä. Kohde on toteutettu kaksikerroksisena, ja korkea olohuone tuo oleskelutiloihin avaruutta sekä runsaasti luonnonvaloa.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asumismukavuudesta vastaa poistoilmalämpöpumppu viilennyksellä, joka mahdollistaa miellyttävän sisäilmaston ympäri vuoden. Kokonaisuus edustaa nykyaikaista ja selkeää pientaloasumista, joka soveltuu hyvin sekä omaan käyttöön että vuokrauskäyttöön. Kohde on tällä hetkellä vuokrattu ja toimii referenssinä toimivasta kokonaisratkaisusta.</p>`,
    presentationEn: `<p class="mb-6 text-base md:text-lg leading-relaxed">As Oy Vantaan Laurintie 37 is a completed semi-detached house complex in Vantaa, where modern architecture and living comfort are central. The project is built as two-story, and the high living room brings space and plenty of natural light to living spaces.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Living comfort is provided by an exhaust air heat pump with cooling, which enables pleasant indoor climate year-round. The whole represents modern and clear single-family living, which is well suited for both own use and rental use. The project is currently rented and serves as a reference for a functional overall solution.</p>`,
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
