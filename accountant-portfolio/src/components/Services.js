'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  PieChart, 
  Briefcase, 
  Shield, 
  Users, 
  DollarSign 
} from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      name: "GST Filing",
      icon: FileText,
      description: "Complete GST registration, filing, and compliance services",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Bookkeeping",
      icon: Calculator,
      description: "Professional bookkeeping and accounting record maintenance",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Tax Planning",
      icon: TrendingUp,
      description: "Strategic tax planning to minimize your tax liability",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      name: "Financial Analysis",
      icon: PieChart,
      description: "Comprehensive financial analysis and reporting",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Business Consulting",
      icon: Briefcase,
      description: "Expert business advice and growth strategies",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Audit Services",
      icon: Shield,
      description: "Internal and external audit services for compliance",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      name: "Payroll Management",
      icon: Users,
      description: "Complete payroll processing and management solutions",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      name: "Investment Advisory",
      icon: DollarSign,
      description: "Investment planning and portfolio management advice",
      gradient: "from-green-500 to-green-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive financial services tailored to meet your business and personal needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Arrow */}
                <motion.div 
                  className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}