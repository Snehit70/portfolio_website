'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDown } from 'react-icons/bs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/utils/constants';
import SocialIcon from './ui/SocialIcon';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef(null);
  
  // Scroll-driven animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Typing animation for the role text
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Data Science Student", "Python Developer", "ML Enthusiast"];
  
  useEffect(() => {
    const typeText = () => {
      const role = roles[currentIndex];
      
      if (displayedText.length < role.length) {
        setDisplayedText(role.substring(0, displayedText.length + 1));
        setTimeout(typeText, 100);
      } else {
        // Pause at the end of the text before switching
        setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex((currentIndex + 1) % roles.length);
        }, 2000);
      }
    };
    
    if (displayedText.length === 0) {
      typeText();
    }
  }, [displayedText, currentIndex, roles]);

  return (
    <section 
      ref={sectionRef}
      className="pt-20 lg:pt-24 pb-12 lg:pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden"
      aria-label="Introduction and personal information"
    >
      {/* Background gradients */}
      <motion.div 
        className="absolute w-full max-w-[600px] h-[600px] bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-3xl -top-64 -left-44 z-0"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute w-full max-w-[600px] h-[600px] bg-secondary-600/10 dark:bg-secondary-600/20 rounded-full blur-3xl -bottom-64 -right-44 z-0"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          style={{ opacity, y, scale }}
        >
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
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible" 
                className="text-sm md:text-base inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md font-medium"
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading"
              >
                Atulya Rai
              </motion.h1>
              
              <motion.div 
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-2"
              >
                <span className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">I'm a</span>
                <span className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-300 h-[1.5em] inline-flex items-center">
                  {displayedText}
                  <span className="animate-blink ml-0.5">|</span>
                </span>
              </motion.div>
              
              <motion.p 
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-dark-600 dark:text-light-300 text-lg max-w-lg"
              >
                {PERSONAL_INFO.briefBio}
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact" className="btn-primary py-3 px-6" aria-label="Contact Me">
                Get in Touch
              </Link>
              
              <Link href="#projects" className="btn-secondary py-3 px-6" aria-label="View My Projects">
                See My Work
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialIcon
                    key={link.name}
                    url={link.url}
                    icon={link.icon}
                    label={`Visit my ${link.name} profile`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.7,
                delay: 0.3
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse" />
              <div className="w-full h-full overflow-hidden rounded-full border-4 border-light-100 dark:border-dark-800 relative z-10">
                <Image
                  src="/images/profile.jpg"
                  alt="Atulya Rai"
                  fill
                  priority
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-light-50 dark:bg-dark-800 shadow-lg rounded-full p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Image 
                  src="/images/iit-madras-logo.png" 
                  alt="IIT Madras Logo" 
                  width={40} 
                  height={40} 
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.span 
          className="text-dark-400 dark:text-light-500 text-sm mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-dark-200 dark:border-light-800 flex justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1] 
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 