import type {Metadata, Viewport} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { portfolioData } from '@/data/portfolio-data';

const APP_NAME = "Ugochukwu | Web Developer Portfolio";
const APP_DESCRIPTION = "I'm Ugochukwu, a passionate Web Developer in Nigeria skilled in React, Node.js, and modern frontend development. Explore my portfolio and projects.";
const APP_URL = "https://ugoyoungking.github.io/portfolio";
const AUTHOR = "Ugochukwu Jonathan";
const OG_IMAGE = "https://image2url.com/images/1760142087082-0d9360e4-2d41-4459-a0a1-135afa56a7f7.jpg";

export const metadata: Metadata = {
  title: 'Ugochukwu | Web Developer in Nigeria | React & Node.js Portfolio',
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  authors: [{ name: AUTHOR, url: APP_URL }],
  keywords: ["Ugochukwu", "Web Developer in Nigeria", "React Developer", "Node.js Developer", "Frontend Developer", "Portfolio Website", "Hire Web Developer"],
  robots: "index, follow, imageindex",
  alternates: {
    canonical: APP_URL,
    types: {
      "application/ld+json": "https://ugoyoungking.github.io/portfolio/knowledge.json"
    }
  },
  openGraph: {
    type: "website",
    url: APP_URL,
    title: APP_NAME,
    description: "Explore my portfolio showcasing web development projects, skills, and creative work in React and Node.js.",
    images: [{
      url: OG_IMAGE,
      alt: "Ugochukwu Portfolio Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: "Discover projects and achievements of Ugochukwu – a passionate web developer and designer.",
    images: [OG_IMAGE],
  },
  other: {
    "msvalidate.01": "63A610B3C9552E33F88103CB9AD8CF70",
    "google-site-verification": "0I6OH2UNnqoYZYszvni6Dn5tVKPfNW0LFWmIcdex29Q"
  }
};

export const viewport: Viewport = {
  themeColor: '#3F51B5',
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ugochukwu Jonathan",
  "alternateName": "Ugoyoungking",
  "image": "https://commons.wikimedia.org/wiki/File:Ugochukwu_Jonathan_(Ugoyoungking).jpg",
  "jobTitle": "Web Developer and Graphic Designer",
  "description": "Ugochukwu Jonathan, also known as Ugoyoungking, is a passionate web developer and graphic designer from Nigeria who builds interactive, modern, and responsive web experiences.",
  "url": "https://ugoyoungking.github.io/portfolio/",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q136481438",
    "https://github.com/Ugoyoungking",
    "https://linkedin.com/in/ugochukwu-jonathan067",
    "https://commons.wikimedia.org/wiki/File:Ugochukwu_Jonathan_(Ugoyoungking).jpg"
  ],
  "knowsAbout": ["Web Development", "Graphic Design", "React", "Node.js", "Frontend", "Backend"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rivers State",
    "addressCountry": "Nigeria"
  }
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${APP_URL}#person`,
      "name": "Ugochukwu Jonathan",
      "givenName": "Ugochukwu",
      "familyName": "Jonathan",
      "url": APP_URL,
      "image": [
        "https://image2url.com/images/1760142087082-0d9360e4-2d41-4459-a0a1-135afa56a7f7.jpg",
        "https://image2url.com/images/1760142182639-b40b4fc9-d225-4f1d-be1a-fa3533bd7616.jpg",
        "https://image2url.com/images/1760142223992-f74d68cc-7fdc-417d-8df7-732eb49cc8a2.jpg",
        "https://image2url.com/images/1760142261420-af7d0397-6b65-4c2b-b873-ed74cbecf265.jpg"
      ],
      "jobTitle": "Web Developer & Graphic Designer",
      "description": "Passionate and God-fearing Web Developer & Graphic Designer skilled in HTML, CSS, JavaScript, React, and Node.js. Dedicated to building modern, user-friendly digital experiences.",
      "knowsAbout": [
        "Web Development",
        "Frontend Design",
        "React",
        "Node.js",
        "UI/UX",
        "Graphic Design"
      ],
      "sameAs": portfolioData.socials.map(s => s.url),
      "worksFor": {
        "@type": "Organization",
        "name": "Ugochukwu Dev"
      },
      "mainEntityOfPage": APP_URL
    },
    {
      "@type": "Organization",
      "@id": `${APP_URL}#organization`,
      "name": "Ugochukwu Dev",
      "url": APP_URL,
      "logo": {
        "@type": "ImageObject",
        "url": "https://image2url.com/images/1760142261420-af7d0397-6b65-4c2b-b873-ed74cbecf265.jpg"
      },
      "sameAs": [
        "https://github.com/Ugoyoungking",
        "https://linkedin.com/in/ugochukwu-jonathan067"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${APP_URL}#website`,
      "name": "Ugochukwu Portfolio",
      "url": APP_URL,
      "publisher": {
        "@id": `${APP_URL}#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://www.google.com/search?q={search_term_string}+site:${APP_URL.replace('https://', '')}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": `${APP_URL}#profile`,
      "name": "Ugochukwu Jonathan - Official Web Developer Portfolio",
      "url": APP_URL,
      "about": {
        "@id": `${APP_URL}#person`
      },
      "publisher": {
        "@id": `${APP_URL}#organization`
      },
      "mainEntity": {
        "@id": `${APP_URL}#person`
      },
      "datePublished": "2025-10-11",
      "dateModified": "2025-10-11"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://image2url.com/images/1760142261420-af7d0397-6b65-4c2b-b873-ed74cbecf265.jpg" type="image/png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
