export default function AboutSection() {
    return (
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
    );
  }
  