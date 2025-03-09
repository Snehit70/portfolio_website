'use client';

import { FiExternalLink, FiCode, FiBarChart2, FiDatabase, FiBriefcase } from 'react-icons/fi';
import { SiKaggle, SiPython, SiPandas, SiScikitlearn, SiTensorflow } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

const currentFocus = [
  {
    icon: <FiBriefcase />,
    title: "Participating in Competitions",
    description: "Working on beginner-friendly competitions to gain practical experience"
  },
  {
    icon: <FiDatabase />,
    title: "Exploring Datasets",
    description: "Analyzing interesting datasets to improve data exploration skills"
  },
  {
    icon: <FiCode />,
    title: "Building Notebooks",
    description: "Creating well-documented notebooks showcasing data analysis processes"
  },
  {
    icon: <FiBarChart2 />,
    title: "Community Learning",
    description: "Learning from top kernels and building a stronger foundation"
  }
];

const skills = [
  {
    category: "Data Analysis",
    tools: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "Data Visualization", icon: <FiBarChart2 className="text-primary-500" /> }
    ]
  },
  {
    category: "Machine Learning",
    tools: [
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "Model Evaluation", icon: <FiCode className="text-primary-500" /> }
    ]
  }
];

export default function Kaggle() {
  return (
    <section id="kaggle" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[500px] h-[500px] bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-3xl top-20 -right-64 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Science Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-light-300">
            Exploring and learning data science through practical applications on Kaggle, focusing on building skills through competitions and collaborative learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Current Focus */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <SiKaggle className="text-[#20BEFF] text-3xl mr-3" />
              <h3 className="text-2xl font-bold">Current Focus</h3>
            </div>
            <div className="space-y-6">
              {currentFocus.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-dark-600 dark:text-light-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Path */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Learning Path</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400">{skill.category}</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {skill.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        className="flex flex-col items-center p-3 bg-light-100 dark:bg-dark-800 rounded-lg text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + toolIndex * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-2xl mb-2">{tool.icon}</div>
                        <span className="text-sm">{tool.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a 
            href="https://www.kaggle.com/atulyarai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <SiKaggle className="text-white" />
            Visit My Kaggle Profile
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 