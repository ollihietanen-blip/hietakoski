export type ProjectStatus = 'Ennakkomarkkinoinnissa' | 'Tulossa' | 'Myynnissä / Valmis';

export interface Project {
  id: string;
  name: string;
  location: string;
  status: ProjectStatus;
  statusColor: 'copper' | 'slate-blue';
  description: string;
  specs: string;
  tag: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 'atrin-atmos',
    name: 'Atrin Atmos',
    location: 'Levi, Lappi',
    status: 'Ennakkomarkkinoinnissa',
    statusColor: 'copper',
    description: 'Kaksi 118 m² loma-asuntoa Levin parhailla paikoilla. Hietakulman suurelementeistä rakennettu kokonaisuus takaa, että loma-kotisi on terveellinen, tiivis ja energiatehokas.',
    specs: '118 m² | Paritalo | Hinta alk. 495 000€',
    tag: 'Luksus vapaa-aika',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  },
  {
    id: 'tampereen-liittokallionkatu',
    name: 'Asunto Oy Tampereen Liittokallionkatu',
    location: 'Kaarila, Tampere',
    status: 'Tulossa',
    statusColor: 'slate-blue',
    description: 'Moderni koti arvostetussa Kaarilassa. Kävelymatka Tesoman juna-asemalle ja Westerin palveluihin. Rauhallinen pientaloalue hyvien yhteyksien äärellä.',
    specs: 'Perheasuntoja | Arvostettu sijainti',
    tag: 'Kaupunkikoti',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  },
  {
    id: 'siiratie',
    name: 'Siiratie & Muut kohteet',
    location: 'Vantaa & Tuusula',
    status: 'Myynnissä / Valmis',
    statusColor: 'copper',
    description: 'Toimivia ja laadukkaita yksitasoratkaisuja arjen sujuvuutta arvostaville. Tutustu valmistuneisiin kohteisiimme.',
    specs: '78-100 m² | Yksitaso',
    tag: 'Uusimaa',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  },
];

