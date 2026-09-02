import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCaseStudy } from "@/data/caseStudies";
import { Project, getRelatedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function CaseStudy({ project }: { project: Project }) {
  const caseStudy = getCaseStudy(project.slug);
  if (!caseStudy) return null;

  const relatedProjects = getRelatedProjects(project, 2);

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
        {caseStudy.journeyPhases.length > 0 && (
          <section className="case-section journey-section">
            <p className="section-eyebrow">Project journey</p>
            <h2>Phases that defined development.</h2>
            <div className="journey-timeline">
              {caseStudy.journeyPhases.map((phase, idx) => {
                const isLast = idx === caseStudy.journeyPhases.length - 1;
                return (
                  <div key={phase.step} className={`journey-item ${isLast ? "journey-item-last" : ""}`}>
                    <div className="journey-rail">
                      <div className="journey-node">
                        <span>{phase.step}</span>
                      </div>
                      {!isLast && <div className="journey-spine" />}
                    </div>
                    <div className="journey-card">
                      <div className="journey-card-header">
                        <span className="journey-phase-tag">{phase.phase}</span>
                        {phase.status && (
                          <span className={`journey-status-pill journey-status-${phase.status.toLowerCase().replace(/\s+/g, "-")}`}>
                            {phase.status}
                          </span>
                        )}
                      </div>
                      <h3 className="journey-title">{phase.title}</h3>
                      <p className="journey-desc">{phase.description}</p>
                      {phase.deliverables && phase.deliverables.length > 0 && (
                        <div className="journey-deliverables">
                          <span className="journey-deliverables-title">Key Highlights:</span>
                          <div className="tag-list">
                            {phase.deliverables.map((item) => (
                              <Badge key={item}>{item}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        <section className="case-section future-section"><p className="section-eyebrow">Results & learnings</p><h2>What the work made clearer.</h2><div>{caseStudy.resultsLearnings.map((item) => <span key={item}>{item}<ArrowRightIcon aria-hidden="true" /></span>)}</div></section>
        {relatedProjects.length > 0 && (
          <section className="case-section related-projects-section">
            <p className="section-eyebrow">Related projects</p>
            <h2>More work with shared technologies.</h2>
            <div className="projects-page-grid" style={{ marginTop: "32px" }}>
              {relatedProjects.map((related) => (
                <ProjectCard key={related.slug} project={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
