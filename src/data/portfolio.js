import {
  FiActivity,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFigma,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiServer,
  FiShield,
  FiStar,
  FiTool
} from "react-icons/fi";

import dashboardPreview from "../assets/project-dashboard.svg";
import commercePreview from "../assets/project-commerce.svg";
import studioPreview from "../assets/project-studio.svg";

export const profile = {
  name: "Dawit Shibru",
  role: "Full Stack Web Developer",
  location: "Addis Ababa, Ethiopia",
  phone: "+251960883518",
  email: "Dawitdave517@gmail.com",

  bio:
    "Recent Computer Science graduate passionate about building responsive websites, modern web applications, and database-driven systems using current web technologies.",

  intro:
    "I build clean and professional websites and web applications.",

  availability:
    "Available for internships, freelance projects, junior developer roles, and web development opportunities.",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/dave6088",
      icon: FiGithub
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: FiLinkedin
    },
    {
      label: "Email",
      href: "mailto:Dawitdave517@gmail.com",
      icon: FiMail
    }
  ]
};

export const stats = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Technologies Learned", value: 10, suffix: "+" },
  { label: "Certificates", value: 2, suffix: "+" },
  { label: "Internship Experience", value: 1, suffix: "+" }
];

export const highlights = [
  {
    title: "Frontend Development",
    text: "Building responsive and user-friendly interfaces.",
    icon: FiLayers
  },
  {
    title: "Clean Code",
    text: "Writing maintainable and readable applications.",
    icon: FiActivity
  },
  {
    title: "Database Skills",
    text: "Working with relational and modern databases.",
    icon: FiDatabase
  },
  {
    title: "Continuous Learning",
    text: "Learning modern tools and improving through projects.",
    icon: FiCheckCircle
  }
];

export const skills = [
  {
    title: "Frontend",
    icon: FiCode,
    items: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 82 },
      { name: "HTML / CSS", level: 90 }
    ]
  },

  {
    title: "Backend",
    icon: FiServer,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "Java", level: 72 },
      { name: "PHP", level: 65 }
    ]
  },

  {
    title: "Database",
    icon: FiDatabase,
    items: [
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 }
    ]
  },

  {
    title: "Tools",
    icon: FiTool,
    items: [
      { name: "Git / GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 }
    ]
  }
];

export const projects = [
  {
    title: "Task Management Dashboard",
    category: "Dashboard",

    image: dashboardPreview,

    description:
      "A dashboard project for managing tasks and visualizing project progress.",

    tech: ["React", "Vite", "Tailwind"],

    demo:
      "https://dave6088.github.io/",

    github:
      "https://github.com/dave6088"
  },

  {
    title: "E-Commerce Website",

    category: "Web Application",

    image: commercePreview,

    description:
      "An online store interface with product listing and shopping features.",

    tech: [
      "React",
      "Node.js",
      "MySQL"
    ],

    demo:
      "https://dave6088.github.io/",

    github:
      "https://github.com/dave6088"
  },

  {
    title: "Personal Portfolio",

    category: "Website",

    image: studioPreview,

    description:
      "A personal portfolio website to showcase skills and projects.",

    tech: [
      "React",
      "Tailwind"
    ],

    demo:
      "https://dave6088.github.io/",

    github:
      "https://github.com/dave6088"
  }
];

export const experience = [
  {
    company: "Personal Projects",

    position:
      "Frontend Developer",

    duration:
      "2025 - Present",

    responsibilities: [
      "Built personal web applications using React.",
      "Practiced responsive design and component structure.",
      "Integrated APIs and improved UI performance."
    ]
  }
];

export const education = [
  {
    degree:
      "BSc in Computer Science",

    institution:
      "St. Mary's University",

    year:
      "2026",

    achievements:
      "Successfully completed undergraduate studies and developed academic and practical software projects."
  },

  {
    degree:
      "Database Administration Certificate",

    institution:
      "Misrak Polytechnic College",

    year:
      "2024",

    achievements:
      "Studied database management, SQL, and administration fundamentals."
  }
];

export const services = [
  {
    title:
      "Web Development",

    icon:
      FiGlobe,

    text:
      "Building responsive websites and modern web applications."
  },

  {
    title:
      "Frontend Development",

    icon:
      FiCode,

    text:
      "Creating interactive user interfaces using React."
  },

  {
    title:
      "Database Design",

    icon:
      FiDatabase,

    text:
      "Designing and managing structured databases."
  },

  {
    title:
      "Website Maintenance",

    icon:
      FiBriefcase,

    text:
      "Updating and improving existing websites."
  }
];

export const testimonials = [];

export const achievements = [
  "Completed multiple personal web projects.",
  "Built responsive websites using React.",
  "Practiced database design and CRUD operations."
];

export const certifications = [
  {
    label:
      "Database Administration",

    icon:
      FiDatabase
  },

  {
    label:
      "Frontend Development",

    icon:
      FiCode
  }
];

export const contactDetails = [
  {
    label:
      "Email",

    value:
      profile.email,

    href:
      `mailto:${profile.email}`,

    icon:
      FiMail
  },

  {
    label:
      "Phone",

    value:
      profile.phone,

    href:
      `tel:${profile.phone.replaceAll(" ", "")}`,

    icon:
      FiPhone
  },

  {
    label:
      "Location",

    value:
      profile.location,

    href:
      "https://maps.google.com/?q=Addis+Ababa,Ethiopia",

    icon:
      FiMapPin
  },

  {
    label:
      "Status",

    value:
      "Open to opportunities",

    href:
      "#contact",

    icon:
      FiStar
  }
];
