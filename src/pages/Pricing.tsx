import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: 'Starter App',
      icon: Zap,
      description: 'Perfect for simple apps and MVPs',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      features: [
        'Native iOS app development',
        'Basic UI/UX design',
        'Core Data integration',
        'App Store submission',
        'Basic testing & QA',
        '3 months support',
        'Source code delivery'
      ],
      notIncluded: [
        'Backend development',
        'Complex animations',
        'Third-party integrations',
        'AR/VR features'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Advanced Features',
      icon: Crown,
      description: 'For apps with AR/LiDAR/Realtime features',
      monthlyPrice: 12000,
      yearlyPrice: 120000,
      features: [
        'Everything in Starter',
        'ARKit & RealityKit integration',
        'LiDAR scanning capabilities',
        'Firebase backend integration',
        'Real-time data synchronization',
        'Advanced animations',
        'Push notifications',
        '6 months support',
        'Performance optimization'
      ],
      notIncluded: [
        'Custom backend development',
        'Multiple platform support',
        'Enterprise features'
      ],
      popular: true,
      color: 'indigo'
    },
    {
      name: 'Subscription + Firebase',
      icon: Rocket,
      description: 'Complete solution with backend and monetization',
      monthlyPrice: 18000,
      yearlyPrice: 180000,
      features: [
        'Everything in Advanced',
        'Complete Firebase setup',
        'In-App Purchase integration',
        'Subscription management',
        'Custom backend APIs',
        'Analytics & monitoring',
        'Admin dashboard',
        'Multi-user support',
        '12 months support',
        'Revenue optimization'
      ],
      notIncluded: [
        'Ongoing content management',
        'Marketing support'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const addOns = [
    {
      name: 'Analytics Integration',
      description: 'Comprehensive app analytics and user behavior tracking',
      price: 1000,
      features: ['Firebase Analytics', 'Custom event tracking', 'User segmentation', 'Conversion funnels']
    },
    {
      name: 'Maintenance Package',
      description: '12 months of bug fixes, updates, and support',
      price: 3000,
      features: ['Bug fixes', 'iOS updates compatibility', 'Performance monitoring', 'Priority support']
    },
    {
      name: 'Apple Watch App',
      description: 'Companion watchOS app development',
      price: 4000,
      features: ['Native watchOS app', 'iPhone app integration', 'Health data sync', 'Complications']
    },
    {
      name: 'Backend Development',
      description: 'Custom backend API and admin panel',
      price: 8000,
      features: ['RESTful APIs', 'Database design', 'Admin dashboard', 'User management']
    }
  ];

  const faqs = [
    {
      question: "What if I don't have a design?",
      answer: "No problem! I provide UI/UX design services as part of the development process. I'll create wireframes, mockups, and a complete design system that follows Apple's Human Interface Guidelines."
    },
    {
      question: "Can you handle backend development?",
      answer: "Yes! I specialize in Firebase integration and can also develop custom backend solutions using Node.js, Express, and various databases depending on your needs."
    },
    {
      question: "How long does development typically take?",
      answer: "Timeline varies based on complexity. Simple apps take 8-12 weeks, while complex AR or enterprise apps can take 16-24 weeks. I provide detailed project timelines after the initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! All packages include support periods, and I offer extended maintenance packages. This includes bug fixes, iOS compatibility updates, and new feature development."
    },
    {
      question: "What about App Store approval?",
      answer: "I handle the complete App Store submission process, including metadata optimization, screenshot creation, and addressing any review feedback to ensure approval."
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      blue: {
        bg: popular ? 'bg-blue-600' : 'bg-white dark:bg-gray-800',
        text: popular ? 'text-white' : 'text-gray-900 dark:text-white',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        border: 'border-blue-200 dark:border-blue-800'
      },
      indigo: {
        bg: popular ? 'bg-indigo-600' : 'bg-white dark:bg-gray-800',
        text: popular ? 'text-white' : 'text-gray-900 dark:text-white',
        accent: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        border: 'border-indigo-200 dark:border-indigo-800'
      },
      purple: {
        bg: popular ? 'bg-purple-600' : 'bg-white dark:bg-gray-800',
        text: popular ? 'text-white' : 'text-gray-900 dark:text-white',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        border: 'border-purple-200 dark:border-purple-800'
      }
    };
    return colors[color as keyof typeof colors];
  };

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
              Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choose the perfect package for your iOS app development needs. 
              All packages include high-quality code, thorough testing, and App Store submission.
            </p>
            
            {/* Pricing Toggle */}
            <div className="inline-flex items-center bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  !isYearly ? 'bg-white text-blue-600' : 'text-white'
                }`}
              >
                One-time Project
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  isYearly ? 'bg-white text-blue-600' : 'text-white'
                }`}
              >
                Retainer (Save 15%)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => {
            const colorClasses = getColorClasses(tier.color, tier.popular);
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-lg shadow-xl overflow-hidden ${colorClasses.bg} ${
                  tier.popular ? 'ring-4 ring-indigo-500 scale-105' : colorClasses.border + ' border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-indigo-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${tier.popular ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      <tier.icon className={`h-6 w-6 ${tier.popular ? 'text-white' : colorClasses.accent}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                      {tier.name}
                    </h3>
                  </div>
                  
                  <p className={`mb-6 ${tier.popular ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-300'}`}>
                    {tier.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${colorClasses.text}`}>
                      ${price.toLocaleString()}
                    </div>
                    <div className={`text-sm ${tier.popular ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {isYearly ? 'per year retainer' : 'one-time project'}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      tier.popular 
                        ? 'bg-white text-indigo-600 hover:bg-gray-100' 
                        : colorClasses.button
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                  
                  <div className="mt-8">
                    <h4 className={`font-semibold mb-4 ${colorClasses.text}`}>What's included:</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-green-300' : 'text-green-500'}`} />
                          <span className={`text-sm ${tier.popular ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {tier.notIncluded.length > 0 && (
                      <>
                        <h4 className={`font-semibold mt-6 mb-3 ${colorClasses.text}`}>Not included:</h4>
                        <ul className="space-y-2">
                          {tier.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <X className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-red-300' : 'text-red-500'}`} />
                              <span className={`text-sm ${tier.popular ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {addon.description}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 ml-4">
                    ${addon.price.toLocaleString()}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements and get a detailed quote 
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Pricing;