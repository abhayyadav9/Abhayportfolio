'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: 'ri-reactjs-line' },
        { name: 'JavaScript', level: 88, icon: 'ri-javascript-line' },
        { name: 'Bootstrap', level: 80, icon: 'ri-code-line' },
        { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
        { name: 'HTML/CSS', level: 95, icon: 'ri-html5-line' },
                { name: 'Shadcn Ui', level: 90, icon: 'ri-ui' }

      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: 'ri-nodejs-line' },
        { name: 'Express.js', level: 80, icon: 'ri-server-line' },
        { name: 'Python', level: 88, icon: 'ri-code-s-slash-line' },
        { name: 'MongoDB', level: 82, icon: 'ri-database-line' },
        { name: 'MySql', level: 75, icon: 'ri-database-2-line' },
        { name: 'REST APIs', level: 85, icon: 'ri-api-line' }
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: 'ri-git-branch-line' },
        { name: 'Docker', level: 70, icon: 'ri-docker-line' },
        { name: 'AWS', level: 75, icon: 'ri-cloud-line' },
        { name: 'Vercel', level: 85, icon: 'ri-global-line' },
        { name: 'Linux', level: 78, icon: 'ri-terminal-line' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 75, icon: 'ri-brain-line' },
        { name: 'TensorFlow', level: 70, icon: 'ri-cpu-line' },
        { name: 'OpenCV', level: 72, icon: 'ri-eye-line' },
        { name: 'NLP', level: 68, icon: 'ri-chat-3-line' },
        { name: 'Data Analysis', level: 75, icon: 'ri-bar-chart-line' },
        { name: 'Python Libraries', level: 80, icon: 'ri-python-line' }
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'C++', level: 75, icon: 'ri-code-s-slash-line' },
        { name: 'Flask', level: 70, icon: 'ri-flask-line' },
        { name: 'REST APIs', level: 80, icon: 'ri-api-line' },
        { name: 'MySQL', level: 78, icon: 'ri-database-2-line' },
        { name: 'Web Scraping', level: 72, icon: 'ri-global-line' },
        { name: 'Cloudinary', level: 70, icon: 'ri-cloud-line' },
        { name: 'Heroku', level: 68, icon: 'ri-cloud-line' },
        { name: 'Problem Solving (HackerRank Top 30%)', level: 90, icon: 'ri-trophy-line' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center text-blue-600 mr-4">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}