import { useRef } from "react";
import { motion } from "framer-motion";
import { stats } from "../data/portfolio";
import { useCounter } from "../hooks/useCounter";
import { fadeUp, staggerContainer } from "../utils/motion";
import Section from "./Section";

function StatCard({ item }) {
  const ref = useRef(null);
  const value = useCounter(ref, item.value);

  return (
    <motion.div ref={ref} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-5xl font-black text-slate-950 dark:text-white">
        {value}
        {item.suffix}
      </p>
      <p className="mt-3 font-bold text-slate-500 dark:text-slate-400">{item.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <Section id="statistics" eyebrow="Statistics" title="Measured progress across years of client work.">
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {stats.map((item) => (
          <StatCard key={item.label} item={item} />
        ))}
      </motion.div>
    </Section>
  );
}
