import React from "react";

export const metadata = {
  title: "About Ugochukwu Jonathan | Ugoyoungking",
  description:
    "Learn about Ugochukwu Jonathan (Ugoyoungking) — a web developer and graphic designer specializing in modern, responsive, and AI-integrated web experiences using Next.js and Firebase.",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ugochukwu Jonathan",
            "alternateName": "Ugoyoungking",
            "url": "https://pro-portfolio-ten.vercel.app/",
            "image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg/336px-Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg?20251023225125",
            "jobTitle": "Web Developer & Graphic Designer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Ugoyoungking Studio",
            },
            "description":
              "Ugochukwu Jonathan (Ugoyoungking) is a Nigerian web developer and graphic designer focused on building interactive, responsive, and intelligent web experiences using Next.js, Firebase, and modern UI tools. He blends creativity with technical precision to craft impactful digital products.",
            "knowsAbout": [
              "Web Development",
              "Graphic Design",
              "Frontend Engineering",
              "UI/UX Design",
              "Next.js",
              "Firebase",
              "Tailwind CSS",
              "React",
              "SEO Optimization",
              "AI-assisted design",
            ],
            "sameAs": [
              "https://ugoyoungking.github.io/portfolio/",
              "https://www.linkedin.com/in/ugochukwu-jonathan067",
              "https://www.truelancer.com/freelancer/tlusera2eae11",
              "https://x.com/ugoyoungking",
              "https://api.whatsapp.com/send/?phone=2349127714886",
              "https://www.wikidata.org/wiki/Q136481438"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "business",
              "url": "https://api.whatsapp.com/send/?phone=2349127714886"
            },
          }),
        }}
      />

      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-blue-600">Ugochukwu Jonathan</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I'm a passionate <strong>web developer and graphic designer</strong>{" "}
          from Nigeria, known online as <strong>Ugoyoungking</strong>. My work
          focuses on crafting clean, responsive, and high-performance websites
          using <strong>Next.js, Firebase, and Tailwind CSS</strong>. I enjoy
          merging design and technology to deliver beautiful digital experiences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Next.js & React Development</li>
          <li>UI/UX & Graphic Design</li>
          <li>Firebase Backend Integration</li>
          <li>SEO and Web Performance Optimization</li>
          <li>AI Tools Integration for Smart Websites</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Connect with Me</h2>
        <ul className="text-blue-600">
          <li>
            <a href="https://www.linkedin.com/in/ugochukwu-jonathan067" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/ugoyoungking" target="_blank">
              X (Twitter)
            </a>
          </li>
          <li>
            <a href="https://ugoyoungking.github.io/portfolio/" target="_blank">
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://www.truelancer.com/freelancer/tlusera2eae11" target="_blank">
              Truelancer
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=2349127714886" target="_blank">
              WhatsApp
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
