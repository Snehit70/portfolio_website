import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Kaggle from '../components/Kaggle';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Kaggle />
      <Education />
      <Contact />
    </div>
  );
} 