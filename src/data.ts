/**
 * Story and site content data.
 * All stories, image paths, and bio information are defined here.
 */

export interface Project {
  id: string;
  title: string;
  category?: string;
  client?: string;
  description?: string;
  coverImage: string;
  images: string[];
}

export const SITE_CONTENT = {
  name: 'Mela Okoko',
  overviewTitle: 'Mela Okoko',
  location: 'Nairobi, Kenya',
  role: '',
  bio: 'Based in Nairobi, Kenya. The work explores the intersection of built environments, everyday life, and narrative storytelling, observing the quiet rhythm, light, and human stories within the spaces and communities we inhabit.',
  publishing: [
    'Africa Collect Textiles — Dandora Dumpsite Archive',
    'Nairobi Urban & Cultural Photographic Series',
  ],
  commissions: [
    'Africa Collect Textiles',
    'The Loom Room (2025)',
  ],
  affiliations: [
    'Africa Collect Textiles',
    'The Loom Room (2025)',
  ],
  collaborations: ['Africa Collect Textiles', 'The Loom Room (2025)'],
  contacts: {
    email: 'melaokoko@gmail.com',
    phone: '+254 740 326 509',
    instagram: '@melaokoko',
    instagramUrl: 'https://instagram.com/melaokoko',
  },
};

/**
 * Select list of photographs for the landing page / overview collage.
 * These can be customized or reordered in the code as needed.
 */
export const LANDING_PAGE_IMAGES: string[] = [
  'assets/photos/01_shades-of-nairobi/SON-1.jpg',
  'assets/photos/01_shades-of-nairobi/SON-18.jpg',
  'assets/photos/01_shades-of-nairobi/SON-16.jpg',
  'assets/photos/02_dandora-dumpsite/DD-1.jpg',
  'assets/photos/02_dandora-dumpsite/DD-6.jpg',
  'assets/photos/02_dandora-dumpsite/DD-11.jpg',
  'assets/photos/03_shepherd-of-the-city/SOTC-1.jpg',
  'assets/photos/03_shepherd-of-the-city/SOTC-3.jpg',
  'assets/photos/03_shepherd-of-the-city/SOTC-9.jpg',
  'assets/photos/04_the-boda-boda-stage/BBS-1.jpg',
  'assets/photos/04_the-boda-boda-stage/BBS-4.jpg',
  'assets/photos/04_the-boda-boda-stage/BBS-7.jpg',
  'assets/photos/05_river-road-chronicles/RRC-1.jpg',
  'assets/photos/05_river-road-chronicles/RRC-3.jpg',
  'assets/photos/05_river-road-chronicles/RRC-5.jpg',
  'assets/photos/06_kibera-transit/KT-1.jpg',
  'assets/photos/06_kibera-transit/KT-4.jpg',
  'assets/photos/06_kibera-transit/KT-7.jpg',
];

