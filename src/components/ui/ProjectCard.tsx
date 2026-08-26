import { ArrowUpRightIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className={`project-card ${priority ? "project-card-priority" : ""}`}>
      {project.image ? <Image className="project-image" src={project.image} alt={`${project.title} preview`} width={800} height={450} /> : null}
      <div className="project-card-top">
        <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
        <span className="project-icon"><CodeBracketSquareIcon aria-hidden="true" /></span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-problem"><span>PROBLEM</span><p>{project.problem}</p></div>
      <ul className="feature-list">
        {project.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <div className="project-bottom">
        <div className="tag-list">{project.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}</div>
        <div className="project-links">
          {project.githubUrl ? <a className="github-link" aria-label={`View ${project.title} on GitHub`} href={project.githubUrl} target="_blank" rel="noreferrer"><CodeBracketSquareIcon aria-hidden="true" /><span>GitHub</span></a> : null}
          {project.liveDemoUrl ? <a aria-label={`View ${project.title} live demo`} href={project.liveDemoUrl} target="_blank" rel="noreferrer"><ArrowUpRightIcon aria-hidden="true" /></a> : null}
          {project.caseStudy ? <Link aria-label={`Explore ${project.title} case study`} className="case-study-link" href={`/projects/${project.slug}`}>Case study <ArrowUpRightIcon aria-hidden="true" /></Link> : null}
        </div>
      </div>
      <span className="project-status">{project.date ? `${project.date} / ` : ""}{project.status}</span>
      {project.metrics?.length ? <div className="project-metrics">{project.metrics.map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}</div> : null}
    </article>
  );
}
