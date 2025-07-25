'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Rent-Lo',
      description: 'A comprehensive rental platform connecting property owners with tenants, featuring advanced search filters, real-time messaging, and secure payment integration.',
      longDescription: 'Rent-Lo is a full-stack rental platform built with the MERN stack. It features user authentication, property listings, advanced search and filtering, real-time messaging between landlords and tenants, payment integration, and responsive design. The platform includes admin panels for property management and user verification.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Stripe API'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20rental%20property%20platform%20interface%2C%20clean%20web%20application%20design%20for%20property%20listings%2C%20professional%20real%20estate%20website%20with%20property%20cards%20and%20search%20functionality%2C%20modern%20UI%2FUX%20design%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=rentlo-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/rent-lo',
      live: 'https://rent-lo.vercel.app',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'AI Smart Glass',
      description: 'Innovative AI-powered smart glasses application utilizing computer vision and machine learning for real-time object recognition and assistance.',
      longDescription: 'AI Smart Glass is an innovative project that combines hardware and software to create smart glasses with AI capabilities. The system uses computer vision for real-time object detection, text recognition, and provides voice assistance. Built with Python, OpenCV, and TensorFlow, it processes visual data in real-time and provides intelligent responses.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Machine Learning', 'IoT'],
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20smart%20glasses%20with%20AI%20interface%2C%20augmented%20reality%20technology%2C%20modern%20wearable%20tech%20device%20with%20digital%20overlay%2C%20high-tech%20smart%20glasses%20with%20blue%20holographic%20display%2C%20innovative%20AR%2FVR%20technology%20concept&width=600&height=400&seq=smartglass-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/ai-smart-glass',
      live: '#',
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'JobHunt',
      description: 'A modern job search platform with AI-powered matching, featuring job listings, application tracking, and recruiter dashboard.',
      longDescription: 'JobHunt is a comprehensive job search platform that connects job seekers with employers. It features AI-powered job matching, advanced search filters, application tracking system, recruiter dashboard, resume builder, and interview scheduling. The platform uses machine learning to improve job recommendations and matching accuracy.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AI/ML'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20job%20search%20platform%20interface%2C%20modern%20employment%20website%20design%20with%20job%20listings%20and%20search%20functionality%2C%20clean%20corporate%20web%20application%20for%20job%20hunting%2C%20professional%20blue%20and%20white%20UI%20design&width=600&height=400&seq=jobhunt-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/jobhunt',
      live: 'https://jobhunt-abhay.vercel.app',
      category: 'Full-Stack'
    },
    {
      id: 4,
      title: 'Instagram Clone',
      description: 'A feature-rich Instagram clone with real-time messaging, story features, and social media functionality built with modern web technologies.',
      longDescription: 'Instagram Clone is a full-featured social media application replicating Instagram\'s core functionality. It includes user authentication, photo/video upload, real-time messaging, stories, likes, comments, following system, and explore page. Built with React, Node.js, and MongoDB, it features real-time updates and responsive design.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary', 'JWT'],
      image: 'https://readdy.ai/api/search-image?query=Instagram-style%20social%20media%20app%20interface%2C%20modern%20photo%20sharing%20platform%20design%2C%20social%20media%20application%20with%20posts%20and%20stories%2C%20mobile-first%20responsive%20design%20with%20pink%20and%20purple%20gradients&width=600&height=400&seq=instagram-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/instagram-clone',
      live: 'https://instagram-clone-abhay.vercel.app',
      category: 'Full-Stack'
    },
    {
      id: 5,
      title: 'Real-Time Chat Application',
      description: 'Built with React, Node.js, and WebSockets; supports 100+ concurrent users. Deployed on Render with MongoDB Atlas for data storage.',
      longDescription: 'A scalable real-time chat app supporting 100+ concurrent users, built using React for the frontend, Node.js and WebSockets for real-time communication, and MongoDB Atlas for data storage. Deployed on Render.',
      technologies: ['React.js', 'Node.js', 'WebSockets', 'MongoDB Atlas', 'Render'],
      image: 'https://readdy.ai/api/search-image?query=real-time%20chat%20application%20UI%2C%20modern%20messaging%20platform%20with%20chat%20bubbles%2C%20web%20app%20interface%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=chatapp-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/real-time-chat-app',
      live: '#',
      category: 'Full-Stack'
    },
    {
      id: 6,
      title: 'AI-Based Face Detection App',
      description: 'Trained a model using Python, OpenCV, and deployed via Flask. Achieved 95% accuracy.',
      longDescription: 'A Python-based face detection model using OpenCV and Yolo, achieving 95% accuracy. The app is deployed using Flask and demonstrates real-time face detection capabilities.',
      technologies: ['Python', 'OpenCV', 'Yolo', 'Flask'],
      image: 'https://readdy.ai/api/search-image?query=AI%20face%20detection%20app%2C%20computer%20vision%20interface%2C%20real-time%20face%20recognition%20UI%2C%20modern%20AI%20web%20app%20design%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=faceapp-project&orientation=landscape',
      github: 'https://github.com/abhayyadav9/ai-face-detection-app',
      live: '#',
      category: 'AI/ML'
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, AI/ML, and innovative solutions
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-github-line"></i>
                    </div>
                    <span>Code</span>
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-external-link-line"></i>
                      </div>
                      <span>Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-information-line"></i>
                    </div>
                    <span>Details</span>
                  </button>
                </div>
                
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.longDescription}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}