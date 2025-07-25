'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/image.png"
                alt="Abhay Yadav"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Full-Stack Web Developer and Computer Science Engineering student at Tula's Institute, Dehradun. 
                With expertise in the MERN stack, Python, and AI technologies, I love creating innovative solutions that make a difference.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My journey in tech has been driven by curiosity and the desire to build applications that solve real-world problems. 
                From developing rental platforms to creating AI-powered applications, I'm constantly exploring new technologies and pushing boundaries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-map-pin-line text-blue-600"></i>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Dehradun, India</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-graduation-cap-line text-blue-600"></i>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Computer Science Engineering - Tula's Institute</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-code-line text-blue-600"></i>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">MERN Stack & AI Developer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}