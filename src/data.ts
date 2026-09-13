/**
 * ============================================================================
 *  EVERYTHING YOU EDIT LIVES IN THIS FILE.
 *  You should never need to open any other file to update your site.
 * ============================================================================
 *
 *  HOW TO ADD A NEW SHOOT / PROJECT
 *  ---------------------------------------------------------------------------
 *  1. Put your images in a new folder inside:  public/assets/photos/
 *     e.g.  public/assets/photos/07_new-project-name/IMG-1.jpg
 *
 *  2. Copy one of the objects below (inside COMMISSIONS or PERSONAL_PROJECTS),
 *     paste it at the top of the list, and edit the fields:
 *       - id          -> a short unique lowercase slug, no spaces (e.g. 'new-project')
 *       - title       -> what shows in the sidebar and gallery header
 *       - client      -> (commissions only) who it was shot for, e.g. "FOR VOGUE"
 *       - category    -> small label under the title, e.g. "DOCUMENTARY"
 *       - description -> a sentence or two about the project
 *       - coverImage  -> path to the thumbnail used in the sidebar/homepage
 *       - images      -> the full ordered list of photos shown in the gallery
 *
 *  3. Save the file. That's it — the sidebar, homepage grid, and gallery
 *     view all update automatically.
 *
 *  TO REMOVE A PROJECT: delete its whole { ... } block (including the comma
 *  after it) from the array.
 *
 *  TO REORDER: cut and paste the { ... } blocks into the order you want —
 *  the sidebar and homepage follow the array order top to bottom.
 * ============================================================================
 */

export interface Project {
  id: string;
  title: string;
  client?: string; // e.g. "FOR NETFLIX" — only used for commissions
  category: string;
  description: string;
  coverImage: string;
  images: string[];
}

// ----------------------------------------------------------------------------
// SITE-WIDE INFO — your name, bio, and contact details (shown on the About page)
// ----------------------------------------------------------------------------
export const SITE_CONTENT = {
  name: 'MELA OKOKO',
  role: 'ARCHITECTURAL TECHNOLOGIST + STREET & DOCUMENTARY PHOTOGRAPHER',
  location: 'NAIROBI, KENYA',
  bio: 'MELA OKOKO IS AN ARCHITECTURAL TECHNOLOGIST AND A STREET AND DOCUMENTARY PHOTOGRAPHER IN NAIROBI, KENYA. HIS WORK EXPLORES THE INTERSECTION OF BUILT ENVIRONMENTS AND NARRATIVE STORYTELLING. THROUGH PRECISION DESIGN AND CANDID DOCUMENTATION, HE SEEKS TO CAPTURE THE SOUL OF THE SPACES WE INHABIT.',
  contacts: {
    email: 'MELAOKOKO@GMAIL.COM',
    phone: '+254 740 326 509',
    instagram: '@MELAOKOKO',
    instagramUrl: 'https://instagram.com/melaokoko',
  },
  collaborations: ['AFRICA COLLECT TEXTILES', 'THE LOOM ROOM 2025'],
};

// ----------------------------------------------------------------------------
// COMMISSIONS — client / paid work. Shows in its own group in the sidebar.
// Leave the array empty ( [] ) if you don't have any yet — the section will
// simply not appear until you add one.
// ----------------------------------------------------------------------------
export const COMMISSIONS: Project[] = [
  // EXAMPLE — copy this block to add a real commission, or delete it.
  // {
  //   id: 'brand-campaign-2026',
  //   title: 'SUMMER CAMPAIGN',
  //   client: 'FOR AFRICA COLLECT TEXTILES',
  //   category: 'COMMERCIAL',
  //   description: 'A campaign shoot documenting the textile recycling process for ACT\'s 2026 brand refresh.',
  //   coverImage: 'assets/photos/07_brand-campaign/cover.jpg',
  //   images: [
  //     'assets/photos/07_brand-campaign/01.jpg',
  //     'assets/photos/07_brand-campaign/02.jpg',
  //   ],
  // },
];

// ----------------------------------------------------------------------------
// PERSONAL PROJECTS — your own series and long-term bodies of work.
// ----------------------------------------------------------------------------
export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'street',
    title: 'SHADES OF NAIROBI',
    category: 'STREET PHOTOGRAPHY',
    description: 'Nairobi\u2019s beauty and form exist beyond color.',
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
    id: 'cradle-of-forgotten',
    title: 'CRADLE OF THE FIFTH',
    category: 'DOCUMENTARY',
    description:
      'During visits to the Dandora Dumpsite, this documentary encounters the faces, hands, and lives shaped by the realities of the site. The series captures the landscapes and communities surrounding the dumpsite, the people who survive through it, work within it, and transform discarded textile waste into something of value. Created in collaboration with Africa Collect Textiles during their tours of the dumpsite, the project explores the human stories woven into Nairobi\u2019s waste economy.',
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
    id: 'seeds-of-nomad',
    title: 'SEEDS OF A NOMAD',
    category: 'DOCUMENTARY',
    description:
      'After generations of moving with their herds across Narok\u2019s wide plains, this community turns to farming on land once held for grazing. These images reflect the quiet rhythm, change, and solitude woven into this transition.',
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
    id: 'children-of-nairobi',
    title: 'ECHOES OF PLAY',
    category: 'STREET PHOTOGRAPHY',
    description:
      'Fragments of everyday streets where childhood breaks through the noise\u2014children turning dust, light, and movement into play. A quiet record of joy unfolding in passing moments.',
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
    title: 'STREET OF COLOUR',
    category: 'STREET PHOTOGRAPHY',
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
    title: 'KIBERA ART DISTRICT',
    category: 'DOCUMENTARY',
    description:
      'Kibera Art District is a living canvas where creativity grows from the streets. Beyond the walls and alleys, hidden talent emerges in paint, performance, and craft, young artists turning struggle into expression, and everyday life into powerful visual stories shaped by resilience, imagination, and community spirit.',
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