export const STORIES: Project[] = [
  {
    id: 'shades-of-nairobi',
    title: 'Shades of Nairobi',
    category: 'Street Photography',
    description: 'Nairobi’s beauty and form exist beyond color.',
    coverImage: 'assets/photos/01_shades-of-nairobi/SON-18.jpg',
    images: [
      'assets/photos/01_shades-of-nairobi/SON-1.jpg',
      'assets/photos/01_shades-of-nairobi/SON-2.jpg',
      'assets/photos/01_shades-of-nairobi/SON-16.jpg',
      'assets/photos/01_shades-of-nairobi/SON-7.jpg',
      'assets/photos/01_shades-of-nairobi/SON-5.jpg',
      'assets/photos/01_shades-of-nairobi/SON-4.jpg',
      'assets/photos/01_shades-of-nairobi/SON-6.jpg',
      'assets/photos/01_shades-of-nairobi/SON-8.jpg',
      'assets/photos/01_shades-of-nairobi/SON-9.jpg',
      'assets/photos/01_shades-of-nairobi/SON-10.jpg',
      'assets/photos/01_shades-of-nairobi/SON-11.jpg',
      'assets/photos/01_shades-of-nairobi/SON-12.jpg',
      'assets/photos/01_shades-of-nairobi/SON-13.jpg',
      'assets/photos/01_shades-of-nairobi/SON-14.jpg',
      'assets/photos/01_shades-of-nairobi/SON-15.jpg',
      'assets/photos/01_shades-of-nairobi/SON-3.jpg',
      'assets/photos/01_shades-of-nairobi/SON-17.jpg',
      'assets/photos/01_shades-of-nairobi/SON-18.jpg',
      'assets/photos/01_shades-of-nairobi/SON-19.jpg',
      'assets/photos/01_shades-of-nairobi/SON-20.jpg',
    ],
  },
  {
    id: 'cradle-of-the-fifth',
    title: 'Cradle of the Fifth',
    category: 'Documentary',
    description:
      'During visits to the Dandora Dumpsite, this documentary encounters the faces, hands, and lives shaped by the realities of the site. The series captures the landscapes and communities surrounding the dumpsite, the people who survive through it, work within it, and transform discarded textile waste into something of value. Created in collaboration with Africa Collect Textiles during their tours of the dumpsite, the project explores the human stories woven into Nairobi’s waste economy.',
    coverImage: 'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-18.jpg',
    images: [
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-1.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-18.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-19.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-11.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-8.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-12.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-2.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-3.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-4.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-5.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-6.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-7.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-9.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-10.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-13.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-14.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-15.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-16.jpg',
      'assets/photos/02_cradle-of-forgotten/Cradle of the forgoten-17.jpg',
    ],
  },
  {
    id: 'seeds-of-a-nomad',
    title: 'Seeds of a Nomad',
    category: 'Documentary',
    description:
      'After generations of moving with their herds across Narok’s wide plains, this community turns to farming on land once held for grazing. These images reflect the quiet rhythm, change, and solitude woven into this transition.',
    coverImage: 'assets/photos/03_seeds-of-nomad/Seeds of a Normad-5.jpg',
    images: [
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-11.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-12.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-13.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-1.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-2.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-3.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-4.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-5.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-6.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-7.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-8.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-9.jpg',
      'assets/photos/03_seeds-of-nomad/Seeds of a Normad-10.jpg',
    ],
  },
  {
    id: 'echoes-of-play',
    title: 'Echoes of Play',
    category: 'Street Photography',
    description:
      'Fragments of everyday streets where childhood breaks through the noise—children turning dust, light, and movement into play. A quiet record of joy unfolding in passing moments.',
    coverImage: 'assets/photos/04_children-of-nairobi/Children of colour-3.jpg',
    images: [
      'assets/photos/04_children-of-nairobi/Children of colour-1.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-2.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-3.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-4.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-5.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-6.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-8.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-9.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-10.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-11.jpg',
      'assets/photos/04_children-of-nairobi/Children of colour-12.jpg',
    ],
  },
  {
    id: 'street-of-colour',
    title: 'Street of Colour',
    category: 'Street Photography',
    description:
      'Where light lingers on faces, movement, and moments that pass too quickly to hold, yet stay vivid in memory.',
    coverImage: 'assets/photos/05_street-of-colour/SOC-8.jpg',
    images: [
      'assets/photos/05_street-of-colour/SOC-29.jpg',
      'assets/photos/05_street-of-colour/SOC-30.jpg',
      'assets/photos/05_street-of-colour/SOC-1.jpg',
      'assets/photos/05_street-of-colour/SOC-3.jpg',
      'assets/photos/05_street-of-colour/SOC-4.jpg',
      'assets/photos/05_street-of-colour/SOC-5.jpg',
      'assets/photos/05_street-of-colour/SOC-6.jpg',
      'assets/photos/05_street-of-colour/SOC-7.jpg',
      'assets/photos/05_street-of-colour/SOC-8.jpg',
      'assets/photos/05_street-of-colour/SOC-9.jpg',
      'assets/photos/05_street-of-colour/SOC-10.jpg',
      'assets/photos/05_street-of-colour/SOC-11.jpg',
      'assets/photos/05_street-of-colour/SOC-12.jpg',
      'assets/photos/05_street-of-colour/SOC-13.jpg',
      'assets/photos/05_street-of-colour/SOC-14.jpg',
      'assets/photos/05_street-of-colour/SOC-15.jpg',
      'assets/photos/05_street-of-colour/SOC-16.jpg',
      'assets/photos/05_street-of-colour/SOC-17.jpg',
      'assets/photos/05_street-of-colour/SOC-18.jpg',
      'assets/photos/05_street-of-colour/SOC-19.jpg',
      'assets/photos/05_street-of-colour/SOC-20.jpg',
      'assets/photos/05_street-of-colour/SOC-21.jpg',
      'assets/photos/05_street-of-colour/SOC-22.jpg',
      'assets/photos/05_street-of-colour/SOC-23.jpg',
      'assets/photos/05_street-of-colour/SOC-24.jpg',
      'assets/photos/05_street-of-colour/SOC-25.jpg',
      'assets/photos/05_street-of-colour/SOC-26.jpg',
      'assets/photos/05_street-of-colour/SOC-27.jpg',
      'assets/photos/05_street-of-colour/SOC-28.jpg',
    ],
  },
  {
    id: 'kibera-art',
    title: 'Kibera Art District',
    category: 'Documentary',
    description:
      'Kibera Art District is a living canvas where creativity grows from the streets. Beyond the walls and alleys, young artists turn struggle into expression, and everyday life into powerful visual stories shaped by resilience, imagination, and community spirit.',
    coverImage: 'assets/photos/06_kibera-art/Kibera-5.jpg',
    images: [
      'assets/photos/06_kibera-art/Kibera-5.jpg',
      'assets/photos/06_kibera-art/Kibera-18.jpg',
      'assets/photos/06_kibera-art/Kibera-4.jpg',
      'assets/photos/06_kibera-art/Kibera-3.jpg',
      'assets/photos/06_kibera-art/Kibera-1.jpg',
      'assets/photos/06_kibera-art/Kibera-6.jpg',
      'assets/photos/06_kibera-art/Kibera-11.jpg',
      'assets/photos/06_kibera-art/Kibera-12.jpg',
      'assets/photos/06_kibera-art/Kibera-13.jpg',
      'assets/photos/06_kibera-art/Kibera-14.jpg',
      'assets/photos/06_kibera-art/Kibera-15.jpg',
      'assets/photos/06_kibera-art/Kibera-16.jpg',
      'assets/photos/06_kibera-art/Kibera-17.jpg',
      'assets/photos/06_kibera-art/Kibera-2.jpg',
      'assets/photos/06_kibera-art/Kibera-7.jpg',
      'assets/photos/06_kibera-art/Kibera-8.jpg',
      'assets/photos/06_kibera-art/Kibera-9.jpg',
      'assets/photos/06_kibera-art/Kibera-10.jpg',
    ],
  },
];

// Backwards compatibility aliases
export const PERSONAL_PROJECTS = STORIES;
export const COMMISSIONS: Project[] = [];
