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

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
                    >
                      <Icon
                        size={42}
                        className="text-blue-400"
                      />

                      <span className="mt-3 text-sm font-medium text-slate-300">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}