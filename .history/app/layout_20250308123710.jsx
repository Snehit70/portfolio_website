import '../styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Atulya Rai | Data Science Student',
  description: 'Portfolio showcasing my projects in data science, Python programming, and game development as a first-year BS student at IIT Madras.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  keywords: 'data science, IIT Madras, Python, programming, Kaggle, machine learning, game development, portfolio, student',
  authors: [{ name: 'Atulya Rai' }],
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://atulyarai.dev',
    site_name: 'Atulya Rai Portfolio',
    title: 'Atulya Rai | Data Science Student',
    description: 'First-year BS in Data Science student at IIT Madras',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atulya Rai Portfolio'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
} 