import { Injectable } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LangService {
  lang: Language = 'es';

  get nextLabel(): string {
    return this.lang === 'es' ? 'EN' : 'ES';
  }

  toggle(): void {
    this.lang = this.lang === 'es' ? 'en' : 'es';
  }

  t(key: string): string {
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let node: any = TRANSLATIONS[this.lang];
    for (const part of parts) {
      if (node == null) return key;
      node = node[part];
    }
    return typeof node === 'string' ? node : key;
  }
}

const TRANSLATIONS: Record<Language, Record<string, any>> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      experience: 'Experiencia',
    },
    footer: {
      tagline: 'Construyendo sistemas reales.',
      available: 'Disponible para nuevos proyectos.',
      built_with: 'Hecho con',
      rights: 'Todos los derechos reservados.',
    },
    hero: {
      available: 'Disponible para trabajar',
      title_line1: 'Construyo sistemas',
      title_line2: 'reales que funcionan.',
      subtitle:
        'Fullstack developer especializado en backend robusto, lógica de negocio compleja, automatización de procesos e integración con inteligencia artificial.',
      cta_projects: 'Ver proyectos',
      cta_contact: 'Contactar',
      stat_projects: 'Proyectos',
      stat_years: 'Años exp.',
      stat_companies: 'Empresas',
      code_comment: '// Tickets System — validación de unicidad garantizada',
    },
    projects: {
      label: 'Proyectos',
      title: 'Sistemas que construí',
      subtitle:
        'No listo proyectos sin contexto. Muestro el problema real, la solución implementada y el impacto medible.',
      problem: 'Problema',
      solution: 'Solución',
      impact: 'Impacto',
      view: 'Ver proyecto',
      p1_title: 'Plataforma de Gestión para Restaurante',
      p1_category: 'Fullstack · Lógica de Negocio',
      p1_problem:
        'El restaurante gestionaba inventario, contabilidad y facturación de forma manual y fragmentada, sin sistema propio ni trazabilidad.',
      p1_solution:
        'Plataforma completa con módulos de inventario, contabilidad, comunicación interna y facturación electrónica. Angular en frontend, NestJS + PostgreSQL en backend.',
      p1_impact:
        'Sistema en producción. Proceso de facturación reducido de 10 a 2 minutos. Operaciones centralizadas.',
      p2_title: 'Plataforma de Gestión Empresarial',
      p2_category: 'Fullstack · Reportes',
      p2_problem:
        'Una empresa agrícola con 3 marcas no tenía visibilidad de inventario, tareas ni contabilidad en tiempo real.',
      p2_solution:
        'Plataforma integral con módulos de inventario, tareas, comunicación interna y reportes exportables a Power BI.',
      p2_impact:
        'Centralización total de operaciones. Reportes en tiempo real para toma de decisiones.',
      p3_title: 'Facturación Electrónica',
      p3_category: 'Frontend · MVC',
      p3_problem:
        'El proceso de facturación era manual, propenso a errores y sin cumplimiento de normativa fiscal local.',
      p3_solution:
        'Aplicación Angular con arquitectura MVC, módulos dinámicos para clientes, productos y generación de comprobantes electrónicos.',
      p3_impact:
        '100% cumplimiento normativo. Proceso de emisión reducido de 10 a 2 minutos.',
      p4_title: 'Repositorio EduTech con IA',
      p4_category: 'Fullstack · IA · Investigación',
      p4_problem:
        'Estudiantes con discapacidades no tenían acceso a objetos de aprendizaje adaptados a sus necesidades.',
      p4_solution:
        'Repositorio con motor de recomendación basado en IA y herramienta de adaptación de accesibilidad web, financiado por la Unión Europea.',
      p4_impact:
        'Publicación académica. +500 objetos de aprendizaje accesibles. Reconocimiento internacional.',
      p5_title: 'Sistema de Tickets y Sorteos',
      p5_category: 'Fullstack · Negocio Digital',
      p5_problem:
        'Las empresas no contaban con una plataforma propia para gestionar la venta de tickets y sorteos de forma segura, con unicidad garantizada y control de resultados.',
      p5_solution:
        'Sistema completo con generación y validación de tickets únicos, gestión de usuarios, módulo de ventas, administración de sorteos y arquitectura preparada para pasarelas de pago.',
      p5_impact:
        'Sistema escalable listo para producción. Lógica de negocio digital con foco en seguridad, trazabilidad y automatización de procesos.',
    },
    stack: {
      label: 'Stack',
      title: 'Tecnologías que uso',
      subtitle:
        'Herramientas elegidas por robustez y adecuación al problema, no por tendencia.',
      backend: 'Backend & APIs',
      frontend: 'Frontend',
      ai: 'IA & Datos',
      tools: 'DevOps & Tools',
    },
    ai: {
      label: 'IA & Automatización',
      title: 'Trabajo con Inteligencia Artificial',
      subtitle:
        'No solo consumo APIs de IA — las integro en flujos de negocio reales para resolver problemas concretos.',
      c1_title: 'Integración de APIs de IA',
      c1_desc:
        'Conecto APIs como OpenAI, Gemini y Hugging Face a sistemas backend. Desde chatbots hasta motores de recomendación.',
      c2_title: 'Automatización de Procesos',
      c2_desc:
        'Identifico tareas repetitivas y las automatizo. Scripts, workers, pipelines y scheduling que ahorran horas de trabajo manual.',
      c3_title: 'Sistemas de Recomendación',
      c3_desc:
        'Construí un motor de recomendación para objetos de aprendizaje adaptativos en un proyecto académico financiado por la UE.',
      c4_title: 'Reportes Inteligentes',
      c4_desc:
        'Integración con herramientas de BI (Power BI) y generación de reportes automáticos con insights basados en datos.',
      case_label: 'Caso real implementado',
      case_text:
        'Motor de recomendación para EduTech UPS: adapta contenido según el perfil de accesibilidad del usuario utilizando ML en Python + Django.',
    },
    about: {
      label: 'Sobre mí',
      title: 'Qué me define como desarrollador',
      p1: 'Soy desarrollador Fullstack con más de 5 años construyendo sistemas productivos: desde facturación electrónica en Ecuador hasta plataformas de gobierno en USA e investigación con la Unión Europea.',
      p2: 'No me interesa construir demos. Me interesa construir sistemas que funcionen en producción: con lógica de negocio real, validaciones robustas y arquitectura mantenible.',
      p3: 'Pienso primero en el problema de negocio y después en el stack. Trabajo bien en equipos pequeños y autónomos donde hay espacio para proponer soluciones.',
      t1: 'Backend-first',
      t1d: 'Diseño desde la lógica hacia la UI, no al revés.',
      t2: 'Arquitectura limpia',
      t2d: 'Código que puede ser mantenido por otro desarrollador.',
      t3: 'Orientado a impacto',
      t3d: 'Mido el éxito por el problema resuelto, no por el código escrito.',
      download_cv: 'Descargar CV',
      stat_years: 'Años exp.',
      stat_projects: 'Proyectos',
      stat_companies: 'Empresas',
    },
    certs: {
      label: 'Certificaciones',
      title: 'Credenciales y formación continua',
      subtitle: 'Certificaciones oficiales en IA, seguridad y desarrollo que respaldan el trabajo en producción.',
      verify: 'Verificar',
      c1_title: 'ABET Program Graduate',
      c1_issuer: 'ABET',
      c1_year: 'feb. 2026',
      c1_desc: 'Acreditación internacional de programas de ingeniería y tecnología que avala la calidad académica y formación técnica.',
      c2_title: 'Inteligencia Artificial y Productividad',
      c2_issuer: 'Google',
      c2_year: 'ago. 2025',
      c2_desc: 'IA generativa para la gestión y el desarrollo profesional. Herramientas de Google aplicadas a flujos de trabajo reales. ID: OA-2025-0814001589456.',
      c3_title: 'Soluciones con IA usando API de DeepSeek',
      c3_issuer: 'Soc. Ecuatoriana de Estadística',
      c3_year: 'feb. 2025',
      c3_desc: 'Creación de soluciones prácticas integrando la API de DeepSeek para automatización y procesamiento inteligente de datos.',
      c4_title: 'Universidad JavaScript – De Cero a Experto',
      c4_issuer: 'Udemy',
      c4_year: 'jul. 2023',
      c4_desc: 'JavaScript avanzado, ES6+, patrones de diseño, asincronía y fundamentos para Angular y TypeScript. ID: UC-2dcbd7e9.',
      c5_title: 'Universidad Angular – De Cero a Experto',
      c5_issuer: 'Udemy',
      c5_year: 'dic. 2022',
      c5_desc: 'Angular completo: componentes, servicios, routing, RxJS, formularios reactivos y despliegue en producción. ID: UC-c0838d5a.',
      c6_title: 'Web Scraping con Python',
      c6_issuer: 'Udemy',
      c6_year: 'feb. 2022',
      c6_desc: 'Extracción y automatización web con Python: BeautifulSoup, Selenium y pipelines de datos. ID: UC-0aad2eee.',
      c7_title: 'Ponente – Adaptabilidad de Objetos de Aprendizaje',
      c7_issuer: 'Universidad de Alcalá',
      c7_year: 'nov. 2021',
      c7_desc: 'Presentación de herramienta para la adaptabilidad de objetos de aprendizaje ante la comunidad académica internacional (UE).',
      c8_title: 'Hacking Ético – Redes y Comunicaciones',
      c8_issuer: 'Udemy',
      c8_year: 'mar. 2021',
      c8_desc: 'Técnicas de ethical hacking orientadas a redes: sniffing, spoofing, análisis de tráfico y defensa perimetral.',
      c9_title: 'Hacking Ético – Páginas Web y BD',
      c9_issuer: 'Udemy',
      c9_year: 'mar. 2021',
      c9_desc: 'Seguridad ofensiva en aplicaciones web: SQLi, XSS, CSRF y fundamentos de pentesting en bases de datos.',
      c10_title: 'Introducción a la Seguridad Cibernética',
      c10_issuer: 'Cisco',
      c10_year: 'jun. 2020',
      c10_desc: 'Fundamentos de ciberseguridad, amenazas comunes, vectores de ataque y principios de defensa según estándares Cisco.',
      c11_title: 'Accesibilidad Tecnológica en Ed. Superior',
      c11_issuer: 'Universidad de Alcalá',
      c11_year: 'sept. 2021',
      c11_desc: 'Asistencia tecnológica para la accesibilidad en educación superior — proyecto de investigación financiado por la Unión Europea.',
      c12_title: 'IoT Fundamentals: Big Data & Analytics',
      c12_issuer: 'Cisco',
      c12_year: 'mar. 2020',
      c12_desc: 'Internet of Things, flujos de datos masivos, analítica aplicada y fundamentos de arquitectura IoT según Cisco.',
      c13_title: 'Diseño y Simulación 3D en Blender',
      c13_issuer: 'Grupo FREESOFT UPS',
      c13_year: 'may. 2020',
      c13_desc: 'Modelado, rigging y simulación 3D en Blender. Aplicación de herramientas open-source para visualización técnica.',
      c14_title: 'Ciberseguridad – Protege tu Información',
      c14_issuer: 'Udemy',
      c14_year: 'feb. 2021',
      c14_desc: 'Protección de datos personales y corporativos contra cibercriminales: cifrado, contraseñas seguras y buenas prácticas. ID: UC-c339037d.',
    },
    contact: {
      label: 'Contacto',
      title: 'Construyamos algo\nreal juntos.',
      subtitle:
        'Disponible para posiciones fullstack, backend o proyectos con componente de IA. También abierto a freelance en sistemas complejos.',
      available: 'Disponible para trabajar',
      send_email: 'Enviar email',
      find_me: 'También en',
    },
    experience: {
      label: 'Experiencia Laboral',
      journey: 'Professional Journey',
      title: 'EXPERIENCIA',
      subtitle: 'Mi trayectoria profesional refleja un compromiso constante con la innovación tecnológica y el desarrollo de soluciones que impactan positivamente en la sociedad.',
      view_site: 'Ver sitio',
      open: 'Abrir',
      private_project: 'Proyecto Privado',
      see_all: 'Ver toda mi experiencia',
      stat_companies: 'Empresas',
      stat_years: 'Años',
      stat_technologies: 'Tecnologías',
      stat_commitment: 'Compromiso',
      loading: 'Cargando sitio...',
      close: 'Cerrar',
      ready_title: 'Ready to Collaborate',
      ready_text: 'Mi experiencia abarca desde desarrollo frontend y backend hasta proyectos de investigación e innovación tecnológica. Siempre buscando nuevos desafíos y oportunidades de crecimiento.',
      back: 'Volver al Portafolio',
      each_project: 'Cada proyecto ha sido una oportunidad de crecimiento, aplicando las mejores prácticas y tecnologías más actuales para crear soluciones efectivas.',
      work_label: 'Work Portfolio',
      work_title: 'EXPERIENCIA LABORAL',
      work_subtitle: 'Una colección de proyectos profesionales y personales que demuestran mi experiencia en desarrollo web, aplicaciones empresariales y soluciones innovadoras.',
      professional: 'Proyectos Profesionales',
      professional_sub: 'Experiencias profesionales y proyectos empresariales',
      personal: 'Proyectos Personales',
      personal_sub: 'Proyectos personales e iniciativas propias',
      visit: 'Visitar Proyecto',
      view_project: 'Ver Proyecto',
      project_num: 'Proyecto',
      personal_num: 'Proyecto Personal',
      focus_title: 'Professional Focus',
      focus_fe_title: 'Frontend Development',
      focus_fe_desc: 'Especialización en Angular, React y tecnologías modernas de desarrollo frontend con enfoque en user experience y performance optimization.',
      focus_a11y_title: 'Web Accessibility',
      focus_a11y_desc: 'Compromiso con la accesibilidad web, asegurando que las aplicaciones sean inclusivas y usables para todas las personas.',
      focus_ent_title: 'Enterprise Solutions',
      focus_ent_desc: 'Experiencia en desarrollo de soluciones empresariales escalables con arquitecturas robustas y mejores prácticas.',
      back_portfolio: 'Volver al Portafolio',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      experience: 'Experience',
    },
    footer: {
      tagline: 'Building real systems.',
      available: 'Available for new projects.',
      built_with: 'Built with',
      rights: 'All rights reserved.',
    },
    hero: {
      available: 'Available to work',
      title_line1: 'I build real systems',
      title_line2: 'that actually work.',
      subtitle:
        'Fullstack developer focused on robust backend architecture, complex business logic, process automation and AI integration.',
      cta_projects: 'View projects',
      cta_contact: 'Contact me',
      stat_projects: 'Projects',
      stat_years: 'Years exp.',
      stat_companies: 'Companies',
      code_comment: '// Tickets System — guaranteed uniqueness validation',
    },
    projects: {
      label: 'Projects',
      title: 'Systems I built',
      subtitle:
        "I don't list projects without context. I show the real problem, the solution I implemented and the measurable impact.",
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Impact',
      view: 'View project',
      p1_title: 'Restaurant Management Platform',
      p1_category: 'Fullstack · Business Logic',
      p1_problem:
        'The restaurant managed inventory, accounting and invoicing manually without a dedicated system or traceability.',
      p1_solution:
        'Complete platform with inventory, accounting, internal communication and electronic invoicing modules. Angular frontend, NestJS + PostgreSQL backend.',
      p1_impact:
        'System in production. Invoicing process from 10 to 2 minutes. Fully centralized operations.',
      p2_title: 'Enterprise Management Platform',
      p2_category: 'Fullstack · Reporting',
      p2_problem:
        'An agro company with 3 brands had no real-time visibility of inventory, tasks or accounting.',
      p2_solution:
        'Integrated platform with inventory, task, internal communication modules and Power BI-exportable reports.',
      p2_impact: 'Full operational centralization. Real-time reports for decision making.',
      p3_title: 'Electronic Invoicing System',
      p3_category: 'Frontend · MVC',
      p3_problem:
        'Billing was manual, error-prone and non-compliant with local tax regulations.',
      p3_solution:
        'Angular MVC app with dynamic modules for clients, products and electronic document generation.',
      p3_impact: '100% regulatory compliance. Emission process from 10 to 2 minutes.',
      p4_title: 'EduTech Repository with AI',
      p4_category: 'Fullstack · AI · Research',
      p4_problem:
        'Students with disabilities lacked access to learning objects adapted to their needs.',
      p4_solution:
        'Repository with an AI-based recommendation engine and web accessibility adaptation tool, EU-funded project.',
      p4_impact: 'Academic publication. 500+ accessible learning objects. International recognition.',
      p5_title: 'Ticket & Lottery System',
      p5_category: 'Fullstack · Digital Business',
      p5_problem:
        'Businesses lacked a dedicated platform to manage ticket sales and lotteries securely, with guaranteed uniqueness and result control.',
      p5_solution:
        'Complete system with unique ticket generation and validation, user management, sales module, lottery administration and payment gateway-ready architecture.',
      p5_impact:
        'Production-ready scalable system. Digital business logic focused on security, traceability and process automation.',
    },
    stack: {
      label: 'Stack',
      title: 'Technologies I use',
      subtitle: 'Tools chosen by robustness and problem fit, not by trend.',
      backend: 'Backend & APIs',
      frontend: 'Frontend',
      ai: 'AI & Data',
      tools: 'DevOps & Tools',
    },
    ai: {
      label: 'AI & Automation',
      title: 'I work with Artificial Intelligence',
      subtitle:
        "I don't just consume AI APIs — I integrate them into real business flows to solve concrete problems.",
      c1_title: 'AI API Integration',
      c1_desc:
        'Connect APIs like OpenAI, Gemini and Hugging Face to backend systems. From chatbots to recommendation engines.',
      c2_title: 'Process Automation',
      c2_desc:
        'Identify repetitive tasks and automate them. Scripts, workers, pipelines and scheduling that save hours of manual work.',
      c3_title: 'Recommendation Systems',
      c3_desc:
        'Built a recommendation engine for adaptive learning objects in an EU-funded academic project.',
      c4_title: 'Smart Reporting',
      c4_desc:
        'Integration with BI tools (Power BI) and automatic report generation with data-driven insights.',
      case_label: 'Real implemented use case',
      case_text:
        'Recommendation engine for EduTech UPS: adapts content based on the user accessibility profile using ML in Python + Django.',
    },
    about: {
      label: 'About me',
      title: 'What defines me as a developer',
      p1: "I'm a Fullstack developer with 5+ years building production systems: from electronic invoicing in Ecuador to governance platforms in the USA and EU-funded research.",
      p2: "I'm not interested in building demos. I'm interested in building systems that work in production: with real business logic, robust validations and maintainable architecture.",
      p3: 'I think about the business problem before the tech stack. I work well in small, autonomous teams where there is room to propose solutions.',
      t1: 'Backend-first',
      t1d: 'I design from the logic to the UI, not the other way around.',
      t2: 'Clean architecture',
      t2d: 'Code that can be maintained by another developer.',
      t3: 'Impact-oriented',
      t3d: 'I measure success by the problem solved, not the code written.',
      download_cv: 'Download CV',
      stat_years: 'Years exp.',
      stat_projects: 'Projects',
      stat_companies: 'Companies',
    },
    certs: {
      label: 'Certifications',
      title: 'Credentials & continuous learning',
      subtitle: 'Official certifications in AI, security and development backing real production work.',
      verify: 'Verify',
      c1_title: 'ABET Program Graduate',
      c1_issuer: 'ABET',
      c1_year: 'Feb. 2026',
      c1_desc: 'International accreditation for engineering and technology programs validating academic quality and technical training.',
      c2_title: 'Artificial Intelligence & Productivity',
      c2_issuer: 'Google',
      c2_year: 'Aug. 2025',
      c2_desc: 'Generative AI for management and professional development. Google tools applied to real-world workflows. ID: OA-2025-0814001589456.',
      c3_title: 'AI Solutions using DeepSeek API',
      c3_issuer: 'Ecuadorian Statistics Society',
      c3_year: 'Feb. 2025',
      c3_desc: 'Building practical solutions integrating the DeepSeek API for automation and intelligent data processing.',
      c4_title: 'JavaScript University – Zero to Expert',
      c4_issuer: 'Udemy',
      c4_year: 'Jul. 2023',
      c4_desc: 'Advanced JavaScript, ES6+, design patterns, async programming and foundations for Angular and TypeScript. ID: UC-2dcbd7e9.',
      c5_title: 'Angular University – Zero to Expert',
      c5_issuer: 'Udemy',
      c5_year: 'Dec. 2022',
      c5_desc: 'Complete Angular: components, services, routing, RxJS, reactive forms and production deployment. ID: UC-c0838d5a.',
      c6_title: 'Web Scraping with Python',
      c6_issuer: 'Udemy',
      c6_year: 'Feb. 2022',
      c6_desc: 'Web extraction and automation with Python: BeautifulSoup, Selenium and data pipelines. ID: UC-0aad2eee.',
      c7_title: 'Speaker – Adaptability of Learning Objects',
      c7_issuer: 'University of Alcalá',
      c7_year: 'Nov. 2021',
      c7_desc: 'Presentation of a tool for learning object adaptability to the international academic community (EU-funded).',
      c8_title: 'Ethical Hacking – Networks & Communications',
      c8_issuer: 'Udemy',
      c8_year: 'Mar. 2021',
      c8_desc: 'Ethical hacking techniques for networks: sniffing, spoofing, traffic analysis and perimeter defense.',
      c9_title: 'Ethical Hacking – Web & Databases',
      c9_issuer: 'Udemy',
      c9_year: 'Mar. 2021',
      c9_desc: 'Offensive web security: SQLi, XSS, CSRF and pentesting fundamentals for web applications and databases.',
      c10_title: 'Introduction to Cybersecurity',
      c10_issuer: 'Cisco',
      c10_year: 'Jun. 2020',
      c10_desc: 'Cybersecurity fundamentals, common threats, attack vectors and defense principles following Cisco standards.',
      c11_title: 'Tech Accessibility in Higher Education',
      c11_issuer: 'University of Alcalá',
      c11_year: 'Sep. 2021',
      c11_desc: 'Technology assistance for accessibility in higher education — EU-funded research project.',
      c12_title: 'IoT Fundamentals: Big Data & Analytics',
      c12_issuer: 'Cisco',
      c12_year: 'Mar. 2020',
      c12_desc: 'Internet of Things, massive data flows, applied analytics and IoT architecture fundamentals by Cisco.',
      c13_title: '3D Design & Simulation in Blender',
      c13_issuer: 'FREESOFT UPS Group',
      c13_year: 'May. 2020',
      c13_desc: 'Modeling, rigging and 3D simulation in Blender. Open-source tools for technical visualization.',
      c14_title: 'Cybersecurity – Protect Your Information',
      c14_issuer: 'Udemy',
      c14_year: 'Feb. 2021',
      c14_desc: 'Protecting personal and corporate data from cybercriminals: encryption, secure passwords and best practices. ID: UC-c339037d.',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something\nreal together.",
      subtitle:
        'Available for fullstack, backend positions or projects with AI components. Also open to freelance on complex systems.',
      available: 'Available to work',
      send_email: 'Send email',
      find_me: 'Also find me on',
    },
    experience: {
      label: 'Work Experience',
      journey: 'Professional Journey',
      title: 'EXPERIENCE',
      subtitle: 'My professional journey reflects a constant commitment to technological innovation and the development of solutions that positively impact society.',
      view_site: 'View site',
      open: 'Open',
      private_project: 'Private Project',
      see_all: 'See all my experience',
      stat_companies: 'Companies',
      stat_years: 'Years',
      stat_technologies: 'Technologies',
      stat_commitment: 'Commitment',
      loading: 'Loading site...',
      close: 'Close',
      ready_title: 'Ready to Collaborate',
      ready_text: 'My experience spans from frontend and backend development to research and technological innovation projects. Always looking for new challenges and growth opportunities.',
      back: 'Back to Portfolio',
      each_project: 'Each project has been an opportunity for growth, applying best practices and the latest technologies to create effective solutions.',
      work_label: 'Work Portfolio',
      work_title: 'WORK EXPERIENCE',
      work_subtitle: 'A collection of professional and personal projects showcasing my expertise in web development, enterprise applications and innovative solutions.',
      professional: 'Professional Projects',
      professional_sub: 'Professional experience and enterprise projects',
      personal: 'Personal Projects',
      personal_sub: 'Personal projects and own initiatives',
      visit: 'Visit Project',
      view_project: 'View Project',
      project_num: 'Project',
      personal_num: 'Personal Project',
      focus_title: 'Professional Focus',
      focus_fe_title: 'Frontend Development',
      focus_fe_desc: 'Specialization in Angular, React and modern frontend technologies focused on user experience and performance optimization.',
      focus_a11y_title: 'Web Accessibility',
      focus_a11y_desc: 'Committed to web accessibility, ensuring applications are inclusive and usable for everyone.',
      focus_ent_title: 'Enterprise Solutions',
      focus_ent_desc: 'Experience building scalable enterprise solutions with robust architectures and best practices.',
      back_portfolio: 'Back to Portfolio',
    },
  },
};
