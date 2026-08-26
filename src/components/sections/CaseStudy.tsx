import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCaseStudy } from "@/data/caseStudies";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function CaseStudy({ project }: { project: Project }) {
  const caseStudy = getCaseStudy(project.slug);
  if (!caseStudy) return null;

  return (
    <main className="case-study">
      <div className="page-shell">
        <Link className="back-link" href="/projects"><ArrowLeftIcon aria-hidden="true" />Back to projects</Link>
        <header className="case-hero">
          <p className="section-eyebrow">{project.category} / Case study</p><h1>{project.title}</h1><p>{caseStudy.overview}</p>
          <div className="tag-list">{project.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}</div>
        </header>
        <div className="case-status">{caseStudy.statusNote}</div>
        <section className="case-intro"><div><p className="section-eyebrow">The problem</p><h2>{project.problem}</h2></div><div><p className="section-eyebrow">Product direction</p><p>{caseStudy.solution}</p></div></section>
        <section className="case-section"><p className="section-eyebrow">Architecture</p><h2>A system designed in clear layers.</h2><div className="architecture-grid">{caseStudy.architecture.map((block, index) => <article key={block.title}><span>0{index + 1}</span><h3>{block.title}</h3><p>{block.description}</p></article>)}</div></section>
        <section className="case-section case-two-col"><div><p className="section-eyebrow">Development approach</p><h2>Building with feedback and practical constraints.</h2><ol>{caseStudy.approach.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div><div><p className="section-eyebrow">Challenges to solve</p><h2>Questions worth testing carefully.</h2><ul>{caseStudy.challenges.map((item) => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}</ul></div></section>
        <section className="case-section future-section"><p className="section-eyebrow">Future improvements</p><h2>Where the work can go next.</h2><div>{caseStudy.future.map((item) => <span key={item}>{item}<ArrowRightIcon aria-hidden="true" /></span>)}</div></section>
      </div>
    </main>
  );
}
