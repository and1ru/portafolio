export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="flex h-16 max-w-7xl items-center px-6 lg:px-8">
        <ul className="mx-auto hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <li>
            <a
              href="#home"
              className="transition duration-200 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition duration-200 hover:text-white"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition duration-200 hover:text-white"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition duration-200 hover:text-white"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}