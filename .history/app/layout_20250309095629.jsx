import './globals.css';
import ClientLayout from './ClientLayout';
import Script from 'next/script';

export const metadata = {
  title: 'Atulya Rai | Data Science Student',
  description: 'Portfolio showcasing my projects in data science, Python programming, and game development as a first-year BS student at IIT Madras.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  keywords: 'data science, IIT Madras, Python, programming, Kaggle, machine learning, game development, portfolio, student, neural networks, AI, ML',
  authors: [{ name: 'Atulya Rai' }],
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1121' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://atulyarai.dev',
    site_name: 'Atulya Rai Portfolio',
    title: 'Atulya Rai | Data Science Student',
    description: 'First-year BS in Data Science student at IIT Madras specializing in Python, machine learning, and game development.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atulya Rai Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atulya Rai | Data Science Student',
    description: 'First-year BS in Data Science student at IIT Madras specializing in Python, machine learning, and game development.',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="Atulya Rai Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Atulya Rai Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0B1121" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Accessibility improvements */}
        <meta name="theme-color" content="#0B1121" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Structured data for better SEO */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Atulya Rai',
              url: 'https://atulyarai.dev',
              image: 'https://atulyarai.dev/images/og-image.jpg',
              description: 'First-year BS in Data Science student at IIT Madras specializing in Python, machine learning, and game development.',
              jobTitle: 'Data Science Student',
              worksFor: {
                '@type': 'Organization',
                name: 'IIT Madras'
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'IIT Madras'
              },
              knowsAbout: ['Python', 'Data Science', 'Machine Learning', 'Game Development', 'Neural Networks'],
              sameAs: [
                'https://github.com/atulyarai',
                'https://www.kaggle.com/atulyarai'
              ],
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://atulyarai.dev'
              }
            })
          }}
        />
      </head>
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  );
} 