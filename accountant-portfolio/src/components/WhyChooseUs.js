'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, X, Star } from 'lucide-react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredProgress, setHoveredProgress] = useState(null)

  const comparisons = [
    {
      feature: "24/7 Support",
      competitors: false,
      ourService: true
    },
    {
      feature: "Personalized Service",
      competitors: false,
      ourService: true
    },
    {
      feature: "Quick Response Time",
      competitors: false,
      ourService: true
    },
    {
      feature: "Affordable Pricing",
      competitors: false,
      ourService: true
    },
    {
      feature: "Expert Consultation",
      competitors: true,
      ourService: true
    },
    {
      feature: "Digital Solutions",
      competitors: false,
      ourService: true
    }
  ]

  const progressBars = [
    { label: "Accuracy", percentage: 99 },
    { label: "Client Satisfaction", percentage: 98 },
    { label: "On-time Delivery", percentage: 95 },
    { label: "Cost Effectiveness", percentage: 92 }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See how we stand out from the competition with our exceptional service quality
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Competitors Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Competitors</h3>
              <p className="text-gray-500">Standard industry offerings</p>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-gray-700 font-medium">{item.feature}</span>
                  {item.competitors ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Services Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Premium
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Our Services</h3>
              <p className="text-blue-600">Excellence in every detail</p>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-gray-700 font-medium">{item.feature}</span>
                  <Check className="w-5 h-5 text-green-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Progress Bars Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Performance Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {progressBars.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                onHoverStart={() => setHoveredProgress(index)}
                onHoverEnd={() => setHoveredProgress(null)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{item.label}</span>
                  <motion.span 
                    className="text-blue-600 font-bold text-lg"
                    animate={{ scale: hoveredProgress === index ? 1.1 : 1 }}
                  >
                    {item.percentage}%
                  </motion.span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full progress-bar rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the difference? Let's get started today!
          </p>
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Choose Excellence
          </button>
        </motion.div>
      </div>
    </section>
  )
}