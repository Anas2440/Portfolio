import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Lightbulb, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch from API
  const projectData: any = {
    'ar-furniture': {
      title: 'AR Furniture Placement',
      category: 'AR',
      description: 'Revolutionary AR app for furniture placement using ARKit and RealityKit',
      longDescription: 'This cutting-edge AR furniture placement app leverages the power of ARKit and RealityKit to provide users with an immersive shopping experience. Users can visualize furniture in their own space before making a purchase, reducing returns and increasing customer satisfaction.',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Swift', 'ARKit', 'RealityKit', 'SceneKit', 'UIKit', 'Core Data'],
      duration: '6 months',
      role: 'Lead iOS Developer',
      appStoreUrl: '#',
      githubUrl: '#',
      gallery: [
        'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      challenges: [
        'Implementing accurate 3D object placement in real-world coordinates',
        'Optimizing performance for complex 3D models',
        'Creating intuitive user interactions for AR environment',
        'Handling various lighting conditions for realistic rendering'
      ],
      features: [
        'Real-time AR furniture placement',
        '3D model scaling and rotation',
        'Multi-room support',
        'Save and share configurations',
        'Integration with e-commerce platform',
        'Realistic shadow and lighting effects'
      ],
      outcomes: [
        '40% reduction in furniture returns',
        '60% increase in customer engagement',
        '95% user satisfaction rating',
        'Featured on App Store'
      ],
      testimonial: {
        text: "The AR furniture app exceeded our expectations. The implementation was flawless and our customers love the experience.",
        author: "Sarah Johnson",
        role: "Product Manager at FurniCorp"
      }
    }
  };

  const project = projectData[id as string];

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <User className="h-5 w-5 mr-2" />
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.appStoreUrl}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View on App Store
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 transform hover:scale-105"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>

              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Target className="h-6 w-6 mr-2 text-blue-600" />
              Key Features
            </h2>
            <div className="space-y-4">
              {project.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Lightbulb className="h-6 w-6 mr-2 text-yellow-500" />
              Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-yellow-500"
                >
                  <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Project Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.map((outcome: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {outcome.split(' ')[0]}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {outcome.split(' ').slice(1).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial */}
        {project.testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
              <blockquote className="text-xl italic mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-blue-200 text-sm">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how I can help bring your iOS app vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;