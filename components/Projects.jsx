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
    image: '/images/projects/dragon-run.jpg',
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
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects, focusing on game development and data analysis.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 w-full group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/Snehit70" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 transition-colors"
          >
            <FiGithub size={20} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 