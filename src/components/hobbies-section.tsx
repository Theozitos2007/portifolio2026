import { Camera, Coffee, Mountain, Music2 } from "lucide-react";
import { hobbies } from "@/data/hobbies";
import { SectionHeading } from "@/components/section-heading";

const hobbyIcons = {
  camera: Camera,
  coffee: Coffee,
  mountain: Mountain,
  music: Music2,
};

export function HobbiesSection() {
  return (
    <section id="hobbies" className="section-space scroll-mt-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Fora da tela"
          title="Um pouco de vida entre os pixels."
          description="Nem tudo é código. Essas são algumas das coisas que me inspiram, recarregam as energias e me lembram de olhar ao redor."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => {
            const Icon = hobbyIcons[hobby.icon];
            return (
              <article
                key={hobby.title}
                className="surface-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-500/50"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${hobby.color} transition-transform group-hover:rotate-[-6deg]`}
                >
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {hobby.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {hobby.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
