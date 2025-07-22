'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: "What accounting services do you provide?",
      answer: "I offer comprehensive accounting services including GST return filing, tax planning, bookkeeping, financial analysis, payroll management, business registration, audit & assurance, and financial consulting. Each service is tailored to meet your specific business needs and ensure compliance with current regulations."
    },
    {
      question: "How quickly can you process GST returns?",
      answer: "I can process GST returns within the same day for most clients. My streamlined process and attention to detail ensure accurate filings while meeting all deadlines. For complex cases, I provide clear timelines upfront and keep you informed throughout the process."
    },
    {
      question: "Do you work with small businesses or only large corporations?",
      answer: "I work with businesses of all sizes, from individual entrepreneurs and small startups to established corporations. My services are scalable and customized to fit your business size, industry, and specific requirements. Every client receives the same level of professional attention and care."
    },
    {
      question: "What are your fees and how do you structure pricing?",
      answer: "My pricing is transparent and competitive, structured based on the complexity and scope of services required. I offer flexible pricing models including fixed-fee packages for regular services and hourly rates for specialized consulting. Contact me for a personalized quote based on your specific needs."
    },
    {
      question: "How do you ensure the security and confidentiality of financial data?",
      answer: "I maintain the highest standards of data security and confidentiality. All client information is protected through encrypted systems, secure file sharing, and strict confidentiality protocols. I'm bound by professional ethics and legal requirements to protect your sensitive financial information at all times."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about my accounting services and processes
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                      openIndex === index ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contact me for personalized solutions tailored to your specific accounting needs. 
                             I&apos;m here to help you succeed with expert guidance and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Call Now: [PHONE NUMBER]
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;