'use client';

import { motion } from 'framer-motion';

export default function Experience() {
 const experiences = [
    {
      id: 1,
      title: 'AI Research Intern',
      company: 'Tula\'s Institute',
      period: 'Jun 2023 - Sep 2023',
      description: 'Worked on computer vision-based AI applications, focusing on assistive technology and real-time processing.',
      achievements: [
        'Built a Smart Glass AI prototype for visually impaired users',
        'Integrated text-to-speech using Python & Tesseract OCR',
        'Deployed real-time Flask backend for Raspberry Pi camera feed',
        'Collaborated with faculty on academic paper (under review)'
      ],
      icon: 'ri-brain-line',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      description: 'Built and deployed full-stack MERN applications for real-world needs including rentals, social clones, and job portals.',
      achievements: [
        'Developed Rent-Lo, a MERN-based rental booking platform',
        'Built Instagram clone with user posts & Cloudinary uploads',
        'Created JobHunt app with role-based login and filtering',
        'Used Redux, WebSockets, and REST APIs across projects'
      ],
      icon: 'ri-code-line',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Tech Club Member',
      company: 'Tula\'s Institute',
      period: '2022 - 2023',
      description: 'Participated in organizing hackathons, workshops, and collaborated on college-level web-based projects.',
      achievements: [
        'Contributed to 2 internal event websites using React.js',
        'Assisted juniors with Git/GitHub setup and deployment',
        'Participated in 3-day MERN stack workshop as assistant TA',
        'Created portfolio templates for club members'
      ],
      icon: 'ri-team-line',
      color: 'green'
    }
  ];

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Tula\'s Institute, Dehradun (UTU Affiliated)',
    period: '2021 - 2026 (Expected)',
    grade: 'CGPA: 7.2/10',
    description: 'Coursework includes Data Structures, Algorithms, Operating Systems, Artificial Intelligence, and Database Management Systems.',
    icon: 'ri-graduation-cap-line'
  },
  {
    id: 2,
    degree: 'Senior Secondary (XII)',
    field: 'Science Stream (PCM)',
    institution: 'National Infotech college',
    period: '2019 - 2021',
    grade: 'Percentage: 84.5%',
    description: 'Focused on Mathematics, Physics, and Computer Science fundamentals as part of CBSE curriculum.',
    icon: 'ri-school-line'
  }
];


const certifications = [
  {
    title: 'Full-Stack Web Development (MERN)',
    issuer: 'RCPL',
    date: '2023',
    icon: 'ri-code-line'
  },
  {
    title: 'Advanced Python Programming',
    issuer: 'ICT Academy',
    date: '2022',
    icon: 'ri-python-line'
  },
  {
    title: 'Problem Solving (Top 30%)',
    issuer: 'HackerRank',
    date: '2023',
    icon: 'ri-lightbulb-flash-line'
  },
  {
    title: 'Web Development Internship',
    issuer: 'CodeSoft (3rd Year)',
    date: '2024',
    icon: 'ri-infinity-line'
  },
  {
    title: 'Python Internship',
    issuer: 'CodeSoft (2nd Year)',
    date: '2023',
    icon: 'ri-terminal-box-line'
  },
  {
    title: 'Machine Learning Basics',
    issuer: 'Coursera (Stanford Online)',
    date: '2023',
    icon: 'ri-brain-line'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'Coursera (Meta)',
    date: '2022',
    icon: 'ri-layout-masonry-line'
  }
];


  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through professional experiences, education, and continuous learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Professional Experience
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${exp.color}-100 dark:bg-${exp.color}-900 flex items-center justify-center mr-4`}>
                        <i className={`${exp.icon} text-${exp.color}-600 text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <i className={`${edu.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.field}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {edu.institution} • {edu.period}
                </p>
                <p className="text-blue-600 font-semibold mb-3">
                  {edu.grade}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <i className={`${cert.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-blue-600 font-semibold">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}