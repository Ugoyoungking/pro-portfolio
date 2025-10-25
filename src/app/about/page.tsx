import React from "react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Ugochukwu Jonathan (Ugoyoungking)</title>
        <meta
          name="description"
          content="Learn more about Ugochukwu Jonathan (Ugoyoungking), a web developer and graphic designer skilled in Next.js, Firebase, and modern UI/UX design."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Ugochukwu Jonathan",
              "url": "https://pro-portfolio-ten.vercel.app/about",
              "mainEntity": {
                "@type": "Person",
                "name": "Ugochukwu Jonathan",
                "alternateName": "Ugoyoungking",
                "image":
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg/336px-Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg?20251023225125",
                "description":
                  "Web Developer and Graphic Designer from Nigeria, creating responsive, aesthetic, and accessible digital experiences using Next.js, Tailwind CSS, and Firebase.",
                "jobTitle": "Web Developer & Graphic Designer",
                "knowsAbout": [
                  "Next.js",
                  "Firebase",
                  "React",
                  "Tailwind CSS",
                  "UI/UX Design",
                  "Graphic Design",
                  "Frontend Development"
                ],
                "url": "https://pro-portfolio-ten.vercel.app/",
                "sameAs": [
                  "https://ugoyoungking.github.io/portfolio/",
                  "https://www.linkedin.com/in/ugochukwu-jonathan067",
                  "https://www.truelancer.com/freelancer/tlusera2eae11",
                  "https://x.com/ugoyoungking",
                  "https://www.wikidata.org/wiki/Q136481438"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "business",
                  "url": "https://api.whatsapp.com/send/?phone=2349127714886"
                }
              }
            })
          }}
        />
      </Head>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-blue-600">Ugochukwu Jonathan</span>
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          I’m <strong>Ugochukwu Jonathan</strong>, also known online as{" "}
          <strong>Ugoyoungking</strong> — a web developer and graphic designer
          passionate about creating functional and elegant digital experiences.
          I specialize in building modern, responsive, and fast applications
          using <strong>Next.js</strong>, <strong>React</strong>,{" "}
          <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Career Background</h2>
        <p className="text-lg leading-relaxed mb-6">
          My journey began in 2022, fueled by curiosity for how design and
          technology blend to create impact. Since then, I’ve worked on personal
          projects, freelance contracts, and community-driven platforms, growing
          into a full-stack creative developer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Core Skills</h2>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>Frontend: Next.js, React, Tailwind CSS</li>
          <li>Backend: Firebase, Node.js</li>
          <li>Design: Figma, Photoshop, Illustrator</li>
          <li>Version Control: Git & GitHub</li>
          <li>Deployment: Vercel, Surge, Netlify</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Connect With Me</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <a
              href="https://www.linkedin.com/in/ugochukwu-jonathan067"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ugoyoungking"
              className="text-blue-600 hover:underline"
            >
              X (Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://ugoyoungking.github.io/portfolio/"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=2349127714886"
              className="text-blue-600 hover:underline"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

