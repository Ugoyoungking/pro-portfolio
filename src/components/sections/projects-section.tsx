import { portfolioData } from '@/data/portfolio-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="container">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Here are some of the projects I'm proud of.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                    <Image 
                        src={project.image.url} 
                        alt={project.image.description} 
                        fill
                        className="object-cover"
                        data-ai-hint={project.image.hint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-3 text-base">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                {project.repoUrl && (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.repoUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
