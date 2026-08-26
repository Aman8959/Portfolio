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
        <section className="case-intro"><div><p className="section-eyebrow">The problem</p><h2>{caseStudy.problem || project.problem}</h2></div><div><p className="section-eyebrow">Approach / Solution</p><p>{caseStudy.approach}</p></div></section>
        <section className="case-section"><p className="section-eyebrow">Key features</p><h2>What the project brings together.</h2><div className="architecture-grid">{caseStudy.keyFeatures.map((feature, index) => <article key={feature}><span>0{index + 1}</span><p>{feature}</p></article>)}</div></section>
        <section className="case-section case-two-col"><div><p className="section-eyebrow">Tech stack</p><h2>Tools selected for the work.</h2><ul>{(caseStudy.techStack.length ? caseStudy.techStack : project.technologies).map((item) => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}</ul></div><div><p className="section-eyebrow">Challenges & solutions</p><h2>Constraints that shaped the build.</h2><ul>{caseStudy.challengesSolutions.map((item) => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}</ul></div></section>
        <section className="case-section future-section"><p className="section-eyebrow">Results & learnings</p><h2>What the work made clearer.</h2><div>{caseStudy.resultsLearnings.map((item) => <span key={item}>{item}<ArrowRightIcon aria-hidden="true" /></span>)}</div></section>
      </div>
    </main>
  );
}
