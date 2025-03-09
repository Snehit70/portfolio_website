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
    { media: '(prefers-color-scheme: dark)', color: '#0B1121' }
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
      <body className="relative bg-light-50 dark:bg-[#0B1121] text-dark-900 dark:text-light-50 font-sans antialiased selection:bg-primary-200 dark:selection:bg-primary-900 selection:text-primary-900 dark:selection:text-primary-100">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-light-100 to-light-50 dark:from-primary-900/20 dark:via-dark-900 dark:to-dark-900 transition-colors duration-500" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100/50 via-transparent to-transparent dark:from-secondary-900/20 dark:via-transparent dark:to-transparent transition-colors duration-500" />
        
        <div className="relative z-0 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        
        <ThemeToggle />
      </body>
    </html>
  );
} 