'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';
import { FiCode, FiBook, FiTarget } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: "Aspiring Data Scientist",
    description: "First-year student passionate about data science and programming"
  },
  {
    icon: <FiBook size={24} />,
    title: "IIT Madras Student",
    description: "Starting BS in Data Science and Applications in May 2024"
  },
  {
    icon: <FiTarget size={24} />,
    title: "Goals & Competitions",
    description: "Preparing for ICPC and Smart India Hackathon 2024"
  }
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a first-year student from Karnataka with a strong passion for data science and technology. 
              My journey began with an interest in programming, which led me to explore game development 
              using Python and Pygame.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm excited to start my formal education in Data Science at IIT Madras in May 2024. 
              Currently, I'm focusing on building a strong foundation in Python, data analysis, 
              and preparing for competitive programming challenges.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Goals & Interests</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My primary goal is to become a skilled Data Scientist, combining my love for mathematics 
              and programming to solve real-world problems. I'm particularly interested in:
            </p>
            
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developing expertise in data analysis and machine learning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Participating in competitive programming contests</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Creating innovative projects that combine data science with practical applications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Learning and implementing best practices in software development</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <motion.a 
                href="#projects" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 