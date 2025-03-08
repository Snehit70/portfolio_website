import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce-site.com'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, organizing projects, and tracking progress.',
    image: '/images/projects/taskapp.jpg',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'React Query'],
    githubUrl: 'https://github.com/yourusername/taskapp',
    liveUrl: 'https://your-task-app.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase skills, projects, and professional experience.',
    image: '/images/projects/portfolio.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com'
  },
  {
    title: 'Weather Application',
    description: 'A weather forecasting app with location search, daily and hourly forecasts.',
    image: '/images/projects/weather.jpg',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://your-weather-app.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on. Take a look at my portfolio to see what I can build.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FiGithub className="mr-2" />
                    <span>Code</span>
                  </a>
                  
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
} 