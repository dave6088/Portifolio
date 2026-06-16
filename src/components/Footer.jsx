import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-10 dark:border-white/10 dark:bg-slate-950/75">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black text-slate-950 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <a key={link.href} className="focus-ring rounded-lg px-2 py-1 text-sm font-bold text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-200" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          {profile.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-700 dark:border-white/10 dark:text-white" href={social.href} aria-label={social.label}>
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
