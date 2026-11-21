"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const contactEmail = "hello@alexmorgan.dev";

export function ContactSection() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setFeedback("Preencha todos os campos para continuar.");
      return;
    }

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`Olá, Alex!\n\n${message}\n\nMeu email: ${email}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFeedback("Seu aplicativo de email deve abrir com a mensagem pronta.");
    event.currentTarget.reset();
  }

  return (
    <section
      id="contato"
      className="section-space scroll-mt-20 bg-slate-100/70 dark:bg-slate-900/35"
    >
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Vamos conversar"
              title="Tem uma ideia? Me conte."
              description="Estou sempre aberto a conhecer projetos interessantes, trocar ideias ou simplesmente falar sobre tecnologia e design."
            />
            <a
              href={`mailto:${contactEmail}`}
              className="group inline-flex items-center gap-3 text-lg font-semibold text-slate-900 transition hover:text-lime-700 dark:text-white dark:hover:text-lime-400"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-lime-400/20 text-lime-700 dark:text-lime-400">
                <Mail size={18} aria-hidden="true" />
              </span>
              {contactEmail}
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="mt-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Me encontre por aí
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="https://github.com/alexmorgan-dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub de Alex Morgan"
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-lime-500 hover:text-lime-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-lime-400"
                >
                  <Github size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alexmorgan-dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de Alex Morgan"
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-lime-500 hover:text-lime-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-lime-400"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="surface-card rounded-3xl p-6 sm:p-8"
            aria-label="Formulário de contato"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Seu nome
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Como posso te chamar?"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-lime-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Seu email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="voce@email.com"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-lime-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Como posso ajudar?
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={4000}
                rows={5}
                placeholder="Conte um pouco sobre sua ideia..."
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-lime-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>
            <div className="mt-5 flex flex-col items-start gap-4 min-[460px]:flex-row min-[460px]:items-center min-[460px]:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-lime-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Enviar mensagem <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                O envio abre seu aplicativo de email.
              </p>
            </div>
            <p className="mt-4 min-h-5 text-sm text-lime-700 dark:text-lime-300" aria-live="polite">
              {feedback}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
