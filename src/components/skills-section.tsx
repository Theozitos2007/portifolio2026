"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-space scroll-mt-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Meu toolkit"
          title="As ferramentas do dia a dia."
          description="Tecnologias que uso para transformar problemas em produtos confiáveis, mantendo a vontade de aprender algo novo."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="surface-card rounded-3xl p-6 sm:p-7"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
                0{groupIndex + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
                {group.name}
              </h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {group.description}
              </p>
              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  const score = skill.level === "Avançado" ? 88 : 64;
                  return (
                    <div key={skill.name} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                          role="meter"
                          aria-label={`Proficiência em ${skill.name}: ${skill.level}`}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={score}
                          aria-valuetext={skill.level}
                        >
                          <div
                            className={`h-full rounded-full bg-lime-500 ${
                              score === 88 ? "w-[88%]" : "w-[64%]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
