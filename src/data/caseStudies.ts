export type ArchitectureBlock = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: "recall-ai" | "accident-detection";
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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
