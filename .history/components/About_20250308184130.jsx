'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants';
import SocialIcon from './ui/SocialIcon';
import { FiMail, FiMapPin } from 'react-icons/fi';

const journeyHighlights = [
  {
    year: '2024',
    title: 'IIT Madras',
    description: 'Starting BS in Data Science program',
    highlight: 'Selected for prestigious online degree program'
  },
  {
    year: '2023',
    title: 'Data Science Journey',
    description: 'Started learning Python and Data Science',
    highlight: 'Built multiple projects and participated in competitions'
  },
  {
    year: '2023',
    title: 'Game Development',
    description: 'Created Python games using Pygame',
    highlight: 'Developed Alien Invasion and Dragon Run games'
  }
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-full max-w-[600px] h-[600px] bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-3xl top-1/2 -translate-y-1/2 right-0 z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About & Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mb-6"></div>
            
            <div className="prose prose-lg dark:prose-invert mb-8">
              <p>
                First-year student passionate about data science and programming. Starting my journey at IIT Madras in May 2024, focusing on building a strong foundation in data analysis and machine learning.
              </p>
              <p>
                Currently preparing for ICPC and Smart India Hackathon 2024, while expanding my knowledge in data science through practical projects and competitions.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Journey Highlights</h3>
            <div className="space-y-6">
              {journeyHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">{item.year}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-dark-600 dark:text-light-300 text-sm mb-2">{item.description}</p>
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{item.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mb-6"></div>

            <div className="grid gap-6">
              <motion.div
                className="glass-card p-4 flex items-center gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                  <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-4 flex items-center gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                  <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-dark-600 dark:text-light-300">{PERSONAL_INFO.location}</p>
                </div>
              </motion.div>

              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <SocialIcon
                      key={social.name}
                      href={social.url}
                      icon={social.icon}
                      label={`Visit ${social.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 