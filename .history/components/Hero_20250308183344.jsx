'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/utils/constants';
import SocialIcon from './ui/SocialIcon';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 lg:pt-24 pb-12 lg:pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute w-full max-w-[600px] h-[600px] bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-3xl -top-64 -left-44 z-0"></div>
      <div className="absolute w-full max-w-[600px] h-[600px] bg-secondary-600/10 dark:bg-secondary-600/20 rounded-full blur-3xl -bottom-64 -right-44 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium">
                {PERSONAL_INFO.title}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 max-w-2xl">
                {PERSONAL_INFO.description}
              </p>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  label={`Visit ${social.name}`}
                />
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                View My Projects
                <BsArrowDown className="ml-2 animate-bounce" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile image */}
          <motion.div 
            className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative bg-gradient-to-b from-primary-500/20 to-secondary-500/20 rounded-full p-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="glass-card absolute inset-0.5 rounded-full overflow-hidden border-2 border-primary-400/30 shadow-lg">
              <Image
                src="/images/photo_2024-09-28_08-35-58.jpg"
                alt={PERSONAL_INFO.name}
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-center scale-110"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-pulse-slow blur-md -z-10"></div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        {!isScrolled && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-dark-600 dark:text-light-300 text-sm mb-2">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-dark-300 dark:border-light-600 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 