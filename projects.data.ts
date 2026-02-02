import type { Project } from "./src/types/Project";

const projects: Project[] = [
  {
    id: "f1",
    title: "F1 2024 Season Site",
    coverImage: "/f1.png",

    summary:
      "A web application providing Formula 1 fans with clear, real-time access to race and season information.",

    description:
      "Responsive web application featuring race calendars, constructor standings, and driver profiles presented through a clean, interactive interface.",

    rationale: {
      short:
        "Designed to present Formula 1 data in a clear and accessible format for fans seeking up-to-date race information.",

      long: "The F1 2024 Season Site was created to address the difficulty many fans experience when navigating fragmented and cluttered motorsport information online. Existing platforms often overwhelm users with excessive data or prioritize advanced statistics over clarity. The project required presenting complex information in a way that remained accessible to both casual viewers and dedicated fans. The design solution emphasizes clarity through a structured layout, intuitive navigation, and responsive presentation across devices. By focusing on essential race data, standings, and profiles, the site delivers a streamlined experience that allows users to quickly understand and follow the season without unnecessary complexity.",
    },

    tech: ["JavaScript", "Express.js", "EJS", "HTML/CSS", "Axios"],

    gallery: [
      { type: "image", src: "/f1.png", alt: "F1 homepage layout" },
      { type: "image", src: "/f1_1.png", alt: "F1 homepage layout" },
      { type: "image", src: "/f1_2.png", alt: "Driver standings view" },
      { type: "image", src: "/f1_3.png", alt: "Driver standings view" },
      { type: "image", src: "/f1_4.png", alt: "Driver standings view" },
      { type: "image", src: "/f1_5.png", alt: "Driver standings view" },
    ],

    links: {
      internal: "/projects/f1",
      github: "https://github.com/nilae2001/nila-f1-project",
      live: "https://f1-project-uyuj.onrender.com/",
    },
  },

  {
    id: "inklink",
    title: "InkLink",
    coverImage: "/inklink.png",

    summary:
      "A collaborative writing platform designed to support structured, multi-user storytelling.",

    description:
      "React and TypeScript application enabling writers to collaborate in real time with shared notes and organized workspaces.",

    rationale: {
      short:
        "A platform created to support collaborative writing through structure, organization, and real-time interaction.",

      long: "InkLink was developed to address the challenges writers face when collaborating remotely using fragmented tools not designed for storytelling. The project required balancing creative freedom with structure, ensuring contributors could work together without confusion or loss of narrative cohesion. The interface was designed to prioritize clarity and organization through defined workspaces, real-time updates, and intuitive controls. This approach allows users to focus on the creative process while maintaining a clear overview of shared progress, making collaborative writing more accessible and effective.",
    },

    tech: ["React", "TypeScript", "Mantine", "Zustand", "Node.js", "MongoDB"],

    gallery: [
      {
        type: "image",
        src: "/inklink_1.png",
        alt: "Shared writing workspace",
      },
      {
        type: "image",
        src: "/inklink_2.png",
        alt: "Real-time notes feature",
      },
      {
        type: "image",
        src: "/inklink_3.png",
        alt: "Real-time notes feature",
      },
    ],

    links: {
      internal: "/projects/inklink",
      github: "https://github.com/IDSP-2380",
      live: "https://inklink-fe.onrender.com/",
    },
  },

  {
    id: "joey",
    title: "Joey",
    coverImage: "/joey.png",

    summary:
      "An AI-powered mobile platform connecting homeowners with underrepresented tradespeople.",

    description:
      "Mobile application built with React Native and Supabase that verifies credentials and supports fair, accessible job matching.",

    rationale: {
      short:
        "A mobile platform designed to create fairer connections between homeowners and skilled tradespeople.",

      long: "Joey was designed to address the difficulty homeowners face when finding trustworthy tradespeople, while also supporting skilled workers from underrepresented backgrounds who encounter barriers to consistent employment. Many existing platforms prioritize speed over fairness and transparency. The project required designing an interface that balanced usability with trust, accessibility, and verification. The solution emphasizes clear user flows, credential validation, and accessible design principles to ensure confidence on both sides of the platform. This approach promotes equitable access to work opportunities while simplifying the hiring process for homeowners.",
    },

    tech: ["React Native", "Expo", "Supabase", "Google Gemini AI"],

    gallery: [
      { type: "image", src: "/joey_slide.png", alt: "Joey app interface" },
      { type: "video", src: "/joey_demo.mov", alt: "Joey demo video" },
    ],

    links: {
      internal: "/projects/joey",
      github: "https://github.com/IDSP-3380",
      live: null,
    },
  },

  {
    id: "nfma",
    title: "North Fraser Métis Association",
    coverImage: "/placeholder.png",

    summary:
      "A website redesign focused on accessibility, usability, and community engagement.",

    description:
      "Modern WordPress-based site emphasizing cultural representation, accessibility standards, and functional improvements.",

    rationale: {
      short:
        "A redesign aimed at improving accessibility and usability for community-focused digital services.",

      long: "The North Fraser Métis Association website redesign was undertaken to address accessibility limitations and usability issues present in the existing site. Community members required a platform that supported day-to-day organizational needs while accurately representing cultural identity. The project required adherence to accessibility standards alongside improvements to navigation and functionality. The design solution emphasizes clear structure, inclusive design practices, and reliable content management, ensuring the site serves both administrative needs and community engagement effectively.",
    },

    tech: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],

    gallery: [
      { type: "image", src: "/nfma_home.png", alt: "NFMA homepage redesign" },
    ],

    links: {
      internal: "/projects/nfma",
      github: null,
      live: null,
    },
  },
];

export default projects;
