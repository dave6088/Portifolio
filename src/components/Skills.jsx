import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A balanced toolkit for modern web products." className="bg-white/45 dark:bg-white/[0.02]">
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article key={group.title} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/60">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{group.title}</h3>
              </div>
              <div className="grid gap-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between gap-4 text-sm font-black">
                      <span>{skill.name}</span>
                      <span className="text-teal-700 dark:text-teal-300">{skill.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-rose-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
