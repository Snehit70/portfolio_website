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
  title: 'John Doe | Full Stack Developer',
  description: 'Professional portfolio showcasing my work in web development, including full-stack applications, UI/UX design, and cloud solutions.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'web developer, full stack developer, react developer, nodejs developer, software engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    site_name: 'John Doe Portfolio',
    title: 'John Doe | Full Stack Developer',
    description: 'Professional portfolio showcasing my work in web development',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
} 