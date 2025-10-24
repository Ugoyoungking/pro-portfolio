import { portfolioData } from '@/data/portfolio-data.tsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="container py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {portfolioData.name}
        </h1>
        <p className="mt-6 text-lg font-medium text-muted-foreground md:text-xl">
          {portfolioData.headline}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
