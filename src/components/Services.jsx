import { motion } from "framer-motion";
import { services } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Focused services for teams that need reliable frontend execution." className="bg-white/45 dark:bg-white/[0.02]">
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.title} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950/70">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
