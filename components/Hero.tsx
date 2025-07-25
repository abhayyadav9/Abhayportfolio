'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20software%20developer%20workspace%20with%20modern%20computer%20setup%2C%20coding%20environment%2C%20clean%20minimalist%20background%20with%20subtle%20blue%20and%20purple%20gradients%2C%20high-tech%20atmosphere%2C%20professional%20lighting%2C%20modern%20desk%20setup%20with%20multiple%20monitors%2C%20elegant%20and%20sophisticated%20developer%20workspace&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-blue-400">Abhay Yadav</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Full-Stack Web Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Computer Science Engineering student at Tula's Institute, passionate about building innovative web applications and exploring AI technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Hire Me
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/abhayyadav9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <i className="ri-github-fill text-white text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/abhay45yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <i className="ri-linkedin-fill text-white text-xl"></i>
            </a>
            <a
              href="mailto:yadavabhay8227@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <i className="ri-mail-fill text-white text-xl"></i>
            </a>
            <a
              href="https://abhay45.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <i className="ri-global-fill text-white text-xl"></i>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}