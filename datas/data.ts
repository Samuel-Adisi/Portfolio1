export const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/Samue-Adisi",
    simpleIcon: "/svgs/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Samuul-Adisi-123456789/",
    simpleIcon: "/svgs/linkedIn.svg",
  },
  {
    name: "X",
    link: "https://x.com/Samuel_Adisi",
    simpleIcon: "/svgs/x.svg",
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/Phenyl/",
    simpleIcon: "/svgs/insta.svg",
  },
];

export const technologies = [
  {
    name: "React",
    iconLink: "https://cdn.simpleicons.org/react",
  },
  {
    name: "NextJs",
    iconLink: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Expo React Native",
    iconLink: "https://cdn.simpleicons.org/expo",
  },
  {
    name: "JavaScript",
    iconLink: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "TypeScript",
    iconLink: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "TailwindCss",
    iconLink: "https://cdn.simpleicons.org/tailwindcss",
  },

  {
    name: "Three.js",
    iconLink: "https://cdn.simpleicons.org/threedotjs",
  },
  {
    name: "Sass",
    iconLink: "https://cdn.simpleicons.org/sass",
  },
  {
    name: "Redux",
    iconLink: "https://cdn.simpleicons.org/redux",
  },
  {
    name: "Shadcn/ui",
    iconLink: "https://cdn.simpleicons.org/shadcnui",
  },
  {
    name: "Chakra UI",
    iconLink: "https://cdn.simpleicons.org/chakraui",
  },
  {
    name: "Mui",
    iconLink: "https://cdn.simpleicons.org/mui",
  },
  {
    name: "Headless UI",
    iconLink: "https://cdn.simpleicons.org/headlessui",
  },
  {
    name: "Framer Motion",
    iconLink: "https://cdn.simpleicons.org/framer",
  },
  {
    name: "Git",
    iconLink: "https://cdn.simpleicons.org/git",
  },
  {
    name: "NodeJs",
    iconLink: "https://cdn.simpleicons.org/nodedotjs",
  },
];

export const sections = [
  { idRoute: "/#about", name: "About" },
  { idRoute: "/#experience", name: "Experience" },
  { idRoute: "/#works", name: "Works" },
  { idRoute: "/#contact", name: "Contact" },
];

export const companies = ["Kreddible"];

export const companiesInfo = [
  {
    title: "Backend Developer (Django)",
    company: "Berrystamp - Decentralized Print-on-Demand",
    location: "Remote (United States)",
    duration: "October 2023 - February 2024",
    roles: [
      "Designed and developed scalable backend services using Django and Django REST Framework.",
      "Built and maintained secure RESTful APIs to support a decentralized print-on-demand platform.",
      "Optimized database queries and application performance for high-traffic usage.",
      "Integrated third-party services and handled background tasks using Celery and Redis.",
      "Collaborated remotely with cross-functional teams across different time zones in the United States.",
    ],
  },
];

