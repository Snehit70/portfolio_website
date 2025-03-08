import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';
import { FiAward, FiUsers, FiFolder } from 'react-icons/fi';

const stats = [
  {
    icon: <FiAward size={24} />,
    number: "5+",
    title: "Years Experience",
    description: "In Web Development"
  },
  {
    icon: <FiUsers size={24} />,
    number: "20+",
    title: "Clients Worldwide",
    description: "Satisfied Customers"
  },
  {
    icon: <FiFolder size={24} />,
    number: "50+",
    title: "Projects",
    description: "Completed"
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
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Professional Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in web development, I've had the privilege of working 
              with diverse clients and technologies. My journey began with a passion for creating 
              user-friendly interfaces and has evolved into crafting full-stack solutions that drive 
              business growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in building scalable web applications using modern technologies like 
              React, Node.js, and cloud services. My approach combines technical expertise with 
              a deep understanding of user experience principles.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary">{stat.number}</h4>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
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
            <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My technical expertise spans both frontend and backend development, with a strong 
              focus on creating responsive, accessible, and performant web applications. I'm 
              passionate about clean code, modern design patterns, and staying current with 
              industry best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond coding, I bring strong problem-solving abilities and excellent communication 
              skills to every project. I believe in collaborative development and maintaining 
              clear communication throughout the project lifecycle.
            </p>
            
            <div className="pt-4">
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 