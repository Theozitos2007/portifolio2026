"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="sobre"
      className="section-wrap relative flex min-h-[760px] scroll-mt-24 items-center overflow-hidden pb-20 pt-32 sm:min-h-[820px] lg:min-h-[850px]"
    >
      <div
        className="pointer-events-none absolute -right-36 top-28 h-[30rem] w-[30rem] rounded-full bg-lime-400/10 blur-[100px] dark:bg-lime-400/[0.08]"
        aria-hidden="true"
      />
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="eyebrow">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500" />
            </span>
            Disponível para novos projetos
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Olá, eu sou
            <br />
            <span className="text-lime-600 dark:text-lime-400">Alex Morgan.</span>
          </h1>
          <p className="mt-6 font-display text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl">
            Desenvolvedor Full Stack
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
            Transformo ideias em experiências digitais simples, úteis e cheias de personalidade.
            Código bem pensado, design com intenção e curiosidade em cada detalhe.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row">
            <Link
              href="#projetos"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
            >
              Ver projetos
              <ArrowDownRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-800 transition hover:border-lime-500 hover:text-lime-700 dark:border-slate-700 dark:text-slate-200 dark:hover:text-lime-300"
            >
              Entrar em contato
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <span className="h-px w-10 bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
            Baseado em São Paulo, Brasil · trabalhando globalmente
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px]"
          aria-label="Ilustração de avatar abstrato"
          role="img"
        >
          <div className="absolute -left-7 top-16 z-10 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/90 sm:block">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-400/15 text-lime-600 dark:text-lime-400">
                <Sparkles size={18} aria-hidden="true" />
              </span>
              <span className="text-xs font-medium leading-5 text-slate-700 dark:text-slate-200">
                Design com
                <br />
                propósito
              </span>
            </div>
          </div>
          <div className="absolute -right-4 bottom-14 z-10 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/90 sm:-right-8">
            <p className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              4<span className="text-lime-500">+</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">anos criando na web</p>
          </div>
          <div className="relative aspect-[0.88] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-200 via-slate-100 to-lime-100 p-3 dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-lime-950/50">
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-lime-300 via-lime-400 to-emerald-500 dark:from-lime-300 dark:via-lime-500 dark:to-emerald-700">
              <div
                className="absolute -left-24 -top-20 h-72 w-72 rounded-full border border-white/30"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-28 -right-12 h-80 w-80 rounded-full border border-white/30"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.3),transparent_35%)]" />
              <span className="relative font-display text-[11rem] font-semibold leading-none tracking-[-0.12em] text-slate-950/80 sm:text-[13rem]">
                a<span className="text-white/75">m</span>
              </span>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/35 bg-white/15 px-4 py-3 text-white backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">Criando com intenção</span>
                <ArrowDown size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
