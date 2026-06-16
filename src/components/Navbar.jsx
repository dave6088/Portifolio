import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/72">
      <nav className="section-shell flex h-20 items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-xl" aria-label={`${profile.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">
            DS
          </span>
          <span className="hidden text-sm font-black leading-tight sm:block">
            {profile.name}
            <span className="block font-semibold text-slate-500 dark:text-slate-400">Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDark((current) => !current)}
          >
            {dark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="section-shell pb-4 lg:hidden">
          <div className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
