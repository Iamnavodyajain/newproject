'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-teal-500" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">[ACCOUNTANT NAME]</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Your trusted partner for professional accounting services. 
              Dedicated to your financial success with precision and integrity.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for your success</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: '#3B82F6' }}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Email</p>
                <a 
                  href="mailto:[YOUR EMAIL]" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  [YOUR EMAIL]
                </a>
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <a 
                  href="tel:[YOUR PHONE]" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  [YOUR PHONE]
                </a>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-gray-300">[YOUR CITY, COUNTRY]</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              © {currentYear} [ACCOUNTANT NAME]. All rights reserved. | 
              <span className="text-gray-300 ml-1">Professional Accounting Services</span>
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500" />
    </footer>
  );
};

export default Footer;