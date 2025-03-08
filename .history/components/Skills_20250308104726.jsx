'use client';

import { FiCode, FiLayout, FiServer, FiTool, FiDatabase, FiCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: <FiLayout size={24} />,
    description: 'Building responsive and interactive user interfaces',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux/Context API', level: 85 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Framer Motion', level: 80 }
    ]
  },
  {
    category: 'Backend Development',
    icon: <FiServer size={24} />,
    description: 'Creating scalable server-side applications',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 80 },
      { name: 'Python/Django', level: 75 },
      { name: 'WebSocket', level: 78 }
    ]
  },
  {
    category: 'Database & Storage',
    icon: <FiDatabase size={24} />,
    description: 'Managing and optimizing data storage solutions',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Firebase', level: 88 },
      { name: 'AWS S3', level: 80 },
      { name: 'Data Modeling', level: 85 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: <FiCloud size={24} />,
    description: 'Deploying and maintaining cloud infrastructure',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 82 },
      { name: 'Vercel', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Git/GitHub', level: 92 }
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
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and proficiency levels in various technologies.
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
                <div className="mr-4 text-primary">{category.icon}</div>
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
                        className="bg-primary h-2.5 rounded-full"
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
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <span>Let's Work Together</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 