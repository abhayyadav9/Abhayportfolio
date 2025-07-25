'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
            <span className="font-pacifico">Abhay</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              Projects
            </a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              Experience
            </a>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              Tech Thoughts
            </Link>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? (
                  <i className="ri-sun-line text-yellow-500"></i>
                ) : (
                  <i className="ri-moon-line text-gray-700"></i>
                )}
              </div>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-gray-700 dark:text-gray-300`}></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Experience
              </a>
              <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Tech Thoughts
              </Link>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}