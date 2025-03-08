'use client';

import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

export default function Education() {
  return (
    <section id="education" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey in technology and data science.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative pl-8 sm:pl-32 py-6 group"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 before:dark:bg-gray-700 before:ml-[9px] before:dark:bg-gradient-to-b before:from-gray-700 before:via-gray-700 before:to-transparent">
              <div className="absolute left-0 sm:left-10 -top-3">
                <div className="h-7 w-7 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900"></div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FiBook className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">BS in Data Science and Applications</h3>
              </div>
              
              <div className="flex items-center mb-3">
                <FiAward className="text-gray-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300">Indian Institute of Technology Madras</span>
              </div>
              
              <div className="flex items-center mb-4">
                <FiCalendar className="text-gray-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300">Starting May 2024</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Embarking on a comprehensive program in Data Science, focusing on:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Mathematics and Statistics</li>
                <li>Programming and Data Structures</li>
                <li>Machine Learning and AI</li>
                <li>Data Analytics and Visualization</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="relative pl-8 sm:pl-32 py-6 group"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 before:dark:bg-gray-700 before:ml-[9px] before:dark:bg-gradient-to-b before:from-gray-700 before:via-gray-700 before:to-transparent">
              <div className="absolute left-0 sm:left-10 -top-3">
                <div className="h-7 w-7 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900"></div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FiBook className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Self-Learning & Projects</h3>
              </div>
              
              <div className="flex items-center mb-3">
                <FiAward className="text-gray-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300">Independent Study</span>
              </div>
              
              <div className="flex items-center mb-4">
                <FiCalendar className="text-gray-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300">2023 - Present</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Actively developing skills through self-paced learning and hands-on projects:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Python Programming</li>
                <li>Game Development with Pygame</li>
                <li>Data Analysis Projects</li>
                <li>Version Control (Git/GitHub)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 