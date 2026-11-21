import type { IconType } from "react-icons";
import {
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  name: string;
  level: string;
  icon: IconType;
};

export type SkillGroup = {
  name: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Front-end",
    description: "Interfaces acessíveis, responsivas e rápidas.",
    skills: [
      { name: "React", level: "Avançado", icon: SiReact },
      { name: "Next.js", level: "Avançado", icon: SiNextdotjs },
      { name: "TypeScript", level: "Avançado", icon: SiTypescript },
      { name: "JavaScript", level: "Avançado", icon: SiJavascript },
      { name: "HTML & CSS", level: "Avançado", icon: SiHtml5 },
      { name: "Tailwind CSS", level: "Avançado", icon: SiTailwindcss },
    ],
  },
  {
    name: "Back-end & dados",
    description: "APIs e estruturas que sustentam bons produtos.",
    skills: [
      { name: "Node.js", level: "Intermediário", icon: SiNodedotjs },
      { name: "PostgreSQL", level: "Intermediário", icon: SiPostgresql },
    ],
  },
  {
    name: "Fluxo de trabalho",
    description: "Da ideia ao protótipo, com colaboração no caminho.",
    skills: [
      { name: "Git", level: "Avançado", icon: SiGit },
      { name: "Figma", level: "Intermediário", icon: SiFigma },
    ],
  },
];
