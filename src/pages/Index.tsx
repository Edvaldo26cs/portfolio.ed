import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechnicalSkills from "@/components/portfolio/TechnicalSkills";
import SoftSkills from "@/components/portfolio/SoftSkills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Volunteering from "@/components/portfolio/Volunteering";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <SoftSkills />
        <Experience />
        <Education />
        <Projects />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
