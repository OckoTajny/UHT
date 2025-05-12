import NavLink from "./Nav";

export default function Header() {
  return (
    <header className="w-full py-8 text-center bg-gradient-to-r from-[#0f111a] via-[#0f111a] to-[#1a1d2d] border-b border-[#23263a]">
      <h1 className="text-[2.5rem] m-0 tracking-wider bg-gradient-to-r from-[#0ff] via-[#09f] to-[#f0f] bg-clip-text text-transparent">
        Ultimate Hacking Tools
      </h1>
      <nav className="mt-8 mb-12 flex justify-center gap-8">
        <NavLink href="https://github.com/OckoTajny/Ultimate_hacking_tools" text="GitHub Repo" external />
        <NavLink href="#projects" text="Projects" />
        <NavLink href="#about" text="About" />
      </nav>
    </header>
  );
}
