import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiMongodb, SiRedux, SiReactrouter,
  SiCloudinary, SiJsonwebtokens, SiPytorch, SiTensorflow,
  SiScikitlearn, SiC
} from 'react-icons/si';

export const SOCIAL_LINKS = {
  github: 'https://github.com/akshatp1811',
  linkedin: 'https://linkedin.com/in/akshat-pandey-kiit',
  instagram: 'https://instagram.com/akshatpandey',
  email: 'akshatpanday28@gmail.com',
  phone: '8299231964',
};

export const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'AI-Powered App Builder',
];

export const BIO = "I'm a Computer Science student at KIIT (2023–2027), passionate about building full-stack products that merge AI with elegant UI. I've shipped a government portal, a healthcare AI platform, and scalable backend systems — and I'm always looking for what's next.";

export const TECH_STACK_ROW1 = [
  { name: 'C', icon: 'SiC' },
  { name: 'Java', icon: 'FaJava' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'React.js', icon: 'FaReact' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'Express.js', icon: 'SiExpress' },
  { name: 'Redux Toolkit', icon: 'SiRedux' },
  { name: 'React Router', icon: 'SiReactrouter' },
  { name: 'Mongoose', icon: 'FaDatabase' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Appwrite', icon: 'FaDatabase' },
];

export const TECH_STACK_ROW2 = [
  { name: 'Cloudinary', icon: 'SiCloudinary' },
  { name: 'JWT', icon: 'SiJsonwebtokens' },
  { name: 'Bcrypt', icon: 'FaDatabase' },
  { name: 'Multer', icon: 'FaDatabase' },
  { name: 'React Hook Form', icon: 'FaReact' },
  { name: 'Python', icon: 'FaPython' },
  { name: 'PyTorch', icon: 'SiPytorch' },
  { name: 'TensorFlow', icon: 'SiTensorflow' },
  { name: 'Scikit-Learn', icon: 'SiScikitlearn' },
  { name: 'Git', icon: 'FaGitAlt' },
  { name: 'GitHub', icon: 'FaGithub' },
];

export const ICON_MAP = {
  SiC, FaJava, SiJavascript, FaReact, FaNodeJs, SiExpress,
  SiRedux, SiReactrouter, FaDatabase, SiMongodb, SiCloudinary,
  SiJsonwebtokens, FaPython, SiPytorch, SiTensorflow, SiScikitlearn,
  FaGitAlt, FaGithub,
};

export const EDUCATION = {
  institution: 'Kalinga Institute of Industrial Technology',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: '2023 – 2027',
  cgpa: '8.67 / 10',
};

export const EXPERIENCE = {
  role: 'Software Engineering Intern',
  company: 'Exergy Solutions',
  type: 'Remote',
  duration: 'Dec 2025 – March 2026',
  bullets: [
    'Contributed to the frontend design and development of the Haryana Government Clean Mobility Portal (cleanmobility.haryanatransport.gov.in).',
    'Built responsive UI components and collaborated in a remote team environment.',
    'Gained practical experience in GitHub-based version control and Database Schema Design.',
  ],
};

export const PROJECTS = [
  {
    id: 'mednest',
    name: 'MedNest',
    category: 'Full Stack · AI',
    teaser: 'An AI-powered personal health management platform with smart records, medication tracking, and emergency SOS.',
    description: 'MedNest is a comprehensive AI-powered healthcare platform designed to act as a personal medical assistant. It features an intelligent timeline-based health records system with AI document extraction, a medication management module with caregiver mode, vitals self-tracking, emergency SOS with live location sharing, and health risk scoring with insurance-ready report generation.',
    techBadges: ['React.js', 'Node.js', 'MongoDB', 'Python', 'PyTorch', 'TensorFlow', 'BioBERT', 'Cloudinary'],
    techIcons: ['FaReact', 'FaNodeJs', 'SiMongodb', 'FaPython', 'SiPytorch', 'SiTensorflow', 'FaDatabase', 'SiCloudinary'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#6c63ff',
  },
  {
    id: 'video-hosting-api',
    name: 'Backend API for Video Hosting Platform',
    category: 'Backend · API',
    teaser: 'A scalable RESTful backend for a video hosting platform with JWT auth, file uploads, and cloud storage.',
    description: 'A production-grade RESTful API built with Node.js and Express.js for a scalable video hosting platform. Implements secure authentication using JWT, manages user sessions, optimizes database interactions using MongoDB and Mongoose schemas, handles file uploads with Multer, and integrates Cloudinary for cloud-based media storage.',
    techBadges: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Cloudinary'],
    techIcons: ['FaNodeJs', 'SiExpress', 'SiMongodb', 'SiJsonwebtokens', 'FaDatabase', 'SiCloudinary'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#00d4ff',
  },
  {
    id: 'pashumitra',
    name: 'PashuMitra',
    category: 'Full Stack · AI · Hackathon',
    teaser: 'A biosecurity platform built for Smart India Hackathon with multilingual AI translation and dynamic questionnaires.',
    description: 'PashuMitra is a full-stack biosecurity platform developed for Smart India Hackathon (PS-25006). The MERN stack application features a dynamic questionnaire system and integrates a Python-based IndicTrans2 model for real-time, multilingual translation — enabling accessibility across Indian regional languages.',
    techBadges: ['React', 'Node.js', 'MongoDB', 'Python', 'IndicTrans2'],
    techIcons: ['FaReact', 'FaNodeJs', 'SiMongodb', 'FaPython', 'FaDatabase'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#ff6b6b',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
