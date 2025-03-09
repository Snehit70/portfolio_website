'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS, PERSONAL_INFO } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="py-8 bg-light-100/50 dark:bg-dark-800/50 backdrop-blur-sm">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-dark-600 dark:text-light-300 text-sm max-w-xs">
              First-year BS in Data Science student at IIT Madras, passionate about programming and data analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-dark-600 dark:text-light-300 text-sm">
                Email: {PERSONAL_INFO.email}
              </p>
              <p className="text-dark-600 dark:text-light-300 text-sm">
                Location: {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-light-200 dark:border-dark-700 pt-4">
          <p className="text-center text-dark-600 dark:text-light-300 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 