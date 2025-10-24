import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  image: {
    id: string;
    description: string;
    url: string;
    hint: string;
  };
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon | ((props: React.ComponentProps<'svg'>) => JSX.Element);
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type PortfolioData = {
  name: string;
  headline: string;
  about: string;
  contactEmail: string;
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
};
