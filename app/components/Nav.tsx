interface NavLinkProps {
  href: string;
  text: string;
  external?: boolean;
}

export default function NavLink({ href, text, external = false }: NavLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[#0ff] text-[1.1rem] border-b border-transparent hover:border-[#0ff] transition"
    >
      {text}
    </a>
  );
}
