import { FiHome, FiUser, FiCode, FiFolder, FiBook, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiKaggle } from 'react-icons/si';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/atulyarai',
    icon: FiGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/atulyarai',
    icon: FiLinkedin
  },
  {
    name: 'Email',
    url: 'mailto:atulyarai314@gmail.com',
    icon: FiMail
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiFolder },
  { name: 'Kaggle', href: '#kaggle', icon: SiKaggle },
  { name: 'Education', href: '#education', icon: FiBook },
  { name: 'Contact', href: '#contact', icon: FiMail }
];

export const PERSONAL_INFO = {
  name: 'Atulya Rai',
  title: 'BS in Data Science Student | IIT Madras',
  description: 'First-year student from Karnataka, passionate about data science and machine learning. Starting my journey at IIT Madras in May 2024. Currently focusing on Python projects and building a strong foundation in data analysis.',
  email: 'atulyarai314@gmail.com',
  location: 'Karnataka, India'
}; 