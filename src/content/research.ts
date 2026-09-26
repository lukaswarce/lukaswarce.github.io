/**
 * Publicaciones verificadas el 2026-09-26 contra Crossref (DOI), ScholarSpace
 * (HICSS) y el PDF de arXiv. Autores, venue y fecha se copian de esas fuentes.
 * No se muestran citas ni índices porque no están verificados.
 * Las publicaciones no aparecen en el CV; Christian las aportó directamente.
 */

export type Publication = {
  slug: string;
  title: string;
  /** Tal como figuran en la publicación. */
  authors: string[];
  year: number;
  date: string;
  venue: string;
  type: 'Conference paper' | 'Preprint';
  doi?: string;
  arxiv?: string;
  url: string;
  topics: string[];
  /** Solo cuando el resumen se ha podido leer en la fuente. */
  summary?: string;
  pages?: string;
  publisher?: string;
};

export const publications: Publication[] = [
  {
    slug: 'access-control-cad-blockchain',
    title: 'Access Control Management for Computer-Aided Diagnosis Systems using Blockchain',
    authors: ['Mayra Samaniego', 'Sara Hosseinzadeh Kassani', 'Cristian Espana', 'Ralph Deters'],
    year: 2020,
    date: '2020-06',
    venue: 'arXiv preprint',
    type: 'Preprint',
    arxiv: '2006.11522',
    url: 'https://arxiv.org/abs/2006.11522',
    topics: ['Blockchain', 'Healthcare AI', 'Access control'],
    summary:
      'Proposes a distributed application (DApp) on Ethereum in a consortium network to manage data access for computer-aided diagnosis systems shared across research institutions.',
  },
  {
    slug: 'suspicious-transactions-smart-spaces',
    title: 'Suspicious Transactions in Smart Spaces',
    authors: ['Mayra Samaniego', 'Cristian Espana', 'Ralph Deters'],
    year: 2020,
    date: '2020-01-07',
    venue: 'Proceedings of the 53rd Hawaii International Conference on System Sciences (HICSS)',
    type: 'Conference paper',
    doi: '10.24251/HICSS.2020.768',
    arxiv: '1909.10644',
    url: 'https://doi.org/10.24251/HICSS.2020.768',
    topics: ['Internet of Things', 'Blockchain', 'Smart spaces'],
    summary:
      'Reviews suspicious transactions in IoT-enabled smart spaces and presents a blockchain-based system model with iContracts (interactive contracts) that evaluate context through proof-of-provenance.',
  },
  {
    slug: 'access-control-plant-phenotyping-blockchain',
    title: 'Access Control Management for Plant Phenotyping Using Integrated Blockchain',
    authors: ['Mayra Samaniego', 'Cristian Espana', 'Ralph Deters'],
    year: 2019,
    date: '2019-07-02',
    venue: 'Proceedings of the 2019 ACM International Symposium on Blockchain and Secure Critical Infrastructure',
    type: 'Conference paper',
    doi: '10.1145/3327960.3332380',
    url: 'https://doi.org/10.1145/3327960.3332380',
    topics: ['Blockchain', 'Plant phenotyping', 'Access control'],
    pages: '39–46',
    publisher: 'ACM',
  },
  {
    slug: 'smart-virtualization-iot',
    title: 'Smart Virtualization for IoT',
    authors: ['Mayra Samaniego', 'Cristian Espana', 'Ralph Deters'],
    year: 2018,
    date: '2018-09',
    venue: '2018 IEEE International Conference on Smart Cloud (SmartCloud)',
    type: 'Conference paper',
    doi: '10.1109/SmartCloud.2018.00028',
    url: 'https://doi.org/10.1109/SmartCloud.2018.00028',
    topics: ['Internet of Things', 'Virtualization'],
    pages: '125–128',
    publisher: 'IEEE',
  },
];

/**
 * Áreas de investigación. `evidence` separa lo publicado de la práctica
 * profesional y de lo que está en exploración.
 */
export type Evidence = 'Published research' | 'Professional work' | 'Exploring';

export const researchAreas: { name: string; text: string; evidence: Evidence[] }[] = [
  {
    name: 'Internet of Things',
    text: 'Virtualization and transaction integrity in connected smart spaces.',
    evidence: ['Published research'],
  },
  {
    name: 'Blockchain',
    text: 'Access control and provenance for shared data in agriculture, healthcare and smart spaces.',
    evidence: ['Published research'],
  },
  {
    name: 'Applied Artificial Intelligence',
    text: 'Computer vision for plant phenotyping and drone imagery, AI for medical resource allocation and grain classification.',
    evidence: ['Professional work'],
  },
  {
    name: 'AI Agents',
    text: 'Multi-agent systems and the Model Context Protocol in production, and how agents and people can share work.',
    evidence: ['Professional work', 'Exploring'],
  },
];

/** Research → Product: cada entrada declara qué tipo de afirmación es. */
export type ClaimType = 'Published evidence' | 'Research in progress' | 'Hypothesis' | 'Opinion' | 'Startup experiment';

export const researchToProduct: { title: string; text: string; type: ClaimType }[] = [
  {
    title: 'Trust in shared data',
    text: 'Published work (2018–2020) on blockchain-based access control for plant phenotyping and computer-aided diagnosis, and on suspicious transactions in IoT smart spaces.',
    type: 'Published evidence',
  },
  {
    title: 'Goals can become work orders',
    text: 'Many needs can be broken into work orders that AI agents, people or both can execute and verify.',
    type: 'Hypothesis',
  },
  {
    title: 'Chaucheros',
    text: 'The product where I test that hypothesis. What I learn from it is a startup learning, not a research finding.',
    type: 'Startup experiment',
  },
];
