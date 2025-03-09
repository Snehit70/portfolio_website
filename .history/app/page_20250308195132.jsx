'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

// Dynamic imports with error boundaries
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="animate-pulse h-screen bg-light-100 dark:bg-dark-800" />
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="animate-pulse h-96 bg-light-100 dark:bg-dark-800" />
});

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="animate-pulse h-96 bg-light-100 dark:bg-dark-800" />
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="animate-pulse h-96 bg-light-100 dark:bg-dark-800" />
});

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>

      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>

      <ErrorBoundary>
        <ThemeToggle />
      </ErrorBoundary>
    </>
  );
} 