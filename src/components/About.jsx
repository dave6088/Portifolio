import { motion } from "framer-motion";
import { achievements, certifications, highlights, profile } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Thoughtful engineering for interfaces people use every day.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-panel rounded-3xl p-6 sm:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{profile.intro}</p>
          <div className="mt-8 grid gap-4">
            {achievements.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm font-semibold leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                <Icon className="mb-5 text-3xl text-teal-600 dark:text-teal-300" aria-hidden="true" />
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.article>
            );
          })}
          <motion.div variants={fadeUp} className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:col-span-2 dark:border-white/10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">Education and credentials</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {certifications.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                    <Icon className="mb-3 text-xl text-teal-200" aria-hidden="true" />
                    <p className="text-sm font-bold">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
