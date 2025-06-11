import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The AR furniture app exceeded our expectations. The implementation was flawless and our customers love the experience. The attention to detail and technical expertise is outstanding.',
      project: 'AR Furniture Placement App',
      results: ['40% reduction in returns', '95% user satisfaction'],
      featured: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Startup Founder',
      company: 'HealthTech Solutions',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Professional, reliable, and delivers high-quality iOS apps. The Firebase integration was seamless and the real-time features work perfectly. Highly recommended!',
      project: 'Real-time Health Tracker',
      results: ['50K+ downloads', '4.8 App Store rating'],
      featured: true
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      role: 'CTO',
      company: 'FinanceApp Inc',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The subscription management system was implemented perfectly. The in-app purchase flow is smooth and the analytics integration provides valuable insights.',
      project: 'Subscription Management App',
      results: ['300% revenue increase', '99.9% uptime'],
      featured: false
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Creative Director',
      company: 'Design Studio',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Amazing UI/UX implementation. The SwiftUI animations are smooth and the overall user experience is exceptional. Exactly what we envisioned.',
      project: 'Creative Portfolio App',
      results: ['Featured on App Store', '25K organic downloads'],
      featured: false
    },
    {
      id: 5,
      name: 'Emma Watson',
      role: 'Operations Manager',
      company: 'RetailTech',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The LiDAR scanning feature works flawlessly. Our customers can now measure spaces accurately, which has significantly improved our sales process.',
      project: 'LiDAR Measurement Tool',
      results: ['60% faster measurements', '85% accuracy improvement'],
      featured: false
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Product Owner',
      company: 'EdTech Innovations',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The Socket.IO integration for real-time collaboration works perfectly. Students can interact seamlessly in our AR learning environment.',
      project: 'AR Education Platform',
      results: ['200% engagement increase', '90% completion rate'],
      featured: false
    }
  ];

  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      value: '7+',
      label: 'Apps Launched',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      value: '100K+',
      label: 'Downloads',
      color: 'text-purple-500'
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

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
              Client Testimonials
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what clients say about working with me 
              on their iOS development projects.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-blue-200 dark:text-blue-800" />
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Project: {testimonial.project}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.results.map((result, resultIndex) => (
                          <span
                            key={resultIndex}
                            className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            More Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    {testimonial.project}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {testimonial.results.map((result, resultIndex) => (
                      <span
                        key={resultIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Testimonial */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 text-blue-200 mx-auto mb-6" />
              <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                "Working with this iOS developer was a game-changer for our startup. The communication 
                was excellent throughout the project, deadlines were met consistently, and the final 
                product exceeded our expectations. The AR features work flawlessly and our users love it."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Alex Thompson"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">Alex Thompson</div>
                  <div className="text-blue-200">CEO, InnovateTech</div>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join These Happy Clients?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your iOS project and create an app that your users will love. 
            I'm committed to delivering exceptional results and outstanding service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Testimonials;