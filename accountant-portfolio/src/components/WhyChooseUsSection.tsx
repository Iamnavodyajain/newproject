'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, Star } from 'lucide-react';

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const comparisons = [
    {
      category: "Response Time",
      competitor: "2-3 Days",
      us: "Same Day",
      competitorIcon: <X className="w-5 h-5 text-red-500" />,
      usIcon: <Check className="w-5 h-5 text-green-500" />
    },
    {
      category: "Accuracy Rate",
      competitor: "85-90%",
      us: "99.9%",
      competitorIcon: <X className="w-5 h-5 text-red-500" />,
      usIcon: <Check className="w-5 h-5 text-green-500" />
    },
    {
      category: "Client Support",
      competitor: "Business Hours",
      us: "24/7 Available",
      competitorIcon: <X className="w-5 h-5 text-red-500" />,
      usIcon: <Check className="w-5 h-5 text-green-500" />
    },
    {
      category: "Personal Touch",
      competitor: "Generic Service",
      us: "Personalized Care",
      competitorIcon: <X className="w-5 h-5 text-red-500" />,
      usIcon: <Check className="w-5 h-5 text-green-500" />
    }
  ];

  const performanceMetrics = [
    { label: "Accuracy", percentage: 99, color: "from-green-500 to-green-600" },
    { label: "Client Satisfaction", percentage: 98, color: "from-blue-500 to-blue-600" },
    { label: "On-Time Delivery", percentage: 100, color: "from-purple-500 to-purple-600" },
    { label: "Cost Effectiveness", percentage: 95, color: "from-teal-500 to-teal-600" },
    { label: "Professional Expertise", percentage: 97, color: "from-orange-500 to-orange-600" },
    { label: "Communication", percentage: 96, color: "from-pink-500 to-pink-600" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated professional who puts your success first
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Competitors Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <X className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Other Providers</h3>
              <p className="text-gray-600">What you typically get elsewhere</p>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {item.competitorIcon}
                    <span className="font-medium text-gray-700">{item.category}</span>
                  </div>
                  <span className="text-gray-600">{item.competitor}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200 relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full opacity-20 transform translate-x-8 -translate-y-8" />
            
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">My Services</h3>
              <p className="text-gray-600">What makes me different</p>
            </div>

            <div className="space-y-4 relative z-10">
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    {item.usIcon}
                    <span className="font-medium text-gray-700">{item.category}</span>
                  </div>
                  <span className="text-blue-600 font-semibold">{item.us}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Performance Metrics
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <h4 className="font-semibold text-gray-800 mb-4">{metric.label}</h4>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${metric.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${metric.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                  
                  {/* Percentage Display */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className={`mt-2 text-2xl font-bold transition-all duration-300 ${
                      hoveredBar === index 
                        ? 'text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text scale-110' 
                        : 'text-gray-800'
                    }`}
                  >
                    {metric.percentage}%
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust me with their financial success. 
            Let&apos;s discuss how I can help your business thrive.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Success Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;