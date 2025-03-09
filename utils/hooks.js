'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for smooth scrolling to elements
 * @param {Object} options - Scrolling options
 * @returns {Function} - Scroll function
 */
export const useSmoothScroll = (options = {}) => {
  const { offset = 80, duration = 1000, easing = 'easeInOutCubic' } = options;
  
  const easings = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  };
  
  const scrollTo = (target, customOptions = {}) => {
    const mergedOptions = { offset, duration, easing, ...customOptions };
    const easingFunction = easings[mergedOptions.easing] || easings.easeInOutCubic;
    
    let targetElement;
    if (typeof target === 'string') {
      // If target is a selector string
      targetElement = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
      // If target is a DOM element
      targetElement = target;
    } else {
      // If target is a ref object
      targetElement = target.current;
    }
    
    if (!targetElement) return;
    
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - mergedOptions.offset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / mergedOptions.duration, 1);
      const easeProgress = easingFunction(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (timeElapsed < mergedOptions.duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };
  
  return scrollTo;
};

/**
 * Custom hook to detect when an element is in viewport
 * @param {Object} options - Intersection observer options
 * @returns {Object} - Ref to attach and inView status
 */
export const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting);
    }, observerOptions);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);
  
  return { ref, inView };
};

/**
 * Custom hook for dark mode toggle with localStorage persistence
 * @returns {Array} - [isDarkMode, toggleDarkMode]
 */
export const useDarkMode = () => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize with user's preferred color scheme or stored preference
  const getInitialTheme = () => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };
  
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  
  // Update class on document and store in localStorage
  useEffect(() => {
    if (!isBrowser) return;
    
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, isBrowser]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return [isDarkMode, toggleDarkMode];
};

/**
 * Custom hook for debouncing function calls
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const useDebounce = (fn, delay) => {
  const timeoutRef = useRef(null);
  
  const debouncedFn = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return debouncedFn;
}; 