'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: "5+", label: "Years of Experience", icon: "⏰" },
    { number: "100+", label: "Clients Served", icon: "👥" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Professional Photo */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {/* PLACEHOLDER: Replace with actual professional photo */}
                  <div className="text-gray-500 text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-sm">Professional Photo</p>
                    <p className="text-xs">[Replace with actual image]</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-blue-500"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">🎓</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {/* PLACEHOLDER: Replace with actual name */}
              Hi, I'm [Your Name]
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {/* PLACEHOLDER: Replace with actual introduction */}
              <p>
                With over 5 years of experience in accounting and financial services, 
                I specialize in helping individuals and businesses navigate complex 
                tax regulations and achieve their financial goals.
              </p>
              
              <p>
                My expertise spans across tax preparation, bookkeeping, financial 
                planning, and business consulting. I believe in building long-term 
                relationships with my clients by providing personalized service 
                and expert guidance.
              </p>
              
              <p>
                Whether you're a small business owner looking to optimize your 
                finances or an individual seeking tax advice, I'm here to provide 
                reliable, professional service tailored to your unique needs.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                CPA Certified
              </div>
              <div className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold">
                QuickBooks Pro
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                Tax Specialist
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <motion.div 
                className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}