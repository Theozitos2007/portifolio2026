export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  number: string;
  theme: string;
  preview: "dashboard" | "commerce" | "wellness";
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Orbit Finance",
    description:
      "Painel financeiro para organizar contas, acompanhar metas e entender para onde o dinheiro está indo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Produto digital",
    number: "01",
    theme: "from-violet-500/20 via-indigo-500/10 to-transparent",
    preview: "dashboard",
    demoUrl: "https://example.com/orbit-finance",
    repoUrl: "https://github.com/alexmorgan-dev/orbit-finance",
  },
  {
    title: "Sonder Studio",
    description:
      "Uma experiência de e-commerce minimalista para uma marca independente de objetos artesanais.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "E-commerce",
    number: "02",
    theme: "from-orange-400/20 via-rose-400/10 to-transparent",
    preview: "commerce",
    demoUrl: "https://example.com/sonder-studio",
    repoUrl: "https://github.com/alexmorgan-dev/sonder-studio",
  },
  {
    title: "Daily Ritual",
    description:
      "Aplicativo de hábitos com pequenas metas, acompanhamento de consistência e uma interface tranquila.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    category: "Aplicativo web",
    number: "03",
    theme: "from-emerald-400/20 via-teal-400/10 to-transparent",
    preview: "wellness",
    demoUrl: "https://example.com/daily-ritual",
    repoUrl: "https://github.com/alexmorgan-dev/daily-ritual",
  },
];
