import type { PortfolioData } from '@/lib/types';
import { Github, Linkedin, Twitter, Code, Database, Server, Cloud, Palette, Bot, TestTube2, Briefcase } from 'lucide-react';

const placeholderImages = {
  project1: {
    id: "project-1",
    description: "Abstract geometric shapes",
    url: "https://picsum.photos/seed/proj1/800/600",
    hint: "abstract geometric"
  },
  project2: {
    id: "project-2",
    description: "Modern architecture building",
    url: "https://picsum.photos/seed/proj2/600/800",
    hint: "modern architecture"
  },
  project3: {
    id: "project-3",
    description: "A developer coding on a laptop",
    url: "https://picsum.photos/seed/proj3/800/800",
    hint: "developer coding"
  },
  project4: {
    id: "project-4",
    description: "A close-up of a circuit board",
    url: "https://picsum.photos/seed/proj4/600/400",
    hint: "circuit board"
  }
};

export const portfolioData: PortfolioData = {
  name: 'Ugo Young',
  headline: 'Full-Stack Developer & Creative Technologist',
  about: `I'm a passionate full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a background in both design and engineering, I bridge the gap between creative vision and technical execution. I'm always eager to learn new technologies and take on challenging projects.`,
  contactEmail: 'ugoyoungking@example.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/ugoyoungking', icon: Github },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Twitter', url: '#', icon: Twitter },
  ],
  skills: [
    { name: 'React / Next.js', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Databases', icon: Database },
    { name: 'Cloud & DevOps', icon: Cloud },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'AI Integration', icon: Bot },
    { name: 'Testing', icon: TestTube2 },
    { name: 'Agile Methodologies', icon: Briefcase },
  ],
  projects: [
    {
      title: 'Project Alpha',
      description: 'A comprehensive web platform for data visualization and analytics, built with Next.js and D3.js. Features real-time updates and a highly interactive user interface.',
      image: placeholderImages.project1,
      tags: ['Next.js', 'TypeScript', 'D3.js', 'Real-time'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'E-commerce Storefront',
      description: 'A modern, responsive e-commerce site with a custom backend. Implemented features like product search, filtering, and a secure checkout process with Stripe integration.',
      image: placeholderImages.project2,
      tags: ['React', 'Node.js', 'Express', 'Stripe API'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Portfolio Pro',
      description: 'This very portfolio website. A showcase of my skills, built with Next.js App Router, Tailwind CSS, and featuring a GenAI-powered portfolio review tool.',
      image: placeholderImages.project3,
      tags: ['Next.js', 'Tailwind CSS', 'GenAI', 'Server Actions'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application that helps teams organize, track, and manage their work. Drag-and-drop interface for easy task handling.',
      image: placeholderImages.project4,
      tags: ['Vue.js', 'Firebase', 'Team Collaboration'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ],
};
