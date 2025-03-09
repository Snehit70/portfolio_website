'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiFolder, FiBook, FiMail } from 'react-icons/fi';
import { SiKaggle } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/utils/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500"
        >
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-light-100 dark:hover:bg-dark-800 transition-colors"
            >
              <span className="text-dark-700 dark:text-light-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                <link.icon size={20} />
              </span>
              <span className="absolute -bottom-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 text-sm font-medium text-dark-700 dark:text-light-200 whitespace-nowrap bg-light-100 dark:bg-dark-800 px-2 py-1 rounded">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-light-100 dark:hover:bg-dark-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <span className={`block w-full h-0.5 bg-dark-700 dark:bg-light-200 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-full h-0.5 bg-dark-700 dark:bg-light-200 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-dark-700 dark:bg-light-200 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 hover:bg-light-100 dark:hover:bg-dark-800 rounded-lg text-dark-700 dark:text-light-200 transition-colors"
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 