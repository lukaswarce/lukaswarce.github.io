/**
 * Trayectoria y formación. Fuente única: el CV de Christian (2 páginas, sep 2026).
 * No publicar teléfono, dirección, ciudadanías ni otros datos personales.
 * Cargos y nombres de instituciones se dejan como figuran en el CV.
 */

import type { L } from '@/i18n/config';

export type Role = {
  company: string;
  title: string;
  period: L;
  highlights: L<string[]>;
  kind: 'founder' | 'engineering' | 'research' | 'teaching';
};

export const experience: Role[] = [
  {
    company: 'Kardot',
    title: 'Lead Architect',
    period: { en: 'Jun 2025 – Present', es: 'Jun 2025 – Actualidad' },
    kind: 'engineering',
    highlights: {
      en: [
        'Engineered the platform’s AI core to support 10,000 concurrent transactions with 99.99% uptime.',
        'Pioneered multi-agent systems using the Model Context Protocol (MCP) to connect secure B2B tools.',
        'Directed a cross-functional team of 5, accelerating the MVP-to-market lifecycle by 40%.',
        'Formulated B2B frameworks securing 10+ key partnerships and reducing development costs by 30%.',
      ],
      es: [
        'Diseñé el núcleo de IA de la plataforma para 10.000 transacciones concurrentes con 99,99 % de disponibilidad.',
        'Impulsé sistemas multiagente con el Model Context Protocol (MCP) para conectar herramientas B2B seguras.',
        'Dirigí un equipo multidisciplinario de 5 personas y aceleré un 40 % el paso de MVP a mercado.',
        'Formulé marcos B2B que aseguraron más de 10 alianzas clave y redujeron un 30 % los costos de desarrollo.',
      ],
    },
  },
  {
    company: 'Estrategia.IA',
    title: 'Lead Full Stack Developer & AI Architect',
    period: { en: 'Jan 2025 – Jun 2025', es: 'Ene 2025 – Jun 2025' },
    kind: 'engineering',
    highlights: {
      en: [
        'Orchestrated an AI-driven KPI tracking engine, reducing client planning cycles by 60%.',
        'Conceptualized the product roadmap, driving 25% month-over-month growth in B2B engagement.',
      ],
      es: [
        'Orquesté un motor de seguimiento de KPI con IA que redujo un 60 % los ciclos de planificación de los clientes.',
        'Definí la hoja de ruta del producto, con un 25 % de crecimiento mensual en la interacción B2B.',
      ],
    },
  },
  {
    company: 'GoPlay!',
    title: 'Senior Software Engineer',
    period: { en: 'Jan 2024 – Jan 2025', es: 'Ene 2024 – Ene 2025' },
    kind: 'engineering',
    highlights: {
      en: [
        'Architected a marketplace using AWS and Node.js, scaling to 1,000 active players.',
        'Spearheaded iOS/Android apps processing $10k+ monthly booking volume.',
      ],
      es: [
        'Diseñé un marketplace sobre AWS y Node.js que escaló a 1.000 jugadores activos.',
        'Lideré apps iOS/Android que procesan más de 10.000 USD mensuales en reservas.',
      ],
    },
  },
  {
    company: 'University of Saskatchewan',
    title: 'Software Development Leader',
    period: { en: 'Aug 2022 – Dec 2023', es: 'Ago 2022 – Dic 2023' },
    kind: 'engineering',
    highlights: {
      en: [
        'Developed AI models for medical resource allocation, improving appointment accuracy by 25%.',
        'Built a cross-platform ultrasound app supporting 500+ annual exams in remote regions.',
      ],
      es: [
        'Desarrollé modelos de IA para asignar recursos médicos, con un 25 % más de precisión en las citas.',
        'Construí una app multiplataforma de ecografía que apoya más de 500 exámenes al año en regiones remotas.',
      ],
    },
  },
  {
    company: 'Saskatchewan Polytechnic',
    title: 'Faculty – AI & Cloud Computing',
    period: { en: 'Feb 2021 – Aug 2022', es: 'Feb 2021 – Ago 2022' },
    kind: 'teaching',
    highlights: {
      en: [
        'Taught Cloud Computing and AI with an 80% project success rate.',
        'Guided 25 students to professional AWS certifications.',
      ],
      es: [
        'Enseñé Cloud Computing e IA con un 80 % de proyectos exitosos.',
        'Guié a 25 estudiantes hasta certificaciones profesionales de AWS.',
      ],
    },
  },
  {
    company: 'Freelance',
    title: 'AI Solutions Developer',
    period: { en: 'Dec 2019 – Jan 2021', es: 'Dic 2019 – Ene 2021' },
    kind: 'engineering',
    highlights: {
      en: [
        'Delivered full-stack solutions for SMEs, increasing restaurant revenue by 30%.',
        'Translated business goals into custom AI automation for 5 companies.',
      ],
      es: [
        'Entregué soluciones full stack para pymes que aumentaron un 30 % los ingresos de restaurantes.',
        'Convertí objetivos de negocio en automatizaciones de IA a medida para 5 empresas.',
      ],
    },
  },
  {
    company: 'University of Saskatchewan',
    title: 'Research Associate & Lead',
    period: { en: 'Sep 2017 – Sep 2019', es: 'Sep 2017 – Sep 2019' },
    kind: 'research',
    highlights: {
      en: [
        'Improved drone-image processing efficiency by 40% with a hybrid Python/Go platform.',
        'Produced a plant phenotyping platform processing 50TB+ of visual data.',
      ],
      es: [
        'Mejoré un 40 % la eficiencia del procesamiento de imágenes de drones con una plataforma híbrida Python/Go.',
        'Creé una plataforma de fenotipado de plantas que procesa más de 50 TB de datos visuales.',
      ],
    },
  },
  {
    company: 'Ag Exchange Group',
    title: 'Software Developer & Data Scientist',
    period: { en: 'Jan 2017 – Dec 2017', es: 'Ene 2017 – Dic 2017' },
    kind: 'engineering',
    highlights: {
      en: ['Deployed grain classification AI models, raising insurance quality accuracy by 20%.'],
      es: ['Desplegué modelos de IA para clasificar granos, con un 20 % más de precisión en la calidad para seguros.'],
    },
  },
];

