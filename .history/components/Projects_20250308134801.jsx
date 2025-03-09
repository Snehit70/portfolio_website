'use client';

import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const projects = [
  {
    title: 'Alien Invasion 2024',
    description: 'An exciting game created using the Pygame module where players defend against alien invaders. Features interactive gameplay and dynamic animations.',
    image: '/images/projects/alien-invasion.jpg',
    tags: ['Python', 'Pygame', 'Game Development'],
    githubUrl: 'https://github.com/Snehit70/Alien_invasion_2024',
    highlights: ['Interactive Gameplay', 'Collision Detection', 'Score Tracking']
  },
  {
    title: 'Dragon Run 2024',
    description: 'A unique dragon running game with jumping mechanics. Built with Python and Pygame, featuring engaging gameplay elements.',
    image: '/images/projects/dragon.jpg',
    tags: ['Python', 'Pygame', 'Game Development'],
    githubUrl: 'https://github.com/Snehit70/Dragon_run_24',
    highlights: ['Jump Mechanics', 'Obstacle System', 'Score System']
  },
  {
    title: 'Netflix Analysis',
    description: 'Data analysis project exploring Netflix content trends and patterns using Python, Matplotlib, and data analysis libraries.',
    image: '/images/projects/netflix-analysis.jpg',
    tags: ['Python', 'Data Analysis', 'Matplotlib', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Snehit70/Netflix-analysis',
    highlights: ['Data Visualization', 'Statistical Analysis', 'Trend Identification']
  },
  {
    title: 'Neural Network Projects',
    description: 'Implementation of neural networks for various machine learning tasks using Python and popular AI libraries.',
    image: '/images/projects/neural-network.jpg',
    tags: ['Python', 'AI/ML', 'Neural Networks', 'Data Science'],
    githubUrl: 'https://github.com/Snehit70',
    highlights: ['Deep Learning', 'Model Training', 'Performance Analysis']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[600px] h-[600px] bg-secondary-600/5 dark:bg-secondary-600/10 rounded-full blur-3xl -bottom-64 -right-44 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-light-300">
            Here are some of my recent projects, focusing on game development and data analysis.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-100/80 backdrop-blur-sm rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-dark-600 dark:text-light-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Key Highlights</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-dark-600 dark:text-light-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 