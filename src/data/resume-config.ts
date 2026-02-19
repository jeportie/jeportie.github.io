import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Jerome Portier',
    photo: '/images/photo.jpg',
    title: {
      en: 'QA Automation & Full-Stack Engineering Student',
      fr: 'Étudiant en QA Automation & Ingénierie Full-Stack',
    },
    subtitle: {
      en: 'Systems • CI/CD • DevOps • TypeScript',
      fr: 'Systèmes • CI/CD • DevOps • TypeScript',
    },
    location: 'Paris, France',
  },

  seo: {
    title: 'Jerome Portier — Software Engineer',
    description:
      'Software Engineering student at École 42 specialized in QA automation, DevOps and full-stack systems.',
  },

  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  contact: [
    { type: 'github', label: 'jeportie', href: 'https://github.com/jeportie' },
    { type: 'linkedin', label: 'jeportie', href: 'https://linkedin.com/in/jeportie' },
    { type: 'email', label: 'jeromep.dev@gmail.com' },
    { type: 'phone', label: '+33 6 65 25 81 19' },
    { type: 'location', label: 'Paris, France' },
  ],

  skills: [
    {
      title: { en: 'Languages', fr: 'Langages' },
      type: 'badges',
      items: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'Bash' },
      ],
    },
    {
      title: { en: 'Backend & APIs', fr: 'Backend & APIs' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Fastify' },
        { name: 'Prisma' },
        { name: 'REST' },
        { name: 'OpenAPI' },
        { name: 'JWT / OAuth2' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'React Router' },
        { name: 'TanStack Query' },
        { name: 'TailwindCSS' },
        { name: 'Vite' },
      ],
    },
    {
      title: { en: 'Testing & CI/CD', fr: 'Tests & CI/CD' },
      type: 'badges',
      items: [
        { name: 'Vitest' },
        { name: 'Google Test' },
        { name: 'TDD' },
        { name: 'GitHub Actions' },
        { name: 'semantic-release' },
      ],
    },
    {
      title: { en: 'DevOps & Observability', fr: 'DevOps & Observabilité' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Docker Compose' },
        { name: 'Prometheus' },
        { name: 'Grafana' },
        { name: 'Linux' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCE =====
  experiences: [
    {
      id: 'ecole42',
      company: { en: 'École 42', fr: 'École 42' },
      role: { en: 'Software Engineering Student', fr: 'Étudiant en Ingénierie Logicielle' },
      type: { en: 'Full-time Program', fr: 'Programme temps plein' },
      period: { en: '2023 - Present', fr: '2023 - Présent' },
      description: {
        en: 'Project-based peer-learning engineering program focused on systems programming, algorithms and full-stack development.',
        fr: 'Programme d’ingénierie en peer-learning basé sur des projets, axé sur la programmation système, les algorithmes et le full-stack.',
      },
      techs: ['C', 'C++', 'TypeScript', 'Docker', 'Linux'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Validated 15+ projects (Cursus level 11). Common Core focused on low-level programming (C), algorithms, memory management, networking and HTTP.',
          fr: 'Validation de 15+ projets (Cursus niveau 11). Tronc commun axé sur la programmation bas niveau (C), algorithmes, gestion mémoire, réseau et HTTP.',
        },
        tasks: {
          en: [
            'Built a POSIX shell (minishell) in C',
            'Developed a real-time raycasting engine (cub3D)',
            'Implemented an HTTP/1.1 server in C++ (webserv) with Google Test',
            'Built a full-stack web application (ft_transcendence) with authentication and monitoring',
            'Applied Test-Driven Development and CI/CD practices',
            'Currently specializing in Web Engineering, Embedded Systems, Testing/CI-CD, DevOps and Cloud architecture',
          ],
          fr: [
            'Développement d’un shell POSIX (minishell)',
            'Création d’un moteur de raycasting temps réel (cub3D)',
            'Implémentation d’un serveur HTTP/1.1 en C++',
            'Développement d’une application full-stack (ft_transcendence)',
            'Application des pratiques TDD et CI/CD',
            'Spécialisation actuelle : Web, embarqué, Testing/CI-CD, DevOps, Cloud',
          ],
        },
        env: {
          en: 'C / C++ / TypeScript / Docker / Linux / Git / CI/CD',
          fr: 'C / C++ / TypeScript / Docker / Linux / Git / CI/CD',
        },
      },
    },

    {
      id: 'soundengineer',
      company: { en: 'Freelance & Studios', fr: 'Freelance & Studios' },
      role: { en: 'Studio & Live Sound Engineer', fr: 'Ingénieur du Son Studio & Live' },
      type: { en: 'Professional Experience', fr: 'Expérience professionnelle' },
      period: { en: '2019 - 2024', fr: '2019 - 2024' },
      description: {
        en: 'Worked in professional studios and live venues delivering high-quality technical production.',
        fr: 'Travail en studios professionnels et en live avec production technique haut niveau.',
      },
      techs: ['Audio Engineering', 'Live Systems', 'Technical Direction'],
      details: {
        context: {
          en: 'Studio work (Melodium, Interférence, Redbull Studio) and live technical direction for festivals and venues.',
          fr: 'Travail en studio et direction technique live pour festivals et salles.',
        },
        tasks: {
          en: [
            'Managed complex technical systems under real-time constraints',
            'Diagnosed and solved issues during live production',
            'Coordinated multidisciplinary teams',
            'Developed strong attention to detail and quality control mindset',
          ],
          fr: [
            'Gestion de systèmes techniques complexes en temps réel',
            'Résolution rapide de problèmes en live',
            'Coordination d’équipes',
            'Forte culture de la précision et du contrôle qualité',
          ],
        },
        env: {
          en: 'Live Audio Systems / Studio Engineering / Technical Direction',
          fr: 'Systèmes audio live / Studio / Direction technique',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'via',
      title: { en: 'Via — Typed API Client Generator', fr: 'Via — Générateur de client API typé' },
      description: {
        en: 'Type-safe SDK generator based on OpenAPI with automated CI/CD and semantic-release.',
        fr: 'Générateur de SDK type-safe basé sur OpenAPI avec CI/CD automatisé.',
      },
      techs: ['TypeScript', 'OpenAPI', 'GitHub Actions'],
      github: 'https://github.com/jeportie/Via',
    },
    {
      id: 'tsstarter',
      title: { en: 'ts-fullstack-starter', fr: 'ts-fullstack-starter' },
      description: {
        en: 'Automation-first full-stack starter template with enforced CI gates.',
        fr: 'Template full-stack orienté automatisation et CI/CD.',
      },
      techs: ['TypeScript', 'React', 'Vitest'],
      github: 'https://github.com/jeportie/ts-fullstack-starter',
    },
    {
      id: 'transcendence',
      title: { en: 'ft_transcendence', fr: 'ft_transcendence' },
      description: {
        en: 'Full-stack production-style web application with secure authentication and monitoring.',
        fr: 'Application web full-stack avec authentification sécurisée et monitoring.',
      },
      techs: ['TypeScript', 'Fastify', 'Docker'],
      github: 'https://github.com/jeportie/ft_transcendence',
    },
    {
      id: 'webserv',
      title: { en: 'webserv', fr: 'webserv' },
      description: {
        en: 'HTTP/1.1 server in C++ with event-driven architecture and TDD.',
        fr: 'Serveur HTTP/1.1 en C++ avec architecture événementielle et TDD.',
      },
      techs: ['C++', 'Google Test'],
      github: 'https://github.com/jeportie/webserv',
    },
    {
      id: 'minishell',
      title: { en: 'minishell', fr: 'minishell' },
      description: {
        en: 'POSIX-compliant shell implementation in C.',
        fr: 'Implémentation d’un shell POSIX en C.',
      },
      techs: ['C', 'POSIX'],
      github: 'https://github.com/jeportie/minishell',
    },
  ],

  education: [
    {
      school: { en: 'École 42', fr: 'École 42' },
      degree: { en: 'Software Engineering Program (Level 11)', fr: 'Programme Ingénierie Logicielle (Niveau 11)' },
      specialty: {
        en: 'Systems Programming, Algorithms, Full-Stack Engineering',
        fr: 'Programmation système, algorithmes, full-stack',
      },
      period: '2023 - Present',
    },
    {
      school: { en: 'Abbey Road Institute', fr: 'Abbey Road Institute' },
      degree: { en: 'Diploma in Sound Engineering', fr: 'Diplôme Ingénierie du Son' },
      specialty: {
        en: 'Studio Engineering, Mixing, Acoustics — GPA 4.0/4.0',
        fr: 'Studio, mixage, acoustique — GPA 4.0/4.0',
      },
      period: '2017 - 2019',
    },
    {
      school: { en: 'EICAR Paris', fr: 'EICAR Paris' },
      degree: { en: 'Audiovisual Diploma', fr: 'Diplôme Audiovisuel' },
      specialty: {
        en: 'Film production, audio, editing — Grade 15/20',
        fr: 'Production cinéma, audio, montage — Note 15/20',
      },
      period: '2014 - 2017',
    },
  ],

  aboutme: {
    description: {
      en: `Final-year Software Engineering student at École 42, transitioning from audio engineering with a strong systems mindset.\n
Interested in Web Engineering, QA Automation, DevOps/Cloud, Embedded Systems and Data, I am driven by reliability, security and performance in environments where engineering rigor directly impacts product quality.\n
Currently seeking an internship to contribute to impactful, scalable systems.`,

      fr: `Étudiant en dernière année à l’École 42, en reconversion depuis l’ingénierie audio, avec une forte approche orientée systèmes.\n
Intéressé par le développement web, la QA automation, le DevOps/Cloud, les systèmes embarqués et la data, je suis motivé par les environnements où fiabilité, sécurité et performance sont essentielles.\n
Actuellement à la recherche d’un stage pour contribuer à des systèmes robustes et scalables.`,
    }
  },



  hobbies: [
    { title: { en: 'DJing', fr: 'DJ' } },
    { title: { en: 'Basketball', fr: 'Basket' } },
    { title: { en: 'Running', fr: 'Course à pied' } },
    { title: { en: 'Woodcraft', fr: 'Travail du bois' } },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/Jerome_Portier_CV_EN.pdf', fr: '/cv/Jerome_Portier_CV_FR.pdf' },
  },

  theme: {
    preset: 'warm',
  },

  labels: {
    sections: {
      aboutme: { en: 'ABOUT ME', fr: 'A PROPOS DE MOI' },
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCE PROFESSIONNELLE' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: {
        en: 'Click on experiences to see more details',
        fr: 'Cliquez sur les expériences pour voir plus de détails',
      },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
