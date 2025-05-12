export default function App() {
    return (
      <div className="min-h-screen bg-[#0f111a] text-[#e0e0e0] font-mono flex flex-col items-center">
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
        <header className="w-full py-8 text-center bg-gradient-to-r from-[#0f111a] via-[#0f111a] to-[#1a1d2d] border-b border-[#23263a]">
          <h1 className="text-[2.5rem] m-0 tracking-wider bg-gradient-to-r from-[#0ff] via-[#09f] to-[#f0f] bg-clip-text text-transparent">
            Ultimate Hacking Tools
          </h1>
          <nav className="mt-8 mb-12 flex justify-center gap-8">
            <a
              href="https://github.com/OckoTajny/Ultimate_hacking_tools"
              target="_blank"
              className="text-[#0ff] text-[1.1rem] border-b border-transparent hover:border-[#0ff] transition"
            >
              GitHub Repo
            </a>
            <a
              href="#projects"
              className="text-[#0ff] text-[1.1rem] border-b border-transparent hover:border-[#0ff] transition"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-[#0ff] text-[1.1rem] border-b border-transparent hover:border-[#0ff] transition"
            >
              About
            </a>
          </nav>
        </header>
  
        <section
          id="projects"
          className="grid gap-10 w-[90vw] max-w-[1000px] mt-12 mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {[
            {
              title: "IP Port Scanner",
              text: "Scan for open ports on specified IP addresses.",
              link: "https://github.com/OckoTajny/Ultimate_hacking_tools/blob/main/port_scanner.py",
            },
            {
              title: "Random Password Generator",
              text: "Instantly create strong, random passwords for enhanced security. Customizable length and character sets.",
              link: "https://github.com/OckoTajny/Ultimate_hacking_tools/blob/main/random_password.py",
            },
            {
              title: "DDoS Attack Tool",
              text: "Simulate distributed denial-of-service attacks for testing and research. Use responsibly in controlled environments.",
              link: "https://github.com/OckoTajny/Ultimate_hacking_tools/blob/main/ddos.py",
            },
            {
              title: "More Tools",
              text: "Explore other scripts and utilities for penetration testing and cybersecurity research.",
              link: "https://github.com/OckoTajny/Ultimate_hacking_tools",
            },
          ].map(({ title, text, link }) => (
            <div
              key={title}
              className="bg-[rgba(20,22,36,0.85)] border border-[#23263a] rounded-xl p-8 shadow-[0_2px_18px_#0ff2,0_1px_0_#23263a] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_4px_32px_#0ff6,0_2px_0_#23263a] transition"
            >
              <h2 className="text-[#0ff] text-[1.3rem] mb-4 tracking-wide">
                {title}
              </h2>
              <p className="text-[#b0b4c0] text-[1rem] mb-5">{text}</p>
              <a
                href={link}
                target="_blank"
                className="text-[#09f] text-[0.98rem] border-b border-dashed border-[#09f] hover:text-[#f0f] hover:border-[#f0f] transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </section>
  
        <section
          id="about"
          className="max-w-[650px] mx-auto mb-16 text-center text-[#b0b4c0]"
        >
          <h2 className="text-[#0ff] text-[1.15rem] tracking-wide mb-4">
            About the Project
          </h2>
          <p>
            <b>Ultimate Hacking Tools</b> is an open-source collection by{" "}
            <span className="text-[#09f]">dandulblack</span> &amp;{" "}
            <span className="text-[#f0f]">OckoTajny</span>. Our goal: provide
            minimal, powerful, and modern utilities for ethical hacking, security
            research, and education.
            <br />
            <br />
            <span className="text-[#444c66] text-[0.98rem]">
              Always use these tools responsibly and with permission.
            </span>
          </p>
        </section>
  
        <footer className="mt-auto py-8 text-center text-[#444c66] text-[0.95rem] tracking-wide border-t border-[#23263a] w-full bg-gradient-to-r from-[#1a1d2d] to-[#0f111a]">
          &copy; 2025 dandulblack &amp; OckoTajny — Ultimate Hacking Tools
        </footer>
      </div>
    );
  }
  