import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="section-shell">
        {(eyebrow || title) && (
          <motion.div
            className="mb-10 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
