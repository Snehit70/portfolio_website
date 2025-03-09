'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/utils/constants';
import SocialIcon from './ui/SocialIcon';

export default function Footer() {
  return (
    <footer className="py-6 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-light-100/50 dark:bg-dark-800/50 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {SOCIAL_LINKS.map((social) => (
              <SocialIcon
                key={social.name}
                href={social.url}
                icon={social.icon}
                label={`Visit ${social.name}`}
              />
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-sm text-dark-600 dark:text-light-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
} 