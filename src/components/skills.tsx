import { skills } from "../helper/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-white">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            These are the technologies I've learned throughout my journey as a
            Full Stack Developer and use to build modern web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}