'use client';

import { FiMail, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-light-300">
            Feel free to reach out if you'd like to collaborate or discuss opportunities!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:atulyarai314@gmail.com"
              className="glass-card flex items-center gap-4 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                <FiMail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-dark-600 dark:text-light-300">atulyarai314@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              className="glass-card flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-dark-600 dark:text-light-300">Karnataka, India</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 