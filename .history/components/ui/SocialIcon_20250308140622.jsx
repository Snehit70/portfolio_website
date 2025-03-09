'use client';

import { motion } from 'framer-motion';

export default function SocialIcon({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-light-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon size={24} />
    </motion.a>
  );
} 