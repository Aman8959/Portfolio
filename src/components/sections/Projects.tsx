import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section className="section projects-section" id="projects">
      <div className="page-shell">
        <div className="section-row"><SectionHeading eyebrow="03 / Selected work" title={<>Systems designed for<br /><em>useful outcomes.</em></>} description="Projects, concepts, and technical explorations focused on real-world challenges." /><Button href="/contact" variant="text">Start a project <ArrowRightIcon aria-hidden="true" /></Button></div>
        <div className="featured-projects">{featured.map((project) => <ProjectCard key={project.slug} priority project={project} />)}</div>
        <div className="more-projects">{moreProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </div>
    </section>
  );
}

export function ProjectTeaser() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section projects-section home-projects" id="selected-work">
      <div className="page-shell">
        <div className="section-row"><SectionHeading eyebrow="Selected work" title={<>A few systems worth<br /><em>exploring further.</em></>} description="A focused preview of current AI and full-stack work." /><Button href="/projects" variant="text">All projects <ArrowRightIcon aria-hidden="true" /></Button></div>
        <div className="featured-projects">{featured.map((project) => <ProjectCard key={project.slug} priority project={project} />)}</div>
      </div>
    </section>
  );
}
