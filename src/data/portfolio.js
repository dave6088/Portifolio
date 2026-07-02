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
  FiTool,
  FiTwitter
} from "react-icons/fi";
import dashboardPreview from "../assets/Restaurant_Menu.png";
import commercePreview from "../assets/Merkato_Store.png";
import studioPreview from "../assets/Portifolio.png";

export const profile = {
  name: "Dawit Shibru",
  role: "FullStack web Developer and Database Administrator",
  location: "Addis Ababa, Ethiopia",
  phone: "+251960883518",
  email: "Dawitdave517@gmail.com",
  bio: "I am passionate about building responsive websites, modern web applications, and database-driven systems using current web technologies",
  intro:"I build clean and professional websites and web applications.",
  availability: "Available for internships, freelance projects,  developer roles, and web development opportunities.",
  socials: [
    { label: "GitHub", href: "https://github.com/dave6088", icon: FiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dawit-shibru-26a885323", icon: FiLinkedin },
    { label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
    { label: "Email", href: "mailto:Dawitdave517@gmail.com", icon: FiMail }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Tehnologies Learned", value: 3, suffix: "+" },
  { label: "Certificates", value: 3, suffix: "+" },
  { label: "Internship Experience", value: 1, suffix: "" }
];

export const highlights = [
  {
    title: "FullStack Development",
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
      { name: "React ", level: 96 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "HTML/CSS", level: 86 }
    ]
  },
  {
    title: "Backend",
    icon: FiServer,
    items: [
      { name: "Node.js", level: 84 },
      { name: "Python", level: 88 },
      { name: "Java", level: 82 },
      { name: "PHP", level: 78 }
    ]
  },
  {
    title: "Database",
    icon: FiDatabase,
    items: [
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 74 },
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 82 }
    ]
  },
  {
    title: "Tools",
    icon: FiTool,
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code ", level: 93 },
      { name: "Figma", level: 88 },
      { name: "CI / Deployment", level: 81 }
    ]
  }
];

export const projects = [
  {
    title: "Restaurant Menu",
    category: "Dashboard",
    image: dashboardPreview,
    description:
      " A dashboard project for managing Restaurant Menu System.",
    tech: ["React", "Vite", "Tailwind","Node.js","Express"],
    demo: "https://dave6088/Task_Manager",
    github: "https://github.com/dave6088"
  },
  {
    title: "E-Commerce Website ",
    category: "Web Application",
    image: commercePreview,
    description:
     "An online store interface with product listing and shopping features.",
    tech: ["React", "MySQL", "Node.js", "PostgreSQL"],
    demo: "https://dave6088.",
    github: "https://github.com/dave6088"
  },
  {
    title: "Porrifolio website",
    category: "Website",
    image: studioPreview,
    description:
       "A personal portfolio website to showcase skills and projects.",
    tech: ["React Router", "Framer Motion", "Tailwind", "Netlify"],
    demo: "https://dave6088.github.io/luma-studio/",
    github: "https://github.com/dave6088/luma-studio"
  }
];

export const experience = [
  {
    company: "Personal Projects",
    position: " FullStack Developer",
    duration: "2026-present",
    responsibilities: [
  "Built personal web applications using React.",
      "Practiced responsive design and component structure.",
      "Integrated APIs and improved UI performance."
    ]
  }
];

export const education = [
  {
    degree: "BSc. Computer Science",
    institution: "St.Mary's University",
    year: "2026",
    achievements:  "Successfully completed undergraduate studies and developed academic and practical software projects."
  },
  {
    degree: "Database Administration Professional Certificate",
    institution: "Misrak Politechnical college",
    year: "2021",
    achievements: "Completed SQL Server administration, backup strategy, query optimization, and security modules."
  }
];

export const services = [
  { title: "Web Development", icon: FiGlobe, text: "Production React apps, marketing sites, dashboards, and component systems." },
  { title: "UI/UX Design", icon: FiFigma, text: "Interaction flows, polished interface design, and Figma-to-code execution." },
  { title: "Database Design ", icon: FiCpu, text: "Frontend-heavy product engineering with API integration and robust state handling." },
  { title: "Website Maintenance", icon: FiBriefcase, text: "Architecture audits, performance reviews, accessibility passes, and delivery planning." }
];

export const testimonials = [
];

export const achievements = [
  "Completed multiple personal web projects.",
  "Built responsive websites using React.",
  "Practiced database design and CRUD operations."
];

export const certifications = [
  { label: "Database Administration", icon: FiCode },
  { label: "Frontend Development", icon: FiDatabase },
  { label: "UX Accessibility Foundations", icon: FiAward }
];

export const contactDetails = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: FiPhone },
  { label: "Location", value: profile.location, href: "https://maps.google.com/?q=Addis+Ababa,Ethiopia", icon: FiMapPin },
  { label: "Rating", value: "5.0 client average", href: "#testimonials", icon: FiStar }
];
