'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

// Loading components
const LoadingSpinner = () => (
  <div className="animate-pulse h-96 bg-light-100 dark:bg-dark-800 rounded-xl" />
);

// Dynamic imports with error boundaries and suspense
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="space-y-24">
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <Skills />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </Suspense>

      <ErrorBoundary>
        <ThemeToggle />
      </ErrorBoundary>
    </div>
  );
} 