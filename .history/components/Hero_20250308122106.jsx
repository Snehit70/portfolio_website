'use client';

import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Atulya Rai</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              BS in Data Science Student | IIT Madras
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              First-year student from Karnataka, passionate about data science and programming. 
              Starting my journey at IIT Madras in May 2024. Currently focusing on Python projects 
              and building a strong foundation in data analysis.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/Snehit70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/atulya-rai-022b48315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={24} />
              </a>
              <a 
                href="mailto:atulyarai314@gmail.com" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Me"
              >
                <FiMail size={24} />
              </a>
            </div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#projects" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/images/photo_2024-09-28_08-35-58.jpg"
                alt="Atulya Rai"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                quality={100}
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 