"use client";

import { Bars4Icon, CodeBracketSquareIcon, SparklesIcon, CubeIcon, GlobeAltIcon, ChartBarIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projectFilters = [
  { id: "all", label: "All Projects", icon: Bars4Icon },
  { id: "aiml", label: "AI/ML & Data Science", icon: SparklesIcon },
  { id: "fullstack", label: "Full-Stack Development", icon: CubeIcon },
  { id: "web", label: "Web Development", icon: GlobeAltIcon },
  { id: "analytics", label: "Data Analytics", icon: ChartBarIcon },
  { id: "client", label: "Client Projects", icon: BriefcaseIcon },
];

type FilterId = "all" | "aiml" | "fullstack" | "web" | "analytics" | "client";

function getFilteredProjects(filterId: FilterId) {
  const filterMap: Record<FilterId, (p: typeof projects[0]) => boolean> = {
    all: () => true,
    aiml: (p) => {
      // Show in AI/ML filter only if primary category matches
      const isAIML = p.category === "AI/ML & Data Science" || p.category === "Computer Vision System" || p.category === "AI Product Concept";
      // Don't show client projects here - they'll be in their own category
      return isAIML && !p.isClientProject;
    },
    fullstack: (p) => {
      // Show in Full-Stack filter only if primary category matches
      const isFullStack = p.category === "Full-Stack Development";
      // Don't show client projects here - they'll be in their own category
      return isFullStack && !p.isClientProject;
    },
    web: (p) => {
      // Show in Web filter only if primary category matches
      const isWeb = p.category === "Web Development" || p.category === "Web Application" || p.category === "Developer Website";
      // Don't show client projects here - they'll be in their own category
      return isWeb && !p.isClientProject;
    },
    analytics: (p) => p.category === "Data Analytics",
    client: (p) => p.isClientProject === true,
  };

  return projects.filter(filterMap[filterId]);
}

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const filteredProjects = getFilteredProjects(activeFilter);

  return (
    <div className="page-shell">
      <header className="page-intro">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Systems for<br /><em>useful outcomes.</em></>}
          description="Projects, concepts, and engineering explorations."
        />
      </header>

      <div className="projects-filters" role="tablist" aria-label="Project categories">
        {projectFilters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id as FilterId)}
              role="tab"
              aria-selected={activeFilter === filter.id}
              aria-label={`Filter by ${filter.label}`}
            >
              <Icon aria-hidden="true" />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-filter-info">
        <p>{getFilterDescription(activeFilter)}</p>
        <span className="project-count">{filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="projects-page-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <div className="empty-state" style={{ gridColumn: "1 / -1" }}>
            <span>
              <CodeBracketSquareIcon aria-hidden="true" />
            </span>
            <div>
              <p>No projects</p>
              <h3>No projects in this category yet.</h3>
              <span>Check back soon for more projects in this area.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getFilterDescription(filterId: FilterId): string {
  const descriptions: Record<FilterId, string> = {
    all: "View all projects, concepts, and explorations.",
    aiml: "AI, machine learning, data science, prediction, recommendation, and computer vision projects.",
    fullstack: "Complete applications with backend and frontend systems, APIs, databases, and SaaS-style platforms.",
    web: "Websites, frontend projects, responsive web applications, and general web development work.",
    analytics: "Data analysis, exploratory data analysis, dashboards, reporting, and business insights projects.",
    client: "Real-world freelance and client projects.",
  };
  return descriptions[filterId];
}
