import ProjectCard from "./ProjectCard";

const projects = [
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
    title: "Base X crypter/decrypter",
    text: "Is able to crypt and decrypt text using any base from 2 to 10000, is very buggy :D",
    link: "https://github.com/OckoTajny/Ultimate_hacking_tools/blob/main/base64_crypter.py",
  },
  {
    title: "More Tools",
    text: "Explore other scripts and utilities for penetration testing and cybersecurity research.",
    link: "https://github.com/OckoTajny/Ultimate_hacking_tools",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="grid gap-10 w-[90vw] max-w-[1000px] mt-12 mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
