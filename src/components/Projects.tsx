import { projects } from "../helper/projecet";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            These projects represent real-world applications I've built to solve
            problems in different business domains, from education and
            restaurants to sales management and social networking.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}