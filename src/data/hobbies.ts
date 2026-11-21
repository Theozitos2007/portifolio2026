export type HobbyIcon = "camera" | "coffee" | "mountain" | "music";

export const hobbies: {
  icon: HobbyIcon;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    icon: "camera",
    title: "Fotografia de rua",
    description: "Gosto de guardar pequenos recortes da cidade e das pessoas que passam por ela.",
    color: "bg-orange-400/10 text-orange-500",
  },
  {
    icon: "coffee",
    title: "Café sem pressa",
    description: "Experimentar um grão novo é meu jeito favorito de fazer uma pausa.",
    color: "bg-amber-400/10 text-amber-600",
  },
  {
    icon: "mountain",
    title: "Trilhas",
    description: "Um pouco de verde e um caminho novo ajudam a colocar as ideias no lugar.",
    color: "bg-emerald-400/10 text-emerald-600",
  },
  {
    icon: "music",
    title: "Música",
    description: "Sempre tem uma playlist tocando — especialmente enquanto estou criando.",
    color: "bg-violet-400/10 text-violet-500",
  },
];
