import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HobbiesSection } from "@/components/hobbies-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-lime-400 px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
