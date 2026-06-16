import { motion } from "framer-motion";
import { FiArrowDown, FiBriefcase, FiSend } from "react-icons/fi";
import profileImage from "../assets/profile.svg";
import { profile, stats } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28">
      <motion.div
        className="grid w-full items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-teal-300/50 bg-teal-50 px-4 py-2 text-sm font-black text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200">
            {profile.availability}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-black leading-[0.95] text-slate-950 dark:text-white sm:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-2xl font-black text-teal-700 dark:text-teal-300 sm:text-3xl">
            {profile.role}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.bio}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">
              View Projects <FiArrowDown aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me <FiSend aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#experience" variant="ghost">
              Experience <FiBriefcase aria-hidden="true" />
            </ButtonLink>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="focus-ring grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
            <img className="aspect-[0.95] w-full rounded-[1.5rem] object-cover" src={profileImage} alt={`${profile.name} professional profile`} />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-8">
            {stats.slice(0, 2).map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/50 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  {item.value}
                  {item.suffix}
                </p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
