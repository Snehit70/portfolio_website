import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="animate-fade-in text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Web Developer & Designer
            </h2>
            <p className="animate-fade-in text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I build exceptional, high-performance websites and applications
              that solve real-world problems and deliver outstanding user experiences.
            </p>
            
            <div className="animate-fade-in flex space-x-4 mb-8">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <FiTwitter size={24} />
              </a>
            </div>
            
            <div className="animate-fade-in flex space-x-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-fade-in">
              <Image
                src="/images/profile.jpg"
                alt="Your Name"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 