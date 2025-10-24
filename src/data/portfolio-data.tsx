import type { PortfolioData } from '@/lib/types';
import { Github, Linkedin, Facebook, LucideIcon } from 'lucide-react';
import { Code, Server, Palette } from 'lucide-react';

const placeholderImages = {
  project1: {
    id: "project-1",
    description: "Personal Portfolio Website",
    url: "https://picsum.photos/seed/portfolioweb/800/600",
    hint: "portfolio website"
  },
  project2: {
    id: "project-2",
    description: "Task Manager Application",
    url: "https://picsum.photos/seed/taskmanager/600/800",
    hint: "task manager"
  },
  project3: {
    id: "project-3",
    description: "E-Commerce Storefront",
    url: "https://picsum.photos/seed/ecommstore/800/800",
    hint: "ecommerce store"
  },
};

const TruelancerIcon: LucideIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.9 19.3c-2.1-1.4-3.5-3.8-3.5-6.5C9.4 8 12.3 4 16.5 4v1.5c-3.3 0-6 3-6 7.8 0 2.2 1.1 4.2 2.8 5.6Z"/><path d="m15.3 14.1 3.5 2.1c.7.4 1.2 1.2 1.2 2.1 0 1.5-1.2 2.8-2.8 2.8-1.5 0-2.8-1.2-2.8-2.8 0-.8.4-1.6.9-2.1Z"/></svg>
);

const WhatsappIcon: LucideIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);


export const portfolioData: PortfolioData = {
  name: 'Ugochukwu Jonathan',
  headline: 'Web Developer & Graphic Designer',
  about: `I’m Ugochukwu, a passionate and God-fearing Web Developer and Graphic Designer dedicated to crafting modern, responsive, and user-focused digital experiences. My journey began with HTML and CSS, and over time, I’ve mastered technologies like JavaScript, React, and Node.js. I take pride in transforming creative ideas into functional, visually appealing, and high-performing websites that don’t just look great — they make an impact. Every project I build reflects my commitment to excellence, creativity, and faith-driven purpose.`,
  contactEmail: 'ugochukwujonathan067@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Ugoyoungking', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ugochukwu-jonathan067', icon: Linkedin },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1BCG5qD7mM/?mibextid=wwXIfr', icon: Facebook },
    { name: 'Truelancer', url: 'https://www.truelancer.com/freelancer/tlusera2eae11', icon: TruelancerIcon },
    { name: 'WhatsApp', url: 'https://wa.me/2349127714886', icon: WhatsappIcon },
  ],
  skills: [
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: Palette },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Git & GitHub', icon: Github },
  ],
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with HTML, CSS, and JavaScript.',
      image: placeholderImages.project1,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ugoyoungking.github.io/portfolio/',
      repoUrl: '#',
    },
    {
      title: 'Task Manager App',
      description: 'A full-stack task management app built with React & Node.js.',
      image: placeholderImages.project2,
      tags: ['React', 'Node.js', 'Full-stack'],
      liveUrl: 'https://ugoyoungking.github.io/portfolio/',
      repoUrl: '#',
    },
    {
      title: 'E-Commerce Store',
      description: 'An online shop with product listings and cart functionality.',
      image: placeholderImages.project3,
      tags: ['E-commerce', 'React', 'Node.js'],
      liveUrl: 'https://ugoyoungking.github.io/portfolio/',
      repoUrl: '#',
    },
  ],
};
