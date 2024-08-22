import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import ScrollProgress from "./sections/components/ScrollProgress";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden font-jakarta">
        <div className="bg-white dark:bg-gray-900">
          <Hero />
        </div>
        <AboutMe />
        <div
          id="journey"
          className="grid grid-cols-1 duration-300 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start lg:justify-start transition-background-colors dark:bg-gray-900 parallax"
          style={{ backgroundImage: "url('/img/background/journey.png')" }}
        >
          <Education />
          <Experience />
        </div>
        <Skill />
        <Project />
        <Contact />
        <Footer />
        <ScrollProgress />
      </div>
    </>
  );
}
