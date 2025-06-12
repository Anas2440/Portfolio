import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Zap, Star, Play } from "lucide-react";

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const technologies = [
    "Swift",
    "UIKit",
    "SwiftUI",
    "ARKit",
    "RealityKit",
    "Core Data",
    "Firebase",
    "RxSwift",
    "REST APIs",
    "Socket.IO",
    "In-App Purchases",
  ];

  const achievements = [
    { number: "10+", label: "iOS Apps Launched" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "10K+", label: "App Downloads" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-200 dark:border-blue-800 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-indigo-200 dark:border-indigo-800 rounded-full opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Available for new projects
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Crafting Exceptional
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    iOS Experiences
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  With Swift, UIKit, RealityKit & Beyond. 3+ years crafting
                  cutting-edge iOS applications across AR, HealthTech,
                  Subscriptions, and Firebase integration.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 transform hover:scale-105"
                >
                  Let's Talk
                </Link>

                <button className="inline-flex items-center px-6 py-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="grid grid-cols-4 gap-6 pt-8"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* iPhone Mockup */}
              <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full" />

                  {/* Screen Content */}
                  <div className="pt-12 p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-sm opacity-75">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm opacity-75" />
                          <div className="w-6 h-2 bg-white rounded-sm" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <Code className="h-8 w-8 mb-2" />
                          <div className="text-sm font-medium">
                            Swift Development
                          </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <Zap className="h-8 w-8 mb-2" />
                          <div className="text-sm font-medium">
                            ARKit Integration
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* App Icons */}
                    <div className="grid grid-cols-4 gap-3">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center"
                        >
                          <div className="w-6 h-6 bg-white/50 rounded" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <Star className="h-6 w-6 text-yellow-500" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <Smartphone className="h-6 w-6 text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cutting-edge tools and frameworks I use to build exceptional apps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-900 dark:hover:text-blue-100 transition-all duration-200 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss your iOS project and bring your vision to life with
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
