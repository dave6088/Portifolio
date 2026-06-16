import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline of product teams, delivery, and ownership." className="bg-white/45 dark:bg-white/[0.02]">
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-200 dark:bg-white/10 sm:left-1/2" aria-hidden="true" />
        <div className="grid gap-8">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.duration}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className={`relative grid gap-5 pl-12 sm:grid-cols-2 sm:pl-0 ${index % 2 ? "sm:[&>div]:col-start-2" : ""}`}
            >
              <span className="absolute left-1 top-6 h-7 w-7 rounded-full border-4 border-white bg-teal-500 shadow-lg dark:border-slate-950 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70">
                <p className="text-sm font-black text-teal-700 dark:text-teal-300">{job.duration}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{job.position}</h3>
                <p className="mt-1 font-bold text-slate-500 dark:text-slate-400">{job.company}</p>
                <ul className="mt-5 grid gap-3">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="leading-7 text-slate-600 dark:text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
