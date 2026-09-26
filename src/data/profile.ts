/**
 * Única fuente de verdad del perfil en los cuatro idiomas del sitio.
 * Contenido basado en el currículum de Christian (sep 2026).
 * Por decisión de Christian, el teléfono no se publica.
 */

export const langs = ['es', 'en', 'fr', 'pt'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'es';
export type Localized<T = string> = Record<Lang, T>;

export const profile = {
  name: 'Christian Spana',
  email: 'lukaswarce@gmail.com',
  photo: '/images/christian-spana.jpeg',

  jobTitle: {
    es: 'Emprendedor tecnológico e ingeniero de IA',
    en: 'Tech Entrepreneur & AI Engineer',
    fr: 'Entrepreneur tech et ingénieur en IA',
    pt: 'Empreendedor de tecnologia e engenheiro de IA',
  } satisfies Localized,

  eyebrow: {
    es: 'Emprendedor tecnológico · IA · Fintech B2B',
    en: 'Tech entrepreneur · AI · B2B fintech',
    fr: 'Entrepreneur tech · IA · Fintech B2B',
    pt: 'Empreendedor de tecnologia · IA · Fintech B2B',
  } satisfies Localized,

  headline: {
    es: 'Construyo productos inteligentes para mercados reales.',
    en: 'I build intelligent products for real markets.',
    fr: 'Je crée des produits intelligents pour des marchés réels.',
    pt: 'Construo produtos inteligentes para mercados reais.',
  } satisfies Localized,

  lede: {
    es: 'Con más de 15 años en tecnología, convierto la inteligencia artificial en productos, alianzas B2B y crecimiento para empresas entre Latinoamérica y Canadá.',
    en: 'With 15+ years in technology, I turn artificial intelligence into products, B2B partnerships and growth for companies across Latin America and Canada.',
    fr: "Fort de plus de 15 ans dans la technologie, je transforme l'intelligence artificielle en produits, en partenariats B2B et en croissance pour des entreprises entre l'Amérique latine et le Canada.",
    pt: 'Com mais de 15 anos em tecnologia, transformo inteligência artificial em produtos, parcerias B2B e crescimento para empresas entre a América Latina e o Canadá.',
  } satisfies Localized,

  stats: [
    { value: '15+', label: { es: 'años creando tecnología', en: 'years building technology', fr: 'ans à créer de la technologie', pt: 'anos criando tecnologia' } },
    { value: '10+', label: { es: 'alianzas B2B cerradas', en: 'B2B partnerships secured', fr: 'partenariats B2B conclus', pt: 'parcerias B2B fechadas' } },
    { value: '25 %', label: { es: 'crecimiento mensual en B2B', en: 'month-over-month B2B growth', fr: 'de croissance B2B mensuelle', pt: 'de crescimento B2B mensal' } },
    { value: '40 %', label: { es: 'menos tiempo de MVP a mercado', en: 'faster MVP to market', fr: 'de délai en moins du MVP au marché', pt: 'menos tempo do MVP ao mercado' } },
  ],

  about: {
    es: [
      'Empecé escribiendo código y hoy me dedico a crear negocios. Uno ambas cosas: entiendo la tecnología a fondo y la pongo al servicio de clientes, socios e inversionistas.',
      'Actualmente soy Lead Architect de Kardot, un ecosistema fintech B2B basado en sistemas multiagente. Antes lideré Estrategia.IA y construí productos de IA para marketplaces, salud y agricultura.',
    ],
    en: [
      'I started out writing code; today I build businesses. I bring both together: I understand technology in depth and put it to work for clients, partners and investors.',
      'I am currently Lead Architect at Kardot, a B2B fintech ecosystem built on multi-agent systems. Before that I led Estrategia.IA and built AI products for marketplaces, healthcare and agriculture.',
    ],
    fr: [
      "J'ai commencé en écrivant du code ; aujourd'hui, je crée des entreprises. J'associe les deux : je comprends la technologie en profondeur et je la mets au service des clients, des partenaires et des investisseurs.",
      "Je suis actuellement Lead Architect chez Kardot, un écosystème fintech B2B fondé sur des systèmes multi-agents. Auparavant, j'ai dirigé Estrategia.IA et créé des produits d'IA pour des places de marché, la santé et l'agriculture.",
    ],
    pt: [
      'Comecei escrevendo código e hoje me dedico a criar negócios. Uno as duas coisas: entendo a tecnologia a fundo e a coloco a serviço de clientes, parceiros e investidores.',
      'Atualmente sou Lead Architect da Kardot, um ecossistema fintech B2B baseado em sistemas multiagente. Antes liderei a Estrategia.IA e construí produtos de IA para marketplaces, saúde e agricultura.',
    ],
  } satisfies Localized<string[]>,

  pillars: [
    {
      title: { es: 'Alianzas B2B', en: 'B2B partnerships', fr: 'Partenariats B2B', pt: 'Parcerias B2B' },
      text: {
        es: 'Diseño modelos de colaboración que abren mercados y reducen costos para ambas partes.',
        en: 'I design partnership models that open markets and cut costs for both sides.',
        fr: 'Je conçois des modèles de partenariat qui ouvrent des marchés et réduisent les coûts des deux côtés.',
        pt: 'Desenho modelos de parceria que abrem mercados e reduzem custos para ambos os lados.',
      },
    },
    {
      title: { es: 'Productos de IA', en: 'AI products', fr: "Produits d'IA", pt: 'Produtos de IA' },
      text: {
        es: 'Llevo ideas a productos en producción: agentes, LLMs y visión por computadora con impacto medible.',
        en: 'I take ideas to production: agents, LLMs and computer vision with measurable impact.',
        fr: "J'amène les idées jusqu'en production : agents, LLM et vision par ordinateur à l'impact mesurable.",
        pt: 'Levo ideias até a produção: agentes, LLMs e visão computacional com impacto mensurável.',
      },
    },
    {
      title: { es: 'Liderazgo y estrategia', en: 'Leadership & strategy', fr: 'Leadership et stratégie', pt: 'Liderança e estratégia' },
      text: {
        es: 'Armo y dirijo equipos, defino la hoja de ruta y conecto la tecnología con los objetivos del negocio.',
        en: 'I build and lead teams, set the roadmap and tie technology to business goals.',
        fr: "Je constitue et dirige des équipes, je fixe la feuille de route et j'aligne la technologie sur les objectifs métier.",
        pt: 'Formo e lidero equipes, defino o roadmap e conecto a tecnologia aos objetivos do negócio.',
      },
    },
  ],

  ventures: [
    {
      name: 'Kardot',
      role: { es: 'Lead Architect · desde 2025', en: 'Lead Architect · since 2025', fr: 'Lead Architect · depuis 2025', pt: 'Lead Architect · desde 2025' },
      description: {
        es: 'Ecosistema fintech B2B multiagente para la interoperabilidad entre empresas.',
        en: 'A multi-agent B2B fintech ecosystem for interoperability between companies.',
        fr: 'Un écosystème fintech B2B multi-agents pour l’interopérabilité entre entreprises.',
        pt: 'Ecossistema fintech B2B multiagente para a interoperabilidade entre empresas.',
      },
      result: {
        es: '10+ alianzas clave y 30 % menos costos de desarrollo.',
        en: '10+ key partnerships and 30% lower development costs.',
        fr: '10+ partenariats clés et 30 % de coûts de développement en moins.',
        pt: '10+ parcerias-chave e 30% menos custos de desenvolvimento.',
      },
      url: '',
    },
    {
      name: 'Estrategia.IA',
      role: { es: 'Líder técnico · 2025', en: 'Technical lead · 2025', fr: 'Responsable technique · 2025', pt: 'Líder técnico · 2025' },
      description: {
        es: 'Motor de IA para la planificación estratégica automatizada de negocios.',
        en: 'An AI engine for automated strategic business planning.',
        fr: 'Un moteur d’IA pour la planification stratégique automatisée des entreprises.',
        pt: 'Motor de IA para o planejamento estratégico automatizado de negócios.',
      },
      result: {
        es: '60 % menos tiempo de planificación y 25 % de crecimiento mensual.',
        en: '60% shorter planning cycles and 25% month-over-month growth.',
        fr: '60 % de temps de planification en moins et 25 % de croissance mensuelle.',
        pt: '60% menos tempo de planejamento e 25% de crescimento mensal.',
      },
      url: '',
    },
    {
      name: 'PlotVision',
      role: { es: 'Investigación y producto', en: 'Research & product', fr: 'Recherche et produit', pt: 'Pesquisa e produto' },
      description: {
        es: 'Plataforma de visión por computadora para big data e investigación agrícola.',
        en: 'A computer vision platform for big data and agricultural research.',
        fr: 'Une plateforme de vision par ordinateur pour le big data et la recherche agricole.',
        pt: 'Plataforma de visão computacional para big data e pesquisa agrícola.',
      },
      result: {
        es: 'Más de 50 TB de datos visuales procesados.',
        en: '50TB+ of visual data processed.',
        fr: 'Plus de 50 To de données visuelles traitées.',
        pt: 'Mais de 50 TB de dados visuais processados.',
      },
      url: '',
    },
  ],

  experience: [
    {
      company: 'Kardot',
      role: { es: 'Lead Architect', en: 'Lead Architect', fr: 'Lead Architect', pt: 'Lead Architect' },
      period: '2025 –',
      highlight: {
        es: 'Plataforma B2B para 10.000 transacciones concurrentes con 99,99 % de disponibilidad.',
        en: 'B2B platform handling 10,000 concurrent transactions at 99.99% uptime.',
        fr: 'Plateforme B2B gérant 10 000 transactions simultanées avec 99,99 % de disponibilité.',
        pt: 'Plataforma B2B com 10.000 transações simultâneas e 99,99% de disponibilidade.',
      },
    },
    {
      company: 'Estrategia.IA',
      role: { es: 'Líder full stack y arquitecto de IA', en: 'Lead Full Stack Developer & AI Architect', fr: 'Lead développeur full stack et architecte IA', pt: 'Líder full stack e arquiteto de IA' },
      period: '2025',
      highlight: {
        es: 'Hoja de ruta de producto con 25 % de crecimiento mensual en clientes B2B.',
        en: 'Product roadmap driving 25% month-over-month B2B growth.',
        fr: 'Feuille de route produit générant 25 % de croissance B2B mensuelle.',
        pt: 'Roadmap de produto com 25% de crescimento B2B mensal.',
      },
    },
    {
      company: 'GoPlay!',
      role: { es: 'Ingeniero de software sénior', en: 'Senior Software Engineer', fr: 'Ingénieur logiciel senior', pt: 'Engenheiro de software sênior' },
      period: '2024 – 2025',
      highlight: {
        es: 'Marketplace con 1.000 jugadores activos y más de 10.000 USD mensuales en reservas.',
        en: 'Marketplace with 1,000 active players and $10k+ in monthly bookings.',
        fr: 'Place de marché avec 1 000 joueurs actifs et plus de 10 000 $ de réservations par mois.',
        pt: 'Marketplace com 1.000 jogadores ativos e mais de US$ 10 mil mensais em reservas.',
      },
    },
    {
      company: 'University of Saskatchewan',
      role: { es: 'Líder de desarrollo de software', en: 'Software Development Leader', fr: 'Responsable du développement logiciel', pt: 'Líder de desenvolvimento de software' },
      period: '2022 – 2023',
      highlight: {
        es: 'IA para asignar recursos médicos: 25 % más de precisión en las citas.',
        en: 'AI for medical resource allocation: 25% more accurate appointments.',
        fr: 'IA d’allocation des ressources médicales : 25 % de précision en plus sur les rendez-vous.',
        pt: 'IA para alocar recursos médicos: 25% mais precisão nas consultas.',
      },
    },
    {
      company: 'Saskatchewan Polytechnic',
      role: { es: 'Docente de IA y Cloud Computing', en: 'Faculty, AI & Cloud Computing', fr: 'Enseignant en IA et cloud computing', pt: 'Professor de IA e Cloud Computing' },
      period: '2021 – 2022',
      highlight: {
        es: '80 % de proyectos exitosos y 25 estudiantes certificados en AWS.',
        en: '80% project success rate and 25 AWS-certified students.',
        fr: '80 % de projets réussis et 25 étudiants certifiés AWS.',
        pt: '80% de projetos bem-sucedidos e 25 alunos certificados em AWS.',
      },
    },
    {
      company: 'Freelance',
      role: { es: 'Soluciones de IA para empresas', en: 'AI Solutions Developer', fr: 'Solutions d’IA pour entreprises', pt: 'Soluções de IA para empresas' },
      period: '2019 – 2021',
      highlight: {
        es: 'Automatización con IA para 5 empresas y 30 % más ingresos para restaurantes.',
        en: 'AI automation for 5 companies and 30% more revenue for restaurants.',
        fr: 'Automatisation par IA pour 5 entreprises et 30 % de revenus en plus pour des restaurants.',
        pt: 'Automação com IA para 5 empresas e 30% mais receita para restaurantes.',
      },
    },
    {
      company: 'University of Saskatchewan',
      role: { es: 'Investigador asociado y líder', en: 'Research Associate & Lead', fr: 'Chercheur associé et responsable', pt: 'Pesquisador associado e líder' },
      period: '2017 – 2019',
      highlight: {
        es: 'Fenotipado de plantas con más de 50 TB de datos y 40 % más eficiencia.',
        en: 'Plant phenotyping over 50TB+ of data with 40% higher efficiency.',
        fr: 'Phénotypage végétal sur plus de 50 To de données, 40 % plus efficace.',
        pt: 'Fenotipagem de plantas com mais de 50 TB de dados e 40% mais eficiência.',
      },
    },
    {
      company: 'Ag Exchange Group',
      role: { es: 'Desarrollador y científico de datos', en: 'Software Developer & Data Scientist', fr: 'Développeur et data scientist', pt: 'Desenvolvedor e cientista de dados' },
      period: '2017',
      highlight: {
        es: 'Clasificación de granos con IA: 20 % más precisión para aseguradoras.',
        en: 'AI grain classification: 20% higher accuracy for insurers.',
        fr: 'Classification des grains par IA : 20 % de précision en plus pour les assureurs.',
        pt: 'Classificação de grãos com IA: 20% mais precisão para seguradoras.',
      },
    },
  ],

  education: [
    {
      title: { es: 'Máster en Ciencias de la Computación (IA)', en: 'Master in Computer Science (AI)', fr: 'Master en informatique (IA)', pt: 'Mestrado em Ciência da Computação (IA)' },
      school: 'Universidad Espíritu Santo (UEES), Ecuador',
    },
    {
      title: { es: 'Diplomado en Ciberseguridad', en: 'Diploma in Cybersecurity', fr: 'Diplôme en cybersécurité', pt: 'Diploma em Cibersegurança' },
      school: 'Tecnológico de Monterrey, México',
    },
    {
      title: { es: 'Licenciatura en Ciencias de la Computación', en: 'Bachelor of Computer Science', fr: 'Licence en informatique', pt: 'Bacharelado em Ciência da Computação' },
      school: 'Universidad de las Fuerzas Armadas, Ecuador',
    },
    {
      title: { es: 'AWS Certified Solutions Architect – Associate', en: 'AWS Certified Solutions Architect – Associate', fr: 'AWS Certified Solutions Architect – Associate', pt: 'AWS Certified Solutions Architect – Associate' },
      school: 'Amazon Web Services, 2022',
    },
  ],

  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/lukaswarce' },
    { label: 'GitHub', url: 'https://github.com/lukaswarce' },
    { label: 'Substack', url: 'https://lukaswarce.substack.com/' },
    { label: 'Instagram', url: 'https://instagram.com/lukaswarce' },
  ],
};
