'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer for small businesses?",
      answer: "I provide comprehensive accounting services including bookkeeping, tax preparation, GST filing, payroll management, financial analysis, and business consulting. My services are tailored to help small businesses manage their finances efficiently while ensuring compliance with all regulations."
    },
    {
      question: "How much do your accounting services cost?",
      answer: "My pricing varies based on the complexity and scope of services required. I offer competitive rates and flexible packages to suit different business needs. Contact me for a personalized quote based on your specific requirements."
    },
    {
      question: "Do you provide year-round support or just during tax season?",
      answer: "I provide year-round support to all my clients. While tax season is certainly busy, I believe in maintaining ongoing relationships and providing continuous support for bookkeeping, financial planning, and business advice throughout the year."
    },
    {
      question: "Can you help with QuickBooks setup and training?",
      answer: "Absolutely! I'm QuickBooks certified and can help you set up your QuickBooks system, customize it for your business needs, provide training to you and your team, and offer ongoing support to ensure you're making the most of this powerful tool."
    },
    {
      question: "What makes your services different from other accountants?",
      answer: "I focus on building personal relationships with my clients and providing customized solutions. Unlike larger firms, you'll always work directly with me, ensuring consistent service and deep understanding of your business. I also emphasize proactive communication and use modern technology to streamline processes."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get answers to common questions about my accounting services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>
              </button>

              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-3xl">💬</span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact me for personalized solutions tailored to your specific needs. 
            I'm here to help you navigate your financial journey with confidence.
          </p>
          
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Personalized Help
          </button>
        </motion.div>
      </div>
    </section>
  )
}