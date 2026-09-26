/**
 * Única fuente de verdad del perfil: biografía, titular, experiencia,
 * proyectos y contacto, en español e inglés.
 *
 * Los valores envueltos en `pending(...)` son datos contradictorios entre las
 * versiones anteriores del sitio y el README. Se muestran como
 * "[por confirmar]" en la página y se listan en la consola al compilar
 * hasta que se reemplacen por el valor definitivo.
 */

export type Lang = 'es' | 'en';
export type Localized<T = string> = Record<Lang, T>;

export interface Pending {
  pending: true;
  /** Valores encontrados en las fuentes, con su origen. */
  options: string[];
  note: string;
}

export type Value<T = string> = T | Pending;

export const pending = (note: string, ...options: string[]): Pending => ({
  pending: true,
  options,
  note,
});

export const isPending = (v: unknown): v is Pending =>
  typeof v === 'object' && v !== null && (v as Pending).pending === true;

export const profile = {
  name: 'Christian Spana',

  headline: {
    es: 'Ingeniero de IA y desarrollador full stack',
    en: 'AI Engineer & Full Stack Developer',
  } satisfies Localized<Value>,

  roles: {
    es: ['Emprendedor', 'Arquitecto de IA', 'Ingeniero Full Stack', 'Profesor'],
    en: ['Entrepreneur', 'AI Architect', 'Full Stack Engineer', 'Professor'],
  } satisfies Localized<string[]>,

  yearsExperience: '15+' as Value,

  location: {
    es: 'North Vancouver, BC, Canadá',
    en: 'North Vancouver, BC, Canada',
  } satisfies Localized,

  summary: {
    es: 'Ingeniero sénior de IA y desarrollador full stack. Hago de puente entre la investigación avanzada en IA y el software que funciona en producción: desde entrenar y ajustar LLMs y modelos de visión por computadora hasta construir APIs confiables y frontends fluidos.',
    en: 'Senior AI Engineer and Full Stack Developer. I act as a bridge between advanced AI research and real-world software, from training and fine-tuning LLMs and computer vision models to building reliable APIs and smooth frontends.',
  } satisfies Localized,

  about: {
    es: [
      'Integro la investigación avanzada en IA en software de producción confiable y escalable. Hoy lidero la arquitectura de Kardot, un ecosistema fintech B2B basado en sistemas multiagente (MAS) y el Model Context Protocol (MCP).',
      'Antes construí productos de IA para planificación de negocios, marketplaces, salud y agricultura, desde modelos de visión por computadora hasta apps web y móviles.',
      'También he sido docente de IA y Cloud Computing: un 80 % de proyectos exitosos y 25 estudiantes guiados hasta certificaciones profesionales de AWS.',
    ],
    en: [
      'I integrate advanced AI research into reliable, scalable production software. Today I lead architecture at Kardot, a B2B fintech ecosystem built on Multi-Agent Systems (MAS) and the Model Context Protocol (MCP).',
      'Before that I built AI products for business planning, marketplaces, healthcare and agriculture, from computer vision models to web and mobile apps.',
      'I have also taught AI and Cloud Computing, with an 80% project success rate and 25 students guided to professional AWS certifications.',
    ],
  } satisfies Localized<string[]>,

  credentials: {
    es: [
      'Máster en Ciencias de la Computación (Inteligencia Artificial), Universidad Espíritu Santo (UEES), Ecuador',
      'Diplomado en Ciencias de la Computación (Ciberseguridad), Tecnológico de Monterrey, México',
      'Licenciatura en Ciencias de la Computación, Universidad de las Fuerzas Armadas, Ecuador',
      'AWS Certified Solutions Architect – Associate (2022)',
    ],
    en: [
      'Master in Computer Science (Artificial Intelligence), Universidad Espíritu Santo (UEES), Ecuador',
      'Diploma in Computer Science (Cybersecurity), Monterrey Institute of Technology, Mexico',
      'Bachelor of Computer Science, University of the Armed Forces, Ecuador',
      'AWS Certified Solutions Architect – Associate (2022)',
    ],
  } satisfies Localized<Value[]>,

  skills: [
    {
      title: { es: 'IA y aprendizaje automático', en: 'AI & Machine Learning' },
      items: ['TensorFlow', 'PyTorch', 'LangChain', 'LLMs', 'Computer Vision', 'NLP', 'RAG'],
    },
    {
      title: { es: 'Sistemas multiagente', en: 'Multi-Agent Systems' },
      items: ['MAS', 'MCP', 'Agentic Workflows', 'LLM Orchestration'],
    },
    {
      title: { es: 'Full stack', en: 'Full Stack' },
      items: ['Python', 'Node.js', 'Go', 'TypeScript', 'React', 'Vue', 'GraphQL'],
    },
    {
      title: { es: 'Nube y datos', en: 'Cloud & Data' },
      items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL'],
    },
  ],

  experience: [
    {
      company: 'Kardot',
      role: { es: 'Arquitecto principal', en: 'Lead Architect' },
      period: { es: 'jun 2025 – actualidad', en: 'Jun 2025 – Present' },
      highlights: {
        es: [
          'Núcleo de IA de la plataforma para 10.000 transacciones concurrentes con 99,99 % de disponibilidad.',
          'Sistemas multiagente (MAS) con Model Context Protocol (MCP) para conectar herramientas B2B seguras.',
          'Dirección de un equipo multidisciplinario de 5 personas: 40 % menos tiempo de MVP a mercado.',
          'Marcos B2B que aseguraron más de 10 alianzas clave y redujeron un 30 % los costos de desarrollo.',
        ],
        en: [
          "Engineered the platform's AI core to support 10,000 concurrent transactions with 99.99% uptime.",
          'Pioneered Multi-Agent Systems (MAS) using the Model Context Protocol (MCP) to connect secure B2B tools.',
          'Directed a cross-functional team of 5, accelerating the MVP-to-market lifecycle by 40%.',
          'Formulated B2B frameworks securing 10+ key partnerships and reducing development costs by 30%.',
        ],
      },
    },
    {
      company: 'Estrategia.IA',
      role: { es: 'Desarrollador full stack principal y arquitecto de IA', en: 'Lead Full Stack Developer & AI Architect' },
      period: { es: 'ene 2025 – jun 2025', en: 'Jan 2025 – Jun 2025' },
      highlights: {
        es: [
          'Motor de seguimiento de KPI con IA que redujo un 60 % los ciclos de planificación de los clientes.',
          'Hoja de ruta del producto con un 25 % de crecimiento mensual en la interacción B2B.',
          'Integraciones full stack web y móvil sin caídas críticas durante el lanzamiento.',
        ],
        en: [
          'Orchestrated an AI-driven KPI tracking engine, reducing client planning cycles by 60%.',
          'Conceptualized the product roadmap, driving 25% month-over-month growth in B2B engagement.',
          'Supervised full-stack integrations across web and mobile with zero critical downtime at launch.',
        ],
      },
    },
    {
      company: 'GoPlay!',
      role: { es: 'Ingeniero de software sénior', en: 'Senior Software Engineer' },
      period: { es: 'ene 2024 – ene 2025', en: 'Jan 2024 – Jan 2025' },
      highlights: {
        es: [
          'Marketplace sobre AWS y Node.js escalado a 1.000 jugadores activos.',
          'Apps iOS/Android que procesan más de 10.000 USD mensuales en reservas.',
        ],
        en: [
          'Architected a marketplace using AWS and Node.js, scaling to 1,000 active players.',
          'Spearheaded iOS/Android apps processing $10k+ monthly booking volume.',
        ],
      },
    },
    {
      company: 'University of Saskatchewan',
      role: { es: 'Líder de desarrollo de software', en: 'Software Development Leader' },
      period: { es: 'ago 2022 – dic 2023', en: 'Aug 2022 – Dec 2023' },
      highlights: {
        es: [
          'Modelos de IA para asignar recursos médicos, con un 25 % más de precisión en las citas.',
          'App multiplataforma de ultrasonido para más de 500 exámenes anuales en zonas remotas.',
        ],
        en: [
          'Developed AI models for medical resource allocation, improving appointment accuracy by 25%.',
          'Built a cross-platform ultrasound app supporting 500+ annual exams in remote regions.',
        ],
      },
    },
    {
      company: 'Saskatchewan Polytechnic',
      role: { es: 'Docente de IA y Cloud Computing', en: 'Faculty – AI & Cloud Computing' },
      period: { es: 'feb 2021 – ago 2022', en: 'Feb 2021 – Aug 2022' },
      highlights: {
        es: [
          'Docencia en Cloud Computing e IA con un 80 % de proyectos exitosos.',
          '25 estudiantes guiados hasta certificaciones profesionales de AWS.',
        ],
        en: [
          'Taught Cloud Computing and AI, achieving an 80% project success rate.',
          'Guided 25 students to professional AWS certifications.',
        ],
      },
    },
    {
      company: 'Freelance',
      role: { es: 'Desarrollador de soluciones de IA', en: 'AI Solutions Developer' },
      period: { es: 'dic 2019 – ene 2021', en: 'Dec 2019 – Jan 2021' },
      highlights: {
        es: [
          'Soluciones full stack para pymes que aumentaron un 30 % los ingresos de restaurantes.',
          'Automatización con IA a medida para 5 empresas.',
        ],
        en: [
          'Delivered full-stack solutions for SMEs, increasing restaurant revenue by 30%.',
          'Translated business goals into custom AI automation for 5 companies.',
        ],
      },
    },
    {
      company: 'University of Saskatchewan',
      role: { es: 'Investigador asociado y líder', en: 'Research Associate & Lead' },
      period: { es: 'sep 2017 – sep 2019', en: 'Sep 2017 – Sep 2019' },
      highlights: {
        es: [
          'Plataforma híbrida Python/Go que hizo un 40 % más eficiente el procesamiento de imágenes de drones.',
          'Plataforma de fenotipado de plantas que procesa más de 50 TB de datos visuales.',
        ],
        en: [
          'Improved drone-image processing efficiency by 40% with a hybrid Python/Go platform.',
          'Produced a plant phenotyping platform processing 50TB+ of visual data.',
        ],
      },
    },
    {
      company: 'Ag Exchange Group',
      role: { es: 'Desarrollador de software y científico de datos', en: 'Software Developer & Data Scientist' },
      period: { es: 'ene 2017 – dic 2017', en: 'Jan 2017 – Dec 2017' },
      highlights: {
        es: [
          'Modelos de IA para clasificar granos, con un 20 % más de precisión en la calidad para seguros.',
        ],
        en: [
          'Deployed grain classification AI models, raising insurance quality accuracy by 20%.',
        ],
      },
    },
  ],

  // TODO: añadir enlaces cuando existan páginas públicas de cada proyecto.
  projects: [
    {
      name: 'Kardot',
      description: {
        es: 'Ecosistema fintech B2B multiagente de alto rendimiento para la interoperabilidad.',
        en: 'A high-performance multi-agent B2B fintech ecosystem for interoperability.',
      },
      url: '',
    },
    {
      name: 'PlotVision',
      description: {
        es: 'Plataforma de visión por computadora de alto rendimiento para big data e investigación agrícola.',
        en: 'High-performance computer vision platform for big data and agricultural research.',
      },
      url: '',
    },
    {
      name: 'Estrategia.IA',
      description: {
        es: 'Motor estratégico con IA para la planificación automatizada de negocios.',
        en: 'Strategic AI-powered engine for automated business planning.',
      },
      url: '',
    },
  ],

  contact: {
    email: 'lukaswarce@gmail.com' as Value,
    phone: pending(
      'Teléfono (y si publicarlo)',
      '786.671.4280 (README, último cambio)',
      '708.671.4280 (currículum y sitios anteriores)',
      'No publicar teléfono',
    ) as Value,
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/lukaswarce' },
      { label: 'GitHub', url: 'https://github.com/lukaswarce' },
      { label: 'Blog', url: 'https://lukaswarce.substack.com/' },
      { label: 'Instagram', url: 'https://instagram.com/lukaswarce' },
    ],
  },

  photo: '/images/christian-spana.jpeg',
};

/** Recorre el perfil y devuelve cada dato pendiente con su ruta. */
export function listPending(node: unknown = profile, path = 'profile'): { path: string; value: Pending }[] {
  if (isPending(node)) return [{ path, value: node }];
  if (Array.isArray(node)) return node.flatMap((v, i) => listPending(v, `${path}[${i}]`));
  if (typeof node === 'object' && node !== null) {
    return Object.entries(node).flatMap(([k, v]) => listPending(v, `${path}.${k}`));
  }
  return [];
}
