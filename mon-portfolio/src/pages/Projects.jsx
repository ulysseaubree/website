// --- Projects.jsx ---
import { ProjectCard } from "../components/ProjectCard";
export function Projects() {
  const projects = [
    { title: "Projet 1", desc: "Une courte description.", link: "/projects/1" },
    { title: "Projet 2", desc: "Une courte description.", link: "/projects/2" }
  ];
  return (
    <section className="px-6 py-20 bg-white">
    <h3 className="text-3xl font-bold text-center mb-12">Mes projets</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} desc={p.desc} link={p.link} />
    ))}
  </div>
</section>
);
}