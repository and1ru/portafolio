export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white">
            Get to know me
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <p className="text-lg leading-9 text-slate-300">
            I'm a <span className="font-semibold text-white">Full Stack Developer</span> from{" "}
            <span className="font-semibold text-white">Colombia</span>, passionate
            about building modern web applications that solve real-world problems.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Throughout my learning journey, I've developed responsive applications
            covering different business domains, including a{" "}
            <span className="text-white">Point of Sale (POS)</span>, an{" "}
            <span className="text-white">Academic Management System</span>, a{" "}
            <span className="text-white">Restaurant Management System</span>, and a{" "}
            <span className="text-white">Social Network</span>.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            These projects have allowed me to gain experience designing responsive
            interfaces, developing REST APIs, implementing authentication and
            authorization, managing relational and NoSQL databases, building
            real-time features with WebSockets, and applying business logic to
            create complete full-stack solutions.
          </p>
        </div>
      </div>
    </section>
  );
}