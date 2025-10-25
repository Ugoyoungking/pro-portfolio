export default function Head() {
  return (
    <>
      <title>Ugochukwu Jonathan | Ugoyoungking</title>
      <meta
        name="description"
        content="Web developer and graphic designer from Nigeria, building responsive and modern web experiences using Next.js and Firebase."
      />
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
            "description":
              "Web developer and graphic designer from Nigeria, building responsive and modern web experiences using Next.js and Firebase.",
            "sameAs": [
              "https://ugoyoungking.github.io/portfolio/",
              "https://www.linkedin.com/in/ugochukwu-jonathan067",
              "https://www.truelancer.com/freelancer/tlusera2eae11",
              "https://x.com/ugoyoungking",
              "https://www.wikidata.org/wiki/Q136481438",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "business",
              "url": "https://api.whatsapp.com/send/?phone=2349127714886",
            },
          }),
        }}
      />
    </>
  );
}
