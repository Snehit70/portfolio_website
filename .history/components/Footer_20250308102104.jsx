import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: <FiGithub size={20} />, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: <FiTwitter size={20} />, href: 'https://twitter.com/yourusername' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              Your Name
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A passionate web developer focused on creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Your City, State, Country</li>
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p className="flex items-center justify-center">
            © {currentYear} Your Name. All rights reserved. Made with 
            <FiHeart className="mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 