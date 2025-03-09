'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Kaggle', href: '#kaggle' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-light-200/50 dark:border-dark-700/50 transition-colors duration-300">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 hover:opacity-80 transition-opacity"
        >
          Atulya Rai
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.li key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 