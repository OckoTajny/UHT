interface ProjectCardProps {
    title: string;
    text: string;
    link: string;
  }
  
  export default function ProjectCard({ title, text, link }: ProjectCardProps) {
    return (
      <div className="bg-[rgba(20,22,36,0.85)] border border-[#23263a] rounded-xl p-8 shadow-[0_2px_18px_#0ff2,0_1px_0_#23263a] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_4px_32px_#0ff6,0_2px_0_#23263a] transition">
        <h2 className="text-[#0ff] text-[1.3rem] mb-4 tracking-wide">{title}</h2>
        <p className="text-[#b0b4c0] text-[1rem] mb-5">{text}</p>
        <a
          href={link}
          target="_blank"
          className="text-[#09f] text-[0.98rem] border-b border-dashed border-[#09f] hover:text-[#f0f] hover:border-[#f0f] transition"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    );
  }