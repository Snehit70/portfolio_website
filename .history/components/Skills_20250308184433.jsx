'use client';

import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiPandas, SiScikitlearn, SiTensorflow, SiJupyter, SiKaggle, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { BsBarChartFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';

const IconWrapper = ({ Icon, className, style }) => {
  return <Icon className={className} style={style} />;
};

const skillCategories = [
  {
    title: 'Programming & Development',
    description: 'Core languages and development tools',
    Icon: SiVisualstudiocode,
    highlight: 'Proficient in Python with strong foundation in web technologies',
    skills: [
      { name: 'Python', Icon: SiPython, level: 75, color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript, level: 35, color: '#F7DF1E' },
      { name: 'SQL', Icon: TbBrandMysql, level: 40, color: '#4479A1' },
      { name: 'Git/GitHub', Icon: SiGithub, level: 65, color: '#181717' }
    ]
  },
  {
    title: 'Data Science & Analysis',
    description: 'Data processing and analysis tools',
    Icon: BsBarChartFill,
    highlight: 'Experience with data analysis and visualization using modern tools',
    skills: [
      { name: 'Pandas', Icon: SiPandas, level: 70, color: '#150458' },
      { name: 'Data Analysis', Icon: SiJupyter, level: 60, color: '#F37626' },
      { name: 'Scikit-learn', Icon: SiScikitlearn, level: 55, color: '#F7931E' },
      { name: 'Kaggle', Icon: SiKaggle, level: 60, color: '#20BEFF' }
    ]
  },
  {
    title: 'Machine Learning',
    description: 'AI and machine learning technologies',
    Icon: FaBrain,
    highlight: 'Actively learning and implementing ML algorithms',
    skills: [
      { name: 'Neural Networks', Icon: SiTensorflow, level: 55, color: '#FF6F00' },
      { name: 'Machine Learning', Icon: FaBrain, level: 50, color: '#00A67D' },
      { name: 'Deep Learning', Icon: SiTensorflow, level: 45, color: '#FF6F00' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[600px] h-[600px] bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-light-300">
            My current skill set and technologies I'm actively learning and improving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20">
                  <IconWrapper Icon={category.Icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-dark-600 dark:text-light-300">{category.description}</p>
                </div>
              </div>

              <p className="text-sm text-primary-600 dark:text-primary-400 mb-6 font-medium">
                {category.highlight}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <IconWrapper Icon={skill.Icon} className="text-xl" style={{ color: skill.color }} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-dark-600 dark:text-light-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-light-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-600 to-secondary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 