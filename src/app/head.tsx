export default function Head() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ugochukwu Jonathan",
    "alternateName": "Ugoyoungking",
    "url": "https://pro-portfolio-ten.vercel.app/",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg/336px-Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg?20251023225125",
    "jobTitle": "Web Developer & Graphic Designer",
    "description": "Web developer and graphic designer from Nigeria, building responsive and modern web experiences using Next.js and Firebase.",
    "sameAs": [
      "https://ugoyoungking.github.io/portfolio/",
      "https://www.linkedin.com/in/ugochukwu-jonathan067",
      "https://www.truelancer.com/freelancer/tlusera2eae11",
      "https://x.com/ugoyoungking",
      "https://api.whatsapp.com/send/?phone=2349127714886&text&type=phone_number&app_absent=0",
      "https://www.wikidata.org/wiki/Q136481438"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "business",
      "url": "https://api.whatsapp.com/send/?phone=2349127714886"
    }
  };

  return (
    <>
      <title>Ugochukwu Jonathan (Ugoyoungking) | Web Developer & Designer</title>
      <meta
        name="description"
        content="Official portfolio of Ugochukwu Jonathan (Ugoyoungking) — a web developer and graphic designer from Nigeria specializing in modern, responsive, and creative web experiences."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pro-portfolio-ten.vercel.app/" />
      <meta property="og:title" content="Ugochukwu Jonathan (Ugoyoungking)" />
      <meta
        property="og:description"
        content="Web Developer & Graphic Designer creating modern and responsive web experiences using Next.js and Firebase."
      />
      <meta
        property="og:image"
        content="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg/336px-Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg?20251023225125"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ugoyoungking" />
      <meta name="twitter:title" content="Ugochukwu Jonathan (Ugoyoungking)" />
      <meta
        name="twitter:description"
        content="Web Developer & Graphic Designer | Building responsive, creative, and modern websites."
      />
      <meta
        name="twitter:image"
        content="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg/336px-Ugochukwu_Jonathan_%28Ugoyoungking%29.jpg?20251023225125"
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
