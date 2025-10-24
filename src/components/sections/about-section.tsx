import { portfolioData } from '@/data/portfolio-data.tsx';

export function AboutSection() {
  return (
    <section id="about" className="container">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          About Me
        </h2>
        <p className="mt-6 text-center text-lg text-muted-foreground">
          {portfolioData.about}
        </p>
      </div>
    </section>
  );
}
