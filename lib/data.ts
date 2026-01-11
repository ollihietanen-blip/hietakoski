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
        rooms: '4h + k + pesutilat + sauna + wc/khh',
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
    lämmitys: 'Maalämpö',
    autopaikat: '2 autopaikkaa / asunto',
    terassit: 'Lasitetut terassit',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Liittokallionkatu on ennakkomarkkinointiin tuleva, viidestä perheasunnosta koostuva asuinkohde rauhallisella ja arvostetulla Kaarilan pientaloalueella. Alueella arki on sujuvaa: lähikauppa, päiväkoti, koulu ja bussiyhteydet sijaitsevat kävelyetäisyydellä, ja palvelut ovat helposti saavutettavissa.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asunnot on suunniteltu toimivaan perheasumiseen ja viimeistelty ajattomalla ilmeellä. Rapatut julkisivut ja panelointi luovat rauhallisen kokonaisuuden, lasitetut terassit laajentavat oleskelutiloja ja jokaiselle asunnolle kuuluu kaksi autopaikkaa. Luonto ja ulkoilumahdollisuudet alkavat lähes kotiovelta, mikä tekee alueesta erityisen pidetyn.</p>`,
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
    location: 'Tuusula',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Ennakkomarkkinointiin tuleva paritalokohde rauhallisella pientaloalueella Tuusulassa. Kohde koostuu kahdesta kiinteistömuotoisesta asunnosta ja tarjoaa huolettoman vaihtoehdon omakotitalomaiselle asumiselle.',
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
    location: 'Tampere',
    status: 'Suunnittelussa',
    statusColor: 'slate-blue',
    description: 'Laajempi aluerakennushanke Ojalassa, jossa toteutetaan puurakenteisia rivitaloja viihtyisään ja kehittyvään asuinympäristöön. Kohde on suunnitteluvaiheessa.',
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
    description: 'Valmistunut paritalokohde Tuusulassa. Puustellin Helmi toimi Tuusulan asuntomessukohteena ja edustaa Hietakosken viimeisteltyä toteutusta ja materiaaliosaamista – kokonaisuutta, jossa suunnittelu ja toteutus kohtaavat poikkeuksellisen huolellisella tasolla.',
    specs: '1 paritalo / 2 asuntoa | Asuinparitalo',
    tag: 'Referenssi',
    imageUrl: '/puustellin_helmi/puustellin_helmi_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    erityista: 'Tuusulan asuntomessukohde',
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Asunto Oy Puustellin Helmi on Hietakosken toteuttama paritalokohde Tuusulassa ja Tuusulan asuntomessuilla esitelty referenssikohde. Kohde havainnollistaa, miten harkittu suunnittelu, laadukkaat materiaalivalinnat ja viimeistelty toteutus muodostavat yhtenäisen ja ajattoman kokonaisuuden.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Messukohteena Puustellin Helmi toimi esimerkkinä siitä, miten asumisen laatu, toimivat pohjaratkaisut ja yksityiskohtiin panostaminen näkyvät valmiissa lopputuloksessa. Kohde on suunniteltu arkeen ja pitkäaikaiseen asumiseen ilman kompromisseja.</p>`,
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
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokokonaisuus Tuusulassa. Kohde toimii referenssinä Hietakosken toteuttamasta, huolellisesti viimeistellystä asuinrakentamisesta rauhallisella pientaloalueella.',
    specs: '2 paritaloa / 4 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/maitiaisentie/maitiaisentie_000.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 4,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Maitiaisentie 9 on Hietakosken toteuttama ja valmistunut paritalokokonaisuus Tuusulassa. Kohde koostuu neljästä asunnosta ja edustaa selkeää, toimivaa ja pitkäikäistä pientaloasumista.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Kohde on toteutettu hallitulla kokonaisuudella, jossa suunnittelu, rakentaminen ja viimeistely on viety loppuun huolellisesti. Lopputulos on rauhallinen ja ajaton – valmis asumiseen ilman kompromisseja.</p>`,
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
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Kompakti ja huolella toteutettu paritalokohde Tuusulassa. Hietarinteentie 6 edustaa selkeää ja mutkatonta pientaloasumista, jossa painopiste on toimivissa tilaratkaisuissa ja valmiissa lopputuloksessa.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/hietarinteentie/Ulkokuva.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Hietarinteentie 6 on valmistunut paritalokohde Tuusulassa, jossa arjen toimivuus ja tilojen valoisuus ovat keskiössä. Olohuoneesta avautuvat suuret liukulasiovet johtavat suoraan terassille ja tuovat oleskelutiloihin runsaasti luonnonvaloa sekä sujuvan yhteyden ulkotilaan.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Pohjaratkaisut on suunniteltu käytännölliseen asumiseen, ja tilojen selkeys tekee kodista helposti muunneltavan eri elämäntilanteisiin. Kokonaisuus on rauhallinen ja ajaton – valmis koti, jossa sisä- ja ulkotilat muodostavat yhtenäisen kokonaisuuden.</p>`,
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
    location: 'Tuusula',
    status: 'Myyty',
    statusColor: 'copper',
    description: 'Valmistunut paritalokokonaisuus rauhallisella pientaloalueella Tuusulassa. Kiekontie 5 muodostuu kahdesta paritalosta, joissa tyylikäs ja harkittu väriyhdistelmä antaa kohteelle ajattoman ja viimeistellyn ilmeen.',
    specs: '1 paritalo / 2 asuntoa | Paritalo',
    tag: 'Valmis',
    imageUrl: '/kiekontie/Kiekontie_001.jpg',
    kohdetyyppi: 'Paritalo',
    kaytto: 'Asuminen',
    asuntojenLkm: 2,
    presentation: `<p class="mb-6 text-base md:text-lg leading-relaxed">Kiekontie 5 on valmistunut paritalokokonaisuus rauhallisella pientaloalueella Tuusulassa. Kohde koostuu kahdesta paritalosta, jotka muodostavat yhtenäisen ja harkitun kokonaisuuden niin arkkitehtuuriltaan kuin piharatkaisuiltaan.</p>
<p class="mb-6 text-base md:text-lg leading-relaxed">Asuntojen oleskelutilat avautuvat terasseille suurten lasipintojen kautta, mikä tuo sisätiloihin valoa ja tekee piha-alueista luontevan osan asumista. Julkisivujen hillitty ja tyylikäs väriyhdistelmä viimeistelee kokonaisuuden ja antaa kohteelle ajattoman ilmeen.</p>`,
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
    location: 'Vantaa',
    status: 'Vuokrattu',
    statusColor: 'slate-blue',
    description: 'Valmistunut paritalokokonaisuus Vantaalla modernilla otteella, toteutettu kaksikerroksisena ja korkealla olohuoneella. Kohde on tällä hetkellä vuokrattu ja toimii referenssinä toimivasta ja nykyaikaisesta pientaloasumisesta.',
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
