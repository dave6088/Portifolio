export default function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition";
  const styles = {
    primary: "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-100",
    secondary: "border border-slate-300 bg-white/70 text-slate-900 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal-300",
    ghost: "text-slate-700 hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-200"
  };

  return (
    <a className={`${base} ${styles[variant]} ${className}`} href={href} {...props}>
      {children}
    </a>
  );
}
