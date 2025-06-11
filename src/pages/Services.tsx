import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Cuboid as Cube, Database, Palette, Store, CreditCard, Wifi, CheckCircle, ArrowRight, Star, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Full iOS App Development',
      description: 'Complete iOS application development from concept to App Store deployment',
      features: [
        'Native Swift development',
        'UIKit & SwiftUI implementation',
        'App architecture design',
        'Code review & optimization',
        'Performance tuning',
        'App Store submission'
      ],
      technologies: ['Swift', 'UIKit', 'SwiftUI', 'Core Data', 'CloudKit'],
      startingPrice: 'Starting at $8,000',
      timeline: '8-16 weeks'
    },
    {
      icon: Cube,
      title: 'AR App Prototyping & Deployment',
      description: 'Cutting-edge AR experiences using ARKit, RealityKit, and LiDAR technology',
      features: [
        'ARKit & RealityKit integration',
        'LiDAR scanning capabilities',
        '3D model placement & manipulation',
        'Real-world object detection',
        'Multi-user AR experiences',
        'Performance optimization for AR'
      ],
      technologies: ['ARKit', 'RealityKit', 'SceneKit', 'Metal', 'LiDAR'],
      startingPrice: 'Starting at $12,000',
      timeline: '10-20 weeks'
    },
    {
      icon: Database,
      title: 'Firebase Integration & Real-time Apps',
      description: 'Backend integration with real-time data synchronization and cloud services',
      features: [
        'Firebase Authentication setup',
        'Firestore database integration',
        'Real-time data synchronization',
        'Cloud Functions implementation',
        'Push notifications',
        'Analytics & crash reporting'
      ],
      technologies: ['Firebase', 'Firestore', 'Cloud Functions', 'FCM'],
      startingPrice: 'Starting at $5,000',
      timeline: '4-8 weeks'
    },
    {
      icon: Palette,
      title: 'UI/UX for iOS (UIKit/SwiftUI)',
      description: 'Beautiful and intuitive user interfaces following Apple Human Interface Guidelines',
      features: [
        'Custom UI component design',
        'SwiftUI & UIKit implementation',
        'Animation & micro-interactions',
        'Responsive design',
        'Accessibility compliance',
        'Design system creation'
      ],
      technologies: ['SwiftUI', 'UIKit', 'Core Animation', 'Auto Layout'],
      startingPrice: 'Starting at $3,000',
      timeline: '3-6 weeks'
    },
    {
      icon: Store,
      title: 'App Store Deployment & Support',
      description: 'Complete App Store submission process and ongoing app maintenance',
      features: [
        'App Store optimization',
        'Metadata & screenshots',
        'Review process guidance',
        'Version updates',
        'Bug fixes & maintenance',
        'Performance monitoring'
      ],
      technologies: ['App Store Connect', 'TestFlight', 'Analytics'],
      startingPrice: 'Starting at $1,500',
      timeline: '1-2 weeks'
    },
    {
      icon: CreditCard,
      title: 'Subscription/IAP Integration',
      description: 'Monetization through In-App Purchases and subscription models',
      features: [
        'StoreKit integration',
        'Subscription management',
        'Receipt validation',
        'Paywall implementation',
        'Analytics integration',
        'Revenue optimization'
      ],
      technologies: ['StoreKit', 'RevenueCat', 'Server-side validation'],
      startingPrice: 'Starting at $4,000',
      timeline: '3-5 weeks'
    },
    {
      icon: Wifi,
      title: 'Socket Communication & Video + Sensor Sync Apps',
      description: 'Real-time communication apps with video streaming and sensor data synchronization',
      features: [
        'Socket.IO implementation',
        'Real-time video streaming',
        'Sensor data synchronization',
        'Multi-device communication',
        'Low-latency optimization',
        'Background processing'
      ],
      technologies: ['Socket.IO', 'WebRTC', 'AVFoundation', 'Core Motion'],
      startingPrice: 'Starting at $10,000',
      timeline: '8-14 weeks'
    }
  ];

  const addOns = [
    {
      title: 'Analytics Integration',
      description: 'Comprehensive app analytics and user behavior tracking',
      price: '+$1,000'
    },
    {
      title: 'Maintenance Package',
      description: '6 months of bug fixes, updates, and support',
      price: '+$2,000'
    },
    {
      title: 'Apple Watch App',
      description: 'Companion watchOS app development',
      price: '+$3,000'
    },
    {
      title: 'Backend Development',
      description: 'Custom backend API development',
      price: '+$5,000'
    }
  ];

  const testimonials = [
    {
      text: "Exceptional AR development skills. The app exceeded our expectations and was delivered on time.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      rating: 5
    },
    {
      text: "Professional, reliable, and delivers high-quality iOS apps. Highly recommended!",
      author: "Mike Chen",
      role: "Startup Founder",
      rating: 5
    },
    {
      text: "The Firebase integration was seamless and the real-time features work perfectly.",
      author: "Lisa Rodriguez",
      role: "CTO at HealthTech",
      rating: 5
    }
  ];

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
              iOS Development Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional iOS development services tailored to your needs. From AR experiences 
              to enterprise apps, I deliver high-quality solutions using cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {service.startingPrice}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Optional Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {addon.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {addon.description}
                </p>
                <div className="text-lg font-bold text-green-600">
                  {addon.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'Understanding your requirements, target audience, and technical specifications'
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Creating wireframes, UI designs, and interactive prototypes for validation'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building the app with clean code, thorough testing, and regular progress updates'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'App Store submission, monitoring, and ongoing support for optimal performance'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl rounded-full mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your iOS Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that brings your vision to life.
            I offer free consultations to understand your needs better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              View Pricing Plans
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;