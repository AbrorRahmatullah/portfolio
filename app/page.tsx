import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <GitHubStats />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
