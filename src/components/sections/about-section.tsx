import { portfolioData } from '@/data/portfolio-data.tsx';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="container">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="relative h-64 w-64 flex-shrink-0 md:h-80 md:w-80">
          <Image
            src="https://image2url.com/images/1759256290632-55f4e88b-aa2c-4f91-afd4-29f8303e12a0.jpg"
            alt="Ugochukwu Jonathan"
            className="rounded-full border-4 border-primary/20 object-cover shadow-lg"
            fill
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {portfolioData.about}
          </p>
        </div>
      </div>
    </section>
  );
}
