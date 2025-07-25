'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="font-pacifico">Abhay</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & AI Enthusiast passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abhayyadav9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://linkedin.com/in/abhay45yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="mailto:yadavabhay8227@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <i className="ri-mail-fill"></i>
              </a>
              <a
                href="https://abhay45.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <i className="ri-global-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">AI/ML Solutions</span>
              </li>
              <li>
                <span className="text-gray-400">Full-Stack Development</span>
              </li>
              <li>
                <span className="text-gray-400">Consulting</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Dehradun, India</p>
              <p>yadavabhay8227@gmail.com</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Abhay Yadav. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}