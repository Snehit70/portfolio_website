'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiFolder, FiBook, FiMail } from 'react-icons/fi';
import { SiKaggle } from 'react-icons/si';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/', icon: <FiHome size={20} /> },
  { name: 'About', href: '#about', icon: <FiUser size={20} /> },
  { name: 'Skills', href: '#skills', icon: <FiCode size={20} /> },
  { name: 'Projects', href: '#projects', icon: <FiFolder size={20} /> },
  { name: 'Kaggle', href: '#kaggle', icon: <SiKaggle size={20} /> },
  { name: 'Education', href: '#education', icon: <FiBook size={20} /> },
  { name: 'Contact', href: '#contact', icon: <FiMail size={20} /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
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
              className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-light-100 dark:hover:bg-dark-800 transition-colors"
            >
              <span className="text-dark-700 dark:text-light-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {link.icon}
              </span>
              <span className="absolute -bottom-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 text-sm font-medium text-dark-700 dark:text-light-200 whitespace-nowrap bg-light-100 dark:bg-dark-800 px-2 py-1 rounded">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
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