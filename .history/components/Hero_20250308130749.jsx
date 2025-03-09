'use client';

import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent dark:from-primary-900/20 dark:via-transparent dark:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100/40 via-transparent to-transparent dark:from-secondary-900/20 dark:via-transparent dark:to-transparent" />
      
      <div className="container relative pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
              Hi, I'm <span className="inline-block">Atulya Rai</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-dark-600 dark:text-light-300 mb-6">
              BS in Data Science Student | IIT Madras
            </h2>
            <p className="text-lg text-dark-600 dark:text-light-300 mb-8 max-w-lg">
              First-year student from Karnataka, passionate about data science and programming. 
              Starting my journey at IIT Madras in May 2024. Currently focusing on Python projects 
              and building a strong foundation in data analysis.
            </p>
            
            <div className="flex space-x-6 mb-8">
              <motion.a 
                href="https://github.com/Snehit70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-primary-600 dark:text-light-300 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <FiGithub size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/atulya-rai-022b48315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-primary-600 dark:text-light-300 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={28} />
              </motion.a>
              <motion.a 
                href="mailto:atulyarai314@gmail.com" 
                className="text-dark-600 hover:text-primary-600 dark:text-light-300 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email Me"
              >
                <FiMail size={28} />
              </motion.a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-20 dark:opacity-40" />
              <div className="relative rounded-full overflow-hidden border-4 border-light-200/50 dark:border-dark-700/50 shadow-2xl">
                <Image
                  src="/images/photo_2024-09-28_08-35-58.jpg"
                  alt="Atulya Rai"
                  width={320}
                  height={320}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 