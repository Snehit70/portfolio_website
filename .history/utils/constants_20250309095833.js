'use client';

import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiKaggle, SiTwitter } from 'react-icons/si';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/atulyarai',
    icon: SiGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/atulya-rai',
    icon: SiLinkedin
  },
  {
    name: 'Kaggle',
    url: 'https://kaggle.com/atulyarai',
    icon: SiKaggle
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/atulya_rai_',
    icon: SiTwitter
  }
];

export const NAV_LINKS = [
  {
    name: 'Home',
    href: '#',
    icon: FiHome
  },
  {
    name: 'About',
    href: '#about',
    icon: FiUser
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: FiCode
  },
  {
    name: 'Projects',
    href: '#projects',
    icon: FiBriefcase
  },
  {
    name: 'Contact',
    href: '#contact',
    icon: FiMail
  }
];

export const PERSONAL_INFO = {
  name: 'Atulya Rai',
  title: 'Hello, I am',
  description: 'First-year BS in Data Science student at IIT Madras',
  briefBio: 'A passionate first-year student at IIT Madras, focusing on Data Science, Machine Learning, and Python development with a drive to solve real-world problems through technology.',
  email: 'contact@atulyarai.dev',
  location: 'IIT Madras, Chennai, India',
  education: [
    {
      degree: 'BS in Data Science and Applications',
      institution: 'IIT Madras',
      year: '2023 - Present',
      description: 'Specializing in data analysis, machine learning, and AI applications.'
    },
    {
      degree: 'High School',
      institution: 'Delhi Public School',
      year: '2021 - 2023',
      description: 'Focused on Mathematics and Computer Science with a 95% aggregate score.'
    }
  ],
  about: {
    intro: "I'm Atulya Rai, a first-year student pursuing BS in Data Science at IIT Madras, passionate about leveraging technology to solve real-world problems.",
    journey: "My journey in technology began when I was in high school, where I developed a strong foundation in mathematics and started exploring programming through Python. Since then, I've been constantly expanding my skillset through various projects and online courses.",
    interests: "My primary interests lie in machine learning, data analysis, and game development. I enjoy exploring datasets, identifying patterns, and building predictive models. In my free time, I participate in Kaggle competitions and develop small games using Python libraries.",
    goals: "My goal is to become a skilled data scientist who can extract meaningful insights from complex datasets and develop innovative solutions using AI and machine learning technologies."
  }
};

export const SEO_CONFIG = {
  title: 'Atulya Rai | Data Science Student',
  titleTemplate: '%s | Portfolio',
  description: 'First-year BS in Data Science student at IIT Madras with skills in Python, machine learning, and game development.',
  canonical: 'https://atulyarai.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://atulyarai.dev',
    site_name: 'Atulya Rai Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atulya Rai - Data Science Student',
      },
    ],
  },
  twitter: {
    handle: '@atulya_rai_',
    site: '@atulya_rai_',
    cardType: 'summary_large_image',
  },
}; 