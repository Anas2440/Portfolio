import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  Award,
  Code,
  Heart,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "Started iOS Development Journey",
      description: "Began learning Swift and iOS development fundamentals",
      icon: Code,
    },
    {
      year: "2020",
      title: "First App Store Release",
      description:
        "Launched my first iOS app - a productivity tool that gained 10K+ downloads",
      icon: Award,
    },
    {
      year: "2021",
      title: "Specialized in AR Development",
      description:
        "Dove deep into ARKit and RealityKit, creating immersive experiences",
      icon: Lightbulb,
    },
    {
      year: "2022",
      title: "Freelance iOS Developer",
      description:
        "Started taking on client projects, focusing on complex AR and Firebase integrations",
      icon: Heart,
    },
    {
      year: "2023",
      title: "Senior iOS Developer",
      description:
        "Joined a leading HealthTech company, architecting large-scale iOS applications",
      icon: Award,
    },
    {
      year: "2024",
      title: "7+ Apps Launched",
      description:
        "Successfully delivered multiple apps across various domains with 100K+ combined downloads",
      icon: Code,
    },
  ];

  const skills = [
    "Swift",
    "UIKit",
    "SwiftUI",
    "ARKit",
    "RealityKit",
    "Core Data",
    "Firebase",
    "RxSwift",
    "Combine",
    "REST APIs",
    "Socket.IO",
    "CloudKit",
    "HealthKit",
    "WatchKit",
    "In-App Purchases",
    "StoreKit",
    "Core Animation",
    "Metal",
    "SceneKit",
    "LiDAR",
    "Core ML",
    "Vision Framework",
    "Biometrics",
    "Push Notifications",
    "Background Tasks",
    "Unit Testing",
    "UI Testing",
  ];

  const values = [
    {
      title: "Clean Code",
      description:
        "I believe in writing maintainable, well-documented code that follows SOLID principles and iOS best practices.",
      icon: Code,
    },
    {
      title: "User-Focused Design",
      description:
        "Every app I build prioritizes user experience, ensuring intuitive interfaces and smooth interactions.",
      icon: Heart,
    },
    {
      title: "Continuous Learning",
      description:
        "The iOS ecosystem evolves rapidly. I stay current with the latest technologies and Apple guidelines.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-blue-100 mb-8">
                I'm a passionate iOS developer with 3+ years of experience
                crafting exceptional mobile experiences. From learning Swift to
                launching 10+ iOS apps, my journey has been driven by curiosity
                and dedication to creating apps that users love.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-80 rounded-full overflow-hidden border-8 border-white/20">
                <img
                  src="/assets/img/gallery/Snapchat-380952888.jpg"
                  alt="iOS Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-8 bg-white p-4 rounded-lg shadow-lg"
              >
                <Code className="h-8 w-8 text-blue-600" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-8 bg-white p-4 rounded-lg shadow-lg"
              >
                <Award className="h-8 w-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* My Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Development Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My iOS Development Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                            {item.year}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Skills & Expertise
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800/50 dark:hover:to-indigo-800/50 transition-all duration-200 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Apps Launched", color: "text-blue-600" },
              { number: "100K+", label: "Downloads", color: "text-green-600" },
              {
                number: "50+",
                label: "Happy Clients",
                color: "text-purple-600",
              },
              {
                number: "5+",
                label: "Years Experience",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
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
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on challenging iOS projects. Whether you
            need AR integration, Firebase backends, or beautiful UI/UX, I'm here
            to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              key={"Download Resume"}
              href={"/AnasParekh_iOS_Developer.pdf"}
              target={undefined}
              rel={undefined}
            >
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </button>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
