export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  status: "Concept / In development" | "Project details pending";
  featured: boolean;
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    title: "Recall AI",
    slug: "recall-ai",
    category: "AI Product Concept",
    description: "An intelligent task, study, and project-management concept focused on helping people complete meaningful work.",
    problem: "Important work can be lost in overloaded task lists, repetitive reminders, and competing priorities.",
    features: ["Behavior-aware recommendations", "Adaptive reminders", "Next Best Action scoring"],
    technologies: ["AI Product Design", "Recommendation Systems", "Full-Stack Architecture"],
    status: "Concept / In development",
    featured: true,
    caseStudy: true,
  },
  {
    title: "AI Road Accident Detection",
    slug: "accident-detection",
    category: "Computer Vision System",
    description: "An AI-assisted emergency-response system concept for detecting potential road accidents from CCTV and video streams.",
    problem: "Manual monitoring can delay the recognition and routing of potential road incidents.",
    features: ["Video-stream monitoring", "Vehicle/person detection", "Incident workflow concept"],
    technologies: ["Computer Vision", "OpenCV", "YOLO", "Deep Learning"],
    status: "Concept / In development",
    featured: true,
    caseStudy: true,
  },
  {
    title: "Localink",
    slug: "localink",
    category: "Web Application",
    description: "PROJECT_DESCRIPTION_HERE",
    problem: "PROJECT_PROBLEM_HERE",
    features: ["FEATURE_ONE_HERE", "FEATURE_TWO_HERE"],
    technologies: ["TECHNOLOGIES_HERE"],
    status: "Project details pending",
    featured: false,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Developer Website",
    description: "A professional portfolio foundation built to clearly present AI/ML and full-stack development work.",
    problem: "A focused online presence is needed to show technical work and enable project inquiries.",
    features: ["Centralized content", "Responsive design", "Dark and light themes"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Concept / In development",
    featured: false,
  },
];
