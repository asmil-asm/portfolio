import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import EducationAndCertificates from './components/EducationAndCertificates.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
     

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationAndCertificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
