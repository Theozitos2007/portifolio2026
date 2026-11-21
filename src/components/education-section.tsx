import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import Link from "next/link";
import { certificates, education } from "@/data/education";
import { SectionHeading } from "@/components/section-heading";

export function EducationSection() {
  return (
    <section
      id="formacao"
      className="section-space scroll-mt-20 bg-slate-100/70 dark:bg-slate-900/35"
    >
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Aprendizado contínuo"
          title="Uma base que segue crescendo."
          description="Minha trajetória combina formação técnica, prática constante e curiosidade para continuar descobrindo."
        />
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <h3 className="mb-7 flex items-center gap-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-400/15 text-lime-700 dark:text-lime-400">
                <GraduationCap size={19} aria-hidden="true" />
              </span>
              Formação
            </h3>
            <ol className="relative space-y-8 border-l border-slate-300 pl-7 dark:border-slate-700">
              {education.map((item) => (
                <li key={item.course} className="relative">
                  <span
                    className="absolute -left-[2.13rem] top-1.5 h-3 w-3 rounded-full border-[3px] border-slate-100 bg-lime-500 ring-4 ring-slate-100 dark:border-slate-900 dark:ring-slate-900"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-700 dark:text-lime-400">
                    {item.period}
                  </p>
                  <h4 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                    {item.course}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.institution}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-7 flex items-center gap-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-400/15 text-lime-700 dark:text-lime-400">
                <Award size={19} aria-hidden="true" />
              </span>
              Certificados
            </h3>
            <div className="space-y-3">
              {certificates.map((certificate) => (
                <article
                  key={certificate.title}
                  className="surface-card flex items-center justify-between gap-4 rounded-2xl p-5 transition hover:border-lime-500/60"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {certificate.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {certificate.issuer} <span aria-hidden="true">·</span> {certificate.date}
                    </p>
                  </div>
                  <Link
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver certificado: ${certificate.title}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-lime-400 hover:text-slate-950 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-lime-400"
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
