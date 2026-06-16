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
import dashboardPreview from "../assets/project-dashboard.svg";
import commercePreview from "../assets/project-commerce.svg";
import studioPreview from "../assets/project-studio.svg";

export const profile = {
  name: "Dawit Shibru",
  role: "Web Developer and Database Administrator",
  location: "Addis Ababa, Ethiopia",
  phone: "+251960883518",
  email: "Dawitdave517@gmail.com",
  bio: "I build polished React products , reliable database-backed systems, and accessible interfaces for teams that care about speed, clarity, and details users can feel.",
  intro:
    "Over the past seven years, I have helped businesses and product teams turn complex workflows into responsive, maintainable web applications with strong data foundations.",
  availability: "Available for React frontend development, database administration, design systems, and product UI consulting.",
  socials: [
    { label: "GitHub", href: "https://github.com/dave6088", icon: FiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: FiLinkedin },
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
  { label: "Years experience", value: 7, suffix: "+" },
  { label: "Projects shipped", value: 48, suffix: "+" },
  { label: "Clients served", value: 26, suffix: "+" },
  { label: "Certifications", value: 9, suffix: "" }
];

export const highlights = [
  { title: "Product UI", text: "Interfaces that support real workflows, not just screenshots.", icon: FiLayers },
  { title: "Performance", text: "Measured loading, rendering, and interaction quality from day one.", icon: FiActivity },
  { title: "Accessibility", text: "Semantic layouts, keyboard paths, contrast, and resilient states.", icon: FiShield },
  { title: "Delivery", text: "Clear communication, clean releases, and maintainable handoff documentation.", icon: FiCheckCircle }
];

export const skills = [
  {
    title: "Frontend",
    icon: FiCode,
    items: [
      { name: "React / Router", level: 96 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 86 }
    ]
  },
  {
    title: "Backend",
    icon: FiServer,
    items: [
      { name: "Node.js", level: 84 },
      { name: "Python", level: 88 },
      { name: "Java", level: 82 },
      { name: "Serverless", level: 78 }
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
      { name: "Vite", level: 93 },
      { name: "Figma", level: 88 },
      { name: "CI / Deployment", level: 81 }
    ]
  }
];

export const projects = [
  {
    title: "PulseOps Analytics",
    category: "Dashboard",
    image: dashboardPreview,
    description:
      "A SaaS analytics workspace with role-based dashboards, real-time KPI cards, and accessible data visualizations.",
    tech: ["React", "Vite", "Tailwind", "Recharts"],
    demo: "https://dave6088.github.io/pulseops-analytics/",
    github: "https://github.com/dave6088/pulseops"
  },
  {
    title: "Northstar Commerce",
    category: "Ecommerce",
    image: commercePreview,
    description:
      "A conversion-focused storefront with product filtering, checkout-ready flows, and performance-minded image handling.",
    tech: ["React", "Stripe", "Node.js", "PostgreSQL"],
    demo: "https://dave6088.github.io/northstar-commerce/",
    github: "https://github.com/dave6088/northstar-commerce"
  },
  {
    title: "Luma Studio",
    category: "Website",
    image: studioPreview,
    description:
      "A refined agency portfolio system with reusable content blocks, animated case studies, and CMS-ready structure.",
    tech: ["React Router", "Framer Motion", "Tailwind", "Netlify"],
    demo: "https://dave6088.github.io/luma-studio/",
    github: "https://github.com/dave6088/luma-studio"
  }
];

export const experience = [
  {
    company: "Kinetic Labs",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    responsibilities: [
      "Lead React architecture for customer-facing SaaS workflows.",
      "Built a shared component system that reduced feature delivery time by 32%.",
      "Improved Lighthouse performance scores from the low 70s to 96+."
    ]
  },
  {
    company: "BrightLayer Studio",
    position: "Frontend and Database Developer",
    duration: "2020 - 2023",
    responsibilities: [
      "Delivered responsive websites and product dashboards for funded startups.",
      "Partnered with designers to translate Figma systems into production UI.",
      "Introduced accessibility reviews and regression checklists."
    ]
  },
  {
    company: "Nexa Digital",
    position: "Junior Software Developer",
    duration: "2018 - 2020",
    responsibilities: [
      "Built reusable UI modules for marketing and ecommerce projects.",
      "Integrated REST APIs, forms, and analytics tracking.",
      "Maintained client sites with clean Git workflows and release notes."
    ]
  }
];

export const education = [
  {
    degree: "BSc. Software Engineering",
    institution: "African Leadership University",
    year: "2018",
    achievements: "Graduated with distinction; led the campus web guild and final-year product incubator."
  },
  {
    degree: "Database Administration Professional Certificate",
    institution: "Microsoft Learn and Applied Labs",
    year: "2021",
    achievements: "Completed SQL Server administration, backup strategy, query optimization, and security modules."
  }
];

export const services = [
  { title: "Web Development", icon: FiGlobe, text: "Production React apps, marketing sites, dashboards, and component systems." },
  { title: "UI/UX Design", icon: FiFigma, text: "Interaction flows, polished interface design, and Figma-to-code execution." },
  { title: "Software Development", icon: FiCpu, text: "Frontend-heavy product engineering with API integration and robust state handling." },
  { title: "Consulting", icon: FiBriefcase, text: "Architecture audits, performance reviews, accessibility passes, and delivery planning." }
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "Founder, PulseOps",
    quote:
      "Dawit brought senior product judgment to every screen. The dashboard shipped faster than expected and felt premium from the first demo."
  },
  {
    name: "Daniel Reed",
    role: "Design Director, BrightLayer",
    quote:
      "The implementation quality was excellent. Motion, responsiveness, and accessibility all matched the design intent without drama."
  },
  {
    name: "Amina Okafor",
    role: "COO, Northstar Retail",
    quote:
      "Our storefront became clearer, faster, and easier to manage. Dawit communicates tradeoffs like a real partner."
  }
];

export const achievements = [
  "Reduced dashboard interaction latency by 42% through render profiling and component splitting.",
  "Designed reusable UI systems adopted across ecommerce, SaaS, and internal admin tools.",
  "Built secure database backup and reporting workflows for growing operations teams."
];

export const certifications = [
  { label: "React Advanced Patterns", icon: FiCode },
  { label: "Database Administration", icon: FiDatabase },
  { label: "UX Accessibility Foundations", icon: FiAward }
];

export const contactDetails = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: FiPhone },
  { label: "Location", value: profile.location, href: "https://maps.google.com/?q=Addis+Ababa,Ethiopia", icon: FiMapPin },
  { label: "Rating", value: "5.0 client average", href: "#testimonials", icon: FiStar }
];
