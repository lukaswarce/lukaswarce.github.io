/**
 * Publicaciones verificadas el 2026-09-26 contra Crossref (DOI), ScholarSpace
 * (HICSS) y el PDF de arXiv. Autores, venue y fecha se copian de esas fuentes.
 * No se muestran citas ni índices porque no están verificados.
 * Las publicaciones no aparecen en el CV; Christian las aportó directamente.
 * Título, autores y venue no se traducen: son datos bibliográficos.
 */

import type { L } from '@/i18n/config';

export type Publication = {
  slug: string;
  title: string;
  /** Tal como figuran en la publicación. */
  authors: string[];
  year: number;
  date: string;
  venue: string;
  type: 'conference' | 'preprint';
  doi?: string;
  arxiv?: string;
  url: string;
  topics: L<string[]>;
  /** Solo cuando el resumen se ha podido leer en la fuente. */
  summary?: L;
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
    type: 'preprint',
    arxiv: '2006.11522',
    url: 'https://arxiv.org/abs/2006.11522',
    topics: { en: ['Blockchain', 'Healthcare AI', 'Access control'], es: ['Blockchain', 'IA en salud', 'Control de acceso'] },
    summary: {
      en: 'Proposes a distributed application (DApp) on Ethereum in a consortium network to manage data access for computer-aided diagnosis systems shared across research institutions.',
      es: 'Propone una aplicación distribuida (DApp) sobre Ethereum en una red de consorcio para gestionar el acceso a datos de sistemas de diagnóstico asistido por computadora compartidos entre instituciones de investigación.',
    },
  },
  {
    slug: 'suspicious-transactions-smart-spaces',
    title: 'Suspicious Transactions in Smart Spaces',
    authors: ['Mayra Samaniego', 'Cristian Espana', 'Ralph Deters'],
    year: 2020,
    date: '2020-01-07',
    venue: 'Proceedings of the 53rd Hawaii International Conference on System Sciences (HICSS)',
    type: 'conference',
    doi: '10.24251/HICSS.2020.768',
    arxiv: '1909.10644',
    url: 'https://doi.org/10.24251/HICSS.2020.768',
    topics: { en: ['Internet of Things', 'Blockchain', 'Smart spaces'], es: ['Internet de las cosas', 'Blockchain', 'Espacios inteligentes'] },
    summary: {
      en: 'Reviews suspicious transactions in IoT-enabled smart spaces and presents a blockchain-based system model with iContracts (interactive contracts) that evaluate context through proof-of-provenance.',
      es: 'Revisa las transacciones sospechosas en espacios inteligentes con IoT y presenta un modelo de sistema basado en blockchain con iContracts (contratos interactivos) que evalúan el contexto mediante prueba de procedencia.',
    },
  },
  {
    slug: 'access-control-plant-phenotyping-blockchain',
    title: 'Access Control Management for Plant Phenotyping Using Integrated Blockchain',
    authors: ['Mayra Samaniego', 'Cristian Espana', 'Ralph Deters'],
    year: 2019,
    date: '2019-07-02',
    venue: 'Proceedings of the 2019 ACM International Symposium on Blockchain and Secure Critical Infrastructure',
    type: 'conference',
    doi: '10.1145/3327960.3332380',
    url: 'https://doi.org/10.1145/3327960.3332380',
    topics: { en: ['Blockchain', 'Plant phenotyping', 'Access control'], es: ['Blockchain', 'Fenotipado de plantas', 'Control de acceso'] },
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
    type: 'conference',
    doi: '10.1109/SmartCloud.2018.00028',
    url: 'https://doi.org/10.1109/SmartCloud.2018.00028',
    topics: { en: ['Internet of Things', 'Virtualization'], es: ['Internet de las cosas', 'Virtualización'] },
    pages: '125–128',
    publisher: 'IEEE',
  },
];

/**
 * Áreas de investigación. `evidence` separa lo publicado de la práctica
 * profesional y de lo que está en exploración.
 */
export type Evidence = 'published' | 'professional' | 'exploring';

export const researchAreas: { name: L; text: L; evidence: Evidence[] }[] = [
  {
    name: { en: 'Internet of Things', es: 'Internet de las cosas' },
    text: {
      en: 'Virtualization and transaction integrity in connected smart spaces.',
      es: 'Virtualización e integridad de transacciones en espacios inteligentes conectados.',
    },
    evidence: ['published'],
  },
  {
    name: { en: 'Blockchain', es: 'Blockchain' },
    text: {
      en: 'Access control and provenance for shared data in agriculture, healthcare and smart spaces.',
      es: 'Control de acceso y procedencia de datos compartidos en agricultura, salud y espacios inteligentes.',
    },
    evidence: ['published'],
  },
  {
    name: { en: 'Applied Artificial Intelligence', es: 'Inteligencia artificial aplicada' },
    text: {
      en: 'Computer vision for plant phenotyping and drone imagery, AI for medical resource allocation and grain classification.',
      es: 'Visión por computadora para fenotipado de plantas e imágenes de drones, IA para asignar recursos médicos y clasificar granos.',
    },
    evidence: ['professional'],
  },
  {
    name: { en: 'AI Agents', es: 'Agentes de IA' },
    text: {
      en: 'Multi-agent systems and the Model Context Protocol in production, and how agents and people can share work.',
      es: 'Sistemas multiagente y Model Context Protocol en producción, y cómo agentes y personas pueden repartirse el trabajo.',
    },
    evidence: ['professional', 'exploring'],
  },
];

/** Research → Product: cada entrada declara qué tipo de afirmación es. */
export type ClaimType = 'evidence' | 'inProgress' | 'hypothesis' | 'opinion' | 'experiment';

export const researchToProduct: { title: L; text: L; type: ClaimType }[] = [
  {
    title: { en: 'Trust in shared data', es: 'Confianza en datos compartidos' },
    text: {
      en: 'Published work (2018–2020) on blockchain-based access control for plant phenotyping and computer-aided diagnosis, and on suspicious transactions in IoT smart spaces.',
      es: 'Trabajos publicados (2018–2020) sobre control de acceso con blockchain para fenotipado de plantas y diagnóstico asistido por computadora, y sobre transacciones sospechosas en espacios inteligentes con IoT.',
    },
    type: 'evidence',
  },
  {
    title: { en: 'Goals can become work orders', es: 'Los objetivos pueden volverse órdenes de trabajo' },
    text: {
      en: 'Many needs can be broken into work orders that AI agents, people or both can execute and verify.',
      es: 'Muchas necesidades pueden dividirse en órdenes de trabajo que agentes de IA, personas o ambos pueden ejecutar y verificar.',
    },
    type: 'hypothesis',
  },
  {
    title: { en: 'Chaucheros', es: 'Chaucheros' },
    text: {
      en: 'The product where I test that hypothesis. What I learn from it is a startup learning, not a research finding.',
      es: 'El producto donde pongo a prueba esa hipótesis. Lo que aprendo ahí es aprendizaje de startup, no un resultado de investigación.',
    },
    type: 'experiment',
  },
];
