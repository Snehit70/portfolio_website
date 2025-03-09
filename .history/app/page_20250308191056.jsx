import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ThemeToggle />
    </main>
  );
} 