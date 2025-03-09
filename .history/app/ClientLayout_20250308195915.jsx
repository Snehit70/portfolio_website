'use client';

import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

// Dynamic imports for layout components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="animate-pulse h-16 bg-light-100 dark:bg-dark-800" />,
  ssr: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="animate-pulse h-24 bg-light-100 dark:bg-dark-800" />,
  ssr: true
});

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
});

export default function ClientLayout({ children }) {
  return (
    <body className={`${inter.className} bg-light-50 dark:bg-dark-900 text-dark-900 dark:text-light-50 antialiased`}>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-light-100 to-light-50 dark:from-primary-900/20 dark:via-dark-900 dark:to-dark-900 transition-colors duration-500" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100/50 via-transparent to-transparent dark:from-secondary-900/20 dark:via-transparent dark:to-transparent transition-colors duration-500" />
      
      <div className="relative z-0 flex min-h-screen flex-col">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
      
      <ThemeToggle />
    </body>
  );
} 