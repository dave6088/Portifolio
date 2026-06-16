import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { contactDetails } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import Section from "./Section";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please complete your name, email, and message before sending.");
      return;
    }

    const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || "Dawitdave517@gmail.com";
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client with the message prepared.");
    setForm(initialForm);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Have a project, role, or product challenge in mind?">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel rounded-3xl p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            Send a note for React development, UI/UX design, software delivery, database administration, or consulting engagements. The form is email-integration ready and can be connected to Formspree, Netlify Forms, Resend, or a custom API.
          </p>
          <div className="mt-8 grid gap-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <a key={detail.label} className="focus-ring flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition hover:border-teal-400 dark:border-white/10 dark:bg-white/5" href={detail.href}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-black text-slate-500 dark:text-slate-400">{detail.label}</span>
                    <span className="block font-bold text-slate-950 dark:text-white">{detail.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70 sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Name
              <input className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium dark:border-white/10 dark:bg-white/5" name="name" value={form.name} onChange={updateField} autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Email
              <input className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium dark:border-white/10 dark:bg-white/5" type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-black">
            Subject
            <input className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium dark:border-white/10 dark:bg-white/5" name="subject" value={form.subject} onChange={updateField} />
          </label>
          <label className="mt-4 grid gap-2 text-sm font-black">
            Message
            <textarea className="focus-ring min-h-40 resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium dark:border-white/10 dark:bg-white/5" name="message" value={form.message} onChange={updateField} />
          </label>
          {status && <p className="mt-4 rounded-xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 dark:bg-teal-300/10 dark:text-teal-200">{status}</p>}
          <button className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-700 dark:bg-white dark:text-slate-950" type="submit">
            Send Message <FiSend aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
