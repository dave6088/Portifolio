import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { education } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Formal foundations with practical, ongoing learning.">
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {education.map((item) => (
          <motion.article key={item.degree} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <FiAward className="mb-5 text-3xl text-teal-600 dark:text-teal-300" aria-hidden="true" />
            <p className="text-sm font-black text-teal-700 dark:text-teal-300">{item.year}</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{item.degree}</h3>
            <p className="mt-2 font-bold text-slate-500 dark:text-slate-400">{item.institution}</p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.achievements}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
