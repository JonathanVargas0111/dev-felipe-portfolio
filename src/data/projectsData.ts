import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'food4fitness',
    slug: 'food4fitness-meal-prep-platform',
    title: 'Food4Fitness Platform',
    subtitle: 'Custom Meal Builder & Enterprise E-Commerce System',
    category: 'webstark',
    tags: ['WordPress', 'WooCommerce', 'PHP 8', 'Custom Meal Builder', 'Jest', 'APIs'],
    featured: true,
    company: {
      name: 'Web Stark',
      location: 'Sydney, Australia',
      url: 'https://webstark.com.au',
      isOwner: false,
      role: 'Lead Full-Stack Plugin Engineer (at Web Stark)',
      commitsCount: 1596,
    },
    overview: {
      en: 'Enterprise-grade WooCommerce plugin and custom order engine powering a leading Australian fitness meal prep company.',
      es: 'Motor de pedidos personalizado y plugin empresarial para una compañía líder australiana de meal prep.',
    },
    challenge: {
      en: 'The client needed to migrate 27 legacy Go/Angular systems into WordPress/WooCommerce without losing custom business logic: variable gram-level macro calculations, complex delivery schedules with state-specific holiday cutoffs, and post-purchase order modifications.',
      es: 'Migración de 27 sistemas legacy (Go/Angular) a WordPress/WooCommerce preservando lógica de negocio crítica: cálculo de macros gramo a gramo, cutoffs de entrega por estado con paridad de feriados, y edición de pedidos post-compra con validación de horarios límite.',
    },
    solution: {
      en: 'Architected a modular WordPress plugin adhering to Atomic Design principles. Built a reactive Custom Meal Builder that computes macros dynamically, a resilient Delivery Zone Service with holiday cutoff rules, and a secure order editing workflow with automated Jest unit testing.',
      es: 'Diseño de arquitectura modular bajo Atomic Design y Service Layer. Construcción del Meal Builder reactivo con cálculo dinámico de macros, servicio de zonas de entrega con calendario de feriados, y flujo seguro de edición de pedidos respaldado por tests unitarios en Jest.',
    },
    keyFeatures: {
      en: [
        'Custom Meal Builder with real-time gram-to-macro nutrition calculation',
        'Multi-zone delivery scheduling engine with state-specific cutoffs & holidays',
        'Post-purchase order modification system with strict cutoff deadline guards',
        'Dynamic cart drawer with live upsells and beverage pack volume discounts',
        'Admin ERP dashboard with Routific logistics route optimization and CSV sync',
        'Comprehensive Jest test suite covering all pricing and nutrition calculation edge cases',
      ],
      es: [
        'Constructor de comidas personalizadas con cálculo instantáneo de macros por gramo',
        'Motor de delivery multizona con cutoffs por estado, días de buffer y feriados',
        'Sistema de edición de pedidos post-compra con validación de cutoffs en tiempo real',
        'Cart drawer dinámico con descuentos por volumen en packs de bebidas',
        'Panel administrativo con integración Routific para optimización de rutas y sync CSV',
        'Suite completa de pruebas en Jest para cálculos de nutrición y precios',
      ],
    },
    architectureHighlights: {
      en: [
        'Centralized Service Layer (`includes/services/`) isolating all calculation logic from UI components',
        'Frontend sends IDs only; backend securely calculates 100% of prices and macro totals from database',
        'Strict WooCommerce template overrides preserving core update safety',
        'Zero-downtime migration of 27 distinct operational workflows from legacy stack',
      ],
      es: [
        'Capa de servicios centralizada (`includes/services/`) aislando lógica de negocio de la UI',
        'Frontend envía exclusivamente IDs; el backend calcula el 100% de precios y macros desde BD',
        'Overrides limpios de plantillas WooCommerce garantizando compatibilidad con actualizaciones',
        'Migración sin interrupciones de 27 flujos operativos del sistema legacy anterior',
      ],
    },
    metrics: [
      { label: 'Commits Contributed', value: '1,596' },
      { label: 'Legacy Systems Migrated', value: '27' },
      { label: 'Macro Calculation Accuracy', value: '100%' },
      { label: 'Unit Test Coverage', value: 'Jest Suites' },
    ],
    technologies: ['PHP 8.2', 'WordPress', 'WooCommerce', 'JavaScript', 'SCSS', 'Jest', 'Google Maps API', 'Routific API', 'Ontraport'],
    links: {
      isPrivate: true,
      demo: 'https://food4fitness.com.au',
    },
    image: '/img/portfolio/theTrickets.png',
    mockupType: 'dashboard',
    year: '2025 - 2026',
    period: 'Sep 2025 – Feb 2026',
  },
  {
    id: 'webstark-corporate',
    slug: 'webstark-headless-corporate-platform',
    title: 'WebStark Headless Platform',
    subtitle: 'Next.js 15 + WPGraphQL Corporate Architecture',
    category: 'webstark',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Core Web Vitals'],
    featured: true,
    company: {
      name: 'Web Stark',
      location: 'Sydney, Australia',
      url: 'https://webstark.com.au',
      isOwner: false,
      role: 'Lead Frontend Engineer (at Web Stark)',
      commitsCount: 349,
    },
    overview: {
      en: 'High-performance headless corporate web platform achieving sub-second loads and seamless client conversion.',
      es: 'Plataforma web corporativa headless de alto rendimiento diseñada para maximizar la conversión y velocidad de carga.',
    },
    challenge: {
      en: 'Deliver an ultra-fast headless web presence supporting dynamic content management in WordPress while achieving sub-second LCP, zero CLS, and seamless interactive portfolio filtering without client-side hydration bottlenecks.',
      es: 'Crear una presencia web headless ultra rápida administrada desde WordPress, alcanzando LCP sub-segundo, cero CLS y filtrado dinámico en portafolio sin penalizaciones de hidratación en el cliente.',
    },
    solution: {
      en: 'Implemented Incremental Static Regeneration (ISR) and static page pre-rendering. Extracted critical CSS using Critters, built dynamic Framer Motion loaders, and designed a custom CDN image pipeline with responsive size descriptors.',
      es: 'Implementación de ISR y pre-renderizado estático. Extracción de CSS crítico mediante Critters, imports dinámicos de animaciones Framer Motion y pipeline de optimización de imágenes con descriptores de tamaño responsive.',
    },
    keyFeatures: {
      en: [
        'Static generation of 100+ dynamic service, location, and case study pages',
        'Interactive portfolio with URL-synchronized category filters and infinite scroll',
        'Comprehensive technical SEO: dynamic JSON-LD schema, styled XML sitemaps, and GSC validation',
        'Gravity Forms API v2 integration with lazy-loaded reCAPTCHA and Formspree fallback',
        'Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS)',
      ],
      es: [
        'Generación estática de más de 100 páginas de servicios, ubicaciones y estudios de caso',
        'Portafolio interactivo con filtros sincronizados con URL y scroll infinito con IntersectionObserver',
        'SEO técnico integral: schema JSON-LD dinámico, sitemap XML estilizado y validación GSC',
        'Integración de Gravity Forms API v2 con reCAPTCHA lazy-loaded y fallback resiliente',
        'LCP sub-segundo y cero desplazamiento acumulado de diseño (CLS)',
      ],
    },
    architectureHighlights: {
      en: [
        'Strict separation of UI components and GraphQL query fragments',
        'Custom image loader bypassing unoptimized external asset bottlenecks',
        'Tailwind CSS design tokens for unified spacing and typography hierarchy',
      ],
      es: [
        'Separación estricta entre componentes de presentación y fragmentos de consulta GraphQL',
        'Loader personalizado de imágenes optimizando entrega desde CDN',
        'Sistema de diseño con tokens Tailwind CSS para consistencia tipográfica y espacial',
      ],
    },
    metrics: [
      { label: 'Commits Contributed', value: '349' },
      { label: 'Static Pages Built', value: '100+' },
      { label: 'Core Web Vitals', value: 'Sub-second LCP' },
      { label: 'SEO Architecture', value: 'JSON-LD + XML' },
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'WordPress GraphQL', 'Framer Motion', 'Critters', 'Vercel'],
    links: {
      live: 'https://webstark.com.au',
    },
    image: '/img/bg-felipevargas.png',
    mockupType: 'browser',
    year: '2025',
    period: 'Mar 2025 – Aug 2025',
  },
  {
    id: 'mx-modules-proposals',
    slug: 'mx-modules-saas-and-proposals-addon',
    title: 'MX Modules & Proposals Suite',
    subtitle: 'Commercial SaaS Platform & WHMCS E-Signature Addon',
    category: 'webstark',
    tags: ['PHP 8', 'WHMCS API', 'Next.js 15', 'Velite MDX', 'Security Hardening', 'Freemium'],
    featured: true,
    company: {
      name: 'Web Stark',
      location: 'Sydney, Australia',
      url: 'https://webstark.com.au',
      isOwner: false,
      role: 'Full-Stack & Systems Developer (at Web Stark)',
      commitsCount: 362,
    },
    overview: {
      en: 'Commercial WHMCS addon product suite featuring e-signatures, payment plans, and a high-converting marketing platform.',
      es: 'Suite de addons comerciales para WHMCS con firma electrónica, planes de pago y plataforma de marketing de alta conversión.',
    },
    challenge: {
      en: 'Build a secure, enterprise-grade proposal and billing addon for WHMCS with dual Free/Pro distribution builds, server-side license verification, and complete defense against tampering, while creating a high-converting MDX-powered marketing engine.',
      es: 'Desarrollar un addon comercial robusto para WHMCS con separación de builds Free/Pro, validación de licencias server-side, hardening de seguridad contra manipulaciones y una plataforma de marketing con MDX orientada a SEO y AEO.',
    },
    solution: {
      en: 'Created an automated build stripper using `@pro-start/@pro-end` tokens for Free/Pro packaging. Implemented cryptographic license phone-home checks, responsive client-facing proposal viewing with canvas signature pad, and a Velite-based MDX blog optimized for AI search engine answer engines (AEO/GEO).',
      es: 'Creación de sistema automatizado de stripping de código para builds Free y Pro. Verificación criptográfica de licencias con heartbeat, visor de propuestas responsivo con firma electrónica en canvas y blog en Velite con optimización para motores de respuesta de IA (AEO).',
    },
    keyFeatures: {
      en: [
        'Interactive dynamic proposals with milestone percentage payment plans and automated deposits',
        'Freemium build pipeline with automated server-side code stripping and license enforcement',
        'Client-side responsive proposal viewer with PDF export, video embeds, and canvas e-signatures',
        'Rigorous security hardening across SEC-1 to SEC-12 vulnerability benchmarks',
        'Velite + MDX technical blog with 15+ articles achieving a 97%+ Answer Engine Optimization score',
      ],
      es: [
        'Propuestas dinámicas interactivas con planes de pago por hitos y depósitos inteligentes',
        'Pipeline de empaquetado Freemium con stripping de código server-side y validación Pro',
        'Visor de propuestas responsive con exportación PDF, videos embebidos y firma digital en canvas',
        'Hardening de seguridad riguroso contra auditoría de vulnerabilidades SEC-1 a SEC-12',
        'Blog técnico en Velite + MDX con más de 15 artículos alcanzando 97%+ de score en AEO',
      ],
    },
    architectureHighlights: {
      en: [
        'Decoupled business logic from WHMCS presentation layers via MVC structure',
        'Heartbeat telemetry system for phone-home validation of free and pro installations',
        'Structured schema markup (`Organization`, `FAQPage`, `SoftwareApplication`, `llms.txt`)',
      ],
      es: [
        'Desacoplamiento de lógica de negocio respecto a capas de vista de WHMCS con MVC',
        'Telemetría heartbeat para monitoreo de instalaciones activas Free y Pro',
        'Marcado estructurado completo (`SoftwareApplication`, `FAQPage`, `llms.txt`)',
      ],
    },
    metrics: [
      { label: 'Total Commits', value: '362' },
      { label: 'Security Benchmarks', value: 'SEC-1 to 12 Passed' },
      { label: 'AEO / SEO Score', value: '97%+' },
      { label: 'Build Pipeline', value: 'Automated Free/Pro' },
    ],
    technologies: ['PHP 8.2', 'WHMCS API', 'Next.js 15', 'React 19', 'Velite', 'MDX', 'Tailwind CSS 4', 'Smarty', 'MySQL', 'Chart.js'],
    links: {
      isPrivate: true,
      demo: 'https://webstark.com.au',
    },
    image: '/img/portfolio/ask-and-create.png',
    mockupType: 'dashboard',
    year: '2025 - 2026',
    period: 'Aug 2025 – Feb 2026',
  },
  {
    id: 'nandark-lab',
    slug: 'nandark-technical-publication-and-ai-tools',
    title: 'Nandark Lab & Platform',
    subtitle: 'Technical Publication, AI Search Research & Web Utilities',
    category: 'personal',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Velite MDX', 'AEO/GEO', 'AI Research'],
    featured: true,
    overview: {
      en: 'Personal technical publication and laboratory exploring AI-era SEO, Answer Engine Optimization (AEO), and developer tooling.',
      es: 'Publicación técnica personal explorando el SEO en la era de la IA (AEO/GEO) y el desarrollo de herramientas de código abierto.',
    },
    challenge: {
      en: 'Create a high-speed, modern publishing and utility platform to research how modern AI search engines (ChatGPT Search, Perplexity, Google AI Overviews) index and synthesize web content.',
      es: 'Diseñar una plataforma de publicación y herramientas de alta velocidad para investigar e implementar cómo los motores de búsqueda con IA procesan y citan contenidos estructurados.',
    },
    solution: {
      en: 'Built an ultra-lightweight Next.js 15 / React 19 architecture using Velite and MDX with schema markup generators, `llms.txt` specifications, automated SEO/AEO validation tools, and a bilingual design system.',
      es: 'Arquitectura ultra ligera en Next.js 15 y React 19 utilizando Velite y MDX con generadores de schema markup, soporte para estándar `llms.txt`, validadores automatizados de SEO/AEO y sistema de diseño bilingüe.',
    },
    keyFeatures: {
      en: [
        '39+ published technical deep dives on SEO, AI architectures, and developer tooling',
        'Custom built-in SEO Validator and AEO (Answer Engine Optimization) analysis tools',
        'Zero-CLS typography system with dark/light theme switching and syntax highlighting',
        'Optimized for AI crawler indexing with clean semantic HTML and `llms.txt` integration',
      ],
      es: [
        'Más de 39 artículos técnicos publicados sobre SEO, arquitecturas de IA y herramientas de desarrollo',
        'Herramientas web integradas: Validador SEO y Analizador de AEO (Answer Engine Optimization)',
        'Tipografía con cero CLS, cambio de tema oscuro/claro y resaltado de sintaxis de código',
        'Optimización nativa para indexación de crawlers de IA con marcado semántico y `llms.txt`',
      ],
    },
    architectureHighlights: {
      en: [
        'Type-safe MDX content pipeline powered by Velite with custom Rehype/Remark plugins',
        'Sub-50ms Time to First Byte (TTFB) on edge delivery',
        'Self-contained modular utilities requiring zero external database overhead',
      ],
      es: [
        'Pipeline de contenido MDX con seguridad de tipos impulsado por Velite',
        'Tiempo de respuesta (TTFB) inferior a 50ms en red de borde (Edge)',
        'Herramientas modulares autocontenidas sin sobrecarga de bases de datos externas',
      ],
    },
    metrics: [
      { label: 'Published Technical Articles', value: '39+' },
      { label: 'Performance Score', value: '100 / 100' },
      { label: 'Built-in Tools', value: 'SEO & AEO Validators' },
      { label: 'Search Engine Readiness', value: 'AEO / GEO Native' },
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Velite', 'MDX', 'Framer Motion', 'Critters'],
    links: {
      live: 'https://nandark.com',
      demo: 'https://nandark.com/blog',
    },
    image: '/img/portfolio/the-trickets.png',
    mockupType: 'browser',
    year: '2025 - Present',
    period: 'Personal Lab & Venture',
  },
  {
    id: 'youtube-transcript-ai',
    slug: 'youtube-transcript-ai-summarizer',
    title: 'YouTube Transcript & AI Summarizer',
    subtitle: 'Privacy-First Chrome Extension & Local AI Integration',
    category: 'personal',
    tags: ['Chrome Extension', 'Manifest V3', 'JavaScript', 'Ollama API', 'Local AI', 'Open Source'],
    featured: true,
    overview: {
      en: 'Privacy-focused Chromium extension for instant YouTube transcript extraction and local AI summarization.',
      es: 'Extensión para navegadores enfocada en privacidad para extracción instantánea de transcripciones y resúmenes con IA local.',
    },
    challenge: {
      en: 'Most transcript summarizers send user viewing data to third-party cloud servers and require paid API subscriptions. Felipe needed an instantaneous, 100% local, privacy-respecting workflow for dev research.',
      es: 'La mayoría de herramientas de transcripción envían datos a servidores de terceros y requieren suscripciones pagas. Se requería una solución instantánea, 100% local y privada para investigación técnica.',
    },
    solution: {
      en: 'Built an efficient Content Script adhering to Chrome Manifest V3 service workers. Added clipboard formatters (Markdown, Plain Text, Timestamps) and a direct JSON API bridge to local Ollama LLM instances (Llama 3 / Mistral).',
      es: 'Desarrollo de Content Scripts optimizados bajo Manifest V3 y Service Workers. Formateadores para portapapeles (Markdown, Texto plano, Timestamps) y conexión directa vía API a modelos locales de Ollama.',
    },
    keyFeatures: {
      en: [
        'Instant one-click transcript extraction directly from YouTube video player',
        'Multiple export formats: Clean Markdown, Raw Text, and Timestamped Study Notes',
        'Direct local AI integration with Ollama (Llama 3, Mistral, Gemma) running on localhost',
        'Zero telemetry, zero external tracking, 100% offline capability',
      ],
      es: [
        'Extracción instantánea de transcripciones con un solo clic en el reproductor de YouTube',
        'Formatos de exportación: Markdown limpio, Texto plano y Notas con marcas de tiempo',
        'Integración directa con modelos locales vía Ollama (Llama 3, Mistral, Gemma)',
        'Cero telemetría, cero tracking externo, funcionalidad 100% privada y local',
      ],
    },
    architectureHighlights: {
      en: [
        'Chrome Manifest V3 compliance with background service worker architecture',
        'Asynchronous DOM mutation observers for reliable player button injection',
        'Streaming local API response handling without UI blocking',
      ],
      es: [
        'Arquitectura basada en Service Workers cumpliendo el estándar Manifest V3',
        'MutationObservers asíncronos para inyección limpia de botones en el reproductor',
        'Manejo de respuestas de API local en streaming sin bloquear la interfaz',
      ],
    },
    metrics: [
      { label: 'Browser Standard', value: 'Manifest V3' },
      { label: 'Privacy Rating', value: '100% Local' },
      { label: 'AI Backend', value: 'Ollama Integration' },
      { label: 'Speed', value: '< 200ms Extraction' },
    ],
    technologies: ['JavaScript ES6+', 'Chrome Extension API (MV3)', 'HTML5/CSS3', 'Ollama API', 'Markdown Parsers'],
    links: {
      github: 'https://github.com/JonathanVargas0111',
    },
    image: '/img/portfolio/retos-front-end.png',
    mockupType: 'extension',
    year: '2025',
    period: 'Personal Tool',
  },
  {
    id: 'whmcs-docker-and-metrics',
    slug: 'whmcs-modular-docker-metrics',
    title: 'WHMCS Modular Docker & Metrics',
    subtitle: 'Containerized Development Architecture & Financial Widgets',
    category: 'webstark',
    tags: ['Docker', 'Docker Compose', 'PHP 8.2', 'MySQL', 'WHMCS', 'DevOps'],
    featured: false,
    company: {
      name: 'Web Stark',
      location: 'Sydney, Australia',
      url: 'https://webstark.com.au',
      isOwner: false,
      role: 'DevOps & Backend Engineer (at Web Stark)',
      commitsCount: 87,
    },
    overview: {
      en: 'Modular containerized environment and financial executive dashboard tracking real-time agency MRR.',
      es: 'Entorno Docker modular y panel financiero ejecutivo para seguimiento de MRR en tiempo real de la agencia.',
    },
    challenge: {
      en: 'Setting up local WHMCS development environments was historically slow and prone to OS discrepancies. Additionally, agency leadership needed real-time visibility into MRR, client support churn, and profitability.',
      es: 'La configuración de entornos locales de WHMCS era lenta y dependiente de configuraciones del SO. Además, se requería visibilidad en tiempo real de MRR, costos fijos y rentabilidad por cliente.',
    },
    solution: {
      en: 'Engineered a reproducible Docker Compose environment with Apache, PHP 8.2, MySQL, and automated license injection. Built 5 financial widgets calculating MRR, customer support load, and cost breakdowns with self-healing DB schemas.',
      es: 'Entorno Docker Compose reproducible con Apache, PHP 8.2, MySQL e inyección de licencias. Desarrollo de 5 widgets financieros con cálculo de MRR, carga de soporte y guardianes de esquema con auto-reparación.',
    },
    keyFeatures: {
      en: [
        'Instant zero-config local WHMCS setup via Docker Compose and bind mounts',
        '5 Financial widgets: MRR, High-Support Clients, Recurring Revenue, Cost Breakdown & Profit Margin',
        'Self-healing DB schema migration guardians preventing corrupt local states',
        'Configurable service-level cost overrides and fixed operating expense allocation',
      ],
      es: [
        'Levantamiento local inmediato de WHMCS mediante Docker Compose y bind mounts',
        '5 widgets financieros: MRR, Clientes de alto soporte, Revenue recurrente, Desglose de costos y Margen de ganancia',
        'Guardianes de base de datos con auto-reparación para evitar estados locales corruptos',
        'Gestión de costos por servicio y asignación de gastos fijos para cálculo de rentabilidad',
      ],
    },
    architectureHighlights: {
      en: [
        'Live host-to-container volume syncing enabling instant hot-reloading during addon coding',
        'Lightweight SQL query caching layer reducing dashboard query load by over 70%',
      ],
      es: [
        'Sincronización en vivo de volúmenes permitiendo recarga instantánea durante desarrollo',
        'Capa ligera de caché para consultas SQL reduciendo la carga del dashboard en más del 70%',
      ],
    },
    metrics: [
      { label: 'Commits Contributed', value: '87' },
      { label: 'Financial Widgets', value: '5 Real-Time KPIs' },
      { label: 'Setup Time Reduction', value: 'From 2h to 2min' },
    ],
    technologies: ['Docker', 'Docker Compose', 'PHP 8.2', 'MySQL', 'Apache', 'WHMCS', 'Shell Scripting'],
    links: {
      isPrivate: true,
    },
    image: '/img/portfolio/digital-art.png',
    mockupType: 'code',
    year: '2025 - 2026',
    period: 'Web Stark Internal',
  },
  {
    id: 'ai-seo-framework-mcp',
    slug: 'ai-seo-framework-and-mcp-server',
    title: 'AI SEO Audit Engine & MCP Server',
    subtitle: 'Automated 6-Phase SEO Audits & Natural Language Database Bridge',
    category: 'webstark',
    tags: ['Python', 'Model Context Protocol (MCP)', 'Claude Code', 'Trafilatura', 'AI Automation'],
    featured: false,
    company: {
      name: 'Web Stark',
      location: 'Sydney, Australia',
      url: 'https://webstark.com.au',
      isOwner: false,
      role: 'AI & Automation Developer (at Web Stark)',
      commitsCount: 83,
    },
    overview: {
      en: 'Automated 6-phase SEO audit engine and natural language database bridge powered by AI and Python.',
      es: 'Motor de auditoría SEO automatizado de 6 fases y puente a base de datos en lenguaje natural impulsado por IA.',
    },
    challenge: {
      en: 'Manual technical SEO audits for agency clients took 8+ hours per site. Meanwhile, non-technical managers needed instant insights from client databases without writing manual SQL queries.',
      es: 'Las auditorías SEO manuales requerían más de 8 horas por cliente. A su vez, los administradores necesitaban consultar métricas de clientes y servicios sin redactar consultas SQL complejas.',
    },
    solution: {
      en: 'Built an end-to-end Python scraping and similarity detection engine combined with custom Claude Code audit skills. Developed a secure Node/PHP MCP server with token authentication for Claude Desktop.',
      es: 'Desarrollo de motor en Python con Trafilatura y análisis de similaridad semántica, coordinado por skills personalizados de Claude Code. Creación del servidor MCP con autenticación por token para Claude Desktop.',
    },
    keyFeatures: {
      en: [
        '6-Phase automated audit pipeline: local caching → technical SEO → competitor gap → delivery',
        'Python similarity scoring script detecting internal content duplication and cannibalization',
        'Model Context Protocol (MCP) server enabling natural language queries over WHMCS data',
        '7+ live agency client audits completed with automated executive email deliverables',
      ],
      es: [
        'Pipeline automatizado en 6 fases: caché local → SEO técnico → análisis de competidores → entrega',
        'Script en Python de cálculo de similaridad para detección de canibalización de contenido',
        'Servidor Model Context Protocol (MCP) para consultas en lenguaje natural sobre WHMCS',
        'Más de 7 auditorías completadas para clientes reales de la agencia con reportes ejecutivos',
      ],
    },
    architectureHighlights: {
      en: [
        'Local file-based caching avoiding repetitive crawler bandwidth on client domains',
        'Strict token authorization and read-only database query isolation on the MCP server',
      ],
      es: [
        'Caché local basada en archivos para evitar saturación de peticiones a sitios de clientes',
        'Aislamiento de consultas en modo solo lectura y autenticación por tokens en el servidor MCP',
      ],
    },
    metrics: [
      { label: 'Commits Contributed', value: '83' },
      { label: 'Audit Time Reduction', value: '80% Faster' },
      { label: 'Agency Clients Audited', value: '7+ Accounts' },
    ],
    technologies: ['Python 3', 'Trafilatura', 'Model Context Protocol (MCP)', 'Claude Code Skills', 'Node.js', 'PHP'],
    links: {
      isPrivate: true,
    },
    image: '/img/portfolio/portfolio-cristian-desktop.png',
    mockupType: 'code',
    year: '2026',
    period: 'Web Stark Internal',
  },
  {
    id: 'johanna-skincare',
    slug: 'johanna-skincare-digital-experience',
    title: 'Johanna Skincare Experience',
    subtitle: 'High-Converting Digital Platform & Aesthetic UI',
    category: 'client',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Conversion Optimization'],
    featured: false,
    overview: {
      en: 'High-converting aesthetic digital platform designed for rapid booking flow and premium brand storytelling.',
      es: 'Plataforma digital de estética diseñada para alta conversión y presencia de marca premium.',
    },
    challenge: {
      en: 'The client needed a digital storefront that reflected high-end clinical aesthetic standards while keeping interaction friction minimal on mobile devices.',
      es: 'La clienta requería una presencia digital que transmitiera sofisticación y confianza médica, con navegación sin fricción en dispositivos móviles.',
    },
    solution: {
      en: 'Crafted a bespoke visual system with soft micro-interactions, responsive booking CTAs, and a performance-optimized Next.js architecture.',
      es: 'Diseño de un sistema visual elegante con micro-interacciones suaves, llamados a la acción de reserva claros y arquitectura Next.js optimizada.',
    },
    keyFeatures: {
      en: [
        'Fluid responsive layout designed mobile-first for Instagram traffic',
        'Micro-animations that emphasize premium product and service quality',
        'Direct WhatsApp and appointment booking integrations',
      ],
      es: [
        'Diseño responsive fluido optimizado mobile-first para tráfico proveniente de redes sociales',
        'Micro-animaciones que destacan la calidad de los tratamientos y productos',
        'Integración directa con WhatsApp y agenda de reservas',
      ],
    },
    architectureHighlights: {
      en: [
        'Zero third-party script bloat ensuring sub-second initial visual render',
      ],
      es: [
        'Cero scripts innecesarios de terceros garantizando renderizado inicial en menos de un segundo',
      ],
    },
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Mobile Optimization', value: '100% Fluid' },
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    links: {
      live: 'https://johanna-skincare.vercel.app',
    },
    image: '/img/portfolio/imgDigitalArt.png',
    mockupType: 'browser',
    year: '2024',
    period: 'Freelance Client',
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: 'webstark',
    period: 'Mar 2025 — Present',
    role: {
      en: 'Full-Stack Developer',
      es: 'Desarrollador Full-Stack',
    },
    company: 'Web Stark',
    location: 'Sydney, Australia (Remote)',
    type: 'full-time',
    description: {
      en: 'Core engineer across 11 production projects contributing ~2,500 commits in 10 months. Responsible for enterprise WordPress/WooCommerce plugin development, Next.js headless web applications, commercial WHMCS addons, Docker architectures, and automated AI workflows.',
      es: 'Desarrollador principal en 11 proyectos en producción con ~2,500 commits en 10 meses. Responsable de desarrollo de plugins empresariales en WordPress/WooCommerce, aplicaciones headless en Next.js, addons comerciales para WHMCS, arquitectura Docker y automatización con IA.',
    },
    achievements: {
      en: [
        'Engineered the Food4Fitness WooCommerce plugin (1,596 commits), implementing a custom macro meal builder, delivery cutoff rules, and migrating 27 legacy systems',
        'Built the WebStark.com.au headless site with Next.js 15, React 19, TypeScript, and WPGraphQL with 100+ statically generated pages and optimized Core Web Vitals',
        'Developed 5 commercial WHMCS addons (Proposals, Metrics, Licenses, MCP Server, Notifications) with freemium tiering and SEC-1..12 security hardening',
        'Designed modular Docker development environments with bind mounts, drastically cutting setup time for team members',
        'Created a 6-phase automated SEO audit engine using Claude Code skills and Python similarity analysis for 7+ agency clients',
      ],
      es: [
        'Desarrollo del plugin Food4Fitness para WooCommerce (1,596 commits): meal builder de macros, motor de cutoffs de delivery y migración de 27 sistemas legacy',
        'Construcción del sitio headless WebStark.com.au con Next.js 15, React 19, TypeScript y WPGraphQL: 100+ páginas estáticas y Core Web Vitals optimizados',
        'Desarrollo de 5 addons comerciales para WHMCS (Proposals, Metrics, Licenses, MCP, Notifications) con modelo freemium y hardening de seguridad SEC-1..12',
        'Diseño de arquitectura Docker modular con bind mounts, reduciendo drásticamente el tiempo de onboarding del equipo',
        'Creación de framework de auditoría SEO automatizada en 6 fases con Claude Code skills y Python para más de 7 clientes reales',
      ],
    },
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'PHP 8.2', 'WordPress', 'WooCommerce', 'WHMCS API', 'Docker', 'GraphQL', 'Python', 'MCP', 'Tailwind CSS 4'],
    link: 'https://webstark.com.au',
  },
  {
    id: 'freelance',
    period: 'Jan 2024 — Feb 2025',
    role: {
      en: 'Independent Web Developer & Consultant',
      es: 'Desarrollador Web Independiente & Consultor',
    },
    company: 'Freelance & Nandark Lab',
    location: 'Bogotá / Remote',
    type: 'freelance',
    description: {
      en: 'Built bespoke web applications, e-commerce storefronts, and performance audits for independent clients while conducting technical research into Answer Engine Optimization (AEO) and AI search indexing.',
      es: 'Desarrollo de aplicaciones web a medida, tiendas online y auditorías de rendimiento para clientes particulares, junto con la investigación técnica en optimización para motores de respuesta con IA (AEO).',
    },
    achievements: {
      en: [
        'Delivered responsive web applications using Next.js, React, and Tailwind CSS with 95+ Lighthouse performance scores',
        'Published 39+ technical articles on SEO, AI architectures, and Core Web Vitals at nandark.com',
        'Created the YouTube Transcript Copy browser extension with local Ollama AI summarization',
      ],
      es: [
        'Entrega de aplicaciones web responsivas con Next.js, React y Tailwind CSS logrando puntuaciones Lighthouse de 95+',
        'Publicación de más de 39 artículos técnicos sobre SEO, arquitecturas de IA y Core Web Vitals en nandark.com',
        'Creación de la extensión para navegador YouTube Transcript Copy con resúmenes vía IA local (Ollama)',
      ],
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Chrome Extension APIs', 'Ollama API'],
    link: 'https://nandark.com',
  },
  {
    id: 'accenture',
    period: 'Jun 2019 — Nov 2019',
    role: {
      en: 'Database & Infrastructure Analyst (Internship)',
      es: 'Analista de Bases de Datos e Infraestructura (Prácticas)',
    },
    company: 'Accenture',
    location: 'Bogotá, Colombia',
    type: 'internship',
    description: {
      en: 'Professional internship analyzing technological infrastructure inventories, internal tooling development with Node.js/Express, and data modeling for cloud migration strategies.',
      es: 'Prácticas profesionales enfocadas en consolidación de inventarios de infraestructura tecnológica, desarrollo de herramientas internas en Node.js/Express y modelado de datos para migración a la nube.',
    },
    achievements: {
      en: [
        'Consolidated enterprise infrastructure inventories and generated analytical dashboards for migration decision-making',
        'Developed internal backend utilities with Node.js and Express to automate recurring operational reports',
        'Participated in feasibility analyses for migrating on-premise server clusters to cloud environments',
      ],
      es: [
        'Consolidación de inventarios de infraestructura tecnológica y generación de paneles analíticos para toma de decisiones',
        'Desarrollo de utilidades internas backend en Node.js y Express para automatizar reportes operativos recurrentes',
        'Participación en análisis técnicos para migración de servidores on-premise a entornos en la nube',
      ],
    },
    technologies: ['Node.js', 'Express', 'SQL', 'Database Architecture', 'Cloud Migration Analysis', 'Infra Monitoring'],
  },
  {
    id: 'education-degree',
    period: '2017 — 2022',
    role: {
      en: 'B.S. in Systems Engineering (Ingeniería de Sistemas)',
      es: 'Ingeniería de Sistemas',
    },
    company: 'Corporación Universitaria Minuto de Dios (UNIMINUTO)',
    location: 'Bogotá, Colombia',
    type: 'education',
    description: {
      en: '5-year professional degree covering software engineering, data structures, object-oriented design, database architecture, distributed systems, and computer networks.',
      es: 'Carrera profesional de 5 años cubriendo ingeniería de software, estructuras de datos, diseño orientado a objetos, arquitectura de bases de datos, sistemas distribuidos y redes.',
    },
    achievements: {
      en: [
        'Graduated with solid foundations in software architecture and algorithms',
        'Completed 80 hours of voluntary systems tutoring for senior citizens (UNIMINUTO Community Program, 2017)',
      ],
      es: [
        'Graduado con sólidas bases en arquitectura de software y algoritmia',
        '80 horas de voluntariado como tutor de computación para adultos mayores (Programa Comunitario UNIMINUTO, 2017)',
      ],
    },
    technologies: ['Software Architecture', 'Data Structures', 'OOP', 'SQL & Relational Databases', 'Algorithms', 'Computer Networks'],
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend & Modern Web',
      es: 'Frontend & Web Moderna',
    },
    iconName: 'Layout',
    description: {
      en: 'Building reactive, accessible, and ultra-fast user interfaces with modern React frameworks.',
      es: 'Construcción de interfaces reactivas, accesibles y ultra rápidas con el ecosistema moderno de React.',
    },
    skills: [
      { name: 'Next.js 15 / App Router', level: 'Expert', highlight: 'SSR, SSG, ISR & Server Components' },
      { name: 'React 19 & TypeScript', level: 'Expert', highlight: 'Type-safe hooks, state & custom UI' },
      { name: 'Tailwind CSS 4 & SCSS', level: 'Expert', highlight: 'Design systems, tokens & BEM' },
      { name: 'Framer Motion', level: 'Advanced', highlight: 'Fluid micro-interactions & layout transitions' },
      { name: 'MDX & Velite', level: 'Advanced', highlight: 'Content-driven architectures & headless blogs' },
    ],
  },
  {
    id: 'backend-cms',
    title: {
      en: 'Backend, WordPress & E-Commerce',
      es: 'Backend, WordPress & E-Commerce',
    },
    iconName: 'Server',
    description: {
      en: 'Architecting custom plugins, APIs, secure business logic, and commercial integrations.',
      es: 'Arquitectura de plugins personalizados, APIs, lógica de negocio segura e integraciones comerciales.',
    },
    skills: [
      { name: 'PHP 8.2+ & OOP', level: 'Expert', highlight: 'Clean service layer & design patterns' },
      { name: 'WordPress Custom Plugins', level: 'Expert', highlight: 'CPTs, Custom REST APIs & Admin Panels' },
      { name: 'WooCommerce Core Customization', level: 'Expert', highlight: 'Custom Meal Builders, checkouts & hooks' },
      { name: 'WHMCS Addon Architecture', level: 'Expert', highlight: 'Freemium gating, APIs & e-signatures' },
      { name: 'Node.js & GraphQL', level: 'Advanced', highlight: 'Headless WPGraphQL, Express & NestJS basics' },
      { name: 'MySQL & Relational DBs', level: 'Advanced', highlight: 'Schema design, indexing & migrations' },
    ],
  },
  {
    id: 'ai-automation',
    title: {
      en: 'AI, MCP & Automation',
      es: 'IA, MCP & Automatización',
    },
    iconName: 'Cpu',
    description: {
      en: 'Integrating Large Language Models, agentic workflows, Model Context Protocol, and search optimization.',
      es: 'Integración de Modelos de Lenguaje, flujos agénticos, Model Context Protocol y optimización de búsqueda.',
    },
    skills: [
      { name: 'Model Context Protocol (MCP)', level: 'Advanced', highlight: 'Custom servers connecting databases to Claude' },
      { name: 'Claude Code Skills & Agents', level: 'Expert', highlight: '10+ custom automated audit & dev skills' },
      { name: 'Python Automation', level: 'Advanced', highlight: 'Trafilatura scraping & semantic similarity' },
      { name: 'AEO & GEO Optimization', level: 'Expert', highlight: '97%+ score for AI answer engine indexing' },
      { name: 'Local AI / Ollama APIs', level: 'Advanced', highlight: 'Privacy-first browser integrations' },
    ],
  },
  {
    id: 'devops-performance',
    title: {
      en: 'DevOps, Quality & Performance',
      es: 'DevOps, Calidad & Performance',
    },
    iconName: 'Gauge',
    description: {
      en: 'Ensuring zero-friction development setups, resilient security, and sub-second web vitals.',
      es: 'Garantizando entornos de desarrollo ágiles, seguridad rigurosa y métricas web sub-segundo.',
    },
    skills: [
      { name: 'Core Web Vitals Optimization', level: 'Expert', highlight: 'Sub-second LCP, zero CLS & Critters CSS' },
      { name: 'Docker & Docker Compose', level: 'Advanced', highlight: 'Reproducible development stacks & bind mounts' },
      { name: 'Jest Testing', level: 'Advanced', highlight: 'Unit & integration tests for critical business logic' },
      { name: 'Security Hardening', level: 'Expert', highlight: 'Capability checks, sanitization, SEC-1..12' },
      { name: 'Structured Data / JSON-LD', level: 'Expert', highlight: 'Schema.org, OpenGraph & XML sitemaps' },
      { name: 'Git & GitHub Workflows', level: 'Expert', highlight: 'Feature branching, CI/CD & clean commit history' },
    ],
  },
];
