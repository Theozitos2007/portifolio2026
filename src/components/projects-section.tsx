"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";

const previewStyles = {
  dashboard: {
    title: "Visão geral",
    label: "Saldo total",
    amount: "R$ 12.840,00",
    chart: "from-violet-400/60 via-indigo-400/40 to-transparent",
    badge: "+12,8%",
  },
  commerce: {
    title: "sonder / objetos",
    label: "Peças feitas à mão",
    amount: "Coleção 04",
    chart: "from-orange-300/70 via-rose-300/40 to-transparent",
    badge: "NOVO",
  },
  wellness: {
    title: "Bom dia, Alex",
    label: "Sequência atual",
    amount: "12 dias",
    chart: "from-emerald-400/60 via-teal-400/40 to-transparent",
    badge: "● HOJE",
  },
};

export function ProjectsSection() {
  return (
    <section id="projetos" className="section-space scroll-mt-20 bg-slate-100/70 dark:bg-slate-900/35">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Trabalhos selecionados"
            title="Ideias que ganharam forma."
            description="Uma seleção de produtos e experiências que mostram como gosto de resolver problemas — com cuidado no código e no design."
          />
          <Link
            href="https://github.com/alexmorgan-dev"
            target="_blank"
            rel="noreferrer"
            className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400"
          >
            Mais no GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const preview = previewStyles[project.preview];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group surface-card overflow-hidden rounded-3xl transition-shadow hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/20"
              >
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.theme} p-5`}>
                  <div className="absolute inset-0 bg-slate-200/40 dark:bg-slate-950/35" />
                  <div className="relative mx-auto h-full max-w-[290px] translate-y-3 rounded-t-2xl border border-white/50 bg-white/90 p-3 shadow-2xl shadow-slate-950/10 transition-transform duration-500 group-hover:translate-y-0 dark:border-slate-600 dark:bg-slate-900/90">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700">
                      <span className="text-[9px] font-semibold tracking-wide text-slate-800 dark:text-slate-200">
                        {preview.title}
                      </span>
                      <span className="flex gap-1">
                        <i className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        <i className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                    </div>
                    <div className="mt-3 flex items-start justify-between">
                      <div>
                        <p className="text-[8px] text-slate-500">{preview.label}</p>
                        <p className="mt-1 font-display text-sm font-semibold text-slate-900 dark:text-white">
                          {preview.amount}
                        </p>
                      </div>
                      <span className="rounded-full bg-lime-400/20 px-2 py-1 text-[7px] font-bold text-lime-700 dark:text-lime-300">
                        {preview.badge}
                      </span>
                    </div>
                    <div className={`mt-4 h-16 rounded-lg bg-gradient-to-t ${preview.chart}`} />
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((item) => (
                        <span
                          key={item}
                          className="h-5 rounded bg-slate-100 dark:bg-slate-800"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="absolute right-5 top-5 rounded-full border border-white/40 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-slate-700 backdrop-blur dark:bg-slate-950/50 dark:text-slate-200">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 left-5 font-display text-xs font-semibold text-slate-700/70 dark:text-slate-200/70">
                    {project.number} / 03
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={19}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-500"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400"
                    >
                      <ExternalLink size={14} aria-hidden="true" /> Demo
                    </Link>
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-lime-600 dark:text-slate-300 dark:hover:text-lime-400"
                    >
                      <Code2 size={14} aria-hidden="true" /> Código
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
