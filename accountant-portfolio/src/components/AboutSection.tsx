'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "5+",
      label: "Years of Experience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Clients Served",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Satisfaction Rate",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional financial services with precision and integrity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                {/* Placeholder for professional photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-sm text-gray-600 px-4">
                      [PLACEHOLDER: Replace with professional headshot photo]
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Trusted Financial Partner
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>[PLACEHOLDER TEXT - Replace with actual introduction]</strong>
              </p>
              <p>
                With over 5 years of experience in the accounting industry, I specialize in providing 
                comprehensive financial services tailored to meet the unique needs of individuals and 
                businesses. My commitment to accuracy, transparency, and client satisfaction has helped 
                numerous clients achieve their financial goals.
              </p>
              <p>
                I hold professional certifications in accounting and tax preparation, staying current 
                with the latest regulations and best practices. Whether you need help with GST returns, 
                tax planning, bookkeeping, or financial consulting, I&apos;m here to provide reliable and 
                efficient solutions.
              </p>
              <p>
                My approach is client-focused, ensuring that every service is delivered with the highest 
                level of professionalism and attention to detail. I believe in building long-term 
                relationships based on trust, reliability, and exceptional service.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Let&apos;s Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h4
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                >
                  {stat.number}
                </motion.h4>
                
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;