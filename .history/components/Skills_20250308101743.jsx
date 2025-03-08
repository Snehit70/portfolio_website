import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FiLayout size={24} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend Development',
    icon: <FiServer size={24} />,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL']
  },
  {
    category: 'Programming Languages',
    icon: <FiCode size={24} />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL']
  },
  {
    category: 'Tools & Methods',
    icon: <FiTool size={24} />,
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Agile', 'Jest', 'Cypress']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            These are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 