import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, secure payments via Stripe, and an intuitive admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'TailwindCSS'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://demo-ecommerce.com',
    highlights: ['10,000+ Monthly Active Users', 'Mobile-First Design', '99.9% Uptime']
  },
  {
    title: 'Project Management System',
    description: 'A comprehensive project management tool with real-time collaboration, task tracking, and automated reporting features.',
    image: '/images/projects/taskapp.jpg',
    tags: ['React', 'Firebase', 'Material-UI', 'Chart.js', 'React Query'],
    githubUrl: 'https://github.com/johndoe/project-management',
    liveUrl: 'https://demo-pms.com',
    highlights: ['Real-time Updates', 'Team Collaboration', 'Custom Analytics']
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation platform that helps create blog posts, social media content, and marketing copy.',
    image: '/images/projects/ai-generator.jpg',
    tags: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/johndoe/ai-content',
    liveUrl: 'https://ai-content-gen.com',
    highlights: ['GPT-4 Integration', 'Multi-language Support', 'Custom Templates']
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A modern IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.',
    image: '/images/projects/smart-home.jpg',
    tags: ['React', 'WebSocket', 'Node.js', 'MQTT', 'D3.js'],
    githubUrl: 'https://github.com/johndoe/smart-home',
    liveUrl: 'https://smart-home-demo.com',
    highlights: ['Real-time Monitoring', 'Energy Analytics', 'Voice Control']
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore some of my recent projects that showcase my technical expertise and problem-solving abilities.
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
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-primary transition-colors"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <FiGithub size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-primary transition-colors"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Highlights:</h4>
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
            href="https://github.com/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <FiGithub size={20} />
            <span>See More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 