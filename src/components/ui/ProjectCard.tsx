import { ArrowUpRightIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className={`project-card ${priority ? "project-card-priority" : ""}`}>
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
        {project.caseStudy ? <Link aria-label={`Explore ${project.title} case study`} className="case-study-link" href={`/projects/${project.slug}`}>Case study <ArrowUpRightIcon aria-hidden="true" /></Link> : null}
      </div>
      <span className="project-status">{project.status}</span>
    </article>
  );
}
