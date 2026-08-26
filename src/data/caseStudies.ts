export type ArchitectureBlock = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  overview: string;
  solution: string;
  architecture: ArchitectureBlock[];
  approach: string[];
  challenges: string[];
  future: string[];
  statusNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "recall-ai",
    overview: "Recall AI is an intelligent task, study, and project-management concept designed to help users complete important work—not simply spend more time in an app.",
    solution: "The product direction combines behavior-aware recommendations with adaptive reminders. A potential Next Best Action score could weigh urgency, learning importance, forgetting risk, progress, completion probability, preferences, and notification fatigue.",
    architecture: [
      { title: "Behavior Engine", description: "Interprets work patterns and relevant signals." },
      { title: "Memory Engine", description: "Models when important material or tasks may need reinforcement." },
      { title: "Recommendation Engine", description: "Ranks a useful next action from available context." },
      { title: "Notification Engine", description: "Delivers reminders while accounting for interruption and fatigue." },
    ],
    approach: ["Define outcome-focused task signals", "Design adaptive scoring rules", "Validate recommendations through user feedback", "Iterate toward a practical product workflow"],
    challenges: ["Avoiding notification fatigue", "Explaining recommendations clearly", "Balancing user control with automation", "Evaluating whether suggestions improve completion"],
    future: ["User-configurable recommendation controls", "Learning and study planning workflows", "Progress and completion insights", "Carefully tested reminder personalization"],
    statusNote: "Concept / in development. The architecture and features on this page describe the intended product direction, not a claim of deployed functionality.",
  },
  {
    slug: "accident-detection",
    overview: "An AI-assisted road accident detection and emergency-response system concept for identifying potential incidents in CCTV or video streams and routing them into an incident workflow.",
    solution: "The proposed design brings together computer-vision detection, temporal analysis, evidence capture, and a human-reviewable incident workflow. It should be evaluated carefully in realistic conditions; no accuracy or automated emergency-response claim is made here.",
    architecture: [
      { title: "Video Monitoring", description: "Receives CCTV or recorded video streams for analysis." },
      { title: "Vision Pipeline", description: "Explores vehicle/person detection and accident or collision signals." },
      { title: "Incident Workflow", description: "Records timestamps, evidence, and reviewable incident context." },
      { title: "Response Layer", description: "A future workflow for location and emergency-notification integrations." },
    ],
    approach: ["Explore suitable video datasets and edge cases", "Prototype detection and temporal analysis", "Design a traceable incident record", "Evaluate alerts with human review and practical thresholds"],
    challenges: ["False positives in crowded scenes", "Camera angle and weather variation", "Distinguishing collisions from normal traffic events", "Responsible escalation and location reliability"],
    future: ["Severity-estimation research", "GPS/location integration", "Incident dashboard", "Evidence-storage workflow", "Measured performance evaluation"],
    statusNote: "Concept / in development. The components listed are proposed engineering directions and should not be interpreted as deployed emergency-response functionality.",
  },
  {
    slug: "localink",
    overview: "Localink is a web application concept for making local discovery more useful by bringing places, services, and opportunities into one focused experience.",
    solution: "The product direction combines location-aware browsing with structured categories and clear provider information. The goal is to reduce search friction while keeping discovery understandable and useful for both visitors and local providers.",
    architecture: [
      { title: "Discovery Layer", description: "Organizes local places and services into searchable, easy-to-scan categories." },
      { title: "Location Layer", description: "Uses a user's area or selected location to prioritize relevant results." },
      { title: "Provider Profiles", description: "Presents practical details that help users compare and decide with confidence." },
      { title: "Feedback Layer", description: "Creates a future path for reviews, saved places, and quality signals." },
    ],
    approach: ["Identify the most useful local discovery journeys", "Design simple search and category flows", "Model provider information consistently", "Validate relevance and trust through user feedback"],
    challenges: ["Keeping local information accurate", "Balancing discovery with useful filtering", "Building trust without overwhelming users", "Designing for different location and connectivity conditions"],
    future: ["Map-based browsing", "Provider onboarding workflow", "Saved places and personalized recommendations", "Verification and review controls"],
    statusNote: "Concept / in development. The architecture and features on this page describe the intended product direction, not a claim of deployed functionality.",
  },
  {
    slug: "portfolio-website",
    overview: "This portfolio website is a focused developer platform for presenting technical work, case studies, capabilities, and a clear way to start a project conversation.",
    solution: "The site uses structured project data and reusable Next.js sections so new work can be added consistently. Individual case-study routes provide more context than a project card alone, while the contact flow keeps inquiries close to the work they relate to.",
    architecture: [
      { title: "Content Model", description: "Centralizes profile, project, skill, service, and experience content in typed data modules." },
      { title: "Presentation Layer", description: "Uses reusable sections and UI components to keep the experience consistent across pages." },
      { title: "Case Study Routes", description: "Generates project detail pages from slugs and includes enabled studies in the sitemap." },
      { title: "Contact Endpoint", description: "Validates inquiries server-side and forwards them to a configured webhook." },
    ],
    approach: ["Define the information visitors need to evaluate the work", "Build reusable page and project components", "Keep claims and project status explicit", "Validate responsive behavior and production builds"],
    challenges: ["Showing enough technical depth without creating noise", "Keeping project content easy to maintain", "Making concept work distinct from shipped work", "Handling contact delivery without exposing credentials"],
    future: ["Add verified project links and live demos", "Add the downloadable resume asset", "Connect analytics with privacy-conscious defaults", "Add richer visuals for selected case studies"],
    statusNote: "Built and in active development. Project details should be updated as the portfolio and its featured work evolve.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
