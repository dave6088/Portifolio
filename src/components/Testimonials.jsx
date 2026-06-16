import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../data/portfolio";
import Section from "./Section";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[active];

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What clients say about the work." className="bg-white/45 dark:bg-white/[0.02]">
      <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            <blockquote className="max-w-4xl text-2xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-black text-slate-950 dark:text-white">{testimonial.name}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{testimonial.role}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {testimonials.map((item, index) => (
              <button
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 ${active === index ? "w-8 bg-teal-500" : "w-2.5 bg-slate-300 dark:bg-white/20"}`}
                type="button"
                key={item.name}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-teal-300 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-white/10 dark:text-white" type="button" aria-label="Previous testimonial" onClick={() => move(-1)}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-teal-300 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-white/10 dark:text-white" type="button" aria-label="Next testimonial" onClick={() => move(1)}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
