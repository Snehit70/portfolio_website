'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const projects = [
  {
    title: 'Alien Invasion 2024',
    description: 'An exciting game created using the Pygame module where players defend against alien invaders. Features interactive gameplay and dynamic animations.',
    image: '/images/projects/alien-invasion.jpg',
    tags: ['Python', 'Pygame', 'Game Development'],
    githubUrl: 'https://github.com/atulyarai/Alien_invasion_2024',
    highlights: ['Interactive Gameplay', 'Collision Detection', 'Score Tracking'],
    longDescription: 'This project is a classic space shooter game where players control a spaceship to defeat waves of alien invaders. Built with Python and Pygame, it features smooth controls, dynamic difficulty scaling, and an engaging gameplay loop. I implemented collision detection systems, sprite animation, and a scoring mechanism to create a complete gaming experience.',
    challenges: 'Designing efficient collision detection and managing game state were the main challenges. I solved these by implementing a grid-based approach and proper state management patterns.',
    techDetails: ['Pygame for graphics and input', 'Object-oriented design patterns', 'Custom animation system', 'Score persistence']
  },
  {
    title: 'Dragon Run 2024',
    description: 'A unique dragon running game with jumping mechanics. Built with Python and Pygame, featuring engaging gameplay elements.',
    image: '/images/projects/dragon.jpg',
    tags: ['Python', 'Pygame', 'Game Development'],
    githubUrl: 'https://github.com/atulyarai/Dragon_run_24',
    highlights: ['Jump Mechanics', 'Obstacle System', 'Score System'],
    longDescription: 'Dragon Run is an endless runner game where players control a dragon that must jump over obstacles. The game features progressive difficulty, with obstacles appearing faster as the player's score increases. I implemented physics-based jumping mechanics and a procedural obstacle generation system.',
    challenges: 'Creating realistic physics for the jumping mechanics and ensuring the obstacle generation remained balanced were key challenges. I iterated through multiple physics models to find the right feel.',
    techDetails: ['Custom physics implementation', 'Procedural content generation', 'Difficulty scaling algorithm', 'High score tracking']
  },
  {
    title: 'Netflix Analysis',
    description: 'Data analysis project exploring Netflix content trends and patterns using Python, Matplotlib, and data analysis libraries.',
    image: '/images/projects/netflix-analysis.jpg',
    tags: ['Python', 'Data Analysis', 'Matplotlib', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Snehit70/Netflix-analysis',
    highlights: ['Data Visualization', 'Statistical Analysis', 'Trend Identification'],
    longDescription: 'This data science project analyzes Netflix's content library to uncover trends in content production, genre popularity, and regional preferences. Using Python data analysis libraries, I processed and visualized data from Netflix's catalog to extract meaningful insights about their content strategy.',
    challenges: 'Working with inconsistent data formats and scaling the visualization to represent complex relationships were challenging. I developed custom data cleaning pipelines and interactive visualizations to address these issues.',
    techDetails: ['Pandas for data manipulation', 'Matplotlib and Seaborn for visualization', 'Statistical analysis with NumPy', 'Jupyter notebooks for interactive exploration']
  },
  {
    title: 'Neural Network Projects',
    description: 'Implementation of neural networks for various machine learning tasks using Python and popular AI libraries.',
    image: '/images/projects/neural-network.jpg',
    tags: ['Python', 'AI/ML', 'Neural Networks', 'Data Science'],
    githubUrl: 'https://github.com/Snehit70',
    highlights: ['Deep Learning', 'Model Training', 'Performance Analysis'],
    longDescription: 'This collection of projects demonstrates various neural network implementations for tasks including image classification, natural language processing, and predictive analytics. Each project focuses on different architectures and techniques within the field of deep learning.',
    challenges: 'Optimizing model performance and managing computational resources were significant challenges. I experimented with various model architectures and hyperparameter tuning strategies to find optimal solutions.',
    techDetails: ['TensorFlow and PyTorch implementations', 'Convolutional and recurrent neural networks', 'Hyperparameter optimization', 'Model evaluation techniques']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[600px] h-[600px] bg-secondary-600/5 dark:bg-secondary-600/10 rounded-full blur-3xl -bottom-64 -right-44 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          <motion.div variants={fadeIn('up', 'tween', 0.1, 1)} className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">My Projects</h2>
            <p className="text-dark-400 dark:text-light-500 max-w-2xl mx-auto">
              A showcase of my programming projects and data science work
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 0.8)}
                className="project-card bg-light-50 dark:bg-dark-800 border border-light-200 dark:border-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openProjectDetails(project)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}>
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 dark:text-light-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}>
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-dark-400 dark:text-light-500 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-primary-100 dark:bg-dark-700 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectDetails}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-light-50 dark:bg-dark-800 w-full max-w-2xl max-h-[85vh] rounded-xl overflow-hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                  className="object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  onClick={closeProjectDetails}
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold font-heading">{selectedProject.title}</h2>
                  <div className="flex space-x-3">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-dark-800 dark:bg-dark-600 text-light-50 px-3 py-1.5 rounded-md hover:bg-dark-700 transition-colors"
                      >
                        <FiGithub size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-primary-600 text-light-50 px-3 py-1.5 rounded-md hover:bg-primary-700 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-primary-100 dark:bg-dark-700 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium font-heading mb-2">Overview</h3>
                    <p className="text-dark-500 dark:text-light-400">{selectedProject.longDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium font-heading mb-2">Challenges & Solutions</h3>
                    <p className="text-dark-500 dark:text-light-400">{selectedProject.challenges}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium font-heading mb-2">Technical Details</h3>
                    <ul className="list-disc pl-5 text-dark-500 dark:text-light-400 space-y-1">
                      {selectedProject.techDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 