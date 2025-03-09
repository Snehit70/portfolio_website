'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiFolder, FiBook, FiMail } from 'react-icons/fi';
import { SiKaggle } from 'react-icons/si';

const navLinks = [
  { name: 'Home', href: '/', icon: <FiHome className="mr-1" /> },
  { name: 'About', href: '#about', icon: <FiUser className="mr-1" /> },
  { name: 'Skills', href: '#skills', icon: <FiCode className="mr-1" /> },
  { name: 'Projects', href: '#projects', icon: <FiFolder className="mr-1" /> },
  { name: 'Kaggle', href: '#kaggle', icon: <SiKaggle className="mr-1" /> },
  { name: 'Education', href: '#education', icon: <FiBook className="mr-1" /> },
  { name: 'Contact', href: '#contact', icon: <FiMail className="mr-1" /> },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-light-200/50 dark:border-dark-700/50 transition-colors duration-300">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500"
        >
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-dark-700 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu implementation would go here */}
          <button className="text-dark-700 dark:text-light-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
} 