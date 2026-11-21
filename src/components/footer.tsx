import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Alex Morgan. Feito com cuidado e café.
        </p>
        <Link
          href="#sobre"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-lime-700 dark:text-slate-300 dark:hover:text-lime-400"
        >
          Voltar ao topo <ArrowUp size={15} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
