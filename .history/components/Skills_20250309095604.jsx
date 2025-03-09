'use client';

import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiPandas, SiScikitlearn, SiTensorflow, SiJupyter, SiKaggle, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { BsBarChartFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import { useState } from 'react';

// Simplified approach without the wrapper component
const skills = [
  {
    title: 'Programming & Development',
    description: 'Core languages and development tools',
    icon: SiVisualstudiocode,
    highlight: 'Proficient in Python with strong foundation in web technologies',
    skills: [
      { name: 'Python', icon: SiPython, iconColor: '#3776AB', level: 75 },
      { name: 'JavaScript', icon: SiJavascript, iconColor: '#F7DF1E', level: 35 },
      { name: 'SQL', icon: TbBrandMysql, iconColor: '#4479A1', level: 40 },
      { name: 'Git/GitHub', icon: SiGithub, iconColor: '#181717', level: 65 }
    ]
  },
  {
    title: 'Data Science & Analysis',
    description: 'Data processing and analysis tools',
    icon: BsBarChartFill,
    highlight: 'Experience with data analysis and visualization using modern tools',
    skills: [
      { name: 'Pandas', icon: SiPandas, iconColor: '#150458', level: 70 },
      { name: 'Data Analysis', icon: SiJupyter, iconColor: '#F37626', level: 60 },
      { name: 'Scikit-learn', icon: SiScikitlearn, iconColor: '#F7931E', level: 55 },
      { name: 'Kaggle', icon: SiKaggle, iconColor: '#20BEFF', level: 60 }
    ]
  },
  {
    title: 'Machine Learning',
    description: 'AI and machine learning technologies',
    icon: FaBrain,
    highlight: 'Actively learning and implementing ML algorithms',
    skills: [
      { name: 'Neural Networks', icon: SiTensorflow, iconColor: '#FF6F00', level: 55 },
      { name: 'Machine Learning', icon: FaBrain, iconColor: '#00A67D', level: 50 },
      { name: 'Deep Learning', icon: SiTensorflow, iconColor: '#FF6F00', level: 45 }
    ]
  }
];

// Progress bar component with animation
const SkillBar = ({ name, level, icon: Icon, iconColor }) => {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {Icon && <Icon style={{ color: iconColor }} className="text-lg" />}
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-2 w-full bg-light-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].title);

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[500px] h-[500px] bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-3xl -top-64 -left-44 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Skills</h2>
          <p className="text-dark-400 dark:text-light-500 max-w-2xl mx-auto">
            Technical expertise in programming, data science, and machine learning
          </p>
        </motion.div>
        
        {/* Skills category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.map((category) => (
            <motion.button
              key={category.title}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category.title 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-light-100 dark:bg-dark-800 hover:bg-light-200 dark:hover:bg-dark-700 text-dark-600 dark:text-light-400'
                }`}
              onClick={() => setActiveCategory(category.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <category.icon className="text-lg" />
                <span>{category.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
        
        {/* Display selected category */}
        {skills.map((category) => (
          <div key={category.title} className={activeCategory === category.title ? 'block' : 'hidden'}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-6 text-center">
                <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">{category.description}</span>
                <p className="text-dark-600 dark:text-light-300 mt-2">{category.highlight}</p>
              </div>
              
              <div className="bg-light-50 dark:bg-dark-800 rounded-xl shadow-lg p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      iconColor={skill.iconColor}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
} 