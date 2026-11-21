"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#formacao", label: "Formação" },
  { href: "#hobbies", label: "Hobbies" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav
        className="section-wrap flex h-[4.5rem] items-center justify-between"
        aria-label="Navegação principal"
      >
        <Link
          href="#sobre"
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          onClick={() => setMenuOpen(false)}
        >
          am<span className="text-lime-500">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-500 hover:text-slate-950 dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
          >
            Vamos conversar
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-slate-200"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="section-wrap flex flex-col py-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm text-slate-700 dark:text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="mb-2 mt-1 rounded-full bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Vamos conversar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
