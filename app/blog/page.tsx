
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
      author: 'Abhay Yadav',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI/ML',
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20web%20development%20concept%2C%20futuristic%20technology%20interface%2C%20AI%20coding%20assistant%2C%20modern%20software%20development%20with%20AI%20integration%2C%20tech%20innovation%20illustration&width=600&height=300&seq=ai-web-dev&orientation=landscape',
      slug: 'future-of-ai-in-web-development'
    },
    {
      id: 2,
      title: 'Building Scalable MERN Stack Applications',
      excerpt: 'Best practices and architectural patterns for creating maintainable and scalable full-stack applications.',
      author: 'Abhay Yadav',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://readdy.ai/api/search-image?query=MERN%20stack%20development%20illustration%2C%20modern%20web%20application%20architecture%2C%20React%20Node.js%20MongoDB%20Express.js%2C%20full-stack%20development%20concept%2C%20clean%20technical%20diagram&width=600&height=300&seq=mern-stack&orientation=landscape',
      slug: 'building-scalable-mern-stack-applications'
    },
    {
      id: 3,
      title: 'Machine Learning in Real-World Applications',
      excerpt: 'Practical examples of how machine learning is solving real problems across different industries.',
      author: 'Abhay Yadav',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'AI/ML',
      image: 'https://readdy.ai/api/search-image?query=Machine%20learning%20applications%20in%20real%20world%2C%20data%20science%20visualization%2C%20ML%20algorithms%20in%20business%2C%20artificial%20intelligence%20solutions%2C%20modern%20tech%20innovation&width=600&height=300&seq=ml-applications&orientation=landscape',
      slug: 'machine-learning-in-real-world-applications'
    },
    {
      id: 4,
      title: 'Modern JavaScript Features Every Developer Should Know',
      excerpt: 'A comprehensive guide to the latest JavaScript features that will improve your development workflow.',
      author: 'Abhay Yadav',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'JavaScript',
      image: 'https://readdy.ai/api/search-image?query=Modern%20JavaScript%20development%2C%20ES6%20%20features%2C%20clean%20code%20illustration%2C%20JavaScript%20programming%20concepts%2C%20web%20development%20with%20modern%20JS%20syntax&width=600&height=300&seq=modern-js&orientation=landscape',
      slug: 'modern-javascript-features-every-developer-should-know'
    },
    {
      id: 5,
      title: 'Cloud Computing for Full-Stack Developers',
      excerpt: 'Understanding cloud services and how to leverage them for better application deployment and scaling.',
      author: 'Abhay Yadav',
      date: 'November 20, 2024',
      readTime: '9 min read',
      category: 'Cloud',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20infrastructure%2C%20AWS%20services%20for%20developers%2C%20cloud%20deployment%20architecture%2C%20modern%20cloud%20technology%2C%20distributed%20systems%20illustration&width=600&height=300&seq=cloud-computing&orientation=landscape',
      slug: 'cloud-computing-for-full-stack-developers'
    },
    {
      id: 6,
      title: 'The Art of Code Review: Best Practices',
      excerpt: 'Essential guidelines for conducting effective code reviews that improve code quality and team collaboration.',
      author: 'Abhay Yadav',
      date: 'November 15, 2024',
      readTime: '4 min read',
      category: 'Best Practices',
      image: 'https://readdy.ai/api/search-image?query=Code%20review%20process%20illustration%2C%20software%20development%20collaboration%2C%20team%20programming%20workflow%2C%20code%20quality%20assurance%2C%20developer%20teamwork%20concept&width=600&height=300&seq=code-review&orientation=landscape',
      slug: 'the-art-of-code-review-best-practices'
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'JavaScript', 'Cloud', 'Best Practices'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tech Thoughts
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on web development, AI, and modern technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read more
                      <div className="w-4 h-4 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
