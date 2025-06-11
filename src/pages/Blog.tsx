import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag, TrendingUp, BookOpen, Code } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Swift', 'ARKit', 'Firebase', 'App Store', 'UI/UX', 'Tips & Tricks'];

  const blogPosts = [
    {
      id: 1,
      title: 'Building AR Apps with RealityKit: A Complete Guide',
      excerpt: 'Learn how to create immersive AR experiences using RealityKit and ARKit. This comprehensive guide covers everything from basic setup to advanced features.',
      content: 'Full article content would go here...',
      category: 'ARKit',
      author: 'iOS Developer',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['ARKit', 'RealityKit', 'iOS', 'Swift']
    },
    {
      id: 2,
      title: 'Firebase Integration Best Practices for iOS',
      excerpt: 'Discover the best practices for integrating Firebase into your iOS apps, including authentication, real-time database, and cloud functions.',
      content: 'Full article content would go here...',
      category: 'Firebase',
      author: 'iOS Developer',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Firebase', 'Backend', 'iOS', 'Real-time']
    },
    {
      id: 3,
      title: 'SwiftUI vs UIKit: When to Use Which?',
      excerpt: 'A detailed comparison of SwiftUI and UIKit, helping you decide which framework to use for your next iOS project.',
      content: 'Full article content would go here...',
      category: 'Swift',
      author: 'iOS Developer',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['SwiftUI', 'UIKit', 'iOS', 'Development']
    },
    {
      id: 4,
      title: 'App Store Rejection: Common Mistakes and How to Avoid Them',
      excerpt: 'Learn from common App Store rejection reasons and how to prepare your app for a smooth approval process.',
      content: 'Full article content would go here...',
      category: 'App Store',
      author: 'iOS Developer',
      date: '2023-12-28',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['App Store', 'Guidelines', 'Approval', 'Tips']
    },
    {
      id: 5,
      title: 'Creating Smooth Animations in iOS Apps',
      excerpt: 'Master the art of creating beautiful, smooth animations that enhance user experience in your iOS applications.',
      content: 'Full article content would go here...',
      category: 'UI/UX',
      author: 'iOS Developer',
      date: '2023-12-20',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Animation', 'UI/UX', 'Core Animation', 'SwiftUI']
    },
    {
      id: 6,
      title: 'iOS 17 New Features Every Developer Should Know',
      excerpt: 'Explore the latest iOS 17 features and APIs that can enhance your app development workflow and user experience.',
      content: 'Full article content would go here...',
      category: 'Tips & Tricks',
      author: 'iOS Developer',
      date: '2023-12-15',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['iOS 17', 'New Features', 'APIs', 'Updates']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              iOS Development Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, tutorials, and best practices from my iOS development journey. 
              Learn about Swift, ARKit, Firebase, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center space-x-2">
            <Tag className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 text-lg">
              No articles found matching your criteria.
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with iOS Development
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and iOS development insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blog;