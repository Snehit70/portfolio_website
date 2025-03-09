'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { PERSONAL_INFO } from '@/utils/constants';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-light-300">
            Feel free to reach out to me for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-light-400">Email</p>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-light-400">Location</p>
                  <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg bg-light-100 dark:bg-dark-800 border border-light-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-light-100 dark:bg-dark-800 border border-light-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 rounded-lg bg-light-100 dark:bg-dark-800 border border-light-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 