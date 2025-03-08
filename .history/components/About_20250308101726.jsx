export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate web developer with a focus on creating efficient, 
              accessible, and visually appealing digital experiences. With several years 
              of experience in the industry, I've worked on a variety of projects ranging 
              from small business websites to complex web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey into web development began when I was in college, 
              and I've been continuously learning and improving my skills ever since. 
              I believe in writing clean code that is maintainable and scalable.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Approach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I approach each project with a focus on meeting the specific needs of
              my clients and their users. I'm passionate about creating intuitive user 
              experiences that balance form and function.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or enjoying the outdoors. I believe in continuous 
              learning and staying up-to-date with industry trends and best practices.
            </p>
            
            <div className="pt-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 