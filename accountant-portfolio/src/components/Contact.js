'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Send,
  Loader2,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const services = [
    'GST Filing',
    'Bookkeeping', 
    'Tax Planning',
    'Financial Analysis',
    'Business Consulting',
    'Audit Services',
    'Payroll Management',
    'Investment Advisory'
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-[#4267B2]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E1306C]' }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, State',
      href: '#'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '', service: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0e0e10]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#94a1b2] mb-8 max-w-3xl mx-auto">
            Ready to take control of your finances? Let's discuss how I can help you achieve your goals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Contact Information */}
            <div className="bg-[#16161a] rounded-xl p-8 border border-[#242629]">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#242629] transition-colors duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#94a1b2] font-medium">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#16161a] rounded-xl p-8 border border-[#242629]">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-[#242629] rounded-full flex items-center justify-center text-[#94a1b2] ${social.color} transition-colors duration-200`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-[#94a1b2] mt-4">
                Connect with me on social media for updates and financial tips!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-[#16161a] rounded-xl p-8 border border-[#242629]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-200">Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg flex items-center space-x-3"
              >
                <span className="text-red-200">{submitError}</span>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#94a1b2] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#242629] border border-[#36383d] rounded-lg focus:ring-2 focus:ring-[#7f5af0] focus:border-transparent text-white transition-colors duration-200 placeholder-[#72757e]"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#94a1b2] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#242629] border border-[#36383d] rounded-lg focus:ring-2 focus:ring-[#7f5af0] focus:border-transparent text-white transition-colors duration-200 placeholder-[#72757e]"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#94a1b2] mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#242629] border border-[#36383d] rounded-lg focus:ring-2 focus:ring-[#7f5af0] focus:border-transparent text-white transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  <option value="" className="text-[#72757e]">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#94a1b2] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#242629] border border-[#36383d] rounded-lg focus:ring-2 focus:ring-[#7f5af0] focus:border-transparent text-white transition-colors duration-200 resize-none placeholder-[#72757e]"
                  placeholder="Tell me about your needs..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white py-3.5 px-6 rounded-lg font-medium text-sm tracking-wide hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7f5af0]/90 to-[#2cb67d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}