'use client';

import { FiCode, FiDatabase, FiBarChart2, FiMonitor } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const skillCategories = [
  {
    category: 'Programming',
    icon: <FiCode size={24} />,
    description: 'Core programming languages and tools',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'SQL (Learning)', level: 40 },
      { name: 'JavaScript (Learning)', level: 35 },
      { name: 'Git/GitHub', level: 65 }
    ]
  },
  {
    category: 'Data Science',
    icon: <FiDatabase size={24} />,
    description: 'Data analysis and machine learning skills',
    skills: [
      { name: 'Data Analysis', level: 60 },
      { name: 'Matplotlib', level: 70 },
      { name: 'Neural Networks', level: 55 },
      { name: 'Machine Learning', level: 50 }
    ]
  },
  {
    category: 'Development',
    icon: <FiMonitor size={24} />,
    description: 'Software development skills',
    skills: [
      { name: 'Pygame', level: 80 },
      { name: 'Game Development', level: 75 },
      { name: 'Problem Solving', level: 70 },
      { name: 'Jupyter Notebook', level: 75 }
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: <FiBarChart2 size={24} />,
    description: 'Development and collaboration platforms',
    skills: [
      { name: 'Data Visualization', level: 65 },
      { name: 'Kaggle', level: 60 },
      { name: 'VS Code', level: 75 },
      { name: 'Documentation', level: 70 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My current skill set and areas I'm actively learning and improving.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 * (index + 1))}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 text-blue-600">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Currently preparing for ICPC and Smart India Hackathon 2024, while expanding my knowledge in data science.
          </p>
          <a 
            href="#projects" 
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            <span>See My Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 