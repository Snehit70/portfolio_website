'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-4 glass-card">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Something went wrong</h2>
          <p className="text-dark-600 dark:text-light-300 text-center">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
} 