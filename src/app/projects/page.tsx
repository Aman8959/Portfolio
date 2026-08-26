import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Aman Kumar Yadav" };

export default function ProjectsPage() {
  return <main className="projects-page"><div className="page-shell"><header className="page-intro"><p className="section-eyebrow">Selected work</p><h1>Systems for useful outcomes.</h1><p>Projects, concepts, and engineering explorations.</p></header><div className="projects-page-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></main>;
}