export const projects = [
  {
    name: "Hostmond",
    type: "Featured Project",
    description:
      "Hostmond is a Render-style PaaS platform for Ghana/West Africa, letting developers deploy apps with a Git-based workflow. Built solo end-to-end: multi-tenant backend, automated container builds, and versioned image releases.",
    image: "/hostmond.png",
    liveLink: "",
    loomLink: "", // Add this
    githubLink: "https://github.com/Samuel-Adisi/hostmond",
    stacks: ["Go", "Gin", "PostgreSQL", "Redis", "asynq", "Docker"],
  },
  {
    name: "iCampus",
    type: "Personal Project",
    description:
      "Developing an improved School Management System for Accra Technical University",
    image: "/IC.png",
    liveLink: "",
    loomLink: "", // Add this
    stacks: ["React.Js", "JavaScript", "Python", "Django", "Postgres"],
  },

  {
    name: "DeepGene",
    type: "Personal Project",
    description:
      "Currently working on an AI drug resistance predictive model to help Pharmaceutical companies in drug study and production",
    image: "/deepgene.png",
    liveLink: "",
    loomLink: "", // Add this
    githubLink: "https://github.com/Samuel-Adisi/DeepGene",
    stacks: ["Python", "BioPython", "RandomForest", "Django"],
  },

  {
    name: "Huntstore",
    type: "Personal Project",
    description:
      "Huntstore is an ecommerce store that shows a variety of gender products.",
    image: "/huntstore.webp",
    liveLink: "https://huntstore1.vercel.app/",
    githubLink: "",
    stacks: ["JavaScript", "React", "css"],
  },

  {
    name: "Mindvolta",
    type: "Featured Project",
    description:
      "Mindvolta is a smart mental health assistant that helps users, especially young people and undergraduates, manage conditions like depression, anxiety, and addiction. It includes mood tracking, calming playlists, and chatbot support tailored for emotional wellbeing.",
    image: "/mindVolta.webp",
    loomLink: "", // Add this
    githubLink: "https://github.com/Samuel-Adisi/MindVolta",
    stacks: ["React Native", "TypeScript", "TailwindCss"],
  },
  {
    name: "Farote Notes App",
    type: "Personal Project",
    loomLink: "", // Add this
    description:
      "Farote is a personal fullstack notes app I built to manage my ideas, quick thoughts, and to-dos. I wanted something I could use anywhere, so I made it a PWA, which means I can install and use it like a native app on my phone. It's clean, responsive, and supports real-time note creation, editing, and deletion with a smooth, modern UI.",
    image: "/farote.webp",
    liveLink: "https://farote.vercel.app",
    githubLink: "",
    stacks: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "date-fns",
      "MongoDB",
      "PWA",
    ],
  },
  {
    name: "JustIron",
    type: "Featured Project",
    description:
      "JustIron simplifies laundry services with an intuitive online platform, offering seamless booking, scheduling, and real-time order tracking for users in the UK.",
    image: "/justiron.webp",
    loomLink: "", // Add this
    liveLink: "https://www.justiron.co.uk/",
    stacks: ["TypeScript", "React", "TailwindCss", "Redux"],
  },
  {
    name: "BerryStamp",
    type: "Featured Project",
    description:
      "Berrystamp is revolutionizing the print-on-demand industry with its innovative approach to customization and printing services.",
    image: "/berrystamp.webp",
    loomLink: "", // Add this
    liveLink: "https://berrystamp.com/",
    stacks: ["TypeScript", "React", "TailwindCss", "Redux"],
  },

  // {
  //   name: "TMDB v2 Mobile App",
  //   type: "Personal Project",
  //   description:
  //     "A mobile movie discovery app consuming The Movie Database (TMDB) API. Users can explore trending movies, view detailed info, and search across genres with a clean and responsive React Native interface.",
  //   image: "/tmdb-v2.webp",
  //   stacks: ["React Native", "TypeScript", "TMDB API"],
  //   githubLink: "https://github.com/Farouk-ayo/tmdb-v2-mobile-app",
  //   liveLink: "https://expo.dev/artifacts/eas/wWgr9LmHE1qD5SnQKHA6QS.aab",
  // },

  {
    name: "MovieBox",
    type: "Personal Project",
    description:
      "A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies, consuming data from the TMDB API.",
    image: "/moviebox.webp",
    loomLink: "", // Add this
    liveLink: "https://movie-box-tmdb.vercel.app/",
    githubLink: "",
    stacks: ["JavaScript", "React", "css"],
  },
  {
    name: "E-vent",
    type: "Featured Project",
    description:
      "E-vent is a centralized platform for event planners, organizers and attendees, to coordinate and manage various aspects of events such as scheduling, ticketing, registration, marketing and communication",
    image: "/e-vent.webp",
    loomLink: "", // Add this
    stacks: ["JavaScript", "React", "Tailwind", "Mui"],
  },
];