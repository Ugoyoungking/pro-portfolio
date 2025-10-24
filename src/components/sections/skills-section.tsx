import { portfolioData } from '@/data/portfolio-data.tsx';
import { Card } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <section id="skills" className="container">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl">
          My Skills
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {portfolioData.skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <skill.icon className="h-10 w-10 text-primary mb-4" />
              <p className="font-semibold text-sm md:text-base">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
