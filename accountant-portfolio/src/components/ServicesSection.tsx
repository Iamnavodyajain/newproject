'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Calculator, 
  TrendingUp, 
  PieChart, 
  CreditCard, 
  Building, 
  Shield, 
  Users 
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST Return Filing",
      description: "Accurate and timely GST return preparation and filing services",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities and maximize savings",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Financial Analysis",
      description: "Detailed financial analysis and reporting for informed decision making",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payroll Management",
      description: "Complete payroll processing and compliance management services",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Registration",
      description: "Company incorporation and business registration services",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Audit & Assurance",
      description: "Professional audit and assurance services for compliance",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Financial Consulting",
      description: "Expert financial advice and consulting for business growth",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive accounting and financial services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text font-semibold group-hover:text-transparent"
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? I&apos;m here to help with all your accounting needs.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;