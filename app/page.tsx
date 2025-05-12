import Header from "./components/Header";
import ProjectsSection from "./components/ProjectVec";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f111a] text-[#e0e0e0] font-mono flex flex-col items-center">
      <link
        href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <Header />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}