export const education: { degree: L; school: string; country: L }[] = [
  {
    degree: { en: 'Master in Computer Science (Artificial Intelligence)', es: 'Maestría en Ciencias de la Computación (Inteligencia Artificial)' },
    school: 'Universidad Espíritu Santo (UEES)',
    country: { en: 'Ecuador', es: 'Ecuador' },
  },
  {
    degree: { en: 'Diploma in Computer Science (Cybersecurity)', es: 'Diplomado en Ciencias de la Computación (Ciberseguridad)' },
    school: 'Monterrey Institute of Technology',
    country: { en: 'Mexico', es: 'México' },
  },
  {
    degree: { en: 'Bachelor of Computer Science', es: 'Licenciatura en Ciencias de la Computación' },
    school: 'University of the Armed Forces',
    country: { en: 'Ecuador', es: 'Ecuador' },
  },
];

export const certifications = [{ name: 'AWS Certified Solutions Architect – Associate', year: 2022 }];

/** Áreas de trabajo (texto de Christian). */
export const workAreas: { title: L; text: L }[] = [
  {
    title: { en: 'Artificial Intelligence', es: 'Inteligencia artificial' },
    text: {
      en: 'Building AI systems and experimenting with agents, automation and intelligent products.',
      es: 'Construyo sistemas de IA y experimento con agentes, automatización y productos inteligentes.',
    },
  },
  {
    title: { en: 'Startups', es: 'Startups' },
    text: {
      en: 'From idea and validation to product, distribution and monetization.',
      es: 'De la idea y la validación al producto, la distribución y la monetización.',
    },
  },
  {
    title: { en: 'Technology', es: 'Tecnología' },
    text: {
      en: 'Designing and engineering software products that solve real problems.',
      es: 'Diseño y desarrollo productos de software que resuelven problemas reales.',
    },
  },
  {
    title: { en: 'Applied Research', es: 'Investigación aplicada' },
    text: {
      en: 'Exploring technology through research, experimentation and scientific publication.',
      es: 'Exploro la tecnología a través de la investigación, la experimentación y la publicación científica.',
    },
  },
];
