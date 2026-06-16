import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Services from "../components/Services.jsx";
import Skills from "../components/Skills.jsx";
import Stats from "../components/Stats.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
