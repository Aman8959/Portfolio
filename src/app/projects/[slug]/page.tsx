import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug && entry.caseStudy);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
