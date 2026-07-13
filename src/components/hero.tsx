export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Hello, I'm Andrés
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          Full Stack Developer
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-500"
          >
            Download CV
          </a>

          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition duration-300 hover:border-blue-500 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition duration-300 hover:border-blue-500 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}