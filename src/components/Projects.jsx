import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

export default function Projects() {
  const [active, setActive] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <Section id="projects" eyebrow="Projects" title="Selected builds with product polish and technical care.">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`focus-ring rounded-xl border px-4 py-2 text-sm font-black transition ${
              active === category
                ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                : "border-slate-200 bg-white/70 text-slate-700 hover:border-teal-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            }`}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="grid gap-6 lg:grid-cols-3" variants={staggerContainer} initial="hidden" animate="visible">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              layout
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.96 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-950/70"
            >
              <img className="aspect-[4/3] w-full object-cover" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
              <div className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">{project.category}</p>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a className="focus-ring inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-white dark:text-slate-950" href={project.demo} target="_blank" rel="noreferrer">
                    Demo <FiExternalLink aria-hidden="true" />
                  </a>
                  <a className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-black transition hover:border-teal-400 dark:border-white/10" href={project.github} target="_blank" rel="noreferrer">
                    Code <FiGithub aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
